import React, { Component } from 'react'
import history from "../../Routing/history";
import Navbar from "../Navbar/Navbar"
import "./Home.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export class Home extends Component {
    state = {
        query: "",
        attorneys: [
            {name: "Fulano", id: "1"},
            {name: "Fulana", id: "2"},
            {name: "Juana", id: "3"},
            {name: "Juan", id: "4"}
        ],
        loading: false,
        isRevealedSearchResults: false
    };

    // handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    toggleSearchResults = (e) => {
        if (this.state.attorneys.length > 0) {
            this.setState({ 
                 isRevealedSearchResults: true 
            });
        } else {
            this.setState({ 
                isRevealedSearchResults: false 
            }); 
        }

    }

    // when the search button is pressed
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateFields()) {
            //this.fetchAttorneys();
            this.toggleSearchResults();
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
        const { query, attorneys, isRevealedSearchResults } = this.state;
        const values = { query, attorneys, isRevealedSearchResults }
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
                    {isRevealedSearchResults ? (
                        <ul type="attorneys" >
                            {attorneys.map(attorney => (
                                <Link key={attorney.id} to={{
                                pathname: "/attorney-profile",
                                state: attorney
                                }}>
                                <li key={attorney.id} className="list-group-item">
                                    {attorney.name}
                                </li>
                                </Link>
                            ))}
                        </ul>
                    ) : (
                        <div>
                            <div className='start-text'>
                                Make your divorce a fast process!
                            </div>
                            <button className='start-button' onClick={() => history.push("/signup")}>
                                Register for Free!
                            </button>
                        </div>
                    )}
                </div>

            </>
        )
    }
}

export default Home
