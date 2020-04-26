import React, { Component } from 'react';
import './styles.scss';
import { withStyles } from '@material-ui/core/styles';
import moviesData from './movies.json';
import { GridList, GridListTile, GridListTileBar, CardContent, Card, FormControl, Typography, InputLabel, Input, Select, Checkbox, ListItemText, MenuItem } from '@material-ui/core';
import genres from './genres';
import artists from './artists';
const styles = theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper
	},

	gridListUpcomingMovies: {
		flexWrap: 'nowrap',
		transform: 'translateZ(0)',
		width: '100%'
	},
	gridListMain: {
		transform: 'translateZ(0)',
		cursor: 'pointer'
	},
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 240,
		maxWidth: 240
	}
});

class Home extends Component {
	constructor() {
		super();
		this.state = {
			movieName: '',
			genres: [],
			artists: []
		}
	}
	onChangeHandler = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	genreSelectHandler = event => {
		this.setState({ genres: event.target.value });
	}

	artistSelectHandler = event => {
		this.setState({ artists: event.target.value });
	}

	render() {
		const { classes } = this.props;
		return (
			<div>
				<GridList cols={5} className={classes.gridListUpcomingMovies} >
					{moviesData.map(movie => (
						<GridListTile key={movie.id}>
							<img src={movie.poster_url} alt={movie.title} />
							<GridListTileBar title={movie.title} />
						</GridListTile>
					))}
				</GridList>
				<div className="flex-container">
					<div className="left">
						<GridList cellHeight={350} cols={4} className={classes.gridListMain} >
							{moviesData.map(movie => (
								<GridListTile className="released-movie-grid-item" key={"grid" + movie.id}>
									<img src={movie.poster_url} className="movie-poster" alt={movie.title} />
									<GridListTileBar
										title={movie.title}
										subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}
									/>
								</GridListTile>
							))}
						</GridList>
					</div>
					<div className="right">
						<Card>
							<CardContent>
								<FormControl className={classes.formControl}>
									<Typography className={classes.title} color="secondary">
										FIND MOVIES BY:
                  </Typography>
								</FormControl>
								<br /><br />
								<FormControl className={classes.formControl}>
									<InputLabel htmlFor="movieName">
										Movie Name
                  </InputLabel>
									<Input id="movieName" name="movieName" onChange={this.onChangeHandler} defaultValue={this.state.movieName} />
								</FormControl>
								<FormControl className={classes.formControl}>
									<InputLabel htmlFor="select-multiple-checkbox">
										Genres
									</InputLabel>
									<Select
										multiple
										input={<Input id="select-multiple-checkbox" />}
										renderValue={selected => selected.join(',')}
										value={this.state.genres}
										onChange={this.genreSelectHandler}
									>
										<MenuItem value="0">None</MenuItem>
										{genres.map(genre => (
											<MenuItem key={genre.id} value={genre.name}>
												<Checkbox checked={this.state.genres.indexOf(genre.name) > -1} />
												<ListItemText primary={genre.name} />
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<FormControl className={classes.formControl}>
									<InputLabel htmlFor="select-multiple-checkbox">Artists</InputLabel>
									<Select
										multiple
										input={<Input id="select-multiple-checkbox" />}
										renderValue={selected => selected.join(',')}
										value={this.state.artists}
										onChange={this.artistSelectHandler}
									>
										<MenuItem value="0">None</MenuItem>
										{artists.map(artist => (
											<MenuItem key={artist.id} value={artist.first_name + " " + artist.last_name}>
												<Checkbox checked={this.state.artists.indexOf(artist.first_name + " " + artist.last_name) > -1} />
												<ListItemText primary={artist.first_name + " " + artist.last_name} />
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Home);
