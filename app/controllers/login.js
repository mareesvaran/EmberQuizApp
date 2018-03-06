import Controller from '@ember/controller';
import Ember from 'ember';
export default Controller.extend({
  actions : {
    login(){
      if($("#mail").val() != "" && $("#password").val() != ""){
      var name = $("#mail").val();
      var password = $("#password").val();
       var reglength = this.get('model.length');
      for(var i = 1 ; i <= reglength ; i++){
        if(this.store.peekRecord('register',i).get("username") == name && this.store.peekRecord('register',i).get("password") == password ){
          this.transitionToRoute('home-quiz');
          break;
        }
      }
      }
      else{
        alert("PLease Fill The UserName And Password");
      }
    },
    register(){
      if($("#mail").val() != "" && $("#password").val() != "" && $("#cpassword").val() != ""){
        if($("#password").val() == $("#cpassword").val()){
      var name = $("#mail").val();
      var password = $("#password").val();
      console.log( this.store.all('body').get('length')+" LENGTH");

      var username = this.store.peekRecord('register',3).gset("username");
      console.log("MANI "+username);
      // this.transitionToRoute('register');
       // document.getElementById("para").innerHTML = "";
        }
      }
      else{
        alert(" Please fill the Blank spaces !!...");
      }
    }
  }
});
