sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("practiceapp.practicej.controller.Flights", {  // sense posar aquest controller no funciona ni es veu res per pantalla. cal posar-lo perque es pugui veure tot. 
            onInit: function () {

            },
            
        onNavBack: function () {
            var oHistory, sPreviousHash;
        
            oHistory = sap.ui.core.routing.History.getInstance();
            sPreviousHash = oHistory.getPreviousHash();
        
            if (sPreviousHash !== undefined) {
            window.history.go(-1);
            } else {
            this.getRouter().navTo("overview", true /*no history*/);
            }
        }
        });
    });
