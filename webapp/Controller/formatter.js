sap.ui.define([], function() {
    'use strict';
    
    return {
        delivery: function(sMeasure, iWeight){
            //Get i18n Data
            var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
            //Local Variant
            var sResult = "";

            if (sMeasure === "G") {
                iWeight = iWeight / 1000;
            };
            
            //Get Text from i18n file
            if(iWeight < 0.5) {
                sResult = oResourceBundle.getText("formatterMailDelivery");
            } else if(iWeight < 5){
                sResult = oResourceBundle.getText("formatterParcelDelivery");
            } else {
                sResult = oResourceBundle.getText("formatterCarrierDelivery");
            };

            return sResult;
        }
    };
});