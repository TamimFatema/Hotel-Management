import React from "react";
import Hero from "../components/Hero";
import Banner from '../components/Banner/Banner'
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer"
const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="our rooms">
                    <Link to="/booknow" className='btn-primary'>
                        Book Now
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    )
};
export default Rooms;