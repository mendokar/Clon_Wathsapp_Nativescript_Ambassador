"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_1 = require("data/observable");
var nativescript_sidedrawer_1 = require("nativescript-sidedrawer");
var router_1 = require("nativescript-angular/router");
var color_1 = require("tns-core-modules/color/color");
var MenuComponent = (function (_super) {
    __extends(MenuComponent, _super);
    function MenuComponent(routEx) {
        var _this = _super.call(this) || this;
        _this.routEx = routEx;
        _this._i = 0;
        var img = new Image();
        img.src = "~/apple.jpg";
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
            logoImage: null,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyw4Q0FBdUQ7QUFDdkQsbUVBQTZFO0FBQzdFLHNEQUE4RDtBQUM5RCxzREFBcUQ7QUFRckQsSUFBYSxhQUFhO0lBQVMsaUNBQVU7SUFhNUMsdUJBQW9CLE1BQXVCO1FBQTNDLFlBQ0MsaUJBQU8sU0FvQ1A7UUFyQ21CLFlBQU0sR0FBTixNQUFNLENBQWlCO1FBVG5DLFFBQUUsR0FBVyxDQUFDLENBQUE7UUFZckIsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN0QixHQUFHLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQztRQUV4Qix1Q0FBYSxDQUFDLEtBQUssQ0FBQztZQUNuQixTQUFTLEVBQUUsQ0FBQztvQkFDWCxLQUFLLEVBQUUsTUFBTTtvQkFDYixXQUFXLEVBQUUsWUFBWTtvQkFDekIsT0FBTyxFQUFFLFlBQVk7aUJBQ3JCLENBQUM7WUFDRixLQUFLLEVBQUMsRUFBRTtZQUNSLFFBQVEsRUFBRSw2Q0FBNkM7WUFDdkQsUUFBUSxFQUFFLFVBQUMsS0FBSztnQkFDZixLQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQTtnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUVuQixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEIsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7b0JBQ25DLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUM7d0JBQ2xDLFVBQVUsRUFBQzs0QkFDVixJQUFJLEVBQUMsVUFBVTs0QkFDZixRQUFRLEVBQUMsR0FBRzs0QkFDWixLQUFLLEVBQUMsUUFBUTt5QkFDZDtxQkFDRCxDQUFDLENBQUE7Z0JBQ0gsQ0FBQztZQUNGLENBQUM7WUFDRCxPQUFPLEVBQUUsS0FBSTtZQUNiLGVBQWUsRUFBQyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUM7WUFDcEMscUJBQXFCLEVBQUMsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDO1lBQzFDLFNBQVMsRUFBQyxJQUFJO1NBQ2QsQ0FBQyxDQUFDOztJQUlKLENBQUM7SUE3Q0Qsc0JBQUksNEJBQUM7YUFBTDtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFBO1FBQ2YsQ0FBQzthQUNELFVBQU0sQ0FBUztZQUNkLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ1gsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNsQyxDQUFDOzs7T0FKQTtJQTZDRCxnQ0FBUSxHQUFSO1FBQ0MsdUNBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBRUYsb0JBQUM7QUFBRCxDQUFDLEFBeERELENBQW1DLHVCQUFVLEdBd0Q1QztBQXhEWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsb0NBQW9DO1FBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO0tBQ2hELENBQUM7cUNBYzBCLHlCQUFnQjtHQWIvQixhQUFhLENBd0R6QjtBQXhEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJlZ2lzdHJvVXN1YXJpbyB9IGZyb20gXCIuLi9sb2dpbi91c2VyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSdcclxuaW1wb3J0IHsgVG5zU2lkZURyYXdlciwgVG5zU2lkZURyYXdlck9wdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtc2lkZWRyYXdlcidcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yL2NvbG9yXCI7XHJcbmltcG9ydCB7IEltYWdlU291cmNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlL2ltYWdlLXNvdXJjZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLW1lbnVcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL21vZHVsZXMvbWVudS9tZW51LmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbXCIuL21vZHVsZXMvbWVudS9tZW51LmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuXHQvLyBZb3VyIFR5cGVTY3JpcHQgbG9naWMgZ29lcyBoZXJlXHJcblx0dXN1YXJpbzogUmVnaXN0cm9Vc3VhcmlvO1xyXG5cclxuXHRwcml2YXRlIF9pOiBudW1iZXIgPSAwXHJcblx0Z2V0IGkoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9pXHJcblx0fVxyXG5cdHNldCBpKGk6IG51bWJlcikge1xyXG5cdFx0dGhpcy5faSA9IGlcclxuXHRcdHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2knLCBpKVxyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0RXg6Um91dGVyRXh0ZW5zaW9ucykge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcblx0XHRpbWcuc3JjID0gXCJ+L2FwcGxlLmpwZ1wiO1xyXG5cclxuXHRcdFRuc1NpZGVEcmF3ZXIuYnVpbGQoe1xyXG5cdFx0XHR0ZW1wbGF0ZXM6IFt7XHJcblx0XHRcdFx0dGl0bGU6ICdIb21lJyxcclxuXHRcdFx0XHRhbmRyb2lkSWNvbjogJ2hvbWVza2V0Y2gnLFxyXG5cdFx0XHRcdGlvc0ljb246ICdob21lc2tldGNoJyxcclxuXHRcdFx0fV0sXHJcblx0XHRcdHRpdGxlOlwiXCIsXHJcblx0XHRcdHN1YnRpdGxlOiAnTWFudGVudGUgQ29uZWN0YWRvIENvbiBMb3MgUXVlIE1hcyBRdWllcmVzIScsXHJcblx0XHRcdGxpc3RlbmVyOiAoaW5kZXgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmkgPSBpbmRleFxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGluZGV4KTtcclxuXHJcblx0XHRcdFx0aWYgKGluZGV4ID09IDApIHtcclxuXHRcdFx0XHRcdGFsZXJ0KFwibm9zIGZ1aW1vcyBwYXJhIGVsIG1lbnUgMVwiKTtcclxuXHRcdFx0XHRcdHRoaXMucm91dEV4Lm5hdmlnYXRlKFtcInJlZ2lzdHJhclwiXSx7XHJcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246e1xyXG5cdFx0XHRcdFx0XHRcdG5hbWU6XCJzbGlkZVRvcFwiLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOjUwMCxcclxuXHRcdFx0XHRcdFx0XHRjdXJ2ZTpcImxpbmVhclwiXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb250ZXh0OiB0aGlzLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6bmV3IENvbG9yKFwiIzcwYjdmZVwiKSxcclxuXHRcdFx0aGVhZGVyQmFja2dyb3VuZENvbG9yOm5ldyBDb2xvcihcIiMyNzkzZmZcIiksXHJcblx0XHRcdGxvZ29JbWFnZTpudWxsLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0XHJcblxyXG5cdH1cclxuXHJcblx0dG9nZ2xlaXQoKSB7XHJcblx0XHRUbnNTaWRlRHJhd2VyLnRvZ2dsZSgpXHJcblx0fVxyXG5cclxufSJdfQ==