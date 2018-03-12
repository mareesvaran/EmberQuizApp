import Controller from '@ember/controller';
let count = 0;
let score = 0;
let i = -1;
  var seconds;
  var timer;
  var timecount = 6;
  var hq;
  var pfname;
export default Controller.extend({
  getCookie: function(name) {
   var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
   return v ? v[2] : null;
},
pfname: Ember.computed( function() {
   return pfname;
 }),
  init(){
      var gc = this.getCookie("login");
      var gcp = JSON.parse(gc);
      pfname = gcp.username;
  },
  timer(){
    if(timecount > 0){
      timecount--;
      console.log(timecount+" is timecount");
    // document.getElementById("Qualitytime").innerHTML += "timecount";
      seconds = setTimeout(()=>{
        this.timer()
      },1000)
  }
  else{
    timecount = 6;
    // console.log("mari");
  }
  },
  actions:{
   play : function (){
   // if(count < 10){
   //   count++;
   $("#play").css("display","none");
   $("#skip").css("display","block");
   if(this.get('optinc') == undefined){
    // $("#play").css("display","none");
      this.transitionToRoute('home-quiz.quiz',1);
      // this.timer();
      //  this.store.peekRecord("question",count);
      //   timer = setTimeout(()=>{
      //   this.send('play')
      // },5000);
  }
    else{

      // this.timer();
        hq = this.get('optinc').id;
        count = parseInt(hq)+1;
        if(count <= 10){
       this.transitionToRoute('home-quiz.quiz',count);
        this.store.peekRecord("question",count);
       //   timer = setTimeout(()=>{
       //   this.send('play');
       // },5000);
     }
     else{
       this.transitionToRoute('result');
     }
    }
  },
  skip(){
     hq = this.get('optinc').id;
     count = parseInt(hq)+1;
     if(count <= 10){
    this.transitionToRoute('home-quiz.quiz',count);
  }
  else{
    this.transitionToRoute('result');
  }
}
}
});
