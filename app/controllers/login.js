import Controller from '@ember/controller';
import Ember from 'ember';
var loginjson = [

];
export default Controller.extend({
   getCookie: function(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
},
  actions:{
    register(){
      if($("#mail").val() != "" && $("#password").val() != "" && $("#cpassword").val() != ""){
        if($("#password").val() == $("#cpassword").val()){
          var name = $("#mail").val(); 
          var password = $("#password").val();
          var user = {
            username:name,
            password:password
          }
          loginjson.push(user);
          var str = JSON.stringify(user);
        document.cookie = "login="+str+"";
          var gc = this.getCookie("login");
          var gcp = JSON.parse(gc);
      var name = $("#mail").val();
      var password = $("#password").val();
      var ml = this.get('model.length');
        this.store.push({
        data:[
          {
          id:ml+1,
          type:'register',
          attributes:
            {
            username:name,
            password:password
            }
           }
        ]});

        document.location.reload(true);
          this.transitionToRoute('home-quiz');
      // this.transitionToRoute('register');
       // document.getElementById("para").innerHTML = "";
        }
      }
      else{
        // alert(" Please fill the Blank spaces !!...");
      }
    }
  }
});
