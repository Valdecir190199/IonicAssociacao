(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-salvar-registro-salvar-registro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/registro/salvar-registro/salvar-registro.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registro/salvar-registro/salvar-registro.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>salvar-registro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item>\n    <ion-label style=\"color: brown \"  position=\"floating\">Data</ion-label>\n    <ion-datetime displayFormat=\"MMM DD,YYYY\" [(ngModel)]=\"registro.data\"></ion-datetime>\n    <ion-label style=\"color: brown\" position=\"floating\">Conceito</ion-label>\n    <ion-input  name=\"nome\" [(ngModel)]=\"registro.conceito\"></ion-input>\n    <ion-label style=\"color: brown\" position=\"floating\">Conteudo</ion-label>\n    <ion-input name=\"nome\" [(ngModel)]=\"registro.conteudo\"></ion-input>\n    </ion-item>\n    <ion-item>\n    <ion-label style=\"color: brown \" position=\"floating\">Materia</ion-label>\n    <ion-select [(ngModel)]=\"registro.materia\">\n    <ion-select-option *ngFor='let materia of listaMateria | async' [value]=\"materia\" >\n    {{materia.nome }} \n    \n    </ion-select-option>\n    </ion-select>\n    </ion-item>\n    <ion-button expand=\"full\" shape=\"round\" (click)=\"salvar()\">salvar</ion-button>\n    </ion-content>\n    <ion-button href = \"listar-materia\">Voltar</ion-button>\n    <ion-button href = \"listar-registro\">Listar</ion-button>\n"

/***/ }),

/***/ "./src/app/registro/entidade/registro.ts":
/*!***********************************************!*\
  !*** ./src/app/registro/entidade/registro.ts ***!
  \***********************************************/
/*! exports provided: Registro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registro", function() { return Registro; });
var Registro = /** @class */ (function () {
    function Registro() {
        this.data = new Date();
    }
    return Registro;
}());



/***/ }),

/***/ "./src/app/registro/salvar-registro/salvar-registro.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/registro/salvar-registro/salvar-registro.module.ts ***!
  \********************************************************************/
/*! exports provided: SalvarRegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalvarRegistroPageModule", function() { return SalvarRegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _salvar_registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salvar-registro.page */ "./src/app/registro/salvar-registro/salvar-registro.page.ts");







var routes = [
    {
        path: '',
        component: _salvar_registro_page__WEBPACK_IMPORTED_MODULE_6__["SalvarRegistroPage"]
    }
];
var SalvarRegistroPageModule = /** @class */ (function () {
    function SalvarRegistroPageModule() {
    }
    SalvarRegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_salvar_registro_page__WEBPACK_IMPORTED_MODULE_6__["SalvarRegistroPage"]]
        })
    ], SalvarRegistroPageModule);
    return SalvarRegistroPageModule;
}());



/***/ }),

/***/ "./src/app/registro/salvar-registro/salvar-registro.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/registro/salvar-registro/salvar-registro.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJvL3NhbHZhci1yZWdpc3Ryby9zYWx2YXItcmVnaXN0cm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/registro/salvar-registro/salvar-registro.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/registro/salvar-registro/salvar-registro.page.ts ***!
  \******************************************************************/
/*! exports provided: SalvarRegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalvarRegistroPage", function() { return SalvarRegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entidade_registro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entidade/registro */ "./src/app/registro/entidade/registro.ts");






var SalvarRegistroPage = /** @class */ (function () {
    function SalvarRegistroPage(fire, rota) {
        this.fire = fire;
        this.rota = rota;
        this.registro = new _entidade_registro__WEBPACK_IMPORTED_MODULE_5__["Registro"]();
        this.listaMateria = this.fire.list('materia').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (lista) { return lista.map(function (linha) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: linha.payload.key }, linha.payload.val())); }); }));
    }
    SalvarRegistroPage.prototype.salvar = function () {
        this.fire.list('registro').push(this.registro);
        this.registro = new _entidade_registro__WEBPACK_IMPORTED_MODULE_5__["Registro"]();
        this.rota.navigate(['listar-registro']);
        this.registro.materia = this.registro.materia;
    };
    SalvarRegistroPage.prototype.ngOnInit = function () {
    };
    SalvarRegistroPage.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    SalvarRegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salvar-registro',
            template: __webpack_require__(/*! raw-loader!./salvar-registro.page.html */ "./node_modules/raw-loader/index.js!./src/app/registro/salvar-registro/salvar-registro.page.html"),
            styles: [__webpack_require__(/*! ./salvar-registro.page.scss */ "./src/app/registro/salvar-registro/salvar-registro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SalvarRegistroPage);
    return SalvarRegistroPage;
}());



/***/ })

}]);
//# sourceMappingURL=registro-salvar-registro-salvar-registro-module-es5.js.map