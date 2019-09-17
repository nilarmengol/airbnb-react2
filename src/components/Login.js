import React from "react";
import "../styles/Global.css";
import "../styles/Grid.css";
import "../styles/Buttons.css";
import "../styles/Cards.css";
import "../styles/Forms.css";

import axios from "axios";

class Login extends React.Component {
  // add state and
  // changeField


state = {
	user: {
		email: '',
		password: ''
	}
}

	// signup = e => {
  // e.preventDefault();
	// if (
	// 	this.state.user.email !== "" &&
	// 	this.state.user.password !== "" &&
	// 	{
  //   axios
  //     .post(`${process.env.REACT_APP_API}/login`, this.state.user)
  //     .then(res => {
  //       console.log("res", res);
  //       localStorage.setItem("token", res.data);
  //       this.props.history.push({
  //         pathname: `/`
  //       });
  //     })
  //     .catch(err => {
  //       console.log("err", err);
  //     });
	// 	}


	changeField = (e, field) => {
		let user = this.state.user;
		user[field] = e.target.value;
		this.setState({
			user: user
		});
	};


  // res this props.history
  render() {
    return (
      <body>
        <div class="grid center middle tall image">
          <div class="card small">
            <div class="content">
              <div className="content">
                <div
                  class="logo"
                  style={{backgroundImage: `url('/logo-airbnb.png')`}}
                ></div>
                <form onSubmit={this.signup}>
                  <div class="group">
                    <label>Email</label>

										<input
											type="text"
											value={this.state.user.email}
											onChange={e => this.changeField(e, "email")}
										/>

                  </div>
                  <div class="group">
                    <label>Password</label>

										<input
											type="text"
											value={this.state.user.password}
											onChange={e => this.changeField(e, "password")}
										/>
                  </div>
                  <button class="primary">Login</button>
                </form>
                <p class="footer">
                  Already have an account? <a href=" ">Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}


export default Login;
