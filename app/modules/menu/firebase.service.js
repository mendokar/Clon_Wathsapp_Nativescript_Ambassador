"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/share");
var FirebaseService = (function () {
    function FirebaseService(ngZone) {
        this.ngZone = ngZone;
        this._allItems = [];
    }
    FirebaseService.prototype.resetPassword = function (email) {
        return firebase.resetPassword({
            email: email
        }).then(function (result) {
            alert(JSON.stringify(result));
        }, function (errorMessage) {
            alert(errorMessage);
        }).catch(this.handleErrors);
    };
    FirebaseService.prototype.handleSnapshot = function (data) {
        //empty array, then refill and filter
        this._allItems = [];
        if (data) {
            for (var id in data) {
                var result = Object.assign({ id: id }, data[id]);
            }
        }
        return this._allItems;
    };
    FirebaseService.prototype.getMyWishList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = 'users';
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var results = _this.handleSnapshot(snapshot.value);
                    console.log(JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.getMyMessage = function () {
        return new Observable_1.Observable(function (observer) {
            firebase.getRemoteConfig({
                developerMode: false,
                cacheExpirationSeconds: 300,
                properties: [{
                        key: "message",
                        default: "Happy Holidays!"
                    }]
            }).then(function (result) {
                console.log("Fetched at " + result.lastFetch + (result.throttled ? " (throttled)" : ""));
                for (var entry in result.properties) {
                    observer.next(result.properties[entry]);
                }
            });
        }).share();
    };
    FirebaseService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Promise.reject(error.message);
    };
    return FirebaseService;
}());
FirebaseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.NgZone])
], FirebaseService);
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQsdURBQTBEO0FBQzFELDhDQUEyQztBQUUzQyxtQ0FBaUM7QUFHakMsSUFBYSxlQUFlO0lBQzFCLHlCQUNVLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBR2hCLGNBQVMsR0FBZSxFQUFFLENBQUM7SUFGakMsQ0FBQztJQUtILHVDQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1lBQzlCLEtBQUssRUFBRSxLQUFLO1NBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQVc7WUFDZCxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFDRCxVQUFVLFlBQWdCO1lBQ3hCLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQ0osQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsSUFBUztRQUN0QixxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNULEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksTUFBTSxHQUFTLE1BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEQsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsdUNBQWEsR0FBYjtRQUFBLGlCQWFDO1FBWkMsTUFBTSxDQUFDLElBQUksdUJBQVUsQ0FBQyxVQUFDLFFBQWE7WUFDbEMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBRWpCLElBQUksWUFBWSxHQUFHLFVBQUMsUUFBYTtnQkFDL0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ2QsSUFBSSxPQUFPLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO29CQUNuQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxQixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQztZQUNGLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsTUFBSSxJQUFNLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFJRCxzQ0FBWSxHQUFaO1FBQ0UsTUFBTSxDQUFDLElBQUksdUJBQVUsQ0FBQyxVQUFDLFFBQVk7WUFDakMsUUFBUSxDQUFDLGVBQWUsQ0FBQztnQkFDekIsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLHNCQUFzQixFQUFFLEdBQUc7Z0JBQzNCLFVBQVUsRUFBRSxDQUFDO3dCQUNiLEdBQUcsRUFBRSxTQUFTO3dCQUNkLE9BQU8sRUFBRSxpQkFBaUI7cUJBQzNCLENBQUM7YUFDSCxDQUFDLENBQUMsSUFBSSxDQUNELFVBQVUsTUFBTTtnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDekYsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNsQyxDQUFDO29CQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO1lBQ0wsQ0FBQyxDQUNKLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCxzQ0FBWSxHQUFaLFVBQWEsS0FBSztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUgsc0JBQUM7QUFBRCxDQUFDLEFBMUVELElBMEVDO0FBMUVZLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTtxQ0FHTyxhQUFNO0dBRmIsZUFBZSxDQTBFM0I7QUExRVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIE5nWm9uZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zaGFyZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxyXG4gICl7fVxyXG5cclxuICBwcml2YXRlIF9hbGxJdGVtczogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgXHJcbiAgICBcclxuICByZXNldFBhc3N3b3JkKGVtYWlsKSB7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UucmVzZXRQYXNzd29yZCh7XHJcbiAgICBlbWFpbDogZW1haWxcclxuICAgIH0pLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XHJcbiAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU25hcHNob3QoZGF0YTogYW55KSB7XHJcbiAgICAvL2VtcHR5IGFycmF5LCB0aGVuIHJlZmlsbCBhbmQgZmlsdGVyXHJcbiAgICB0aGlzLl9hbGxJdGVtcyA9IFtdO1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgZm9yIChsZXQgaWQgaW4gZGF0YSkgeyAgICAgICAgXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICg8YW55Pk9iamVjdCkuYXNzaWduKHtpZDogaWR9LCBkYXRhW2lkXSk7ICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fYWxsSXRlbXM7XHJcbiAgfVxyXG5cclxuICBnZXRNeVdpc2hMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgbGV0IHBhdGggPSAndXNlcnMnO1xyXG4gICAgICBcclxuICAgICAgICBsZXQgb25WYWx1ZUV2ZW50ID0gKHNuYXBzaG90OiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5oYW5kbGVTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdHMpKVxyXG4gICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XHJcbiAgICB9KS5zaGFyZSgpOyAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuIFxyXG5cclxuICBnZXRNeU1lc3NhZ2UoKTogT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjphbnkpID0+IHtcclxuICAgICAgZmlyZWJhc2UuZ2V0UmVtb3RlQ29uZmlnKHtcclxuICAgICAgZGV2ZWxvcGVyTW9kZTogZmFsc2UsIC8vIHBsYXkgd2l0aCB0aGlzIGJvb2xlYW4gdG8gZ2V0IG1vcmUgZnJlcXVlbnQgdXBkYXRlcyBkdXJpbmcgZGV2ZWxvcG1lbnRcclxuICAgICAgY2FjaGVFeHBpcmF0aW9uU2Vjb25kczogMzAwLCAvLyAxMCBtaW51dGVzLCBkZWZhdWx0IGlzIDEyIGhvdXJzLi4gc2V0IHRvIGEgbG93ZXIgdmFsdWUgZHVyaW5nIGRldlxyXG4gICAgICBwcm9wZXJ0aWVzOiBbe1xyXG4gICAgICBrZXk6IFwibWVzc2FnZVwiLFxyXG4gICAgICBkZWZhdWx0OiBcIkhhcHB5IEhvbGlkYXlzIVwiXHJcbiAgICB9XVxyXG4gIH0pLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJGZXRjaGVkIGF0IFwiICsgcmVzdWx0Lmxhc3RGZXRjaCArIChyZXN1bHQudGhyb3R0bGVkID8gXCIgKHRocm90dGxlZClcIiA6IFwiXCIpKTtcclxuICAgICAgICAgIGZvciAobGV0IGVudHJ5IGluIHJlc3VsdC5wcm9wZXJ0aWVzKSBcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdC5wcm9wZXJ0aWVzW2VudHJ5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gIH0pLnNoYXJlKCk7XHJcbn1cclxuXHJcbmhhbmRsZUVycm9ycyhlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4gICAgXHJcblxyXG4iXX0=