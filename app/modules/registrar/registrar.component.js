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
        alert("Aqui se registra con Facebook");
    };
    RegistrarComponent.prototype.registroGmail = function () {
        alert("Aqui se registra con Gmail");
        this.routEx.navigate(["chat"], {
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "linear"
            }
        });
    };
    RegistrarComponent.prototype.registrarUsuario = function () {
        var _this = this;
        firebase.createUser({
            email: 'oscarmendoza93@gmail.com',
            password: 'firebase'
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
        if (this.email != null || this.email == "") {
            dialogs.alert({
                title: "Error en el inicio de sesión",
                message: "El correo electronico es obligatorio",
                okButtonText: "Aceptar"
            });
        }
        else if (this.passwo != null || this.passwo == "") {
            dialogs.alert({
                title: "Error en el inicio de sesión",
                message: "La contraseña es obligatoria",
                okButtonText: "Aceptar"
            });
        }
        else if (this.conpass != null || this.conpass == "") {
            dialogs.alert({
                title: "Error en el inicio de sesión",
                message: "La confirmacion de contraseña es obligatoria",
                okButtonText: "Aceptar"
            });
        }
        else if (this.conpass != this.passwo) {
            dialogs.alert({
                title: "Error en el inicio de sesión",
                message: "La contraseñas no coninciden",
                okButtonText: "Aceptar"
            });
        }
        else if (this.telefono != null || this.telefono == "") {
            dialogs.alert({
                title: "Error en el inicio de sesión",
                message: "El telefono es obligatoria",
                okButtonText: "Aceptar"
            });
        }
        else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdHJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFHMUMsc0RBQXFEO0FBQ3JELHNEQUErRDtBQUcvRCx1REFBMEQ7QUFDMUQsb0NBQXNDO0FBRXRDLHNDQUFnRDtBQVNoRCxJQUFhLGtCQUFrQjtJQVMzQiw0QkFBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFFeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztRQUVyQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBRyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDbkMsQ0FBQztJQUNMLENBQUM7SUFHRCwwQ0FBYSxHQUFiLFVBQWMsSUFBMkI7UUFDckMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRS9CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVoRCxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEI7UUFDSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztJ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LENBQUMsS0FBSyxDQUFDO2dCQUNWLEtBQUssRUFBRSw4QkFBOEI7Z0JBQ3JDLE9BQU8sRUFBRSw4QkFBOEI7Z0JBQ3ZDLFlBQVksRUFBRSxTQUFTO2FBQzFCLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLDhCQUE4QjtnQkFDckMsT0FBTyxFQUFFLDRCQUE0QjtnQkFDckMsWUFBWSxFQUFFLFNBQVM7YUFDMUIsQ0FBQyxDQUFBO1FBQ04sQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1FBRU4sQ0FBQztJQUVMLENBQUM7SUFFTCx5QkFBQztBQUFELENBQUMsQUEvSEQsSUErSEM7QUEvSFksa0JBQWtCO0lBTjlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsOENBQThDO1FBQzNELFNBQVMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDO0tBQzdELENBQUM7cUNBVzhCLHlCQUFnQjtHQVRuQyxrQkFBa0IsQ0ErSDlCO0FBL0hZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzL2dlc3R1cmVzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvbi9idXR0b25cIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvci9jb2xvclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBEaWFsb2dPcHRpb25zIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuXHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcblxyXG5pbXBvcnQgeyBSZWdpc3Ryb1VzdWFyaW8gfSBmcm9tIFwiLi4vbG9naW4vdXNlclwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLXJlZ2lzdHJhclwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tb2R1bGVzL3JlZ2lzdHJhci9yZWdpc3RyYXIuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9tb2R1bGVzL3JlZ2lzdHJhci9yZWdpc3RyYXIuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJhckNvbXBvbmVudCB7XHJcblxyXG4gICAgZW1haWw6YW55O1xyXG4gICAgcGFzc3dvOmFueTtcclxuICAgIGNvbnBhc3M6YW55O1xyXG4gICAgdGVsZWZvbm86YW55O1xyXG5cclxuICAgIHVzdWFyaW86UmVnaXN0cm9Vc3VhcmlvO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dEV4OiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy51c3VhcmlvID0gbmV3IFJlZ2lzdHJvVXN1YXJpbygpO1xyXG5cclxuICAgICAgICBpZih0aGlzLnVzdWFyaW8uZW1haWwhPSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5lbWFpbD0gdGhpcy51c3VhcmlvLmVtYWlsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Ub3VjaEJ1dHRvbihhcmdzOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpIHtcclxuICAgICAgICBsZXQgc2VsZWNjaW9uID0gYXJncy5hY3Rpb247XHJcbiAgICAgICAgbGV0IGdyaWQgPSA8QnV0dG9uPmFyZ3Mub2JqZWN0O1xyXG5cclxuICAgICAgICBpZiAoc2VsZWNjaW9uID09IFwidXBcIikge1xyXG4gICAgICAgICAgICBncmlkLmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcIiMwMDJhZmZcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ3JpZC5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3IoXCIjNGVjZGM0XCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMucm91dEV4LmJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Ryb0ZhY2Vib29rKCkge1xyXG4gICAgICAgIGFsZXJ0KFwiQXF1aSBzZSByZWdpc3RyYSBjb24gRmFjZWJvb2tcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0cm9HbWFpbCgpIHtcclxuICAgICAgICBhbGVydChcIkFxdWkgc2UgcmVnaXN0cmEgY29uIEdtYWlsXCIpO1xyXG4gICAgICAgIHRoaXMucm91dEV4Lm5hdmlnYXRlKFtcImNoYXRcIl0se1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOntcclxuICAgICAgICAgICAgICAgIG5hbWU6XCJzbGlkZVRvcFwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246MjAwLFxyXG4gICAgICAgICAgICAgICAgY3VydmU6XCJsaW5lYXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVnaXN0cmFyVXN1YXJpbygpIHtcclxuXHJcbiAgICAgICAgZmlyZWJhc2UuY3JlYXRlVXNlcih7XHJcbiAgICAgICAgICAgIGVtYWlsOiAnb3NjYXJtZW5kb3phOTNAZ21haWwuY29tJyxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICdmaXJlYmFzZSdcclxuICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVnaXN0cm8gZGUgdXN1YXJpb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCByZWdpc3RybyBkZSB1c3VhcmlvIGZ1ZSBleGl0b3NvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQWNlcHRhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAoZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVycm9yRW1haWxFeGlzdCA9IGVycm9yTWVzc2FnZS5pbmRleE9mKFwiVGhlIGVtYWlsIGFkZHJlc3MgaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhY2NvdW50LlwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvckVtYWlsRXhpc3QgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yIGVuIGVsIHJlZ2lzdHJvIGRlIHVzdWFyaW9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRWwgY29ycmVvIGluZ3Jlc2FkbyB5YSBzZSBlbmN1ZW50cmEgZW4gbGEgYmFzZSBkZSBkYXRvc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG1vc3RyYXJQZXJmaWwoKXtcclxuICAgICAgICB0aGlzLnJvdXRFeC5uYXZpZ2F0ZShbXCJwZXJmaWxcIl0se1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOntcclxuICAgICAgICAgICAgICAgIG5hbWU6XCJzbGlkZVRvcFwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246NTAwLFxyXG4gICAgICAgICAgICAgICAgY3VydmU6XCJsaW5lYXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGFyRGF0b3MoKXtcclxuICAgICAgICBpZih0aGlzLmVtYWlsICE9IG51bGwgfHwgdGhpcy5lbWFpbCA9PSBcIlwiKXtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvciBlbiBlbCBpbmljaW8gZGUgc2VzacOzblwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCBjb3JyZW8gZWxlY3Ryb25pY28gZXMgb2JsaWdhdG9yaW9cIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucGFzc3dvICE9IG51bGwgfHwgdGhpcy5wYXNzd28gPT0gXCJcIil7XHJcbiAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3IgZW4gZWwgaW5pY2lvIGRlIHNlc2nDs25cIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTGEgY29udHJhc2XDsWEgZXMgb2JsaWdhdG9yaWFcIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jb25wYXNzICE9IG51bGwgfHwgdGhpcy5jb25wYXNzID09IFwiXCIpe1xyXG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yIGVuIGVsIGluaWNpbyBkZSBzZXNpw7NuXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkxhIGNvbmZpcm1hY2lvbiBkZSBjb250cmFzZcOxYSBlcyBvYmxpZ2F0b3JpYVwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmNvbnBhc3MgIT0gIHRoaXMucGFzc3dvKXtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvciBlbiBlbCBpbmljaW8gZGUgc2VzacOzblwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJMYSBjb250cmFzZcOxYXMgbm8gY29uaW5jaWRlblwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnRlbGVmb25vICE9IG51bGwgfHwgdGhpcy50ZWxlZm9ubyA9PSBcIlwiKXtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvciBlbiBlbCBpbmljaW8gZGUgc2VzacOzblwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCB0ZWxlZm9ubyBlcyBvYmxpZ2F0b3JpYVwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSJdfQ==