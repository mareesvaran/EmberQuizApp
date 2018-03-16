import Route from '@ember/routing/route';
import cookielogin from 'quiz/utils/cookielogin';
export default Route.extend({
  getCookie(name) {
   let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
   return v ? v[2] : null;
},
beforeModel(){
  let gc = cookielogin("login");
  if(gc == null || gc == ""){
    this.transitionToRoute("login");
  }
},
  model(data){
    let qd = data['quiz_id'];
    if(data['quiz_id'] <= 10){
    return this.store.peekRecord('question',data['quiz_id']);
  }
}
});
