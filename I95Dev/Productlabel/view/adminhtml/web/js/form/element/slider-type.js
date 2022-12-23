define([
    'jquery',
    'underscore',
    'uiRegistry',
    'Magento_Ui/js/form/element/single-checkbox-toggle-notice'
], function ($, _, uiRegistry, checkbox) {
    'use strict';
    return checkbox.extend({

        initialize: function (){
            var status = this._super().initialValue;
            this.fieldDepend(status);
            return this;
        },


        /**
         * On value change handler.
         *
         * @param {String} value
         */
        onUpdate: function (value) {

            this.fieldDepend(value);
            return this._super();
        },

        /**
         * Update field dependency
         *
         * @param {String} value
         */
        fieldDepend: function (value) {
            setTimeout(function () {
                console.log(value);
                var category = uiRegistry.get('index = category_id');
                var attribute = uiRegistry.get('index = attribute_id');
                var attributeOption = uiRegistry.get('index = option_id');
                var categoryLabel = uiRegistry.get('index = category_label');
                if (value == "0") {
                    category.show();
                    attribute.hide();
                    attributeOption.hide();
                    categoryLabel.show();
                } else {
                    category.hide();
                    categoryLabel.hide();
                    attribute.show();
                }
            }, 500);
            return this;
        }
    });
});
