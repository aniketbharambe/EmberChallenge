import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
    isShowingPriceModal: false,
    actions: {
        toggleModal() {
            $("#pricing-modal").hide();
            this.sendAction('toggleModal');
        }
    }
});
