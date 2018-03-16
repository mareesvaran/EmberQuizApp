import DS from 'ember-data';

export default DS.Model.extend({
  questions:DS.attr("String"),
  ccanswer:DS.attr("number"),
  options:DS.hasMany("quizoption",{
    async:false,
    inverse:"quetions"

  }),
  canswer:DS.belongsTo("quizoption",{
    async:false
  }),
  check:DS.attr("number")
});
