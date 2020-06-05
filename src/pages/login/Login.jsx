import React, { Component } from 'react'
import { MDBInput, MDBBtn } from 'mdbreact'
import { login } from 'ConnectorService/LoginService';

export class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {}

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        login(this.state.username, this.state.password).then(response => console.log(response))
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div style={{ height: "100vh" }} className={"w-100 bg-dark d-flex justify-content-center align-items-center"}>
                <form
                    className="bg-light rounded p-5"
                    onSubmit={this.handleSubmit}
                >
                    <h3 className="text-center pb-3">Login</h3>
                    <MDBInput
                        label="Username"
                        group
                        name="username"
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        containerClass={"mb-0"}
                        required
                    />
                    <div style={{ width: "250px" }}>
                        <MDBInput
                            label="Password"
                            group
                            type="password"
                            name="password"
                            validate
                            containerClass="mb-0"
                            required
                        />
                    </div>
                    <p className="font-small blue-text d-flex justify-content-end pb-3">
                        Forgot<a href="#!" className="blue-text ml-1">Password?</a>
                    </p>
                    <div className="text-center mb-3">
                        <MDBBtn
                            gradient="blue"
                            rounded
                            className="btn-block z-depth-1a"
                            type="submit"
                        >
                            Sign in
                        </MDBBtn>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
