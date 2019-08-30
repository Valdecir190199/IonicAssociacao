(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["curso-curso-listar-curso-listar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/curso/curso-listar/curso-listar.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/curso/curso-listar/curso-listar.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Lista de Cursos</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let curso of listaCursos$ | async\">\n      <ion-label>{{ curso.nome }}</ion-label>\n      <ion-label>{{ curso.ano }}</ion-label>\n      <ion-button *ngIf=\"(user_id | async) == curso.user_id\" expand=\"full\" shape=\"round\" color=\"danger\"\n        (click)=\"excluir(curso.key, curso)\">Excluir</ion-button>\n\n    </ion-item>\n  <ion-item>\n    <ion-input [(ngModel)]=\"buscarCurso\"></ion-input>\n    <ion-button expand=\"full\" shape=\"round\" color=\"danger\" (click)=\"buscar()\">busca</ion-button>\n  </ion-item>\n  </ion-list>\n  \n  <ion-button expand=\"full\" shape=\"round\" href=\"salvar-curso\"> Novo </ion-button>\n  <ion-button expand=\"full\" shape=\"round\" href=\"pagina\">Voltar</ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/curso/curso-listar/curso-listar.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/curso/curso-listar/curso-listar.module.ts ***!
  \***********************************************************/
/*! exports provided: CursoListarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoListarPageModule", function() { return CursoListarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _curso_listar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./curso-listar.page */ "./src/app/curso/curso-listar/curso-listar.page.ts");







const routes = [
    {
        path: '',
        component: _curso_listar_page__WEBPACK_IMPORTED_MODULE_6__["CursoListarPage"]
    }
];
let CursoListarPageModule = class CursoListarPageModule {
};
CursoListarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_curso_listar_page__WEBPACK_IMPORTED_MODULE_6__["CursoListarPage"]]
    })
], CursoListarPageModule);



/***/ }),

/***/ "./src/app/curso/curso-listar/curso-listar.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/curso/curso-listar/curso-listar.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cnNvL2N1cnNvLWxpc3Rhci9jdXJzby1saXN0YXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/curso/curso-listar/curso-listar.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/curso/curso-listar/curso-listar.page.ts ***!
  \*********************************************************/
/*! exports provided: CursoListarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoListarPage", function() { return CursoListarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");




let CursoListarPage = class CursoListarPage {
    constructor(fire) {
        this.fire = fire;
        this.listaCursos$ = this.fire.list('curso').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(lista => lista.map(linha => (Object.assign({ key: linha.payload.key }, linha.payload.val())))));
    }
    excluir(key, curso) {
        this.fire.object('curso/' + key).remove();
        this.fire.object('message/' + key).remove();
    }
    ngOnInit() {
    }
    buscar() {
        this.listaCursos$ = this.fire.list('curso', ref => ref.orderByChild("ano")).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(lista => lista.map(linha => (Object.assign({ key: linha.payload.key }, linha.payload.val())))));
    }
};
CursoListarPage.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
];
CursoListarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-curso-listar',
        template: __webpack_require__(/*! raw-loader!./curso-listar.page.html */ "./node_modules/raw-loader/index.js!./src/app/curso/curso-listar/curso-listar.page.html"),
        styles: [__webpack_require__(/*! ./curso-listar.page.scss */ "./src/app/curso/curso-listar/curso-listar.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
], CursoListarPage);



/***/ })

}]);
//# sourceMappingURL=curso-curso-listar-curso-listar-module-es2015.js.map