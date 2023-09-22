import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Complimentary from '../components/Complimentary'
import FeaturedRooms from '../components/FeaturedRooms'
import StyledHero from '../components/StyledHero'

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="luxurious  room" subtitle="delux rooms starting at 2500 tk only">
                    <Link to='/rooms' className='btn-primary'>Our Rooms</Link></Banner>
            </Hero>
            <Complimentary />
            <FeaturedRooms />
        </>
    )
}
