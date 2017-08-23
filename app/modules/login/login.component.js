"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var color_1 = require("tns-core-modules/color/color");
var router_1 = require("nativescript-angular/router");
var dialogs = require("tns-core-modules/ui/dialogs");
var firebase = require("nativescript-plugin-firebase");
var user_1 = require("./user");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var LoginComponent = (function () {
    function LoginComponent(page, routEx) {
        this.page = page;
        this.routEx = routEx;
        // Your TypeScript logic goes here
        this.isTurnedOn = false;
        this.mostrarPass = true;
        page.actionBarHidden = true;
        this.usuario = new user_1.RegistroUsuario();
        this.loading = new nativescript_loading_indicator_1.LoadingIndicator();
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
        this.loading.hide();
    };
    LoginComponent.prototype.pantallaMenu = function () {
        this.routEx.navigate(["menu"], {
            clearHistory: true,
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
    LoginComponent.prototype.loginGmail = function () {
        var _this = this;
        this.mostrarLoading();
        //alert("Aqui se registra con Gmail");
        firebase.login({
            type: firebase.LoginType.GOOGLE,
        }).then(function (result) {
            JSON.stringify(result.email);
            console.log(result.uid);
            console.log(result.email);
            _this.pantallaMenu();
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    LoginComponent.prototype.loginFacebook = function () {
        //alert("Aqui se registra con Facebook");
        firebase.login({
            type: firebase.LoginType.FACEBOOK,
            // Optional
            facebookOptions: {
                // defaults to ['public_profile', 'email']
                scope: ['public_profile', 'email']
            }
        }).then(function (result) {
            JSON.stringify(result);
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    LoginComponent.prototype.mostrarLoading = function () {
        var options = {
            message: 'Loading...',
            progress: 0.65,
            android: {
                indeterminate: true,
                cancelable: false,
                max: 100,
                progressNumberFormat: "%1d/%2d",
                progressPercentFormat: 0.53,
                progressStyle: 1,
                secondaryProgress: 1
            }
        };
        this.loading.hide();
    };
    LoginComponent.prototype.ocultarLoading = function () {
        this.loading.show();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLGdDQUErQjtBQUcvQixzREFBcUQ7QUFDckQsc0RBQStEO0FBQy9ELHFEQUF1RDtBQUN2RCx1REFBMEQ7QUFJMUQsK0JBQXlDO0FBRXpDLGlGQUFpRTtBQVFqRSxJQUFhLGNBQWM7SUFZdkIsd0JBQW9CLElBQVUsRUFBVSxNQUF3QjtRQUE1QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFMaEUsa0NBQWtDO1FBRTNCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFHL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFFLElBQUksaURBQWdCLEVBQUUsQ0FBQztJQUd6QyxDQUFDO0lBSU0sc0NBQWEsR0FBcEIsVUFBcUIsSUFBMkI7UUFDNUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRS9CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVoRCxDQUFDO0lBQ0wsQ0FBQztJQUdNLHFDQUFZLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcs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bEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQ0EsQ0FBQztJQUNWLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxPQUFPLEdBQUc7WUFDcEIsT0FBTyxFQUFFLFlBQVk7WUFDckIsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixHQUFHLEVBQUUsR0FBRztnQkFDUixvQkFBb0IsRUFBRSxTQUFTO2dCQUMvQixxQkFBcUIsRUFBRSxJQUFJO2dCQUMzQixhQUFhLEVBQUUsQ0FBQztnQkFDaEIsaUJBQWlCLEVBQUUsQ0FBQzthQUNyQjtTQUNGLENBQUE7UUFDTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBT0wscUJBQUM7QUFBRCxDQUFDLEFBM05ELElBMk5DO0FBM05ZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxzQ0FBc0M7UUFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7S0FFckQsQ0FBQztxQ0FhNEIsV0FBSSxFQUFrQix5QkFBZ0I7R0FadkQsY0FBYyxDQTJOMUI7QUEzTlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVG91Y2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXMvZ2VzdHVyZXNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInVpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yL2NvbG9yXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuXHJcbmltcG9ydCAqIGFzIGZyYW1lTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcblxyXG5pbXBvcnQgeyBSZWdpc3Ryb1VzdWFyaW8gfSBmcm9tIFwiLi91c2VyXCI7XHJcblxyXG5pbXBvcnQgeyBMb2FkaW5nSW5kaWNhdG9yfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1sb2dpblwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tb2R1bGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbW9kdWxlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzXCJdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG5cclxuICAgIHBhc3N3bzogYW55O1xyXG4gICAgZW1haWw6IGFueTtcclxuXHJcbiAgICB1c3VhcmlvOiBSZWdpc3Ryb1VzdWFyaW87XHJcbiAgICBsb2FkaW5nOkxvYWRpbmdJbmRpY2F0b3JcclxuICAgIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcclxuXHJcbiAgICBwdWJsaWMgaXNUdXJuZWRPbjogQm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIG1vc3RyYXJQYXNzOiBCb29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dEV4OiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnVzdWFyaW8gPSBuZXcgUmVnaXN0cm9Vc3VhcmlvKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBvblRvdWNoQnV0dG9uKGFyZ3M6IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSkge1xyXG4gICAgICAgIGxldCBzZWxlY2Npb24gPSBhcmdzLmFjdGlvbjtcclxuICAgICAgICBsZXQgZ3JpZCA9IDxCdXR0b24+YXJncy5vYmplY3Q7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY2Npb24gPT0gXCJ1cFwiKSB7XHJcbiAgICAgICAgICAgIGdyaWQuYmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKFwiIzAwMmFmZlwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBncmlkLmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcIiM0ZWNkYzRcIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIG1vc3RyYXJDbGF2ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5tb3N0cmFyUGFzcyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUdXJuZWRPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm1vc3RyYXJQYXNzID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc1R1cm5lZE9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tb3N0cmFyUGFzcyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGFudGFsbGFSZWdpc3RyYXIoKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgXCJ1c3VhcmlvXCI6IHRoaXMudXN1YXJpby5lbWFpbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXN1YXJpby5lbWFpbCk7XHJcbiAgICAgICAgdGhpcy5yb3V0RXgubmF2aWdhdGUoW1wicmVnaXN0cmFyXCJdLCB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVUb3BcIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICApXHJcbiAgICB0aGlzLmxvYWRpbmcuaGlkZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGFudGFsbGFNZW51KCkge1xyXG4gICAgICAgIHRoaXMucm91dEV4Lm5hdmlnYXRlKFtcIm1lbnVcIl0sIHtcclxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlVG9wXCIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICApXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWFpemFyTG9naW4oKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZW1haWwgPSB0aGlzLnVzdWFyaW8uZW1haWw7XHJcbiAgICAgICAgdGhpcy5wYXNzd28gPSB0aGlzLnVzdWFyaW8ucGFzcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW1haWwgPT0gXCJcIiB8fCB0aGlzLmVtYWlsID09IG51bGwpIHtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvciBlbiBlbCBpbmljaW8gZGUgc2VzacOzblwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCBjb3JyZW8gZWxlY3Ryb25pY28gZXMgb2JsaWdhdG9yaW9cIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFzc3dvID09IFwiXCIgfHwgdGhpcy5wYXNzd28gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yIGVuIGVsIGluaWNpbyBkZSBzZXNpw7NuXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkxhIGNvbnRyYXNlw7FhIGVzIG9ibGlnYXRvcmlhXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQWNlcHRhclwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVpZFwiICsgcmVzdWx0LnVpZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5hbWVcIiArIHJlc3VsdC5wcm92aWRlcnMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYW50YWxsYU1lbnUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JFbWFpbCA9IGVycm9yTWVzc2FnZS5pbmRleE9mKFwiVGhlIGVtYWlsIGFkZHJlc3MgaXMgYmFkbHkgZm9ybWF0dGVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JVc3VhcmlvID0gZXJyb3JNZXNzYWdlLmluZGV4T2YoXCJUaGVyZSBpcyBubyB1c2VyIHJlY29yZCBjb3JyZXNwb25kaW5nIHRvIHRoaXMgaWRlbnRpZmllci5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9yQ2xhdmUgPSBlcnJvck1lc3NhZ2UuaW5kZXhPZihcIlRoZSBwYXNzd29yZCBpcyBpbnZhbGlkIG9yIHRoZSB1c2VyIGRvZXMgbm90IGhhdmUgYSBwYXNzd29yZC5cIilcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JFbWFpbCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3IgZW4gZWwgaW5pY2lvIGRlIHNlc2nDs25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRWwgY29ycmVvIGluZ3Jlc2FkbyBubyB0aWVuZSBmb3JtYXRvIGRlIGNvcnJlbyBlbGVjdHJvbmljb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JVc3VhcmlvID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvciBlbiBlbCBpbmljaW8gZGUgc2VzacOzblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCBjb3JyZW8gaW5ncmVzYWRvIG5vIHNlIGVuY3VlbnRyYSBlbiBsYSBiYXNlIGRlIGRhdG9zLCDCv0Rlc2VhIFJlZ2lzdHJhcnNlP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlNJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbmV1dHJhbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5jb25maXJtKG9wdGlvbnMpLnRoZW4oKHJlc3VsdDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzdWx0IGNhbiBiZSB0cnVlL2ZhbHNlL3VuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFudGFsbGFSZWdpc3RyYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvckNsYXZlID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvciBlbiBlbCBpbmljaW8gZGUgc2VzacOzblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJMYSBjb250cmFzZcOxYSBpbmdyZXNhZGEgbm8gZXMgY29ycmVjdGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2dpbkdtYWlsKCkge1xyXG4gICAgICAgIHRoaXMubW9zdHJhckxvYWRpbmcoKTtcclxuICAgICAgICAvL2FsZXJ0KFwiQXF1aSBzZSByZWdpc3RyYSBjb24gR21haWxcIik7XHJcbiAgICAgICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuR09PR0xFLFxyXG4gICAgICAgICAgICAvLyBPcHRpb25hbCBcclxuXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgIChyZXN1bHQpID0+e1xyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0LmVtYWlsKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC51aWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LmVtYWlsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFudGFsbGFNZW51KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAoZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5GYWNlYm9vaygpIHtcclxuICAgICAgICAvL2FsZXJ0KFwiQXF1aSBzZSByZWdpc3RyYSBjb24gRmFjZWJvb2tcIik7XHJcbiAgICAgICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuRkFDRUJPT0ssXHJcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsXHJcbiAgICAgICAgICAgIGZhY2Vib29rT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdHMgdG8gWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCddXHJcbiAgICAgICAgICAgICAgICBzY29wZTogWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCddXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbW9zdHJhckxvYWRpbmcoKXtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICBtZXNzYWdlOiAnTG9hZGluZy4uLicsXHJcbiAgcHJvZ3Jlc3M6IDAuNjUsXHJcbiAgYW5kcm9pZDoge1xyXG4gICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcclxuICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgbWF4OiAxMDAsXHJcbiAgICBwcm9ncmVzc051bWJlckZvcm1hdDogXCIlMWQvJTJkXCIsXHJcbiAgICBwcm9ncmVzc1BlcmNlbnRGb3JtYXQ6IDAuNTMsXHJcbiAgICBwcm9ncmVzc1N0eWxlOiAxLFxyXG4gICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IDFcclxuICB9XHJcbn1cclxuICAgICAgICB0aGlzLmxvYWRpbmcuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgb2N1bHRhckxvYWRpbmcoKXtcclxuICAgICAgICB0aGlzLmxvYWRpbmcuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59Il19