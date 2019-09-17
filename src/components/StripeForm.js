import React from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import axios from 'axios'

class StripeForm extends React.Component {

	getToken = () =>  {
		this.props.stripe.createToken({}).then(res => {
			axios.post(`${process.env.REACT_APP_API}/pay`, {
				token: res.token.id,
				amount: this.props.amount,
				description: this.props.description
			})
			.catch(err => {console.log(err)})
		}).catch(err => {
			console.log(err)
			console.log('there is something wrong')
		})
	}




  render() {
    return (

			<>
			<CardElement />
						<button className="primary" onClick={this.getToken}>
						Pay
						</button>
</>
)}

}




export default injectStripe(StripeForm)
