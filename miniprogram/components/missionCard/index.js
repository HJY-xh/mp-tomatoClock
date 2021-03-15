"use strict";
Component({
    properties: {
        item: {
            type: Object,
            value: {}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1QsVUFBVSxFQUFFO1FBQ1gsSUFBSSxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtTQUNUO0tBQ0Q7SUFDRCxPQUFPLEVBQUU7UUFDUixXQUFXLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN2QyxDQUFDO0tBQ0Q7Q0FDRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdGl0ZW06IHtcclxuXHRcdFx0dHlwZTogT2JqZWN0LFxyXG5cdFx0XHR2YWx1ZToge31cclxuXHRcdH1cclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGhhbmRsZUNsaWNrOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5wcm9wZXJ0aWVzKVxyXG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BlcnRpZXMuaXRlbSlcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5wcm9wZXJ0aWVzLml0ZW0udHlwZSlcclxuXHRcdH1cclxuXHR9XHJcbn0pIl19