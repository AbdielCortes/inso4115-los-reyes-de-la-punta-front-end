import React, { Component } from 'react'
import history from "../../Routing/history";
import "./Lawyer.css";
import Navbar from "../Navbar/Navbar"
import axios from "axios";
import jwt_decode from "jwt-decode";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { attorneys } from "./DummyData";


export class Lawyer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Juana",
            lastname: "Del Pueblo",
            rua: "12345678"
        };
        this.getAttorneyFromProps();
    }

    getAttorneyFromProps = (e) => {
        console.log(this.props.location.state.name);
        this.setState({ name: this.props.location.state.name });
        console.log(this.state.name);
    };

    render() {
        const { name, lastname, rua} = this.state;
        const values = { name, lastname, rua};
        return (
            <div className="Lawyer">
                <Navbar/>
                <Grid  justify="flex-start" alignItems="flex-start" xs={12} style={{background:'#388E8E'}}>
                    <Typography style={{ color:'#fff'}} variant="h4">
                        Name: {name}
                    </Typography>
                    <Typography style={{marginTop: '2%', color:'#fff'}} variant="h4">
                        Lastname: {lastname}
                    </Typography>
                    <Typography style={{marginTop: '2%', color:'#fff'}} variant="h4">
                        RUA: {rua}
                    </Typography>
                </Grid>
                <button className='start-button' onClick={() => history.push("/")}>
                    Start Consultation
                </button>
            </div>
        );
    }
}

export default Lawyer;
