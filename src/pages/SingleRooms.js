import React, { Component, useContext } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import { useParams } from "react-router-dom";
import StyledHero from '../components/StyledHero'


function SingleRooms() {
    const { roomID } = useParams();

    const contextType = useContext(RoomContext);
    const room = contextType.getRoom(roomID);
    if (!room) {
        return (
            <div className='error'>
                <h3>No such room was found...</h3>
                <Link to="/rooms" className='btn-primary'>Back to Rooms</Link>
            </div>
        );
    }
    const { name, description, capacity, price, breakfast, extras, images } = room;
    const [mainImg, ...defaultImg] = images;
    return (
        <>
            <StyledHero img={images[0] || this.state.defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'>Back to Rooms</Link>
                </Banner>
            </StyledHero>
            <section className='single-room'>
                <div className='single-room-images'>
                    {images.map((item, index) => {
                        return <img key={index} src={item} alt={name} />
                    })}
                </div>
                <div className='single-room-info'>
                    <article className='desc'>
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className='info'>
                        <h3>info</h3>
                        <h6>price: {price}tk</h6>
                        <h6>
                            max capacity:{" "}
                            {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                        </h6>
                        <h6>{breakfast && "free breakfast include"}</h6>
                    </article>
                </div>
            </section>
            <section className='room-extras'>
                <h6>Extras</h6>
                <ul className='extras'>
                    {extras.map((item, index) => {
                        return <li key={index}> - {item}</li>
                    })
                    }
                </ul>
            </section >
        </>
    )
}

export default SingleRooms
