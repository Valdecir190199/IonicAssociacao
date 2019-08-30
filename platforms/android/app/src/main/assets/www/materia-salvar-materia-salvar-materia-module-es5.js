(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["materia-salvar-materia-salvar-materia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/materia/salvar-materia/salvar-materia.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/materia/salvar-materia/salvar-materia.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-item>\n    <ion-label style=\"color: brown \" position=\"floating\">Materia</ion-label>\n    <ion-input name=\"nome\" [(ngModel)]=\"materia.nome\"></ion-input>\n  </ion-item>\n  <ion-item> \n    <ion-label style=\"color: brown \" position=\"floating\">Curso</ion-label>\n    <ion-select [(ngModel)]=\"materia.curso\">\n      <ion-select-option *ngFor='let curso of listaCurso | async' [value]=\"curso\">\n        {{curso.nome}}\n        {{curso.ano}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-button expand=\"full\" shape=\"round\" (click)=\"salvar()\">Adicionar Nova Materia</ion-button>\n  <ion-button expand=\"full\" shape=\"round\" href = \"pagina\">Voltar</ion-button>\n</ion-content>\n<ion-button href = \"listar-materia\"> Materias </ion-button>\n"

/***/ }),

/***/ "./src/app/materia/entidade/materia.ts":
/*!*********************************************!*\
  !*** ./src/app/materia/entidade/materia.ts ***!
  \*********************************************/
/*! exports provided: Materia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Materia", function() { return Materia; });
var Materia = /** @class */ (function () {
    function Materia() {
    }
    return Materia;
}());



/***/ }),

/***/ "./src/app/materia/salvar-materia/salvar-materia.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/materia/salvar-materia/salvar-materia.module.ts ***!
  \*****************************************************************/
/*! exports provided: SalvarMateriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalvarMateriaPageModule", function() { return SalvarMateriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _salvar_materia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salvar-materia.page */ "./src/app/materia/salvar-materia/salvar-materia.page.ts");







var routes = [
    {
        path: '',
        component: _salvar_materia_page__WEBPACK_IMPORTED_MODULE_6__["SalvarMateriaPage"]
    }
];
var SalvarMateriaPageModule = /** @class */ (function () {
    function SalvarMateriaPageModule() {
    }
    SalvarMateriaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_salvar_materia_page__WEBPACK_IMPORTED_MODULE_6__["SalvarMateriaPage"]]
        })
    ], SalvarMateriaPageModule);
    return SalvarMateriaPageModule;
}());



/***/ }),

/***/ "./src/app/materia/salvar-materia/salvar-materia.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/materia/salvar-materia/salvar-materia.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWEvc2FsdmFyLW1hdGVyaWEvc2FsdmFyLW1hdGVyaWEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/materia/salvar-materia/salvar-materia.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/materia/salvar-materia/salvar-materia.page.ts ***!
  \***************************************************************/
/*! exports provided: SalvarMateriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalvarMateriaPage", function() { return SalvarMateriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entidade_materia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entidade/materia */ "./src/app/materia/entidade/materia.ts");






var SalvarMateriaPage = /** @class */ (function () {
    function SalvarMateriaPage(fire, rota) {
        this.fire = fire;
        this.rota = rota;
        this.materia = new _entidade_materia__WEBPACK_IMPORTED_MODULE_5__["Materia"]();
        this.listaCurso = this.fire.list('curso').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (lista) { return lista.map(function (linha) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: linha.payload.key }, linha.payload.val())); }); }));
    }
    SalvarMateriaPage.prototype.salvar = function () {
        this.fire.list('materia').push(this.materia);
        this.materia = new _entidade_materia__WEBPACK_IMPORTED_MODULE_5__["Materia"]();
        this.rota.navigate(['pagina']);
    };
    SalvarMateriaPage.prototype.ngOnInit = function () {
    };
    SalvarMateriaPage.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    SalvarMateriaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salvar-materia',
            template: __webpack_require__(/*! raw-loader!./salvar-materia.page.html */ "./node_modules/raw-loader/index.js!./src/app/materia/salvar-materia/salvar-materia.page.html"),
            styles: [__webpack_require__(/*! ./salvar-materia.page.scss */ "./src/app/materia/salvar-materia/salvar-materia.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SalvarMateriaPage);
    return SalvarMateriaPage;
}());



/***/ })

}]);
//# sourceMappingURL=materia-salvar-materia-salvar-materia-module-es5.js.map