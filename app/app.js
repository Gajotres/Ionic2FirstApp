import 'es6-shim';
import {App, IonicApp, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {MovieListPage} from './pages/movie-list/movie-list';

@App({
  templateUrl: 'build/app.html',
  config: {}
})

class MyApp {
  static get parameters() {
    return [[IonicApp], [Platform]];
  }

  constructor(app, platform) {
    this.app = app;
    this.platform = platform;
    this.initializeApp();

    this.rootPage = MovieListPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}