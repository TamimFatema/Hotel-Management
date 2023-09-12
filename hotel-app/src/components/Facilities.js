import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
export default class Facility extends Component {
    state = {
        facilities: [
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
            <section className='facilities'>
                <Title title="facilities" />
                <div className='facilities-center'>
                    {this.state.facilities.map((item, index) => {
                        return <article key={index} className='facility'>
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
