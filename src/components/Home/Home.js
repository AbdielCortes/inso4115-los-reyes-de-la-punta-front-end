import React, { Component } from 'react'
import history from "../../Routing/history";
import Navbar from "../Navbar/Navbar"
import "./Home.css"

export class Home extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <div className='start'>
                    <div className='start-text'>
                        Make your divorce a fast process!
                    </div>
                    <button className='start-button'></button>
                    <div className='start-button-text'>Register for Free!</div>
                </div>

            </>
        )
    }
}

export default Home
