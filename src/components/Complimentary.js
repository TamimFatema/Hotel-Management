import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
export default class Complimentary extends Component {
    state = {
        complimentaries: [
            {
                icon: < FaCocktail />,
                Title: "free welcome drinks",
                info: "After a long tiresome journey a refreshing drink will make your tireness disappear instantly with out free welcome drink"

            },
            {
                icon: < FaHiking />,
                Title: "free welcome drinks",
                info: 'loremoodfbhoaidh'

            },
            {
                icon: < FaShuttleVan />,
                Title: "free welcome drinks",
                info: 'loremoodfbhoaidh'

            },
            {
                icon: <FaBeer />,
                Title: "free welcome drinks",
                info: 'loremoodfbhoaidh'

            }
        ]
    }

    render() {
        return (
            <section className='complimentaries'>
                <Title title="complimentaries" />
                <div className='complimentaries-center'>
                    {this.state.complimentaries.map((item, index) => {
                        return <article key={index} className='complimentary'>
                            <span>{item.icon}</span>
                            <h6>{item.Title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>

            </section>
        )
    }
}
