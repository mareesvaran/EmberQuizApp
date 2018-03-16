import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('String'),
  option: DS.attr('String'),
  answer: DS.attr('String'),
  check: DS.attr('String')
});
