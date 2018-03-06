import Route from '@ember/routing/route';

export default Route.extend({
  model(data){
    var qd = data['quiz_id'];
    if(data['quiz_id'] <= 10){
    // this.store.peekRecord('question',i)
    return this.store.peekRecord('question',data['quiz_id']);
  }
},

  setupController(controller, model) {
    this._super(controller, model);
    console.log(this._super(model)+" SET UP Controller");
    controller.set('title', 'Create a new library');
    controller.set('buttonLabel', 'Create');
  }
});
