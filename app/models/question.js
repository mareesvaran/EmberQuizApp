import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('String'),
  option: DS.attr('String'),
  answer: DS.attr('String')
});
// App.question.reopenClass({
//     FIXTURES: [
//
//   ]
// });
//export default question;
// App.Documenter.reopenClass({
//   FIXTURES: [
//     { id: 1, question: 'The motion of the cam is transferred to the valves through"',
//     option: 'pistons,rockerarms,camshaft pulley,valve stems',
//     answer: ''
//     },
//     { id: 2, question: 'The motion of the cam is transferred to the valves through"',
//     option: 'brakeeffort,tractiveeffort,clutcheffort,noneofthese',
//     answer: ''
//     },
//     { id: 3, question: 'The motion of the cam is transferred to the valves through"',
//     option: 'spark ignition engines,compression ignition,steam engines,none of these',
//     answer: ''
//     },
//     { id: 4, question: 'The motion of the cam is transferred to the valves through"',
//     option: 'detonation,signition,pre-ignition,rumble,self-ignition',
//     answer: ''
//     },
//     { id: 5, question: 'The motion of the cam is transferred to the valves through"',
//     option: 'Carnot cycle,Stirling cycle,Otto cycle,Diesel cycle',
//     answer: ''
//     },
//     { id: 6, question: 'The motion of the cam is transferred to the valves through"',
//     option: 'low,very low,high,very high',
//     answer: ''
//     },
//     { id: 7, question: 'The motion of the cam is transferred to the valves through"',
//     option: 'analytical layout,synthetic layout,static product layout,none of these',
//     answer: ''
//     },
//     { id: 8, question: 'The motion of the cam is transferred to the valves through"',
//     option: 'flow chart,process chart,travel chart,operation chart',
//     answer: ''
//     },
//     { id: 9, question: 'The motion of the cam is transferred to the valves through"',
//     option: 'reversible cycle,irreversible cycle,thermodynamic cycle,non of these',
//     answer: ''
//     },
//     { id: 10, question: 'The motion of the cam is transferred to the valves through"',
//     option: 'Boyles law,Charleslaw,Gay-Lussac law",Avogadros law,Boyles law',
//     answer: ''
//     }
//   ]
// });
