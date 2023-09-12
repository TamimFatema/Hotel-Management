import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Facility from '../components/Facilities'
export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="luxirious room" subtitle="delux rooms starting at 2500 tk only">
                    <Link to='/rooms' className='btn-primary'>Our Rooms</Link></Banner>
            </Hero>
            <Facility />
        </>
    )
}
