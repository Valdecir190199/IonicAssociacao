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
class Estado {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _salvar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salvar.page */ "./src/app/estado/salvar/salvar.page.ts");







const routes = [
    {
        path: '',
        component: _salvar_page__WEBPACK_IMPORTED_MODULE_6__["SalvarPage"]
    }
];
let SalvarPageModule = class SalvarPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _entidade_estado__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entidade/estado */ "./src/app/estado/entidade/estado.ts");





let SalvarPage = class SalvarPage {
    constructor(fire, rota) {
        this.fire = fire;
        this.rota = rota;
        this.estado = new _entidade_estado__WEBPACK_IMPORTED_MODULE_4__["Estado"]();
    }
    ngOnInit() {
    }
    salvar() {
        this.fire.list('estado').push(this.estado);
        this.estado = new _entidade_estado__WEBPACK_IMPORTED_MODULE_4__["Estado"]();
        this.rota.navigate(['listar']);
    }
};
SalvarPage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SalvarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-salvar',
        template: __webpack_require__(/*! raw-loader!./salvar.page.html */ "./node_modules/raw-loader/index.js!./src/app/estado/salvar/salvar.page.html"),
        styles: [__webpack_require__(/*! ./salvar.page.scss */ "./src/app/estado/salvar/salvar.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SalvarPage);



/***/ })

}]);
//# sourceMappingURL=estado-salvar-salvar-module-es2015.js.map