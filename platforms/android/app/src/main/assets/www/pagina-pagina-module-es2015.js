(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagina-pagina-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pagina/pagina.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pagina/pagina.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Inicio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button expand=\"full\" shape=\"round\" href=\"salvar-curso\">Curso</ion-button>\n  <ion-button expand=\"full\" shape=\"round\" href = \"salvar-materia\">Materia</ion-button>\n      <ion-button expand=\"full\" shape=\"round\" href=\"salvar-registro\">Registro</ion-button>\n      <ion-button expand=\"full\" shape=\"round\" href=\"home\">Sair</ion-button>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pagina/pagina.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pagina/pagina.module.ts ***!
  \*****************************************/
/*! exports provided: PaginaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaPageModule", function() { return PaginaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pagina_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagina.page */ "./src/app/pagina/pagina.page.ts");







const routes = [
    {
        path: '',
        component: _pagina_page__WEBPACK_IMPORTED_MODULE_6__["PaginaPage"]
    }
];
let PaginaPageModule = class PaginaPageModule {
};
PaginaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_pagina_page__WEBPACK_IMPORTED_MODULE_6__["PaginaPage"]]
    })
], PaginaPageModule);



/***/ }),

/***/ "./src/app/pagina/pagina.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pagina/pagina.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYS9wYWdpbmEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pagina/pagina.page.ts":
/*!***************************************!*\
  !*** ./src/app/pagina/pagina.page.ts ***!
  \***************************************/
/*! exports provided: PaginaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaPage", function() { return PaginaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginaPage = class PaginaPage {
    constructor() { }
    ngOnInit() {
    }
};
PaginaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagina',
        template: __webpack_require__(/*! raw-loader!./pagina.page.html */ "./node_modules/raw-loader/index.js!./src/app/pagina/pagina.page.html"),
        styles: [__webpack_require__(/*! ./pagina.page.scss */ "./src/app/pagina/pagina.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PaginaPage);



/***/ })

}]);
//# sourceMappingURL=pagina-pagina-module-es2015.js.map