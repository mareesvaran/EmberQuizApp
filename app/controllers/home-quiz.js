import Controller from '@ember/controller';
let count = 0;
let score = 0;
let i = -1;
  var timecount = 16;
  var seconds;
  var timer;
export default Controller.extend({
  i:0,

  timer(){
    if(timecount > 1){
      timecount--;
      console.log(timecount+" is timecount");

    // document.getElementById("Qualitytime").innerHTML += "timecount";
      seconds = setTimeout(()=>{
        this.timer()
      },1000)
  }
  else{
    timecount = 17;
  }
  },
  actions:{
   play : function (){
   if(count < 10){
     count++;
    $("#play").css("display","none");
      this.transitionToRoute('home-quiz.quiz',count);
      this.timer();
        timer = setTimeout(()=>{
        this.send('play')
      },15000);
  }
    else{
      clearTimeout(timer);
      alert("Finished")
    }
  },
  skip(){
  this.send('play');
  clearTimeout(timer);
  clearTimeout(seconds);
  }
}
});
