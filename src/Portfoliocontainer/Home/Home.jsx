import React from 'react';
import './Home.css';
import Profile from './Profile';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Home = (props) => {
    return (
        <div className='home-container' id={props.id || ""}>
            <Header />
            <Profile />
            <Footer />

        </div>
    )
}

export default Home