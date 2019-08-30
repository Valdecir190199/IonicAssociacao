(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estado-listar-listar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/estado/listar/listar.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/estado/listar/listar.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Lista de Estados</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let estado of listaEstado | async\">\n      <ion-label>{{ estado.nome }}</ion-label>\n      <ion-label>{{ estado.sigla }}</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-button href = \"salvar\">Salvar</ion-button>\n  <ion-button href = \"pagina\">Voltar</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/estado/listar/listar.module.ts":
/*!************************************************!*\
  !*** ./src/app/estado/listar/listar.module.ts ***!
  \************************************************/
/*! exports provided: ListarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarPageModule", function() { return ListarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listar.page */ "./src/app/estado/listar/listar.page.ts");







var routes = [
    {
        path: '',
        component: _listar_page__WEBPACK_IMPORTED_MODULE_6__["ListarPage"]
    }
];
var ListarPageModule = /** @class */ (function () {
    function ListarPageModule() {
    }
    ListarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_listar_page__WEBPACK_IMPORTED_MODULE_6__["ListarPage"]]
        })
    ], ListarPageModule);
    return ListarPageModule;
}());



/***/ }),

/***/ "./src/app/estado/listar/listar.page.scss":
/*!************************************************!*\
  !*** ./src/app/estado/listar/listar.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VzdGFkby9saXN0YXIvbGlzdGFyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/estado/listar/listar.page.ts":
/*!**********************************************!*\
  !*** ./src/app/estado/listar/listar.page.ts ***!
  \**********************************************/
/*! exports provided: ListarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarPage", function() { return ListarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ListarPage = /** @class */ (function () {
    function ListarPage(fire) {
        this.fire = fire;
        this.listaEstado = this.fire.list('estado').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (lista) { return lista.map(function (linha) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: linha.payload.key }, linha.payload.val())); }); }));
    }
    ListarPage.prototype.ngOnInit = function () {
    };
    ListarPage.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    ListarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listar',
            template: __webpack_require__(/*! raw-loader!./listar.page.html */ "./node_modules/raw-loader/index.js!./src/app/estado/listar/listar.page.html"),
            styles: [__webpack_require__(/*! ./listar.page.scss */ "./src/app/estado/listar/listar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], ListarPage);
    return ListarPage;
}());



/***/ })

}]);
//# sourceMappingURL=estado-listar-listar-module-es5.js.map