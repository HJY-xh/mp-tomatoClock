"use strict";
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
        console.log(taskInfo);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb2N1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSyxXQU9KO0FBUEQsV0FBSyxXQUFXO0lBQ2YsNkNBQUksQ0FBQTtJQUNKLCtDQUFLLENBQUE7SUFDTCwrQ0FBSyxDQUFBO0lBQ0wsNkNBQUksQ0FBQTtJQUNKLGlEQUFNLENBQUE7SUFDTiwrQ0FBSyxDQUFBO0FBQ04sQ0FBQyxFQVBJLFdBQVcsS0FBWCxXQUFXLFFBT2Y7QUFpQkQsSUFBSSxDQUF5QjtJQUM1QixJQUFJLEVBQUM7UUFDSixRQUFRLEVBQUM7WUFDUjtnQkFDQyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7YUFDdEI7WUFDRDtnQkFDQyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsV0FBVyxDQUFDLEtBQUs7YUFDdkI7WUFDRDtnQkFDQyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsV0FBVyxDQUFDLEtBQUs7YUFDdkI7WUFDRDtnQkFDQyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7YUFDdEI7WUFDRDtnQkFDQyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsV0FBVyxDQUFDLE1BQU07YUFDeEI7WUFDRDtnQkFDQyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsV0FBVyxDQUFDLEtBQUs7YUFDdkI7U0FDRDtLQUNEO0lBQ0QsY0FBYyxFQUFFLFVBQVMsQ0FBTTtRQUM5QixJQUFNLFFBQVEsR0FBb0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN0QixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZW51bSBNaXNzaW9uVHlwZSB7XHJcblx0V29yayxcclxuXHRTdHVkeSxcclxuXHRXcml0ZSxcclxuXHRDaGF0LFxyXG5cdE1vdGlvbixcclxuXHRUaGlua1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTWlzc2lvbkNhcmRJdGVtIHtcclxuXHRpZDogTnVtYmVyO1xyXG5cdGljb25QYXRoOiBTdHJpbmc7XHJcblx0bmFtZTogU3RyaW5nO1xyXG5cdHR5cGU6IE1pc3Npb25UeXBlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFnZURhdGEge1xyXG5cdHR5cGVMaXN0OiBNaXNzaW9uQ2FyZEl0ZW1bXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBhZ2VJbnN0YW5jZSB7XHJcblx0aGFuZGxlT3BlblRhc2s6IChlOiBhbnkpID0+IGFueTtcclxufVxyXG5cclxuUGFnZTxQYWdlRGF0YSwgUGFnZUluc3RhbmNlPih7XHJcblx0ZGF0YTp7XHJcblx0XHR0eXBlTGlzdDpbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogMCxcclxuXHRcdFx0XHRpY29uUGF0aDogXCIvYXNzZXRzL01pc3Npb25UeXBlL1dvcmsucG5nXCIsXHJcblx0XHRcdFx0bmFtZTogXCLlt6XkvZxcIixcclxuXHRcdFx0XHR0eXBlOiBNaXNzaW9uVHlwZS5Xb3JrXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRpY29uUGF0aDogXCIvYXNzZXRzL01pc3Npb25UeXBlL1N0dWR5LnBuZ1wiLFxyXG5cdFx0XHRcdG5hbWU6IFwi5a2m5LmgXCIsXHJcblx0XHRcdFx0dHlwZTogTWlzc2lvblR5cGUuU3R1ZHlcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAyLFxyXG5cdFx0XHRcdGljb25QYXRoOiBcIi9hc3NldHMvTWlzc2lvblR5cGUvV3JpdGUucG5nXCIsXHJcblx0XHRcdFx0bmFtZTogXCLlhpnkvZxcIixcclxuXHRcdFx0XHR0eXBlOiBNaXNzaW9uVHlwZS5Xcml0ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6IDMsXHJcblx0XHRcdFx0aWNvblBhdGg6IFwiL2Fzc2V0cy9NaXNzaW9uVHlwZS9DaGF0LnBuZ1wiLFxyXG5cdFx0XHRcdG5hbWU6IFwi6IGK5aSpXCIsXHJcblx0XHRcdFx0dHlwZTogTWlzc2lvblR5cGUuQ2hhdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6IDQsXHJcblx0XHRcdFx0aWNvblBhdGg6IFwiL2Fzc2V0cy9NaXNzaW9uVHlwZS9Nb3Rpb24ucG5nXCIsXHJcblx0XHRcdFx0bmFtZTogXCLov5DliqhcIixcclxuXHRcdFx0XHR0eXBlOiBNaXNzaW9uVHlwZS5Nb3Rpb25cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiA1LFxyXG5cdFx0XHRcdGljb25QYXRoOiBcIi9hc3NldHMvTWlzc2lvblR5cGUvVGhpbmsucG5nXCIsXHJcblx0XHRcdFx0bmFtZTogXCLmgJ3ogINcIixcclxuXHRcdFx0XHR0eXBlOiBNaXNzaW9uVHlwZS5UaGlua1xyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fSxcclxuXHRoYW5kbGVPcGVuVGFzazogZnVuY3Rpb24oZTogYW55KXtcclxuXHRcdGNvbnN0IHRhc2tJbmZvOiBNaXNzaW9uQ2FyZEl0ZW0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcclxuXHRcdGNvbnNvbGUubG9nKHRhc2tJbmZvKVxyXG5cdH1cclxufSkiXX0=