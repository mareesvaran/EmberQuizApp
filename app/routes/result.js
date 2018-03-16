import Route from '@ember/routing/route';
import cookielogin from 'quiz/utils/cookielogin';
export default Route.extend({
  beforeModel(){
    var gc = cookielogin("login");
    if(gc == null){
      this.transitionToRoute("login");
    }
  }
});
