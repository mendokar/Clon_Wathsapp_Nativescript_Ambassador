import { Component,OnInit } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");

@Component({
    selector:"app-perfil",
    templateUrl:"./modules/perfil/perfil.component.html",
    styleUrls:["./modules/perfil/perfil.component.css"]
})

export class PerfilComponent implements OnInit {

    crearPerfil(){
        firebase.push(
      '/users',
      {
        'first': 'Eddy',
        'last': 'Verbruggen',
        'birthYear': 1977,
        'isMale': true,
        'address': {
          'street': 'foostreet',
          'number': 123
        }
      }
  ).then(
      function (result) {
        console.log("created key: " + result.key);
      }
  ),function (error){
      console.log(error);
  }
    ;

firebase.keepInSync(
    "/users", // which path in your Firebase needs to be kept in sync?
    true      // set to false to disable this feature again
  ).then(
    function (result) {
      console.log("firebase.keepInSync is ON for /users"+result);
    },
    function (error) {
      console.log("firebase.keepInSync error: " + error);
    }
  );

    }

    ngOnInit(){
        firebase.init({
            persist:true
        });

        firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
}).then(
    function (instance) {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);
    }

    
}