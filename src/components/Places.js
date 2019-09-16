import React from "react";
import Nav from "./Nav";
import Thumbnail from "./Thumbnail";
import {Link} from "react-router-dom";
import axios from "axios";
import "../styles/Global.css";
import "../styles/Grid.css";
import "../styles/Buttons.css";
import "../styles/Cards.css";
import "../styles/Forms.css";
import "../styles/Users.css";
import "../styles/Icons.css";
import "../styles/Cards.css";

class Places extends React.Component {
  state = {
    places: []
  };

  gotoPlacePage = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: `/place/`,
      name: "Nil",
      color: "blue"
    });
  };

  componentWillMount() {
    console.log("test");
    axios
      .get(`${process.env.REACT_APP_API}/places`)
      .then(res => {
        console.log(res);
        this.setState({
          places: res.data
        });
        console.log(res.data);
      })
      .catch(err => {});
  }

  render() {
    return (
      <>
        <Nav />
        <div className="filters">
          <select>
            <option value="1">Rooms: 1</option>
            <option value="1">Rooms: 2</option>
            <option value="1">Rooms: 3</option>
            <option value="1">Rooms: 4</option>
            <option value="1">Rooms: 5</option>
            <option value="1">Rooms: 6</option>
            <option value="1">Rooms: 7</option>
            <option value="1">Rooms: 8</option>
            <option value="1">Rooms: 9</option>
            <option value="1">Rooms: 10</option>
          </select>
          <select>
            <option value="1">All Types</option>
            <option value="1">Entire Villa</option>
            <option value="1">Shared Villa</option>
            <option value="1">Entire House</option>
            <option value="1">Shared House</option>
            <option value="1">Private Room</option>
          </select>
          <input type="number" placeholder="max price" />
          <select>
            <option value="date">Latest</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
          <input type="text" className="search" placeholder="Search..." />
        </div>
        <div className="grid five large">
          {this.state.places.map((place, i) => {
            return (
              <Link key={i} to={`/place/${this.state.places[i]._id}`}>
                <Thumbnail key={i} place={place} />
              </Link>
            );
          })}
        </div>
      </>
    );
  }
}

export default Places;
