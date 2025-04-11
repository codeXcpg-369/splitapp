sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/Filter", "sap/ui/model/FilterOperator", "sap/ui/model/Sorter"
], (Controller, Filter, FilterOperator, Sorter) => {
    "use strict";

    return Controller.extend("app.splitapp.controller.MasterView", {
        onInit() {
            // let oModel = new JSONModel("/model/mockData/toolsData.json");
            // sap.ui.getCore().setModel(oModel, "toolsModel");
        },

        onDetailView: function () {
            let oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteDetail");
        },









        
        onSort: function () {
            //for first time, it is undefined
            if (!this.bDescending) {
                this.bDescending = false;
            }
            let oSorter = new sap.ui.model.Sorter("toolsName", this.bDescending);
            let oList = this.getView().byId("toolList");
            let oBinding = oList.getBinding("items");
            oBinding.sort(oSorter);
            this.bDescending = !this.bDescending;

        },
        onSearch: function (oEvent) {
            let searchString = oEvent.getParameter("query") || oEvent.getParameter("newValue");
            let oName = new Filter("toolsName", FilterOperator.Contains, searchString);
            let oAvail = new Filter("availability", FilterOperator.Contains, searchString);
            let aFilter = [oName, oAvail];
            let MainFilter = new Filter({
                filters: aFilter,
                and: false
            });
            let oList = this.getView().byId("toolList");
            let oBinding = oList.getBinding("items");
            oBinding.filter(MainFilter);

        },

        onItemSelect: function (oEvent) {
            let oList = oEvent.getParameter("listItem");
            let sPath = oList.getBindingContextPath();
            let aItems = sPath.split("/");
            let id = aItems[aItems.length-1];
            let oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteDetail",{
                    index:id
                })





            // //when i click it should take me to the next page
            // let oList = oEvent.getParameter("listItem");

            // //get the binding context path
            // let sPath = oList.getBindingContextPath();
            // let completePath = "toolsModel>" + sPath;

            // //get the object of the detailed view from the parent VIEW
            // let oApp = this.getView().getParent();

            // // /let oDetail = oApp.mAggregations.pages[1]; instead of this 
            // let oDetail = oApp.getAggregation("pages")[1]; //use this

            // //bind the page with the path
            // oDetail.bindElement(completePath);
            // this.onDetailView();
        }
    });
});