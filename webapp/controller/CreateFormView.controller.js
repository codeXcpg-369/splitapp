sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("app.splitapp.controller.CreateFormView", {
        onInit: function () {
            // Initialize the model for the form
            let oModel = new sap.ui.model.json.JSONModel({
                toolsName: "",
                uses: "",
                weight: "",
                warranty: "",
                price: "",
                unit: "",
                availability: ""
            });
            this.getView().setModel(oModel, "newToolModel");
        },

        onSave: function () {
            // Save logic here
            console.log("Save button pressed");
        },

        onCancel: function () {
            // Navigate back to the master view
            let oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteMasterView");
        }
    });
});
