"use strict";angular.module("app",["ui.router"]),angular.module("app").config(function(t,o){t.rule(function(t,o){var n=o.path();if("/"===n[n.length-1])return n.substr(0,n.length-1)}),o.html5Mode(!0),o.hashPrefix("!")}).run(function(t,o,n){t.$on("$stateChangeSuccess",function(t,o,n,a,e){}),t.$on("$stateChangeStart",function(t,o,n,a,e){})}),angular.module("app").component("navbar",{templateUrl:"app/components/navbar/navbar.template.html",controller:function(t){}}),angular.module("app").component("footer",{templateUrl:"app/components/footer/footer.template.html",controller:function(t){}}),angular.module("app").component("home",{templateUrl:"app/home/home.template.html",controller:function(t){}}).config(function(t){t.state("home",{url:"/",template:"<home></home>"})}),angular.module("app").component("about",{templateUrl:"app/about/about.template.html",controller:function(t){}}).config(function(t){t.state("about",{url:"/about",template:"<about></about>"})}),angular.module("app").component("contact",{templateUrl:"app/contact/contact.template.html",controller:function(t){}}).config(function(t){t.state("contact",{url:"/contact",template:"<contact></contact>"})});