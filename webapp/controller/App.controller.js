sap.ui.define([
  "./BaseController",
   "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
  "use strict";

  return Controller.extend("app.splitapp.controller.App", {
      onInit() {
        let oModel = new JSONModel("/model/mockData/toolsData.json");
        this.getView().setModel(oModel, "toolsModel");
      }
  });
});