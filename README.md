# interface-web-selection://readme

![VSTS Build](https://revaturecloud.visualstudio.com/_apis/public/build/definitions/56fc7a24-8777-4224-afbd-26fafcce8f2d/9/badge)

## instruction
1. download and install VirtualBox 5.2+.
1. download and install Vagrant 2.1+.
1. download or clone this repository.
1. open the machine shell.
1. navigate to the repository folder.
1. run command `vagrant up`.
1. run command `vagrant ssh`.

## technology
+ [Docker](https://www.docker.com/).
+ [Vagrant](https://www.vagrantup.com/).
+ [VirtualBox](https://www.virtualbox.org/).

## maintainer
+ [fred belotte](https://github.com/fredbelotte)
+ [Nicholas Escalona](https://github.com/escalonn)
+ [Pushpinder Kaur](https://github.com/kaurrevature)

## testing
In order to use the Jasmine and Karma framework for a module separate from app.module you need to change the following in the angular.json:
```
"test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "projects/revaturecloud/selection/src/test.ts",
            "tsConfig": "projects/revaturecloud/selection/tsconfig.spec.json",
            "karmaConfig": "projects/revaturecloud/selection/karma.conf.js",
            "styles": [
              "src/styles.css"
            ],
            "scripts": [],
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ]
          }
```
There are basic integration tests with Jasmine in the selection.component.spec.ts file.
## license
__interface-web-selection__ is licensed under the terms of the [MIT License](https://github.com/revaturecloud/interface-web-selection/blob/master/LICENSE).
