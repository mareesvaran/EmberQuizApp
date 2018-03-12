import Controller from '@ember/controller';
var score = 0;
var skip = 0;
var wronganswer;
var pfname;
export default Controller.extend({
  score: Ember.computed( function() {
     return score;
   }),
   skip: Ember.computed( function() {
      return skip;
    }),
    wronganswer: Ember.computed( function() {
       return wronganswer;
     })
   ,
   getCookie: function(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
 },
 pfname: Ember.computed( function() {
    return pfname;
  }),
   delete_cookie: function( name, path, domain ) {
  if( this.getCookie( name ) ) {
    document.cookie = name + "=" +
      ((path) ? ";path="+path:"")+
      ((domain)?";domain="+domain:"") +
      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
},
  init(){
    var a = document.getElementById("resscore");
    console.log(a+" Qulity");
    var qlength = this.store.peekAll("question").get('length');
    for(var i=1; i <= qlength ; i++){
    var answer = this.store.peekRecord('question',i).get("answer")
    var ans = this.store.peekRecord('question',i).get("check");
      if(answer == ans){
        score+=10;
      }
      else if (ans == undefined) {
        skip++;
      }
     wronganswer = qlength-((score/10)+skip);
     var gc = this.getCookie("login");
     var gcp = JSON.parse(gc);
     pfname = gcp.username;
  }
},
  actions:{
    playagain(){
      location.reload();
      this.transitionToRoute("home-quiz");
    },
    signout(){
      this.delete_cookie("login","/","localhost");
      this.transitionToRoute("login");
    }
  }
});
