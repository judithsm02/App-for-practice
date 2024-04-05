sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("practiceapp.practicej.controller.Flights", {
            onInit: function () {

                this.getRouter().getRoute("flights").attachPatternMatched(this._onObjectMatched, this)

            },

            getRouter: function() { //SI NO POSO AIXÒ, EM SURT QUE FGET ROUTER IS NOT A FUNCTION
                return sap.ui.core.UIComponent.getRouterFor(this);

            },

            _onObjectMatched: function (oEvent)
            {  

               var sObjectPath =
              "/UX_C_Carrier_TP('" + oEvent.getParameter("arguments").carrid + "')";
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
  
                // // No data for the binding 
                // if (oElementBinding && !oElementBinding.getBoundContext()) {
                //     this.getRouter().getTargets().display("notFound");
                // }
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
