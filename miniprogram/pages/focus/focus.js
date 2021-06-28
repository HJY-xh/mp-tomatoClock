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
var util_1 = require("../../utils/util");
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
            util_1.request({
                url: 'test2',
                method: "GET",
                data: {}
            }).then(function (res) {
                console.log(res);
            });
            return [2];
        });
    }); }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb2N1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUEyQztBQUMzQyxJQUFLLFdBT0o7QUFQRCxXQUFLLFdBQVc7SUFDZiw2Q0FBSSxDQUFBO0lBQ0osK0NBQUssQ0FBQTtJQUNMLCtDQUFLLENBQUE7SUFDTCw2Q0FBSSxDQUFBO0lBQ0osaURBQU0sQ0FBQTtJQUNOLCtDQUFLLENBQUE7QUFDTixDQUFDLEVBUEksV0FBVyxLQUFYLFdBQVcsUUFPZjtBQWlCRCxJQUFJLENBQXlCO0lBQzVCLElBQUksRUFBQztRQUNKLFFBQVEsRUFBQztZQUNSO2dCQUNDLEVBQUUsRUFBRSxDQUFDO2dCQUNMLFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTthQUN0QjtZQUNEO2dCQUNDLEVBQUUsRUFBRSxDQUFDO2dCQUNMLFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxXQUFXLENBQUMsS0FBSzthQUN2QjtZQUNEO2dCQUNDLEVBQUUsRUFBRSxDQUFDO2dCQUNMLFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxXQUFXLENBQUMsS0FBSzthQUN2QjtZQUNEO2dCQUNDLEVBQUUsRUFBRSxDQUFDO2dCQUNMLFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTthQUN0QjtZQUNEO2dCQUNDLEVBQUUsRUFBRSxDQUFDO2dCQUNMLFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxXQUFXLENBQUMsTUFBTTthQUN4QjtZQUNEO2dCQUNDLEVBQUUsRUFBRSxDQUFDO2dCQUNMLFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxXQUFXLENBQUMsS0FBSzthQUN2QjtTQUNEO0tBQ0Q7SUFDRCxjQUFjLEVBQUUsVUFBQyxDQUFNO1FBQ3RCLElBQU0sUUFBUSxHQUFvQixDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMxRCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLFVBQVU7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDOUIsT0FBTyxFQUFFO2dCQUNSLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ2IsR0FBRyxFQUFFLGNBQWM7aUJBQ25CLENBQUMsQ0FBQTtZQUNILENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDO0lBQ0QsTUFBTSxFQUFDOztZQUNOLGNBQU8sQ0FBQztnQkFDUCxHQUFHLEVBQUUsT0FBTztnQkFDWixNQUFNLEVBQUUsS0FBSztnQkFDYixJQUFJLEVBQUUsRUFFTDthQUNDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDakIsQ0FBQyxDQUFDLENBQUM7WUFDSCxXQUFPOztTQW1CVDtDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbFwiO1xyXG5lbnVtIE1pc3Npb25UeXBlIHtcclxuXHRXb3JrLFxyXG5cdFN0dWR5LFxyXG5cdFdyaXRlLFxyXG5cdENoYXQsXHJcblx0TW90aW9uLFxyXG5cdFRoaW5rXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWlzc2lvbkNhcmRJdGVtIHtcclxuXHRpZDogTnVtYmVyO1xyXG5cdGljb25QYXRoOiBTdHJpbmc7XHJcblx0bmFtZTogU3RyaW5nO1xyXG5cdHR5cGU6IE1pc3Npb25UeXBlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFnZURhdGEge1xyXG5cdHR5cGVMaXN0OiBNaXNzaW9uQ2FyZEl0ZW1bXTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFBhZ2VJbnN0YW5jZSB7XHJcblx0aGFuZGxlT3BlblRhc2s6IChlOiBhbnkpID0+IHZvaWQ7XHJcbn1cclxuXHJcblBhZ2U8UGFnZURhdGEsIFBhZ2VJbnN0YW5jZT4oe1xyXG5cdGRhdGE6e1xyXG5cdFx0dHlwZUxpc3Q6W1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6IDAsXHJcblx0XHRcdFx0aWNvblBhdGg6IFwiL2Fzc2V0cy9NaXNzaW9uVHlwZS9Xb3JrLnBuZ1wiLFxyXG5cdFx0XHRcdG5hbWU6IFwi5bel5L2cXCIsXHJcblx0XHRcdFx0dHlwZTogTWlzc2lvblR5cGUuV29ya1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6IDEsXHJcblx0XHRcdFx0aWNvblBhdGg6IFwiL2Fzc2V0cy9NaXNzaW9uVHlwZS9TdHVkeS5wbmdcIixcclxuXHRcdFx0XHRuYW1lOiBcIuWtpuS5oFwiLFxyXG5cdFx0XHRcdHR5cGU6IE1pc3Npb25UeXBlLlN0dWR5XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogMixcclxuXHRcdFx0XHRpY29uUGF0aDogXCIvYXNzZXRzL01pc3Npb25UeXBlL1dyaXRlLnBuZ1wiLFxyXG5cdFx0XHRcdG5hbWU6IFwi5YaZ5L2cXCIsXHJcblx0XHRcdFx0dHlwZTogTWlzc2lvblR5cGUuV3JpdGVcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAzLFxyXG5cdFx0XHRcdGljb25QYXRoOiBcIi9hc3NldHMvTWlzc2lvblR5cGUvQ2hhdC5wbmdcIixcclxuXHRcdFx0XHRuYW1lOiBcIuiBiuWkqVwiLFxyXG5cdFx0XHRcdHR5cGU6IE1pc3Npb25UeXBlLkNoYXRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiA0LFxyXG5cdFx0XHRcdGljb25QYXRoOiBcIi9hc3NldHMvTWlzc2lvblR5cGUvTW90aW9uLnBuZ1wiLFxyXG5cdFx0XHRcdG5hbWU6IFwi6L+Q5YqoXCIsXHJcblx0XHRcdFx0dHlwZTogTWlzc2lvblR5cGUuTW90aW9uXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZDogNSxcclxuXHRcdFx0XHRpY29uUGF0aDogXCIvYXNzZXRzL01pc3Npb25UeXBlL1RoaW5rLnBuZ1wiLFxyXG5cdFx0XHRcdG5hbWU6IFwi5oCd6ICDXCIsXHJcblx0XHRcdFx0dHlwZTogTWlzc2lvblR5cGUuVGhpbmtcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH0sXHJcblx0aGFuZGxlT3BlblRhc2s6IChlOiBhbnkpID0+IHtcclxuXHRcdGNvbnN0IHRhc2tJbmZvOiBNaXNzaW9uQ2FyZEl0ZW0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcclxuXHRcdHd4LnNldFN0b3JhZ2Uoe1xyXG5cdFx0XHRrZXk6IFwidGFza0luZm9cIixcclxuXHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkodGFza0luZm8pLFxyXG5cdFx0XHRzdWNjZXNzOiAoKSA9PiB7XHJcblx0XHRcdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IFwiLi4vdGFzay90YXNrXCIsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cdG9uTG9hZDphc3luYyAoKT0+e1xyXG5cdFx0cmVxdWVzdCh7XHJcblx0XHRcdHVybDogJ3Rlc3QyJyxcclxuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdC8vICAgY29kZTogcmVzLmNvZGVcclxuXHRcdFx0fVxyXG5cdFx0ICB9KS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdCAgY29uc29sZS5sb2cocmVzKVxyXG5cdFx0ICB9KTtcclxuXHRcdCAgcmV0dXJuO1xyXG5cdFx0d3gubG9naW4oe1xyXG5cdFx0XHRzdWNjZXNzIChyZXMpIHtcclxuXHRcdFx0ICBpZiAocmVzLmNvZGUpIHtcclxuXHRcdFx0XHQvL+WPkei1t+e9kee7nOivt+axglxyXG5cdFx0XHRcdHJlcXVlc3Qoe1xyXG5cdFx0XHRcdCAgdXJsOiAnbG9naW4nLFxyXG5cdFx0XHRcdCAgbWV0aG9kOiBcIlBPU1RcIixcclxuXHRcdFx0XHQgIGRhdGE6IHtcclxuXHRcdFx0XHRcdGNvZGU6IHJlcy5jb2RlXHJcblx0XHRcdFx0ICB9XHJcblx0XHRcdFx0fSkudGhlbigocmVzOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdHd4LnNldFN0b3JhZ2VTeW5jKFwidG9rZW5cIiwgcmVzLmRhdGEudG9rZW4pO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCAgfSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn55m75b2V5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpXHJcblx0XHRcdCAgfVxyXG5cdFx0XHR9XHJcblx0XHQgIH0pXHJcblx0fVxyXG59KSJdfQ==