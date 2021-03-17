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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb2N1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUssV0FPSjtBQVBELFdBQUssV0FBVztJQUNmLDZDQUFJLENBQUE7SUFDSiwrQ0FBSyxDQUFBO0lBQ0wsK0NBQUssQ0FBQTtJQUNMLDZDQUFJLENBQUE7SUFDSixpREFBTSxDQUFBO0lBQ04sK0NBQUssQ0FBQTtBQUNOLENBQUMsRUFQSSxXQUFXLEtBQVgsV0FBVyxRQU9mO0FBaUJELElBQUksQ0FBeUI7SUFDNUIsSUFBSSxFQUFDO1FBQ0osUUFBUSxFQUFDO1lBQ1I7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO2FBQ3RCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxLQUFLO2FBQ3ZCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxLQUFLO2FBQ3ZCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO2FBQ3RCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxNQUFNO2FBQ3hCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxLQUFLO2FBQ3ZCO1NBQ0Q7S0FDRDtJQUNELGNBQWMsRUFBRSxVQUFDLENBQU07UUFDdEIsSUFBTSxRQUFRLEdBQW9CLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzFELEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsVUFBVTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUM5QixPQUFPLEVBQUU7Z0JBQ1IsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDYixHQUFHLEVBQUUsY0FBYztpQkFDbkIsQ0FBQyxDQUFBO1lBQ0gsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7Q0FDRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJlbnVtIE1pc3Npb25UeXBlIHtcclxuXHRXb3JrLFxyXG5cdFN0dWR5LFxyXG5cdFdyaXRlLFxyXG5cdENoYXQsXHJcblx0TW90aW9uLFxyXG5cdFRoaW5rXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWlzc2lvbkNhcmRJdGVtIHtcclxuXHRpZDogTnVtYmVyO1xyXG5cdGljb25QYXRoOiBTdHJpbmc7XHJcblx0bmFtZTogU3RyaW5nO1xyXG5cdHR5cGU6IE1pc3Npb25UeXBlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFnZURhdGEge1xyXG5cdHR5cGVMaXN0OiBNaXNzaW9uQ2FyZEl0ZW1bXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBhZ2VJbnN0YW5jZSB7XHJcblx0aGFuZGxlT3BlblRhc2s6IChlOiBhbnkpID0+IHZvaWQ7XHJcbn1cclxuXHJcblBhZ2U8UGFnZURhdGEsIFBhZ2VJbnN0YW5jZT4oe1xyXG5cdGRhdGE6e1xyXG5cdFx0dHlwZUxpc3Q6W1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6IDAsXHJcblx0XHRcdFx0aWNvblBhdGg6IFwiL2Fzc2V0cy9NaXNzaW9uVHlwZS9Xb3JrLnBuZ1wiLFxyXG5cdFx0XHRcdG5hbWU6IFwi5bel5L2cXCIsXHJcblx0XHRcdFx0dHlwZTogTWlzc2lvblR5cGUuV29ya1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6IDEsXHJcblx0XHRcdFx0aWNvblBhdGg6IFwiL2Fzc2V0cy9NaXNzaW9uVHlwZS9TdHVkeS5wbmdcIixcclxuXHRcdFx0XHRuYW1lOiBcIuWtpuS5oFwiLFxyXG5cdFx0XHRcdHR5cGU6IE1pc3Npb25UeXBlLlN0dWR5XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogMixcclxuXHRcdFx0XHRpY29uUGF0aDogXCIvYXNzZXRzL01pc3Npb25UeXBlL1dyaXRlLnBuZ1wiLFxyXG5cdFx0XHRcdG5hbWU6IFwi5YaZ5L2cXCIsXHJcblx0XHRcdFx0dHlwZTogTWlzc2lvblR5cGUuV3JpdGVcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAzLFxyXG5cdFx0XHRcdGljb25QYXRoOiBcIi9hc3NldHMvTWlzc2lvblR5cGUvQ2hhdC5wbmdcIixcclxuXHRcdFx0XHRuYW1lOiBcIuiBiuWkqVwiLFxyXG5cdFx0XHRcdHR5cGU6IE1pc3Npb25UeXBlLkNoYXRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiA0LFxyXG5cdFx0XHRcdGljb25QYXRoOiBcIi9hc3NldHMvTWlzc2lvblR5cGUvTW90aW9uLnBuZ1wiLFxyXG5cdFx0XHRcdG5hbWU6IFwi6L+Q5YqoXCIsXHJcblx0XHRcdFx0dHlwZTogTWlzc2lvblR5cGUuTW90aW9uXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogNSxcclxuXHRcdFx0XHRpY29uUGF0aDogXCIvYXNzZXRzL01pc3Npb25UeXBlL1RoaW5rLnBuZ1wiLFxyXG5cdFx0XHRcdG5hbWU6IFwi5oCd6ICDXCIsXHJcblx0XHRcdFx0dHlwZTogTWlzc2lvblR5cGUuVGhpbmtcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH0sXHJcblx0aGFuZGxlT3BlblRhc2s6IChlOiBhbnkpID0+IHtcclxuXHRcdGNvbnN0IHRhc2tJbmZvOiBNaXNzaW9uQ2FyZEl0ZW0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcclxuXHRcdHd4LnNldFN0b3JhZ2Uoe1xyXG5cdFx0XHRrZXk6IFwidGFza0luZm9cIixcclxuXHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkodGFza0luZm8pLFxyXG5cdFx0XHRzdWNjZXNzOiAoKSA9PiB7XHJcblx0XHRcdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IFwiLi4vdGFzay90YXNrXCIsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcbn0pIl19