import Ember from 'ember';
import semestr from '../models/semestr';
import educationProgramm from '../models/education-programm';

export default Ember.Route.extend({
  model(){
    var sem = semestr.create({
      id:1,
      attributes:{
        name:"Семестр 1"
      }
    })
    return [sem];
  }
});


