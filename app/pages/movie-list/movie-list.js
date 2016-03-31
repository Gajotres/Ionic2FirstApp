import {Page, NavController} from 'ionic-angular';
import {MovieService} from '../services/MovieService';
import {MovieInfo} from '../movie-info/movie-info';
 
@Page({
  templateUrl: 'build/pages/movie-list/movie-list.html',
  providers: [MovieService]
})
 
export class MovieListPage {
  static get parameters() {
    return [[NavController], [MovieService]];
  }

  constructor(nav, movieService) {
    this.nav = nav;
    this.movieService = movieService;
  }
 
  searchMovieDB(event, key) {
    if(event.target.value.length > 2) {
      this.movieService.searchMovies(event.target.value).subscribe(
        data => {this.movies = data.results; console.log(data);},
        err => this.logError(err),
        () => console.log('Movie Search Complete')
      );
    }
  } 
 
  itemTapped(event, movie) {
    this.nav.push(MovieInfo, {
      movie: movie
    });
  }
}