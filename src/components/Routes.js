import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup.js'
import Place from './Place'
import Confirm from './Confirm'
import Profile from './Profile'
import Bookings from './Bookings'
import Favorites from './Favorites'
import Host from './Host'
import Create from './Create'
import Places from './Places'


class Routes extends React.Component {

	//
	// chechAuth = () =>{
	// 	if (localStorage.getItem('token'))
	// }
render () {
  return (
    <BrowserRouter>
      <Switch>

        <Route path='/login' component={Login} />
        <Route path='/place/:id' component={Place} />
				<Route path='/confirm' component={Confirm} />
				<Route path='/signup' component={Signup} />
				<Route path='/profile' component={Profile} />
				<Route path='/bookings' component={Bookings} />
				<Route path='/favorites' component={Favorites} />
				<Route path='/host' component={Host} />
				<Route path='/create' component={Create} />
				<Route path='/' component={Places} />

      </Switch>
    </BrowserRouter>
  )
}
}

export default Routes
