import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('library');
  },

  //set controller params in a route
  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new library');
    controller.set('buttonLabel', 'Create');
  },

  //for setting a non-default template location
  //like by default this would go to edit.hbs and new.hbs
  //but since we changed it to form.hbs,
  //we want it to go there instead
  renderTemplate() {
    this.render('libraries/form');
  },

  actions: {

    saveLibrary(newLibrary) {
      //newLibrary is a variable and in this case it's a model (check template)
        //transitionTo basically redirects the page to a certain target page
        //so 'libraries' goes back to localhost:4200/libraries
        newLibrary.save().then(() => this.transitionTo('libraries'));
    },

    //prevents record from being added if the user hasn't clicked save yet
    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});