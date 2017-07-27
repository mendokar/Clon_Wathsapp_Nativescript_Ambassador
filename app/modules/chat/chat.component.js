"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ChatComponent = (function () {
    function ChatComponent(router) {
        var _this = this;
        this.router = router;
        this.router.params
            .forEach(function (params) { _this.id = +params['id']; });
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.mockChat = [{
                "id": 1,
                "nombre": "Grupo de chat de nativeScript",
                "usuarios": {
                    "usuario_1": "jorgeucano",
                    "usuario_2": "jorgeucano2",
                    "usuario_3": "jorgeucano3"
                },
                "creacion": "12/12/2016",
                "dialogo": [
                    {
                        "date": "12/12/2016",
                        "texto": "Hola alguien vio la clase?",
                        "usuario": "jorgeucano",
                        "recibio": {
                            "usuario_1": "jorgeucano2",
                            "usuario_2": "jorgeucano3"
                        }
                    },
                    {
                        "date": "12/12/2016",
                        "texto": "si yo estuvo genial",
                        "usuario": "jorgeucano2",
                        "recibio": {
                            "usuario_1": "jorgeucano",
                            "usuario_2": "jorgeucano3"
                        }
                    }
                ]
            }];
    };
    ChatComponent.prototype.addText = function () {
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        selector: "app-chat",
        templateUrl: "./modules/chat/chat.component.html"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBaUQ7QUFLakQsSUFBYSxhQUFhO0lBSXRCLHVCQUFvQixNQUFzQjtRQUExQyxpQkFHQztRQUhtQixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDVCxPQUFPLENBQUMsVUFBQyxNQUFNLElBQUksS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO2dCQUNiLElBQUksRUFBRSxDQUFDO2dCQUNQLFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFVBQVUsRUFBRTtvQkFDUixXQUFXLEVBQUUsWUFBWTtvQkFDekIsV0FBVyxFQUFFLGFBQWE7b0JBQzFCLFdBQVcsRUFBRSxhQUFhO2lCQUM3QjtnQkFDRCxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsU0FBUyxFQUFFO29CQUNQO3dCQUNJLE1BQU0sRUFBRSxZQUFZO3dCQUNwQixPQUFPLEVBQUUsNEJBQTRCO3dCQUNyQyxTQUFTLEVBQUUsWUFBWTt3QkFDdkIsU0FBUyxFQUFFOzRCQUNQLFdBQVcsRUFBRSxhQUFhOzRCQUMxQixXQUFXLEVBQUUsYUFBYTt5QkFDN0I7cUJBQ0o7b0JBQ0Q7d0JBQ0ksTUFBTSxFQUFFLFlBQVk7d0JBQ3BCLE9BQU8sRUFBRSxxQkFBcUI7d0JBQzlCLFNBQVMsRUFBRSxhQUFhO3dCQUN4QixTQUFTLEVBQUU7NEJBQ1AsV0FBVyxFQUFFLFlBQVk7NEJBQ3pCLFdBQVcsRUFBRSxhQUFhO3lCQUM3QjtxQkFDSjtpQkFDSjthQUNKLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCwrQkFBTyxHQUFQO0lBRUEsQ0FBQztJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQS9DWSxhQUFhO0lBSnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsb0NBQW9DO0tBQ3BELENBQUM7cUNBSzhCLHVCQUFjO0dBSmpDLGFBQWEsQ0ErQ3pCO0FBL0NZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJhcHAtY2hhdFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tb2R1bGVzL2NoYXQvY2hhdC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50e1xyXG4gICAgaWQ6bnVtYmVyO1xyXG4gICAgbW9ja0NoYXQ6YW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBBY3RpdmF0ZWRSb3V0ZSl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIucGFyYW1zXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgocGFyYW1zKT0+e3RoaXMuaWQgPSArcGFyYW1zWydpZCddfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLm1vY2tDaGF0ID0gW3tcclxuICAgICAgICAgICAgXCJpZFwiOiAxLCBcclxuICAgICAgICAgICAgXCJub21icmVcIjogXCJHcnVwbyBkZSBjaGF0IGRlIG5hdGl2ZVNjcmlwdFwiLFxyXG4gICAgICAgICAgICBcInVzdWFyaW9zXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidXN1YXJpb18xXCI6IFwiam9yZ2V1Y2Fub1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ1c3VhcmlvXzJcIjogXCJqb3JnZXVjYW5vMlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1c3VhcmlvXzNcIjogXCJqb3JnZXVjYW5vM1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiY3JlYWNpb25cIjogXCIxMi8xMi8yMDE2XCIsXHJcbiAgICAgICAgICAgIFwiZGlhbG9nb1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMTIvMTIvMjAxNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dG9cIjogXCJIb2xhIGFsZ3VpZW4gdmlvIGxhIGNsYXNlP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidXN1YXJpb1wiOiBcImpvcmdldWNhbm9cIixcclxuICAgICAgICAgICAgICAgICAgICBcInJlY2liaW9cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVzdWFyaW9fMVwiOiBcImpvcmdldWNhbm8yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXN1YXJpb18yXCI6IFwiam9yZ2V1Y2FubzNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMTIvMTIvMjAxNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dG9cIjogXCJzaSB5byBlc3R1dm8gZ2VuaWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c3VhcmlvXCI6IFwiam9yZ2V1Y2FubzJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInJlY2liaW9cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVzdWFyaW9fMVwiOiBcImpvcmdldWNhbm9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c3VhcmlvXzJcIjogXCJqb3JnZXVjYW5vM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfV07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRleHQoKXtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn0iXX0=