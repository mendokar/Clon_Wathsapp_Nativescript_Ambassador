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
            console.log(result.email);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdHJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFHMUMsc0RBQXFEO0FBQ3JELHNEQUErRDtBQUcvRCx1REFBMEQ7QUFDMUQsb0NBQXNDO0FBRXRDLHNDQUFnRDtBQVNoRCxJQUFhLGtCQUFrQjtJQVMzQiw0QkFBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFFeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztRQUVyQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDcEMsQ0FBQztJQUNMLENBQUM7SUFHRCwwQ0FBYSxHQUFiLFVBQWMsSUFBMkI7UUFDckMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRS9CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVoRCxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEI7UUFDSSx5Q0FBeUM7UUFDekMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNYLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsV0FBVztZQUNYLGVBQWUsRUFBRTtnQkFDYiwwQ0FBMEM7Z0JBQzFDLEtBQUssRUFBRSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQzthQUNyQztTQUNKLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBVSxNQUFNO1lBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQ0QsVUFBVSxZQUFZO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUNBLENBQUM7SUFDVixDQUFDO0lBRUQsMENBQWEsR0FBYjtRQUNJLHNDQUFzQztRQUN0QyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ1gsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTTtTQUdsQyxDQUFDLENBQUMsSUFBSSxDQUNILFVBQVUsTUFBTTtZQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQ0EsQ0FBQztJQUNWLENBQUM7SUFHRCw2Q0FBZ0IsR0FBaEI7UUFBQSxpQkE2QkM7UUE1QkcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBRWhDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTTtTQUN4QixDQUFDLENBQUMsSUFBSSxDQUNILFVBQUMsTUFBTTtZQUNILE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLHFCQUFxQjtnQkFDNUIsT0FBTyxFQUFFLG9DQUFvQztnQkFDN0MsWUFBWSxFQUFFLFNBQVM7YUFDMUIsQ0FBQyxDQUFBO1lBQ0YsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsRUFDRCxVQUFDLFlBQVk7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLElBQUksZUFBZSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMseURBQXlELENBQUMsQ0FBQztZQUN0RyxFQUFFLENBQUMsQ0FBQyxlQUFlLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDVixLQUFLLEVBQUUsaUNBQWlDO29CQUN4QyxPQUFPLEVBQUUseURBQXlEO29CQUNsRSxZQUFZLEVBQUUsU0FBUztpQkFDMUIsQ0FBQyxDQUFBO2dCQUNGLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixDQUFDO1FBQ0wsQ0FBQyxDQUNBLENBQUM7SUFDVixDQUFDO0lBRUQsMENBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0IsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxVQUFVO2dCQUNoQixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsUUFBUTthQUNsQjtTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCx5Q0FBWSxHQUFaO1FBQ0ksSUFBSSxPQUFnQixDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztZQUU1RixPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNWLEtBQUssRUFBRSw4QkFBOEI7Z0JBQ3JDLE9BQU8sRUFBRSxzQ0FBc0M7Z0JBQy9DLFlBQVksRUFBRSxTQUFTO2FBQzFCLENBQUMsQ0FBQztRQUVQLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRS9ELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDekYsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDVixLQUFLLEVBQUUsOEJBQThCO29CQUNyQyxPQUFPLEVBQUUsOEJBQThCO29CQUN2QyxZQUFZLEVBQUUsU0FBUztpQkFDMUIsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQ1YsS0FBSyxFQUFFLDhCQUE4QjtvQkFDckMsT0FBTyxFQUFFLDhDQUE4QztvQkFDdkQsWUFBWSxFQUFFLFNBQVM7aUJBQzFCLENBQUMsQ0FBQztZQUNQLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUNWLEtBQUssRUFBRSw4QkFBOEI7b0JBQ3JDLE9BQU8sRUFBRSw4QkFBOEI7b0JBQ3ZDLFlBQVksRUFBRSxTQUFTO2lCQUMxQixDQUFDLENBQUM7WUFDUCxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDM0csT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDVixLQUFLLEVBQUUsOEJBQThCO29CQUNyQyxPQUFPLEVBQUUsNEJBQTRCO29CQUNyQyxZQUFZLEVBQUUsU0FBUztpQkFDMUIsQ0FBQyxDQUFBO1lBQ04sQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzVCLENBQUM7UUFFTCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNWLEtBQUssRUFBRSw4QkFBOEI7Z0JBQ3JDLE9BQU8sRUFBRSw0REFBNEQ7Z0JBQ3JFLFlBQVksRUFBRSxTQUFTO2FBQzFCLENBQUMsQ0FBQTtRQUNOLENBQUM7SUFFTCxDQUFDO0lBRU0seUNBQVksR0FBbkIsVUFBb0IsS0FBSztRQUNyQixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBRUwseUJBQUM7QUFBRCxDQUFDLEFBOUtELElBOEtDO0FBOUtZLGtCQUFrQjtJQU45QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLDhDQUE4QztRQUMzRCxTQUFTLEVBQUUsQ0FBQyw2Q0FBNkMsQ0FBQztLQUM3RCxDQUFDO3FDQVc4Qix5QkFBZ0I7R0FUbkMsa0JBQWtCLENBOEs5QjtBQTlLWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUb3VjaEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcy9nZXN0dXJlc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b24vYnV0dG9uXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3IvY29sb3JcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcblxyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5cclxuaW1wb3J0IHsgUmVnaXN0cm9Vc3VhcmlvIH0gZnJvbSBcIi4uL2xvZ2luL3VzZXJcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFwcC1yZWdpc3RyYXJcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbW9kdWxlcy9yZWdpc3RyYXIvcmVnaXN0cmFyLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbW9kdWxlcy9yZWdpc3RyYXIvcmVnaXN0cmFyLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RyYXJDb21wb25lbnQge1xyXG5cclxuICAgIGVtYWlsOiBhbnk7XHJcbiAgICBwYXNzd286IGFueTtcclxuICAgIGNvbnBhc3M6IGFueTtcclxuICAgIHRlbGVmb25vOiBhbnk7XHJcblxyXG4gICAgdXN1YXJpbzogUmVnaXN0cm9Vc3VhcmlvO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dEV4OiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcblxyXG4gICAgICAgIHRoaXMudXN1YXJpbyA9IG5ldyBSZWdpc3Ryb1VzdWFyaW8oKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXN1YXJpby5lbWFpbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWwgPSB0aGlzLnVzdWFyaW8uZW1haWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblRvdWNoQnV0dG9uKGFyZ3M6IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSkge1xyXG4gICAgICAgIGxldCBzZWxlY2Npb24gPSBhcmdzLmFjdGlvbjtcclxuICAgICAgICBsZXQgZ3JpZCA9IDxCdXR0b24+YXJncy5vYmplY3Q7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY2Npb24gPT0gXCJ1cFwiKSB7XHJcbiAgICAgICAgICAgIGdyaWQuYmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKFwiIzAwMmFmZlwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBncmlkLmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcIiM0ZWNkYzRcIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0RXguYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdHJvRmFjZWJvb2soKSB7XHJcbiAgICAgICAgLy9hbGVydChcIkFxdWkgc2UgcmVnaXN0cmEgY29uIEZhY2Vib29rXCIpO1xyXG4gICAgICAgIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkZBQ0VCT09LLFxyXG4gICAgICAgICAgICAvLyBPcHRpb25hbFxyXG4gICAgICAgICAgICBmYWNlYm9va09wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRzIHRvIFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnXVxyXG4gICAgICAgICAgICAgICAgc2NvcGU6IFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdHJvR21haWwoKSB7XHJcbiAgICAgICAgLy9hbGVydChcIkFxdWkgc2UgcmVnaXN0cmEgY29uIEdtYWlsXCIpO1xyXG4gICAgICAgIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkdPT0dMRSxcclxuICAgICAgICAgICAgLy8gT3B0aW9uYWwgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdC5lbWFpbCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudWlkKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5lbWFpbCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVnaXN0cmFyVXN1YXJpbygpIHtcclxuICAgICAgICB0aGlzLmVtYWlsID0gdGhpcy51c3VhcmlvLmVtYWlsO1xyXG4gICAgICAgIHRoaXMucGFzc3dvID0gdGhpcy51c3VhcmlvLnBhc3M7XHJcblxyXG4gICAgICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xyXG4gICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVnaXN0cm8gZGUgdXN1YXJpb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRWwgcmVnaXN0cm8gZGUgdXN1YXJpbyBmdWUgZXhpdG9zb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVycm9yRW1haWxFeGlzdCA9IGVycm9yTWVzc2FnZS5pbmRleE9mKFwiVGhlIGVtYWlsIGFkZHJlc3MgaXMgYWxyZWFkeSBpbiB1c2UgYnkgYW5vdGhlciBhY2NvdW50LlwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvckVtYWlsRXhpc3QgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvciBlbiBlbCByZWdpc3RybyBkZSB1c3VhcmlvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRWwgY29ycmVvIGluZ3Jlc2FkbyB5YSBzZSBlbmN1ZW50cmEgZW4gbGEgYmFzZSBkZSBkYXRvc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQWNlcHRhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbW9zdHJhclBlcmZpbCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRFeC5uYXZpZ2F0ZShbXCJwZXJmaWxcIl0sIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVRvcFwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXJEYXRvcygpIHtcclxuICAgICAgICBsZXQgZm9ybWF0bzogYm9vbGVhbjtcclxuICAgICAgICBpZiAodGhpcy51c3VhcmlvLmVtYWlsID09IG51bGwgfHwgdGhpcy51c3VhcmlvLmVtYWlsID09IFwiXCIgfHwgdGhpcy51c3VhcmlvLmVtYWlsID09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvciBlbiBlbCBpbmljaW8gZGUgc2VzacOzblwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCBjb3JyZW8gZWxlY3Ryb25pY28gZXMgb2JsaWdhdG9yaW9cIixcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmb3JtYXRvID0gdGhpcy52YWxpZGFyRW1haWwodGhpcy51c3VhcmlvLmVtYWlsKSA9PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy51c3VhcmlvLnBhc3MgPT0gbnVsbCB8fCB0aGlzLnVzdWFyaW8ucGFzcyA9PSBcIlwiIHx8IHRoaXMudXN1YXJpby5wYXNzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3IgZW4gZWwgaW5pY2lvIGRlIHNlc2nDs25cIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkxhIGNvbnRyYXNlw7FhIGVzIG9ibGlnYXRvcmlhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkFjZXB0YXJcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy51c3VhcmlvLmNvbnBhc3MgPT0gbnVsbCB8fCB0aGlzLnVzdWFyaW8uY29ucGFzcyA9PSBcIlwiIHx8IHRoaXMudXN1YXJpby5jb25wYXNzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRXJyb3IgZW4gZWwgaW5pY2lvIGRlIHNlc2nDs25cIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkxhIGNvbmZpcm1hY2lvbiBkZSBjb250cmFzZcOxYSBlcyBvYmxpZ2F0b3JpYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJBY2VwdGFyXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudXN1YXJpby5jb25wYXNzICE9IHRoaXMudXN1YXJpby5wYXNzKSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvciBlbiBlbCBpbmljaW8gZGUgc2VzacOzblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTGEgY29udHJhc2XDsWFzIG5vIGNvbmluY2lkZW5cIixcclxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQWNlcHRhclwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnVzdWFyaW8udGVsZWZvbm8gPT0gbnVsbCB8fCB0aGlzLnVzdWFyaW8udGVsZWZvbm8gPD0gMCB8fCB0aGlzLnVzdWFyaW8udGVsZWZvbm8gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvciBlbiBlbCBpbmljaW8gZGUgc2VzacOzblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRWwgdGVsZWZvbm8gZXMgb2JsaWdhdG9yaW9cIixcclxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQWNlcHRhclwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RyYXJVc3VhcmlvKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvciBlbiBlbCBpbmljaW8gZGUgc2VzacOzblwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFbCBjb3JyZW8gaW5ncmVzYWRvIG5vIHRpZW5lIGZvcm1hdG8gZGUgY29ycmVvIGVsZWN0cm9uaWNvXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQWNlcHRhclwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhckVtYWlsKGVtYWlsKSB7XHJcbiAgICAgICAgbGV0IHZhbGlkYSA9IGVtYWlsLmluZGV4T2YoXCJAXCIpO1xyXG4gICAgICAgIGlmICh2YWxpZGEgPj0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==