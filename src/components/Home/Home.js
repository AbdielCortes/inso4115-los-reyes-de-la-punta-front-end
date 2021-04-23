import React, { Component } from 'react'
import history from "../../Routing/history";
import Navbar from "../Navbar/Navbar"
import "./Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export class Home extends Component {
    state = {
        query: ""
    };

    // handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    // when the search button is pressed
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateFields()) {
        this.fetchCourses();
        } else {
        console.log("invalid fields");
        }
    }

    validateFields = () => {
        // if search bar is empty 
        if (this.state.query.length === 0) {
        return false;
        } else {
        return true;
        }
    };

    render() {
        const { query } = this.state;
        const values = { query }
        return (
            <>
                <Navbar/>
                <div className='start'>
                    <div className='search-bar'>
                        <form onSubmit={this.handleSubmit}>
                            <div className="search-container">
                            <input type="search"
                                placeholder="Search for attorneys"
                                onChange={this.handleChange("query")}
                                defaultValue={values.query}
                            />
                            <span onClick={this.handleSubmit}>
                                <span type="search-button">
                                <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                                </span>
                            </span>
                            </div>
                        </form>
                    </div>
                    <div className='start-text'>
                        Make your divorce a fast process!
                    </div>
                    <button className='start-button' onClick={() => history.push("/signup")}>Register for Free!</button>
                </div>

            </>
        )
    }
}

export default Home
