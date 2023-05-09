(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (click)=\"onBackClick()\" class=\"back-icon\">\n    <app-back-icon></app-back-icon>\n</div>\n<span class=\"overlay\"></span>\n<div class=\"container\">\n    <div class=\"side1\">\n        <h1 class=\"skill-header\">ABOUT</h1>\n        <app-dp-logo height=\"13rem\" width=\"13rem\" class=\"dp-logo\"></app-dp-logo>\n        <div class=\"text-container\">\n            <p>\n                Since graduated NSU in 2013 with bachelor's degree in computer science, I have been working as \n                a web developer in several companies.\n\n            </p>\n            <br>\n            <p>\n                I've built a number of web application using various modern techs and methods.\n                I love my job and I always try to learn cutting-edge technologies.\n            </p>\n            <br>\n            <p>\n                Apart from web development, I like IOT & play with Arduino.\n            </p>\n        </div>\n    </div>\n    <div class=\"side2\">\n        <div class=\"skill-container\">\n            <h1 class=\"skill-header\">\n                Skills\n            </h1>\n            <div *ngFor=\"let skill of skills\">\n                <h4 class=\"skill-type\">{{skill.type}}</h4>\n                <h4 class=\"skill-names\">{{skill.names.join(', ')}}</h4>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]=\"triggerAnimation(outlet)\">\n  <router-outlet #outlet=\"outlet\"></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (click)=\"onBackClick()\" class=\"back-icon\">\n    <app-back-icon></app-back-icon>\n</div>\n\n<div class=\"root\">\n    <div>\n        <h1 class=\"page-header\">CONTACT & PROFILES</h1>\n    </div>\n    <div class=\"container\">\n        <div class=\"part part1\">\n            <div class=\"section min-section\">\n                <a class=\"img icon\" [href]=\"email.url\" target=\"_top\">\n                    <img [title]=\"email.name\" [src]=\"email.iconUrl\" [alt]=\"email.name\">\n                </a>\n                <p>{{email.url.replace('mailto:', '')}}</p>\n            </div>\n            <div class=\"section icons flex-1\">\n                <a *ngFor=\"let workProfile of contactProfile.work\" class=\"img icon\" [href]=\"workProfile.url\"\n                    target=\"_blank\">\n                    <img [title]=\"workProfile.name\" [src]=\"workProfile.iconUrl\" [alt]=\"workProfile.name\">\n                </a>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dp-logo/dp-logo.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dp-logo/dp-logo.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-logo\" [ngStyle]=\"logoStyles\">\n    <img [ngStyle]=\"imgStyle\" src=\"assets/img/me.jpg\" alt=\"my pic\">\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/expense-entry-list/expense-entry-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expense-entry-list/expense-entry-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 text-center\" style=\"padding-top: 20px;\">\n\n            <div class=\"container\" style=\"padding-left: 0px; padding-right: 0px;\">\n                <div class=\"row\">\n                    <div class=\"col-sm\" style=\"text-align: left;\"> {{ title }} </div>\n                    <div class=\"col-sm\" style=\"text-align: right;\"> <button type=\"button\"\n                            class=\"btn btnprimary\">Edit</button> </div>\n                </div>\n            </div>\n            <div class=\"container box\" style=\"margin-top: 10px;\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th>Item</th>\n                            <th>Amount</th>\n                            <th>Category</th>\n                            <th>Location</th>\n                            <th>Spent On</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let entry of expenseEntries\">\n                            <th scope=\"row\">{{ entry.item }}</th>\n                            <th>{{ entry.amount }}</th>\n                            <td>{{ entry.category }}</td>\n                            <td>{{ entry.location }}</td>\n                            <td>{{ entry.spendOn | date: 'short' }}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/expense-entry/expense-entry.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expense-entry/expense-entry.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Page Content -->\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 text-center\" style=\"padding-top: 20px;\">\n            <div class=\"container\" style=\"padding-left: 0px; padding-right: 0px;\">\n                <div class=\"row\">\n                    <div class=\"col-sm\" style=\"text-align: left;\"> {{ title }} </div>\n                    <div class=\"col-sm\" style=\"text-align: right;\"> <button type=\"button\"\n                            class=\"btn btnprimary\">Edit</button> </div>\n                </div>\n            </div>\n            <div class=\"container box\" style=\"margin-top: 10px;\">\n                <div class=\"row\">\n                    <div class=\"col-2\" style=\"text-align: right;\"> <strong><em>Item:</em></strong> </div>\n                    <div class=\"col\" style=\"text-align: left;\"> {{ expenseEntry.item }} </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-2\" style=\"text-align: right;\"> <strong><em>Amount:</em></strong> </div>\n                    <div class=\"col\" style=\"text-align: left;\">\n\n                        {{ expenseEntry.amount }} </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-2\" style=\"text-align: right;\"> <strong><em>Category:</em></strong> </div>\n                    <div class=\"col\" style=\"text-align: left;\"> {{ expenseEntry.category }} </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-2\" style=\"text-align: right;\"> <strong><em>Location:</em></strong> </div>\n                    <div class=\"col\" style=\"text-align: left;\"> {{ expenseEntry.location }} </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-2\" style=\"text-align: right;\">\n\n                        <strong><em>Spend On:</em></strong>\n                    </div>\n                    <div class=\"col\" style=\"text-align: left;\"> {{ expenseEntry.spendOn }} </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/key-skill-btn/key-skill-btn.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/key-skill-btn/key-skill-btn.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"key-skills\">\n    <button class=\"key-skill\" *ngFor=\"let keySkill of keySkills\" (click)=\"toogleSkillSelection(keySkill)\"\n        [disabled]=\"disableIfOneBtn(keySkill)\" [ngClass]=\"{'key-skill--disabled':!keySkill.isSelected}\">\n        {{keySkill.displayName}}\n    </button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"overlay\"></div>\n<div class=\"root-container\">\n  <div class=\"navbar\">\n    <div class=\"nav-items\">\n      <a [routerLink]=\"['/portfolio']\" class=\"nav-item\">Portfolio</a>\n      <a [routerLink]=\"['/about']\" class=\"nav-item\">About & Skills</a>\n      <a [routerLink]=\"['/profiles']\" class=\"nav-item\">Profiles</a>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <app-dp-logo class=\"dp-logo\" height=\"20rem\" width=\"20rem\"></app-dp-logo>\n    <h4 class=\"short-bio\">Senior FullStack Developer</h4>\n\n    <q class=\"quote\">Nothing great is easy!</q>\n    <div class=\"name\">\n      <p>\n        PATRICK CLIFFORD\n      </p>\n      <div class=\"strip\"></div>\n    </div>\n\n    <span (click)=\"onExploreMeClick()\" (mouseover)=\"startTadaAnimation = false\" [ngClass]=\"{'tada-animation':startTadaAnimation}\">\n      <button class=\"special-btn\">\n        <span>\n          Explore Me\n        </span>\n      </button>\n    </span>\n\n    <div class=\"stick\">\n      <div class=\"stick-design\"></div>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigator/navigator.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigator/navigator.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navigator-container\" appEscCancelation (appEscCancelation)=\"onBgClick()\" (click)=\"onBgClick()\">\n    <div class=\"navLinks\" @slideIn>\n        <div *ngFor=\"let nav of navLinks; let isEven = even\" (click)=\"onNavItemClick($event, nav.url)\"\n            [ngStyle]=\"{transform: isEven ? 'translateX(10%)' : 'translateX(-10%)'}\" class=\"navLink\">\n            <div [ngStyle]=\"{transform: isEven ? 'translateX(-10%)' : 'translateX(10%)'}\">\n                {{nav.displayName}}\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"portfolio-bg\">\n    <div class=\"portfolio-container\">\n      <div class=\"portfolio-header\" #portfolioHeader>\n        <app-dp-logo\n          [height]=\"dpLogoStyle.height\"\n          [width]=\"dpLogoStyle.width\"\n          [borderWidth]=\"dpLogoStyle.borderWidth\">\n        </app-dp-logo>\n        <app-typing\n          time=\"2000\"\n          delay=\"1500\"\n          [text]=\"animatedTypingText\">\n        </app-typing>\n      </div>\n      <div class=\"portfolio-area\" #portfolioArea>\n        <div class=\"back-icon\" (click)=\"onBackBtnClick()\">\n          <app-back-icon></app-back-icon>\n        </div>\n        <div class=\"portfolio-selection\" #portfolioSelectionArea [ngClass]=\"{'portfolio-selection__fixed': setFixedPostion }\">\n          <h1>PORTFOLIO</h1>\n          <app-key-skill-btn></app-key-skill-btn>\n        </div>\n        <app-projects></app-projects>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-card/profile-card.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-card/profile-card.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"card\">\n        <div class=\"strip-block\">\n            <div class=\"profile-logo\">\n                <img src=\"assets/img/me.jpg\" alt=\"\">\n            </div>\n            <div class=\"strip\"></div>\n            <div class=\"short-details\">\n                <h4 class=\"tagLine\">\n                    Senior FullStack Developer\n                </h4>\n                <blockquote class=\"quote\">\n                    \"Nothing great is easy!\"\n                </blockquote>\n            </div>\n        </div>\n\n        <div class=\"details\">\n            <div class=\"nameBlock\">\n                <h1 class=\"round-shape name\">\n                    Patrick Clifford\n                </h1>\n                <div class=\"divider\">\n                    <div class=\"stick stick1\"></div>\n                    <div class=\"stick stick2\"></div>\n                </div>\n            </div>\n            <p class=\"bio\">\n                I love coding, new technologies. I'm mostly interested in Full Stack Web Development.\n                <br> I love to work with Node.js, Java, PHP, Angular & React.\n            </p>\n            <div (mouseover)=\"startTadaAnimation = false\" [ngClass]=\"{'tada-animation':startTadaAnimation}\">\n                <a class=\"round-shape projects-link\" (click)=\"onExploreMeClick()\">\n                    <span>\n                        Explore Me\n                    </span>\n                </a>\n            </div>\n        </div>\n        <div class=\"divider\">\n            <div class=\"stick stick1\"></div>\n            <div class=\"stick stick2\"></div>\n        </div>\n\n        <div class=\"social\">\n            <div class=\"social-icon\">\n                <a href=\"https://www.github.com/ulter-super-dev\" target=\"_blank\">\n                    <img src=\"./assets/icons/github.svg\" alt=\"github icon\">\n                </a>\n            </div>\n            <div class=\"social-icon\">\n                <a href=\"https://www.linkedin.com/in/patrick-clifford-1b052323a/\" target=\"_blank\">\n                    <img src=\"./assets/icons/linkedin.svg\" alt=\"linkedin icon\">\n                </a>\n            </div>\n            <div class=\"social-icon\">\n                <a href=\"patrickclifford0417@gamil.com\">\n                    <img src=\"./assets/icons/email.svg\" alt=\"email icon\">\n                </a>\n            </div>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div @animate>\n    <app-navigator *ngIf=\"showNavigationMenu\" (cancellation)=\"showNavigationMenu = false\"></app-navigator>\n</div>\n<app-landing-page (ExploreMe)=\"showNavigationMenu = true\"></app-landing-page>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-card/project-card.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-card/project-card.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-outer\" (click)=\"onCardClick(project)\">\n    <div class=\"card card__front\" [ngClass]=\"{'card__featured':project.isFeatured}\">\n        <div class=\"card-container\">\n            <h4 class=\"card-header\">{{project.name | noEmoji}}</h4>\n            <p class=\"card-short-details\">\n                {{project.description}}\n            </p>\n        </div>\n    </div>\n    <div class=\"card card__back\">\n        <div class=\"card-container\">\n            <h4 class=\"card-header\">{{project.name}}</h4>\n            <div class=\"card-short-details\">\n                <div class=\"tech-stuff-details\">\n                    <span>Tech Stuff: </span>\n                    <p>{{project.techStuff.join(' , ') | maxLength:100:true}}</p>\n                </div>\n                <button class=\"full-width-btn\">More Details</button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-details/project-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-details/project-details.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"project-details-container\" enable-cancellation=\"true\" (appEscCancelation)=\"onCancellation(null, true)\"\n    (click)=\"onCancellation($event)\">\n    <div class=\"project-details\" @slideIn>\n        <div class=\"project-details-header\">\n            <div (click)=\"onCancellation(null, true)\" class=\"cancellation-icon\">\n                <app-cross-icon></app-cross-icon>\n            </div>\n            <h4 class=\"poject-section project-title\">{{project.name}}</h4>\n        </div>\n        <div class=\"project-content\">\n            <p class=\"poject-section project-description\">{{project.description}}</p>\n            <div class=\"poject-section project-links\">\n                <div class=\"project-link\" *ngIf=\"project.projectLink\">\n                    <h4 class=\"project-section__header\">Project Link:</h4>\n                    <a [href]=\"project.projectLink\" target=\"_blank\">{{project.projectLink}}</a>\n                </div>\n                <div class=\"project-link\" *ngIf=\"project.liveUrl\">\n                    <h4 class=\"project-section__header\">Live Url:</h4>\n                    <a [href]=\"project.liveUrl\" target=\"_blank\">{{project.liveUrl}}</a>\n                </div>\n            </div>\n\n            <div *ngIf=\"project.techStuff && project.techStuff.length > 0\" class=\"poject-section project-features\">\n                <h4 class=\"project-section__header\">Tech Stuff: </h4>\n                <ul class=\"project-features-details\">\n                    <li *ngFor=\"let tech of project.techStuff\">{{tech}}</li>\n                </ul>\n            </div>\n\n            <div *ngIf=\"project.features && project.features.length > 0\" class=\"poject-section project-features\">\n                <h4 class=\"project-section__header\">Features: </h4>\n                <ul class=\"project-features-details\">\n                    <li *ngFor=\"let features of project.features\">{{features}}</li>\n                </ul>\n            </div>\n\n            <div *ngIf=\"project.additionalData\">\n                <div *ngFor=\"let ad of project.additionalData\" class=\"poject-section project-features\">\n                    <h4 class=\"project-section__header\">{{ad.title}}: </h4>\n                    <ul class=\"project-features-details\">\n                        <li *ngFor=\"let _data of ad.data\">{{ _data}}</li>\n                    </ul>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"end-section\">\n            :wq!\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@slideIn]=\"projects?.length\" (@slideIn.done)=\"renderProjects()\" class=\"project-container\">\n    <app-project-card *ngFor=\"let project of projects\" [project]=\"project\" (select)=\"onProjectCardClick($event)\" class=\"project-card\">\n    </app-project-card>\n  </div>\n  <div [@animateChildren]=\"selectedProject\">\n    <app-project-details [project]=\"selectedProject\" (cancellation)=\"selectedProject = null\" *ngIf=\"selectedProject\"></app-project-details>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/typing/typing.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typing/typing.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"text\">\n    {{displayText}}\n    <span #cursor class=\"cursor cursor__animate\">|</span>\n</span>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/back-icon/back-icon/back-icon.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/back-icon/back-icon/back-icon.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"icon\">\n    <img\n        src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDAxIDUxMi4wMDEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDEgNTEyLjAwMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4NC44MzQsMTgwLjY5OWMtMC42OTgsMC0zNDguNzMzLDAtMzQ4LjczMywwbDczLjMyNi04Mi4xODdjNC43NTUtNS4zMyw0LjI4OS0xMy41MDUtMS4wNDEtMTguMjYgICAgYy01LjMyOC00Ljc1NC0xMy41MDUtNC4yOS0xOC4yNiwxLjA0MWwtODIuNTgyLDkyLjU2Yy0xMC4wNTksMTEuMjc4LTEwLjA1OCwyOC4yODIsMC4wMDEsMzkuNTU3bDgyLjU4Miw5Mi41NjEgICAgYzIuNTU2LDIuODY1LDYuMDk3LDQuMzIzLDkuNjU0LDQuMzIzYzMuMDY0LDAsNi4xMzktMS4wODMsOC42MDYtMy4yODJjNS4zMy00Ljc1NSw1Ljc5NS0xMi45MywxLjA0MS0xOC4yNmwtNzMuMzI2LTgyLjE4OCAgICBjMCwwLDM0OC4wMzQsMCwzNDguNzMzLDBjNTUuODU4LDAsMTAxLjMsNDUuNDQ0LDEwMS4zLDEwMS4zcy00NS40NDMsMTAxLjMtMTAxLjMsMTAxLjNoLTYxLjU4ICAgIGMtNy4xNDMsMC0xMi45MzMsNS43OTEtMTIuOTMzLDEyLjkzM2MwLDcuMTQyLDUuNzksMTIuOTMzLDEyLjkzMywxMi45MzNoNjEuNThjNzAuMTIsMCwxMjcuMTY2LTU3LjA0NiwxMjcuMTY2LTEyNy4xNjYgICAgQzUxMiwyMzcuNzQ1LDQ1NC45NTQsMTgwLjY5OSwzODQuODM0LDE4MC42OTl6IiBmaWxsPSIjZTc0YzNjIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==\" />\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/cross-icon/cross-icon.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/cross-icon/cross-icon.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"icon\">\n    <img\n        src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDIxLjkgMjEuOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjEuOSAyMS45IiB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiPgogIDxwYXRoIGQ9Ik0xNC4xLDExLjNjLTAuMi0wLjItMC4yLTAuNSwwLTAuN2w3LjUtNy41YzAuMi0wLjIsMC4zLTAuNSwwLjMtMC43cy0wLjEtMC41LTAuMy0wLjdsLTEuNC0xLjRDMjAsMC4xLDE5LjcsMCwxOS41LDAgIGMtMC4zLDAtMC41LDAuMS0wLjcsMC4zbC03LjUsNy41Yy0wLjIsMC4yLTAuNSwwLjItMC43LDBMMy4xLDAuM0MyLjksMC4xLDIuNiwwLDIuNCwwUzEuOSwwLjEsMS43LDAuM0wwLjMsMS43QzAuMSwxLjksMCwyLjIsMCwyLjQgIHMwLjEsMC41LDAuMywwLjdsNy41LDcuNWMwLjIsMC4yLDAuMiwwLjUsMCwwLjdsLTcuNSw3LjVDMC4xLDE5LDAsMTkuMywwLDE5LjVzMC4xLDAuNSwwLjMsMC43bDEuNCwxLjRjMC4yLDAuMiwwLjUsMC4zLDAuNywwLjMgIHMwLjUtMC4xLDAuNy0wLjNsNy41LTcuNWMwLjItMC4yLDAuNS0wLjIsMC43LDBsNy41LDcuNWMwLjIsMC4yLDAuNSwwLjMsMC43LDAuM3MwLjUtMC4xLDAuNy0wLjNsMS40LTEuNGMwLjItMC4yLDAuMy0wLjUsMC4zLTAuNyAgcy0wLjEtMC41LTAuMy0wLjdMMTQuMSwxMS4zeiIgZmlsbD0iI2U3NGMzYyIvPgo8L3N2Zz4K\" />\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".overlay {\n  display: inline-block;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  left: -100%;\n  position: fixed;\n  background: #2c3e50;\n  transform: scale(2) skew(-10deg);\n  z-index: -1;\n  transition: 0.3s all ease-in-out;\n}\n@media (max-width: 1040px) {\n  .overlay {\n    transform: scale(2) skew(-55deg);\n  }\n}\n.container {\n  font-size: 1.4rem;\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  color: #f8f8f8;\n  padding: 5rem;\n}\n@media (max-width: 1040px) {\n  .container {\n    flex-direction: column;\n  }\n}\n.container .side1 {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n@media (max-width: 1040px) {\n  .container .side1 {\n    flex: none;\n    height: auto;\n  }\n}\n.container .side1 > h1 {\n  margin-bottom: 0;\n  padding: 3rem 0.8rem 0.2rem;\n}\n.container .side2 {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.text-container {\n  height: auto;\n  max-width: 32rem;\n  background: #e74c3c;\n  padding: 3rem 1.8rem;\n  padding-top: 5.8rem;\n  border-radius: 2rem;\n  min-width: 34rem;\n}\n.dp-logo {\n  font-size: 1.6rem;\n  transform: translate(0, 45%);\n}\n.skill-container {\n  padding: 3rem 1.8rem;\n  margin-left: 5rem;\n}\n@media (max-width: 1040px) {\n  .skill-container {\n    margin: auto;\n  }\n}\n.skill-header {\n  margin: 2rem 0;\n  margin-bottom: 3.8rem;\n  position: relative;\n  letter-spacing: 2px;\n  padding-bottom: 0rem;\n  font-size: 3.2rem;\n  font-family: \"Cormorant Garamond\", serif;\n  justify-content: flex-start;\n}\n.skill-header:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 100%;\n  height: 3px;\n  top: 100%;\n  left: 0;\n  background: #f8f8f8;\n}\n.skill-type {\n  position: relative;\n  margin: 1.2rem 0;\n  padding-bottom: 0.2rem;\n  font-size: 1.6rem;\n}\n.skill-type:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 70%;\n  height: 1.5px;\n  top: 100%;\n  left: 0;\n  background: #f8f8f8;\n}\n.skill-names {\n  margin-left: 2.8rem;\n  margin-bottom: 2rem;\n  margin-top: -0.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRDpcXHdvcmtzcGFjZVxcbXlfcG9ydGZvbGlvXFxwb3J0b2ZvbGlvL3NyY1xcYXBwXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L0Q6XFx3b3Jrc3BhY2VcXG15X3BvcnRmb2xpb1xccG9ydG9mb2xpby9zcmNcXGFwcFxcX3Zhci5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkNUSztFRFVMLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FFSEo7QUZLSTtFQVpKO0lBYVEsZ0NBQUE7RUVGTjtBQUNGO0FGS0E7RUFDSSxpQkFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNDckJRO0VEc0JSLGFBQUE7QUVISjtBRktJO0VBVko7SUFXUSxzQkFBQTtFRUZOO0FBQ0Y7QUZJSTtFQUNJLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUVGUjtBRklRO0VBUEo7SUFRUSxVQUFBO0lBQ0EsWUFBQTtFRURWO0FBQ0Y7QUZHUTtFQUNJLGdCQUFBO0VBQ0EsMkJBQUE7QUVEWjtBRktJO0VBQ0ksT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRUhSO0FGT0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FFSko7QUZPQTtFQUNJLGlCQUFBO0VBQ0EsNEJBQUE7QUVKSjtBRk9BO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtBRUpKO0FGTUk7RUFKSjtJQUtRLFlBQUE7RUVITjtBQUNGO0FGTUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0EsMkJBQUE7QUVISjtBRktJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUJDakdJO0FDOEZaO0FGT0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBRUpKO0FGTUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxtQkNuSEk7QUMrR1o7QUZRQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBRUxKIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi92YXInO1xyXG4kdGV4dC1jYXJkLXNoaWZ0OiA0NSU7XHJcbiRyb3ctY29sb3VtLWJyay1wb2ludDogJ21heC13aWR0aDogMTA0MHB4JztcclxuXHJcbi5vdmVybGF5IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvcjI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpIHNrZXcoLTEwZGVnKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgQG1lZGlhICgkcm93LWNvbG91bS1icmstcG9pbnQpIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIpIHNrZXcoLTU1ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIC8vaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBjb2xvcjogJG9mZi13aGl0ZTtcclxuICAgIHBhZGRpbmc6IDVyZW07XHJcblxyXG4gICAgQG1lZGlhICgkcm93LWNvbG91bS1icmstcG9pbnQpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlMSB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIEBtZWRpYSAoJHJvdy1jb2xvdW0tYnJrLXBvaW50KSB7XHJcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY+aDEge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDAuOHJlbSAwLjJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlMiB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50ZXh0LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDMycmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2U3NGMzYztcclxuICAgIHBhZGRpbmc6IDNyZW0gMS44cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDUuOHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICBtaW4td2lkdGg6IDM0cmVtO1xyXG59XHJcblxyXG4uZHAtbG9nbyB7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDQ1JSk7XHJcbn1cclxuXHJcbi5za2lsbC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogM3JlbSAxLjhyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogNXJlbTtcclxuXHJcbiAgICBAbWVkaWEgKCRyb3ctY29sb3VtLWJyay1wb2ludCkge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLnNraWxsLWhlYWRlciB7XHJcbiAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMuOHJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRvZmYtd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5za2lsbC10eXBlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMS4ycmVtIDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogMS41cHg7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJG9mZi13aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLnNraWxsLW5hbWVzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyLjhyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLTAuNnJlbTtcclxufSIsIiRiZy1jb2xvcjogIzE3YTU5ODtcclxuJGNvbG9yMTogI2U3NGMzYztcclxuJGNvbG9yMjogIzJjM2U1MDtcclxuJGNvbG9yMzogI2RiMzgxYjtcclxuJGdyZWVuOiAjMTdhNTk4O1xyXG4kdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuJGJsYWNrOiAjNTU1O1xyXG4kb2ZmLXdoaXRlOiAjZjhmOGY4O1xyXG4kd2hpdGU6ICNmZmY7IiwiLm92ZXJsYXkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiAjMmMzZTUwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpIHNrZXcoLTEwZGVnKTtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNDBweCkge1xuICAub3ZlcmxheSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKSBza2V3KC01NWRlZyk7XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBjb2xvcjogI2Y4ZjhmODtcbiAgcGFkZGluZzogNXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDQwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLmNvbnRhaW5lciAuc2lkZTEge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTA0MHB4KSB7XG4gIC5jb250YWluZXIgLnNpZGUxIHtcbiAgICBmbGV4OiBub25lO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuLmNvbnRhaW5lciAuc2lkZTEgPiBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDNyZW0gMC44cmVtIDAuMnJlbTtcbn1cbi5jb250YWluZXIgLnNpZGUyIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGV4dC1jb250YWluZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMzJyZW07XG4gIGJhY2tncm91bmQ6ICNlNzRjM2M7XG4gIHBhZGRpbmc6IDNyZW0gMS44cmVtO1xuICBwYWRkaW5nLXRvcDogNS44cmVtO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBtaW4td2lkdGg6IDM0cmVtO1xufVxuXG4uZHAtbG9nbyB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA0NSUpO1xufVxuXG4uc2tpbGwtY29udGFpbmVyIHtcbiAgcGFkZGluZzogM3JlbSAxLjhyZW07XG4gIG1hcmdpbi1sZWZ0OiA1cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNDBweCkge1xuICAuc2tpbGwtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cblxuLnNraWxsLWhlYWRlciB7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBtYXJnaW4tYm90dG9tOiAzLjhyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgcGFkZGluZy1ib3R0b206IDByZW07XG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xuICBmb250LWZhbWlseTogXCJDb3Jtb3JhbnQgR2FyYW1vbmRcIiwgc2VyaWY7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5za2lsbC1oZWFkZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3B4O1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG59XG5cbi5za2lsbC10eXBlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEuMnJlbSAwO1xuICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cbi5za2lsbC10eXBlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogMS41cHg7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cblxuLnNraWxsLW5hbWVzIHtcbiAgbWFyZ2luLWxlZnQ6IDIuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgbWFyZ2luLXRvcDogLTAuNnJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_skills_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/skills.service */ "./src/app/services/skills.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let AboutComponent = class AboutComponent {
    constructor(skillsService, router) {
        this.skillsService = skillsService;
        this.router = router;
    }
    ngOnInit() {
        this.skills = this.skillsService.getSkills();
    }
    onBackClick() {
        this.router.navigateByUrl('/');
    }
};
AboutComponent.ctorParameters = () => [
    { type: _services_skills_service__WEBPACK_IMPORTED_MODULE_2__["SkillsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRouting, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRouting", function() { return appRouting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-card/profile-card.component */ "./src/app/profile-card/profile-card.component.ts");








const APP_ROUTES = [
    {
        path: '',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        pathMatch: 'full',
        data: { animation: 'landing-page' }
    },
    {
        path: 'profile-card',
        component: _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_7__["ProfileCardComponent"],
        data: { animation: 'profile-card' }
    },
    {
        path: 'portfolio',
        component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"],
        data: { animation: 'portfolio' }
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
        data: { animation: 'about' }
    },
    {
        path: 'contact',
        redirectTo: '/profiles'
    },
    {
        path: 'profiles',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
        data: { animation: 'contact' }
    },
    { path: '**', redirectTo: '/' }
];
const appRouting = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(APP_ROUTES, {
    useHash: true
});
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(APP_ROUTES, {
                useHash: true
            })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let AppComponent = class AppComponent {
    triggerAnimation(outlet) {
        return outlet.activatedRouteData.animation || null;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('routerTransition', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ position: 'fixed', width: '100%' }), {
                        optional: true
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(100%)', opacity: 0 }), {
                        optional: true
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["sequence"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@*, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.8s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(-100%)', opacity: 0 }))
                            ], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(100%)', opacity: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.8s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0%)', opacity: 1 }))
                            ], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@*, :enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()], { optional: true })
                        ])
                    ])
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _expense_entry_expense_entry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expense-entry/expense-entry.component */ "./src/app/expense-entry/expense-entry.component.ts");
/* harmony import */ var _expense_entry_list_expense_entry_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./expense-entry-list/expense-entry-list.component */ "./src/app/expense-entry-list/expense-entry-list.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _directives_esc_cancelation_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/esc-cancelation.directive */ "./src/app/directives/esc-cancelation.directive.ts");
/* harmony import */ var _navigator_navigator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigator/navigator.component */ "./src/app/navigator/navigator.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _dp_logo_dp_logo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dp-logo/dp-logo.component */ "./src/app/dp-logo/dp-logo.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _typing_typing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./typing/typing.component */ "./src/app/typing/typing.component.ts");
/* harmony import */ var _ui_back_icon_back_icon_back_icon_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ui/back-icon/back-icon/back-icon.component */ "./src/app/ui/back-icon/back-icon/back-icon.component.ts");
/* harmony import */ var _key_skill_btn_key_skill_btn_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./key-skill-btn/key-skill-btn.component */ "./src/app/key-skill-btn/key-skill-btn.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./project-card/project-card.component */ "./src/app/project-card/project-card.component.ts");
/* harmony import */ var _pipes_no_emoji_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/no-emoji.pipe */ "./src/app/pipes/no-emoji.pipe.ts");
/* harmony import */ var _pipes_max_length_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/max-length.pipe */ "./src/app/pipes/max-length.pipe.ts");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./project-details/project-details.component */ "./src/app/project-details/project-details.component.ts");
/* harmony import */ var _ui_cross_icon_cross_icon_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ui/cross-icon/cross-icon.component */ "./src/app/ui/cross-icon/cross-icon.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./profile-card/profile-card.component */ "./src/app/profile-card/profile-card.component.ts");




























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _expense_entry_expense_entry_component__WEBPACK_IMPORTED_MODULE_8__["ExpenseEntryComponent"],
            _expense_entry_list_expense_entry_list_component__WEBPACK_IMPORTED_MODULE_9__["ExpenseEntryListComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
            _directives_esc_cancelation_directive__WEBPACK_IMPORTED_MODULE_11__["EscCancelationDirective"],
            _navigator_navigator_component__WEBPACK_IMPORTED_MODULE_12__["NavigatorComponent"],
            _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_13__["LandingPageComponent"],
            _dp_logo_dp_logo_component__WEBPACK_IMPORTED_MODULE_14__["DpLogoComponent"],
            _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_15__["PortfolioComponent"],
            _typing_typing_component__WEBPACK_IMPORTED_MODULE_16__["TypingComponent"],
            _ui_back_icon_back_icon_back_icon_component__WEBPACK_IMPORTED_MODULE_17__["BackIconComponent"],
            _key_skill_btn_key_skill_btn_component__WEBPACK_IMPORTED_MODULE_18__["KeySkillBtnComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_19__["ProjectsComponent"],
            _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_20__["ProjectCardComponent"],
            _pipes_no_emoji_pipe__WEBPACK_IMPORTED_MODULE_21__["NoEmojiPipe"],
            _pipes_max_length_pipe__WEBPACK_IMPORTED_MODULE_22__["MaxLengthPipe"],
            _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_23__["ProjectDetailsComponent"],
            _ui_cross_icon_cross_icon_component__WEBPACK_IMPORTED_MODULE_24__["CrossIconComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_25__["AboutComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_26__["ContactComponent"],
            _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_27__["ProfileCardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"], useValue: '!' }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  text-decoration: none;\n  color: #f2f2f2;\n}\n\n.root {\n  min-height: 100vh;\n  min-width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.root > :nth-child(1) {\n  flex: 6;\n  display: flex;\n  align-items: center;\n}\n\n.root > :nth-child(2) {\n  flex: 8;\n}\n\n.page-header {\n  color: #f8f8f8;\n  position: relative;\n  font-size: 3rem;\n  letter-spacing: 1px;\n  word-spacing: 1.5px;\n  margin: 2rem 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-family: \"Cormorant Garamond\", serif;\n}\n\n.page-header:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 100%;\n  height: 2px;\n  top: 100%;\n  left: 0;\n  background: #f8f8f8;\n}\n\n.icon {\n  height: 5rem;\n  width: 5rem;\n  cursor: pointer;\n  transition: 0.3s all ease-in-out;\n  -webkit-animation: fade 1.4s ease-in-out 0.4s 1 both;\n          animation: fade 1.4s ease-in-out 0.4s 1 both;\n}\n\n.icon:hover {\n  transform: scale(1.1);\n}\n\n@media (max-width: 690px) {\n  .icon {\n    height: 3rem;\n    width: 3rem;\n  }\n}\n\n@media (max-width: 350px) {\n  .icon {\n    height: 2rem;\n    width: 2rem;\n  }\n}\n\n.img > img {\n  width: 100%;\n  height: 100%;\n}\n\n.container {\n  width: 95%;\n  max-width: 75rem;\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n\n.icons {\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n\n.section {\n  background: #2c3e50;\n  display: flex;\n  margin: 2px;\n  justify-content: space-around;\n  align-items: center;\n  padding-top: 2.4rem;\n  padding-bottom: 2.4rem;\n}\n\n.section.min-section {\n  width: 35%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #f8f8f8;\n  font-size: 1.6rem;\n}\n\n@media (max-width: 690px) {\n  .section.min-section {\n    font-size: 1.2rem;\n  }\n}\n\n@media (max-width: 350px) {\n  .section.min-section {\n    font-size: 0.8rem;\n  }\n}\n\n.section.min-section > p {\n  margin: 0px 1rem;\n  width: 90%;\n  text-align: center;\n  word-break: break-word;\n  padding-top: 0.8rem;\n  margin-bottom: -0.8rem;\n}\n\n.part {\n  display: flex;\n  width: 100%;\n}\n\n.flex-1 {\n  flex: 1;\n}\n\n@-webkit-keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9EOlxcd29ya3NwYWNlXFxteV9wb3J0Zm9saW9cXHBvcnRvZm9saW8vc3JjXFxhcHBcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC9EOlxcd29ya3NwYWNlXFxteV9wb3J0Zm9saW9cXHBvcnRvZm9saW8vc3JjXFxhcHBcXF92YXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURHSTtFQUNJLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNEUjs7QURJSTtFQUNJLE9BQUE7QUNGUjs7QURNQTtFQUNJLGNFcEJRO0VGcUJSLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSx3Q0FBQTtBQ0hKOztBREtJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUJFckNJO0FEa0NaOztBRE9BO0VBRUksWUFEbUI7RUFFbkIsV0FGbUI7RUFHbkIsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0RBQUE7VUFBQSw0Q0FBQTtBQ0xKOztBRE9JO0VBQ0kscUJBQUE7QUNMUjs7QURRSTtFQVpKO0lBY1EsWUFEbUI7SUFFbkIsV0FGbUI7RUNKekI7QUFDRjs7QURRSTtFQWxCSjtJQW9CUSxZQURtQjtJQUVuQixXQUZtQjtFQ0p6QjtBQUNGOztBRFVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNQUjs7QURXQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDUko7O0FEV0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDUko7O0FEV0E7RUFDSSxtQkU5Rks7RUYrRkwsYUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ1JKOztBRFdJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjRXhHSTtFRnlHSixpQkFBQTtBQ1RSOztBRFdRO0VBVEo7SUFVUSxpQkFBQTtFQ1JWO0FBQ0Y7O0FEVVE7RUFiSjtJQWNRLGlCQUFBO0VDUFY7QUFDRjs7QURTUTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDUFo7O0FEWUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ1RKOztBRFlBO0VBQ0ksT0FBQTtBQ1RKOztBRFlBO0VBQ0k7SUFDSSxVQUFBO0VDVE47RURZRTtJQUNJLFVBQUE7RUNWTjtBQUNGOztBREdBO0VBQ0k7SUFDSSxVQUFBO0VDVE47RURZRTtJQUNJLFVBQUE7RUNWTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vdmFyJztcclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmMmYyZjI7XHJcbn1cclxuXHJcbi5yb290IHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICY+Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgZmxleDogNjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJj46bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBmbGV4OiA4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGFnZS1oZWFkZXIge1xyXG4gICAgY29sb3I6ICRvZmYtd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgd29yZC1zcGFjaW5nOiAxLjVweDtcclxuICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmOyAvLyBmb250LXdlaWdodDogbm9ybWFsO1xyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJG9mZi13aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgJG1heC13aWR0aC1oZWlnaHQ6IDVyZW07XHJcbiAgICBoZWlnaHQ6ICRtYXgtd2lkdGgtaGVpZ2h0O1xyXG4gICAgd2lkdGg6ICRtYXgtd2lkdGgtaGVpZ2h0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb246IGZhZGUgMS40cyBlYXNlLWluLW91dCAwLjRzIDEgYm90aDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY5MHB4KSB7XHJcbiAgICAgICAgJG1heC13aWR0aC1oZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAkbWF4LXdpZHRoLWhlaWdodDtcclxuICAgICAgICB3aWR0aDogJG1heC13aWR0aC1oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbiAgICAgICAgJG1heC13aWR0aC1oZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAkbWF4LXdpZHRoLWhlaWdodDtcclxuICAgICAgICB3aWR0aDogJG1heC13aWR0aC1oZWlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gICAgJj5pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWF4LXdpZHRoOiA3NXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5pY29ucyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3IyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDIuNHJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyLjRyZW07XHJcblxyXG5cclxuICAgICYubWluLXNlY3Rpb24ge1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgY29sb3I6ICRvZmYtd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTBweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY+cCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDFyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuOHJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTAuOHJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYXJ0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZsZXgtMSB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZjJmMmYyO1xufVxuXG4ucm9vdCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5yb290ID4gOm50aC1jaGlsZCgxKSB7XG4gIGZsZXg6IDY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucm9vdCA+IDpudGgtY2hpbGQoMikge1xuICBmbGV4OiA4O1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICBjb2xvcjogI2Y4ZjhmODtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDNyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHdvcmQtc3BhY2luZzogMS41cHg7XG4gIG1hcmdpbjogMnJlbSAwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiQ29ybW9yYW50IEdhcmFtb25kXCIsIHNlcmlmO1xufVxuLnBhZ2UtaGVhZGVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xufVxuXG4uaWNvbiB7XG4gIGhlaWdodDogNXJlbTtcbiAgd2lkdGg6IDVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogZmFkZSAxLjRzIGVhc2UtaW4tb3V0IDAuNHMgMSBib3RoO1xufVxuLmljb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjkwcHgpIHtcbiAgLmljb24ge1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gIC5pY29uIHtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG4gIH1cbn1cblxuLmltZyA+IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogOTUlO1xuICBtYXgtd2lkdGg6IDc1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5pY29ucyB7XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cblxuLnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjMmMzZTUwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDJweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyLjRyZW07XG4gIHBhZGRpbmctYm90dG9tOiAyLjRyZW07XG59XG4uc2VjdGlvbi5taW4tc2VjdGlvbiB7XG4gIHdpZHRoOiAzNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogI2Y4ZjhmODtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjkwcHgpIHtcbiAgLnNlY3Rpb24ubWluLXNlY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgLnNlY3Rpb24ubWluLXNlY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG59XG4uc2VjdGlvbi5taW4tc2VjdGlvbiA+IHAge1xuICBtYXJnaW46IDBweCAxcmVtO1xuICB3aWR0aDogOTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIHBhZGRpbmctdG9wOiAwLjhyZW07XG4gIG1hcmdpbi1ib3R0b206IC0wLjhyZW07XG59XG5cbi5wYXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mbGV4LTEge1xuICBmbGV4OiAxO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59IiwiJGJnLWNvbG9yOiAjMTdhNTk4O1xyXG4kY29sb3IxOiAjZTc0YzNjO1xyXG4kY29sb3IyOiAjMmMzZTUwO1xyXG4kY29sb3IzOiAjZGIzODFiO1xyXG4kZ3JlZW46ICMxN2E1OTg7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xyXG4kYmxhY2s6ICM1NTU7XHJcbiRvZmYtd2hpdGU6ICNmOGY4Zjg7XHJcbiR3aGl0ZTogI2ZmZjsiXX0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ContactComponent = class ContactComponent {
    constructor(router) {
        this.router = router;
        this.contactProfile = {
            profile: [
                {
                    name: 'Facebook',
                    url: 'https://facebook.com/deyRitwick',
                    iconUrl: './assets/icons/facebook.svg'
                },
                {
                    name: 'Twitter',
                    url: 'https://twitter.com/dey_ritwick',
                    iconUrl: './assets/icons/twitter.svg'
                },
                {
                    name: 'Instagram',
                    url: 'https://www.instagram.com/ritwickdey/',
                    iconUrl: './assets/icons/instagram.svg'
                },
                {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/ritwickdey',
                    iconUrl: './assets/icons/linkedin.svg'
                }
            ],
            work: [
                {
                    name: 'GitHub',
                    url: 'https://github.com/ulter-super-dev',
                    iconUrl: './assets/icons/github.svg'
                },
                {
                    name: 'Hackerrank',
                    url: 'https://hackerrank.com/patrick',
                    iconUrl: './assets/icons/hackerrank.svg'
                },
                {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/patrick-clifford-1b052323a/',
                    iconUrl: './assets/icons/linkedin.svg'
                },
            ]
        };
        this.email = {
            name: 'Email',
            url: 'patrickclifford0417@gmail.com',
            iconUrl: './assets/icons/email.svg'
        };
        this.vscodeMarketplace = {
            name: 'VSCode Extension Publisher',
            url: 'https://marketplace.visualstudio.com/publishers/ritwickdey',
            iconUrl: './assets/icons/vscode.svg'
        };
    }
    ngOnInit() { }
    onBackClick() {
        this.router.navigateByUrl('/');
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/directives/esc-cancelation.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/esc-cancelation.directive.ts ***!
  \*********************************************************/
/*! exports provided: EscCancelationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscCancelationDirective", function() { return EscCancelationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EscCancelationDirective = class EscCancelationDirective {
    constructor() {
        this.appEscCancelation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onKeydownHandler(event) {
        if (event.key === 'Escape')
            this.appEscCancelation.emit({
                msg: 'Escape Btn Clicked',
                event
            });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('appEscCancelation')
], EscCancelationDirective.prototype, "appEscCancelation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
], EscCancelationDirective.prototype, "onKeydownHandler", null);
EscCancelationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appEscCancelation]'
    })
], EscCancelationDirective);



/***/ }),

/***/ "./src/app/dp-logo/dp-logo.component.scss":
/*!************************************************!*\
  !*** ./src/app/dp-logo/dp-logo.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-logo {\n  height: 14rem;\n  width: 14rem;\n  display: inline-block;\n  position: relative;\n  z-index: 5;\n  border-radius: 50%;\n  perspective: 1500px;\n  transition: all 0.2s ease-in-out;\n  -webkit-animation: dropin 1s ease-in-out 0.4s 1 normal both;\n          animation: dropin 1s ease-in-out 0.4s 1 normal both;\n}\n.profile-logo img {\n  position: relative;\n  border: 0.8rem solid #e74c3c;\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: all 0.5s ease-in-out;\n  perspective: 1500px;\n}\n.profile-logo::after {\n  content: \"Patrick\";\n  display: flex;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  color: #fff;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background-color: #e74c3c;\n  border: 0.8rem solid #db381b;\n  top: 0px;\n  left: 0px;\n  z-index: 10;\n  font-size: 0.8em;\n  transition: all 0.5s ease-in-out;\n  transform: rotateY(180deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  perspective: 1500px;\n}\n.profile-logo:hover img {\n  transform: rotateY(180deg);\n}\n.profile-logo:hover::after {\n  transform: rotateY(0deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHAtbG9nby9EOlxcd29ya3NwYWNlXFxteV9wb3J0Zm9saW9cXHBvcnRvZm9saW8vc3JjXFxhcHBcXGRwLWxvZ29cXGRwLWxvZ28uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RwLWxvZ28vZHAtbG9nby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZHAtbG9nby9EOlxcd29ya3NwYWNlXFxteV9wb3J0Zm9saW9cXHBvcnRvZm9saW8vc3JjXFxhcHBcXF92YXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBRUEscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyREFBQTtVQUFBLG1EQUFBO0FDRkY7QURHRTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUNESjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkVoQ0s7RUZpQ0wsNEJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElJO0VBQ0UsMEJBQUE7QUNGTjtBREtFO0VBQ0Usd0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2RwLWxvZ28vZHAtbG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3Zhcic7XHJcblxyXG4ucHJvZmlsZS1sb2dvIHtcclxuICBoZWlnaHQ6IDE0cmVtO1xyXG4gIHdpZHRoOiAxNHJlbTtcclxuICAvLyBtYXJnaW4tdG9wOiA2cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogNTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcGVyc3BlY3RpdmU6IDE1MDBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAwLjRzIDEgbm9ybWFsIGJvdGg7XHJcbiAgaW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMC44cmVtIHNvbGlkICRjb2xvcjE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgcGVyc3BlY3RpdmU6IDE1MDBweDtcclxuICB9XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ1BhdHJpY2snO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgYm9yZGVyOiAwLjhyZW0gc29saWQgJGNvbG9yMztcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHBlcnNwZWN0aXZlOiAxNTAwcHg7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgaW1nIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICY6aG92ZXI6OmFmdGVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICB9XHJcbn1cclxuIiwiLnByb2ZpbGUtbG9nbyB7XG4gIGhlaWdodDogMTRyZW07XG4gIHdpZHRoOiAxNHJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGVyc3BlY3RpdmU6IDE1MDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuNHMgMSBub3JtYWwgYm90aDtcbn1cbi5wcm9maWxlLWxvZ28gaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDAuOHJlbSBzb2xpZCAjZTc0YzNjO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHBlcnNwZWN0aXZlOiAxNTAwcHg7XG59XG4ucHJvZmlsZS1sb2dvOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiUGF0cmlja1wiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICBib3JkZXI6IDAuOHJlbSBzb2xpZCAjZGIzODFiO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiAxMDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBlcnNwZWN0aXZlOiAxNTAwcHg7XG59XG4ucHJvZmlsZS1sb2dvOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuLnByb2ZpbGUtbG9nbzpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG59IiwiJGJnLWNvbG9yOiAjMTdhNTk4O1xyXG4kY29sb3IxOiAjZTc0YzNjO1xyXG4kY29sb3IyOiAjMmMzZTUwO1xyXG4kY29sb3IzOiAjZGIzODFiO1xyXG4kZ3JlZW46ICMxN2E1OTg7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xyXG4kYmxhY2s6ICM1NTU7XHJcbiRvZmYtd2hpdGU6ICNmOGY4Zjg7XHJcbiR3aGl0ZTogI2ZmZjsiXX0= */");

/***/ }),

/***/ "./src/app/dp-logo/dp-logo.component.ts":
/*!**********************************************!*\
  !*** ./src/app/dp-logo/dp-logo.component.ts ***!
  \**********************************************/
/*! exports provided: DpLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DpLogoComponent", function() { return DpLogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DpLogoComponent = class DpLogoComponent {
    constructor() { }
    ngOnInit() {
        this.logoStyles = {
            height: this.height,
            width: this.width
        };
        this.imgStyle = {
            borderWidth: this.borderWidth
        };
        // console.log(this.height);
        // console.log(this.width);
        // console.log(this.borderWidth);
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('height')
], DpLogoComponent.prototype, "height", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('width')
], DpLogoComponent.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('borderWidth')
], DpLogoComponent.prototype, "borderWidth", void 0);
DpLogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dp-logo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dp-logo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dp-logo/dp-logo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dp-logo.component.scss */ "./src/app/dp-logo/dp-logo.component.scss")).default]
    })
], DpLogoComponent);



/***/ }),

/***/ "./src/app/expense-entry-list/expense-entry-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/expense-entry-list/expense-entry-list.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVuc2UtZW50cnktbGlzdC9leHBlbnNlLWVudHJ5LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/expense-entry-list/expense-entry-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/expense-entry-list/expense-entry-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ExpenseEntryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseEntryListComponent", function() { return ExpenseEntryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExpenseEntryListComponent = class ExpenseEntryListComponent {
    constructor() { }
    getExpenseEntries() {
        let mockExpenseEntries = [
            { id: 1, item: "Pizza", amount: Math.floor((Math.random() * 10) + 1), category: "Food", location: "Mcdonald", spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) },
            { id: 1, item: "Pizza", amount: Math.floor((Math.random() * 10) + 1), category: "Food", location: "KFC", spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) },
            { id: 1, item: "Pizza", amount: Math.floor((Math.random() * 10) + 1), category: "Food", location: "Mcdonald", spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) },
            { id: 1, item: "Pizza", amount: Math.floor((Math.random() * 10) + 1), category: "Food", location: "KFC", spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) },
            { id: 1, item: "Pizza", amount: Math.floor((Math.random() * 10) + 1), category: "Food", location: "KFC", spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) },
        ];
        return mockExpenseEntries;
    }
    ngOnInit() {
        this.title = "Expense Entry List";
        this.expenseEntries = this.getExpenseEntries();
    }
};
ExpenseEntryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expense-entry-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expense-entry-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/expense-entry-list/expense-entry-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expense-entry-list.component.scss */ "./src/app/expense-entry-list/expense-entry-list.component.scss")).default]
    })
], ExpenseEntryListComponent);



/***/ }),

/***/ "./src/app/expense-entry/expense-entry.component.scss":
/*!************************************************************!*\
  !*** ./src/app/expense-entry/expense-entry.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVuc2UtZW50cnkvZXhwZW5zZS1lbnRyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/expense-entry/expense-entry.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/expense-entry/expense-entry.component.ts ***!
  \**********************************************************/
/*! exports provided: ExpenseEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseEntryComponent", function() { return ExpenseEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExpenseEntryComponent = class ExpenseEntryComponent {
    constructor() { }
    ngOnInit() {
        this.title = "Expense Entry";
        this.expenseEntry = {
            id: 1,
            item: "Pizza",
            amount: 21,
            category: "Food",
            location: "Zomato",
            spendOn: new Date(2020, 6, 1, 10, 10, 10),
            createdOn: new Date(2020, 6, 1, 10, 10, 10),
        };
    }
};
ExpenseEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expense-entry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expense-entry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/expense-entry/expense-entry.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expense-entry.component.scss */ "./src/app/expense-entry/expense-entry.component.scss")).default]
    })
], ExpenseEntryComponent);



/***/ }),

/***/ "./src/app/key-skill-btn/key-skill-btn.component.scss":
/*!************************************************************!*\
  !*** ./src/app/key-skill-btn/key-skill-btn.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".key-skills {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 1rem auto;\n}\n.key-skills .key-skill {\n  z-index: 99;\n  position: relative;\n  font-size: 1.6rem;\n  margin: 0.6rem;\n  padding: 0.4rem 2rem;\n  border: 2px solid #db381b;\n  border-radius: 50rem;\n  cursor: pointer;\n  color: #fff;\n  line-height: 1.5;\n  background-color: #db381b;\n  transition: all 0.3s ease-in-out;\n  outline: none;\n  box-shadow: 0.4rem 0.5rem 0.9rem rgba(0, 0, 0, 0.25);\n}\n.key-skills .key-skill:disabled {\n  background-color: #e85a41;\n  border: 2px solid #e85a41;\n  box-shadow: none;\n}\n.key-skills .key-skill:hover:disabled {\n  margin: 0.6rem;\n  padding: 0.4rem 2rem;\n  cursor: not-allowed;\n}\n.key-skills .key-skill:hover {\n  padding: 0.4rem 3.2rem;\n  margin: 0.6rem 2rem;\n}\n@media screen and (max-width: 640px) {\n  .key-skills .key-skill:hover {\n    margin: 0.6rem;\n    padding: 0.4rem 2rem;\n  }\n}\n.key-skills .key-skill.key-skill--disabled {\n  border: 2px solid #db381b;\n  background-color: transparent;\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n}\n.key-skills .key-skill.key-skill--disabled:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: #db381b;\n  top: 50%;\n  left: 0;\n  transform: rotateZ(-14deg);\n  transition: all 0.3s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2V5LXNraWxsLWJ0bi9EOlxcd29ya3NwYWNlXFxteV9wb3J0Zm9saW9cXHBvcnRvZm9saW8vc3JjXFxhcHBcXGtleS1za2lsbC1idG5cXGtleS1za2lsbC1idG4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2tleS1za2lsbC1idG4va2V5LXNraWxsLWJ0bi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2V5LXNraWxsLWJ0bi9EOlxcd29ya3NwYWNlXFxteV9wb3J0Zm9saW9cXHBvcnRvZm9saW8vc3JjXFxhcHBcXF92YXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0RKO0FETUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBUGU7RUFRZixvQkFQZ0I7RUFRaEIseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkVuQkM7RUZvQkQsZ0NBQUE7RUFDQSxhQUFBO0VBQ0Esb0RBQUE7QUNKUjtBRE1RO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDSlo7QURPUTtFQUNJLGNBMUJXO0VBMkJYLG9CQTFCWTtFQTJCWixtQkFBQTtBQ0xaO0FEU1E7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0FDUFo7QURTWTtFQUpKO0lBS1EsY0FyQ087SUFzQ1Asb0JBckNRO0VDK0J0QjtBQUNGO0FEU1E7RUFDSSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ1BaO0FEVVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkU1REg7RUY2REcsUUFBQTtFQUNBLE9BQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0FDUloiLCJmaWxlIjoic3JjL2FwcC9rZXktc2tpbGwtYnRuL2tleS1za2lsbC1idG4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi92YXInO1xyXG5cclxuLmtleS1za2lsbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcblxyXG4gICAgJGtleV9za2lsbF9tYXJnaW46IDAuNnJlbTtcclxuICAgICRrZXlfc2tpbGxfcGFkZGluZzogMC40cmVtIDJyZW07XHJcblxyXG4gICAgLmtleS1za2lsbCB7XHJcbiAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgIG1hcmdpbjogJGtleV9za2lsbF9tYXJnaW47XHJcbiAgICAgICAgcGFkZGluZzogJGtleV9za2lsbF9wYWRkaW5nO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvcjM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTByZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAuNHJlbSAwLjVyZW0gMC45cmVtIHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblxyXG4gICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRjb2xvcjMsICRhbW91bnQ6IDEwKTtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRlbigkY29sb3IzLCAkYW1vdW50OiAxMCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyOmRpc2FibGVkIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAka2V5X3NraWxsX21hcmdpbjtcclxuICAgICAgICAgICAgcGFkZGluZzogJGtleV9za2lsbF9wYWRkaW5nO1xyXG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gJC5rZXktc2tpbGxcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMC40cmVtIDMuMnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjZyZW0gMnJlbTtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICRrZXlfc2tpbGxfbWFyZ2luO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJGtleV9za2lsbF9wYWRkaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmtleS1za2lsbC0tZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3IzO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmtleS1za2lsbC0tZGlzYWJsZWQ6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IzO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC0xNGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAvLyBhbmltYXRpb246IHNsaWRlSW4gMC42cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEBrZXlmcmFtZXMgc2xpZGVJbiB7XHJcbi8vICAgMCUge1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcbi8vICAgICBvcGFjaXR5OiAwO1xyXG4vLyAgIH1cclxuLy8gICAxMDAlIHtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKTtcclxuLy8gICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBAa2V5ZnJhbWVzIHNsaWRlT3V0e1xyXG4vLyAgIDAlIHtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKTtcclxuLy8gICAgIG9wYWNpdHk6IDE7XHJcbi8vICAgfVxyXG4vLyAgIDEwMCUge1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlKTtcclxuLy8gICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgfVxyXG4vLyB9IiwiLmtleS1za2lsbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDFyZW0gYXV0bztcbn1cbi5rZXktc2tpbGxzIC5rZXktc2tpbGwge1xuICB6LWluZGV4OiA5OTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgbWFyZ2luOiAwLjZyZW07XG4gIHBhZGRpbmc6IDAuNHJlbSAycmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGIzODFiO1xuICBib3JkZXItcmFkaXVzOiA1MHJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiMzgxYjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAuNHJlbSAwLjVyZW0gMC45cmVtIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG4ua2V5LXNraWxscyAua2V5LXNraWxsOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4NWE0MTtcbiAgYm9yZGVyOiAycHggc29saWQgI2U4NWE0MTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5rZXktc2tpbGxzIC5rZXktc2tpbGw6aG92ZXI6ZGlzYWJsZWQge1xuICBtYXJnaW46IDAuNnJlbTtcbiAgcGFkZGluZzogMC40cmVtIDJyZW07XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4ua2V5LXNraWxscyAua2V5LXNraWxsOmhvdmVyIHtcbiAgcGFkZGluZzogMC40cmVtIDMuMnJlbTtcbiAgbWFyZ2luOiAwLjZyZW0gMnJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5rZXktc2tpbGxzIC5rZXktc2tpbGw6aG92ZXIge1xuICAgIG1hcmdpbjogMC42cmVtO1xuICAgIHBhZGRpbmc6IDAuNHJlbSAycmVtO1xuICB9XG59XG4ua2V5LXNraWxscyAua2V5LXNraWxsLmtleS1za2lsbC0tZGlzYWJsZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGIzODFiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ua2V5LXNraWxscyAua2V5LXNraWxsLmtleS1za2lsbC0tZGlzYWJsZWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjM4MWI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooLTE0ZGVnKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59IiwiJGJnLWNvbG9yOiAjMTdhNTk4O1xyXG4kY29sb3IxOiAjZTc0YzNjO1xyXG4kY29sb3IyOiAjMmMzZTUwO1xyXG4kY29sb3IzOiAjZGIzODFiO1xyXG4kZ3JlZW46ICMxN2E1OTg7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xyXG4kYmxhY2s6ICM1NTU7XHJcbiRvZmYtd2hpdGU6ICNmOGY4Zjg7XHJcbiR3aGl0ZTogI2ZmZjsiXX0= */");

/***/ }),

/***/ "./src/app/key-skill-btn/key-skill-btn.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/key-skill-btn/key-skill-btn.component.ts ***!
  \**********************************************************/
/*! exports provided: KeySkillBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeySkillBtnComponent", function() { return KeySkillBtnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/tags.service */ "./src/app/services/tags.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let KeySkillBtnComponent = class KeySkillBtnComponent {
    constructor(tagsService) {
        this.tagsService = tagsService;
        this.keySkills = tagsService.tags;
    }
    ngOnInit() { }
    toogleSkillSelection(tag) {
        this.tagsService.toggleSelection(tag.displayName);
    }
    disableIfOneBtn(keySkill) {
        const targetKeySkills = this.keySkills.filter(e => e.isSelected);
        return (targetKeySkills.length === 1 &&
            targetKeySkills[0].displayName === keySkill.displayName);
    }
};
KeySkillBtnComponent.ctorParameters = () => [
    { type: _services_tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"] }
];
KeySkillBtnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-key-skill-btn',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./key-skill-btn.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/key-skill-btn/key-skill-btn.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./key-skill-btn.component.scss */ "./src/app/key-skill-btn/key-skill-btn.component.scss")).default]
    })
], KeySkillBtnComponent);



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.root-container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n}\n.overlay {\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  z-index: -1;\n  display: block;\n  background: #2c3e50;\n  position: fixed;\n  right: 0;\n  top: 0;\n  pointer-events: none;\n  -webkit-clip-path: ellipse(50vw 40vh at 50% 50%);\n          clip-path: ellipse(50vw 40vh at 50% 50%);\n  transform: scale(2) translate(27vw, -18vh) rotate(335deg);\n  -webkit-animation: 1s ease-in-out 0.2s both leftToRight;\n          animation: 1s ease-in-out 0.2s both leftToRight;\n}\n.dp-logo {\n  font-size: 2rem;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn;\n}\n.navbar {\n  width: 100%;\n  color: #f8f8f8;\n  font-size: 2rem;\n  padding: 1.6rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.nav-items .nav-item {\n  display: inline-block;\n  padding: 0.2rem 0;\n  margin: 0.6rem 1rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  border-bottom: 0.3rem solid #17a598;\n  color: #f8f8f8;\n  text-decoration: none;\n}\n.container {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: 1.6rem;\n  color: #f8f8f8;\n  margin-top: 2%;\n}\n.short-bio {\n  font-size: 1.6rem;\n  padding: 1.6rem;\n  font-weight: normal;\n  -webkit-animation: 1s ease-in-out 0.2s both fadeIn;\n          animation: 1s ease-in-out 0.2s both fadeIn;\n}\n.quote {\n  font-family: \"Cormorant Garamond\", serif;\n  font-size: 1.8rem;\n  padding: 1rem;\n  padding-top: 0rem;\n  -webkit-animation: 1s ease-in-out 0.4s both fadeIn;\n          animation: 1s ease-in-out 0.4s both fadeIn;\n}\n.name {\n  font-family: \"Cormorant Garamond\", serif;\n  font-size: 2.4rem;\n  font-weight: bold;\n  line-height: 1.6;\n  padding-top: 0.6rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4rem;\n  word-spacing: 0.2rem;\n  text-align: center;\n  margin-bottom: -2.5rem;\n  -webkit-animation: 1s ease-in-out 0.6s both fadeIn;\n          animation: 1s ease-in-out 0.6s both fadeIn;\n}\n.name:hover .strip::after {\n  left: -1rem;\n}\n.name:hover .strip::before {\n  left: 1rem;\n}\n.strip {\n  display: inline-block;\n  position: relative;\n  width: 28rem;\n  margin: auto;\n  margin-bottom: 2rem;\n  -webkit-animation: 1s ease-in-out 0.8s both fadeIn;\n          animation: 1s ease-in-out 0.8s both fadeIn;\n}\n.strip::before {\n  transition: 0.3s all ease-in-out;\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  height: 2px;\n  background-color: #e74c3c;\n  margin: 2px 0;\n  width: 100%;\n  margin: auto;\n  top: 0;\n  left: -1rem;\n}\n.strip::after {\n  transition: 0.3s all ease-in-out;\n  position: absolute;\n  display: inline-block;\n  content: \"\";\n  height: 2px;\n  background-color: #e74c3c;\n  margin: 2px 0;\n  width: 100%;\n  margin: auto;\n  top: 4px;\n  left: 1rem;\n}\n.special-btn {\n  min-width: 15rem;\n  line-height: 2.2;\n  font-size: 1.4rem;\n  padding: 0.5rem;\n  margin-top: 2rem;\n  background-color: #e74c3c;\n  color: #fff;\n  border: none;\n  outline: none;\n  border-radius: 100rem;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  -webkit-animation: fadeIn 1s ease-in-out 1s both;\n          animation: fadeIn 1s ease-in-out 1s both;\n  box-shadow: 7px 5px 8px 0 rgba(0, 0, 0, 0.31);\n  position: relative;\n}\n.special-btn span {\n  position: relative;\n  transform: translateX(0.7rem);\n  display: inline-block;\n  transition: all 0.3s ease-in-out;\n}\n.special-btn:hover {\n  background-color: #db381b;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.special-btn:hover::after {\n  transform: translateX(0.2rem);\n  opacity: 1;\n}\n.special-btn:hover span {\n  transform: translateX(-0.2rem);\n}\n.special-btn:active {\n  transform: scale(0.8);\n  box-shadow: 4px 5px 5px 0px rgba(0, 0, 0, 0.31);\n}\n.special-btn::after {\n  content: \"»\";\n  position: relative;\n  opacity: 0;\n  vertical-align: sub;\n  font-size: 2.7rem;\n  line-height: 0;\n  transform: translateX(25px);\n  display: inline-block;\n  transition: all 0.3s ease-in-out;\n}\n.stick {\n  flex: 1;\n  margin-top: -1rem;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  z-index: -1;\n  -webkit-animation: 1s ease-in-out 1s both fadeIn;\n          animation: 1s ease-in-out 1s both fadeIn;\n}\n.stick::after {\n  content: \"\";\n  height: 200vh;\n  width: 1.6rem;\n  display: inline-block;\n  position: absolute;\n  background-color: #e74c3c;\n  left: 50%;\n  top: 0;\n  z-index: 5;\n  transform: translate(-50%);\n  box-shadow: 7px 5px 8px 0 rgba(0, 0, 0, 0.31);\n}\n.stick .stick-design {\n  background-color: #e74c3c;\n  padding: 1.4rem;\n  position: absolute;\n  left: 50%;\n  min-width: 8.5rem;\n  top: 3.5rem;\n  border-radius: 100rem;\n  transform: translate(-50%);\n  z-index: 6;\n  box-shadow: 13px 0px 20px 0 rgba(0, 0, 0, 0.2);\n  transition: 1s all ease-in-out;\n}\n.stick .stick-design::after {\n  content: \"\";\n  height: 0.8rem;\n  width: 0.8rem;\n  position: absolute;\n  border-radius: 50%;\n  background-color: #2c3e50;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 2rem 0px 0px #2c3e50, -2rem 0px 0px #2c3e50;\n}\n.tada-animation {\n  -webkit-animation: tada 1s ease-in-out 0s 2 normal both;\n          animation: tada 1s ease-in-out 0s 2 normal both;\n}\n@-webkit-keyframes leftToRight {\n  0% {\n    display: relative;\n    opacity: 0.1;\n    left: -20%;\n  }\n  100% {\n    display: relative;\n    opacity: 1;\n    left: 0%;\n  }\n}\n@keyframes leftToRight {\n  0% {\n    display: relative;\n    opacity: 0.1;\n    left: -20%;\n  }\n  100% {\n    display: relative;\n    opacity: 1;\n    left: 0%;\n  }\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes tada {\n  0% {\n    transform: scale(1) rotate(0deg);\n  }\n  10% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  20% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  30% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  40% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  50% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  60% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  70% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  80% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  90% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  100% {\n    transform: scale(1) rotate(0deg);\n  }\n}\n@keyframes tada {\n  0% {\n    transform: scale(1) rotate(0deg);\n  }\n  10% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  20% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  30% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  40% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  50% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  60% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  70% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  80% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  90% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  100% {\n    transform: scale(1) rotate(0deg);\n  }\n}\n@-webkit-keyframes stripAnimation {\n  0% {\n    transform: translateX(-10px) rotateZ(0deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px) rotateZ(-16deg);\n    opacity: 1;\n  }\n}\n@keyframes stripAnimation {\n  0% {\n    transform: translateX(-10px) rotateZ(0deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px) rotateZ(-16deg);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy1wYWdlL0Q6XFx3b3Jrc3BhY2VcXG15X3BvcnRmb2xpb1xccG9ydG9mb2xpby9zcmNcXGFwcFxcbGFuZGluZy1wYWdlXFxsYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmctcGFnZS9EOlxcd29ya3NwYWNlXFxteV9wb3J0Zm9saW9cXHBvcnRvZm9saW8vc3JjXFxhcHBcXF92YXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNFaEI7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBREFGO0FDR0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkNiTztFRGNQLGVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0RBQUE7VUFBQSx3Q0FBQTtFQUNBLHlEQUFBO0VBQ0EsdURBQUE7VUFBQSwrQ0FBQTtBREFGO0FDR0E7RUFDRSxlQUFBO0VBQ0Esa0RBQUE7VUFBQSwwQ0FBQTtBREFGO0FDR0E7RUFDRSxXQUFBO0VBQ0EsY0N6QlU7RUQwQlYsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBREFGO0FDSUU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGNDekNRO0VEMENSLHFCQUFBO0FEREo7QUNLQTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0N0RFU7RUR1RFYsY0FBQTtBREZGO0FDS0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtEQUFBO1VBQUEsMENBQUE7QURGRjtBQ0tBO0VBQ0Usd0NBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtEQUFBO1VBQUEsMENBQUE7QURGRjtBQ0tBO0VBQ0Usd0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrREFBQTtVQUFBLDBDQUFBO0FERkY7QUNJSTtFQUNFLFdBQUE7QURGTjtBQ0lJO0VBQ0UsVUFBQTtBREZOO0FDT0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtEQUFBO1VBQUEsMENBQUE7QURKRjtBQ0tFO0VBQ0UsZ0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FESEo7QUNLRTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBREhKO0FDT0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkM5SU87RUQrSVAsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnREFBQTtVQUFBLHdDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtBREpGO0FDS0U7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBREhKO0FDS0U7RUFDRSx5QkM3Sks7RUQ4Skwsb0NBQUE7VUFBQSw0QkFBQTtBREhKO0FDSUk7RUFDRSw2QkFBQTtFQUNBLFVBQUE7QURGTjtBQ0lJO0VBQ0UsOEJBQUE7QURGTjtBQ0tFO0VBQ0UscUJBQUE7RUFDQSwrQ0FBQTtBREhKO0FDS0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QURISjtBQ09BO0VBQ0UsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0RBQUE7VUFBQSx3Q0FBQTtBREpGO0FDS0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDeE1LO0VEeU1MLFNBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkNBQUE7QURISjtBQ0tFO0VBQ0UseUJDaE5LO0VEaU5MLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLDhDQUFBO0VBQ0EsOEJBQUE7QURISjtBQ0lJO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ2hPRztFRGlPSCxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsdURBQUE7QURGTjtBQ09BO0VBQ0UsdURBQUE7VUFBQSwrQ0FBQTtBREpGO0FDT0E7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RURKRjtFQ01BO0lBQ0UsaUJBQUE7SUFDQSxVQUFBO0lBQ0EsUUFBQTtFREpGO0FBQ0Y7QUNOQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFREpGO0VDTUE7SUFDRSxpQkFBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0VESkY7QUFDRjtBQ09BO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RURMRjtFQ09BO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VETEY7QUFDRjtBQ0hBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RURMRjtFQ09BO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VETEY7QUFDRjtBQ1FBO0VBQ0U7SUFDRSxnQ0FBQTtFRE5GO0VDUUE7SUFDRSxtQ0FBQTtFRE5GO0VDUUE7SUFDRSxrQ0FBQTtFRE5GO0VDUUE7SUFDRSxtQ0FBQTtFRE5GO0VDUUE7SUFDRSxrQ0FBQTtFRE5GO0VDUUE7SUFDRSxtQ0FBQTtFRE5GO0VDUUE7SUFDRSxrQ0FBQTtFRE5GO0VDUUE7SUFDRSxtQ0FBQTtFRE5GO0VDUUE7SUFDRSxrQ0FBQTtFRE5GO0VDUUE7SUFDRSxtQ0FBQTtFRE5GO0VDUUE7SUFDRSxnQ0FBQTtFRE5GO0FBQ0Y7QUMzQkE7RUFDRTtJQUNFLGdDQUFBO0VETkY7RUNRQTtJQUNFLG1DQUFBO0VETkY7RUNRQTtJQUNFLGtDQUFBO0VETkY7RUNRQTtJQUNFLG1DQUFBO0VETkY7RUNRQTtJQUNFLGtDQUFBO0VETkY7RUNRQTtJQUNFLG1DQUFBO0VETkY7RUNRQTtJQUNFLGtDQUFBO0VETkY7RUNRQTtJQUNFLG1DQUFBO0VETkY7RUNRQTtJQUNFLGtDQUFBO0VETkY7RUNRQTtJQUNFLG1DQUFBO0VETkY7RUNRQTtJQUNFLGdDQUFBO0VETkY7QUFDRjtBQ1NBO0VBQ0U7SUFDRSwwQ0FBQTtJQUNBLFVBQUE7RURQRjtFQ1NBO0lBQ0UsMENBQUE7SUFDQSxVQUFBO0VEUEY7QUFDRjtBQ0RBO0VBQ0U7SUFDRSwwQ0FBQTtJQUNBLFVBQUE7RURQRjtFQ1NBO0lBQ0UsMENBQUE7SUFDQSxVQUFBO0VEUEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucm9vdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5vdmVybGF5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAtMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICMyYzNlNTA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNsaXAtcGF0aDogZWxsaXBzZSg1MHZ3IDQwdmggYXQgNTAlIDUwJSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMikgdHJhbnNsYXRlKDI3dncsIC0xOHZoKSByb3RhdGUoMzM1ZGVnKTtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjJzIGJvdGggbGVmdFRvUmlnaHQ7XG59XG5cbi5kcC1sb2dvIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuMnMgYm90aCBmYWRlSW47XG59XG5cbi5uYXZiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmOGY4Zjg7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZzogMS42cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdi1pdGVtcyAubmF2LWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuMnJlbSAwO1xuICBtYXJnaW46IDAuNnJlbSAxcmVtO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItYm90dG9tOiAwLjNyZW0gc29saWQgIzE3YTU5ODtcbiAgY29sb3I6ICNmOGY4Zjg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogI2Y4ZjhmODtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5zaG9ydC1iaW8ge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgcGFkZGluZzogMS42cmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuMnMgYm90aCBmYWRlSW47XG59XG5cbi5xdW90ZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvcm1vcmFudCBHYXJhbW9uZFwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAwcmVtO1xuICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuNHMgYm90aCBmYWRlSW47XG59XG5cbi5uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29ybW9yYW50IEdhcmFtb25kXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIHBhZGRpbmctdG9wOiAwLjZyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRyZW07XG4gIHdvcmQtc3BhY2luZzogMC4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IC0yLjVyZW07XG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC42cyBib3RoIGZhZGVJbjtcbn1cbi5uYW1lOmhvdmVyIC5zdHJpcDo6YWZ0ZXIge1xuICBsZWZ0OiAtMXJlbTtcbn1cbi5uYW1lOmhvdmVyIC5zdHJpcDo6YmVmb3JlIHtcbiAgbGVmdDogMXJlbTtcbn1cblxuLnN0cmlwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyOHJlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBhbmltYXRpb246IDFzIGVhc2UtaW4tb3V0IDAuOHMgYm90aCBmYWRlSW47XG59XG4uc3RyaXA6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gIG1hcmdpbjogMnB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgbGVmdDogLTFyZW07XG59XG4uc3RyaXA6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgbWFyZ2luOiAycHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDFyZW07XG59XG5cbi5zcGVjaWFsLWJ0biB7XG4gIG1pbi13aWR0aDogMTVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgZWFzZS1pbi1vdXQgMXMgYm90aDtcbiAgYm94LXNoYWRvdzogN3B4IDVweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMzEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc3BlY2lhbC1idG4gc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuN3JlbSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uc3BlY2lhbC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIzODFiO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuLnNwZWNpYWwtYnRuOmhvdmVyOjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjJyZW0pO1xuICBvcGFjaXR5OiAxO1xufVxuLnNwZWNpYWwtYnRuOmhvdmVyIHNwYW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMnJlbSk7XG59XG4uc3BlY2lhbC1idG46YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICBib3gtc2hhZG93OiA0cHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMxKTtcbn1cbi5zcGVjaWFsLWJ0bjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIsK7XCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbiAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgZm9udC1zaXplOiAyLjdyZW07XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjVweCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5zdGljayB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi10b3A6IC0xcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAtMTtcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAxcyBib3RoIGZhZGVJbjtcbn1cbi5zdGljazo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDIwMHZoO1xuICB3aWR0aDogMS42cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgbGVmdDogNTAlO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICBib3gtc2hhZG93OiA3cHggNXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4zMSk7XG59XG4uc3RpY2sgLnN0aWNrLWRlc2lnbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gIHBhZGRpbmc6IDEuNHJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIG1pbi13aWR0aDogOC41cmVtO1xuICB0b3A6IDMuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgei1pbmRleDogNjtcbiAgYm94LXNoYWRvdzogMTNweCAwcHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMXMgYWxsIGVhc2UtaW4tb3V0O1xufVxuLnN0aWNrIC5zdGljay1kZXNpZ246OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAwLjhyZW07XG4gIHdpZHRoOiAwLjhyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm94LXNoYWRvdzogMnJlbSAwcHggMHB4ICMyYzNlNTAsIC0ycmVtIDBweCAwcHggIzJjM2U1MDtcbn1cblxuLnRhZGEtYW5pbWF0aW9uIHtcbiAgYW5pbWF0aW9uOiB0YWRhIDFzIGVhc2UtaW4tb3V0IDBzIDIgbm9ybWFsIGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgbGVmdFRvUmlnaHQge1xuICAwJSB7XG4gICAgZGlzcGxheTogcmVsYXRpdmU7XG4gICAgb3BhY2l0eTogMC4xO1xuICAgIGxlZnQ6IC0yMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgZGlzcGxheTogcmVsYXRpdmU7XG4gICAgb3BhY2l0eTogMTtcbiAgICBsZWZ0OiAwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyB0YWRhIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xuICB9XG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3RyaXBBbmltYXRpb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KSByb3RhdGVaKDBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgcm90YXRlWigtMTZkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi92YXInO1xyXG4kc21fYnJlYWtfcG9pbnQ6NTYwcHg7XHJcbi5yb290LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiAtMTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiAkY29sb3IyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgY2xpcC1wYXRoOiBlbGxpcHNlKDUwdncgNDB2aCBhdCA1MCUgNTAlKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDIpIHRyYW5zbGF0ZSgyN3Z3LCAtMTh2aCkgcm90YXRlKDMzNWRlZyk7XHJcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjJzIGJvdGggbGVmdFRvUmlnaHQ7XHJcbn1cclxuXHJcbi5kcC1sb2dvIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjJzIGJvdGggZmFkZUluO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogJG9mZi13aGl0ZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgcGFkZGluZzogMS42cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdi1pdGVtcyB7XHJcbiAgLm5hdi1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAuMnJlbSAwO1xyXG4gICAgbWFyZ2luOiAwLjZyZW0gMXJlbTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4zcmVtIHNvbGlkICRncmVlbjtcclxuICAgIGNvbG9yOiAkb2ZmLXdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgY29sb3I6ICRvZmYtd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi5zaG9ydC1iaW8ge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIHBhZGRpbmc6IDEuNnJlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC4ycyBib3RoIGZhZGVJbjtcclxufVxyXG5cclxuLnF1b3RlIHtcclxuICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgcGFkZGluZy10b3A6IDByZW07XHJcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjRzIGJvdGggZmFkZUluO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDIuNHJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIHBhZGRpbmctdG9wOiAwLjZyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC40cmVtO1xyXG4gIHdvcmQtc3BhY2luZzogMC4ycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAtMi41cmVtO1xyXG4gIGFuaW1hdGlvbjogMXMgZWFzZS1pbi1vdXQgMC42cyBib3RoIGZhZGVJbjtcclxuICAmOmhvdmVyIHtcclxuICAgIC5zdHJpcDo6YWZ0ZXIge1xyXG4gICAgICBsZWZ0OiAtMXJlbTtcclxuICAgIH1cclxuICAgIC5zdHJpcDo6YmVmb3JlIHtcclxuICAgICAgbGVmdDogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zdHJpcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjhyZW07XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAwLjhzIGJvdGggZmFkZUluO1xyXG4gICY6OmJlZm9yZSB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xyXG4gICAgbWFyZ2luOiAycHggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogLTFyZW07XHJcbiAgfVxyXG4gICY6OmFmdGVyIHtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XHJcbiAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDRweDtcclxuICAgIGxlZnQ6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uc3BlY2lhbC1idG4ge1xyXG4gIG1pbi13aWR0aDogMTVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDIuMjtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuICBhbmltYXRpb246IGZhZGVJbiAxcyBlYXNlLWluLW91dCAxcyBib3RoO1xyXG4gIGJveC1zaGFkb3c6IDdweCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAuMzEpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjdyZW0pO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMztcclxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjJyZW0pO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4ycmVtKTtcclxuICAgIH1cclxuICB9XHJcbiAgJjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zMSk7XHJcbiAgfVxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdcXDAwYmInO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XHJcbiAgICBmb250LXNpemU6IDIuN3JlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1cHgpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RpY2sge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luLXRvcDogLTFyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgYW5pbWF0aW9uOiAxcyBlYXNlLWluLW91dCAxcyBib3RoIGZhZGVJbjtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGhlaWdodDogMjAwdmg7XHJcbiAgICB3aWR0aDogMS42cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuICAgIGJveC1zaGFkb3c6IDdweCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAuMzEpO1xyXG4gIH1cclxuICAuc3RpY2stZGVzaWduIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgICBwYWRkaW5nOiAxLjRyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtaW4td2lkdGg6IDguNXJlbTtcclxuICAgIHRvcDogMy41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcbiAgICB6LWluZGV4OiA2O1xyXG4gICAgYm94LXNoYWRvdzogMTNweCAwcHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDFzIGFsbCBlYXNlLWluLW91dDtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGhlaWdodDogMC44cmVtO1xyXG4gICAgICB3aWR0aDogMC44cmVtO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMjtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDJyZW0gMHB4IDBweCAkY29sb3IyLCAtMnJlbSAwcHggMHB4ICRjb2xvcjI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGFkYS1hbmltYXRpb24ge1xyXG4gIGFuaW1hdGlvbjogdGFkYSAxcyBlYXNlLWluLW91dCAwcyAyIG5vcm1hbCBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxlZnRUb1JpZ2h0IHtcclxuICAwJSB7XHJcbiAgICBkaXNwbGF5OiByZWxhdGl2ZTtcclxuICAgIG9wYWNpdHk6IDAuMTtcclxuICAgIGxlZnQ6IC0yMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgZGlzcGxheTogcmVsYXRpdmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHRhZGEge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xyXG4gIH1cclxuICAzMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xyXG4gIH1cclxuICA3MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDRkZWcpO1xyXG4gIH1cclxuICA5MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgtNGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHN0cmlwQW5pbWF0aW9uIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpIHJvdGF0ZVooMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHJvdGF0ZVooLTE2ZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbiIsIiRiZy1jb2xvcjogIzE3YTU5ODtcclxuJGNvbG9yMTogI2U3NGMzYztcclxuJGNvbG9yMjogIzJjM2U1MDtcclxuJGNvbG9yMzogI2RiMzgxYjtcclxuJGdyZWVuOiAjMTdhNTk4O1xyXG4kdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuJGJsYWNrOiAjNTU1O1xyXG4kb2ZmLXdoaXRlOiAjZjhmOGY4O1xyXG4kd2hpdGU6ICNmZmY7Il19 */");

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingPageComponent = class LandingPageComponent {
    constructor() {
        this.ExploreMe = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.startTadaAnimation = false;
    }
    ngOnInit() {
        setInterval(() => {
            this.startTadaAnimation = !this.startTadaAnimation;
        }, 3000);
    }
    onExploreMeClick() {
        this.ExploreMe.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('ExploreMe')
], LandingPageComponent.prototype, "ExploreMe", void 0);
LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/landing-page/landing-page.component.scss")).default]
    })
], LandingPageComponent);



/***/ }),

/***/ "./src/app/navigator/navigator.component.scss":
/*!****************************************************!*\
  !*** ./src/app/navigator/navigator.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.navigator-container {\n  font-family: \"Cormorant Garamond\", serif;\n  display: flex;\n  position: fixed;\n  min-width: 100vw;\n  min-height: 100vh;\n  background: rgba(85, 85, 85, 0.9);\n  top: 0;\n  left: 0;\n  z-index: 5;\n  justify-content: center;\n  align-items: center;\n}\n\n.navLinks {\n  width: 90vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.navLink {\n  padding: 2rem 0;\n  margin: 1rem 0;\n  width: 40%;\n  min-width: 40rem;\n  font-size: 2.4rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  text-align: center;\n  background: rgba(248, 248, 248, 0.5);\n  cursor: pointer;\n  border-radius: 0.5rem;\n}\n\n@media (max-width: 1300px) {\n  .navLink {\n    width: 60%;\n  }\n}\n\n@media (max-width: 640px) {\n  .navLink {\n    width: 100%;\n  }\n}\n\n.navLink > * {\n  color: #fff;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdG9yL0Q6XFx3b3Jrc3BhY2VcXG15X3BvcnRmb2xpb1xccG9ydG9mb2xpby9zcmNcXGFwcFxcbmF2aWdhdG9yXFxuYXZpZ2F0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmlnYXRvci9uYXZpZ2F0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0Usd0NBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREFJO0VBYkY7SUFjSSxVQUFBO0VDR0o7QUFDRjs7QURGSTtFQWhCRjtJQWlCSSxXQUFBO0VDS0o7QUFDRjs7QURGRTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdG9yL25hdmlnYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZpZ2F0b3ItY29udGFpbmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgjNTU1LCAwLjkpO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZMaW5rcyB7XHJcbiAgICB3aWR0aDogOTB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAubmF2TGluayB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtaW4td2lkdGg6IDQwcmVtO1xyXG4gICAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgjZjhmOGY4LCAwLjUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubmF2TGluaz4qIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAiLCIqIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5uYXZpZ2F0b3ItY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29ybW9yYW50IEdhcmFtb25kXCIsIHNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDg1LCA4NSwgODUsIDAuOSk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogNTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXZMaW5rcyB7XG4gIHdpZHRoOiA5MHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5hdkxpbmsge1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIG1hcmdpbjogMXJlbSAwO1xuICB3aWR0aDogNDAlO1xuICBtaW4td2lkdGg6IDQwcmVtO1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDI0OCwgMjQ4LCAwLjUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLm5hdkxpbmsge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAubmF2TGluayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLm5hdkxpbmsgPiAqIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/navigator/navigator.component.ts":
/*!**************************************************!*\
  !*** ./src/app/navigator/navigator.component.ts ***!
  \**************************************************/
/*! exports provided: NavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorComponent", function() { return NavigatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NavigatorComponent = class NavigatorComponent {
    constructor(router) {
        this.router = router;
        this.navLinks = [
            { displayName: 'Portfolio', url: '/portfolio' },
            { displayName: 'About & Skills', url: '/about' },
            { displayName: 'Contacts & Profiles', url: '/profiles' },
            { displayName: 'Profile Card', url: '/profile-card' }
        ];
        this.cancellation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onBgClick() {
        this.cancellation.emit();
    }
    onNavItemClick(e, url) {
        e.stopPropagation();
        this.router.navigateByUrl(url);
    }
};
NavigatorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("cancellation")
], NavigatorComponent.prototype, "cancellation", void 0);
NavigatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigator/navigator.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ marginLeft: '50%', opacity: 0 }), {
                        optional: true
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ marginLeft: '0%', opacity: 1 }), {
                        optional: true
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('0.2s', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ marginLeft: '0%', opacity: 0.8, offset: 0.8 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ marginLeft: '-10%', opacity: 1, offset: 0.9 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ marginLeft: '0%', opacity: 1, offset: 1 })
                            ]))
                        ])
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('0.2s', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ marginLeft: '10%', offset: 0.1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ marginLeft: '0%', offset: 0.4 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ marginLeft: '-50%', opacity: 0, offset: 1 })
                            ]))
                        ])
                    ], { optional: true })
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigator.component.scss */ "./src/app/navigator/navigator.component.scss")).default]
    })
], NavigatorComponent);



/***/ }),

/***/ "./src/app/pipes/max-length.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/max-length.pipe.ts ***!
  \******************************************/
/*! exports provided: MaxLengthPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthPipe", function() { return MaxLengthPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MaxLengthPipe = class MaxLengthPipe {
    transform(value, maxLength = 10, prettier = false) {
        let transformedValue = value.slice(0, maxLength);
        if (value.length > maxLength) {
            if (prettier)
                transformedValue = this.makePrettier(transformedValue);
            transformedValue += '...';
        }
        return transformedValue;
    }
    makePrettier(value) {
        return value
            .split(' , ')
            .filter((_, index, arr) => arr.length - 1 !== index && arr.length >= 1)
            .join(', ');
    }
};
MaxLengthPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'maxLength'
    })
], MaxLengthPipe);



/***/ }),

/***/ "./src/app/pipes/no-emoji.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/no-emoji.pipe.ts ***!
  \****************************************/
/*! exports provided: NoEmojiPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoEmojiPipe", function() { return NoEmojiPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NoEmojiPipe = class NoEmojiPipe {
    transform(value) {
        return value.replace(/([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g, '');
    }
};
NoEmojiPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'noEmoji'
    })
], NoEmojiPipe);



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".portfolio-bg {\n  min-height: 100vh;\n  min-width: 100vw;\n  position: relative;\n  background-color: #17a598;\n  overflow: hidden;\n  display: flex;\n}\n.portfolio-bg::after {\n  content: \"\";\n  position: fixed;\n  display: block;\n  height: 100vh;\n  min-height: 500px;\n  width: 100vw;\n  min-width: 500px;\n  overflow: hidden;\n  background-color: #2c3e50;\n  transform: rotateZ(-11deg) scale(1.5);\n  top: -65vh;\n  left: -25vw;\n}\n.portfolio-container {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  z-index: 10;\n  padding: 3.5rem;\n  flex-direction: column;\n  color: #fff;\n}\n.portfolio-container .portfolio-header {\n  display: flex;\n  justify-content: stretch;\n  margin: auto;\n  align-items: center;\n  font-size: 1.8rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.portfolio-container .portfolio-header > * {\n  display: inline-block;\n  padding: 1rem 2rem;\n  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.portfolio-container .portfolio-area {\n  margin: 0.4rem 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 50;\n  position: relative;\n}\n.portfolio-container .portfolio-area .portfolio-selection {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.portfolio-container .portfolio-area .portfolio-selection.portfolio-selection__fixed {\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  background-color: #2c3e50;\n  width: 100%;\n  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.4);\n}\n.portfolio-container .portfolio-area .portfolio-selection > h1 {\n  font-family: \"Cormorant Garamond\", serif;\n  font-weight: normal;\n  font-size: 3.2rem;\n  letter-spacing: 1px;\n  margin: 1rem auto;\n  text-align: center;\n}\n@media (max-width: 900px) {\n  .portfolio-container {\n    padding: 3.5rem 0.5rem;\n  }\n}\n@media (max-width: 74rem) {\n  .portfolio-header {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL0Q6XFx3b3Jrc3BhY2VcXG15X3BvcnRmb2xpb1xccG9ydG9mb2xpby9zcmNcXGFwcFxccG9ydGZvbGlvXFxwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BvcnRmb2xpby9EOlxcd29ya3NwYWNlXFxteV9wb3J0Zm9saW9cXHBvcnRvZm9saW8vc3JjXFxhcHBcXF92YXIuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ05TO0VET1QsZ0JBQUE7RUFDQSxhQUFBO0FFREY7QUZHRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJDakJLO0VEa0JMLHFDQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUVESjtBRk1BO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBRUhGO0FGS0U7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FFSEo7QUZLSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0REFBQTtBRUhOO0FGUUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUVOSjtBRlFJO0VBRUUseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUVQTjtBRlNNO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EseUJDdEVDO0VEdUVELFdBQUE7RUFDQSwyQ0FBQTtBRVBSO0FGV007RUFDRSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUVUUjtBRmVBO0VBQ0U7SUFDRSxzQkFBQTtFRVpGO0FBQ0Y7QUZlQTtFQUNFO0lBQ0Usc0JBQUE7RUViRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3Zhcic7XHJcblxyXG4ucG9ydGZvbGlvLWJnIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWluLXdpZHRoOiA1MDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC0xMWRlZykgc2NhbGUoMS41KTtcclxuICAgIHRvcDogLTY1dmg7XHJcbiAgICBsZWZ0OiAtMjV2dztcclxuICB9XHJcblxyXG59XHJcblxyXG4ucG9ydGZvbGlvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHBhZGRpbmc6IDMuNXJlbTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICAucG9ydGZvbGlvLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgJiA+ICoge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC5wb3J0Zm9saW8tYXJlYSB7XHJcbiAgICBtYXJnaW46IDAuNHJlbSAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA1MDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAucG9ydGZvbGlvLXNlbGVjdGlvbiB7XHJcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgICAgJi5wb3J0Zm9saW8tc2VsZWN0aW9uX19maXhlZCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IHJnYmEoJGNvbG9yOiAjMDAwLCAkYWxwaGE6IDAuNCk7XHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgPiBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAucG9ydGZvbGlvLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzLjVyZW0gMC41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc0cmVtKSB7XHJcbiAgLnBvcnRmb2xpby1oZWFkZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbn1cclxuIiwiJGJnLWNvbG9yOiAjMTdhNTk4O1xyXG4kY29sb3IxOiAjZTc0YzNjO1xyXG4kY29sb3IyOiAjMmMzZTUwO1xyXG4kY29sb3IzOiAjZGIzODFiO1xyXG4kZ3JlZW46ICMxN2E1OTg7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xyXG4kYmxhY2s6ICM1NTU7XHJcbiRvZmYtd2hpdGU6ICNmOGY4Zjg7XHJcbiR3aGl0ZTogI2ZmZjsiLCIucG9ydGZvbGlvLWJnIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTU5ODtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wb3J0Zm9saW8tYmc6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWluLXdpZHRoOiA1MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKC0xMWRlZykgc2NhbGUoMS41KTtcbiAgdG9wOiAtNjV2aDtcbiAgbGVmdDogLTI1dnc7XG59XG5cbi5wb3J0Zm9saW8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwO1xuICBwYWRkaW5nOiAzLjVyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBvcnRmb2xpby1jb250YWluZXIgLnBvcnRmb2xpby1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIG1hcmdpbjogYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnBvcnRmb2xpby1jb250YWluZXIgLnBvcnRmb2xpby1oZWFkZXIgPiAqIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbn1cbi5wb3J0Zm9saW8tY29udGFpbmVyIC5wb3J0Zm9saW8tYXJlYSB7XG4gIG1hcmdpbjogMC40cmVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA1MDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBvcnRmb2xpby1jb250YWluZXIgLnBvcnRmb2xpby1hcmVhIC5wb3J0Zm9saW8tc2VsZWN0aW9uIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ucG9ydGZvbGlvLWNvbnRhaW5lciAucG9ydGZvbGlvLWFyZWEgLnBvcnRmb2xpby1zZWxlY3Rpb24ucG9ydGZvbGlvLXNlbGVjdGlvbl9fZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG4ucG9ydGZvbGlvLWNvbnRhaW5lciAucG9ydGZvbGlvLWFyZWEgLnBvcnRmb2xpby1zZWxlY3Rpb24gPiBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvcm1vcmFudCBHYXJhbW9uZFwiLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAucG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMy41cmVtIDAuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc0cmVtKSB7XG4gIC5wb3J0Zm9saW8taGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/tags.service */ "./src/app/services/tags.service.ts");




let PortfolioComponent = class PortfolioComponent {
    constructor(router, tagsService) {
        this.router = router;
        this.tagsService = tagsService;
        this.animatedTypingText = '🙋 Hey, sort my projects by clicking the categories. ';
        this.dpLogoStyle = {
            height: '12rem',
            width: '12rem',
            borderWidth: '3px'
        };
        this.setFixedPostion = false;
    }
    ngOnInit() {
        this.updateAnimatedTextOnce();
    }
    updateAnimatedTextOnce() {
        let updateCount = 0;
        this.tagsService.onTagUpdate.subscribe(() => {
            if (updateCount === 0) {
                this.animatedTypingText =
                    'Great! Have a great day! 😊';
                updateCount++;
            }
        });
    }
    onScroll() {
        const portfolioHeader = this.portfolioHeaderRef.nativeElement;
        const portfolioArea = this.portfolioAreaRef.nativeElement;
        const portfolioSelectionArea = this.portfolioSelectionAreaRef
            .nativeElement;
        const thresoldHeight = portfolioHeader.scrollHeight + portfolioHeader.offsetTop;
        const portfolioSelectionHeight = portfolioSelectionArea.scrollHeight + portfolioSelectionArea.offsetTop;
        if (window.scrollY > thresoldHeight) {
            portfolioArea.style.marginTop = `${portfolioSelectionHeight + 5}px`;
            this.setFixedPostion = true;
        }
        else {
            portfolioArea.style.marginTop = `inherit`;
            this.setFixedPostion = false;
            const factor = 1 - window.scrollY / (thresoldHeight + 40);
            // const netFactor = window.innerWidth < 900 ? 1 : 1 - factor;
            this.dpLogoStyle = Object.assign({}, this.dpLogoStyle, { height: `${12 * factor}rem`, width: `${12 * factor}rem` });
            portfolioHeader.style.opacity = factor.toString();
        }
    }
    onBackBtnClick() {
        this.router.navigateByUrl('/');
    }
};
PortfolioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('portfolioHeader', { static: true })
], PortfolioComponent.prototype, "portfolioHeaderRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('portfolioArea', { static: true })
], PortfolioComponent.prototype, "portfolioAreaRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('portfolioSelectionArea', { static: true })
], PortfolioComponent.prototype, "portfolioSelectionAreaRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')
], PortfolioComponent.prototype, "onScroll", null);
PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portfolio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")).default]
    })
], PortfolioComponent);



/***/ }),

/***/ "./src/app/profile-card/profile-card.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/profile-card/profile-card.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.container {\n  display: flex;\n  width: 100%;\n  min-height: 100vh;\n  align-items: center;\n  padding: 2rem 0;\n  justify-content: center;\n  background-color: #17a598;\n  color: #ffffff;\n}\n.container .card {\n  background-color: #2c3e50;\n  height: auto;\n  max-height: 90%;\n  width: 45rem;\n  text-align: center;\n  overflow-x: hidden;\n  position: relative;\n  z-index: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  border-radius: 5px;\n  box-shadow: 12px 11px 14px 0px rgba(0, 0, 0, 0.36);\n  transition: all 0.3s ease-in-out;\n  -webkit-animation: dropin 1s ease-in-out 0s 1 normal both;\n          animation: dropin 1s ease-in-out 0s 1 normal both;\n}\n.container .profile-logo {\n  height: 14rem;\n  width: 14rem;\n  margin-top: 5.5rem;\n  display: inline-block;\n  position: relative;\n  z-index: 5;\n  border-radius: 50%;\n  perspective: 1500px;\n  -webkit-animation: dropin 1s ease-in-out 0.4s 1 normal both;\n          animation: dropin 1s ease-in-out 0.4s 1 normal both;\n}\n.container .profile-logo img {\n  position: relative;\n  border: 0.8rem solid #e74c3c;\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: all 0.5s ease-in-out;\n  perspective: 1500px;\n}\n.container .profile-logo::after {\n  content: \"Ritwick Dey\";\n  display: flex;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background-color: #e74c3c;\n  border: 0.8rem solid #db381b;\n  top: 0px;\n  left: 0px;\n  z-index: 10;\n  font-size: 2rem;\n  transition: all 0.5s ease-in-out;\n  transform: rotateY(180deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  perspective: 1500px;\n}\n.container .profile-logo:hover img {\n  transform: rotateY(180deg);\n}\n.container .profile-logo:hover::after {\n  transform: rotateY(0deg);\n}\n.container .strip {\n  background-color: #e74c3c;\n  height: 16.2rem;\n  width: 150%;\n  margin-left: -5rem;\n  margin-top: -8rem;\n  transform: rotateZ(-16deg);\n  z-index: -1;\n  position: absolute;\n  -webkit-animation: stripAnimation 1s ease-in-out 1.4s 1 normal both;\n          animation: stripAnimation 1s ease-in-out 1.4s 1 normal both;\n}\n.container .strip::after {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  height: 100%;\n  width: 20%;\n  background-color: #ffffff;\n  opacity: 0;\n  top: 0;\n  left: 0;\n}\n.container .strip:hover::after {\n  -webkit-animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both;\n          animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both;\n}\n.container .strip-block:hover .strip:after {\n  -webkit-animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both;\n          animation: fadeLeftToRight 1s ease-in-out 0s 1 normal both;\n}\n.container .short-details {\n  position: relative;\n  -webkit-animation: dropin 1s ease-in-out 0.4s 1 normal both;\n          animation: dropin 1s ease-in-out 0.4s 1 normal both;\n}\n.container .short-details .tagLine {\n  display: block;\n  width: 100%;\n  font-size: 1.6rem;\n  font-weight: lighter;\n  font-style: italic;\n  padding: 0.5rem;\n}\n.container .short-details .quote {\n  font-family: \"Cormorant Garamond\", serif;\n  display: inline-block;\n  font-size: 2rem;\n  font-weight: 400;\n  width: 65%;\n  padding: 0.5rem 2rem;\n  padding-bottom: 1rem;\n  line-height: 1.2;\n}\n.container .details {\n  margin-top: 6rem;\n}\n.container .details .nameBlock {\n  transition: all 0.3s ease-in-out;\n  -webkit-animation: dropin 1s ease-in-out 0.6s 1 normal both;\n          animation: dropin 1s ease-in-out 0.6s 1 normal both;\n}\n.container .details .nameBlock:hover .divider > .stick1 {\n  transform: translateX(-2rem) !important;\n}\n.container .details .nameBlock:hover .divider > .stick2 {\n  transform: translateX(2rem) !important;\n}\n.container .details .name {\n  display: inline-block;\n  position: relative;\n  width: 60%;\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 1.6;\n  text-transform: uppercase;\n  letter-spacing: 0.2rem;\n}\n.container .details .bio {\n  display: inline-block;\n  width: 70%;\n  font-size: 1.6rem;\n  margin: 0.4rem;\n  line-height: 1.2;\n  font-weight: lighter;\n  margin-bottom: 0.8rem;\n  text-align: center;\n  word-spacing: 1px;\n  -webkit-animation: dropin 1s ease-in-out 0.8s 1 normal both;\n          animation: dropin 1s ease-in-out 0.8s 1 normal both;\n}\n.container .details .projects-link {\n  display: inline-block;\n  width: 15rem;\n  line-height: 2.2;\n  font-size: 1.4rem;\n  padding: 0.5rem;\n  margin-top: 1.5rem;\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n  vertical-align: middle;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 7px 5px 8px 0px rgba(0, 0, 0, 0.31);\n  -webkit-animation: dropin 1s ease-in-out 1s 1 normal both;\n          animation: dropin 1s ease-in-out 1s 1 normal both;\n}\n.container .details .projects-link span {\n  transform: translateX(0.7rem);\n  display: inline-block;\n  transition: all 0.3s ease-in-out;\n}\n.container .details .projects-link:hover {\n  background-color: #db381b;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.container .details .projects-link:hover::after {\n  transform: translateX(0.2rem);\n  opacity: 1;\n}\n.container .details .projects-link:hover span {\n  transform: translateX(-0.2rem);\n}\n.container .details .projects-link:active {\n  transform: scale(0.8);\n  box-shadow: 4px 5px 5px 0px rgba(0, 0, 0, 0.31);\n}\n.container .details .projects-link::after {\n  content: \"»\";\n  position: relative;\n  opacity: 0;\n  vertical-align: sub;\n  font-size: 2.7rem;\n  line-height: 0;\n  transform: translateX(25px);\n  display: inline-block;\n  transition: all 0.3s ease-in-out;\n}\n.container .social {\n  display: block;\n  padding: 3rem 3rem;\n  padding-top: 0;\n  margin-top: 0.6rem;\n  -webkit-animation: dropin 1s ease-in-out 1.2s 1 normal both;\n          animation: dropin 1s ease-in-out 1.2s 1 normal both;\n}\n.container .social .social-icon {\n  display: inline-block;\n  width: 3.4rem;\n  height: 3.4rem;\n  margin: 0.2rem 0.5rem;\n  transition: all 0.3s ease-in-out;\n}\n.container .social .social-icon img {\n  height: 100%;\n  width: 100%;\n}\n.container .social .social-icon:hover {\n  transform: scale(1.3);\n}\n.divider {\n  padding: 1rem;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  position: relative;\n}\n.divider .stick {\n  display: inline-block;\n  position: relative;\n  height: 2px;\n  background-color: #e74c3c;\n  margin: 2px 0;\n  width: 75%;\n  clear: both;\n}\n.divider .stick1 {\n  transform: translateX(1.5rem);\n  transition: all 0.3s ease-in-out;\n}\n.divider .stick2 {\n  transform: translateX(-1.5rem);\n  transition: all 0.3s ease-in-out;\n}\n.divider:hover .stick1 {\n  transform: translateX(-1.5rem) !important;\n}\n.divider:hover .stick2 {\n  transform: translateX(1.5rem) !important;\n}\n.round-shape {\n  background-color: #e74c3c;\n  border-radius: 100rem;\n  padding: 0.2rem 2rem;\n}\n.tada-animation {\n  -webkit-animation: tada 1s ease-in-out 0s 2 normal both;\n          animation: tada 1s ease-in-out 0s 2 normal both;\n}\n@media (max-height: 740px) and (min-width: 436px) {\n  html {\n    font-size: 8px;\n  }\n}\n@media (max-height: 660px) and (min-width: 436px) {\n  html {\n    font-size: 6px;\n  }\n\n  .container .details {\n    margin-top: 8rem;\n  }\n}\n@media (max-height: 740px) {\n  .container .card {\n    overflow-y: auto;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .container .profile-logo {\n    margin-top: 30px !important;\n  }\n  .container .details {\n    margin-top: 8rem !important;\n  }\n}\n@media (max-width: 460px) and (min-height: 100px) {\n  html {\n    font-size: 8px;\n  }\n\n  .container .card {\n    width: 90vw;\n  }\n  .container .profile-logo {\n    width: 14rem;\n    height: 14rem;\n    margin-top: 14rem;\n  }\n  .container .details {\n    margin-top: 10rem;\n  }\n}\n@media (max-width: 360px) and (min-height: 100px) {\n  html {\n    font-size: 7px;\n  }\n\n  .container .details {\n    margin-top: 7rem;\n  }\n  .container .social .social-icon {\n    width: 2.4rem;\n    height: 2.4rem;\n  }\n}\n@media (max-width: 270px) and (min-height: 100px) {\n  html {\n    font-size: 5px;\n  }\n\n  .container .social .social-icon {\n    width: 1.4rem;\n    height: 1.4rem;\n  }\n}\n@media (max-width: 170px) and (min-height: 100px) {\n  html {\n    font-size: 1px;\n  }\n}\n@-webkit-keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%;\n  }\n  100% {\n    opacity: 0.7;\n    left: 120%;\n  }\n}\n@keyframes fadeLeftToRight {\n  0% {\n    opacity: 0.1;\n    left: -10%;\n  }\n  100% {\n    opacity: 0.7;\n    left: 120%;\n  }\n}\n@-webkit-keyframes dropin {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes dropin {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes tada {\n  0% {\n    transform: scale(1) rotate(0deg);\n  }\n  10% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  20% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  30% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  40% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  50% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  60% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  70% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  80% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  90% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  100% {\n    transform: scale(1) rotate(0deg);\n  }\n}\n@keyframes tada {\n  0% {\n    transform: scale(1) rotate(0deg);\n  }\n  10% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  20% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  30% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  40% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  50% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  60% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  70% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  80% {\n    transform: scale(1.1) rotate(4deg);\n  }\n  90% {\n    transform: scale(1.1) rotate(-4deg);\n  }\n  100% {\n    transform: scale(1) rotate(0deg);\n  }\n}\n@-webkit-keyframes stripAnimation {\n  0% {\n    transform: translateX(-10px) rotateZ(0deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px) rotateZ(-16deg);\n    opacity: 1;\n  }\n}\n@keyframes stripAnimation {\n  0% {\n    transform: translateX(-10px) rotateZ(0deg);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0px) rotateZ(-16deg);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1jYXJkL3Byb2ZpbGUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS1jYXJkL0Q6XFx3b3Jrc3BhY2VcXG15X3BvcnRmb2xpb1xccG9ydG9mb2xpby9zcmNcXGFwcFxccHJvZmlsZS1jYXJkXFxwcm9maWxlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUtY2FyZC9EOlxcd29ya3NwYWNlXFxteV9wb3J0Zm9saW9cXHBvcnRvZm9saW8vc3JjXFxhcHBcXF92YXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNFaEI7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkNUTztFRFVQLGNDTFM7QUZLYjtBQ0VJO0VBQ0kseUJDWEM7RURZRCxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxnQ0FBQTtFQUNBLHlEQUFBO1VBQUEsaURBQUE7QURBUjtBQ0dJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJEQUFBO1VBQUEsbURBQUE7QUREUjtBQ0dRO0VBQ0ksa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBRERaO0FDSVE7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDM0RIO0VENERHLDRCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsbUJBQUE7QURGWjtBQ01ZO0VBQ0ksMEJBQUE7QURKaEI7QUNRUTtFQUNJLHdCQUFBO0FETlo7QUNVSTtFQUNJLHlCQ25GQztFRG9GRCxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1FQUFBO1VBQUEsMkRBQUE7QURSUjtBQ1VRO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FEUlo7QUNXUTtFQUNJLGtFQUFBO1VBQUEsMERBQUE7QURUWjtBQ2NRO0VBQ0ksa0VBQUE7VUFBQSwwREFBQTtBRFpaO0FDZ0JJO0VBQ0ksa0JBQUE7RUFDQSwyREFBQTtVQUFBLG1EQUFBO0FEZFI7QUNnQlE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QURkWjtBQ2lCUTtFQUNJLHdDQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FEZlo7QUNtQkk7RUFDSSxnQkFBQTtBRGpCUjtBQ21CUTtFQUNJLGdDQUFBO0VBQ0EsMkRBQUE7VUFBQSxtREFBQTtBRGpCWjtBQ29CZ0I7RUFDSSx1Q0FBQTtBRGxCcEI7QUNxQmdCO0VBQ0ksc0NBQUE7QURuQnBCO0FDd0JRO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUR0Qlo7QUN5QlE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkRBQUE7VUFBQSxtREFBQTtBRHZCWjtBQzBCUTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLCtDQUFBO0VBQ0EseURBQUE7VUFBQSxpREFBQTtBRHhCWjtBQzJCWTtFQUNJLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBRHpCaEI7QUM0Qlk7RUFDSSx5QkM1TVA7RUQ2TU8sb0NBQUE7VUFBQSw0QkFBQTtBRDFCaEI7QUM0QmdCO0VBQ0ksNkJBQUE7RUFDQSxVQUFBO0FEMUJwQjtBQzZCZ0I7RUFDSSw4QkFBQTtBRDNCcEI7QUMrQlk7RUFDSSxxQkFBQTtFQUNBLCtDQUFBO0FEN0JoQjtBQ2dDWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBRDlCaEI7QUNtQ0k7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwyREFBQTtVQUFBLG1EQUFBO0FEakNSO0FDbUNRO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBRUEsZ0NBQUE7QURsQ1o7QUNvQ1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBRGxDaEI7QUNxQ1k7RUFDSSxxQkFBQTtBRG5DaEI7QUN5Q0E7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRHRDSjtBQ3dDSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJDcFJDO0VEcVJELGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBRHRDUjtBQ3lDSTtFQUNJLDZCQUFBO0VBQ0EsZ0NBQUE7QUR2Q1I7QUMwQ0k7RUFDSSw4QkFBQTtFQUNBLGdDQUFBO0FEeENSO0FDNENRO0VBQ0kseUNBQUE7QUQxQ1o7QUM2Q1E7RUFDSSx3Q0FBQTtBRDNDWjtBQ2dEQTtFQUNJLHlCQ2hUSztFRGlUTCxxQkFBQTtFQUNBLG9CQUFBO0FEN0NKO0FDZ0RBO0VBQ0ksdURBQUE7VUFBQSwrQ0FBQTtBRDdDSjtBQ2dEQTtFQUNJO0lBQ0ksY0FBQTtFRDdDTjtBQUNGO0FDZ0RBO0VBQ0k7SUFDSSxjQUFBO0VEOUNOOztFQ2tETTtJQUNJLGdCQUFBO0VEL0NWO0FBQ0Y7QUNtREE7RUFFUTtJQUNJLGdCQUFBO0VEbERWO0FBQ0Y7QUNzREE7RUFFUTtJQUNJLDJCQUFBO0VEckRWO0VDd0RNO0lBQ0ksMkJBQUE7RUR0RFY7QUFDRjtBQzBEQTtFQUNJO0lBQ0ksY0FBQTtFRHhETjs7RUM0RE07SUFDSSxXQUFBO0VEekRWO0VDNERNO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtFRDFEVjtFQzZETTtJQUNJLGlCQUFBO0VEM0RWO0FBQ0Y7QUMrREE7RUFDSTtJQUNJLGNBQUE7RUQ3RE47O0VDaUVNO0lBQ0ksZ0JBQUE7RUQ5RFY7RUNrRVU7SUFDSSxhQUFBO0lBQ0EsY0FBQTtFRGhFZDtBQUNGO0FDcUVBO0VBQ0k7SUFDSSxjQUFBO0VEbkVOOztFQ3dFVTtJQUNJLGFBQUE7SUFDQSxjQUFBO0VEckVkO0FBQ0Y7QUMwRUE7RUFDSTtJQUNJLGNBQUE7RUR4RU47QUFDRjtBQzJFQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLFVBQUE7RUR6RU47RUM0RUU7SUFDSSxZQUFBO0lBQ0EsVUFBQTtFRDFFTjtBQUNGO0FDaUVBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsVUFBQTtFRHpFTjtFQzRFRTtJQUNJLFlBQUE7SUFDQSxVQUFBO0VEMUVOO0FBQ0Y7QUM2RUE7RUFDSTtJQUNJLFVBQUE7SUFDQSxtQkFBQTtFRDNFTjtFQzhFRTtJQUNJLFVBQUE7SUFDQSxtQkFBQTtFRDVFTjtBQUNGO0FDbUVBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsbUJBQUE7RUQzRU47RUM4RUU7SUFDSSxVQUFBO0lBQ0EsbUJBQUE7RUQ1RU47QUFDRjtBQytFQTtFQUNJO0lBQ0ksZ0NBQUE7RUQ3RU47RUNnRkU7SUFDSSxtQ0FBQTtFRDlFTjtFQ2lGRTtJQUNJLGtDQUFBO0VEL0VOO0VDa0ZFO0lBQ0ksbUNBQUE7RURoRk47RUNtRkU7SUFDSSxrQ0FBQTtFRGpGTjtFQ29GRTtJQUNJLG1DQUFBO0VEbEZOO0VDcUZFO0lBQ0ksa0NBQUE7RURuRk47RUNzRkU7SUFDSSxtQ0FBQTtFRHBGTjtFQ3VGRTtJQUNJLGtDQUFBO0VEckZOO0VDd0ZFO0lBQ0ksbUNBQUE7RUR0Rk47RUN5RkU7SUFDSSxnQ0FBQTtFRHZGTjtBQUNGO0FDNENBO0VBQ0k7SUFDSSxnQ0FBQTtFRDdFTjtFQ2dGRTtJQUNJLG1DQUFBO0VEOUVOO0VDaUZFO0lBQ0ksa0NBQUE7RUQvRU47RUNrRkU7SUFDSSxtQ0FBQTtFRGhGTjtFQ21GRTtJQUNJLGtDQUFBO0VEakZOO0VDb0ZFO0lBQ0ksbUNBQUE7RURsRk47RUNxRkU7SUFDSSxrQ0FBQTtFRG5GTjtFQ3NGRTtJQUNJLG1DQUFBO0VEcEZOO0VDdUZFO0lBQ0ksa0NBQUE7RURyRk47RUN3RkU7SUFDSSxtQ0FBQTtFRHRGTjtFQ3lGRTtJQUNJLGdDQUFBO0VEdkZOO0FBQ0Y7QUMwRkE7RUFDSTtJQUNJLDBDQUFBO0lBQ0EsVUFBQTtFRHhGTjtFQzJGRTtJQUNJLDBDQUFBO0lBQ0EsVUFBQTtFRHpGTjtBQUNGO0FDZ0ZBO0VBQ0k7SUFDSSwwQ0FBQTtJQUNBLFVBQUE7RUR4Rk47RUMyRkU7SUFDSSwwQ0FBQTtJQUNBLFVBQUE7RUR6Rk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtY2FyZC9wcm9maWxlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhNTk4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jb250YWluZXIgLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDQ1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAxMnB4IDExcHggMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDBzIDEgbm9ybWFsIGJvdGg7XG59XG4uY29udGFpbmVyIC5wcm9maWxlLWxvZ28ge1xuICBoZWlnaHQ6IDE0cmVtO1xuICB3aWR0aDogMTRyZW07XG4gIG1hcmdpbi10b3A6IDUuNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGVyc3BlY3RpdmU6IDE1MDBweDtcbiAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMC40cyAxIG5vcm1hbCBib3RoO1xufVxuLmNvbnRhaW5lciAucHJvZmlsZS1sb2dvIGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAwLjhyZW0gc29saWQgI2U3NGMzYztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICBwZXJzcGVjdGl2ZTogMTUwMHB4O1xufVxuLmNvbnRhaW5lciAucHJvZmlsZS1sb2dvOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiUml0d2ljayBEZXlcIjtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuICBib3JkZXI6IDAuOHJlbSBzb2xpZCAjZGIzODFiO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiAxMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcGVyc3BlY3RpdmU6IDE1MDBweDtcbn1cbi5jb250YWluZXIgLnByb2ZpbGUtbG9nbzpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cbi5jb250YWluZXIgLnByb2ZpbGUtbG9nbzpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG59XG4uY29udGFpbmVyIC5zdHJpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gIGhlaWdodDogMTYuMnJlbTtcbiAgd2lkdGg6IDE1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNXJlbTtcbiAgbWFyZ2luLXRvcDogLThyZW07XG4gIHRyYW5zZm9ybTogcm90YXRlWigtMTZkZWcpO1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbmltYXRpb246IHN0cmlwQW5pbWF0aW9uIDFzIGVhc2UtaW4tb3V0IDEuNHMgMSBub3JtYWwgYm90aDtcbn1cbi5jb250YWluZXIgLnN0cmlwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5jb250YWluZXIgLnN0cmlwOmhvdmVyOjphZnRlciB7XG4gIGFuaW1hdGlvbjogZmFkZUxlZnRUb1JpZ2h0IDFzIGVhc2UtaW4tb3V0IDBzIDEgbm9ybWFsIGJvdGg7XG59XG4uY29udGFpbmVyIC5zdHJpcC1ibG9jazpob3ZlciAuc3RyaXA6YWZ0ZXIge1xuICBhbmltYXRpb246IGZhZGVMZWZ0VG9SaWdodCAxcyBlYXNlLWluLW91dCAwcyAxIG5vcm1hbCBib3RoO1xufVxuLmNvbnRhaW5lciAuc2hvcnQtZGV0YWlscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMC40cyAxIG5vcm1hbCBib3RoO1xufVxuLmNvbnRhaW5lciAuc2hvcnQtZGV0YWlscyAudGFnTGluZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbi5jb250YWluZXIgLnNob3J0LWRldGFpbHMgLnF1b3RlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29ybW9yYW50IEdhcmFtb25kXCIsIHNlcmlmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2lkdGg6IDY1JTtcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5uYW1lQmxvY2sge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMC42cyAxIG5vcm1hbCBib3RoO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAubmFtZUJsb2NrOmhvdmVyIC5kaXZpZGVyID4gLnN0aWNrMSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnJlbSkgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLm5hbWVCbG9jazpob3ZlciAuZGl2aWRlciA+IC5zdGljazIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnJlbSkgIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLm5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDYwJTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS42O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAuYmlvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNzAlO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgbWFyZ2luOiAwLjRyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd29yZC1zcGFjaW5nOiAxcHg7XG4gIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuOHMgMSBub3JtYWwgYm90aDtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLnByb2plY3RzLWxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuMjtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3gtc2hhZG93OiA3cHggNXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMxKTtcbiAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMXMgMSBub3JtYWwgYm90aDtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLnByb2plY3RzLWxpbmsgc3BhbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjdyZW0pO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAucHJvamVjdHMtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjM4MWI7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5wcm9qZWN0cy1saW5rOmhvdmVyOjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjJyZW0pO1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAucHJvamVjdHMtbGluazpob3ZlciBzcGFuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjJyZW0pO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAucHJvamVjdHMtbGluazphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIGJveC1zaGFkb3c6IDRweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzEpO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAucHJvamVjdHMtbGluazo6YWZ0ZXIge1xuICBjb250ZW50OiBcIsK7XCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbiAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgZm9udC1zaXplOiAyLjdyZW07XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjVweCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uY29udGFpbmVyIC5zb2NpYWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogM3JlbSAzcmVtO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgbWFyZ2luLXRvcDogMC42cmVtO1xuICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAxLjJzIDEgbm9ybWFsIGJvdGg7XG59XG4uY29udGFpbmVyIC5zb2NpYWwgLnNvY2lhbC1pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMy40cmVtO1xuICBoZWlnaHQ6IDMuNHJlbTtcbiAgbWFyZ2luOiAwLjJyZW0gMC41cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5jb250YWluZXIgLnNvY2lhbCAuc29jaWFsLWljb24gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnNvY2lhbCAuc29jaWFsLWljb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cbi5kaXZpZGVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXZpZGVyIC5zdGljayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgbWFyZ2luOiAycHggMDtcbiAgd2lkdGg6IDc1JTtcbiAgY2xlYXI6IGJvdGg7XG59XG4uZGl2aWRlciAuc3RpY2sxIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNXJlbSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmRpdmlkZXIgLnN0aWNrMiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS41cmVtKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uZGl2aWRlcjpob3ZlciAuc3RpY2sxIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjVyZW0pICFpbXBvcnRhbnQ7XG59XG4uZGl2aWRlcjpob3ZlciAuc3RpY2syIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNXJlbSkgIWltcG9ydGFudDtcbn1cblxuLnJvdW5kLXNoYXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGMzYztcbiAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xuICBwYWRkaW5nOiAwLjJyZW0gMnJlbTtcbn1cblxuLnRhZGEtYW5pbWF0aW9uIHtcbiAgYW5pbWF0aW9uOiB0YWRhIDFzIGVhc2UtaW4tb3V0IDBzIDIgbm9ybWFsIGJvdGg7XG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDogNzQwcHgpIGFuZCAobWluLXdpZHRoOiA0MzZweCkge1xuICBodG1sIHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2NjBweCkgYW5kIChtaW4td2lkdGg6IDQzNnB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogNnB4O1xuICB9XG5cbiAgLmNvbnRhaW5lciAuZGV0YWlscyB7XG4gICAgbWFyZ2luLXRvcDogOHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiA3NDBweCkge1xuICAuY29udGFpbmVyIC5jYXJkIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIgLnByb2ZpbGUtbG9nbyB7XG4gICAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWluZXIgLmRldGFpbHMge1xuICAgIG1hcmdpbi10b3A6IDhyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDEwMHB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG5cbiAgLmNvbnRhaW5lciAuY2FyZCB7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cbiAgLmNvbnRhaW5lciAucHJvZmlsZS1sb2dvIHtcbiAgICB3aWR0aDogMTRyZW07XG4gICAgaGVpZ2h0OiAxNHJlbTtcbiAgICBtYXJnaW4tdG9wOiAxNHJlbTtcbiAgfVxuICAuY29udGFpbmVyIC5kZXRhaWxzIHtcbiAgICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDEwMHB4KSB7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogN3B4O1xuICB9XG5cbiAgLmNvbnRhaW5lciAuZGV0YWlscyB7XG4gICAgbWFyZ2luLXRvcDogN3JlbTtcbiAgfVxuICAuY29udGFpbmVyIC5zb2NpYWwgLnNvY2lhbC1pY29uIHtcbiAgICB3aWR0aDogMi40cmVtO1xuICAgIGhlaWdodDogMi40cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjcwcHgpIGFuZCAobWluLWhlaWdodDogMTAwcHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiA1cHg7XG4gIH1cblxuICAuY29udGFpbmVyIC5zb2NpYWwgLnNvY2lhbC1pY29uIHtcbiAgICB3aWR0aDogMS40cmVtO1xuICAgIGhlaWdodDogMS40cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTcwcHgpIGFuZCAobWluLWhlaWdodDogMTAwcHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUxlZnRUb1JpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgICBsZWZ0OiAtMTAlO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBsZWZ0OiAxMjAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGRyb3BpbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHRhZGEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgfVxuICAyMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgfVxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoNGRlZyk7XG4gIH1cbiAgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKC00ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzdHJpcEFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpIHJvdGF0ZVooMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSByb3RhdGVaKC0xNmRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSIsIkBpbXBvcnQgJy4uL3Zhcic7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xyXG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgd2lkdGg6IDQ1cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMTJweCAxMXB4IDE0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zNik7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMHMgMSBub3JtYWwgYm90aDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1sb2dvIHtcclxuICAgICAgICBoZWlnaHQ6IDE0cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxNHJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1LjVyZW07XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwZXJzcGVjdGl2ZTogMTUwMHB4O1xyXG4gICAgICAgIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDAuNHMgMSBub3JtYWwgYm90aDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDAuOHJlbSBzb2xpZCAkY29sb3IxO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIHBlcnNwZWN0aXZlOiAxNTAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdSaXR3aWNrIERleSc7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuICAgICAgICAgICAgYm9yZGVyOiAwLjhyZW0gc29saWQgJGNvbG9yMztcclxuICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHBlcnNwZWN0aXZlOiAxNTAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0cmlwIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgICAgIGhlaWdodDogMTYuMnJlbTtcclxuICAgICAgICB3aWR0aDogMTUwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTVyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLThyZW07XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC0xNmRlZyk7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogc3RyaXBBbmltYXRpb24gMXMgZWFzZS1pbi1vdXQgMS40cyAxIG5vcm1hbCBib3RoO1xyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUxlZnRUb1JpZ2h0IDFzIGVhc2UtaW4tb3V0IDBzIDEgbm9ybWFsIGJvdGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdHJpcC1ibG9jazpob3ZlciB7XHJcbiAgICAgICAgLnN0cmlwOmFmdGVyIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlTGVmdFRvUmlnaHQgMXMgZWFzZS1pbi1vdXQgMHMgMSBub3JtYWwgYm90aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNob3J0LWRldGFpbHMge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBhbmltYXRpb246IGRyb3BpbiAxcyBlYXNlLWluLW91dCAwLjRzIDEgbm9ybWFsIGJvdGg7XHJcblxyXG4gICAgICAgIC50YWdMaW5lIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnF1b3RlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbHMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZyZW07XHJcblxyXG4gICAgICAgIC5uYW1lQmxvY2sge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMC42cyAxIG5vcm1hbCBib3RoO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAuZGl2aWRlcj4uc3RpY2sxIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRpdmlkZXI+LnN0aWNrMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJyZW0pICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iaW8ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuNHJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB3b3JkLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMC44cyAxIG5vcm1hbCBib3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2plY3RzLWxpbmsge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuMjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiA3cHggNXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMxKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBkcm9waW4gMXMgZWFzZS1pbi1vdXQgMXMgMSBub3JtYWwgYm90aDtcclxuXHJcbiAgICAgICAgICAgIC8vIGFuaW1hdGlvbjogdGFkYSAxcyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBub3JtYWwgYm90aDtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC43cmVtKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjM7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG5cclxuICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4ycmVtKTtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4ycmVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogNHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXDAwYmInO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuN3JlbTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1cHgpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IC8vIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgICAgICBwYWRkaW5nOiAzcmVtIDNyZW07XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC42cmVtO1xyXG4gICAgICAgIGFuaW1hdGlvbjogZHJvcGluIDFzIGVhc2UtaW4tb3V0IDEuMnMgMSBub3JtYWwgYm90aDtcclxuXHJcbiAgICAgICAgLnNvY2lhbC1pY29uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMy40cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMuNHJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjJyZW0gMC41cmVtO1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5zdGljayB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RpY2sxIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS41cmVtKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RpY2syIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuNXJlbSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgLnN0aWNrMSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS41cmVtKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0aWNrMiB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjVyZW0pICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucm91bmQtc2hhcGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHJlbTtcclxuICAgIHBhZGRpbmc6IDAuMnJlbSAycmVtO1xyXG59XHJcblxyXG4udGFkYS1hbmltYXRpb24ge1xyXG4gICAgYW5pbWF0aW9uOiB0YWRhIDFzIGVhc2UtaW4tb3V0IDBzIDIgbm9ybWFsIGJvdGg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LWhlaWdodDogNzQwcHgpIGFuZCAobWluLXdpZHRoOiA0MzZweCkge1xyXG4gICAgaHRtbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LWhlaWdodDogNjYwcHgpIGFuZCAobWluLXdpZHRoOiA0MzZweCkge1xyXG4gICAgaHRtbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA3NDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgLnByb2ZpbGUtbG9nbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDEwMHB4KSB7XHJcbiAgICBodG1sIHtcclxuICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2ZpbGUtbG9nbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNHJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNHJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDEwMHB4KSB7XHJcbiAgICBodG1sIHtcclxuICAgICAgICBmb250LXNpemU6IDdweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDdyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc29jaWFsIHtcclxuICAgICAgICAgICAgLnNvY2lhbC1pY29uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyLjRyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuNHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDI3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDEwMHB4KSB7XHJcbiAgICBodG1sIHtcclxuICAgICAgICBmb250LXNpemU6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAuc29jaWFsIHtcclxuICAgICAgICAgICAgLnNvY2lhbC1pY29uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDEwMHB4KSB7XHJcbiAgICBodG1sIHtcclxuICAgICAgICBmb250LXNpemU6IDFweDtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlTGVmdFRvUmlnaHQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMTtcclxuICAgICAgICBsZWZ0OiAtMTAlO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICBsZWZ0OiAxMjAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGRyb3BpbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB0YWRhIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAxMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDIwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAzMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDQwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDYwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA3MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDgwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA5MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoLTRkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHN0cmlwQW5pbWF0aW9uIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpIHJvdGF0ZVooMGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSByb3RhdGVaKC0xNmRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSIsIiRiZy1jb2xvcjogIzE3YTU5ODtcclxuJGNvbG9yMTogI2U3NGMzYztcclxuJGNvbG9yMjogIzJjM2U1MDtcclxuJGNvbG9yMzogI2RiMzgxYjtcclxuJGdyZWVuOiAjMTdhNTk4O1xyXG4kdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuJGJsYWNrOiAjNTU1O1xyXG4kb2ZmLXdoaXRlOiAjZjhmOGY4O1xyXG4kd2hpdGU6ICNmZmY7Il19 */");

/***/ }),

/***/ "./src/app/profile-card/profile-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile-card/profile-card.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCardComponent", function() { return ProfileCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ProfileCardComponent = class ProfileCardComponent {
    constructor(router) {
        this.router = router;
        this.ExploreMe = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.startTadaAnimation = false;
    }
    ngOnInit() {
        setInterval(() => {
            this.startTadaAnimation = !this.startTadaAnimation;
        }, 3000);
    }
    onExploreMeClick() {
        console.log(123);
        this.ExploreMe.emit();
        this.router.navigateByUrl('/');
    }
};
ProfileCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], ProfileCardComponent.prototype, "ExploreMe", void 0);
ProfileCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-profile-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-card/profile-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-card.component.scss */ "./src/app/profile-card/profile-card.component.scss")).default]
    })
], ProfileCardComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ProfileComponent = class ProfileComponent {
    constructor() {
        this.showNavigationMenu = false;
    }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("animate", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("* => *", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(":leave, :enter", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])(), {
                        optional: true
                    })
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/project-card/project-card.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/project-card/project-card.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.card-outer {\n  position: relative;\n  font-family: \"Lato\", sans-serif;\n  font-weight: normal;\n  color: #555;\n  cursor: pointer;\n}\n.card-outer:hover .card__front {\n  cursor: pointer;\n  transform: rotateY(180deg);\n}\n.card-outer:hover .card__back {\n  cursor: pointer;\n  transform: rotateY(0deg);\n}\n.card {\n  width: 100%;\n  min-width: 20rem;\n  min-height: 18rem;\n  background: #fff;\n  border-radius: 0.6rem;\n  cursor: pointer;\n  overflow: hidden;\n  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.3);\n  transition: 0.8s ease-in-out;\n  perspective: 15000px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.card.card__front {\n  transform: rotateY(0deg);\n}\n.card.card__back {\n  background: #eee;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transform: rotateY(180deg);\n}\n.card.card__featured::before {\n  content: \"⚝\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  font-size: 1.6rem;\n  padding: 0 0.4rem;\n  color: #fff;\n}\n.card.card__featured:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 3.2rem;\n  height: 3.2rem;\n  background-color: #327e36;\n  transform: rotateZ(45deg) translate(-88%) scale(2);\n}\n.card .card-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 0.6rem 1.6rem;\n  width: 100%;\n  height: 100%;\n}\n.card .card-container .card-header {\n  font-family: \"Cormorant Garamond\", serif;\n  width: 100%;\n  font-size: 2.4rem;\n  margin: 1rem 0;\n  font-weight: bold;\n}\n.card .card-container .card-short-details {\n  width: 100%;\n  flex: 1;\n  font-size: 1.6rem;\n  margin: 0.6rem 0;\n}\n.card .card-container .tech-stuff-details > span {\n  font-weight: bold;\n  display: inline-block;\n}\n.card .card-container .tech-stuff-details > p {\n  display: inline;\n  margin-left: 0.3rem;\n  word-break: break-word;\n}\n.card .card-container .full-width-btn {\n  display: block;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  background: #e74c3c;\n  padding: 0.8rem 0.3rem;\n  line-height: 2;\n  font-size: 1.6rem;\n  color: #fff;\n  border: 0;\n  outline: none;\n  cursor: pointer;\n}\n@-webkit-keyframes slideIn {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0%);\n    opacity: 1;\n  }\n}\n@keyframes slideIn {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0%);\n    opacity: 1;\n  }\n}\n@media (min-width: 1080px) {\n  .card {\n    min-width: 28rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1jYXJkL3Byb2plY3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdC1jYXJkL0Q6XFx3b3Jrc3BhY2VcXG15X3BvcnRmb2xpb1xccG9ydG9mb2xpby9zcmNcXGFwcFxccHJvamVjdC1jYXJkXFxwcm9qZWN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3QtY2FyZC9EOlxcd29ya3NwYWNlXFxteV9wb3J0Zm9saW9cXHBvcnRvZm9saW8vc3JjXFxhcHBcXF92YXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNLaEI7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBREhGO0FDTUk7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QURKTjtBQ01JO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0FESk47QUNTQTtFQUNFLFdBQUE7RUFDQSxnQkF2QlU7RUF3QlYsaUJBekJXO0VBMEJYLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QURORjtBQ1FFO0VBQ0Usd0JBQUE7QUROSjtBQ1NFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FEUEo7QUNXSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FEVE47QUNXSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtEQUFBO0FEVE47QUNhRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEWEo7QUNhSTtFQUNFLHdDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FEWE47QUNjSTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRFpOO0FDZ0JNO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBRGRSO0FDaUJNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QURmUjtBQ21CSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsbUJDbkhHO0VEb0hILHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBRGpCTjtBQ3VCQTtFQUNFO0lBQ0UsNEJBQUE7SUFDQSxVQUFBO0VEcEJGO0VDc0JBO0lBQ0UseUJBQUE7SUFDQSxVQUFBO0VEcEJGO0FBQ0Y7QUNZQTtFQUNFO0lBQ0UsNEJBQUE7SUFDQSxVQUFBO0VEcEJGO0VDc0JBO0lBQ0UseUJBQUE7SUFDQSxVQUFBO0VEcEJGO0FBQ0Y7QUN1QkE7RUFDRTtJQUNFLGdCQUFBO0VEckJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0LWNhcmQvcHJvamVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNhcmQtb3V0ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICM1NTU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJkLW91dGVyOmhvdmVyIC5jYXJkX19mcm9udCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4uY2FyZC1vdXRlcjpob3ZlciAuY2FyZF9fYmFjayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDIwcmVtO1xuICBtaW4taGVpZ2h0OiAxOHJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDZweCA2cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRyYW5zaXRpb246IDAuOHMgZWFzZS1pbi1vdXQ7XG4gIHBlcnNwZWN0aXZlOiAxNTAwMHB4O1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmNhcmQuY2FyZF9fZnJvbnQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG59XG4uY2FyZC5jYXJkX19iYWNrIHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cbi5jYXJkLmNhcmRfX2ZlYXR1cmVkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKanVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDAgMC40cmVtO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jYXJkLmNhcmRfX2ZlYXR1cmVkOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAzLjJyZW07XG4gIGhlaWdodDogMy4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3ZTM2O1xuICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpIHRyYW5zbGF0ZSgtODglKSBzY2FsZSgyKTtcbn1cbi5jYXJkIC5jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMC42cmVtIDEuNnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jYXJkIC5jYXJkLWNvbnRhaW5lciAuY2FyZC1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJDb3Jtb3JhbnQgR2FyYW1vbmRcIiwgc2VyaWY7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcmQgLmNhcmQtY29udGFpbmVyIC5jYXJkLXNob3J0LWRldGFpbHMge1xuICB3aWR0aDogMTAwJTtcbiAgZmxleDogMTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIG1hcmdpbjogMC42cmVtIDA7XG59XG4uY2FyZCAuY2FyZC1jb250YWluZXIgLnRlY2gtc3R1ZmYtZGV0YWlscyA+IHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNhcmQgLmNhcmQtY29udGFpbmVyIC50ZWNoLXN0dWZmLWRldGFpbHMgPiBwIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tbGVmdDogMC4zcmVtO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuLmNhcmQgLmNhcmQtY29udGFpbmVyIC5mdWxsLXdpZHRoLWJ0biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNlNzRjM2M7XG4gIHBhZGRpbmc6IDAuOHJlbSAwLjNyZW07XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwODBweCkge1xuICAuY2FyZCB7XG4gICAgbWluLXdpZHRoOiAyOHJlbTtcbiAgfVxufSIsIkBpbXBvcnQgJy4uL3Zhcic7XHJcblxyXG4kbWluLWhlaWdodDogMThyZW07XHJcbiRtaW4td2lkdGg6IDIwcmVtO1xyXG5cclxuLmNhcmQtb3V0ZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIC5jYXJkX19mcm9udCB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgICAuY2FyZF9fYmFjayB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogJG1pbi13aWR0aDtcclxuICBtaW4taGVpZ2h0OiAkbWluLWhlaWdodDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiA2cHggNnB4IDE1cHggcmdiYSgjMDAwMDAwLCAwLjMpO1xyXG4gIHRyYW5zaXRpb246IDAuOHMgZWFzZS1pbi1vdXQ7XHJcbiAgcGVyc3BlY3RpdmU6IDE1MDAwcHg7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAmLmNhcmRfX2Zyb250IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICB9XHJcblxyXG4gICYuY2FyZF9fYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgfVxyXG5cclxuICAmLmNhcmRfX2ZlYXR1cmVkIHtcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICdcXDI2OUQnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgIHBhZGRpbmc6IDAgMC40cmVtO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAzLjJyZW07XHJcbiAgICAgIGhlaWdodDogMy4ycmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3ZTM2O1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpIHRyYW5zbGF0ZSgtODglKSBzY2FsZSgyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDAuNnJlbSAxLjZyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1zaG9ydC1kZXRhaWxzIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICBtYXJnaW46IDAuNnJlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZWNoLXN0dWZmLWRldGFpbHMge1xyXG4gICAgICAmID4gc3BhbiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmID4gcCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mdWxsLXdpZHRoLWJ0biB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvcjE7XHJcbiAgICAgIHBhZGRpbmc6IDAuOHJlbSAwLjNyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAvLyBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwODBweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIG1pbi13aWR0aDogMjhyZW07XHJcbiAgfVxyXG59XHJcbiIsIiRiZy1jb2xvcjogIzE3YTU5ODtcclxuJGNvbG9yMTogI2U3NGMzYztcclxuJGNvbG9yMjogIzJjM2U1MDtcclxuJGNvbG9yMzogI2RiMzgxYjtcclxuJGdyZWVuOiAjMTdhNTk4O1xyXG4kdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuJGJsYWNrOiAjNTU1O1xyXG4kb2ZmLXdoaXRlOiAjZjhmOGY4O1xyXG4kd2hpdGU6ICNmZmY7Il19 */");

/***/ }),

/***/ "./src/app/project-card/project-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/project-card/project-card.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCardComponent", function() { return ProjectCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectCardComponent = class ProjectCardComponent {
    constructor() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    onCardClick(project) {
        this.select.emit({ project });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('project')
], ProjectCardComponent.prototype, "project", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('select')
], ProjectCardComponent.prototype, "select", void 0);
ProjectCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-card/project-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-card.component.scss */ "./src/app/project-card/project-card.component.scss")).default]
    })
], ProjectCardComponent);



/***/ }),

/***/ "./src/app/project-details/project-details.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/project-details/project-details.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.project-details-container {\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 990;\n  background-color: rgba(0, 0, 0, 0.4);\n  font-family: Helvetica, Arial, sans-serif;\n}\n.project-details-container .poject-section {\n  margin: 2rem 0;\n}\n.project-details-container .poject-section .project-section__header {\n  display: inline-block;\n  font-size: 2rem;\n}\n.project-details-container .project-details {\n  height: 100vh;\n  width: 75vw;\n  position: relative;\n  margin-left: auto;\n  margin-right: 0;\n  top: 0;\n  right: 0;\n  color: #555;\n  background-color: #f2f2f2;\n  padding: 1.6rem;\n  padding-top: 0;\n  padding-left: 0;\n  z-index: 999;\n  overflow: hidden;\n  overflow-y: auto;\n  box-shadow: -5px 9px 20px rgba(0, 0, 0, 0.3);\n}\n@media (max-width: 640px) {\n  .project-details-container .project-details {\n    width: 95vw;\n  }\n}\n.project-details-container .project-details .project-details-header {\n  position: fixed;\n  width: inherit;\n  background-color: inherit;\n  margin-bottom: 1rem;\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);\n}\n.project-details-container .project-details .project-details-header .project-title {\n  font-size: 3.2rem;\n  padding: 1rem;\n  text-align: center;\n  font-family: \"Cormorant Garamond\", serif;\n}\n@media (max-width: 640px) {\n  .project-details-container .project-details .project-details-header .project-title {\n    text-align: left;\n    font-size: 2.6rem;\n  }\n}\n.project-details-container .project-details .project-details-header .cancellation-icon {\n  width: 2.6rem;\n  display: inline-block;\n  float: left;\n  top: 0;\n  left: 0;\n  margin: 3.5rem 2.5rem;\n  cursor: pointer;\n}\n.project-details-container .project-details .end-section {\n  font-family: \"Cormorant Garamond\", serif;\n  width: inherit;\n  text-align: center;\n  font-weight: bold;\n  font-size: 2rem;\n  margin-top: 2rem;\n  padding: 1rem 0;\n  border-top: 1px solid #555;\n}\n.project-details-container .project-content {\n  width: 80%;\n  margin: auto;\n  margin-top: 12rem;\n  padding-top: 1.5rem;\n  font-size: 1.8rem;\n  letter-spacing: 0.6px;\n}\n.project-details-container .project-content .project-description {\n  margin-bottom: 2rem;\n}\n.project-details-container .project-content .project-links {\n  padding: 1.6rem 0;\n  padding-bottom: 0.5rem;\n}\n.project-details-container .project-content .project-links .project-link {\n  font-weight: bold;\n  padding: 0.6rem 0;\n}\n.project-details-container .project-content .project-links .project-link a {\n  font-weight: normal;\n  color: #17a598;\n  text-decoration: none;\n  font-style: italic;\n}\n.project-details-container .project-content .project-features h4 {\n  font-weight: bold;\n  padding: 0.8rem 0;\n}\n.project-details-container .project-content .project-features .project-features-details {\n  padding-left: 3rem;\n  list-style-type: none;\n}\n.project-details-container .project-content .project-features .project-features-details > li {\n  line-height: 1;\n  line-height: 1.3;\n  padding: 0.4rem 0;\n}\n.project-details-container .project-content .project-features .project-features-details > li::before {\n  content: \"➺\";\n  padding-right: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL0Q6XFx3b3Jrc3BhY2VcXG15X3BvcnRmb2xpb1xccG9ydG9mb2xpby9zcmNcXGFwcFxccHJvamVjdC1kZXRhaWxzXFxwcm9qZWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3QtZGV0YWlscy9EOlxcd29ya3NwYWNlXFxteV9wb3J0Zm9saW9cXHBvcnRvZm9saW8vc3JjXFxhcHBcXF92YXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNFaEI7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0FEQUo7QUNFSTtFQUNJLGNBQUE7QURBUjtBQ0VRO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FEQVo7QUNJSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFdDdkJBO0VEd0JBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtBREZSO0FDSVE7RUFsQko7SUFtQlEsV0FBQTtFRERWO0FBQ0Y7QUNHUTtFQUNJLGVBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FERlo7QUNJWTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QURGaEI7QUNJZ0I7RUFOSjtJQU9RLGdCQUFBO0lBQ0EsaUJBQUE7RUREbEI7QUFDRjtBQ0lZO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FERmhCO0FDTVE7RUFDSSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FESlo7QUNRSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUROUjtBQ1FRO0VBQ0ksbUJBQUE7QUROWjtBQ1NRO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtBRFBaO0FDU1k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FEUGhCO0FDU2dCO0VBQ0ksbUJBQUE7RUFDQSxjQ3hHWjtFRHlHWSxxQkFBQTtFQUNBLGtCQUFBO0FEUHBCO0FDYVk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FEWGhCO0FDY1k7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FEWmhCO0FDY2dCO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURacEI7QUNlZ0I7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7QURicEIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0LWRldGFpbHMvcHJvamVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciAucG9qZWN0LXNlY3Rpb24ge1xuICBtYXJnaW46IDJyZW0gMDtcbn1cbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wb2plY3Qtc2VjdGlvbiAucHJvamVjdC1zZWN0aW9uX19oZWFkZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWRldGFpbHMge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogNzV2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBjb2xvcjogIzU1NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgcGFkZGluZzogMS42cmVtO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJveC1zaGFkb3c6IC01cHggOXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWRldGFpbHMge1xuICAgIHdpZHRoOiA5NXZ3O1xuICB9XG59XG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvamVjdC1kZXRhaWxzIC5wcm9qZWN0LWRldGFpbHMtaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWRldGFpbHMgLnByb2plY3QtZGV0YWlscy1oZWFkZXIgLnByb2plY3QtdGl0bGUge1xuICBmb250LXNpemU6IDMuMnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJDb3Jtb3JhbnQgR2FyYW1vbmRcIiwgc2VyaWY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLnByb2plY3QtZGV0YWlscy1jb250YWluZXIgLnByb2plY3QtZGV0YWlscyAucHJvamVjdC1kZXRhaWxzLWhlYWRlciAucHJvamVjdC10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDIuNnJlbTtcbiAgfVxufVxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIgLnByb2plY3QtZGV0YWlscyAucHJvamVjdC1kZXRhaWxzLWhlYWRlciAuY2FuY2VsbGF0aW9uLWljb24ge1xuICB3aWR0aDogMi42cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogMy41cmVtIDIuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIgLnByb2plY3QtZGV0YWlscyAuZW5kLXNlY3Rpb24ge1xuICBmb250LWZhbWlseTogXCJDb3Jtb3JhbnQgR2FyYW1vbmRcIiwgc2VyaWY7XG4gIHdpZHRoOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1NTU7XG59XG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvamVjdC1jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMnJlbTtcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbn1cbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWNvbnRlbnQgLnByb2plY3QtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIgLnByb2plY3QtY29udGVudCAucHJvamVjdC1saW5rcyB7XG4gIHBhZGRpbmc6IDEuNnJlbSAwO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xufVxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIgLnByb2plY3QtY29udGVudCAucHJvamVjdC1saW5rcyAucHJvamVjdC1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAuNnJlbSAwO1xufVxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIgLnByb2plY3QtY29udGVudCAucHJvamVjdC1saW5rcyAucHJvamVjdC1saW5rIGEge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzE3YTU5ODtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvamVjdC1jb250ZW50IC5wcm9qZWN0LWZlYXR1cmVzIGg0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAuOHJlbSAwO1xufVxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIgLnByb2plY3QtY29udGVudCAucHJvamVjdC1mZWF0dXJlcyAucHJvamVjdC1mZWF0dXJlcy1kZXRhaWxzIHtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4ucHJvamVjdC1kZXRhaWxzLWNvbnRhaW5lciAucHJvamVjdC1jb250ZW50IC5wcm9qZWN0LWZlYXR1cmVzIC5wcm9qZWN0LWZlYXR1cmVzLWRldGFpbHMgPiBsaSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBwYWRkaW5nOiAwLjRyZW0gMDtcbn1cbi5wcm9qZWN0LWRldGFpbHMtY29udGFpbmVyIC5wcm9qZWN0LWNvbnRlbnQgLnByb2plY3QtZmVhdHVyZXMgLnByb2plY3QtZmVhdHVyZXMtZGV0YWlscyA+IGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKeulwiO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcbn0iLCJAaW1wb3J0ICcuLi92YXInO1xyXG5cclxuLnByb2plY3QtZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA5OTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAwMDAsIDAuNCk7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHJcbiAgICAucG9qZWN0LXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG5cclxuICAgICAgICAucHJvamVjdC1zZWN0aW9uX19oZWFkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3QtZGV0YWlscyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB3aWR0aDogNzV2dztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgICAgcGFkZGluZzogMS42cmVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC01cHggOXB4IDIwcHggcmdiYSgjMDAwMDAwLCAwLjMpO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDk1dnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvamVjdC1kZXRhaWxzLWhlYWRlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgLy8gY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDIwcHggcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC4yKTtcclxuXHJcbiAgICAgICAgICAgIC5wcm9qZWN0LXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNnJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNhbmNlbGxhdGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyLjZyZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDMuNXJlbSAyLjVyZW07XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5lbmQtc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XHJcbiAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRibGFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3QtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJyZW07XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcblxyXG4gICAgICAgIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9qZWN0LWxpbmtzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMS42cmVtIDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcblxyXG4gICAgICAgICAgICAucHJvamVjdC1saW5rIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC42cmVtIDA7XHJcblxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9qZWN0LWZlYXR1cmVzIHtcclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjhyZW0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByb2plY3QtZmVhdHVyZXMtZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgJj5saSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmPmxpOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXDI3QkEnO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJGJnLWNvbG9yOiAjMTdhNTk4O1xyXG4kY29sb3IxOiAjZTc0YzNjO1xyXG4kY29sb3IyOiAjMmMzZTUwO1xyXG4kY29sb3IzOiAjZGIzODFiO1xyXG4kZ3JlZW46ICMxN2E1OTg7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmZmZmO1xyXG4kYmxhY2s6ICM1NTU7XHJcbiRvZmYtd2hpdGU6ICNmOGY4Zjg7XHJcbiR3aGl0ZTogI2ZmZjsiXX0= */");

/***/ }),

/***/ "./src/app/project-details/project-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/project-details/project-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let ProjectDetailsComponent = class ProjectDetailsComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.cancellation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.renderer.addClass(document.body, 'isSideDrawerOpen');
    }
    onCancellation(e, force = false) {
        const cancelAttribute = force || e.target.attributes.getNamedItem('enable-cancellation');
        if (force || (cancelAttribute && cancelAttribute.value))
            this.cancellation.emit();
        this.renderer.removeClass(document.body, 'isSideDrawerOpen');
    }
};
ProjectDetailsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('project')
], ProjectDetailsComponent.prototype, "project", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('cancellation')
], ProjectDetailsComponent.prototype, "cancellation", void 0);
ProjectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-details/project-details.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateX(0%)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateX(0%)',
                            offset: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateX(100%)',
                            offset: 1
                        })
                    ]))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateX(100%)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateX(100%)',
                            offset: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateX(0%)',
                            offset: 1
                        })
                    ]))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-details.component.scss */ "./src/app/project-details/project-details.component.scss")).default]
    })
], ProjectDetailsComponent);



/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".project-container {\n  width: 70%;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  transition: all 0.5s ease-in-out;\n}\n.project-container .project-card {\n  padding: 1rem;\n  flex-basis: 33.3%;\n  transition: all 0.5s ease-in-out;\n}\n@media (max-width: 1300px) {\n  .project-container {\n    width: 90%;\n  }\n  .project-container .project-card {\n    flex-basis: 33.3%;\n  }\n}\n@media (max-width: 970px) {\n  .project-container {\n    width: 95%;\n  }\n  .project-container .project-card {\n    flex-basis: 50%;\n  }\n}\n@media (max-width: 660px) {\n  .project-container {\n    width: 90%;\n  }\n  .project-container .project-card {\n    flex-basis: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvRDpcXHdvcmtzcGFjZVxcbXlfcG9ydGZvbGlvXFxwb3J0b2ZvbGlvL3NyY1xcYXBwXFxwcm9qZWN0c1xccHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNDSjtBRENJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUNDTjtBREdFO0VBQ0U7SUFDRSxVQUFBO0VDQUo7RURDSTtJQUNFLGlCQUFBO0VDQ047QUFDRjtBREdFO0VBQ0U7SUFDRSxVQUFBO0VDREo7RURFSTtJQUNFLGVBQUE7RUNBTjtBQUNGO0FESUU7RUFDRTtJQUNFLFVBQUE7RUNGSjtFREdJO0lBQ0UsZ0JBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgXHJcbiAgICAucHJvamVjdC1jYXJkIHtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgZmxleC1iYXNpczogMzMuMyU7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAucHJvamVjdC1jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAucHJvamVjdC1jYXJkIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiAzMy4zJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTcwcHgpIHtcclxuICAgIC5wcm9qZWN0LWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgIC5wcm9qZWN0LWNhcmQge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcclxuICAgIC5wcm9qZWN0LWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIC5wcm9qZWN0LWNhcmQge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgIiwiLnByb2plY3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLnByb2plY3QtY29udGFpbmVyIC5wcm9qZWN0LWNhcmQge1xuICBwYWRkaW5nOiAxcmVtO1xuICBmbGV4LWJhc2lzOiAzMy4zJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLnByb2plY3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC5wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdC1jYXJkIHtcbiAgICBmbGV4LWJhc2lzOiAzMy4zJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk3MHB4KSB7XG4gIC5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxuICAucHJvamVjdC1jb250YWluZXIgLnByb2plY3QtY2FyZCB7XG4gICAgZmxleC1iYXNpczogNTAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgLnByb2plY3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC5wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdC1jYXJkIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _services_tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/tags.service */ "./src/app/services/tags.service.ts");
/* harmony import */ var _services_project_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/project-data.service */ "./src/app/services/project-data.service.ts");





let ProjectsComponent = class ProjectsComponent {
    constructor(tagsService, projectService) {
        this.tagsService = tagsService;
        this.projectService = projectService;
    }
    ngOnInit() {
        this.renderProjects();
        this.tagSubscription$ = this.tagsService.onTagUpdate;
        this.tagSubscription$.subscribe(() => {
            if (this.projects.length === 0)
                this.renderProjects();
            else
                this.projects = [];
        });
    }
    onProjectCardClick(data) {
        this.selectedProject = data.project;
    }
    renderProjects() {
        this.projects = this.projectService
            .getProjects()
            .filter(project => this.tagsService.tags
            .filter(tag => tag.isSelected)
            .reduce((prev, tag) => prev || project.tags.indexOf(tag.displayName.toLowerCase()) !== -1, false));
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: _services_tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"] },
    { type: _services_project_data_service__WEBPACK_IMPORTED_MODULE_4__["ProjectDataService"] }
];
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-25%)', opacity: 0 }), {
                        optional: true
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0%)', opacity: 1 }), {
                        optional: true
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('0.05s', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                    transform: 'translateY(-25%)',
                                    opacity: 0,
                                    offset: 0
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0%)', opacity: 1, offset: 1 })
                            ]))
                        ])
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('0.05s', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-25%)', opacity: 0, offset: 1 })
                            ]))
                        ])
                    ], { optional: true })
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('animateChildren', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@*, :enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('@*, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()], { optional: true })
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/services/project-data.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/project-data.service.ts ***!
  \**************************************************/
/*! exports provided: ProjectDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDataService", function() { return ProjectDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_project_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/project-data */ "./src/app/utils/project-data.ts");



let ProjectDataService = class ProjectDataService {
    constructor() { }
    getProjects() {
        return _utils_project_data__WEBPACK_IMPORTED_MODULE_2__["ALL_PROJECT_DATA"];
    }
};
ProjectDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProjectDataService);



/***/ }),

/***/ "./src/app/services/skills.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/skills.service.ts ***!
  \********************************************/
/*! exports provided: SkillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsService", function() { return SkillsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_data_skills_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/data/skills.data */ "./src/app/utils/data/skills.data.ts");



let SkillsService = class SkillsService {
    constructor() { }
    getSkills() {
        return _utils_data_skills_data__WEBPACK_IMPORTED_MODULE_2__["SKILLS_DATA"];
    }
};
SkillsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SkillsService);



/***/ }),

/***/ "./src/app/services/tags.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/tags.service.ts ***!
  \******************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_tags_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/tags-data */ "./src/app/utils/tags-data.ts");



let TagsService = class TagsService {
    constructor() {
        this.onTagUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tags = _utils_tags_data__WEBPACK_IMPORTED_MODULE_2__["tagData"];
    }
    toggleSelection(tagName) {
        const totoalSelection = this.tags.reduce((prev, current) => prev + (current.isSelected ? 1 : 0), 0);
        const selectedSkill = this.tags.find(e => e.displayName === tagName);
        if (totoalSelection <= 1 && selectedSkill.isSelected)
            return;
        selectedSkill.isSelected = !selectedSkill.isSelected;
        this.onTagUpdate.emit({
            tags: this.tags.filter(e => e.isSelected)
        });
    }
};
TagsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], TagsService);



/***/ }),

/***/ "./src/app/typing/typing.component.scss":
/*!**********************************************!*\
  !*** ./src/app/typing/typing.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text {\n  display: inline-block;\n}\n\n.cursor {\n  content: \"|\";\n  display: inline-block;\n}\n\n.cursor__animate {\n  -webkit-animation: fadeInOut 0.8s cubic-bezier(1, -0.18, 0, 1.35) 0.5s infinite;\n          animation: fadeInOut 0.8s cubic-bezier(1, -0.18, 0, 1.35) 0.5s infinite;\n}\n\n@-webkit-keyframes fadeInOut {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeInOut {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHlwaW5nL0Q6XFx3b3Jrc3BhY2VcXG15X3BvcnRmb2xpb1xccG9ydG9mb2xpby9zcmNcXGFwcFxcdHlwaW5nXFx0eXBpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3R5cGluZy90eXBpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSwrRUFBQTtVQUFBLHVFQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLFVBQUE7RUNDTjtFREVFO0lBQ0ksVUFBQTtFQ0FOO0FBQ0Y7O0FEUEE7RUFDSTtJQUNJLFVBQUE7RUNDTjtFREVFO0lBQ0ksVUFBQTtFQ0FOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90eXBpbmcvdHlwaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY3Vyc29yIHtcclxuICAgIGNvbnRlbnQ6ICd8JztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmN1cnNvcl9fYW5pbWF0ZSB7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbk91dCAwLjhzIGN1YmljLWJlemllcigxLCAtMC4xOCwgMCwgMS4zNSkgMC41cyBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW5PdXQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSIsIi50ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY3Vyc29yIHtcbiAgY29udGVudDogXCJ8XCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmN1cnNvcl9fYW5pbWF0ZSB7XG4gIGFuaW1hdGlvbjogZmFkZUluT3V0IDAuOHMgY3ViaWMtYmV6aWVyKDEsIC0wLjE4LCAwLCAxLjM1KSAwLjVzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbk91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/typing/typing.component.ts":
/*!********************************************!*\
  !*** ./src/app/typing/typing.component.ts ***!
  \********************************************/
/*! exports provided: TypingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingComponent", function() { return TypingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TypingComponent = class TypingComponent {
    constructor() {
        this.text = "";
        this.time = 1000;
        this.delay = 500;
        this.displayText = "";
        this.isProcessRunning = false;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (this.text)
            this.startRendering();
    }
    startRendering() {
        this.displayText = "";
        if (!this.isProcessRunning) {
            setTimeout(() => {
                const eachTime = Math.round(this.time / this.text.length);
                const textArr = this.text.split('');
                this.renderTextByLetter(textArr, eachTime);
            }, this.delay);
        }
        this.isProcessRunning = true;
    }
    renderTextByLetter(textArr, timeInterval, letter = textArr[0]) {
        if (!textArr || textArr.length <= 0) {
            const cursor = this.cursorRef.nativeElement;
            cursor.classList.add("cursor__animation");
            this.isProcessRunning = false;
            return;
        }
        setTimeout(() => {
            this.displayText += letter;
            const nextTextArr = textArr.slice(1);
            this.renderTextByLetter(nextTextArr, timeInterval);
        }, timeInterval);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("text")
], TypingComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("time")
], TypingComponent.prototype, "time", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("delay")
], TypingComponent.prototype, "delay", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cursor', { static: true })
], TypingComponent.prototype, "cursorRef", void 0);
TypingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-typing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./typing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/typing/typing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./typing.component.scss */ "./src/app/typing/typing.component.scss")).default]
    })
], TypingComponent);



/***/ }),

/***/ "./src/app/ui/back-icon/back-icon/back-icon.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/ui/back-icon/back-icon/back-icon.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon {\n  width: 100%;\n  height: 100%;\n  max-width: 25rem;\n  max-height: 25rem;\n  display: inline-block;\n}\n.icon img {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvYmFjay1pY29uL2JhY2staWNvbi9EOlxcd29ya3NwYWNlXFxteV9wb3J0Zm9saW9cXHBvcnRvZm9saW8vc3JjXFxhcHBcXHVpXFxiYWNrLWljb25cXGJhY2staWNvblxcYmFjay1pY29uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9iYWNrLWljb24vYmFjay1pY29uL2JhY2staWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC91aS9iYWNrLWljb24vYmFjay1pY29uL2JhY2staWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAyNXJlbTtcclxuICAgIG1heC1oZWlnaHQ6IDI1cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIFxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiLmljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDI1cmVtO1xuICBtYXgtaGVpZ2h0OiAyNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmljb24gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ui/back-icon/back-icon/back-icon.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui/back-icon/back-icon/back-icon.component.ts ***!
  \***************************************************************/
/*! exports provided: BackIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackIconComponent", function() { return BackIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BackIconComponent = class BackIconComponent {
    constructor() { }
    ngOnInit() {
    }
};
BackIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-back-icon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./back-icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/back-icon/back-icon/back-icon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./back-icon.component.scss */ "./src/app/ui/back-icon/back-icon/back-icon.component.scss")).default]
    })
], BackIconComponent);



/***/ }),

/***/ "./src/app/ui/cross-icon/cross-icon.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/ui/cross-icon/cross-icon.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon {\n  width: 100%;\n  height: 100%;\n  max-width: 25rem;\n  max-height: 25rem;\n  display: inline-block;\n}\n.icon img {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvY3Jvc3MtaWNvbi9EOlxcd29ya3NwYWNlXFxteV9wb3J0Zm9saW9cXHBvcnRvZm9saW8vc3JjXFxhcHBcXHVpXFxjcm9zcy1pY29uXFxjcm9zcy1pY29uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91aS9jcm9zcy1pY29uL2Nyb3NzLWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvdWkvY3Jvc3MtaWNvbi9jcm9zcy1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDI1cmVtO1xyXG4gICAgbWF4LWhlaWdodDogMjVyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn0iLCIuaWNvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMjVyZW07XG4gIG1heC1oZWlnaHQ6IDI1cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uaWNvbiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ui/cross-icon/cross-icon.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui/cross-icon/cross-icon.component.ts ***!
  \*******************************************************/
/*! exports provided: CrossIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossIconComponent", function() { return CrossIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CrossIconComponent = class CrossIconComponent {
    constructor() { }
    ngOnInit() {
    }
};
CrossIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cross-icon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cross-icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/cross-icon/cross-icon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cross-icon.component.scss */ "./src/app/ui/cross-icon/cross-icon.component.scss")).default]
    })
], CrossIconComponent);



/***/ }),

/***/ "./src/app/utils/data/aradas.data.ts":
/*!*******************************************!*\
  !*** ./src/app/utils/data/aradas.data.ts ***!
  \*******************************************/
/*! exports provided: Aradas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aradas", function() { return Aradas; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const Aradas = {
    id: '2',
    name: 'Aradas',
    description: 'Customer Software Development Site',
    projectLink: null,
    liveUrl: 'https://ardas-it.com',
    isFeatured: false,
    features: [],
    tags: ['laravel'],
    techStuff: [
        'laravel',
        'jQuery & Bootstap 5',
        'HTML & CSS',
    ],
    additionalData: []
};


/***/ }),

/***/ "./src/app/utils/data/fit4bond.data.ts":
/*!*********************************************!*\
  !*** ./src/app/utils/data/fit4bond.data.ts ***!
  \*********************************************/
/*! exports provided: Fire4Bond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fire4Bond", function() { return Fire4Bond; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const Fire4Bond = {
    id: '3',
    name: 'fit4bond',
    description: 'Custom Tailoring Software Site',
    projectLink: null,
    liveUrl: 'https://www.fit4bond.net/',
    isFeatured: false,
    features: [],
    tags: ['angular'],
    techStuff: [
        'angular',
        'tailwind',
    ],
    additionalData: []
};


/***/ }),

/***/ "./src/app/utils/data/godaddy.data.ts":
/*!********************************************!*\
  !*** ./src/app/utils/data/godaddy.data.ts ***!
  \********************************************/
/*! exports provided: GoDaddy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoDaddy", function() { return GoDaddy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const GoDaddy = {
    id: '6',
    name: 'GoDaddy',
    description: 'Food Delivery Online Site',
    projectLink: null,
    liveUrl: 'https://www.godaddy.com/',
    isFeatured: false,
    features: [],
    tags: ['spring mvc'],
    techStuff: [
        'Spring MVC',
        'JSP',
        'Oracle'
    ],
    additionalData: []
};


/***/ }),

/***/ "./src/app/utils/data/printcloud.data.ts":
/*!***********************************************!*\
  !*** ./src/app/utils/data/printcloud.data.ts ***!
  \***********************************************/
/*! exports provided: PrintCloud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintCloud", function() { return PrintCloud; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const PrintCloud = {
    id: '1',
    name: 'Print Cloud',
    description: 'Printing Service online site',
    projectLink: null,
    liveUrl: 'https://printcloud.ca/',
    isFeatured: false,
    features: [],
    tags: ['laravel'],
    techStuff: [
        'laravel',
        'jQuery & Bootstap 4'
    ],
    additionalData: []
};


/***/ }),

/***/ "./src/app/utils/data/skills.data.ts":
/*!*******************************************!*\
  !*** ./src/app/utils/data/skills.data.ts ***!
  \*******************************************/
/*! exports provided: SKILLS_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKILLS_DATA", function() { return SKILLS_DATA; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const SKILLS_DATA = [
    {
        type: 'Programming Language',
        names: [
            "Node.js", "Typescript", "PHP", "python", "java", "C#", 'HTML5', 'XML', 'CSS', 'SASS', 'Less'
        ]
    },
    {
        type: 'Backend',
        names: [
            'Express.js', 'Spring MVC', 'Spring Boot', 'ASP.NET', 'Laravel', 'Symfony', 'Django'
        ]
    },
    {
        type: 'Frontend',
        names: [
            'Angular', 'React.js', 'Vue.js', 'Next.js', 'Nuxt.js'
        ]
    },
    {
        type: 'Database & ORM',
        names: [
            'SQL Server', 'MongoDB', 'Entity Framework', 'Mongoose'
        ]
    },
    {
        type: 'Cloud',
        names: [
            'Azure Web Service & Storage', 'Firebase DB & Functions', 'Heroku'
        ]
    },
    {
        type: 'Testing',
        names: [
            'Jest', 'Mocha'
        ]
    },
    {
        type: 'Others',
        names: [
            'Git & GitHub', 'CI/CD', 'REST API', 'JWT', 'Auth0', 'Jenkins', 'Travis CI', 'JIRA', 'Confluence'
        ]
    },
];


/***/ }),

/***/ "./src/app/utils/data/trust-pilot.data.ts":
/*!************************************************!*\
  !*** ./src/app/utils/data/trust-pilot.data.ts ***!
  \************************************************/
/*! exports provided: TrustPilot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrustPilot", function() { return TrustPilot; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const TrustPilot = {
    id: '5',
    name: 'Trustpilot',
    description: 'Online Shopping Site',
    projectLink: null,
    liveUrl: 'https://www.trustpilot.com/review/minisplits4less.com',
    isFeatured: false,
    features: [],
    tags: ['react.js', 'spring mvc'],
    techStuff: [
        'React.js',
        'tailwind',
        'Spring MVC'
    ],
    additionalData: []
};


/***/ }),

/***/ "./src/app/utils/data/uber-eats.data.ts":
/*!**********************************************!*\
  !*** ./src/app/utils/data/uber-eats.data.ts ***!
  \**********************************************/
/*! exports provided: UberDelibery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UberDelibery", function() { return UberDelibery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const UberDelibery = {
    id: '4',
    name: 'Uber Eats Home',
    description: 'Food Delivery Online Site',
    projectLink: null,
    liveUrl: 'https://www.ubereats.com/',
    isFeatured: false,
    features: [],
    tags: ['react.js'],
    techStuff: [
        'React.js',
        'tailwind',
        'Spring MVC'
    ],
    additionalData: []
};


/***/ }),

/***/ "./src/app/utils/project-data.ts":
/*!***************************************!*\
  !*** ./src/app/utils/project-data.ts ***!
  \***************************************/
/*! exports provided: ALL_PROJECT_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_PROJECT_DATA", function() { return ALL_PROJECT_DATA; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/app/utils/utils.ts");
/* harmony import */ var _data_printcloud_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/printcloud.data */ "./src/app/utils/data/printcloud.data.ts");
/* harmony import */ var _data_aradas_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/aradas.data */ "./src/app/utils/data/aradas.data.ts");
/* harmony import */ var _data_fit4bond_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/fit4bond.data */ "./src/app/utils/data/fit4bond.data.ts");
/* harmony import */ var _data_uber_eats_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/uber-eats.data */ "./src/app/utils/data/uber-eats.data.ts");
/* harmony import */ var _data_trust_pilot_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/trust-pilot.data */ "./src/app/utils/data/trust-pilot.data.ts");
/* harmony import */ var _data_godaddy_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/godaddy.data */ "./src/app/utils/data/godaddy.data.ts");









const getAllProject = () => {
    const projects = [
        _data_printcloud_data__WEBPACK_IMPORTED_MODULE_3__["PrintCloud"],
        _data_aradas_data__WEBPACK_IMPORTED_MODULE_4__["Aradas"],
        _data_fit4bond_data__WEBPACK_IMPORTED_MODULE_5__["Fire4Bond"],
        _data_uber_eats_data__WEBPACK_IMPORTED_MODULE_6__["UberDelibery"],
        _data_trust_pilot_data__WEBPACK_IMPORTED_MODULE_7__["TrustPilot"],
        _data_godaddy_data__WEBPACK_IMPORTED_MODULE_8__["GoDaddy"]
    ];
    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        const result = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["testUniqueness"])(projects, project => project.id);
        if (result.error) {
            const errorLog = [];
            result.duplicates.forEach((project) => {
                errorLog.push(`Duplicate E-id ${project.id} of ${project.name} `);
            });
            throw new Error(JSON.stringify(errorLog));
        }
    }
    return projects;
};
const ALL_PROJECT_DATA = getAllProject();


/***/ }),

/***/ "./src/app/utils/tags-data.ts":
/*!************************************!*\
  !*** ./src/app/utils/tags-data.ts ***!
  \************************************/
/*! exports provided: tagData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagData", function() { return tagData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const tagData = [
    { displayName: 'Angular', isSelected: true },
    { displayName: 'React.js', isSelected: true },
    { displayName: 'Vue.js', isSelected: true },
    { displayName: 'Spring MVC', isSelected: true },
    { displayName: 'Laravel', isSelected: true },
    { displayName: 'Others', isSelected: !true }
];


/***/ }),

/***/ "./src/app/utils/utils.ts":
/*!********************************!*\
  !*** ./src/app/utils/utils.ts ***!
  \********************************/
/*! exports provided: testUniqueness */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testUniqueness", function() { return testUniqueness; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const testUniqueness = (allData, uKeyFn) => {
    const result = { error: null, duplicates: [] };
    allData.forEach((data, i, alldata) => {
        if (alldata.filter(p => uKeyFn(p) === uKeyFn(data)).length !== 1) {
            result.error = 'Duplicate Key';
            result.duplicates.push(data);
        }
    });
    return result;
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\workspace\my_portfolio\portofolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map