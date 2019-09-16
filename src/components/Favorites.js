import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Thumbnail from "./Thumbnail";
import "../styles/Global.css";
import "../styles/Grid.css";
import "../styles/Buttons.css";
import "../styles/Cards.css";
import "../styles/Forms.css";
import "../styles/Users.css";
import "../styles/Icons.css";
import "../styles/Cards.css";

class Favorites extends React.Component {
  state = {
    places: [
      {
        meta: "Entire Villa • 3 Rooms",
        hotel: "Luxury Villa Indu Siam",
        location: "Koh Samui, Thailand",
        price: "5 nights • $1,750 Total",
        reviews: "29 Reviews",
        dateClass: "date",
        date: "10 Aug 2020 - 15 Aug 2020"
      }
    ]
  };

  render() {
    return (
      <body>
        <Nav />
        <div className="grid medium">
          <div className="grid sidebar-left">
            <Sidebar favorites={"active"} />
            <div className="content">
              <h2>My Favorites</h2>
              <Thumbnail
                meta={this.state.places[0].meta}
                hotel={this.state.places[0].hotel}
                location={this.state.places[0].location}
                price={this.state.places[0].price}
                reviews={this.state.places[0].reviews}
              />
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Favorites;
