import React, { Component } from 'react';
import './styles.scss';
import { withStyles } from '@material-ui/core/styles';
import moviesData from './movies.json';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper
	},

	gridListUpcomingMovies: {
		flexWrap: 'nowrap',
		transform: 'translateZ(0)',
		width: '100%'
	}
});

class Home extends Component {
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
			</div>
		)
	}
}

export default withStyles(styles)(Home);
