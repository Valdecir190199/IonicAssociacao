(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["materia-listar-materia-listar-materia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/materia/listar-materia/listar-materia.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/materia/listar-materia/listar-materia.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>Lista de Materias</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <ion-item *ngFor=\"let materia of listaMateria | async\">\n        <ion-label>{{ materia.nome }}</ion-label>\n        <ion-label>{{ materia.curso.nome }}</ion-label>\n        <ion-label>{{ materia.curso.ano }}</ion-label>\n        <ion-button *ngIf=\"(user_id | async) == materia.user_id\" expand=\"full\" shape=\"round\" color=\"danger\" (click)=\"excluir(materia.key, materia)\">Excluir</ion-button>\n      </ion-item>\n          <ion-item>\n          \n          \n            <ion-input style=\"   border-radius:4px;\n              -moz-border-radius:4px;\n              -webkit-border-radius:4px;\n              box-shadow: 1px 1px 2px #333333;    \n              -moz-box-shadow: 1px 1px 2px #333333;\n              -webkit-box-shadow: 1px 1px 2px #333333;\n              background: #cccccc; \n              border:1px solid #000000;\n              width:100%\" [(ngModel)]=\"busca\"></ion-input>\n            <ion-button expand=\"full\" shape=\"round\" color=\"danger\" (click)=\"buscar()\">busca</ion-button>\n          </ion-item>\n    </ion-list>\n  \n  </ion-content>\n\n  <ion-button href = \"salvar-materia\">Novo</ion-button>\n<ion-button expand=\"full\" shape=\"round\" href=\"pagina\">Voltar</ion-button>\n\n  \n  "

/***/ }),

/***/ "./src/app/materia/listar-materia/listar-materia.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/materia/listar-materia/listar-materia.module.ts ***!
  \*****************************************************************/
/*! exports provided: ListarMateriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarMateriaPageModule", function() { return ListarMateriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listar_materia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listar-materia.page */ "./src/app/materia/listar-materia/listar-materia.page.ts");







var routes = [
    {
        path: '',
        component: _listar_materia_page__WEBPACK_IMPORTED_MODULE_6__["ListarMateriaPage"]
    }
];
var ListarMateriaPageModule = /** @class */ (function () {
    function ListarMateriaPageModule() {
    }
    ListarMateriaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_listar_materia_page__WEBPACK_IMPORTED_MODULE_6__["ListarMateriaPage"]]
        })
    ], ListarMateriaPageModule);
    return ListarMateriaPageModule;
}());



/***/ }),

/***/ "./src/app/materia/listar-materia/listar-materia.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/materia/listar-materia/listar-materia.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWEvbGlzdGFyLW1hdGVyaWEvbGlzdGFyLW1hdGVyaWEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/materia/listar-materia/listar-materia.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/materia/listar-materia/listar-materia.page.ts ***!
  \***************************************************************/
/*! exports provided: ListarMateriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarMateriaPage", function() { return ListarMateriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ListarMateriaPage = /** @class */ (function () {
    function ListarMateriaPage(fire) {
        this.fire = fire;
        this.listaMateria = this.fire.list('materia').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (lista) { return lista.map(function (linha) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: linha.payload.key }, linha.payload.val())); }); }));
    }
    ListarMateriaPage.prototype.excluir = function (key, materia) {
        this.fire.object('materia/' + key).remove();
        this.fire.object('message/' + key).remove();
    };
    ListarMateriaPage.prototype.ngOnInit = function () {
    };
    ListarMateriaPage.prototype.buscar = function () {
        var _this = this;
        if (this.busca != null) {
            this.listaMateria = this.fire.list('materia', function (ref) { return ref.equalTo(_this.busca); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (lista) { return lista.map(function (linha) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: linha.payload.key }, linha.payload.val())); }); }));
        }
        else {
            this.listaMateria = this.fire.list('materia').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (lista) { return lista.map(function (linha) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: linha.payload.key }, linha.payload.val())); }); }));
        }
    };
    ListarMateriaPage.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    ListarMateriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listar-materia',
            template: __webpack_require__(/*! raw-loader!./listar-materia.page.html */ "./node_modules/raw-loader/index.js!./src/app/materia/listar-materia/listar-materia.page.html"),
            styles: [__webpack_require__(/*! ./listar-materia.page.scss */ "./src/app/materia/listar-materia/listar-materia.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], ListarMateriaPage);
    return ListarMateriaPage;
}());



/***/ })

}]);
//# sourceMappingURL=materia-listar-materia-listar-materia-module-es5.js.map