import React from 'react'
import '../styles/Sidebar.css'

class Sidebar extends React.Component {



render() {

	return(




				<div class="sidebar">
					<ul>
						<li className={this.props.profile}>
							<a href="profile.html">Profile</a>
						</li>
						<li className={this.props.bookings}>
							<a href="bookings.html">Bookings</a>
						</li>
						<li className={this.props.favorites}>
							<a href="favorites.html">Favorites</a>
						</li>
						<li className={this.props.host}>
							<a href="host.html">Host</a>
						</li>
					</ul>
				</div>




	)
}

}

export default Sidebar
