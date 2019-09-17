import React from "react";
import Nav from "./Nav";
import moment from "moment";

import Thumbnail from "./Thumbnail";
import DatePicker from "react-datepicker";

class Confirm extends React.Component {
  state = {
    place: {
      images: [],
      amenities: [
        {
          name: "",
          icon: ""
        }
      ],
      bedrooms: "",
      city: "",
      country: "",
      description: "",
      guests: "",
      price: "",
      title: "",
      type: {
        name: ""
      },

      rating: "",
      created: "",
      image: "",
      reviews: ""
    },
    checkOut: "",
    checkIn: ""
  };

  goBack = e => {
    this.props.history.goBack();
  };

  componentWillMount() {
    this.setState({
      place: this.props.location.place,
      checkIn: this.props.location.checkIn,
      checkOut: this.props.location.checkOut,
      guests: this.props.location.guests,
      price: this.props.location.price
    });
  }

  handleChangeGuests = g => {
    this.setState({
      guests: g
    });
  };

  handleChangeCheckIn = date => {
    this.setState({
      checkIn: date
    });
  };

  handleChangeCheckOut = date => {
    this.setState({
      checkOut: date
    });
  };

	nights = () => {
			return moment(this.state.checkOut).diff(
				this.state.checkIn,
				"days"
			)
		}

		price = () => {
			return   this.state.price *
					moment(this.state.checkOut).diff(
						this.state.checkIn,
						"days"
					)
		}

  render() {
    return (
      <div>
        <div>{this.state.guests}</div>
        <Nav />
        <div className="grid medium">
          <div className="grid sidebar-left">
            <div className="sidebar">
              <Thumbnail place={this.state.place} />
            </div>
            <div className="content">
              <h2>Confirm Booking</h2>
              <form>
                <div className="group">
                  <label>From</label>
                  <DatePicker
                    placeholderText="Check-in"
                    selected={this.state.checkIn}
                    onChange={this.handleChangeCheckIn}
                  />
                </div>
                <div className="group">
                  <label>To</label>
                  <DatePicker
                    placeholderText="Check-out"
                    selected={this.state.checkOut}
                    onChange={this.handleChangeCheckOut}
                  />
                </div>
                <div className="group">
                  <label>Guests</label>
                  <select>
                    {[...Array(this.state.place.guests)].map((n, i) => (
                      <option
                        key={i}
                        value={i + 1}
                        selected={this.state.place.guests}
                        onChange={this.handleChangeGuests}
                      >
                        {i + 1} guest
                      </option>
                    ))}
                  </select>
                </div>
                <div className="group">
                  <label>{
                `Total: ${this.nights()} nights`}
                  </label>
                  <h2>
                    $
                    {this.price( )}
                  </h2>
                </div>
                <button className="primary">Confirm</button>
              </form>
              <hr />
              <button onClick={this.goBack}> Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
