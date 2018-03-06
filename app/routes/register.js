import Route from '@ember/routing/route';

export default Route.extend({
  model(){
 this.get('store').push({
data:[
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
   }
  ]
  });
}
});
