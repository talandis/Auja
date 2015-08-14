import FormItem from '../../Abstract/form_item.js';

var Integer = function (data) {

    //Call the parent constructor
    FormItem.call(this, data);

    //Set type of this object
    this.setType('integer');

    /**
     * Get attributes for this input
     * @return Object
     */
    this.getAttributes = function () {
        return {
            type: this.getType(),
            value: this.getValue(),
            name: this.getName()
        }
    };
};

// Inherit Panel
Integer.prototype = FormItem;

// Fix constructor
Integer.prototype.constructor = Integer;

module.exports = Integer;
