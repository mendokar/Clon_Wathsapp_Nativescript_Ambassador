import { Component, OnInit } from "@angular/core";
import { RegistroUsuario } from "../login/user";
import { Observable, EventData } from 'data/observable'
import { TnsSideDrawer, TnsSideDrawerOptions } from 'nativescript-sidedrawer'
import { RouterExtensions } from "nativescript-angular/router";
import { Color } from "tns-core-modules/color/color";
import { ImageSource } from "tns-core-modules/image-source/image-source";
import firebase = require("nativescript-plugin-firebase");
import { FirebaseService } from "./firebase.service";


@Component({
	selector: "app-menu",
	templateUrl: "./modules/menu/menu.component.html",
	styleUrls: ["./modules/menu/menu.component.css"]
})
export class MenuComponent extends   Observable  {
	// Your TypeScript logic goes here
	usuario: RegistroUsuario;

	private _i: number = 0
	get i(): number {
		return this._i
	}
	set i(i: number) {
		this._i = i
		this.notifyPropertyChange('i', i)
	}

	constructor(private routEx: RouterExtensions,
		//private firebaseService: FirebaseService,
	) {
		super();

		var img = new ImageSource();


		TnsSideDrawer.build({
			templates: [{
				title: 'Home',
				androidIcon: 'homesketch',
				iosIcon: 'homesketch',
			}, {
				title: 'Chats',
				androidIcon: 'chat',
				iosIcon: 'chat',
			}
				,
			{
				title: 'Cerrar Sesión',
				androidIcon: 'logout',
				iosIcon: 'logout',
			}],
			title: "",
			subtitle: 'Mantente Conectado Con Los Que Mas Quieres!',
			listener: (index) => {
				this.i = index
				console.log(index);

				if (index == 0) {
					alert("nos fuimos para el menu 1");
					this.routEx.navigate(["registrar"], {
						transition: {
							name: "slideTop",
							duration: 500,
							curve: "linear"
						}
					})
				}
			},
			context: this,
			backgroundColor: new Color("#70b7fe"),
			headerBackgroundColor: new Color("#2793ff"),
		});



	}

	toggleit() {
		TnsSideDrawer.toggle()
	}

	/**
	 * listenerTable
	 */
	public listenerTable() {
		var onChildEvent = function(result) {
			console.log("Event type: " + result.type);
			console.log("Key: " + result.key);
			console.log("Value: " + JSON.stringify(result.value));
		  };
		
		  // listen to changes in the /users path
		  firebase.addChildEventListener(onChildEvent, "/users").then(
			function(listenerWrapper) {
			  var path = listenerWrapper.path;
			  var listeners = listenerWrapper.listeners; // an Array of listeners added
			  // you can store the wrapper somewhere to later call 'removeEventListeners'
			}
		  );
	}

	/*ngOnInit(){
		let arre= <any>this.firebaseService.getMyWishList();
		
	  }*/


}