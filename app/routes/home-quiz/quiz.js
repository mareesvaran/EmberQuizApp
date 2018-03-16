import Route from '@ember/routing/route';

 export default Route.extend({
  model(data){
    let qd = data['quiz_id'];
    if(data['quiz_id'] <= 10){
    return this.store.peekRecord('quizquestion',data['quiz_id']);
  }
  else{
    this.transitionTo('result');
  }
},
setupController(controller, model) {
  this.controllerFor('home-quiz').set('optinc', model);
  return this._super.apply(this,arguments);
}
});
