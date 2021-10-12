
import { Component } from "react";

export class MovieItem extends Component {
    render() {
        return(
            <div>
                <h1>{this.props.movie.Title}</h1>
                <h3>{this.props.movie.Year}</h3>
                <p><img src={this.props.movie.Poster}/></p>
            </div>
        );
    }
}