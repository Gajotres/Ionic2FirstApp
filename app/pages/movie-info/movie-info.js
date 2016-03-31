import {IonicApp, Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/movie-info/movie-info.html'
})

export class MovieInfo {
  static get parameters() {
    return [[IonicApp], [NavController], [NavParams]];
  }

  constructor(app, nav, navParams) {
    this.nav = nav;
    this.movie = navParams.get('movie'); 
    console.log(this.movie); 
  }
}
