
sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel"
], (BaseController) => {
    "use strict";

    return BaseController.extend("app.splitapp.controller.DetailView", {
        onInit() {
            let oRouter = this.getOwnerComponent().getRouter();
            oRouter.attachRoutePatternMatched(this.onRouteMatched, this)
        },

        onRouteMatched: function (oEvent) {
            let index = oEvent.getParameter("arguments").index;
            let sPath = "toolsModel>/toolData/" + index;
            let oView = this.getView();
            oView.bindElement(sPath);

            //code for Table for dynamic appearance of data
            // let oModel = this.getModel("toolsModel");
            // let searchString = oModel.getProperty("/toolData/"+index+"/toolsName");
            // let filterName = new sap.ui.model.Filter("toolsName",sap.ui.model.FilterOperator.EQ,searchString);
            // // let aFilter = [filterName];
            // let oTable = this.getView().byId("idMTable");
            // let bindingInfo = oTable.getBinding("items");
            // bindingInfo.filter([filterName]);

            //.....code for table  

            let oModel = this.getModel("toolsModel");
            let searchString = oModel.getProperty("/toolData/" + index + "/toolsName");
            let filterName = new sap.ui.model.Filter("toolsName", sap.ui.model.FilterOperator.EQ, searchString);
            let oTable = this.getView().byId("idMTable");
            if (!oTable) {
                return;
            }
            let bindingInfo = oTable.getBinding("items");
            if (!bindingInfo) {
                return;
            }
            bindingInfo.filter([filterName]);
        },







        onListView: function () {
            let oRouter2 = this.getOwnerComponent().getRouter();
            oRouter2.navTo("RouteMasterView");
        }
    });
});





