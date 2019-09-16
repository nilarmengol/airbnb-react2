import React from "react";

import "../styles/Cards.css";

class Thumbnail extends React.Component {
  render() {
    return (
      <div className="card link" href="place.html">
        <div
          className="image"
          style={{
            backgroundImage: `url(${this.props.place.image})`
          }}
        >
          <button className="icon"> {this.props.place.liked} </button>
        </div>
        <div className="content">
          <small className="meta">
            {this.props.place.type.name} • {this.props.place.bedrooms}
            ROOMS
          </small>
          <h2> {this.props.place.title} </h2>
          <small className="location">
            <i className="fas fa-map-marker-alt"> </i>
            <span>
              {this.props.place.city}, {this.props.place.country}
            </span>
          </small>
          <span className="price"> $ {this.props.place.price} </span>
          <span className="rating">
            <i className="far fa-star"> </i> <i className="far fa-star"> </i>
            <i className="far fa-star"> </i> <i className="far fa-star"> </i>
            <i className="far fa-star"> </i>
          </span>
          <span className={this.props.place.dateClass}>
            {this.props.place.date}
          </span>
        </div>
      </div>
    );
  }
}

export default Thumbnail;
