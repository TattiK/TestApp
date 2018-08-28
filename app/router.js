import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('educational-programs');
  this.route('main-page', {path: '/'});
});

export default Router;
