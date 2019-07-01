import DS from 'ember-data';
import { gte, and } from '@ember/object/computed';
import { match, not } from '@ember/object/computed';

export default DS.Model.extend({
    email: DS.attr('string'),
    message: DS.attr('string'),

    isValidEmail: match('email', /^.+@.+\..+$/),
    isDisabled: not('isBothTrue'),

    isMsgLongEnough: gte("message.length", 5),

    isBothTrue: and('isMsgLongEnough', 'isValidEmail'),
});
