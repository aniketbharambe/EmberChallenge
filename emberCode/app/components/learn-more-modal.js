import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
    isShowingModal: false,
    actions: {
        toggleModal() {
            $("#learn-more-modal").hide();
            this.sendAction('toggleModal');
        }
    }
});
