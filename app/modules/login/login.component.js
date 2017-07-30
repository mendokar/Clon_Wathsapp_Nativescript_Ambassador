"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var color_1 = require("tns-core-modules/color/color");
var router_1 = require("nativescript-angular/router");
var dialogs = require("tns-core-modules/ui/dialogs");
var firebase = require("nativescript-plugin-firebase");
var user_1 = require("./user");
var LoginComponent = (function () {
    function LoginComponent(page, routEx) {
        this.page = page;
        this.routEx = routEx;
        // Your TypeScript logic goes here
        this.isTurnedOn = false;
        this.mostrarPass = true;
        page.actionBarHidden = true;
        this.usuario = new user_1.RegistroUsuario();
    }
    LoginComponent.prototype.onTouchButton = function (args) {
        var seleccion = args.action;
        var grid = args.object;
        if (seleccion == "up") {
            grid.backgroundColor = new color_1.Color("#002aff");
        }
        else {
            grid.backgroundColor = new color_1.Color("#4ecdc4");
        }
    };
    LoginComponent.prototype.mostrarClave = function () {
        if (this.mostrarPass == true) {
            this.isTurnedOn = false;
            this.mostrarPass = false;
        }
        else {
            this.isTurnedOn = true;
            this.mostrarPass = true;
        }
    };
    LoginComponent.prototype.pantallaRegistrar = function () {
        var navigationExtras = {
            queryParams: {
                "usuario": this.usuario.email
            }
        };
        console.log(this.usuario.email);
        this.routEx.navigate(["registrar"], {
            transition: {
                name: "slideTop",
                duration: 500,
                curve: "linear"
            }
        });
    };
    LoginComponent.prototype.pantallaMenu = function () {
        this.routEx.navigate(["menu"], { clearHistory: true,
            transition: {
                name: "slideTop",
                duration: 500,
                curve: "linear"
            }
        });
    };
    LoginComponent.prototype.reaizarLogin = function () {
        var _this = this;
        this.email = this.usuario.email;
        this.passwo = this.usuario.pass;
        if (this.email == "" || this.email == null) {
            dialogs.alert({
                title: "Error en el inicio de sesión",
                message: "El correo electronico es obligatorio",
                okButtonText: "Aceptar"
            });
        }
        else if (this.passwo == "" || this.passwo == null) {
            dialogs.alert({
                title: "Error en el inicio de sesión",
                message: "La contraseña es obligatoria",
                okButtonText: "Aceptar"
            });
        }
        else {
            firebase.login({
                type: firebase.LoginType.PASSWORD,
                passwordOptions: {
                    email: this.email,
                    password: this.passwo
                }
            }).then(function (result) {
                JSON.stringify(result);
                console.log("uid" + result.uid);
                console.log("name" + result.providers);
                _this.pantallaMenu();
            }, function (errorMessage) {
                console.log(errorMessage);
                var errorEmail = errorMessage.indexOf("The email address is badly formatted.");
                var errorUsuario = errorMessage.indexOf("There is no user record corresponding to this identifier.");
                var errorClave = errorMessage.indexOf("The password is invalid or the user does not have a password.");
                if (errorEmail >= 0) {
                    dialogs.alert({
                        title: "Error en el inicio de sesión",
                        message: "El correo ingresado no tiene formato de correo electronico",
                        okButtonText: "Aceptar"
                    });
                }
                if (errorUsuario >= 0) {
                    var options = {
                        title: "Error en el inicio de sesión",
                        message: "El correo ingresado no se encuentra en la base de datos, ¿Desea Registrarse?",
                        okButtonText: "SI",
                        cancelButtonText: "No"
                        //neutralButtonText: "Cancel"
                    };
                    dialogs.confirm(options).then(function (result) {
                        // result can be true/false/undefined
                        console.log(result);
                        if (result == true) {
                            _this.pantallaRegistrar();
                        }
                    });
                }
                if (errorClave >= 0) {
                    dialogs.alert({
                        title: "Error en el inicio de sesión",
                        message: "La contraseña ingresada no es correcta",
                        okButtonText: "Aceptar"
                    });
                }
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "app-login",
        templateUrl: "./modules/login/login.component.html",
        styleUrls: ["./modules/login/login.component.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLGdDQUErQjtBQUcvQixzREFBcUQ7QUFDckQsc0RBQStEO0FBQy9ELHFEQUF1RDtBQUN2RCx1REFBMEQ7QUFJMUQsK0JBQXlDO0FBUXpDLElBQWEsY0FBYztJQVd2Qix3QkFBb0IsSUFBVSxFQUFTLE1BQXdCO1FBQTNDLFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUwvRCxrQ0FBa0M7UUFFM0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUcvQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUU1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksc0JBQWUsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFJTSxzQ0FBYSxHQUFwQixVQUFxQixJQUEyQjtRQUM1QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksSUFBSSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFL0IsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWhELENBQUM7SUFDTCxDQUFDO0lBR00scUNBQVksR0FBbkI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7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Q0FBQTtnQkFDTixDQUFDO1lBRUwsQ0FBQyxDQUNBLENBQUM7UUFDVixDQUFDO0lBRUwsQ0FBQztJQU9MLHFCQUFDO0FBQUQsQ0FBQyxBQXhKRCxJQXdKQztBQXhKWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsc0NBQXNDO1FBQ25ELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO0tBRXJELENBQUM7cUNBWTRCLFdBQUksRUFBaUIseUJBQWdCO0dBWHRELGNBQWMsQ0F3SjFCO0FBeEpZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVG91Y2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXMvZ2VzdHVyZXNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInVpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yL2NvbG9yXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuXHJcbmltcG9ydCAqIGFzIGZyYW1lTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcblxyXG5pbXBvcnQgeyBSZWdpc3Ryb1VzdWFyaW8gfSBmcm9tIFwiLi91c2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1sb2dpblwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tb2R1bGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbW9kdWxlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzXCJdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG5cclxuICAgIHBhc3N3bzogYW55O1xyXG4gICAgZW1haWw6IGFueTtcclxuXHJcbiAgICB1c3VhcmlvOiBSZWdpc3Ryb1VzdWFyaW87XHJcbiAgICAvLyBZb3VyIFR5cGVTY3JpcHQgbG9naWMgZ29lcyBoZXJlXHJcblxyXG4gICAgcHVibGljIGlzVHVybmVkT246IEJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBtb3N0cmFyUGFzczogQm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwdWJsaWMgcm91dEV4OiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnVzdWFyaW8gPSBuZXcgUmVnaXN0cm9Vc3VhcmlvKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgb25Ub3VjaEJ1dHRvbihhcmdzOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpIHtcclxuICAgICAgICBsZXQgc2VsZWNjaW9uID0gYXJncy5hY3Rpb247XHJcbiAgICAgICAgbGV0IGdyaWQgPSA8QnV0dG9uPmFyZ3Mub2JqZWN0O1xyXG5cclxuICAgICAgICBpZiAoc2VsZWNjaW9uID09IFwidXBcIikge1xyXG4gICAgICAgICAgICBncmlkLmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcIiMwMDJhZmZcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ3JpZC5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3IoXCIjNGVjZGM0XCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBtb3N0cmFyQ2xhdmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9zdHJhclBhc3MgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVHVybmVkT24gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5tb3N0cmFyUGFzcyA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUdXJuZWRPbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubW9zdHJhclBhc3MgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhbnRhbGxhUmVnaXN0cmFyKCkge1xyXG5cclxuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9e1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zOntcclxuICAgICAgICAgICAgXCJ1c3VhcmlvXCI6dGhpcy51c3VhcmlvLmVtYWlsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXN1YXJpby5lbWFpbCk7XHJcbiAgICAgICAgdGhpcy5yb3V0RXgubmF2aWdhdGUoW1wicmVnaXN0cmFyXCJdLCB7XHJcbiAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlVG9wXCIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGFudGFsbGFNZW51KCkge1xyXG4gICAgICAgIHRoaXMucm91dEV4Lm5hdmlnYXRlKFtcIm1lbnVcIl0sIHtjbGVhckhpc3Rvcnk6dHJ1ZSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVRvcFwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVhaXphckxvZ2luKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZW1haWwgPSB0aGlzLnVzdWFyaW8uZW1haWw7XHJcbiAgICAgICAgdGhpcy5wYXNzd28gPSB0aGlzLnVzdWFyaW8ucGFzcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW1haWwgPT0gXCJcIiB8fCB0aGlzLmVtYWlsID09IG51bGwpIHtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvciBlbiBlbCBpbmljaW8gZGUgc2VzacOzblwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCBjb3JyZW8gZWxlY3Ryb25pY28gZXMgb2JsaWdhdG9yaW9cIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFzc3dvID09IFwiXCIgfHwgdGhpcy5wYXNzd28gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yIGVuIGVsIGluaWNpbyBkZSBzZXNpw7NuXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkxhIGNvbnRyYXNlw7FhIGVzIG9ibGlnYXRvcmlhXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQWNlcHRhclwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVpZFwiICsgcmVzdWx0LnVpZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5hbWVcIiArIHJlc3VsdC5wcm92aWRlcnMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYW50YWxsYU1lbnUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JFbWFpbCA9IGVycm9yTWVzc2FnZS5pbmRleE9mKFwiVGhlIGVtYWlsIGFkZHJlc3MgaXMgYmFkbHkgZm9ybWF0dGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JVc3VhcmlvID0gZXJyb3JNZXNzYWdlLmluZGV4T2YoXCJUaGVyZSBpcyBubyB1c2VyIHJlY29yZCBjb3JyZXNwb25kaW5nIHRvIHRoaXMgaWRlbnRpZmllci5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9yQ2xhdmUgPSBlcnJvck1lc3NhZ2UuaW5kZXhPZihcIlRoZSBwYXNzd29yZCBpcyBpbnZhbGlkIG9yIHRoZSB1c2VyIGRvZXMgbm90IGhhdmUgYSBwYXNzd29yZC5cIilcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JFbWFpbCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3IgZW4gZWwgaW5pY2lvIGRlIHNlc2nDs25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRWwgY29ycmVvIGluZ3Jlc2FkbyBubyB0aWVuZSBmb3JtYXRvIGRlIGNvcnJlbyBlbGVjdHJvbmljb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JVc3VhcmlvID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvciBlbiBlbCBpbmljaW8gZGUgc2VzacOzblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCBjb3JyZW8gaW5ncmVzYWRvIG5vIHNlIGVuY3VlbnRyYSBlbiBsYSBiYXNlIGRlIGRhdG9zLCDCv0Rlc2VhIFJlZ2lzdHJhcnNlP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbmV1dHJhbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5jb25maXJtKG9wdGlvbnMpLnRoZW4oKHJlc3VsdDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzdWx0IGNhbiBiZSB0cnVlL2ZhbHNlL3VuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFudGFsbGFSZWdpc3RyYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvckNsYXZlID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvciBlbiBlbCBpbmljaW8gZGUgc2VzacOzblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJMYSBjb250cmFzZcOxYSBpbmdyZXNhZGEgbm8gZXMgY29ycmVjdGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59Il19