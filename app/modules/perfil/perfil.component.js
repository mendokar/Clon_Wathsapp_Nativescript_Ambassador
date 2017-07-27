"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var PerfilComponent = (function () {
    function PerfilComponent() {
    }
    PerfilComponent.prototype.crearPerfil = function () {
        firebase.push('/users', {
            'first': 'Eddy',
            'last': 'Verbruggen',
            'birthYear': 1977,
            'isMale': true,
            'address': {
                'street': 'foostreet',
                'number': 123
            }
        }).then(function (result) {
            console.log("created key: " + result.key);
        }), function (error) {
            console.log(error);
        };
        firebase.keepInSync("/users", // which path in your Firebase needs to be kept in sync?
        true // set to false to disable this feature again
        ).then(function (result) {
            console.log("firebase.keepInSync is ON for /users" + result);
        }, function (error) {
            console.log("firebase.keepInSync error: " + error);
        });
    };
    PerfilComponent.prototype.ngOnInit = function () {
        firebase.init({
            persist: true
        });
        firebase.init({}).then(function (instance) {
            console.log("firebase.init done");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
    };
    return PerfilComponent;
}());
PerfilComponent = __decorate([
    core_1.Component({
        selector: "app-perfil",
        templateUrl: "./modules/perfil/perfil.component.html",
        styleUrls: ["./modules/perfil/perfil.component.css"]
    })
], PerfilComponent);
exports.PerfilComponent = PerfilComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZmlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlcmZpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQsdURBQTBEO0FBUTFELElBQWEsZUFBZTtJQUE1QjtJQXlEQSxDQUFDO0lBdkRHLHFDQUFXLEdBQVg7UUFDSSxRQUFRLENBQUMsSUFBSSxDQUNmLFFBQVEsRUFDUjtZQUNFLE9BQU8sRUFBRSxNQUFNO1lBQ2YsTUFBTSxFQUFFLFlBQVk7WUFDcEIsV0FBVyxFQUFFLElBQUk7WUFDakIsUUFBUSxFQUFFLElBQUk7WUFDZCxTQUFTLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxHQUFHO2FBQ2Q7U0FDRixDQUNKLENBQUMsSUFBSSxDQUNGLFVBQVUsTUFBTTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQ0osRUFBQyxVQUFVLEtBQUs7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FDRTtRQUVMLFFBQVEsQ0FBQyxVQUFVLENBQ2YsUUFBUSxFQUFFLHdEQUF3RDtRQUNsRSxJQUFJLENBQU0sNkNBQTZDO1NBQ3hELENBQUMsSUFBSSxDQUNKLFVBQVUsTUFBTTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLEdBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxFQUNELFVBQVUsS0FBSztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUNGLENBQUM7SUFFQSxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDVixPQUFPLEVBQUMsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFHckIsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFVLFFBQVE7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFDRCxVQUFVLEtBQUs7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FDSixDQUFDO0lBQ0UsQ0FBQztJQUdMLHNCQUFDO0FBQUQsQ0FBQyxBQXpERCxJQXlEQztBQXpEWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUMsWUFBWTtRQUNyQixXQUFXLEVBQUMsd0NBQXdDO1FBQ3BELFNBQVMsRUFBQyxDQUFDLHVDQUF1QyxDQUFDO0tBQ3RELENBQUM7R0FFVyxlQUFlLENBeUQzQjtBQXpEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6XCJhcHAtcGVyZmlsXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDpcIi4vbW9kdWxlcy9wZXJmaWwvcGVyZmlsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6W1wiLi9tb2R1bGVzL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBlcmZpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY3JlYXJQZXJmaWwoKXtcclxuICAgICAgICBmaXJlYmFzZS5wdXNoKFxyXG4gICAgICAnL3VzZXJzJyxcclxuICAgICAge1xyXG4gICAgICAgICdmaXJzdCc6ICdFZGR5JyxcclxuICAgICAgICAnbGFzdCc6ICdWZXJicnVnZ2VuJyxcclxuICAgICAgICAnYmlydGhZZWFyJzogMTk3NyxcclxuICAgICAgICAnaXNNYWxlJzogdHJ1ZSxcclxuICAgICAgICAnYWRkcmVzcyc6IHtcclxuICAgICAgICAgICdzdHJlZXQnOiAnZm9vc3RyZWV0JyxcclxuICAgICAgICAgICdudW1iZXInOiAxMjNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICApLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZWQga2V5OiBcIiArIHJlc3VsdC5rZXkpO1xyXG4gICAgICB9XHJcbiAgKSxmdW5jdGlvbiAoZXJyb3Ipe1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG4gICAgO1xyXG5cclxuZmlyZWJhc2Uua2VlcEluU3luYyhcclxuICAgIFwiL3VzZXJzXCIsIC8vIHdoaWNoIHBhdGggaW4geW91ciBGaXJlYmFzZSBuZWVkcyB0byBiZSBrZXB0IGluIHN5bmM/XHJcbiAgICB0cnVlICAgICAgLy8gc2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBmZWF0dXJlIGFnYWluXHJcbiAgKS50aGVuKFxyXG4gICAgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmtlZXBJblN5bmMgaXMgT04gZm9yIC91c2Vyc1wiK3Jlc3VsdCk7XHJcbiAgICB9LFxyXG4gICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2Uua2VlcEluU3luYyBlcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICBmaXJlYmFzZS5pbml0KHtcclxuICAgICAgICAgICAgcGVyc2lzdDp0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZpcmViYXNlLmluaXQoe1xyXG4gIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcclxuICAvLyBzZWUgdGhlaXIgcmVzcGVjdGl2ZSBkb2NzLlxyXG59KS50aGVuKFxyXG4gICAgZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xyXG4gICAgfSxcclxuICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZXJyb3I6IFwiICsgZXJyb3IpO1xyXG4gICAgfVxyXG4pO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG59Il19