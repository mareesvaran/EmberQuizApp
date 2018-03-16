import Route from '@ember/routing/route';
import cookielogin from 'quiz/utils/cookielogin';
export default Route.extend({
    model(){
      var optarray = ["pistons","rockerarms","camshaft pulley","valve stems",
                      "brakeeffort","tractiveeffort","clutcheffort","noneofthese",
                      "spark ignition engines","compression ignition","steam engines","none of these",
                      "detonation","signition","pre-ignition","self-ignition",
                      "Carnot cycle","Stirling cycle","Otto cycle","Diesel cycle",
                      "low","very low","high","very high",
                      "analytical layout","synthetic layout","static product layout","none of these",
                      "flow chart","process chart","travel chart","operation chart",
                      "reversible cycle","irreversible cycle","thermodynamic cycle","non of these",
                      "Boyles law","Charleslaw","Gay-Lussac law","Avogadros law"
    ];
      var ansidarray = [2,6,9,15,20,22,27,31,35,37]
   this.get('store').push({
  data:[
    {
    id:1,
    type:'question',
    attributes:
      {
  		question:'1. The motion of the cam is transferred to the valves through',
  		option:["pistons","rockerarms","camshaft pulley","valve stems"],
  		answer:"rockerarms"
      }
	   },
    {
    id:2,
    type:'question',
    attributes:
      {
      question:'2. The torque available at the contact between driving wheels and road is known as',
      option:["brakeeffort","tractiveeffort","clutcheffort","noneofthese"],
      answer:'tractiveeffort'
      }
    },
    {
    id:3,
    type:'question',
    attributes:
      {
      question:'3. The petrol engines are also known as',
      option:["spark ignition engines","compression ignition","steam engines","none of these"],
      answer:'spark ignition engines'
      }
    },
    {
    id:4,
    type:'question',
    attributes:
      {
      question:'4. If the air-fuel mixture ignites before the spark takes place at spark plug, the condition is called',
      option:["detonation","signition","pre-ignition","self-ignition"],
      answer:'pre-ignition'
    }
    },
    {
    id:5,
    type:'question',
    attributes:
      {
      question:'5. A cycle consisting of one constant pressure, one constant volume and two isentropic processes is known as',
      option:["Carnot cycle","Stirling cycle","Otto cycle","Diesel cycle"],
      answer:'Diesel cycle'
      }
    },
    {
    id:6,
    type:'question',
    attributes:
      {
      question:'6. The efficiency and work ratio of a simple gas turbine cycle are',
      option:["low","very low","high","very high"],
      answer:'very low'
      }
    },
    {
    id:7,
    type:'question',
    attributes:
      {
      question:'7. Fixed position layout is also known as',
      option:["analytical layout","synthetic layout","static product layout","none of these"],
      answer:'static product layout'
      }
    },
    {
    id:8,
    type:'question',
    attributes:
      {
      question:'8. The chart which gives an estimate about the amount of materials handling between various work stations is known as',
      option:["flow chart","process chart","travel chart","operation chart"],
      answer:'travel chart'
      }
    },
    {
    id:9,
    type:'question',
    attributes:
      {
      question:'9. A series of operations, which takes place in a certain order and restore the initial conditions at the end, is known as',
      option:["reversible cycle","irreversible cycle","thermodynamic cycle","non of these"],
      answer:'thermodynamic cycle'
      }
    },
    {
    id:10,
    type:'question',
    attributes:
      {
      question:'10. An isothermal process is governed by',
      option:["Boyles law","Charleslaw","Gay-Lussac law","Avogadros law"],
      answer:'Boyles law'
      }
    }
]

});

var ans = [];
var ques = [];
var opt = [];
for(var i = 1 ; i <= 10 ; i++ ){
    var  a  = this.store.peekRecord("question",i).get("answer");
      ans.push(a);
    var b = this.store.peekRecord("question",i).get("question");
      ques.push(b);
  }

var opt= 0;
for (var i = 0; i < ans.length; i++) {
  var a = [];
  for (var j = 1; j <=4 ; j++) {
    opt++;
    a.push({
      id:opt,
      type:"quizoption"
    })

  }
  this.get('store').push({
    data:[{
      id:i+1,
      type:"quizquestion",
      attributes:{
        questions:ques[i],
        ccanswer:ansidarray[i]
      },
      relationships:{
        options:{
          data:a,
        canswer:{
          id:ansidarray[i],
          type:"quizoption"
        }
      }
    }
    }]
  });
}
var cans=-1;
  var count = 0;
for (var i = 0; i < ansidarray.length; i++) {
      count++;
  for (var j = 0; j < 4; j++) {
      cans++;
    this.get('store').push({
      data:[{
        id:cans+1,
        type:"quizoption",
        attributes:{
          option:optarray[cans]
        },
        relationships:{
          questions:{
            data:{
              id:count,
              type:"quizquestion"
            }
          }
        }
      }]
    });
  }
}
},
beforeModel(){
  var gc = cookielogin("login");
  if(gc == null){
    this.transitionTo("login");
  }
  else{
    this.transitionTo("home-quiz")
  }
}

})
