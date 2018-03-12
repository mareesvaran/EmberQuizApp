import Route from '@ember/routing/route';
import Ember from 'ember';
// import Cookies from 'ember-cli-js-cookie';
//
// const { RSVP } = Ember;

export default Route.extend({
  model(data){
    return this.store.peekAll('register');
  }
  // beforeModel() {
  //   if (!Cookies.get('logged-in')) {
  //     console.log(RSVP.reject());
  //     return RSVP.reject();
  //   }
  // }
});
