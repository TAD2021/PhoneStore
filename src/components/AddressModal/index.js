import { faCircleXmark, faClose, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import * as addressService from '~/services/addressService';
import styles from './AddressModal.module.scss';
const cx = classNames.bind(styles);

function AddressModal(props) {
    const [addresses, setAddresses] = useState([]);
    const [city, setCity] = useState();
    const [district, setDistrict] = useState();
    const [ward, setWard] = useState();
    const [showListAddress, setShowListAddress] = useState(0);

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);
    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleChangeSearch = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ') || searchValue.trim()) {
            setSearchValue(searchValue);
        }
    };

    const handleChangeCity = (e) => {
        if (city !== e.target.id) {
            setCity(e.target.id);
            setShowListAddress(1);
            setDistrict(null);
            setWard(null);
            handleClear();
        }
    };
    const handleChangeDistrist = (e) => {
        if (district !== e.target.id) {
            setDistrict(e.target.id);
            setShowListAddress(2);
            setWard(null);
            handleClear();
        }
    };
    const handleChangeWard = (e) => {
        if (ward !== e.target.value) {
            setWard(e.target.id);
            handleClear();
        }
    };

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            if (showListAddress === 0) {
                const result = await addressService.searchProvinces(debouncedValue);
                setSearchResult(result);
            } else if (showListAddress === 1) {
                const result = await addressService.searchDistrists(debouncedValue);

                let temp = result.slice(0).map((newResult) => newResult.name);
                let temp2 = addresses[city].districts
                    .slice(0)
                    .map((district) => temp.indexOf(district.name) !== -1 && district);
                setSearchResult(temp2);
            } else if (showListAddress === 2) {
                const result = await addressService.searchWards(debouncedValue);
                let temp = result.slice(0).map((newResult) => newResult.name);
                let temp2 = addresses[city].districts[district].wards
                    .slice(0)
                    .map((ward) => temp.indexOf(ward.name) !== -1 && ward);
                setSearchResult(temp2);
            }

            setLoading(false);
        };

        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    useEffect(() => {
        const getAddress = async () => {
            const result = await addressService.getAddress();
            setAddresses(result);
        };
        getAddress();
    }, []);

    useEffect(() => {
        ward &&
            props.callbackLocation(
                `${addresses[city].name}, ${addresses[city].districts[district].name}, ${addresses[city].districts[district].wards[ward].name}`,
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ward]);

    return (
        <div className={cx('modal')} onClick={() => props.callbackModal(false)}>
            <div className={cx('modal__overlay')}></div>
            <div className={cx('modal__body')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('wrapper')}>
                    <div className={cx('header')}>
                        <div className={cx('header_title')}>
                            {(showListAddress === 0 && 'Chọn Thành phố / Tỉnh') ||
                                (showListAddress === 1 && 'Chọn Quận / Huyện') ||
                                (showListAddress === 2 && 'Chọn Phường / Xã')}
                        </div>
                        <button className={cx('close_button')} onClick={() => props.callbackModal(false)}>
                            <FontAwesomeIcon icon={faClose} className={cx('close')} />
                        </button>
                    </div>
                    <div className={cx('body')}>
                        <div>
                            <div className={cx('navbar')}>
                                {city ? (
                                    <button className="text--blue" onClick={() => setShowListAddress(0)}>
                                        {addresses[city].name}
                                    </button>
                                ) : (
                                    <span>Thành phố / Tỉnh</span>
                                )}
                                {district ? (
                                    <button className="text--blue" onClick={() => setShowListAddress(1)}>
                                        {addresses[city].districts[district].name}
                                    </button>
                                ) : (
                                    city && <span>Quận / Huyện</span>
                                )}
                                {ward ? (
                                    <button className="text--blue" onClick={() => setShowListAddress(2)}>
                                        {addresses[city].districts[district].wards[ward].name}
                                    </button>
                                ) : (
                                    district && <span>Phường / Xã</span>
                                )}
                            </div>
                            <div className={cx('search')}>
                                <div className="text-field__wrapper">
                                    <span>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Tìm kiếm"
                                        ref={inputRef}
                                        value={searchValue}
                                        onChange={handleChangeSearch}
                                    />
                                    {!!searchValue && !loading && (
                                        <button className={cx('clear')} onClick={handleClear}>
                                            <FontAwesomeIcon icon={faCircleXmark} />
                                        </button>
                                    )}
                                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                                    <div></div>
                                </div>
                            </div>
                            <div className={cx('address_list')}>
                                {(showListAddress === 0 &&
                                    searchResult.length === 0 &&
                                    addresses.map((address, index) => (
                                        <button key={index} id={index} onClick={handleChangeCity}>
                                            {address.name}
                                        </button>
                                    ))) ||
                                    (showListAddress === 0 &&
                                        searchResult.map((address, index) => (
                                            <button
                                                key={index}
                                                id={addresses.map((item) => item.name).indexOf(address.name)}
                                                onClick={handleChangeCity}
                                            >
                                                {address.name}
                                            </button>
                                        )))}
                                {(searchResult.length === 0 &&
                                    showListAddress === 1 &&
                                    addresses[city].districts.map((district, index) => (
                                        <button key={index} id={index} onClick={handleChangeDistrist}>
                                            {district.name}
                                        </button>
                                    ))) ||
                                    (showListAddress === 1 &&
                                        searchResult.map(
                                            (address, index) =>
                                                address && (
                                                    <button
                                                        key={index}
                                                        id={addresses[city].districts
                                                            .map((item) => item.name)
                                                            .indexOf(address.name)}
                                                        onClick={handleChangeDistrist}
                                                    >
                                                        {address.name}
                                                    </button>
                                                ),
                                        ))}
                                {(searchResult.length === 0 &&
                                    showListAddress === 2 &&
                                    addresses[city].districts[district].wards.map((ward, index) => (
                                        <button key={index} id={index} onClick={handleChangeWard}>
                                            {ward.name}
                                        </button>
                                    ))) ||
                                    (showListAddress === 2 &&
                                        searchResult.map(
                                            (address, index) =>
                                                address && (
                                                    <button
                                                        key={index}
                                                        id={addresses[city].districts[district].wards
                                                            .map((item) => item.name)
                                                            .indexOf(address.name)}
                                                        onClick={handleChangeWard}
                                                    >
                                                        {address.name}
                                                    </button>
                                                ),
                                        ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddressModal;
