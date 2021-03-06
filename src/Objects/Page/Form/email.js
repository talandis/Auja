
define(['build/Objects/Abstract/form_item'], function(FormItem) {

    var Email = function(data) {

        //Call the parent constructor
        FormItem.call(this, data);

        //Set type of this object
        this.setType('email');
        
        /**
         * Get attributes for this input
         * @return Object
         */
        this.getAttributes = function() {
            return {
                type: this.getType(),
                value: this.getValue(),
                name: this.getName()
            }
        };
    };

    // Inherit FormItem
    Email.prototype = FormItem;

    // Fix constructor
    Email.prototype.constructor = Email;
    
    return Email;
});