import React, { useState } from 'react';
import '../style/NavbarStyle.scss';
import Hamburger from 'hamburger-react'
import { Autocomplete, IconButton, Typography } from '@mui/material';
import EggIcon from '../assets/Microsoft-Fluentui-Emoji-3d-Egg-3d.512.png'
import CustomizedInputBase from './CustomizedInputBase';
import SearchComponent from './SearchComponent';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSidebarStore } from '../store/FlagStore';
import { NavLink, useNavigate } from 'react-router-dom';
import { useProductStore } from '../store/ProductStore';
import { usesearchedProductStore } from '../store/ProductStore';

function Navbar() {
    const [searchKey, setSearchKey] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const {products} = useProductStore();
    const {searchedProducts, updateSearchedProduct} = usesearchedProductStore();
    const navigate = useNavigate();
    const chaldalLogo = "https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-450/Default/components/header/Header/images/logo-small.png?q=low&webp=1&alpha=1";
    const { updateSidebarStatus } = useSidebarStore();
    const handleToggle = (e) => {
        updateSidebarStatus(!e);
    }

    const handleSearch = ()=> {
        const result = products.filter((product)=> {
            return product.productName.toLowerCase().includes(searchKey.toLowerCase()) ? true : false;
        })

        updateSearchedProduct(result);
        navigate('/search');
    }
    return (
        <div className='navbar'>
            <Hamburger onToggle={(e) => { handleToggle(e) }} />
            <NavLink to={"/"}>
                <IconButton>
                    <img src={chaldalLogo} height={"40px"} />
                </IconButton>
            </NavLink>
            <div className='input-container'>
                <input
                    className='input-x'
                    type="text"
                    style={{
                        width: '80%',
                        padding: '10px 30px 10px 10px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        fontSize: '16px',
                        //color: '#888',
                        outline: 'none', // Remove default focus outline
                    }}
                    placeholder="Search for products (e.g. eggs, milk, potato)"
                    onChange={(e) => setSearchKey(e.target.value)}
                    value={searchKey}
                />
                <FontAwesomeIcon
                    className='search-icon'
                    icon={faSearch}
                    style={{
                        position: 'absolute',
                        top: '45%',
                        right: '18%',
                        transform: 'translateY(-50%)',
                        color: '#888',

                    }}
                    cursor={'pointer'}
                    onClick={handleSearch}
                />
            </div>
            <div className='location'>
                <IconButton sx={{ color: '#ff4e56' }}>
                    <LocationOnOutlinedIcon />
                    <Typography>
                        Dhaka
                    </Typography>
                    <KeyboardArrowDownIcon />
                </IconButton>
            </div>
            <div className='login-button'>
                <IconButton >
                    <Typography sx={{ color: 'white', fontSize: '18px' }}>
                        Login
                    </Typography>
                </IconButton>
            </div>
        </div>
    )
}

export default Navbar