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

    email:any;
    passwo:any;
    conpass:any;
    telefono:any;

    usuario:RegistroUsuario;

    constructor(private routEx: RouterExtensions) {
        
        this.usuario = new RegistroUsuario();

        if(this.usuario.email!= null){
            this.email= this.usuario.email;
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
        alert("Aqui se registra con Facebook");
    }

    registroGmail() {
        alert("Aqui se registra con Gmail");
        this.routEx.navigate(["chat"],{
            transition:{
                name:"slideTop",
                duration:200,
                curve:"linear"
            }
        })
    }


    registrarUsuario() {

        firebase.createUser({
            email: 'oscarmendoza93@gmail.com',
            password: 'firebase'
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

    mostrarPerfil(){
        this.routEx.navigate(["perfil"],{
            transition:{
                name:"slideTop",
                duration:500,
                curve:"linear"
            }
        })
    }

    validarDatos(){
        if(this.email != null || this.email == ""){
            dialogs.alert({
                title: "Error en el inicio de sesión",
                message: "El correo electronico es obligatorio",
                okButtonText: "Aceptar"
            });
        } else if(this.passwo != null || this.passwo == ""){
            dialogs.alert({
                title: "Error en el inicio de sesión",
                message: "La contraseña es obligatoria",
                okButtonText: "Aceptar"
            });
        }else if(this.conpass != null || this.conpass == ""){
            dialogs.alert({
                title: "Error en el inicio de sesión",
                message: "La confirmacion de contraseña es obligatoria",
                okButtonText: "Aceptar"
            });
        }else if(this.conpass !=  this.passwo){
            dialogs.alert({
                title: "Error en el inicio de sesión",
                message: "La contraseñas no coninciden",
                okButtonText: "Aceptar"
            });
        }else if(this.telefono != null || this.telefono == ""){
            dialogs.alert({
                title: "Error en el inicio de sesión",
                message: "El telefono es obligatoria",
                okButtonText: "Aceptar"
            })
        }else{

        }

    }

}