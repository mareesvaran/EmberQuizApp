import Controller from '@ember/controller';
import Ember from 'ember';
var idchange;
var score = 0;
var timeevent = 10;
export default Controller.extend({
  timer:function(){
    timeevent--;
  },
  cbstate:false,
  actions:{
    checkanswer (e){
    console.log(e.target.ischecked);
    if(e.target.checked){
      alert("checked")
    }
    else {
      alert("Un_Checked")
    }
  },
    answer(){
      idchange = this.model.id;
      var ques = this.store.peekRecord('question',idchange).get("option");
      var ans = this.store.peekRecord('question',idchange).get("answer");
      var answer = event.target.innerText;
      var checking = event.target.innerHTML; 
      this.store.peekRecord('question',idchange).set("check",answer);
        idchange++;
      if(ans == answer){
        score+=10;
      }
      this.transitionToRoute('home-quiz.quiz',idchange);
  },
  prev(){
    idchange = this.model.id;
    idchange--;
    this.transitionToRoute('home-quiz.quiz',idchange);
  },
  next(){
    if(idchange != 0){
    idchange = this.model.id;
    idchange++;
    this.transitionToRoute('home-quiz.quiz',idchange);
    }
  }
  }
});
