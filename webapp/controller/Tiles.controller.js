sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/UIComponent"

    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("practiceapp.practicej.controller.Tiles", {
        onInit: function() {
          this.getRouter().getRoute("Tiles");

        },
        getRouter: function() { //SI NO POSO AIXÒ, EM SURT QUE GET ROUTER IS NOT A FUNCTION
          return sap.ui.core.UIComponent.getRouterFor(this);

      },
      onPressFlights: function() {    
        this.getRouter().navTo("overview");
      },

    
      onPressSmarttable: function() {    
        this.getRouter().navTo("smarttable");
      },  
      
      onPressCharts: function() {    
        this.getRouter().navTo("charts");
      },    
      
      onPressWizard: function() {    
        this.getRouter().navTo("wizard");
      }  

      
      });
    }
  );
  