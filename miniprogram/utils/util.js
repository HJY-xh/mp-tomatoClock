"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = exports.formatTime = void 0;
var app = getApp();
var formatTime = function (date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return ([year, month, day].map(formatNumber).join('/') +
        ' ' +
        [hour, minute, second].map(formatNumber).join(':'));
};
exports.formatTime = formatTime;
var formatNumber = function (n) {
    var s = n.toString();
    return s[1] ? s : '0' + s;
};
var request = function (params) {
    return new Promise(function (resolve, reject) {
        wx.request(__assign(__assign({}, params), { header: {
                "token": wx.getStorageSync("token")
            }, url: app.globalData.host + params.url, success: function (res) {
                resolve(res);
            }, fail: function (err) {
                reject(err);
            }, complete: function () {
            } }));
    });
};
exports.request = request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUNkLElBQU0sVUFBVSxHQUFHLFVBQUMsSUFBVTtJQUNuQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDL0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNqQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDMUIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzVCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNoQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFFaEMsT0FBTyxDQUNMLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUM5QyxHQUFHO1FBQ0gsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQ25ELENBQUE7QUFDSCxDQUFDLENBQUE7QUFiWSxRQUFBLFVBQVUsY0FhdEI7QUFFRCxJQUFNLFlBQVksR0FBRyxVQUFDLENBQVM7SUFDN0IsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ3RCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUE7QUFDM0IsQ0FBQyxDQUFBO0FBRU0sSUFBTSxPQUFPLEdBQUcsVUFBQyxNQUFXO0lBQy9CLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNqQyxFQUFFLENBQUMsT0FBTyx1QkFDTCxNQUFNLEtBQ1QsTUFBTSxFQUFFO2dCQUNOLE9BQU8sRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQzthQUNwQyxFQUNELEdBQUcsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxFQUNyQyxPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNmLENBQUMsRUFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHO2dCQUNSLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLENBQUMsRUFDRCxRQUFRLEVBQUU7WUFFVixDQUFDLElBQ0QsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBbkJZLFFBQUEsT0FBTyxXQW1CbkIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHAgPSBnZXRBcHAoKTtcbmV4cG9ydCBjb25zdCBmb3JtYXRUaW1lID0gKGRhdGU6IERhdGUpID0+IHtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKClcbiAgY29uc3QgaG91ciA9IGRhdGUuZ2V0SG91cnMoKVxuICBjb25zdCBtaW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKVxuICBjb25zdCBzZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKVxuXG4gIHJldHVybiAoXG4gICAgW3llYXIsIG1vbnRoLCBkYXldLm1hcChmb3JtYXROdW1iZXIpLmpvaW4oJy8nKSArXG4gICAgJyAnICtcbiAgICBbaG91ciwgbWludXRlLCBzZWNvbmRdLm1hcChmb3JtYXROdW1iZXIpLmpvaW4oJzonKVxuICApXG59XG5cbmNvbnN0IGZvcm1hdE51bWJlciA9IChuOiBudW1iZXIpID0+IHtcbiAgY29uc3QgcyA9IG4udG9TdHJpbmcoKVxuICByZXR1cm4gc1sxXSA/IHMgOiAnMCcgKyBzXG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0ID0gKHBhcmFtczogYW55KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgIFwidG9rZW5cIjogd3guZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKVxuICAgICAgICB9LFxuICAgICAgICB1cmw6IGFwcC5nbG9iYWxEYXRhLmhvc3QgKyBwYXJhbXMudXJsLFxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxufSJdfQ==