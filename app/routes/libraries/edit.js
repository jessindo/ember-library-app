import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return this.store.findRecord('library', params.library_id);
    },

    //set controller params in a route\
    setupController(controller, model) {
        this._super(controller, model);

        controller.set('title', 'Edit library');
        controller.set('buttonLabel', 'Save changes');
    },
    
    //for setting a non-default template location
    //like by default this would go to edit.hbs and new.hbs
    //but since we changed it to form.hbs,
    //we want it to go there instead
    renderTemplate() {
        this.render('libraries/form');
    },

    actions: {
        
        saveLibrary(library) {
            library.save().then(() => this.transitionTo('libraries'));
        },

        willTransition(transition) {
            let model = this.controller.get('model');

            if (model.get('hasDirtyAttributes')) {
                //hasDirtyAttributes checks whether smth has changed in the model
                let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

                if (confirmation) {
                    //discards changes
                    model.rollbackAttributes();
                } else {
                    //stays on page
                    transition.abort();
                }
            }
        }
    }
});
