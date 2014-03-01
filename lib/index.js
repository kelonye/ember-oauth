require('ember');

module.exports = Ember.Mixin.create({

  beforeModel: function(transition) {
    if (transition.targetName === 'signin') return;
    var controller = this.controllerFor('application');
    if (!controller.get('user.content')) {
      controller.set('previousTransition', transition);
      this.transitionTo('signin');
    }
  },

  actions: {

    'continue-signin': function(){
      var controller = this.controllerFor('application');
      var previousTransition = controller.get('previousTransition');
      if (previousTransition) {
        controller.set('previousTransition', null);
        previousTransition.retry();
      } else {
        this.transitionTo('index');
      }
    }

  }
});