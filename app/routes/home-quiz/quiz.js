import Route from '@ember/routing/route';

 export default Route.extend({
  model(data){
    var qd = data['quiz_id'];
    if(data['quiz_id'] <= 10){
    // this.store.peekRecord('question',i)
    return this.store.peekRecord('question',data['quiz_id']);
  }
  else{
      alert("Game Over")
  }
  }
});
