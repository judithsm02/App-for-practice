sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/m/MessageToast"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

            /////////////////////////////// different way to do the fullscreen app: https://github.com/judithsm02/flights.git ///////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        return Controller.extend("practiceapp.practicej.controller.Flights", {
            onInit: function () {

                this.getRouter().getRoute("flights").attachPatternMatched(this._onObjectMatched, this)

            },

            getRouter: function() { //SI NO POSO AIXÒ, EM SURT QUE GET ROUTER IS NOT A FUNCTION
                return sap.ui.core.UIComponent.getRouterFor(this);

            },

            _onObjectMatched: function (oEvent)
            {  

               var sObjectPath =
              "/UX_C_Carrier_TP('" + oEvent.getParameter("arguments").carrid + "')"; //el carrid es la pattern que he definit al manifest.json
              this._bindView(sObjectPath);

            },  //FUNCIONA

            _bindView: function(sObjectPath){

                var oView= this.getView();
                this.getView().bindElement({ //bind.element s'utilitza per associar la vista acual amb dades específiques. 
                    path: sObjectPath,
                    events: { 
                        change: this._onBindingChange.bind(this), // cuando los datos vinculados cambian, se ejecuta la funcion on.binding
                        dataRequested: function() { // es una funció que es crida quan es necessita que es carreguin dades
                        oView.setBusy(true);//Establece la vista como “ocupada” (indicando que se están cargando datos).
                    },
                    dataReceived: function() { //funció que es crida quan s'han rebut les dades
                    oView.setBusy(false); //es posa com a setbusy false. ja esta lliure la vista
                    }
                    }
                    });
                
            },
            _onBindingChange: function () {
                var oElementBinding;
  
                oElementBinding = this.getView().getElementBinding(); //FUNCIONA
  
                // No data for the binding 
                if (oElementBinding && !oElementBinding.getBoundContext()) {
                    this.getRouter().getTargets().display("notFound");
                }
            },
      

        
            
        onNavBack: function () {  //fletxa per tirar enrere
            var oHistory, sPreviousHash;
        
            oHistory = sap.ui.core.routing.History.getInstance();
            sPreviousHash = oHistory.getPreviousHash();
        
            if (sPreviousHash !== undefined) {
            window.history.go(-1);
            } else {
            this.getRouter().navTo("overview", true /*no history*/);
            }
        },


            /////////////////////////////// controllers dels dialogs i botons create y delete ///////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            
        //############################## BOTO CREAR ####################### el boto es diu: New_onPress i el dialog, dialog_create
            
        New_onPress: function () 
            {
                if (!this.pDialog) {
                  this.pDialog = this.loadFragment({    // verifica si s'ha creat el dialeg. si s'ha creat carrega el fragment
                    name: "practiceapp.practicej.view.fragments.create"
                  });
                }
                this.pDialog.then(function (oDialog) { //si no s'ha creat el dialeg, s'obre el dialeg. 
                  oDialog.open(); 
                });
            },

            // NO HE CREAT CAP VALUE HELP

            onSave_CreateDialog: function() //BOTO DE QUAN LI DONES A SAVE EN EL DIALOG QUE JA ESTÀ OBERT
            {
                    var oModel = this.getView().getModel();  
                    var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
    
                    var oEntry = {
                        Carrid: this.getView().getBindingContext().getProperty("Carrid"),
                        Fldate: this.getView().byId("flightdate").getValue(),
                        Seatsmax: this.getView().byId("seatmax").getValue(),
                        Seatsocc: this.getView().byId("seatocc").getValue(),

                    };   

    
                    oModel.create("/UX_C_Flight_TP", oEntry, {
                        success: function() {

                            this.onCloseDialog();
                            
                        },
                        error: function(oError) {
                            // Handle error
                        }
                    });
                },
            

            onCloseDialog: function () 
            {            //per tancar el dialeg si no es vol fer res
                this.byId("dialog_create").close();
            },



        //############################## BOTO ESBORRAR #######################

            Delete_onPress: function(oEvent)
            {

            }
    
            



        });


         


    });
