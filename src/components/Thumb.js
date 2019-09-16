import React from 'react'

import '../styles/Cards.css'

class Thumbnail extends React.Component {


	render() {
		return(

					<a class="card link" href="place.html">
					<div className="image" style={{backgroundImage: this.props.place.image}}>
						<button className="icon">
							{this.props.place.liked}
						</button>
					</div>
					<div className="content">
						<small className="meta">{this.props.place.meta}</small>
						<h2>{this.props.place.hotel}</h2>
						<small className="location">
							<i className="fas fa-map-marker-alt"></i>
							<span>{this.props.place.location}</span>
						</small>
						<span className="price">{this.props.place.price}/per night</span>
						<span className="rating">
						{this.props.place.rating}
							<span>{this.props.place.review}</span>
						</span>
						<span className={this.props.place.dateClass}>{this.props.place.date}</span>
					</div>
				</a>


		)
	}
}


export default Thumbnail
