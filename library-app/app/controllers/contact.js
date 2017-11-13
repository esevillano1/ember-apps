import Ember from 'ember';

export default Ember.Controller.extend({

	emailAddress: '',
	message: '',

	validEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	validMessage: Ember.computed.notEmpty('message'),

	isValid: Ember.computed.and('validEmail', 'validMessage'),
	isDisabled: Ember.computed.not('isValid'),

	actions: {
		showFormData() {
			
			alert(`Email: ${this.get('emailAddress')}\nMessage: ${this.get('message')}`);
			this.set('responseMessage', `We got your message and we'll get in touch soon`);
			this.set('emailAddress', '');
			this.set('message', '');

		}
	}
});
