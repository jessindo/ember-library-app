import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        //in the parameter inside createRecord, 'index' refers to the model name
        //so make sure this matches wtv model it is you are using
        return this.store.createRecord('invitation');
    },

    actions:{
        saveInvitation(){
            const controller = this.get('controller');

            //const email = this.get('emailAddress');
            
            //const newInvitation = this.store.createRecord('invitation', { email });
            
            controller.get('model').save().then(response => {
                controller.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
                controller.set('model.email', '');
                //controller.set('model', this.store.createRecord('invitation'));
                //controller.set('model', this.model());
            });
        
        },

        //willTransition is only called when you want to go to a new page
        willTransition() {
            // const model = this.get('controller.model');
            // model.rollbackAttributes();
            this.controller.get('model').rollbackAttributes();
        }
    }
});