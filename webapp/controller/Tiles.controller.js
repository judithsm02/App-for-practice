sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
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

      });
    }
  );
  