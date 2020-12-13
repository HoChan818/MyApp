sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/m/MessageToast",
    "webapp/Controller/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(Controller,MessageToast,formatter,Filter,FilterOperator) {
    return Controller.extend("webapp.Controller.App", {
        onShowMSG : function(){
            //read message from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
            var sMsg = oBundle.getText("HelloMsg" , [sRecipient] );
            //show message
            MessageToast.show(sMsg);
        },

        formatter:formatter,
        
        onFilterProducts:function(oEvent){
        	//build filter array
        	var aFilter=[],
        	    sQuery= oEvent.getParameter("query"),
        	    //retrieve list control
        	    oList=this.getView().byId("productsList"),
        	    //get binding for aggregation 'items'
        	    oBinding = oList.getBinding("items");
        	    
        	if(sQuery){
        		aFilter.push(new Filter("ProductID",FilterOperator.Contains,sQuery));
        	}
        	
        	oBinding.filter(aFilter);
        },
        
        onItemSelected: function(oEvent) {
            //get selected data
            var oSeletedItem = oEvent.getSource(),
                oContext = oSeletedItem.getBindingContext(),
                sPath = oContext.getPath();
            //get Panel controller by ID
            var oProductDetailPanel = this.getView().byId("productDetailsPanel");
            //bind data for Panel controller
            oProductDetailPanel.bindElement({path:sPath});
            //set Panel controller visible
            oProductDetailPanel.setVisible(true);                
        }
    });    
});