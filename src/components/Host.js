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

class Host extends React.Component {
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
      },
      {
        meta: "Entire Villa • 6 Rooms",
        hotel: "Villa Kelusa",
        location: "Bali, Indonesia",
        price: "3 nights • $190 Total",
        reviews: "18 Reviews",
        dateClass: "date",
        date: "01 May 2019 - 04 May 2019"
      }
    ]
  };

  render() {
    return (
      <body>
        <Nav />
        <div className="grid medium">
          <div className="grid sidebar-left">
            <Sidebar host={"active"} />
            <div className="content">
              <a class="button primary" href="create.html">
                Host new place
              </a>

              <hr />

              <h2>Places I'm hosting</h2>
              <div className="grid two">
                <Thumbnail
                  meta={this.state.places[0].meta}
                  hotel={this.state.places[0].hotel}
                  location={this.state.places[0].location}
                  price={this.state.places[0].price}
                  reviews={this.state.places[0].reviews}
                />

                <Thumbnail
                  meta={this.state.places[1].meta}
                  hotel={this.state.places[1].hotel}
                  location={this.state.places[1].location}
                  price={this.state.places[1].price}
                  reviews={this.state.places[1].reviews}
                />
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Host;
