import React from "react";

import "../styles/Global.css";
import "../styles/Grid.css";
import "../styles/Buttons.css";
import "../styles/Cards.css";
import "../styles/Forms.css";

import axios from "axios";

class Signup extends React.Component {
  state = {
    user: {
      email: "",
      location: "",
      name: "",
      password: ""
    }
  };

  signup = e => {
    e.preventDefault();
    console.log("hello");
    axios
      .post(process.env.REACT_APP_API, this.state.user)
      .then(res => {
        console.log("res", res);
        localStorage.setItem("token", res.data);
        this.props.history.push({
          pathname: `/`
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  // signup method that sends the data typed in the signup form to the /signu
  changeField = (e, field) => {
    let user = this.state.user;
    user[field] = e.target.value;
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div className="grid center middle tall image">
        <div className="card small">
          <div className="content">
            <div
              className="logo"
              style={{
                backgroundImage: `url('/logo-airbnb.png')`
              }}
            >
              {" "}
            </div>{" "}
            <form onSubmit={this.signup}>
              <div className="group">
                <label> Name </label>

                <input
                  type="text"
                  value={this.state.user.name}
                  onChange={e => this.changeField(e, "name")}
                />
              </div>{" "}
              <div className="group">
                <label> Email </label>

                <input
                  type="text"
                  value={this.state.user.email}
                  onChange={e => this.changeField(e, "email")}
                />
              </div>{" "}
              <div className="group">
                <label> Password </label>

                <input
                  type="password"
                  value={this.state.user.password}
                  onChange={e => this.changeField(e, "password")}
                />
              </div>{" "}
              <div className="group">
                <label> Location </label>

                <input
                  type="text"
                  value={this.state.user.location}
                  onChange={e => this.changeField(e, "location")}
                />
              </div>{" "}
              <div className="group">
                <label> Profile Picture </label> <input type="file" />
              </div>{" "}
              <button className="primary"> Signup </button>{" "}
            </form>{" "}
            <p className="footer">
              Already have an account ? <a href=" "> Login </a>{" "}
            </p>
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Signup;
