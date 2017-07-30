"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var color_1 = require("tns-core-modules/color/color");
var router_1 = require("nativescript-angular/router");
var firebase = require("nativescript-plugin-firebase");
var dialogs = require("ui/dialogs");
var user_1 = require("../login/user");
var RegistrarComponent = (function () {
    function RegistrarComponent(routEx) {
        this.routEx = routEx;
        this.usuario = new user_1.RegistroUsuario();
        if (this.usuario.email != null) {
            this.email = this.usuario.email;
        }
    }
    RegistrarComponent.prototype.onTouchButton = function (args) {
        var seleccion = args.action;
        var grid = args.object;
        if (seleccion == "up") {
            grid.backgroundColor = new color_1.Color("#002aff");
        }
        else {
            grid.backgroundColor = new color_1.Color("#4ecdc4");
        }
    };
    RegistrarComponent.prototype.goBack = function () {
        this.routEx.back();
    };
    RegistrarComponent.prototype.registroFacebook = function () {
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
    RegistrarComponent.prototype.registroGmail = function () {
        //alert("Aqui se registra con Gmail");
        firebase.login({
            type: firebase.LoginType.GOOGLE,
        }).then(function (result) {
            JSON.stringify(result.email);
            console.log(result.uid);
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    RegistrarComponent.prototype.registrarUsuario = function () {
        var _this = this;
        this.email = this.usuario.email;
        this.passwo = this.usuario.pass;
        firebase.createUser({
            email: this.email,
            password: this.passwo
        }).then(function (result) {
            dialogs.alert({
                title: "Registro de usuario",
                message: "El registro de usuario fue exitoso",
                okButtonText: "Aceptar"
            });
            _this.goBack();
        }, function (errorMessage) {
            console.log(errorMessage);
            var errorEmailExist = errorMessage.indexOf("The email address is already in use by another account.");
            if (errorEmailExist >= 0) {
                dialogs.alert({
                    title: "Error en el registro de usuario",
                    message: "El correo ingresado ya se encuentra en la base de datos",
                    okButtonText: "Aceptar"
                });
                _this.goBack();
            }
        });
    };
    RegistrarComponent.prototype.mostrarPerfil = function () {
        this.routEx.navigate(["perfil"], {
            transition: {
                name: "slideTop",
                duration: 500,
                curve: "linear"
            }
        });
    };
    RegistrarComponent.prototype.validarDatos = function () {
        var formato;
        if (this.usuario.email == null || this.usuario.email == "" || this.usuario.email == undefined) {
            dialogs.alert({
                title: "Error en el inicio de sesión",
                message: "El correo electronico es obligatorio",
                okButtonText: "Aceptar"
            });
        }
        else if (formato = this.validarEmail(this.usuario.email) == true) {
            if (this.usuario.pass == null || this.usuario.pass == "" || this.usuario.pass == undefined) {
                dialogs.alert({
                    title: "Error en el inicio de sesión",
                    message: "La contraseña es obligatoria",
                    okButtonText: "Aceptar"
                });
            }
            else if (this.usuario.conpass == null || this.usuario.conpass == "" || this.usuario.conpass == undefined) {
                dialogs.alert({
                    title: "Error en el inicio de sesión",
                    message: "La confirmacion de contraseña es obligatoria",
                    okButtonText: "Aceptar"
                });
            }
            else if (this.usuario.conpass != this.usuario.pass) {
                dialogs.alert({
                    title: "Error en el inicio de sesión",
                    message: "La contraseñas no coninciden",
                    okButtonText: "Aceptar"
                });
            }
            else if (this.usuario.telefono == null || this.usuario.telefono <= 0 || this.usuario.telefono == undefined) {
                dialogs.alert({
                    title: "Error en el inicio de sesión",
                    message: "El telefono es obligatorio",
                    okButtonText: "Aceptar"
                });
            }
            else {
                this.registrarUsuario();
            }
        }
        else {
            dialogs.alert({
                title: "Error en el inicio de sesión",
                message: "El correo ingresado no tiene formato de correo electronico",
                okButtonText: "Aceptar"
            });
        }
    };
    RegistrarComponent.prototype.validarEmail = function (email) {
        var valida = email.indexOf("@");
        if (valida >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return RegistrarComponent;
}());
RegistrarComponent = __decorate([
    core_1.Component({
        selector: "app-registrar",
        templateUrl: "./modules/registrar/registrar.component.html",
        styleUrls: ["./modules/registrar/registrar.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], RegistrarComponent);
exports.RegistrarComponent = RegistrarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdHJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFHMUMsc0RBQXFEO0FBQ3JELHNEQUErRDtBQUcvRCx1REFBMEQ7QUFDMUQsb0NBQXNDO0FBRXRDLHNDQUFnRDtBQVNoRCxJQUFhLGtCQUFrQjtJQVMzQiw0QkFBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFFeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztRQUVyQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUM7SUFHRCwwQ0FBYSxHQUFiLFVBQWMsSUFBMkI7UUFDckMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRS9CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVoRCxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEI7UUFDSSx5Q0FBeUM7UUFDekMsUUFBUSxDQUFDLEtBQUss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UUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLDhDQUE4QztRQUMzRCxTQUFTLEVBQUUsQ0FBQyw2Q0FBNkMsQ0FBQztLQUM3RCxDQUFDO3FDQVc4Qix5QkFBZ0I7R0FUbkMsa0JBQWtCLENBNks5QjtBQTdLWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUb3VjaEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcy9nZXN0dXJlc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b24vYnV0dG9uXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3IvY29sb3JcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcblxyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5cclxuaW1wb3J0IHsgUmVnaXN0cm9Vc3VhcmlvIH0gZnJvbSBcIi4uL2xvZ2luL3VzZXJcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1yZWdpc3RyYXJcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbW9kdWxlcy9yZWdpc3RyYXIvcmVnaXN0cmFyLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbW9kdWxlcy9yZWdpc3RyYXIvcmVnaXN0cmFyLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RyYXJDb21wb25lbnQge1xyXG5cclxuICAgIGVtYWlsOiBhbnk7XHJcbiAgICBwYXNzd286IGFueTtcclxuICAgIGNvbnBhc3M6IGFueTtcclxuICAgIHRlbGVmb25vOiBhbnk7XHJcblxyXG4gICAgdXN1YXJpbzogUmVnaXN0cm9Vc3VhcmlvO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dEV4OiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcblxyXG4gICAgICAgIHRoaXMudXN1YXJpbyA9IG5ldyBSZWdpc3Ryb1VzdWFyaW8oKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXN1YXJpby5lbWFpbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWwgPSB0aGlzLnVzdWFyaW8uZW1haWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblRvdWNoQnV0dG9uKGFyZ3M6IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSkge1xyXG4gICAgICAgIGxldCBzZWxlY2Npb24gPSBhcmdzLmFjdGlvbjtcclxuICAgICAgICBsZXQgZ3JpZCA9IDxCdXR0b24+YXJncy5vYmplY3Q7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY2Npb24gPT0gXCJ1cFwiKSB7XHJcbiAgICAgICAgICAgIGdyaWQuYmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKFwiIzAwMmFmZlwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBncmlkLmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcIiM0ZWNkYzRcIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0RXguYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdHJvRmFjZWJvb2soKSB7XHJcbiAgICAgICAgLy9hbGVydChcIkFxdWkgc2UgcmVnaXN0cmEgY29uIEZhY2Vib29rXCIpO1xyXG4gICAgICAgIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkZBQ0VCT09LLFxyXG4gICAgICAgICAgICAvLyBPcHRpb25hbFxyXG4gICAgICAgICAgICBmYWNlYm9va09wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRzIHRvIFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnXVxyXG4gICAgICAgICAgICAgICAgc2NvcGU6IFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdHJvR21haWwoKSB7XHJcbiAgICAgICAgLy9hbGVydChcIkFxdWkgc2UgcmVnaXN0cmEgY29uIEdtYWlsXCIpO1xyXG4gICAgICAgIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkdPT0dMRSxcclxuICAgICAgICAgICAgLy8gT3B0aW9uYWwgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdC5lbWFpbCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudWlkKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZWdpc3RyYXJVc3VhcmlvKCkge1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSB0aGlzLnVzdWFyaW8uZW1haWw7XHJcbiAgICAgICAgdGhpcy5wYXNzd28gPSB0aGlzLnVzdWFyaW8ucGFzcztcclxuXHJcbiAgICAgICAgZmlyZWJhc2UuY3JlYXRlVXNlcih7XHJcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29cclxuICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWdpc3RybyBkZSB1c3VhcmlvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCByZWdpc3RybyBkZSB1c3VhcmlvIGZ1ZSBleGl0b3NvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvck1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3JFbWFpbEV4aXN0ID0gZXJyb3JNZXNzYWdlLmluZGV4T2YoXCJUaGUgZW1haWwgYWRkcmVzcyBpcyBhbHJlYWR5IGluIHVzZSBieSBhbm90aGVyIGFjY291bnQuXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yRW1haWxFeGlzdCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yIGVuIGVsIHJlZ2lzdHJvIGRlIHVzdWFyaW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCBjb3JyZW8gaW5ncmVzYWRvIHlhIHNlIGVuY3VlbnRyYSBlbiBsYSBiYXNlIGRlIGRhdG9zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3N0cmFyUGVyZmlsKCkge1xyXG4gICAgICAgIHRoaXMucm91dEV4Lm5hdmlnYXRlKFtcInBlcmZpbFwiXSwge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlVG9wXCIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhckRhdG9zKCkge1xyXG4gICAgICAgIGxldCBmb3JtYXRvOiBib29sZWFuO1xyXG4gICAgICAgIGlmICh0aGlzLnVzdWFyaW8uZW1haWwgPT0gbnVsbCB8fCB0aGlzLnVzdWFyaW8uZW1haWwgPT0gXCJcIiB8fCB0aGlzLnVzdWFyaW8uZW1haWwgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yIGVuIGVsIGluaWNpbyBkZSBzZXNpw7NuXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVsIGNvcnJlbyBlbGVjdHJvbmljbyBlcyBvYmxpZ2F0b3Jpb1wiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZvcm1hdG8gPSB0aGlzLnZhbGlkYXJFbWFpbCh0aGlzLnVzdWFyaW8uZW1haWwpID09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVzdWFyaW8ucGFzcyA9PSBudWxsIHx8IHRoaXMudXN1YXJpby5wYXNzID09IFwiXCIgfHwgdGhpcy51c3VhcmlvLnBhc3MgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvciBlbiBlbCBpbmljaW8gZGUgc2VzacOzblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTGEgY29udHJhc2XDsWEgZXMgb2JsaWdhdG9yaWFcIixcclxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQWNlcHRhclwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnVzdWFyaW8uY29ucGFzcyA9PSBudWxsIHx8IHRoaXMudXN1YXJpby5jb25wYXNzID09IFwiXCIgfHwgdGhpcy51c3VhcmlvLmNvbnBhc3MgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvciBlbiBlbCBpbmljaW8gZGUgc2VzacOzblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTGEgY29uZmlybWFjaW9uIGRlIGNvbnRyYXNlw7FhIGVzIG9ibGlnYXRvcmlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy51c3VhcmlvLmNvbnBhc3MgIT0gdGhpcy51c3VhcmlvLnBhc3MpIHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yIGVuIGVsIGluaWNpbyBkZSBzZXNpw7NuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJMYSBjb250cmFzZcOxYXMgbm8gY29uaW5jaWRlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudXN1YXJpby50ZWxlZm9ubyA9PSBudWxsIHx8IHRoaXMudXN1YXJpby50ZWxlZm9ubyA8PSAwIHx8IHRoaXMudXN1YXJpby50ZWxlZm9ubyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yIGVuIGVsIGluaWNpbyBkZSBzZXNpw7NuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCB0ZWxlZm9ubyBlcyBvYmxpZ2F0b3Jpb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdHJhclVzdWFyaW8oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yIGVuIGVsIGluaWNpbyBkZSBzZXNpw7NuXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVsIGNvcnJlbyBpbmdyZXNhZG8gbm8gdGllbmUgZm9ybWF0byBkZSBjb3JyZW8gZWxlY3Ryb25pY29cIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWxpZGFyRW1haWwoZW1haWwpIHtcclxuICAgICAgICBsZXQgdmFsaWRhID0gZW1haWwuaW5kZXhPZihcIkBcIik7XHJcbiAgICAgICAgaWYgKHZhbGlkYSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19