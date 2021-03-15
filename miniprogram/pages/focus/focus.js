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
    onMyEvent: function (e) {
        console.log(e);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb2N1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSyxXQU9KO0FBUEQsV0FBSyxXQUFXO0lBQ2YsNkNBQUksQ0FBQTtJQUNKLCtDQUFLLENBQUE7SUFDTCwrQ0FBSyxDQUFBO0lBQ0wsNkNBQUksQ0FBQTtJQUNKLGlEQUFNLENBQUE7SUFDTiwrQ0FBSyxDQUFBO0FBQ04sQ0FBQyxFQVBJLFdBQVcsS0FBWCxXQUFXLFFBT2Y7QUFpQkQsSUFBSSxDQUF5QjtJQUM1QixJQUFJLEVBQUM7UUFDSixRQUFRLEVBQUM7WUFDUjtnQkFDQyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7YUFDdEI7WUFDRDtnQkFDQyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsV0FBVyxDQUFDLEtBQUs7YUFDdkI7WUFDRDtnQkFDQyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsV0FBVyxDQUFDLEtBQUs7YUFDdkI7WUFDRDtnQkFDQyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7YUFDdEI7WUFDRDtnQkFDQyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsV0FBVyxDQUFDLE1BQU07YUFDeEI7WUFDRDtnQkFDQyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsV0FBVyxDQUFDLEtBQUs7YUFDdkI7U0FDRDtLQUNEO0lBQ0QsU0FBUyxFQUFFLFVBQVMsQ0FBSztRQUV4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2IsQ0FBQztDQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImVudW0gTWlzc2lvblR5cGUge1xyXG5cdFdvcmssXHJcblx0U3R1ZHksXHJcblx0V3JpdGUsXHJcblx0Q2hhdCxcclxuXHRNb3Rpb24sXHJcblx0VGhpbmtcclxufVxyXG5cclxuaW50ZXJmYWNlIE1pc3Npb25DYXJkSXRlbSB7XHJcblx0aWQ6IE51bWJlcjtcclxuXHRpY29uUGF0aDogU3RyaW5nO1xyXG5cdG5hbWU6IFN0cmluZztcclxuXHR0eXBlOiBNaXNzaW9uVHlwZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBhZ2VEYXRhIHtcclxuXHR0eXBlTGlzdDogTWlzc2lvbkNhcmRJdGVtW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBQYWdlSW5zdGFuY2Uge1xyXG5cdG9uTXlFdmVudDogKGU6IGFueSkgPT4gYW55O1xyXG59XHJcblxyXG5QYWdlPFBhZ2VEYXRhLCBQYWdlSW5zdGFuY2U+KHtcclxuXHRkYXRhOntcclxuXHRcdHR5cGVMaXN0OltcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAwLFxyXG5cdFx0XHRcdGljb25QYXRoOiBcIi9hc3NldHMvTWlzc2lvblR5cGUvV29yay5wbmdcIixcclxuXHRcdFx0XHRuYW1lOiBcIuW3peS9nFwiLFxyXG5cdFx0XHRcdHR5cGU6IE1pc3Npb25UeXBlLldvcmtcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdGljb25QYXRoOiBcIi9hc3NldHMvTWlzc2lvblR5cGUvU3R1ZHkucG5nXCIsXHJcblx0XHRcdFx0bmFtZTogXCLlrabkuaBcIixcclxuXHRcdFx0XHR0eXBlOiBNaXNzaW9uVHlwZS5TdHVkeVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6IDIsXHJcblx0XHRcdFx0aWNvblBhdGg6IFwiL2Fzc2V0cy9NaXNzaW9uVHlwZS9Xcml0ZS5wbmdcIixcclxuXHRcdFx0XHRuYW1lOiBcIuWGmeS9nFwiLFxyXG5cdFx0XHRcdHR5cGU6IE1pc3Npb25UeXBlLldyaXRlXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogMyxcclxuXHRcdFx0XHRpY29uUGF0aDogXCIvYXNzZXRzL01pc3Npb25UeXBlL0NoYXQucG5nXCIsXHJcblx0XHRcdFx0bmFtZTogXCLogYrlpKlcIixcclxuXHRcdFx0XHR0eXBlOiBNaXNzaW9uVHlwZS5DaGF0XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogNCxcclxuXHRcdFx0XHRpY29uUGF0aDogXCIvYXNzZXRzL01pc3Npb25UeXBlL01vdGlvbi5wbmdcIixcclxuXHRcdFx0XHRuYW1lOiBcIui/kOWKqFwiLFxyXG5cdFx0XHRcdHR5cGU6IE1pc3Npb25UeXBlLk1vdGlvblxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6IDUsXHJcblx0XHRcdFx0aWNvblBhdGg6IFwiL2Fzc2V0cy9NaXNzaW9uVHlwZS9UaGluay5wbmdcIixcclxuXHRcdFx0XHRuYW1lOiBcIuaAneiAg1wiLFxyXG5cdFx0XHRcdHR5cGU6IE1pc3Npb25UeXBlLlRoaW5rXHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9LFxyXG5cdG9uTXlFdmVudDogZnVuY3Rpb24oZTphbnkpe1xyXG5cdFx0Ly8gZS5kZXRhaWwgLy8g6Ieq5a6a5LmJ57uE5Lu26Kem5Y+R5LqL5Lu25pe25o+Q5L6b55qEZGV0YWls5a+56LGhXHJcblx0XHRjb25zb2xlLmxvZyhlKVxyXG5cdCAgfVxyXG59KSJdfQ==