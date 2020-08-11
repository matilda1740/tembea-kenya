import React, { Component } from 'react';
import data from '../../TourData';
import Tour from '../Tour/DisplayTour';
import Navbar from '../Navbar/Navbar';
import './tourlist.scss';

export default class Tourslist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tours: data
		};
	}

	render() {
		const tours = this.state.tours;
		return (
			<article className="tourlist">
				<h2>Tembea Kenya</h2>
				<hr />
				{tours.map((tour) => <Tour key={tour.id} details={tour} />)}
			</article>
		);
	}
}
