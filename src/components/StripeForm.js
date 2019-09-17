import React from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import axios from 'axios'

class StripeForm extends React.Component {

	state = {
		succesfulPayment: false,
		failPayment: false
	}

	getToken = () =>  {
		this.props.stripe.createToken({}).then(res => {

			axios.post(`${process.env.REACT_APP_API}/pay`, {
				token: res.token.id,
				amount: this.props.amount,
				description: this.props.description
			})
			.then(data => {

				if (data) {

					let succesfulPayment = this.state.succesfulPayment
					let failPayment = this.state.failPayment
					failPayment = false
					succesfulPayment = true
					this.setState({
						succesfulPayment: succesfulPayment,
						failPayment: failPayment
					})
					setTimeout(() => {this.props.changePaymentCardState()}, 2000)
				} else {
					let failPayment = this.state.failPayment
					failPayment = true
					this.setState({failPayment})
				}
			})
	}).catch(err => {
		let failPayment = this.state.failPayment
		failPayment = true
		this.setState({failPayment})
	})
}


  render() {
    return (

			<>
			<CardElement />
						<button className="primary" onClick={this.getToken}>
						Pay
						</button>
						{
							this.state.succesfulPayment ?
							<p>Succesful payment!</p> : ''
						}
						{
							this.state.failPayment ?
								<p>Something went wrong, please try again</p> : ''
						}
</>
)}

}




export default injectStripe(StripeForm)
