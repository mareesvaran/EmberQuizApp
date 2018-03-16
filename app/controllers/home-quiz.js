import Controller from '@ember/controller';
import cookielogin from 'quiz/utils/cookielogin';
  let pfname;
export default Controller.extend({
pfname: Ember.computed( function() {
   return pfname;
 }),
 deleteCookie: function( name, path, domain ) {
if(cookielogin(name)) {
  document.cookie = name + "=" +
    ((path) ? ";path="+path:"")+
    ((domain)?";domain="+domain:"") +
    ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
}
},
  init(){
      var gc = cookielogin("login");
      var gcp = JSON.parse(gc);
      pfname = gcp.username;
  },
  actions:{
   play : function (){

     if(this.get('optinc') == undefined){
        this.transitionToRoute('home-quiz.quiz',1);
        $("#play").css("display","none");
      }
    }
  }
});
