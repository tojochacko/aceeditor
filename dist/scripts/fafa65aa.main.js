!function(){window.YoEmber=Ember.Application.create({LOG_TRANSITIONS:!0})}(),function(){YoEmber.ListController=Ember.Controller.extend({search:"",actions:{myAction:function(){this.get("search")}}})}(),function(){YoEmber.ApplicationAdapter=DS.FixtureAdapter}(),function(){YoEmber.ApplicationRoute=Ember.Route.extend({model:function(){return["Chipku","Tojo","Anw"]}}),YoEmber.ListRoute=Ember.Route.extend({model:function(){return[{name:"Tojo Chapter",institution:"IIT Bombay",active:"2 weeks"},{name:"Tijo Chapter",institution:"IIT Madras",active:"1 week"},{name:"Chinku Chapter",institution:"IIT Delhi",active:"just now"}]}})}(),function(){YoEmber.Router.map(function(){this.route("list",{path:"/campus_chapter/list"})})}();