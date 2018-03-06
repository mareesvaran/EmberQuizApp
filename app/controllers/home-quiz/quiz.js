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
  // ischecked:boolean = false,
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
      if(ans == answer){
        alert("Answer is correct");
        idchange++;
        this.transitionToRoute('home-quiz.quiz',idchange);
      }
      else{
        alert("Answer is Wrong")
      }

  }
  }
});
