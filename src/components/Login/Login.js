import React, { Component } from 'react'
import history from "../../Routing/history";

export class Login extends Component {
    render() {
        return (
            <div>
                <p>login</p>
                <a href="" onClick={() => history.push("/")}>home</a>
            </div>
        )
    }
}

export default Login
