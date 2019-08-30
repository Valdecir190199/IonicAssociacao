(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estado-salvar-salvar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/estado/salvar/salvar.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/estado/salvar/salvar.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>salvar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label position=\"floating\">Nome</ion-label>\n    <ion-input name=\"nome\" [(ngModel)]=\"estado.nome\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Sigla</ion-label>\n    <ion-input name=\"sigla\" [(ngModel)]=\"estado.sigla\"></ion-input>\n  </ion-item>\n\n  <ion-button expand=\"full\" shape=\"round\" (click)=\"salvar()\">salvar</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/estado/entidade/estado.ts":
/*!*******************************************!*\
  !*** ./src/app/estado/entidade/estado.ts ***!
  \*******************************************/
/*! exports provided: Estado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Estado", function() { return Estado; });
var Estado = /** @class */ (function () {
    function Estado() {
    }
    return Estado;
}());



/***/ }),

/***/ "./src/app/estado/salvar/salvar.module.ts":
/*!************************************************!*\
  !*** ./src/app/estado/salvar/salvar.module.ts ***!
  \************************************************/
/*! exports provided: SalvarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalvarPageModule", function() { return SalvarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _salvar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salvar.page */ "./src/app/estado/salvar/salvar.page.ts");







var routes = [
    {
        path: '',
        component: _salvar_page__WEBPACK_IMPORTED_MODULE_6__["SalvarPage"]
    }
];
var SalvarPageModule = /** @class */ (function () {
    function SalvarPageModule() {
    }
    SalvarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_salvar_page__WEBPACK_IMPORTED_MODULE_6__["SalvarPage"]]
        })
    ], SalvarPageModule);
    return SalvarPageModule;
}());



/***/ }),

/***/ "./src/app/estado/salvar/salvar.page.scss":
/*!************************************************!*\
  !*** ./src/app/estado/salvar/salvar.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VzdGFkby9zYWx2YXIvc2FsdmFyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/estado/salvar/salvar.page.ts":
/*!**********************************************!*\
  !*** ./src/app/estado/salvar/salvar.page.ts ***!
  \**********************************************/
/*! exports provided: SalvarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalvarPage", function() { return SalvarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entidade_estado__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entidade/estado */ "./src/app/estado/entidade/estado.ts");





var SalvarPage = /** @class */ (function () {
    function SalvarPage(fire, rota) {
        this.fire = fire;
        this.rota = rota;
        this.estado = new _entidade_estado__WEBPACK_IMPORTED_MODULE_4__["Estado"]();
    }
    SalvarPage.prototype.ngOnInit = function () {
    };
    SalvarPage.prototype.salvar = function () {
        this.fire.list('estado').push(this.estado);
        this.estado = new _entidade_estado__WEBPACK_IMPORTED_MODULE_4__["Estado"]();
        this.rota.navigate(['listar']);
    };
    SalvarPage.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SalvarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salvar',
            template: __webpack_require__(/*! raw-loader!./salvar.page.html */ "./node_modules/raw-loader/index.js!./src/app/estado/salvar/salvar.page.html"),
            styles: [__webpack_require__(/*! ./salvar.page.scss */ "./src/app/estado/salvar/salvar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SalvarPage);
    return SalvarPage;
}());



/***/ })

}]);
//# sourceMappingURL=estado-salvar-salvar-module-es5.js.map