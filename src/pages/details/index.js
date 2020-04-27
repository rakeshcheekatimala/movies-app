import React, { Component } from 'react';
import Youtube from 'react-youtube';
import moviesData from './../../components/UpcomingMoviesList/movies.json';
import Header from './../../components/Header';
import { Typography, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import starIcons from './staricons';
import './styles.css';
import { PINK, BLACK } from './../../styles/colors';

class Details extends Component {
	constructor() {
		super();
		this.state = {
			movie: {},
			starIcons
		}
	}

	componentWillMount() {
		let currentState = this.state;
		currentState.movie = moviesData.filter((mov) => {
			return mov.id === this.props.movieId
		})[0];
		this.setState({ currentState });
	}

	artistClickHandler = (url) => {
		window.open(url, '_blank');
	}

	onReady(event) {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	}
	startClickHander(id) {
		let starIconList = [];
		for (let star of this.state.starIcons) {
			let starNode = star;
			if (star.id <= id) {
				starNode.color = PINK;
			}
			else {
				starNode.color = BLACK;

			}
			starIconList.push(starNode);
		}
		this.setState({ starIcons: starIconList });
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
						<Typography><span className="bold">Rate this movie:</span></Typography>
						<div className="bold marginBottom16 marginTop16">
							<Typography>
								<span className="bold">Artists:</span>
							</Typography>
							{
								starIcons.map((star) => {
									return <StarIcon className="material-icons" style={{ fill: star.color }} value={star.value} key={`star__` + star.id} onClick={this.startClickHander.bind(this, star.id)} />
								})
							}
							<br /><br />
							<div className="paddingRight">
								<GridList cellHeight={160} cols={2}>
									{movie.artists != null && movie.artists.map(artist => (
										<GridListTile
											className="gridTile"
											onClick={() => this.artistClickHandler(artist.wiki_url)}
											key={artist.id}>
											<img src={artist.profile_url} alt={artist.first_name + " " + artist.last_name} />
											<GridListTileBar
												title={artist.first_name + " " + artist.last_name}
											/>
										</GridListTile>

									))}
								</GridList>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Details;