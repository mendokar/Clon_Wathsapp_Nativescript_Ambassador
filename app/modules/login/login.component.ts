import { Component } from "@angular/core";
import { NavigationExtras } from "@angular/router";
import { Page } from "ui/page";
import { TouchGestureEventData } from "tns-core-modules/ui/gestures/gestures";
import { Button } from "ui/button";
import { Color } from "tns-core-modules/color/color";
import { RouterExtensions } from "nativescript-angular/router";
import * as dialogs from "tns-core-modules/ui/dialogs";
import firebase = require("nativescript-plugin-firebase");

import * as frameModule from "tns-core-modules/ui/frame";

import { RegistroUsuario } from "./user";

import { LoadingIndicator} from "nativescript-loading-indicator";

@Component({
    selector: "app-login",
    templateUrl: "./modules/login/login.component.html",
    styleUrls: ["./modules/login/login.component.css"]

})
export class LoginComponent {

    passwo: any;
    email: any;

    usuario: RegistroUsuario;
    loading:LoadingIndicator
    // Your TypeScript logic goes here

    public isTurnedOn: Boolean = false;
    public mostrarPass: Boolean = true;

    constructor(private page: Page, private routEx: RouterExtensions) {
        page.actionBarHidden = true;

        this.usuario = new RegistroUsuario();
        this.loading= new LoadingIndicator();

        
    }



    public onTouchButton(args: TouchGestureEventData) {
        let seleccion = args.action;
        let grid = <Button>args.object;

        if (seleccion == "up") {
            grid.backgroundColor = new Color("#002aff");
        } else {
            grid.backgroundColor = new Color("#4ecdc4");

        }
    }


    public mostrarClave() {
        if (this.mostrarPass == true) {
            this.isTurnedOn = false;
            this.mostrarPass = false;
        } else {
            this.isTurnedOn = true;
            this.mostrarPass = true;
        }

    }

    public pantallaRegistrar() {

        let navigationExtras: NavigationExtras = {
            queryParams: {
                "usuario": this.usuario.email
            }
        }
        console.log(this.usuario.email);
        this.routEx.navigate(["registrar"], {
            transition: {
                name: "slideTop",
                duration: 500,
                curve: "linear"
            }

        }
        
        )
    this.loading.hide();

    }

    public pantallaMenu() {
        this.routEx.navigate(["menu"], {
            clearHistory: true,
            transition: {
                name: "slideTop",
                duration: 500,
                curve: "linear"
            }
        }
        )

    }

    public reaizarLogin() {

        this.email = this.usuario.email;
        this.passwo = this.usuario.pass;

        if (this.email == "" || this.email == null) {
            dialogs.alert({
                title: "Error en el inicio de sesión",
                message: "El correo electronico es obligatorio",
                okButtonText: "Aceptar"
            })
        } else if (this.passwo == "" || this.passwo == null) {
            dialogs.alert({
                title: "Error en el inicio de sesión",
                message: "La contraseña es obligatoria",
                okButtonText: "Aceptar"
            })
        } else {
            firebase.login({
                type: firebase.LoginType.PASSWORD,
                passwordOptions: {
                    email: this.email,
                    password: this.passwo
                }
            }).then(result => {
                JSON.stringify(result);
                console.log("uid" + result.uid);
                console.log("name" + result.providers);
                this.pantallaMenu();
            },
                errorMessage => {
                    console.log(errorMessage);
                    let errorEmail = errorMessage.indexOf("The email address is badly formatted.");
                    let errorUsuario = errorMessage.indexOf("There is no user record corresponding to this identifier.");
                    let errorClave = errorMessage.indexOf("The password is invalid or the user does not have a password.")
                    if (errorEmail >= 0) {
                        dialogs.alert({
                            title: "Error en el inicio de sesión",
                            message: "El correo ingresado no tiene formato de correo electronico",
                            okButtonText: "Aceptar"
                        })
                    }
                    if (errorUsuario >= 0) {
                        var options = {
                            title: "Error en el inicio de sesión",
                            message: "El correo ingresado no se encuentra en la base de datos, ¿Desea Registrarse?",
                            okButtonText: "SI",
                            cancelButtonText: "No"
                            //neutralButtonText: "Cancel"
                        };
                        dialogs.confirm(options).then((result: boolean) => {
                            // result can be true/false/undefined
                            console.log(result);
                            if (result == true) {
                                this.pantallaRegistrar();
                            }
                        });
                    }
                    if (errorClave >= 0) {
                        dialogs.alert({
                            title: "Error en el inicio de sesión",
                            message: "La contraseña ingresada no es correcta",
                            okButtonText: "Aceptar"
                        })
                    }

                }
                );
        }

    }


    loginGmail() {
        this.mostrarLoading();
        //alert("Aqui se registra con Gmail");
        firebase.login({
            type: firebase.LoginType.GOOGLE,
            // Optional 

        }).then(
             (result) =>{
                JSON.stringify(result.email);
                console.log(result.uid);
                console.log(result.email);
                this.pantallaMenu();
            },
             (errorMessage) => {
                console.log(errorMessage);
            }
            );
    }

    loginFacebook() {
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

    mostrarLoading(){
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
}
        this.loading.hide();
    }
    ocultarLoading(){
        this.loading.show();
    }






}