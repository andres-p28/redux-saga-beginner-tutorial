import React from 'react'
import ReactDOM from 'react-dom'

class Movie extends React.Component {
    constructor() {
        super();
    }

    render() {
        const movie = this.props.movie;

        return (
            <div className='movie'>
                <section className='movie--information'>
                    <h3>Title: {movie.title}</h3>
                    <h3>Year: {movie.year}</h3>
                    <h3>Rating: {movie.rating}</h3>
                </section>
                <button className='movie--button' onClick={this.props.handleClick}>Fetch movie</button>
            </div>
        );
    }
}

Movie.propTypes = {
    movie: PropTypes.shape({
        rating: PropTypes.number,
        title: PropTypes.string,
        year: PropTypes.number
    })
};

Movie.defaultProps = {
    movie: {}
};
