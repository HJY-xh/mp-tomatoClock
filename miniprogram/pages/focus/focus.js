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
            wx.login({
                success: function (res) {
                    console.log(res, 111111111111);
                    if (res.code) {
                        wx.request({
                            url: 'http://127.0.0.1:4000/login',
                            method: "POST",
                            data: {
                                code: res.code
                            },
                            success: function (res) {
                                console.log(res);
                            }
                        });
                    }
                    else {
                        console.log('登录失败！' + res.errMsg);
                    }
                }
            });
            return [2];
        });
    }); }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb2N1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUssV0FPSjtBQVBELFdBQUssV0FBVztJQUNmLDZDQUFJLENBQUE7SUFDSiwrQ0FBSyxDQUFBO0lBQ0wsK0NBQUssQ0FBQTtJQUNMLDZDQUFJLENBQUE7SUFDSixpREFBTSxDQUFBO0lBQ04sK0NBQUssQ0FBQTtBQUNOLENBQUMsRUFQSSxXQUFXLEtBQVgsV0FBVyxRQU9mO0FBaUJELElBQUksQ0FBeUI7SUFDNUIsSUFBSSxFQUFDO1FBQ0osUUFBUSxFQUFDO1lBQ1I7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO2FBQ3RCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxLQUFLO2FBQ3ZCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxLQUFLO2FBQ3ZCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO2FBQ3RCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxNQUFNO2FBQ3hCO1lBQ0Q7Z0JBQ0MsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFdBQVcsQ0FBQyxLQUFLO2FBQ3ZCO1NBQ0Q7S0FDRDtJQUNELGNBQWMsRUFBRSxVQUFDLENBQU07UUFDdEIsSUFBTSxRQUFRLEdBQW9CLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzFELEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsVUFBVTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUM5QixPQUFPLEVBQUU7Z0JBQ1IsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDYixHQUFHLEVBQUUsY0FBYztpQkFDbkIsQ0FBQyxDQUFBO1lBQ0gsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFDRCxNQUFNLEVBQUM7O1lBQ04sRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDUixPQUFPLFlBQUUsR0FBRztvQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxZQUFZLENBQUMsQ0FBQTtvQkFDNUIsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO3dCQUVmLEVBQUUsQ0FBQyxPQUFPLENBQUM7NEJBQ1QsR0FBRyxFQUFFLDZCQUE2Qjs0QkFDbEMsTUFBTSxFQUFFLE1BQU07NEJBQ2QsSUFBSSxFQUFFO2dDQUNQLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTs2QkFDWjs0QkFDRCxPQUFPLFlBQUMsR0FBRztnQ0FDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBOzRCQUNqQixDQUFDO3lCQUNGLENBQUMsQ0FBQTtxQkFDQTt5QkFBTTt3QkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7cUJBQy9CO2dCQUNILENBQUM7YUFDQyxDQUFDLENBQUE7OztTQUNKO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZW51bSBNaXNzaW9uVHlwZSB7XHJcblx0V29yayxcclxuXHRTdHVkeSxcclxuXHRXcml0ZSxcclxuXHRDaGF0LFxyXG5cdE1vdGlvbixcclxuXHRUaGlua1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1pc3Npb25DYXJkSXRlbSB7XHJcblx0aWQ6IE51bWJlcjtcclxuXHRpY29uUGF0aDogU3RyaW5nO1xyXG5cdG5hbWU6IFN0cmluZztcclxuXHR0eXBlOiBNaXNzaW9uVHlwZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBhZ2VEYXRhIHtcclxuXHR0eXBlTGlzdDogTWlzc2lvbkNhcmRJdGVtW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBQYWdlSW5zdGFuY2Uge1xyXG5cdGhhbmRsZU9wZW5UYXNrOiAoZTogYW55KSA9PiB2b2lkO1xyXG59XHJcblxyXG5QYWdlPFBhZ2VEYXRhLCBQYWdlSW5zdGFuY2U+KHtcclxuXHRkYXRhOntcclxuXHRcdHR5cGVMaXN0OltcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAwLFxyXG5cdFx0XHRcdGljb25QYXRoOiBcIi9hc3NldHMvTWlzc2lvblR5cGUvV29yay5wbmdcIixcclxuXHRcdFx0XHRuYW1lOiBcIuW3peS9nFwiLFxyXG5cdFx0XHRcdHR5cGU6IE1pc3Npb25UeXBlLldvcmtcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdGljb25QYXRoOiBcIi9hc3NldHMvTWlzc2lvblR5cGUvU3R1ZHkucG5nXCIsXHJcblx0XHRcdFx0bmFtZTogXCLlrabkuaBcIixcclxuXHRcdFx0XHR0eXBlOiBNaXNzaW9uVHlwZS5TdHVkeVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6IDIsXHJcblx0XHRcdFx0aWNvblBhdGg6IFwiL2Fzc2V0cy9NaXNzaW9uVHlwZS9Xcml0ZS5wbmdcIixcclxuXHRcdFx0XHRuYW1lOiBcIuWGmeS9nFwiLFxyXG5cdFx0XHRcdHR5cGU6IE1pc3Npb25UeXBlLldyaXRlXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogMyxcclxuXHRcdFx0XHRpY29uUGF0aDogXCIvYXNzZXRzL01pc3Npb25UeXBlL0NoYXQucG5nXCIsXHJcblx0XHRcdFx0bmFtZTogXCLogYrlpKlcIixcclxuXHRcdFx0XHR0eXBlOiBNaXNzaW9uVHlwZS5DaGF0XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogNCxcclxuXHRcdFx0XHRpY29uUGF0aDogXCIvYXNzZXRzL01pc3Npb25UeXBlL01vdGlvbi5wbmdcIixcclxuXHRcdFx0XHRuYW1lOiBcIui/kOWKqFwiLFxyXG5cdFx0XHRcdHR5cGU6IE1pc3Npb25UeXBlLk1vdGlvblxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6IDUsXHJcblx0XHRcdFx0aWNvblBhdGg6IFwiL2Fzc2V0cy9NaXNzaW9uVHlwZS9UaGluay5wbmdcIixcclxuXHRcdFx0XHRuYW1lOiBcIuaAneiAg1wiLFxyXG5cdFx0XHRcdHR5cGU6IE1pc3Npb25UeXBlLlRoaW5rXHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9LFxyXG5cdGhhbmRsZU9wZW5UYXNrOiAoZTogYW55KSA9PiB7XHJcblx0XHRjb25zdCB0YXNrSW5mbzogTWlzc2lvbkNhcmRJdGVtID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XHJcblx0XHR3eC5zZXRTdG9yYWdlKHtcclxuXHRcdFx0a2V5OiBcInRhc2tJbmZvXCIsXHJcblx0XHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KHRhc2tJbmZvKSxcclxuXHRcdFx0c3VjY2VzczogKCkgPT4ge1xyXG5cdFx0XHRcdHd4Lm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBcIi4uL3Rhc2svdGFza1wiLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSxcclxuXHRvbkxvYWQ6YXN5bmMgKCk9PntcclxuXHRcdHd4LmxvZ2luKHtcclxuXHRcdFx0c3VjY2VzcyAocmVzKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzLDExMTExMTExMTExMSlcclxuXHRcdFx0ICBpZiAocmVzLmNvZGUpIHtcclxuXHRcdFx0XHQvL+WPkei1t+e9kee7nOivt+axglxyXG5cdFx0XHRcdHd4LnJlcXVlc3Qoe1xyXG5cdFx0XHRcdCAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo0MDAwL2xvZ2luJyxcclxuXHRcdFx0XHQgIG1ldGhvZDogXCJQT1NUXCIsXHJcblx0XHRcdFx0ICBkYXRhOiB7XHJcblx0XHRcdFx0XHRjb2RlOiByZXMuY29kZVxyXG5cdFx0XHRcdCAgfSxcclxuXHRcdFx0XHQgIHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHQgIGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHQgIH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQgIH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+eZu+W9leWksei0pe+8gScgKyByZXMuZXJyTXNnKVxyXG5cdFx0XHQgIH1cclxuXHRcdFx0fVxyXG5cdFx0ICB9KVxyXG5cdH1cclxufSkiXX0=