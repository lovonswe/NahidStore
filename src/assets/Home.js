import React from 'react';
import '../style/HomeStyle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DashboardRow from '../components/DashboardRow';
import CardCarousel from '../components/CardCarousel';
//$navar-color: #ffd670;
function Home() {
    const collegeImage = "https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-450/Default/stores/chaldal/components/landingPage2/LandingPage/images/imageBanner.png?q=low&webp=1";
    const chaldalLogo = "https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-450/Default/components/header/Header/images/logo-small.png?q=low&webp=1&alpha=1";
    const products = [
        {
            id: '1',
            name: 'Mango 1',
            description: 'Fruit'
        },
        {
            id: '2',
            name: 'Mango 2',
            description: 'Fruit'
        },
        {
            id: '3',
            name: 'Mango 3',
            description: 'Fruit'
        },
        {
            id: '4',
            name: 'Mango 4',
            description: 'Fruit'
        },
        {
            id: '5',
            name: 'Mango 5',
            description: 'Fruit'
        },
        {
            id: '6',
            name: 'Mango 6',
            description: 'Fruit'
        },
        {
            id: '7',
            name: 'Mango 7',
            description: 'Fruit'
        },
        {
            id: '8',
            name: 'Mango 7',
            description: 'Fruit'
        },
        {
            id: '9',
            name: 'Mango 8',
            description: 'Fruit'
        },
        {
            id: '10',
            name: 'Mango 9',
            description: 'Fruit'
        },
        {
            id: '11',
            name: 'Mango 10',
            description: 'Fruit'
        },
        {
            id: '12',
            name: 'Mango 11',
            description: 'Fruit'
        },
        {
            id: '13',
            name: 'Mango 12',
            description: 'Fruit'
        },
        {
            id: '14',
            name: 'Mango 13',
            description: 'Fruit'
        },
        {
            id: '15',
            name: 'Mango 14',
            description: 'Fruit'
        },
        {
            id: '16',
            name: 'Mango 15',
            description: 'Fruit'
        },
        {
            id: '17',
            name: 'Mango 16',
            description: 'Fruit'
        },
        {
            id: '18',
            name: 'Mango 17',
            description: 'Fruit'
        },
        {
            id: '19',
            name: 'Mango 18',
            description: 'Fruit'
        },

    ]
    // const products = [];
    return (
        <>
            <div className='_root'>
                <div className='landing-banner'>
                    <div className='title-search'>
                        <div className='margin'>
                            <div className='moto'>
                                Grocery Delivered at your Doorstep
                            </div>
                            <div style={{ position: 'relative', width: '600px', marginTop:'30px' }}>
                                <input
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
                                />
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: '100px',
                                        transform: 'translateY(-50%)',
                                        color: '#888',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='collegeImageContainer'>
                        <img src={collegeImage} height={"437px"}/>
                    </div>
                </div>
                <DashboardRow />
                <div className='slider-container-wrapper'>
                    <div className='popular-categories'>
                        Popular Categories
                    </div>
                    <div className='slider-container'>
                    <CardCarousel products={products}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;