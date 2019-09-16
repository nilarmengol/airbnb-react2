import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import "../styles/Global.css";
import "../styles/Grid.css";
import "../styles/Buttons.css";
import "../styles/Cards.css";
import "../styles/Forms.css";
import "../styles/Users.css";

class Create extends React.Component {
  render() {
    return (
      <body>
        <Nav />
        <div className="grid medium">
          <div className="grid sidebar-left">
            <Sidebar host={"active"} />
            <div className="content">
              <h2>Host a new place</h2>

              <form>
                <div class="group">
                  <label>Title</label>
                  <input type="text" />
                </div>
                <div class="group">
                  <label>Description</label>
                  <textarea></textarea>
                </div>
                <div class="group">
                  <label>City or Town</label>
                  <input type="text" />
                </div>
                <div class="group">
                  <label>Country</label>
                  <input type="text" />
                </div>
                <div class="group">
                  <label>Price per Night (USD)</label>
                  <input type="number" />
                </div>
                <div class="group">
                  <label>Type</label>
                  <select>
                    <option>Entire Villa</option>
                    <option>Entire House</option>
                    <option>Entire Apartment</option>
                    <option>Private Room</option>
                    <option>Shared Villa</option>
                    <option>Shared House</option>
                    <option>Shared Apartment</option>
                  </select>
                </div>
                <div class="group">
                  <label>Number of Rooms</label>
                  <input type="number" />
                </div>
                <div class="group">
                  <label>Number of Bathrooms</label>
                  <input type="number" />
                </div>
                <div class="group">
                  <label>Maximum number of Guests</label>
                  <input type="number" />
                </div>
                <div class="group">
                  <label>Upload Photos</label>
                  <input type="file" multiple />
                </div>
                <div class="group">
                  <label>Amenities</label>
                  <label class="checkbox">
                    <input type="checkbox" /> Swimming Pool
                  </label>
                  <label class="checkbox">
                    <input type="checkbox/" /> Kitchen
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" /> Wi-Fi
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" /> TV
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" /> Gym
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" /> Iron
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" /> Air Conditioning
                  </label>
                </div>
                <button class="primary">Publish this Place</button>
                <button class="cancel">
                  <i class="fas fa-times"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Create;
