sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.acn.training.project1.controller.View1", {
        onInit() {
        },

        onClear: function(){
            this.byId("input_name").setValue("");
            this.byId("input_street").setValue("");
            this.byId("input_no").setValue("");
            this.byId("input_zip").setValue("");
            this.byId("input_city").setValue("");
            this.byId("box1").setSelectedKey("");  
        }
    });
});