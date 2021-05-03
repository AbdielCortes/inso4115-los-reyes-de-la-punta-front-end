import React, { Component } from 'react'
import history from "../../Routing/history";
import "./Lawyer.css";
import LawyerProfile from "./LawyerProfile";
import Navbar from "../Navbar/Navbar"
import axios from "axios";
import jwt_decode from "jwt-decode";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { attorneys } from "./DummyData";


export class Lawyer extends Component {
    state = {
        name: "",
        lastname: "",
        rua: ""
    };

    render() {
        return (
            <div className="Lawyer">
            <Navbar/>
                <Grid  justify="flex-start" alignItems="flex-start" xs={12} style={{background:'#388E8E'}}>
                    <Typography style={{ color:'#fff'}} variant="h4">
                        Name: 
                    </Typography>
                    <Typography style={{marginTop: '2%', color:'#fff'}} variant="h4">
                        Lastname: 
                    </Typography>
                    <Typography style={{marginTop: '2%', color:'#fff'}} variant="h4">
                        RUA: 
                    </Typography>
                </Grid>
            </div>
        );
    }
}

export default Lawyer;
