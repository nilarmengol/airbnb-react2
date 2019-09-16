import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import "../styles/Global.css";
import "../styles/Grid.css";
import "../styles/Buttons.css";
import "../styles/Cards.css";
import "../styles/Forms.css";
import "../styles/Users.css";
import "../styles/Icons.css";
import "../styles/Cards.css";

class Profile extends React.Component {
  changeValue = (e, field) => {
    let user = this.state.value;
    user[field] = e.target.value;
    this.setState({user});
  };
  render() {
    return (
      <body>
        <Nav />
        <div className="grid medium">
          <div className="grid sidebar-left">
            <Sidebar profile={"active"} />
            <div className="content">
              <h2>My Profile</h2>
              <form>
                <div className="group">
                  <label>Name</label>
                  <input type="text" value="Tony" />
                </div>
                <div className="group">
                  <label>Email</label>
                  <input type="email" value="tony@tortugacoders.com" />
                </div>
                <div className="group">
                  <label>Location</label>
                  <input type="text" value="Thailand" />
                </div>
                <div className="group">
                  <label>Profile Picture</label>
                  <div className="user">
                    <div
                      className="avatar"
                      style={{
                        backgroundImage:
                          "url(https://randomuser.me/api/portraits/men/9.jpg)"
                      }}
                    ></div>
                    <div className="name">
                      <input type="file" />
                    </div>
                  </div>
                </div>
                <button>Save Changes</button>
              </form>
              <hr />
              <button className="secondary">Logout</button>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Profile;
