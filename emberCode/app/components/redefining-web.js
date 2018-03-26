import Ember from 'ember';

export default Ember.Component.extend({
    isShowingLearnMoreModal: false,
    actions: {
        toggleModal() {
            this.toggleProperty('isShowingLearnMoreModal');
        }
    }
});
