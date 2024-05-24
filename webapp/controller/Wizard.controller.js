sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    "sap/m/MessageToast",
    "sap/m/MessageBox"

  ],
  function(BaseController, JSONModel,MessageToast,MessageBox) {
    "use strict";

    return BaseController.extend("practiceapp.practicej.controller.Wizard", {
      onInit: function() {
      this._wizard = this.byId("CreatePassengerWizard");
			this._oNavContainer = this.byId("NavContainerId");
			this._oWizardContentPage = this.byId("wizardContentPage");

			this.model = new JSONModel();
			this.model.setData({
				passengerIDState: "Error", //pone en rojo y error los campos de introducir dni y id desde el principio
				passengerDNIState: "Error"
			});
      this.getView().setModel(this.model);         
      },

      additionalInfoValidation:function()
      {
        var PassengerID=this.byId("Passid");

        console.log(PassengerID);
      }

      



     

    });
  }
);
