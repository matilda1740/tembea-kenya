import React, { Component } from 'react';
import './tour.scss';
export default class DisplayTour extends Component {
	state = {
		showInfo: false
	};

	moreInfo = () => {
		const showInfo = this.state.showInfo;
		this.setState({ showInfo: !showInfo });
	};

	render() {
		const { id, place, img, offer, info } = this.props.details;
		const { moreInfo } = this.props;
		let Information;
		// console.log(this.state);
		if (this.state.showInfo) {
			Information = <p>{info}</p>;
		}
		return (
			<div className="tour">
				<h3>{place}</h3>
				<img className="img" src={img} alt="" />
				<h4>Offer: {offer}</h4>
				<button className="btn" onClick={this.moreInfo}>
					More Info
				</button>
				{Information}
			</div>
		);
	}
}
