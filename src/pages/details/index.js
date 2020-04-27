import React, { Component } from 'react';
import Youtube from 'react-youtube';
import moviesData from './../../components/UpcomingMoviesList/movies.json';
import Header from './../../components/Header';
import Typography from '@material-ui/core/Typography';
import './styles.css';

class Details extends Component {
	constructor() {
		super();
		this.state = {
			movie: {}
		}
	}

	componentWillMount() {
		let currentState = this.state;
		currentState.movie = moviesData.filter((mov) => {
			return mov.id === this.props.movieId
		})[0];
		this.setState({ currentState });
	}
	onReady(event) {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	}
	render() {
		let movie = this.state.movie;
		const opts = {
			height: '300',
			maxWidth: '700',
			playerVars: {
				autoPlay: 1
			}
		}

		return (
			<div className="details">
				<Header />
				<div className="flex-containerDetails">
					<div className="leftDetails">
						<img src={movie.poster_url} alt={movie.title} />
					</div>
					<div className="middleDetails">
						<div>
							<Typography component="h2">{movie.title} </Typography>
						</div>
						<div>
							<Typography>
								<span className="bold">Genres: </span> {movie.genres.join(', ')}
							</Typography>
						</div>
						<div>
							<Typography><span className="bold">Duration:</span> {movie.duration} </Typography>
						</div>
						<div>
							<Typography><span className="bold">Release Date:</span> {new Date(movie.release_date).toDateString()} </Typography>
						</div>
						<div>
							<Typography><span className="bold"> Rating:</span> {movie.critics_rating}  </Typography>
						</div>
						<div className="marginTop16">
							<Typography><span className="bold">Plot:</span> <a href={movie.wiki_url}>(Wiki Link)</a> {movie.storyline} </Typography>
						</div>
						<div className="trailerContainer">
							<Youtube videoId={movie.trailer_url.split("?v=")[1]} opts={opts} onReady={this.onReady}>
								<Typography><span className="bold">Trailer:</span></Typography>
							</Youtube>
						</div>
					</div>
					<div className="rightDetails">

					</div>
				</div>
			</div>
		)
	}
}

export default Details;