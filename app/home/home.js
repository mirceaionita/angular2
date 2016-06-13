System.register(['angular2/core', '../services/dataService', '../pipes/multiplier'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dataService_1, multiplier_1;
    var Home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dataService_1_1) {
                dataService_1 = dataService_1_1;
            },
            function (multiplier_1_1) {
                multiplier_1 = multiplier_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home(dataService) {
                    this.currentDate = new Date();
                    this.names = dataService.getItems();
                }
                Home = __decorate([
                    core_1.Component({
                        providers: [dataService_1.DataService],
                        templateUrl: 'app/home/home.html',
                        pipes: [multiplier_1.Multiplier]
                    }), 
                    __metadata('design:paramtypes', [dataService_1.DataService])
                ], Home);
                return Home;
            })();
            exports_1("Home", Home);
        }
    }
});
//# sourceMappingURL=home.js.map