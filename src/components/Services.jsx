import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking , FaShuttleVan,FaWifi} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title: "Free CockTail",
                info: "Enjoy complimentary cocktail on us!\n Salud!"
            },
            {
                icon:<FaHiking/>,
                title: "Endless Hiking",
                info: "Take a hike, breathe in the fresh air, and enjoy the beauty of nature."
            },
            {
                icon:<FaShuttleVan/>,
                title: "Free Shuttle",
                info: "Enjoy free transportation with our complimentary shuttle service."
            },
            {
                icon:<FaWifi/>,
                title: "Unlimited Wifi",
                info: "Enjoy complimentary high-speed WiFi during your stay!"
            },

        ]
    }
    render() {
        return (
            <div className="container-fluid services">
             <Title title="Services" />
                <div className="row">
                   {this.state.services.map((item, index) => {
                      return(
                        <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                            <div className="card shadow-lg border-0 p-4">
                                <article className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>              
                           </div>
                        </div>
                      )
                   })}
                </div>
            </div>
        )
    }
}