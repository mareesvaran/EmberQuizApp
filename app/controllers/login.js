import Controller from '@ember/controller';
import Ember from 'ember';
import cookielogin from 'quiz/utils/cookielogin';
export default Controller.extend({
  actions:{
    register(){
      if(this.get("mail") != undefined && this.get("password") != undefined && this.get("cpassword") != undefined){
        if(this.get("password") == this.get("cpassword")){
          let name = this.get("mail");
          let password = this.get("password");
          let user = {
            username:name,
            password:password
          };
          let str = JSON.stringify(user);
        document.cookie = "login="+str+"";
          let gc = cookielogin("login");
          let gcp = JSON.parse(gc);
          let ml = this.get('model.length');
        document.location.reload(true);
          this.transitionToRoute('home-quiz');
        }
      }
    }
  }
});
