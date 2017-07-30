import { LoginComponent} from "./modules/login/login.component";
import { MenuComponent } from "./modules/menu/menu.component";
import { RegistrarComponent} from "./modules/registrar/registrar.component";
import { ChatComponent } from "./modules/chat/chat.component";
import { PerfilComponent } from "./modules/perfil/perfil.component";

export const Routes =[
    {path:"",component:LoginComponent},
    {path:"menu",component:MenuComponent},
    {path:"registrar",component:RegistrarComponent},
    {path:"chat",component:ChatComponent},
    {path:"perfil",component:PerfilComponent}
]

export const NavigateRoutes =[
    LoginComponent,
    MenuComponent,
    RegistrarComponent,
    ChatComponent,
    PerfilComponent
]