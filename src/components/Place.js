import React from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "../styles/Global.css";
import "../styles/Grid.css";
import "../styles/Buttons.css";
import "../styles/Users.css";
import "../styles/Icons.css";
import "../styles/Gallery.css";
import "../styles/Icons.css";
import "../styles/Review.css";
import "../styles/Users.css";
import "../styles/Forms.css";
import "../styles/Filters.css";

import "react-datepicker/dist/react-datepicker.css";

import Nav from "./Nav";

class Place extends React.Component {
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
      guests: [],
      price: "",
      title: "",
      type: {
        name: ""
      },
      host: {
        avatar: "",
        email: "",
        location: "",
        name: ""
      },
      rating: "",
      created: "",
      image: "",
      reviews: "",
      review: [
        {
          rating: "",
          author: {
            avatar: "",
            email: "",
            location: "",
            name: ""
          },

          content: "",
          place: ""
        }
      ]
    },
    checkIn: "",
    checkOut: ""
  };

  confirm = e => {
    this.props.history.push({
      pathname: `/confirm`,
      place: this.state.place,
      checkIn: this.state.checkIn,
      checkOut: this.state.checkOut,
      guests: this.state.place.guests,
      price: this.state.place.price
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
  handleChangeGuests = e => {
    this.setState({
      guests: e.target.value
    });
  };



  componentWillMount() {
    console.log("this.props.location.name");
    axios
      .get(`${process.env.REACT_APP_API}/places/${this.props.match.params.id}`)
      .then(res => {
        console.log("res", res);
        console.log(res.data);
        this.setState({
          place: res.data
        });
        console.log(res.data);
      })
      .catch(err => {});
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="gallery">
          <div
            className="image-main"
            style={{backgroundImage: `url(${this.state.place.image})`}}
          >
            <button className="icon">
              <i className="far fa-heart"></i>
            </button>
          </div>
          <div className="thumbnails">
            {this.state.place.images.map((img, i) => {
              return (
                <div
                  key={i}
                  className="thumbnail "
                  style={{backgroundImage: `url(${img})`}}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="grid medium">
          <div className="grid sidebar-right">
            <div className="content">
              <h1>{this.state.place.title}</h1>
              <small>
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  {this.state.place.city}, {this.state.place.country}
                </span>
              </small>
              <div className="user">
                <div
                  className="avatar"
                  style={{
                    backgroundImage: `url(${this.state.place.host.avatar})`
                  }}
                ></div>
                <div className="name">
                  <small>Hosted by</small>
                  <span>{this.state.place.host.name}</span>
                </div>
              </div>
              <div className="card specs">
                <div className="content">
                  <ul className="grid two">
                    <li>
                      <i className="fas fa-fw fa-home"></i>
                      {this.state.place.type.name}
                    </li>
                    <li>
                      <i className="fas fa-fw fa-user-friends"></i>
                      {this.state.place.guests} guests
                    </li>
                    <li>
                      <i className="fas fa-fw fa-bed"></i>
                      {this.state.place.bedrooms} bedrooms
                    </li>
                    <li>
                      <i className="fas fa-fw fa-bath"></i>6 baths
                    </li>
                  </ul>
                </div>
              </div>
              <p>{this.state.place.description}</p>
              <h3>Amenities</h3>
              <div className="card specs">
                <div className="content">
                  <ul className="grid two">
                    {this.state.place.amenities.map((a, i) => {
                      return (
                        <li key={i}>
                          <i key={i} className={a.icon}></i>
                          {a.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="reviews">
                <h2>{this.state.place.reviews} Reviews</h2>
                <form>
                  <div className="group">
                    <label>Leave a review</label>
                    <textarea></textarea>
                    <div className="rating">
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <button className="primary small">Submit</button>
                  </div>
                </form>
                {this.state.place.review.map((review, i) => {
                  return (
                    <div key={i} className="card review">
                      <div className="content">
                        <div className="user">
                          <div
                            className="avatar"
                            style={{
                              backgroundImage: `url(${review.author.avatar})`
                            }}
                          ></div>
                          <div className="name">
                            <small>{review.author.date}</small>
                            <span>{review.author.name.split(" ")[0]}</span>
                          </div>
                        </div>
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <p>{review.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="sidebar booking">
              <div className="card shadow">
                <div className="content large">
                  <h3>
                    ${this.state.place.price}
                    <small>per night</small>
                  </h3>
                  <small>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <span>{this.state.place.reviews} Reviews</span>
                  </small>
                  <form className="small">
                    <div className="group">
                      <label>Dates</label>
                      <DatePicker
                        placeholderText="Check-in"
                        selected={this.state.checkIn}
                        onChange={this.handleChangeCheckIn}
                      />
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
						                            // selected={this.state.place.guests}
						                            onChange={this.handleChangeGuests}>
						                            {i + 1} guest
						                          </option>
						                        ))}
					                      </select>
                    </div>
                    <div className="group">
                      <button
                        disabled={!this.state.checkIn || !this.state.checkOut}
                        onClick={this.confirm}
                        className="secondary full"
                      >
                        Book this place
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Place;
