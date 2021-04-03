import React, { Component } from 'react'
import "../Login/Login.css";
import "../Login/LoginForm.css";
import "./SignUpForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export class SignUpForm extends Component {
    state = {
        isRevealedPassword: false,
        isRevealedConfirmPassword: false,
        isRevealedRua: false
    };
    
    togglePassword = (e) => {
        this.setState({ 
            isRevealedPassword: !this.state.isRevealedPassword 
        });
    };
    
    toggleConfirmPassword = (e) => {
        this.setState({
            isRevealedConfirmPassword: !this.state.isRevealedConfirmPassword,
        });
    };

    toggleRua = (e) => {
        this.setState({
            isRevealedRua: !this.state.isRevealedRua,
        });
    };
      
    render() {
        const { values, handleChange } = this.props;
        const { isRevealedPassword, isRevealedConfirmPassword, isRevealedRua } = this.state;

        return (
            <div>
                <form>
                    <div>
                        <p>I want to create an account as an attorney
                            <label class="switch">
                                <input type="checkbox"
                                onChange={handleChange("isAttorney")}
                                />
                                <span class="slider round" onClick={this.toggleRua}/>
                            </label>
                        </p>
                    </div>
                    <div className="input-container">
                        <input
                        type="firstName"
                        placeholder="first name"
                        onChange={handleChange("firstName")}
                        defaultValue={values.firstName}
                        />
                    </div>
                    <div className="input-container">
                        <input
                        type="LastName"
                        placeholder="last name"
                        onChange={handleChange("lastName")}
                        defaultValue={values.LastName}
                        />
                    </div>
                    {isRevealedRua ? (
                        <div className="input-container">
                            <input
                            type="rua"
                            placeholder="rua"
                            onChange={handleChange("rua")}
                            defaultValue={values.rua}
                            />
                        </div>
                    ) : (
                        <p className="nothing"></p>
                    )}
                    <div className="input-container">
                        <input
                        type="email"
                        placeholder="email"
                        onChange={handleChange("email")}
                        defaultValue={values.email}
                        />
                    </div>
                    <div className="input-container">
                        <input
                        type={isRevealedPassword ? "unhiddenPassword" : "password"}
                        placeholder="password"
                        onChange={handleChange("password")}
                        defaultValue={values.password}
                        />
                        <span onClick={this.togglePassword}>
                        <span>
                            {isRevealedPassword ? (
                            <FontAwesomeIcon icon={faEye} className="customIcon" />
                            ) : (
                            <FontAwesomeIcon icon={faEyeSlash} className="customIcon" />
                            )}
                        </span>
                        </span>
                    </div>
                    <div className="input-container">
                        <input
                        type={isRevealedConfirmPassword ? "unhiddenPassword" : "password"}
                        placeholder="confirm password"
                        onChange={handleChange("confirmPassword")}
                        defaultValue={values.confirmPassword}
                        />
                        <span onClick={this.toggleConfirmPassword}>
                        <span>
                            {isRevealedConfirmPassword ? (
                            <FontAwesomeIcon icon={faEye} className="customIcon" />
                            ) : (
                            <FontAwesomeIcon icon={faEyeSlash} className="customIcon" />
                            )}
                        </span>
                        </span>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUpForm
