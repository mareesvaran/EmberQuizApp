import Route from '@ember/routing/route';

export default Route.extend({
    model(){
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
      option:["Boyles law","Charleslaw","Gay-Lussac law","Avogadros law"    ],
      answer:'Boyles law'
      }
    },
    {
    id:1,
    type:'register',
    attributes:
      {
      username:'Sudalaimani',
      password:"mani9344"
      }
    },
    {
    id:2,
    type:'register',
    attributes:
      {
      username:'Mareesvaran',
      password:"fast9344"
      }
    },
    {
    id:3,
    type:'register',
    attributes:
      {
      username:'Karthika',
      password:"love9344"
      }
     }
]

});
// return this.get('store').peekRecord('question',1);

    }
})
