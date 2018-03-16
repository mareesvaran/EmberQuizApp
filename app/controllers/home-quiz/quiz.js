import Controller from '@ember/controller';
import Ember from 'ember';
var idchange=0;
export default Controller.extend({
  actions:{
    answer(option){
      idchange = parseInt(this.model.id);
      var anss=option.get('id');
      let ques = this.store.peekRecord('question',idchange).get("option");
      let ans = this.store.peekRecord('question',idchange).get("answer");
      let answer = event.target.innerText;
      let checking = event.target.innerHTML; 
      this.store.peekRecord('quizquestion',idchange).set("check",anss);
        idchange++;
      this.transitionToRoute('home-quiz.quiz',idchange);
  },
    prev(){
    if(idchange != undefined && idchange != 0 && idchange != 1){
      idchange = parseInt(this.model.id);
      idchange--;
      this.transitionToRoute('home-quiz.quiz',idchange);
    }
  },
  next(){
    idchange = parseInt(this.model.id);
    idchange++;
    this.transitionToRoute('home-quiz.quiz',idchange);
  }
  }
});
