import React from 'react'
import '../styles/Global.css'
import '../styles/Grid.css'
import '../styles/Buttons.css'
import '../styles/Users.css'
import '../styles/Icons.css'
import '../styles/Cards.css'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Thumbnail from './Thumbnail'


class Bookings extends React.Component {

	state = {
		places: [
			{
				meta: 'Entire Villa • 3 Rooms',
				hotel: 'Luxury Villa Indu Siam',
				location: 'Koh Samui, Thailand',
				price: '5 nights • $1,750 Total',
				reviews: '29 Reviews',
				dateClass: 'date',
				date: '10 Aug 2020 - 15 Aug 2020'
			},
			{
				meta: 'Entire Villa • 6 Rooms',
				hotel: 'Villa Kelusa',
				location: 'Bali, Indonesia',
				price: '3 nights • $190 Total',
				reviews: '18 Reviews',
				dateClass: 'date',
				date: '01 May 2019 - 04 May 2019'
			},
			{
				meta: 'Private Room',
				hotel: 'Tropical Architecture',
				location: 'Koh Samui, Thailand',
				price: '9 nights • $2,980 Total',
				reviews: '290 Reviews',
				dateClass: 'date',
				date: '18 Apr 2019 - 27 Apr 2019'
			},
			{
				meta: 'Entire Villa • 3 Rooms',
				hotel: 'Luxury Villa Indu Siam',
				location: 'Koh Samui, Thailand',
				price: '5 nights • $1,750 Total',
				reviews: '29 Reviews',
				dateClass: 'date',
				date: '10 Aug 2020 - 15 Aug 2020'
			},

		]
	}

	render() {

		return(
<body>

		<Nav/>
		<div className="grid medium">
			<div className="grid sidebar-left">
				<Sidebar bookings={'active'}/>
				<div className="content">

					<h2>Upcoming Trips</h2>
					<div className="grid two">
						<Thumbnail meta={this.state.places[0].meta} hotel={this.state.places[0].hotel} location={this.state.places[0].location} price={this.state.places[0].price} reviews={this.state.places[0].reviews} dateClass={this.state.places[0].dateClass} date={this.state.places[0].date} />
					</div>

					<h2>Past Trips</h2>
					<div className="grid two">
					<Thumbnail meta={this.state.places[1].meta} hotel={this.state.places[1].hotel} location={this.state.places[1].location} price={this.state.places[1].price} reviews={this.state.places[1].reviews} dateClass={this.state.places[1].dateClass} date={this.state.places[1].date} />
					<Thumbnail meta={this.state.places[2].meta} hotel={this.state.places[2].hotel} location={this.state.places[2].location} price={this.state.places[2].price} reviews={this.state.places[2].reviews} dateClass={this.state.places[2].dateClass} date={this.state.places[2].date} />
				</div>
			</div>
		</div>
	</div>
</body>
		)
	}
}

export default Bookings
