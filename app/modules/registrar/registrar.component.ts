import { Component } from "@angular/core";
import { TouchGestureEventData } from "tns-core-modules/ui/gestures/gestures";
import { Button } from "tns-core-modules/ui/button/button";
import { Color } from "tns-core-modules/color/color";
import { RouterExtensions } from "nativescript-angular/router";
import { DialogOptions } from "ui/dialogs";

import firebase = require("nativescript-plugin-firebase");
import * as dialogs from "ui/dialogs";

import { RegistroUsuario } from "../login/user";


@Component({
    selector: "app-registrar",
    templateUrl: "./modules/registrar/registrar.component.html",
    styleUrls: ["./modules/registrar/registrar.component.css"]
})

export class RegistrarComponent {

    email: any;
    passwo: any;
    conpass: any;
    telefono: any;

    usuario: RegistroUsuario;

    constructor(private routEx: RouterExtensions) {

        this.usuario = new RegistroUsuario();

        if (this.usuario.email != null) {
            this.email = this.usuario.email;
        }
    }


    onTouchButton(args: TouchGestureEventData) {
        let seleccion = args.action;
        let grid = <Button>args.object;

        if (seleccion == "up") {
            grid.backgroundColor = new Color("#002aff");
        } else {
            grid.backgroundColor = new Color("#4ecdc4");

        }
    }

    goBack() {
        this.routEx.back();
    }

    registroFacebook() {
        //alert("Aqui se registra con Facebook");
        firebase.login({
            type: firebase.LoginType.FACEBOOK,
            // Optional
            facebookOptions: {
                // defaults to ['public_profile', 'email']
                scope: ['public_profile', 'email']
            }
        }).then(
            function (result) {
                JSON.stringify(result);
            },
            function (errorMessage) {
                console.log(errorMessage);
            }
            );
    }

    registroGmail() {
        //alert("Aqui se registra con Gmail");
        firebase.login({
            type: firebase.LoginType.GOOGLE,
            // Optional 
            
        }).then(
            function (result) {
                JSON.stringify(result.email);
                console.log(result.uid);
                console.log(result.email);
            },
            function (errorMessage) {
                console.log(errorMessage);
            }
            );
    }


    registrarUsuario() {
        this.email = this.usuario.email;
        this.passwo = this.usuario.pass;

        firebase.createUser({
            email: this.email,
            password: this.passwo
        }).then(
            (result) => {
                dialogs.alert({
                    title: "Registro de usuario",
                    message: "El registro de usuario fue exitoso",
                    okButtonText: "Aceptar"
                })
                this.goBack();
            },
            (errorMessage) => {
                console.log(errorMessage);
                let errorEmailExist = errorMessage.indexOf("The email address is already in use by another account.");
                if (errorEmailExist >= 0) {
                    dialogs.alert({
                        title: "Error en el registro de usuario",
                        message: "El correo ingresado ya se encuentra en la base de datos",
                        okButtonText: "Aceptar"
                    })
                    this.goBack();
                }
            }
            );
    }

    mostrarPerfil() {
        this.routEx.navigate(["perfil"], {
            transition: {
                name: "slideTop",
                duration: 500,
                curve: "linear"
            }
        })
    }

    validarDatos() {
        let formato: boolean;
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
            } else if (this.usuario.conpass == null || this.usuario.conpass == "" || this.usuario.conpass == undefined) {
                dialogs.alert({
                    title: "Error en el inicio de sesión",
                    message: "La confirmacion de contraseña es obligatoria",
                    okButtonText: "Aceptar"
                });
            } else if (this.usuario.conpass != this.usuario.pass) {
                dialogs.alert({
                    title: "Error en el inicio de sesión",
                    message: "La contraseñas no coninciden",
                    okButtonText: "Aceptar"
                });
            } else if (this.usuario.telefono == null || this.usuario.telefono <= 0 || this.usuario.telefono == undefined) {
                dialogs.alert({
                    title: "Error en el inicio de sesión",
                    message: "El telefono es obligatorio",
                    okButtonText: "Aceptar"
                })
            } else {
                this.registrarUsuario();
            }

        } else {
            dialogs.alert({
                title: "Error en el inicio de sesión",
                message: "El correo ingresado no tiene formato de correo electronico",
                okButtonText: "Aceptar"
            })
        }

    }

    public validarEmail(email) {
        let valida = email.indexOf("@");
        if (valida >= 0) {
            return true;
        } else {
            return false;
        }
    }

}