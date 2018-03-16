import Route from '@ember/routing/route';
import Ember from 'ember';
export default Route.extend({
  model(data){
    return this.store.peekAll('register');
  }
});
