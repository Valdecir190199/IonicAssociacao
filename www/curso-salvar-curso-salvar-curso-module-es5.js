(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["curso-salvar-curso-salvar-curso-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/curso/salvar-curso/salvar-curso.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/curso/salvar-curso/salvar-curso.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>salvar-curso</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-content>\n      <label style=\"color: brown \">Nome</label>\n        <ion-input style=\"   border-radius:4px;\n    -moz-border-radius:4px;\n    -webkit-border-radius:4px;\n    box-shadow: 1px 1px 2px #333333;    \n    -moz-box-shadow: 1px 1px 2px #333333;\n    -webkit-box-shadow: 1px 1px 2px #333333;\n    background: #cccccc; \n    border:1px solid #000000;\n    width:100%\" type=\"text\" name=\"nome\" [(ngModel)]=\"curso.nome\"></ion-input>\n        <label style=\"color: brown \">Ano</label>\n        <ion-input style=\"   border-radius:4px;\n    -moz-border-radius:4px;\n    -webkit-border-radius:4px;\n    box-shadow: 1px 1px 2px #333333;    \n    -moz-box-shadow: 1px 1px 2px #333333;\n    -webkit-box-shadow: 1px 1px 2px #333333;\n    background: #cccccc; \n    border:1px solid #000000;\n    width:100%\" type=\"number\" name=\"ano\" [(ngModel)]=\"curso.ano\"></ion-input>\n        <ion-button expand = \"full\" shape = \"round\" (click)=\"salvar()\">Salvar novo Curso</ion-button>\n        <ion-button style=\"margin-top: 150x\" expand=\"full\" shape=\"round\" href=\"curso-listar\"> Cursos </ion-button>\n        <ion-button expand=\"full\" shape=\"round\" href=\"pagina\">Voltar</ion-button>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/curso/entidade/curso.ts":
/*!*****************************************!*\
  !*** ./src/app/curso/entidade/curso.ts ***!
  \*****************************************/
/*! exports provided: Curso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Curso", function() { return Curso; });
var Curso = /** @class */ (function () {
    function Curso() {
    }
    return Curso;
}());



/***/ }),

/***/ "./src/app/curso/salvar-curso/salvar-curso.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/curso/salvar-curso/salvar-curso.module.ts ***!
  \***********************************************************/
/*! exports provided: SalvarCursoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalvarCursoPageModule", function() { return SalvarCursoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _salvar_curso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salvar-curso.page */ "./src/app/curso/salvar-curso/salvar-curso.page.ts");







var routes = [
    {
        path: '',
        component: _salvar_curso_page__WEBPACK_IMPORTED_MODULE_6__["SalvarCursoPage"]
    }
];
var SalvarCursoPageModule = /** @class */ (function () {
    function SalvarCursoPageModule() {
    }
    SalvarCursoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_salvar_curso_page__WEBPACK_IMPORTED_MODULE_6__["SalvarCursoPage"]]
        })
    ], SalvarCursoPageModule);
    return SalvarCursoPageModule;
}());



/***/ }),

/***/ "./src/app/curso/salvar-curso/salvar-curso.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/curso/salvar-curso/salvar-curso.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cnNvL3NhbHZhci1jdXJzby9zYWx2YXItY3Vyc28ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/curso/salvar-curso/salvar-curso.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/curso/salvar-curso/salvar-curso.page.ts ***!
  \*********************************************************/
/*! exports provided: SalvarCursoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalvarCursoPage", function() { return SalvarCursoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entidade_curso__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entidade/curso */ "./src/app/curso/entidade/curso.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SalvarCursoPage = /** @class */ (function () {
    function SalvarCursoPage(banco, rota, route) {
        this.banco = banco;
        this.rota = rota;
        this.route = route;
        this.curso = new _entidade_curso__WEBPACK_IMPORTED_MODULE_2__["Curso"]();
    }
    SalvarCursoPage.prototype.ngOnInit = function () {
    };
    SalvarCursoPage.prototype.salvar = function () {
        if (this.validForm()) {
            if (this.key) {
                this.banco.object('curso/' + this.key).update(this.curso);
            }
            else {
                this.banco.list('curso').push(this.curso);
            }
            this.curso = new _entidade_curso__WEBPACK_IMPORTED_MODULE_2__["Curso"]();
            this.rota.navigate(['curso-listar']);
        }
    };
    SalvarCursoPage.prototype.validForm = function () {
        if (this.curso.nome && this.curso.ano) {
            this.error = "";
            return true;
        }
        else {
            this.error = "Preencha todos os campos";
            return false;
        }
    };
    SalvarCursoPage.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    SalvarCursoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salvar-curso',
            template: __webpack_require__(/*! raw-loader!./salvar-curso.page.html */ "./node_modules/raw-loader/index.js!./src/app/curso/salvar-curso/salvar-curso.page.html"),
            styles: [__webpack_require__(/*! ./salvar-curso.page.scss */ "./src/app/curso/salvar-curso/salvar-curso.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SalvarCursoPage);
    return SalvarCursoPage;
}());



/***/ })

}]);
//# sourceMappingURL=curso-salvar-curso-salvar-curso-module-es5.js.map