import Ember from 'ember';

export default Ember.Component.extend({
	isShowingPriceModal: false,
	actions: {
        toggleModal() {
			this.toggleProperty('isShowingPriceModal');
		}
    }
});
