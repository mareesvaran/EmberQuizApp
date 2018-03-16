import DS from 'ember-data';

export default DS.Model.extend({
  option:DS.attr("string"),
  quetions:DS.belongsTo(
    "quizquestion",{async:false},
    {inverse:"options"}
  )
});
