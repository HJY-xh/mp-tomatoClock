"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MissionType;
(function (MissionType) {
    MissionType[MissionType["Work"] = 0] = "Work";
    MissionType[MissionType["Study"] = 1] = "Study";
    MissionType[MissionType["Write"] = 2] = "Write";
    MissionType[MissionType["Chat"] = 3] = "Chat";
    MissionType[MissionType["Motion"] = 4] = "Motion";
    MissionType[MissionType["Think"] = 5] = "Think";
})(MissionType || (MissionType = {}));
Page({
    data: {
        typeList: [
            {
                id: 0,
                iconPath: "/assets/MissionType/Work.png",
                name: "工作",
                type: MissionType.Work
            },
            {
                id: 1,
                iconPath: "/assets/MissionType/Study.png",
                name: "学习",
                type: MissionType.Study
            },
            {
                id: 2,
                iconPath: "/assets/MissionType/Write.png",
                name: "写作",
                type: MissionType.Write
            },
            {
                id: 3,
                iconPath: "/assets/MissionType/Chat.png",
                name: "聊天",
                type: MissionType.Chat
            },
            {
                id: 4,
                iconPath: "/assets/MissionType/Motion.png",
                name: "运动",
                type: MissionType.Motion
            },
            {
                id: 5,
                iconPath: "/assets/MissionType/Think.png",
                name: "思考",
                type: MissionType.Think
            }
        ]
    },
    handleOpenTask: function (e) {
        var taskInfo = e.currentTarget.dataset;
        wx.setStorage({
            key: "taskInfo",
            data: JSON.stringify(taskInfo),
            success: function () {
                wx.navigateTo({
                    url: "../task/task",
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb2N1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUssV0FPSjtBQVBELFdBQUssV0FBVztJQUNmLDZDQUFJLENBQUE7SUFDSiwrQ0FBSyxDQUFBO0lBQ0wsK0NBQUssQ0FBQTtJQUNMLDZDQUFJLENBQUE7SUFDSixpREFBTSxDQUFBO0lBQ04sK0NBQUssQ0FBQTtBQUNOLENBQUMsRUFQSSxXQUFXLEtBQVgsV0FBVyxRQU9mO0FBaUJELElBQUksQ0FBeUI7SUFDNUIsSUFBSSxFQUFDO1FBQ0osUUFBUSxFQUFDO1lBQ1I7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO2FBQ3RCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxLQUFLO2FBQ3ZCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxLQUFLO2FBQ3ZCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO2FBQ3RCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxNQUFNO2FBQ3hCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxLQUFLO2FBQ3ZCO1NBQ0Q7S0FDRDtJQUNELGNBQWMsRUFBRSxVQUFDLENBQU07UUFDdEIsSUFBTSxRQUFRLEdBQW9CLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzFELEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsVUFBVTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUM5QixPQUFPLEVBQUU7Z0JBQ1IsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDYixHQUFHLEVBQUUsY0FBYztpQkFDbkIsQ0FBQyxDQUFBO1lBQ0gsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7Q0FDRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJlbnVtIE1pc3Npb25UeXBlIHtcclxuXHRXb3JrLFxyXG5cdFN0dWR5LFxyXG5cdFdyaXRlLFxyXG5cdENoYXQsXHJcblx0TW90aW9uLFxyXG5cdFRoaW5rXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWlzc2lvbkNhcmRJdGVtIHtcclxuXHRpZDogTnVtYmVyO1xyXG5cdGljb25QYXRoOiBTdHJpbmc7XHJcblx0bmFtZTogU3RyaW5nO1xyXG5cdHR5cGU6IE1pc3Npb25UeXBlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFnZURhdGEge1xyXG5cdHR5cGVMaXN0OiBNaXNzaW9uQ2FyZEl0ZW1bXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBhZ2VJbnN0YW5jZSB7XHJcblx0aGFuZGxlT3BlblRhc2s6IChlOiBhbnkpID0+IGFueTtcclxufVxyXG5cclxuUGFnZTxQYWdlRGF0YSwgUGFnZUluc3RhbmNlPih7XHJcblx0ZGF0YTp7XHJcblx0XHR0eXBlTGlzdDpbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogMCxcclxuXHRcdFx0XHRpY29uUGF0aDogXCIvYXNzZXRzL01pc3Npb25UeXBlL1dvcmsucG5nXCIsXHJcblx0XHRcdFx0bmFtZTogXCLlt6XkvZxcIixcclxuXHRcdFx0XHR0eXBlOiBNaXNzaW9uVHlwZS5Xb3JrXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRpY29uUGF0aDogXCIvYXNzZXRzL01pc3Npb25UeXBlL1N0dWR5LnBuZ1wiLFxyXG5cdFx0XHRcdG5hbWU6IFwi5a2m5LmgXCIsXHJcblx0XHRcdFx0dHlwZTogTWlzc2lvblR5cGUuU3R1ZHlcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAyLFxyXG5cdFx0XHRcdGljb25QYXRoOiBcIi9hc3NldHMvTWlzc2lvblR5cGUvV3JpdGUucG5nXCIsXHJcblx0XHRcdFx0bmFtZTogXCLlhpnkvZxcIixcclxuXHRcdFx0XHR0eXBlOiBNaXNzaW9uVHlwZS5Xcml0ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6IDMsXHJcblx0XHRcdFx0aWNvblBhdGg6IFwiL2Fzc2V0cy9NaXNzaW9uVHlwZS9DaGF0LnBuZ1wiLFxyXG5cdFx0XHRcdG5hbWU6IFwi6IGK5aSpXCIsXHJcblx0XHRcdFx0dHlwZTogTWlzc2lvblR5cGUuQ2hhdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6IDQsXHJcblx0XHRcdFx0aWNvblBhdGg6IFwiL2Fzc2V0cy9NaXNzaW9uVHlwZS9Nb3Rpb24ucG5nXCIsXHJcblx0XHRcdFx0bmFtZTogXCLov5DliqhcIixcclxuXHRcdFx0XHR0eXBlOiBNaXNzaW9uVHlwZS5Nb3Rpb25cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiA1LFxyXG5cdFx0XHRcdGljb25QYXRoOiBcIi9hc3NldHMvTWlzc2lvblR5cGUvVGhpbmsucG5nXCIsXHJcblx0XHRcdFx0bmFtZTogXCLmgJ3ogINcIixcclxuXHRcdFx0XHR0eXBlOiBNaXNzaW9uVHlwZS5UaGlua1xyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fSxcclxuXHRoYW5kbGVPcGVuVGFzazogKGU6IGFueSkgPT4ge1xyXG5cdFx0Y29uc3QgdGFza0luZm86IE1pc3Npb25DYXJkSXRlbSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xyXG5cdFx0d3guc2V0U3RvcmFnZSh7XHJcblx0XHRcdGtleTogXCJ0YXNrSW5mb1wiLFxyXG5cdFx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeSh0YXNrSW5mbyksXHJcblx0XHRcdHN1Y2Nlc3M6ICgpID0+IHtcclxuXHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogXCIuLi90YXNrL3Rhc2tcIixcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxufSkiXX0=