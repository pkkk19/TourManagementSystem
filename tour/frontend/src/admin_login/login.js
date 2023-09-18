import React, { Component } from "react";
import styles from "./styles.css";
import { Form, Button } from "react-bootstrap";
import auth from "C:/Users/user/Desktop/TourManagementSystem/tour/frontend/src/Components/Login.js"




export default class login extends Component {

  state = {
    Credentials: {username: '', password: ''}
  }

  login = event => {

    if(this.state.Credentials.username==="admin"&&this.state.Credentials.password==="admin"){
    //this.auth.login();
    auth.Login();
    console.log(auth.islogedin());

   window.location.replace("http://localhost:3000/home");

    }

  }

  inputChanged = event => {
    const cred = this.state.Credentials;
    cred[event.target.name] = event.target.value;
    this.setState({Credentials: cred});
  }

  render() {
  localStorage.clear();
    return (
      <Form className="admin-form">
        <div className="box-mid">
        <h3>Admin Login</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control"
                    placeholder="Username" name="username"
                    value={this.state.Credentials.username}
                    onChange={this.inputChanged}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"
                    placeholder="Enter password" name="password"
                    value={this.state.Credentials.password}
                    onChange={this.inputChanged}/>
                </div>
                <div className="form-group">

                </div>
                <Button onClick={this.login} className="btn btn-dark btn-block">Login</Button>
        </div>


            </Form>

    );
  }
}