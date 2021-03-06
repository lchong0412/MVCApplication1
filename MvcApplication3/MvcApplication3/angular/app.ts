﻿/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />
module MainModule {
    'use strict';
    
    export class AngularRegistry {
        static modules: Array<string> = new Array<string>();

        static StartApp() {
            angular.bootstrap(document, this.modules);
        }

        static RegisterModules(name: string, dependencies: Array<string>) {
            this.modules.push(name);
            return angular.module(name, dependencies);
        }
    }
}