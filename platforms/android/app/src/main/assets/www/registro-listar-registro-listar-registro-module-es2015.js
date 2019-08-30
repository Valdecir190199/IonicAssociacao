(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-listar-registro-listar-registro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/registro/listar-registro/listar-registro.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/registro/listar-registro/listar-registro.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>listar-registro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n\n    <ion-item *ngFor=\"let registro of listaRegistro | async\">\n  \n\n      <ion-label> \n        {{ registro.data }} -\n     {{ registro.conteudo }} \n    {{ registro.conceito }} </ion-label>\n    <ion-label>\n<ion-button *ngIf=\"(user_id | async) == registro.user_id\" expand=\"full\" shape=\"round\" color=\"danger\"\n  (click)=\"excluir(registro.key, curso)\">Excluir</ion-button>\n     </ion-label>\n\n    </ion-item>\n  </ion-list>\n  <ion-button expand=\"full\" shape=\"round\" href=\"salvar-registro\">Novo</ion-button>\n  <ion-button expand=\"full\" shape=\"round\" href=\"pagina\">Voltar</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/registro/listar-registro/listar-registro.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/registro/listar-registro/listar-registro.module.ts ***!
  \********************************************************************/
/*! exports provided: ListarRegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarRegistroPageModule", function() { return ListarRegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listar_registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listar-registro.page */ "./src/app/registro/listar-registro/listar-registro.page.ts");







const routes = [
    {
        path: '',
        component: _listar_registro_page__WEBPACK_IMPORTED_MODULE_6__["ListarRegistroPage"]
    }
];
let ListarRegistroPageModule = class ListarRegistroPageModule {
};
ListarRegistroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_listar_registro_page__WEBPACK_IMPORTED_MODULE_6__["ListarRegistroPage"]]
    })
], ListarRegistroPageModule);



/***/ }),

/***/ "./src/app/registro/listar-registro/listar-registro.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/registro/listar-registro/listar-registro.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJvL2xpc3Rhci1yZWdpc3Ryby9saXN0YXItcmVnaXN0cm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/registro/listar-registro/listar-registro.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/registro/listar-registro/listar-registro.page.ts ***!
  \******************************************************************/
/*! exports provided: ListarRegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarRegistroPage", function() { return ListarRegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ListarRegistroPage = class ListarRegistroPage {
    constructor(fire) {
        this.fire = fire;
        this.listaRegistro = this.fire.list('registro').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(lista => lista.map(linha => (Object.assign({ key: linha.payload.key }, linha.payload.val())))));
    }
    ngOnInit() {
    }
    excluir(key, registro) {
        this.fire.object('registro/' + key).remove();
        this.fire.object('message/' + key).remove();
    }
};
ListarRegistroPage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
ListarRegistroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listar-registro',
        template: __webpack_require__(/*! raw-loader!./listar-registro.page.html */ "./node_modules/raw-loader/index.js!./src/app/registro/listar-registro/listar-registro.page.html"),
        styles: [__webpack_require__(/*! ./listar-registro.page.scss */ "./src/app/registro/listar-registro/listar-registro.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
], ListarRegistroPage);



/***/ })

}]);
//# sourceMappingURL=registro-listar-registro-listar-registro-module-es2015.js.map