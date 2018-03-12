import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('play');
  this.route('home-quiz',function() {
    this.route('quiz', { path: 'quiz/:quiz_id/question' });
  });
  this.route('register');
  this.route('result');
});

export default Router;

// ,{path:'/quiz/:quiz_id'}
