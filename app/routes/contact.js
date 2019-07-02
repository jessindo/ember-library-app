import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.createRecord('contact');
    },

    actions: {
        saveMessage(){
            const controller = this.get('controller');
            
            alert(`Email address:  ${controller.get('model.email')} and text message: ${controller.get('model.message')}`);
            //controller.set('responseMessage', 'We got your message and will get in touch soon');

            // const email = controller.get('model.email');
            // const message = controller.get('model.message');

            // const newContact = this.store.createRecord('contact', {email, message});
            
            //controller.get used to be newContact.save()......
            controller.get('model').save().then(response => {
                controller.set('responseMessage', 'We got your message and will get in touch soon');
            });
        },

        // saveMessage(){
        //     const controller = this.get('controller');

        //     alert(`Email address:  ${controller.get('model.email')} and text message: ${controller.get('model.message')}`);
        //     controller.set('responseMessage', 'We got your message and will get in touch soon');
            

        //     // this.set('emailAddress', '');
        //     // this.set('message', '');
        // },

        // saveInvitation(){
        //     const email = this.get('emailAddress');
            
        //     const newInvitation = this.store.createRecord('invitation', { email });
            
        //     newInvitation.save().then(response => {
        //         this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        //         this.set('emailAddress', '');
        //     });
        // }
    }
});
