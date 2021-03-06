System.register(['./app.component', 'angular2/platform/browser', 'angular2/router', 'angular2/http'], function(exports_1) {
    var app_component_1, browser_1, router_1, http_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map