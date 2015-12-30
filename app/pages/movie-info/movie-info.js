import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/movie-info/movie-info.html'
})

export class MovieInfo {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;
    this.movie = navParams.get('movie'); 
    console.log(this.movie); 
  }
}
