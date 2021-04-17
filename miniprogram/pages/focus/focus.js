"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    },
    onLoad: function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            wx.request({
                url: 'http://localhost:4000/test',
                success: function (res) {
                    console.log(res);
                }
            });
            return [2];
        });
    }); }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb2N1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUssV0FPSjtBQVBELFdBQUssV0FBVztJQUNmLDZDQUFJLENBQUE7SUFDSiwrQ0FBSyxDQUFBO0lBQ0wsK0NBQUssQ0FBQTtJQUNMLDZDQUFJLENBQUE7SUFDSixpREFBTSxDQUFBO0lBQ04sK0NBQUssQ0FBQTtBQUNOLENBQUMsRUFQSSxXQUFXLEtBQVgsV0FBVyxRQU9mO0FBaUJELElBQUksQ0FBeUI7SUFDNUIsSUFBSSxFQUFDO1FBQ0osUUFBUSxFQUFDO1lBQ1I7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO2FBQ3RCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxLQUFLO2FBQ3ZCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxLQUFLO2FBQ3ZCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO2FBQ3RCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxNQUFNO2FBQ3hCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxLQUFLO2FBQ3ZCO1NBQ0Q7S0FDRDtJQUNELGNBQWMsRUFBRSxVQUFDLENBQU07UUFDdEIsSUFBTSxRQUFRLEdBQW9CLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzFELEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsVUFBVTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUM5QixPQUFPLEVBQUU7Z0JBQ1IsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDYixHQUFHLEVBQUUsY0FBYztpQkFDbkIsQ0FBQyxDQUFBO1lBQ0gsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFDRCxNQUFNLEVBQUM7O1lBQ04sRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVixHQUFHLEVBQUUsNEJBQTRCO2dCQUNqQyxPQUFPLFlBQUUsR0FBRztvQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNsQixDQUFDO2FBQ0MsQ0FBQyxDQUFBOzs7U0FDSjtDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImVudW0gTWlzc2lvblR5cGUge1xyXG5cdFdvcmssXHJcblx0U3R1ZHksXHJcblx0V3JpdGUsXHJcblx0Q2hhdCxcclxuXHRNb3Rpb24sXHJcblx0VGhpbmtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNaXNzaW9uQ2FyZEl0ZW0ge1xyXG5cdGlkOiBOdW1iZXI7XHJcblx0aWNvblBhdGg6IFN0cmluZztcclxuXHRuYW1lOiBTdHJpbmc7XHJcblx0dHlwZTogTWlzc2lvblR5cGU7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQYWdlRGF0YSB7XHJcblx0dHlwZUxpc3Q6IE1pc3Npb25DYXJkSXRlbVtdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFnZUluc3RhbmNlIHtcclxuXHRoYW5kbGVPcGVuVGFzazogKGU6IGFueSkgPT4gdm9pZDtcclxufVxyXG5cclxuUGFnZTxQYWdlRGF0YSwgUGFnZUluc3RhbmNlPih7XHJcblx0ZGF0YTp7XHJcblx0XHR0eXBlTGlzdDpbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogMCxcclxuXHRcdFx0XHRpY29uUGF0aDogXCIvYXNzZXRzL01pc3Npb25UeXBlL1dvcmsucG5nXCIsXHJcblx0XHRcdFx0bmFtZTogXCLlt6XkvZxcIixcclxuXHRcdFx0XHR0eXBlOiBNaXNzaW9uVHlwZS5Xb3JrXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogMSxcclxuXHRcdFx0XHRpY29uUGF0aDogXCIvYXNzZXRzL01pc3Npb25UeXBlL1N0dWR5LnBuZ1wiLFxyXG5cdFx0XHRcdG5hbWU6IFwi5a2m5LmgXCIsXHJcblx0XHRcdFx0dHlwZTogTWlzc2lvblR5cGUuU3R1ZHlcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAyLFxyXG5cdFx0XHRcdGljb25QYXRoOiBcIi9hc3NldHMvTWlzc2lvblR5cGUvV3JpdGUucG5nXCIsXHJcblx0XHRcdFx0bmFtZTogXCLlhpnkvZxcIixcclxuXHRcdFx0XHR0eXBlOiBNaXNzaW9uVHlwZS5Xcml0ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6IDMsXHJcblx0XHRcdFx0aWNvblBhdGg6IFwiL2Fzc2V0cy9NaXNzaW9uVHlwZS9DaGF0LnBuZ1wiLFxyXG5cdFx0XHRcdG5hbWU6IFwi6IGK5aSpXCIsXHJcblx0XHRcdFx0dHlwZTogTWlzc2lvblR5cGUuQ2hhdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6IDQsXHJcblx0XHRcdFx0aWNvblBhdGg6IFwiL2Fzc2V0cy9NaXNzaW9uVHlwZS9Nb3Rpb24ucG5nXCIsXHJcblx0XHRcdFx0bmFtZTogXCLov5DliqhcIixcclxuXHRcdFx0XHR0eXBlOiBNaXNzaW9uVHlwZS5Nb3Rpb25cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiA1LFxyXG5cdFx0XHRcdGljb25QYXRoOiBcIi9hc3NldHMvTWlzc2lvblR5cGUvVGhpbmsucG5nXCIsXHJcblx0XHRcdFx0bmFtZTogXCLmgJ3ogINcIixcclxuXHRcdFx0XHR0eXBlOiBNaXNzaW9uVHlwZS5UaGlua1xyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fSxcclxuXHRoYW5kbGVPcGVuVGFzazogKGU6IGFueSkgPT4ge1xyXG5cdFx0Y29uc3QgdGFza0luZm86IE1pc3Npb25DYXJkSXRlbSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xyXG5cdFx0d3guc2V0U3RvcmFnZSh7XHJcblx0XHRcdGtleTogXCJ0YXNrSW5mb1wiLFxyXG5cdFx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeSh0YXNrSW5mbyksXHJcblx0XHRcdHN1Y2Nlc3M6ICgpID0+IHtcclxuXHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogXCIuLi90YXNrL3Rhc2tcIixcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH0sXHJcblx0b25Mb2FkOmFzeW5jICgpPT57XHJcblx0XHR3eC5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsOiAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3Rlc3QnLCBcclxuXHRcdFx0c3VjY2VzcyAocmVzKSB7XHJcblx0XHRcdCAgY29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHR9XHJcblx0XHQgIH0pXHJcblx0fVxyXG59KSJdfQ==