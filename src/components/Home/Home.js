import React, { Component } from 'react'
import history from "../../Routing/history";
export class Home extends Component {
    render() {
        return (
            <div>
                <p>algo</p>
                <a href="login" onClick={() => history.push("/login")}>login</a>
            </div>
        )
    }
}

export default Home
