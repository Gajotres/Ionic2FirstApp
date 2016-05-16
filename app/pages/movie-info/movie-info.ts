import {IonicApp, Page, NavController, NavParams} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/movie-info/movie-info.html'
})

export class MovieInfo {

    private movie: any;

    constructor(private app: IonicApp, private nav: NavController, private navParams: NavParams) {
        this.nav = nav;
        this.movie = navParams.get('movie');
        console.log(this.movie);
    }
}
