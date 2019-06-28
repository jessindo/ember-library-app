import Controller from '@ember/controller';
import { gte, and } from '@ember/object/computed';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

    emailAddress: '',
    
    isValidEmail: match('emailAddress', /^.+@.+\..+$/),
    isDisabled: not('isBothTrue'),

    isMsgLongEnough: gte("message.length", 5),

    isBothTrue: and('isMsgLongEnough', 'isValidEmail'),

    actions:{
        saveMessage(){
            alert(`Email address:  ${this.get('emailAddress')} and text message: ${this.get('message')}`);
            this.set('responseMessage', 'We got your message and will get in touch soon');
            this.set('emailAddress', '');
            this.set('message', '');
        }
    } 

});
