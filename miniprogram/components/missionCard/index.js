"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
Component({
    properties: {
        item: {
            id: 0,
            icon: "",
            name: "",
            type: types_1.MissionType.Work
        }
    },
    methods: {
        handleClick: function () {
            console.log(this.properties);
            console.log(this.properties.item);
            console.log(this.properties.item.type);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUE2QztBQUU3QyxTQUFTLENBQWdCO0lBQ3hCLFVBQVUsRUFBRTtRQUNYLElBQUksRUFBRTtZQUNMLEVBQUUsRUFBRSxDQUFDO1lBQ0wsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxtQkFBVyxDQUFDLElBQUk7U0FDdEI7S0FDRDtJQUNELE9BQU8sRUFBRTtRQUNSLFdBQVcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7S0FDRDtDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BzLCBNaXNzaW9uVHlwZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5Db21wb25lbnQ8e30sIFByb3BzLCB7fT4oe1xyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdGl0ZW06IHtcclxuXHRcdFx0aWQ6IDAsXHJcblx0XHRcdGljb246IFwiXCIsXHJcblx0XHRcdG5hbWU6IFwiXCIsXHJcblx0XHRcdHR5cGU6IE1pc3Npb25UeXBlLldvcmtcclxuXHRcdH1cclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGhhbmRsZUNsaWNrOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5wcm9wZXJ0aWVzKVxyXG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BlcnRpZXMuaXRlbSlcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5wcm9wZXJ0aWVzLml0ZW0udHlwZSlcclxuXHRcdH1cclxuXHR9XHJcbn0pIl19