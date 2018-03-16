import Controller from '@ember/controller';
import cookielogin from 'quiz/utils/cookielogin';
var score = 0;
var skip = 0;
var wronganswer = 0;
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
     }),
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
    console.log(this.store.peekRecord("quizquestion",1).get("canswer"));
    let qs = this.store.peekAll("quizquestion");
    qs.forEach((q)=>{
      var answer = q.get("ccanswer");
      var ans = q.get("check");
        if(answer == ans){
          score+=10;
        } else if (ans == undefined) {
          skip++;
        }

       var gc = cookielogin("login");
       var gcp = JSON.parse(gc);
       pfname = gcp.username;
    })
    wronganswer = qs.get("length")-((score/10)+skip);
},
  actions:{
    playagain(){
      location.reload();
      this.transitionToRoute("home-quiz");
    },
    signout(){
      this.deleteCookie("login","/","localhost");
      this.transitionToRoute("login");
    }
  }
});
