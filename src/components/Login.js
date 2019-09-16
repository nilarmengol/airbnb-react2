import React from "react";
import "../styles/Global.css";
import "../styles/Grid.css";
import "../styles/Buttons.css";
import "../styles/Cards.css";
import "../styles/Forms.css";

class Login extends React.Component {
  // add state and
  // changeField

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
                <form>
                  <div class="group">
                    <label>Email</label>
                    <input type="email" />
                  </div>
                  <div class="group">
                    <label>Password</label>
                    <input type="password" />
                  </div>
                  <button class="primary">Login</button>
                </form>
                <p class="footer">
                  Already have an account? <a href=" ">Login</a>
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
