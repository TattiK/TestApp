import DS from 'ember-data';

export default DS.Model.extend({
	name:DS.attr('string'),
	dateStart:DS.attr('date'),
  dateFinish:DS.attr('date'),
  EPs: DS.hasMany('education-programm')
});
