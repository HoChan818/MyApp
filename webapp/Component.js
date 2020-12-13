sap.ui.define([
    'sap/ui/core/UIComponent'
], function(UIComponent) {    
    return UIComponent.extend("webapp.Component", {
        metadata : {
            manifest : "json"
        },

        init : function () {
            //call the init funtion of the parent
            UIComponent.prototype.init.apply(this, arguments);
			
			//manully turn off batch processing to be able to debug calls from ODataModel
			this.getModel().setUseBatch(false);
			
            // additional initialization can be done here

        }
    });
});