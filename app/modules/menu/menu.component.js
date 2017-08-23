"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_1 = require("data/observable");
var nativescript_sidedrawer_1 = require("nativescript-sidedrawer");
var router_1 = require("nativescript-angular/router");
var color_1 = require("tns-core-modules/color/color");
var image_source_1 = require("tns-core-modules/image-source/image-source");
var firebase = require("nativescript-plugin-firebase");
var MenuComponent = (function (_super) {
    __extends(MenuComponent, _super);
    function MenuComponent(routEx) {
        var _this = _super.call(this) || this;
        _this.routEx = routEx;
        _this._i = 0;
        var img = new image_source_1.ImageSource();
        nativescript_sidedrawer_1.TnsSideDrawer.build({
            templates: [{
                    title: 'Home',
                    androidIcon: 'homesketch',
                    iosIcon: 'homesketch',
                }, {
                    title: 'Chats',
                    androidIcon: 'chat',
                    iosIcon: 'chat',
                },
                {
                    title: 'Cerrar Sesión',
                    androidIcon: 'logout',
                    iosIcon: 'logout',
                }],
            title: "",
            subtitle: 'Mantente Conectado Con Los Que Mas Quieres!',
            listener: function (index) {
                _this.i = index;
                console.log(index);
                if (index == 0) {
                    alert("nos fuimos para el menu 1");
                    _this.routEx.navigate(["registrar"], {
                        transition: {
                            name: "slideTop",
                            duration: 500,
                            curve: "linear"
                        }
                    });
                }
            },
            context: _this,
            backgroundColor: new color_1.Color("#70b7fe"),
            headerBackgroundColor: new color_1.Color("#2793ff"),
        });
        return _this;
    }
    Object.defineProperty(MenuComponent.prototype, "i", {
        get: function () {
            return this._i;
        },
        set: function (i) {
            this._i = i;
            this.notifyPropertyChange('i', i);
        },
        enumerable: true,
        configurable: true
    });
    MenuComponent.prototype.toggleit = function () {
        nativescript_sidedrawer_1.TnsSideDrawer.toggle();
    };
    /**
     * listenerTable
     */
    MenuComponent.prototype.listenerTable = function () {
        var onChildEvent = function (result) {
            console.log("Event type: " + result.type);
            console.log("Key: " + result.key);
            console.log("Value: " + JSON.stringify(result.value));
        };
        // listen to changes in the /users path
        firebase.addChildEventListener(onChildEvent, "/users").then(function (listenerWrapper) {
            var path = listenerWrapper.path;
            var listeners = listenerWrapper.listeners; // an Array of listeners added
            // you can store the wrapper somewhere to later call 'removeEventListeners'
        });
    };
    return MenuComponent;
}(observable_1.Observable));
MenuComponent = __decorate([
    core_1.Component({
        selector: "app-menu",
        templateUrl: "./modules/menu/menu.component.html",
        styleUrls: ["./modules/menu/menu.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCw4Q0FBdUQ7QUFDdkQsbUVBQTZFO0FBQzdFLHNEQUErRDtBQUMvRCxzREFBcUQ7QUFDckQsMkVBQXlFO0FBQ3pFLHVEQUEwRDtBQVMxRCxJQUFhLGFBQWE7SUFBVyxpQ0FBVTtJQWE5Qyx1QkFBb0IsTUFBd0I7UUFBNUMsWUFHQyxpQkFBTyxTQTZDUDtRQWhEbUIsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7UUFUcEMsUUFBRSxHQUFXLENBQUMsQ0FBQTtRQWNyQixJQUFJLEdBQUcsR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQztRQUc1Qix1Q0FBYSxDQUFDLEtBQUssQ0FBQztZQUNuQixTQUFTLEVBQUUsQ0FBQztvQkFDWCxLQUFLLEVBQUUsTUFBTTtvQkFDYixXQUFXLEVBQUUsWUFBWTtvQkFDekIsT0FBTyxFQUFFLFlBQVk7aUJBQ3JCLEVBQUU7b0JBQ0YsS0FBSyxFQUFFLE9BQU87b0JBQ2QsV0FBVyxFQUFFLE1BQU07b0JBQ25CLE9BQU8sRUFBRSxNQUFNO2lCQUNmO2dCQUVEO29CQUNDLEtBQUssRUFBRSxlQUFlO29CQUN0QixXQUFXLEVBQUUsUUFBUTtvQkFDckIsT0FBTyxFQUFFLFFBQVE7aUJBQ2pCLENBQUM7WUFDRixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSw2Q0FBNkM7WUFDdkQsUUFBUSxFQUFFLFVBQUMsS0FBSztnQkFDZixLQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQTtnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUVuQixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEIsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7b0JBQ25DLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUU7d0JBQ25DLFVBQVUsRUFBRTs0QkFDWCxJQUFJLEVBQUUsVUFBVTs0QkFDaEIsUUFBUSxFQUFFLEdBQUc7NEJBQ2IsS0FBSyxFQUFFLFFBQVE7eUJBQ2Y7cUJBQ0QsQ0FBQyxDQUFBO2dCQUNILENBQUM7WUFDRixDQUFDO1lBQ0QsT0FBTyxFQUFFLEtBQUk7WUFDYixlQUFlLEVBQUUsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDO1lBQ3JDLHFCQUFxQixFQUFFLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQztTQUMzQyxDQUFDLENBQUM7O0lBSUosQ0FBQztJQXhERCxzQkFBSSw0QkFBQzthQUFMO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUE7UUFDZixDQUFDO2FBQ0QsVUFBTSxDQUFTO1lBQ2QsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDWCxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2xDLENBQUM7OztPQUpBO0lBd0RELGdDQUFRLEdBQVI7UUFDQyx1Q0FBYSxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRztJQUNJLHFDQUFhLEdBQXBCO1FBQ0MsSUFBSSxZQUFZLEdBQUcsVUFBUyxNQUFNO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUM7UUFFRix1Q0FBdUM7UUFDdkMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQzVELFVBQVMsZUFBZTtZQUN0QixJQUFJLElBQUksR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQ2hDLElBQUksU0FBUyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyw4QkFBOEI7WUFDekUsMkVBQTJFO1FBQzdFLENBQUMsQ0FDQyxDQUFDO0lBQ0wsQ0FBQztJQVFGLG9CQUFDO0FBQUQsQ0FBQyxBQTdGRCxDQUFxQyx1QkFBVSxHQTZGOUM7QUE3RlksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLG9DQUFvQztRQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztLQUNoRCxDQUFDO3FDQWMyQix5QkFBZ0I7R0FiaEMsYUFBYSxDQTZGekI7QUE3Rlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJlZ2lzdHJvVXN1YXJpbyB9IGZyb20gXCIuLi9sb2dpbi91c2VyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSdcclxuaW1wb3J0IHsgVG5zU2lkZURyYXdlciwgVG5zU2lkZURyYXdlck9wdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtc2lkZWRyYXdlcidcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvci9jb2xvclwiO1xyXG5pbXBvcnQgeyBJbWFnZVNvdXJjZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZS9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuL2ZpcmViYXNlLnNlcnZpY2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtbWVudVwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vbW9kdWxlcy9tZW51L21lbnUuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFtcIi4vbW9kdWxlcy9tZW51L21lbnUuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBleHRlbmRzICAgT2JzZXJ2YWJsZSAge1xyXG5cdC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcclxuXHR1c3VhcmlvOiBSZWdpc3Ryb1VzdWFyaW87XHJcblxyXG5cdHByaXZhdGUgX2k6IG51bWJlciA9IDBcclxuXHRnZXQgaSgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2lcclxuXHR9XHJcblx0c2V0IGkoaTogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9pID0gaVxyXG5cdFx0dGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaScsIGkpXHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRFeDogUm91dGVyRXh0ZW5zaW9ucyxcclxuXHRcdC8vcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcclxuXHQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dmFyIGltZyA9IG5ldyBJbWFnZVNvdXJjZSgpO1xyXG5cclxuXHJcblx0XHRUbnNTaWRlRHJhd2VyLmJ1aWxkKHtcclxuXHRcdFx0dGVtcGxhdGVzOiBbe1xyXG5cdFx0XHRcdHRpdGxlOiAnSG9tZScsXHJcblx0XHRcdFx0YW5kcm9pZEljb246ICdob21lc2tldGNoJyxcclxuXHRcdFx0XHRpb3NJY29uOiAnaG9tZXNrZXRjaCcsXHJcblx0XHRcdH0sIHtcclxuXHRcdFx0XHR0aXRsZTogJ0NoYXRzJyxcclxuXHRcdFx0XHRhbmRyb2lkSWNvbjogJ2NoYXQnLFxyXG5cdFx0XHRcdGlvc0ljb246ICdjaGF0JyxcclxuXHRcdFx0fVxyXG5cdFx0XHRcdCxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRpdGxlOiAnQ2VycmFyIFNlc2nDs24nLFxyXG5cdFx0XHRcdGFuZHJvaWRJY29uOiAnbG9nb3V0JyxcclxuXHRcdFx0XHRpb3NJY29uOiAnbG9nb3V0JyxcclxuXHRcdFx0fV0sXHJcblx0XHRcdHRpdGxlOiBcIlwiLFxyXG5cdFx0XHRzdWJ0aXRsZTogJ01hbnRlbnRlIENvbmVjdGFkbyBDb24gTG9zIFF1ZSBNYXMgUXVpZXJlcyEnLFxyXG5cdFx0XHRsaXN0ZW5lcjogKGluZGV4KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pID0gaW5kZXhcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhpbmRleCk7XHJcblxyXG5cdFx0XHRcdGlmIChpbmRleCA9PSAwKSB7XHJcblx0XHRcdFx0XHRhbGVydChcIm5vcyBmdWltb3MgcGFyYSBlbCBtZW51IDFcIik7XHJcblx0XHRcdFx0XHR0aGlzLnJvdXRFeC5uYXZpZ2F0ZShbXCJyZWdpc3RyYXJcIl0sIHtcclxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRcdG5hbWU6IFwic2xpZGVUb3BcIixcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNTAwLFxyXG5cdFx0XHRcdFx0XHRcdGN1cnZlOiBcImxpbmVhclwiXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb250ZXh0OiB0aGlzLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcIiM3MGI3ZmVcIiksXHJcblx0XHRcdGhlYWRlckJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwiIzI3OTNmZlwiKSxcclxuXHRcdH0pO1xyXG5cclxuXHJcblxyXG5cdH1cclxuXHJcblx0dG9nZ2xlaXQoKSB7XHJcblx0XHRUbnNTaWRlRHJhd2VyLnRvZ2dsZSgpXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBsaXN0ZW5lclRhYmxlXHJcblx0ICovXHJcblx0cHVibGljIGxpc3RlbmVyVGFibGUoKSB7XHJcblx0XHR2YXIgb25DaGlsZEV2ZW50ID0gZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiRXZlbnQgdHlwZTogXCIgKyByZXN1bHQudHlwZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiS2V5OiBcIiArIHJlc3VsdC5rZXkpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIlZhbHVlOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdC52YWx1ZSkpO1xyXG5cdFx0ICB9O1xyXG5cdFx0XHJcblx0XHQgIC8vIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSAvdXNlcnMgcGF0aFxyXG5cdFx0ICBmaXJlYmFzZS5hZGRDaGlsZEV2ZW50TGlzdGVuZXIob25DaGlsZEV2ZW50LCBcIi91c2Vyc1wiKS50aGVuKFxyXG5cdFx0XHRmdW5jdGlvbihsaXN0ZW5lcldyYXBwZXIpIHtcclxuXHRcdFx0ICB2YXIgcGF0aCA9IGxpc3RlbmVyV3JhcHBlci5wYXRoO1xyXG5cdFx0XHQgIHZhciBsaXN0ZW5lcnMgPSBsaXN0ZW5lcldyYXBwZXIubGlzdGVuZXJzOyAvLyBhbiBBcnJheSBvZiBsaXN0ZW5lcnMgYWRkZWRcclxuXHRcdFx0ICAvLyB5b3UgY2FuIHN0b3JlIHRoZSB3cmFwcGVyIHNvbWV3aGVyZSB0byBsYXRlciBjYWxsICdyZW1vdmVFdmVudExpc3RlbmVycydcclxuXHRcdFx0fVxyXG5cdFx0ICApO1xyXG5cdH1cclxuXHJcblx0LypuZ09uSW5pdCgpe1xyXG5cdFx0bGV0IGFycmU9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0TXlXaXNoTGlzdCgpO1xyXG5cdFx0XHJcblx0ICB9Ki9cclxuXHJcblxyXG59Il19