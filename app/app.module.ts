import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";

import { NavigateRoutes,Routes} from "./app.routing";

import { registerElement } from "nativescript-angular";
registerElement("Gradient", () => require("nativescript-gradient").Gradient);

@NgModule({
  declarations: [AppComponent,...NavigateRoutes],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,
  NativeScriptRouterModule,
  NativeScriptRouterModule.forRoot(Routes),
  NativeScriptFormsModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
