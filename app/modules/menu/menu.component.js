"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_1 = require("data/observable");
var nativescript_sidedrawer_1 = require("nativescript-sidedrawer");
var router_1 = require("nativescript-angular/router");
var color_1 = require("tns-core-modules/color/color");
var image_source_1 = require("tns-core-modules/image-source/image-source");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyw4Q0FBdUQ7QUFDdkQsbUVBQTZFO0FBQzdFLHNEQUE4RDtBQUM5RCxzREFBcUQ7QUFDckQsMkVBQXlFO0FBT3pFLElBQWEsYUFBYTtJQUFTLGlDQUFVO0lBYTVDLHVCQUFvQixNQUF1QjtRQUEzQyxZQUNDLGlCQUFPLFNBbUNQO1FBcENtQixZQUFNLEdBQU4sTUFBTSxDQUFpQjtRQVRuQyxRQUFFLEdBQVcsQ0FBQyxDQUFBO1FBWXJCLElBQUksR0FBRyxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBRzVCLHVDQUFhLENBQUMsS0FBSyxDQUFDO1lBQ25CLFNBQVMsRUFBRSxDQUFDO29CQUNYLEtBQUssRUFBRSxNQUFNO29CQUNiLFdBQVcsRUFBRSxZQUFZO29CQUN6QixPQUFPLEVBQUUsWUFBWTtpQkFDckIsQ0FBQztZQUNGLEtBQUssRUFBQyxFQUFFO1lBQ1IsUUFBUSxFQUFFLDZDQUE2QztZQUN2RCxRQUFRLEVBQUUsVUFBQyxLQUFLO2dCQUNmLEtBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFBO2dCQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRW5CLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQixLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztvQkFDbkMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBQzt3QkFDbEMsVUFBVSxFQUFDOzRCQUNWLElBQUksRUFBQyxVQUFVOzRCQUNmLFFBQVEsRUFBQyxHQUFHOzRCQUNaLEtBQUssRUFBQyxRQUFRO3lCQUNkO3FCQUNELENBQUMsQ0FBQTtnQkFDSCxDQUFDO1lBQ0YsQ0FBQztZQUNELE9BQU8sRUFBRSxLQUFJO1lBQ2IsZUFBZSxFQUFDLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQztZQUNwQyxxQkFBcUIsRUFBQyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUM7U0FDMUMsQ0FBQyxDQUFDOztJQUlKLENBQUM7SUE1Q0Qsc0JBQUksNEJBQUM7YUFBTDtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFBO1FBQ2YsQ0FBQzthQUNELFVBQU0sQ0FBUztZQUNkLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ1gsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNsQyxDQUFDOzs7T0FKQTtJQTRDRCxnQ0FBUSxHQUFSO1FBQ0MsdUNBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBRUYsb0JBQUM7QUFBRCxDQUFDLEFBdkRELENBQW1DLHVCQUFVLEdBdUQ1QztBQXZEWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsb0NBQW9DO1FBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO0tBQ2hELENBQUM7cUNBYzBCLHlCQUFnQjtHQWIvQixhQUFhLENBdUR6QjtBQXZEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJlZ2lzdHJvVXN1YXJpbyB9IGZyb20gXCIuLi9sb2dpbi91c2VyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSdcclxuaW1wb3J0IHsgVG5zU2lkZURyYXdlciwgVG5zU2lkZURyYXdlck9wdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtc2lkZWRyYXdlcidcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yL2NvbG9yXCI7XHJcbmltcG9ydCB7IEltYWdlU291cmNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlL2ltYWdlLXNvdXJjZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLW1lbnVcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL21vZHVsZXMvbWVudS9tZW51LmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCIuL21vZHVsZXMvbWVudS9tZW51LmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuXHQvLyBZb3VyIFR5cGVTY3JpcHQgbG9naWMgZ29lcyBoZXJlXHJcblx0dXN1YXJpbzogUmVnaXN0cm9Vc3VhcmlvO1xyXG5cclxuXHRwcml2YXRlIF9pOiBudW1iZXIgPSAwXHJcblx0Z2V0IGkoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9pXHJcblx0fVxyXG5cdHNldCBpKGk6IG51bWJlcikge1xyXG5cdFx0dGhpcy5faSA9IGlcclxuXHRcdHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2knLCBpKVxyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0RXg6Um91dGVyRXh0ZW5zaW9ucykge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR2YXIgaW1nID0gbmV3IEltYWdlU291cmNlKCk7XHJcblx0XHRcclxuXHJcblx0XHRUbnNTaWRlRHJhd2VyLmJ1aWxkKHtcclxuXHRcdFx0dGVtcGxhdGVzOiBbe1xyXG5cdFx0XHRcdHRpdGxlOiAnSG9tZScsXHJcblx0XHRcdFx0YW5kcm9pZEljb246ICdob21lc2tldGNoJyxcclxuXHRcdFx0XHRpb3NJY29uOiAnaG9tZXNrZXRjaCcsXHJcblx0XHRcdH1dLFxyXG5cdFx0XHR0aXRsZTpcIlwiLFxyXG5cdFx0XHRzdWJ0aXRsZTogJ01hbnRlbnRlIENvbmVjdGFkbyBDb24gTG9zIFF1ZSBNYXMgUXVpZXJlcyEnLFxyXG5cdFx0XHRsaXN0ZW5lcjogKGluZGV4KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pID0gaW5kZXhcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhpbmRleCk7XHJcblxyXG5cdFx0XHRcdGlmIChpbmRleCA9PSAwKSB7XHJcblx0XHRcdFx0XHRhbGVydChcIm5vcyBmdWltb3MgcGFyYSBlbCBtZW51IDFcIik7XHJcblx0XHRcdFx0XHR0aGlzLnJvdXRFeC5uYXZpZ2F0ZShbXCJyZWdpc3RyYXJcIl0se1xyXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOntcclxuXHRcdFx0XHRcdFx0XHRuYW1lOlwic2xpZGVUb3BcIixcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjo1MDAsXHJcblx0XHRcdFx0XHRcdFx0Y3VydmU6XCJsaW5lYXJcIlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGV4dDogdGhpcyxcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOm5ldyBDb2xvcihcIiM3MGI3ZmVcIiksXHJcblx0XHRcdGhlYWRlckJhY2tncm91bmRDb2xvcjpuZXcgQ29sb3IoXCIjMjc5M2ZmXCIpLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0XHJcblxyXG5cdH1cclxuXHJcblx0dG9nZ2xlaXQoKSB7XHJcblx0XHRUbnNTaWRlRHJhd2VyLnRvZ2dsZSgpXHJcblx0fVxyXG5cclxufSJdfQ==