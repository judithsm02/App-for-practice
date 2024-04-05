sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("practiceapp.practicej.controller.Carrier", {
            
            getRouter: function (){
                return sap.ui.core.UIComponent.getRouterFor(this);
            },

            onPress: function (oEvent){
                var oItem=oEvent.getSource();
                var oCtx=oItem.getBindingContext();
                var sCarrid=oCtx.getProperty("Carrid")

                this.getRouter().navTo("flights",{      //amb aixo ja es desplega la segona pantalla
                    carrid:sCarrid
                },false)
            },

            
            New_onPress: function (){},
            Delete_onPress: function(){}






                
                

            
        });
    });
