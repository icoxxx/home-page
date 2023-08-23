/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Barlow/Barlow-Regular.ttf */ "./src/fonts/Barlow/Barlow-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Futura/FuturaPTLight.otf */ "./src/fonts/Futura/FuturaPTLight.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf */ "./src/fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/rosmarie-signature/TheRosmarieSignature-Regular.otf */ "./src/fonts/rosmarie-signature/TheRosmarieSignature-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: Barlow;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: Futura;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
    font-family: Playfair;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

@font-face {
    font-family: Rosemary;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

*{
    box-sizing: border-box;
}

body{
    margin: 0;
    padding: 0;
}

#header-1-container{
    height: 150px;
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-left: 10%;
    padding-right: 10%;
}

#icon{
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 10%;
    margin-top: 20px;
}

#icon a, .icon-footer a{
    text-decoration: none;
    color: #2F2E2C;
    font-size: 20px;
}

#language{
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 10%;
    margin-top: 20px;
    font-family: Barlow;
}


.instagram{
    margin-left: 10px;
}

.fa-facebook:hover{
    color: #3b5998;
}

.fa-instagram:hover{
    color: #c32aa3;
}

#language span:first-child, #language span:last-child{
    cursor: pointer;
}


#header-buttons{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    font-family: Barlow;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 3.2px;
}

.btn{
    margin-left: 15px;
    margin-right: 15px;
    cursor: pointer;
}



#hamContainer {
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    z-index: 101;
    display: none;
}
  
.bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
  
}
  
.change .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
}
  
.change .bar2 {opacity: 0;}
  
.change .bar3 {
    transform: translate(0, -11px) rotate(45deg);
}

.menu__box {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 80px 0;
    background-color: #ECEFF1;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
    z-index: 100;
}

.menu-1, .menu-2{
    list-style: none;
    margin-top: 20px;
}


.menu__item, .menu__img {
    display: block;
    padding: 12px 24px;
    color: #333;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: .25s;
    
}
.menu__item:hover {
    background-color: #CFD8DC;
}
  
.menuActive{
    left: 0;
    transition-duration: .25s;
}
  
.stopScrolling{
    height: 100%;
    overflow: hidden;
}

.hide{
    display: none;
}

#hero-container{
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
}

.heroTextContainer{
    position: relative;
    padding-left: 10%;
    padding-right: 10%;
}

#signature{
    font-family: Rosemary;
    transform: rotate(-15.5deg);
    font-size: 60px;
    line-height: 30px;
}

.heroText{
    text-align: center;
}

.redefine{
    font-family: Playfair;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 50px;
}

.shaping{
    font-family: Barlow;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px
}

#title-container, #shop-title-container, #article-title-container{
    height: 150px;
    width: 100%;
    position: relative;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}

#title-container p:first-child, #shop-title-container p:first-child, #article-title-container p:first-child{
    font-family: Playfair Display;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 50px;
    transition: 0.5s;
}

#title-container p:last-child, #shop-title-container p:last-child, #article-title-container p:last-child{
    font-family: Barlow;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 3.6px;
    text-decoration: underline;
    text-underline-offset: 15px;
    cursor: pointer;
    transition: 0.5s;
}

#projectsContainer{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-right: 10%;
    margin-bottom: 100px;
}

.tintyava{
    position: relative;
    max-width: 40%;
    max-height: 700px;
    margin-left: 10%;
    margin-bottom: 50px;
}

.mandur{
    position: relative;
    margin-left: 50px;
    max-width: 40%;
    max-height: 700px;
    margin-bottom: 50px;
}

.tintyava img, .mandur img{
    object-fit: cover;
}

.project{
    position: relative;
    width: auto;
    height: auto;
}

.projectName{
    position: absolute;
    bottom: -50px;
    font-family: Playfair;
    font-size: 20px;
    line-height: 50px; 
    text-transform: uppercase;
}

.details{
    position: absolute;
    right: 0;
    bottom: -50px;
    font-family: Barlow;
    font-size: 15px;
    line-height: 50px;
    letter-spacing: 3.6px;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 15px;
}


.elegant-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.col {
    position: relative;
    width: 50%;
    aspect-ratio: 1/1;
    overflow: hidden;
}

.background {
    background-color: #F6F4F1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15%;
}

.background span:nth-child(1){
    display: block;
    font-family: Playfair;
    line-height: 60px;
    font-size: 40px;
}

.background span:nth-child(2){
    display: block;
    font-family: Barlow;
    font-size: 15px;
    line-height: 30px; 
}

.background span:nth-child(3){
    display: block;
    font-family: Barlow;
    font-size: 15px;
    line-height: 50px;
    letter-spacing: 3.6px;
    text-transform: uppercase;
    text-decoration: underline;
    text-underline-offset: 10px;
    cursor: pointer;
}

.col img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

#shopContainer{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;
    padding-right: 10%;
}

.shop-item{
    position: relative;
    margin-left: 10%;
    margin-bottom: 50px;
}

.item-img-container, .blog-img-container{
    position: relative;
    width: auto;
    height: auto;
}

.shop-item-name{
    position: absolute;
    bottom: -50px;
    font-family: Playfair;
    font-size: 20px;
    line-height: 50px; 
    text-transform: uppercase;
}

.shop-text{
    position: absolute;
    right: 0;
    bottom: -50px;
    font-family: Barlow;
    font-size: 15px;
    line-height: 50px;
    letter-spacing: 3.6px;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 15px;
}

.shop-img{
    cursor: pointer;
}

#blogContainer{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 10%;
    padding-left: 10%;
    transition: 0.5s;
}

.blog-item{
    position: relative;
    margin-bottom: 180px;
}

.blog-item-name{
    position: absolute;
    bottom: -150px;
    font-family: Playfair;
    font-size: 20px;
    line-height: 50px; 
    text-transform: uppercase;
}

.blog-img{
    display: block;
    width: 600px;
    height: 650px;
}

.blog-item-name div:nth-child(1){
    display: inline-block;
    font-size: 10px;
    font-style: italic;
    font-weight: 100;
}

.blog-item-name div:nth-child(2){
    font-family: Playfair;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
}

#dot{
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: black;
    margin-left: 5px;
    margin-right: 5px;
}

#blog-read{
    display: inline-block;
}

#article-text{
    font-family: Barlow;
    font-size: 12px;
    font-weight: 400;
    line-height: 60px;
}

#read-more{
    font-family: Futura;
    font-size: 12px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 3.6px;
    text-decoration: underline;
    text-underline-offset: 9px;
    cursor: pointer;
}

.minimalist{
    position: relative;
    width: 100%;
    height: 570px;
    background-color: #F6F4F1;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.minimalistText{
    margin-bottom: 30px;
    font-family: Playfair;
    font-size: 40px;
    font-weight: 400;
    line-height: 50px;
    text-transform: uppercase;
}

.second-paragraph{
    font-family: Barlow;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; 
    text-align: center;
    margin-bottom: 50px;
}

.more-text{
    text-align: center;
}

#enquire{
    font-family: Barlow;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 3.6px;
    text-decoration: underline;
    text-underline-offset: 12px;
    cursor: pointer;
}

.footer-container{
    position: relative;
    width: 100%;
    min-height: 410px;
}

.footer-wrapper{
    position: absolute;
    width: 80%;
    height: 300px;
    margin-left: 10%;
    margin-right: 10%;
    bottom: 20px;
}

.flex-row{
    display: flex;
    width: 100%;
    bottom: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
}

.logo-footer{
    position: relative;
}

.icons-footer{
    position: absolute;
    bottom: 50px;
}

.fa-linkedin:hover{
    color: rgb(57, 57, 222);
}

.icon-footer{
    display: inline-block;
    color: #888681;
}

.icon-footer i:nth-child(1){
    margin-right: 15px;
}

.pages-footer{
    font-family: Barlow;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 4px;
    margin-bottom: 50px;
    margin-left: 20px;
}

.footer-links{
    display: block;
    text-decoration: none;
    font-family: Barlow;
    font-size: 10px;
    font-weight: 250;
    margin-bottom: 25.5px;
    color: black;
}

.form{
    display: block;
    text-decoration: none;
    font-family: Barlow;
    font-size: 10px;
    font-weight: 250;
    margin-bottom: 10px;
}

#email{
    width: 300px;
    height: 50px;
}

.pages-margin{
    margin-top: 30px;
}

#subscribe-button {
    border: none;            
    background: none;        
    padding: 0;              
    font-size: inherit;      
    font-family: inherit;    
    cursor: pointer;         
    color: #333; 
    outline: none;
    display: block; 
    margin-top: 12px;
    margin-left: 70%;         
}

#subscribe-button::before{
    content: "";
    display: none;
    width: 100%;
    height: 1px;
    background-color: black;
    position: relative;
    bottom: -5px;
}

#alert, #alert-2 {
    position: fixed;
    display: none;
    z-index: 99;
    bottom: 0;
    padding: 20px;
    text-align: center;
    color: white;
    height: 60px;
    width: 100%;
}

#alert{
    background-color: rgb(104, 182, 138);
}

#alert-2{
    background-color:rgb(208, 95, 102) ;
}

  
.closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
}
  
  .closebtn:hover {
    color: black;
}


@media screen and (max-width: 1500px) {
    #blogContainer{
        justify-content: center;
    }
    
}

@media screen and (max-width: 800px) {
    .blog-img{
        width: 100%;
        height: auto;
    }
    
    #article-title-container p:first-child{
        font-size: 25px;
    }
    
    #article-title-container p:last-child{
        font-size: 10px;
        text-underline-offset: 9px;
    }

    .minimalistText{
        transition: 0.5s;
        font-size: 20px;
    }

    .second-paragraph{
        transition: 0.5s;
        font-size: 12px;
    }


}




@media  screen and (max-width: 980px) {
    #shop-title-container p:nth-child(1){
        font-size: 25px;
    }

    #shop-title-container p:nth-child(2){
        font-size: 10px;
        text-underline-offset: 9px;
    }
}


@media screen and (max-width: 900px) {
    .background span:nth-child(1){
        transition: 0.5s;
        font-size: 30px;
    }
    
    .background span:nth-child(2){
        transition: 0.5s;
        font-size: 12px;

    }
    
    .background span:nth-child(3){
        transition: 0.5s;
        font-size: 12px;
        text-underline-offset: 8px;

    }
}

@media screen and (max-width: 600px) {
    .background span:nth-child(1){
        transition: 0.5s;
        font-size: 20px;
    }
    
    .background span:nth-child(2){
        transition: 0.5s;
        font-size: 10px;
        line-height: 20px;

    }
    
    .background span:nth-child(3){
        transition: 0.5s;
        font-size: 10px;
        text-underline-offset: 8px;

    }
}


@media screen and (max-width:800px){
    #projectsContainer{
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 0;
    }
    .mandur{
        margin-left: 10%;
    }
    .mandur, .tintyava{
        margin-bottom: 100px;
        width: auto;
        height: auto;
    }
}


@media screen and (max-width:1060px){
    #projectsContainer{
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 0;
    }
    .mandur{
        margin-left: 10%;
    }
    .mandur, .tintyava{
        max-width: 650px;
        margin-bottom: 100px;
    }

    .projectName{
        font-size: 15px;
    }

    .details{
        font-size: 10px;
        text-underline-offset: 9px;
    }
}


@media screen and (max-width:1060px) {
    #title-container p:first-child{
        font-size: 25px;
    }

    #title-container p:last-child{
        font-size: 10px;
        text-underline-offset: 9px;
    }

}


@media screen and (max-width:999px) {
    .text{
        display: none;
    }
    #language{
        position: relative;
        margin: 0 auto;
    }

    #icon{
        display: none;
    }

    #header-1-container{
        justify-content: space-between;
    }

    #header-buttons{
        margin-left: 0;
    }

    #hamContainer{
        position: relative;
        display: inline-block;
        margin: 0 auto;
    }
  }
`, "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: Barlow;\n    src: url(./fonts/Barlow/Barlow-Regular.ttf);\n}\n\n@font-face {\n    font-family: Futura;\n    src: url(./fonts/Futura/FuturaPTLight.otf);\n}\n\n@font-face {\n    font-family: Playfair;\n    src: url(./fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf);\n}\n\n@font-face {\n    font-family: Rosemary;\n    src: url(./fonts/rosmarie-signature/TheRosmarieSignature-Regular.otf);\n}\n\n*{\n    box-sizing: border-box;\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n}\n\n#header-1-container{\n    height: 150px;\n    width: 100%;\n    position: relative;\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    padding-left: 10%;\n    padding-right: 10%;\n}\n\n#icon{\n    position: absolute;\n    left: 0;\n    top: 0;\n    margin-left: 10%;\n    margin-top: 20px;\n}\n\n#icon a, .icon-footer a{\n    text-decoration: none;\n    color: #2F2E2C;\n    font-size: 20px;\n}\n\n#language{\n    position: absolute;\n    right: 0;\n    top: 0;\n    margin-right: 10%;\n    margin-top: 20px;\n    font-family: Barlow;\n}\n\n\n.instagram{\n    margin-left: 10px;\n}\n\n.fa-facebook:hover{\n    color: #3b5998;\n}\n\n.fa-instagram:hover{\n    color: #c32aa3;\n}\n\n#language span:first-child, #language span:last-child{\n    cursor: pointer;\n}\n\n\n#header-buttons{\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: space-around;\n    align-items: center;\n    flex-direction: row;\n    font-family: Barlow;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: normal;\n    letter-spacing: 3.2px;\n}\n\n.btn{\n    margin-left: 15px;\n    margin-right: 15px;\n    cursor: pointer;\n}\n\n\n\n#hamContainer {\n    position: absolute;\n    left: 0;\n    top: 0;\n    cursor: pointer;\n    z-index: 101;\n    display: none;\n}\n  \n.bar1, .bar2, .bar3 {\n    width: 35px;\n    height: 5px;\n    background-color: #333;\n    margin: 6px 0;\n    transition: 0.4s;\n  \n}\n  \n.change .bar1 {\n    transform: translate(0, 11px) rotate(-45deg);\n}\n  \n.change .bar2 {opacity: 0;}\n  \n.change .bar3 {\n    transform: translate(0, -11px) rotate(45deg);\n}\n\n.menu__box {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n    position: fixed;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100vh;\n    margin: 0;\n    padding: 80px 0;\n    background-color: #ECEFF1;\n    box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);\n    z-index: 100;\n}\n\n.menu-1, .menu-2{\n    list-style: none;\n    margin-top: 20px;\n}\n\n\n.menu__item, .menu__img {\n    display: block;\n    padding: 12px 24px;\n    color: #333;\n    font-family: 'Roboto', sans-serif;\n    font-size: 20px;\n    font-weight: 600;\n    text-decoration: none;\n    transition-duration: .25s;\n    \n}\n.menu__item:hover {\n    background-color: #CFD8DC;\n}\n  \n.menuActive{\n    left: 0;\n    transition-duration: .25s;\n}\n  \n.stopScrolling{\n    height: 100%;\n    overflow: hidden;\n}\n\n.hide{\n    display: none;\n}\n\n#hero-container{\n    width: 100%;\n    padding-left: 10%;\n    padding-right: 10%;\n}\n\n.heroTextContainer{\n    position: relative;\n    padding-left: 10%;\n    padding-right: 10%;\n}\n\n#signature{\n    font-family: Rosemary;\n    transform: rotate(-15.5deg);\n    font-size: 60px;\n    line-height: 30px;\n}\n\n.heroText{\n    text-align: center;\n}\n\n.redefine{\n    font-family: Playfair;\n    font-size: 40px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 50px;\n}\n\n.shaping{\n    font-family: Barlow;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 30px\n}\n\n#title-container, #shop-title-container, #article-title-container{\n    height: 150px;\n    width: 100%;\n    position: relative;\n    padding-left: 10%;\n    padding-right: 10%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#title-container p:first-child, #shop-title-container p:first-child, #article-title-container p:first-child{\n    font-family: Playfair Display;\n    font-size: 40px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 50px;\n    transition: 0.5s;\n}\n\n#title-container p:last-child, #shop-title-container p:last-child, #article-title-container p:last-child{\n    font-family: Barlow;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    letter-spacing: 3.6px;\n    text-decoration: underline;\n    text-underline-offset: 15px;\n    cursor: pointer;\n    transition: 0.5s;\n}\n\n#projectsContainer{\n    position: relative;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    padding-right: 10%;\n    margin-bottom: 100px;\n}\n\n.tintyava{\n    position: relative;\n    max-width: 40%;\n    max-height: 700px;\n    margin-left: 10%;\n    margin-bottom: 50px;\n}\n\n.mandur{\n    position: relative;\n    margin-left: 50px;\n    max-width: 40%;\n    max-height: 700px;\n    margin-bottom: 50px;\n}\n\n.tintyava img, .mandur img{\n    object-fit: cover;\n}\n\n.project{\n    position: relative;\n    width: auto;\n    height: auto;\n}\n\n.projectName{\n    position: absolute;\n    bottom: -50px;\n    font-family: Playfair;\n    font-size: 20px;\n    line-height: 50px; \n    text-transform: uppercase;\n}\n\n.details{\n    position: absolute;\n    right: 0;\n    bottom: -50px;\n    font-family: Barlow;\n    font-size: 15px;\n    line-height: 50px;\n    letter-spacing: 3.6px;\n    text-transform: uppercase;\n    cursor: pointer;\n    text-decoration: underline;\n    text-underline-offset: 15px;\n}\n\n\n.elegant-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.col {\n    position: relative;\n    width: 50%;\n    aspect-ratio: 1/1;\n    overflow: hidden;\n}\n\n.background {\n    background-color: #F6F4F1;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-left: 15%;\n}\n\n.background span:nth-child(1){\n    display: block;\n    font-family: Playfair;\n    line-height: 60px;\n    font-size: 40px;\n}\n\n.background span:nth-child(2){\n    display: block;\n    font-family: Barlow;\n    font-size: 15px;\n    line-height: 30px; \n}\n\n.background span:nth-child(3){\n    display: block;\n    font-family: Barlow;\n    font-size: 15px;\n    line-height: 50px;\n    letter-spacing: 3.6px;\n    text-transform: uppercase;\n    text-decoration: underline;\n    text-underline-offset: 10px;\n    cursor: pointer;\n}\n\n.col img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n}\n\n#shopContainer{\n    position: relative;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content:center;\n    padding-right: 10%;\n}\n\n.shop-item{\n    position: relative;\n    margin-left: 10%;\n    margin-bottom: 50px;\n}\n\n.item-img-container, .blog-img-container{\n    position: relative;\n    width: auto;\n    height: auto;\n}\n\n.shop-item-name{\n    position: absolute;\n    bottom: -50px;\n    font-family: Playfair;\n    font-size: 20px;\n    line-height: 50px; \n    text-transform: uppercase;\n}\n\n.shop-text{\n    position: absolute;\n    right: 0;\n    bottom: -50px;\n    font-family: Barlow;\n    font-size: 15px;\n    line-height: 50px;\n    letter-spacing: 3.6px;\n    text-transform: uppercase;\n    cursor: pointer;\n    text-decoration: underline;\n    text-underline-offset: 15px;\n}\n\n.shop-img{\n    cursor: pointer;\n}\n\n#blogContainer{\n    position: relative;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    padding-right: 10%;\n    padding-left: 10%;\n    transition: 0.5s;\n}\n\n.blog-item{\n    position: relative;\n    margin-bottom: 180px;\n}\n\n.blog-item-name{\n    position: absolute;\n    bottom: -150px;\n    font-family: Playfair;\n    font-size: 20px;\n    line-height: 50px; \n    text-transform: uppercase;\n}\n\n.blog-img{\n    display: block;\n    width: 600px;\n    height: 650px;\n}\n\n.blog-item-name div:nth-child(1){\n    display: inline-block;\n    font-size: 10px;\n    font-style: italic;\n    font-weight: 100;\n}\n\n.blog-item-name div:nth-child(2){\n    font-family: Playfair;\n    font-size: 20px;\n    font-weight: 400;\n    line-height: 20px;\n}\n\n#dot{\n    display: inline-block;\n    width: 5px;\n    height: 5px;\n    border-radius: 50%;\n    background-color: black;\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n#blog-read{\n    display: inline-block;\n}\n\n#article-text{\n    font-family: Barlow;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 60px;\n}\n\n#read-more{\n    font-family: Futura;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 30px;\n    letter-spacing: 3.6px;\n    text-decoration: underline;\n    text-underline-offset: 9px;\n    cursor: pointer;\n}\n\n.minimalist{\n    position: relative;\n    width: 100%;\n    height: 570px;\n    background-color: #F6F4F1;\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.minimalistText{\n    margin-bottom: 30px;\n    font-family: Playfair;\n    font-size: 40px;\n    font-weight: 400;\n    line-height: 50px;\n    text-transform: uppercase;\n}\n\n.second-paragraph{\n    font-family: Barlow;\n    font-size: 15px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 30px; \n    text-align: center;\n    margin-bottom: 50px;\n}\n\n.more-text{\n    text-align: center;\n}\n\n#enquire{\n    font-family: Barlow;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 50px;\n    letter-spacing: 3.6px;\n    text-decoration: underline;\n    text-underline-offset: 12px;\n    cursor: pointer;\n}\n\n.footer-container{\n    position: relative;\n    width: 100%;\n    min-height: 410px;\n}\n\n.footer-wrapper{\n    position: absolute;\n    width: 80%;\n    height: 300px;\n    margin-left: 10%;\n    margin-right: 10%;\n    bottom: 20px;\n}\n\n.flex-row{\n    display: flex;\n    width: 100%;\n    bottom: 20px;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-content: center;\n}\n\n.logo-footer{\n    position: relative;\n}\n\n.icons-footer{\n    position: absolute;\n    bottom: 50px;\n}\n\n.fa-linkedin:hover{\n    color: rgb(57, 57, 222);\n}\n\n.icon-footer{\n    display: inline-block;\n    color: #888681;\n}\n\n.icon-footer i:nth-child(1){\n    margin-right: 15px;\n}\n\n.pages-footer{\n    font-family: Barlow;\n    font-size: 16px;\n    font-weight: 400;\n    letter-spacing: 4px;\n    margin-bottom: 50px;\n    margin-left: 20px;\n}\n\n.footer-links{\n    display: block;\n    text-decoration: none;\n    font-family: Barlow;\n    font-size: 10px;\n    font-weight: 250;\n    margin-bottom: 25.5px;\n    color: black;\n}\n\n.form{\n    display: block;\n    text-decoration: none;\n    font-family: Barlow;\n    font-size: 10px;\n    font-weight: 250;\n    margin-bottom: 10px;\n}\n\n#email{\n    width: 300px;\n    height: 50px;\n}\n\n.pages-margin{\n    margin-top: 30px;\n}\n\n#subscribe-button {\n    border: none;            \n    background: none;        \n    padding: 0;              \n    font-size: inherit;      \n    font-family: inherit;    \n    cursor: pointer;         \n    color: #333; \n    outline: none;\n    display: block; \n    margin-top: 12px;\n    margin-left: 70%;         \n}\n\n#subscribe-button::before{\n    content: \"\";\n    display: none;\n    width: 100%;\n    height: 1px;\n    background-color: black;\n    position: relative;\n    bottom: -5px;\n}\n\n#alert, #alert-2 {\n    position: fixed;\n    display: none;\n    z-index: 99;\n    bottom: 0;\n    padding: 20px;\n    text-align: center;\n    color: white;\n    height: 60px;\n    width: 100%;\n}\n\n#alert{\n    background-color: rgb(104, 182, 138);\n}\n\n#alert-2{\n    background-color:rgb(208, 95, 102) ;\n}\n\n  \n.closebtn {\n    margin-left: 15px;\n    color: white;\n    font-weight: bold;\n    float: right;\n    font-size: 22px;\n    line-height: 20px;\n    cursor: pointer;\n    transition: 0.3s;\n}\n  \n  .closebtn:hover {\n    color: black;\n}\n\n\n@media screen and (max-width: 1500px) {\n    #blogContainer{\n        justify-content: center;\n    }\n    \n}\n\n@media screen and (max-width: 800px) {\n    .blog-img{\n        width: 100%;\n        height: auto;\n    }\n    \n    #article-title-container p:first-child{\n        font-size: 25px;\n    }\n    \n    #article-title-container p:last-child{\n        font-size: 10px;\n        text-underline-offset: 9px;\n    }\n\n    .minimalistText{\n        transition: 0.5s;\n        font-size: 20px;\n    }\n\n    .second-paragraph{\n        transition: 0.5s;\n        font-size: 12px;\n    }\n\n\n}\n\n\n\n\n@media  screen and (max-width: 980px) {\n    #shop-title-container p:nth-child(1){\n        font-size: 25px;\n    }\n\n    #shop-title-container p:nth-child(2){\n        font-size: 10px;\n        text-underline-offset: 9px;\n    }\n}\n\n\n@media screen and (max-width: 900px) {\n    .background span:nth-child(1){\n        transition: 0.5s;\n        font-size: 30px;\n    }\n    \n    .background span:nth-child(2){\n        transition: 0.5s;\n        font-size: 12px;\n\n    }\n    \n    .background span:nth-child(3){\n        transition: 0.5s;\n        font-size: 12px;\n        text-underline-offset: 8px;\n\n    }\n}\n\n@media screen and (max-width: 600px) {\n    .background span:nth-child(1){\n        transition: 0.5s;\n        font-size: 20px;\n    }\n    \n    .background span:nth-child(2){\n        transition: 0.5s;\n        font-size: 10px;\n        line-height: 20px;\n\n    }\n    \n    .background span:nth-child(3){\n        transition: 0.5s;\n        font-size: 10px;\n        text-underline-offset: 8px;\n\n    }\n}\n\n\n@media screen and (max-width:800px){\n    #projectsContainer{\n        justify-content: center;\n        flex-wrap: wrap;\n        margin-bottom: 0;\n    }\n    .mandur{\n        margin-left: 10%;\n    }\n    .mandur, .tintyava{\n        margin-bottom: 100px;\n        width: auto;\n        height: auto;\n    }\n}\n\n\n@media screen and (max-width:1060px){\n    #projectsContainer{\n        justify-content: center;\n        flex-wrap: wrap;\n        margin-bottom: 0;\n    }\n    .mandur{\n        margin-left: 10%;\n    }\n    .mandur, .tintyava{\n        max-width: 650px;\n        margin-bottom: 100px;\n    }\n\n    .projectName{\n        font-size: 15px;\n    }\n\n    .details{\n        font-size: 10px;\n        text-underline-offset: 9px;\n    }\n}\n\n\n@media screen and (max-width:1060px) {\n    #title-container p:first-child{\n        font-size: 25px;\n    }\n\n    #title-container p:last-child{\n        font-size: 10px;\n        text-underline-offset: 9px;\n    }\n\n}\n\n\n@media screen and (max-width:999px) {\n    .text{\n        display: none;\n    }\n    #language{\n        position: relative;\n        margin: 0 auto;\n    }\n\n    #icon{\n        display: none;\n    }\n\n    #header-1-container{\n        justify-content: space-between;\n    }\n\n    #header-buttons{\n        margin-left: 0;\n    }\n\n    #hamContainer{\n        position: relative;\n        display: inline-block;\n        margin: 0 auto;\n    }\n  }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/emailjs-com/es/api/sendPost.js":
/*!*****************************************************!*\
  !*** ./node_modules/emailjs-com/es/api/sendPost.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendPost: () => (/* binding */ sendPost)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/EmailJSResponseStatus */ "./node_modules/emailjs-com/es/models/EmailJSResponseStatus.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "./node_modules/emailjs-com/es/store/store.js");


const sendPost = (url, data, headers = {}) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', ({ target }) => {
            const responseStatus = new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', ({ target }) => {
            reject(new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(target));
        });
        xhr.open('POST', _store_store__WEBPACK_IMPORTED_MODULE_1__.store._origin + url, true);
        Object.keys(headers).forEach((key) => {
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.send(data);
    });
};


/***/ }),

/***/ "./node_modules/emailjs-com/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/emailjs-com/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   init: () => (/* reexport safe */ _methods_init_init__WEBPACK_IMPORTED_MODULE_0__.init),
/* harmony export */   send: () => (/* reexport safe */ _methods_send_send__WEBPACK_IMPORTED_MODULE_1__.send),
/* harmony export */   sendForm: () => (/* reexport safe */ _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__.sendForm)
/* harmony export */ });
/* harmony import */ var _methods_init_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/init/init */ "./node_modules/emailjs-com/es/methods/init/init.js");
/* harmony import */ var _methods_send_send__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/send/send */ "./node_modules/emailjs-com/es/methods/send/send.js");
/* harmony import */ var _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/sendForm/sendForm */ "./node_modules/emailjs-com/es/methods/sendForm/sendForm.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    init: _methods_init_init__WEBPACK_IMPORTED_MODULE_0__.init,
    send: _methods_send_send__WEBPACK_IMPORTED_MODULE_1__.send,
    sendForm: _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__.sendForm,
});


/***/ }),

/***/ "./node_modules/emailjs-com/es/methods/init/init.js":
/*!**********************************************************!*\
  !*** ./node_modules/emailjs-com/es/methods/init/init.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/emailjs-com/es/store/store.js");

/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
const init = (userID, origin = 'https://api.emailjs.com') => {
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID = userID;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store._origin = origin;
};


/***/ }),

/***/ "./node_modules/emailjs-com/es/methods/send/send.js":
/*!**********************************************************!*\
  !*** ./node_modules/emailjs-com/es/methods/send/send.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   send: () => (/* binding */ send)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/emailjs-com/es/store/store.js");
/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ "./node_modules/emailjs-com/es/utils/validateParams.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/emailjs-com/es/api/sendPost.js");



/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = (serviceID, templateID, templatePrams, userID) => {
    const uID = userID || _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID;
    (0,_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__.validateParams)(uID, serviceID, templateID);
    const params = {
        lib_version: '3.2.0',
        user_id: uID,
        service_id: serviceID,
        template_id: templateID,
        template_params: templatePrams,
    };
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};


/***/ }),

/***/ "./node_modules/emailjs-com/es/methods/sendForm/sendForm.js":
/*!******************************************************************!*\
  !*** ./node_modules/emailjs-com/es/methods/sendForm/sendForm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendForm: () => (/* binding */ sendForm)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/emailjs-com/es/store/store.js");
/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ "./node_modules/emailjs-com/es/utils/validateParams.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/emailjs-com/es/api/sendPost.js");



const findHTMLForm = (form) => {
    let currentForm;
    if (typeof form === 'string') {
        currentForm = document.querySelector(form);
    }
    else {
        currentForm = form;
    }
    if (!currentForm || currentForm.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
    }
    return currentForm;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = (serviceID, templateID, form, userID) => {
    const uID = userID || _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID;
    const currentForm = findHTMLForm(form);
    (0,_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__.validateParams)(uID, serviceID, templateID);
    const formData = new FormData(currentForm);
    formData.append('lib_version', '3.2.0');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', uID);
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send-form', formData);
};


/***/ }),

/***/ "./node_modules/emailjs-com/es/models/EmailJSResponseStatus.js":
/*!*********************************************************************!*\
  !*** ./node_modules/emailjs-com/es/models/EmailJSResponseStatus.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailJSResponseStatus: () => (/* binding */ EmailJSResponseStatus)
/* harmony export */ });
class EmailJSResponseStatus {
    constructor(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
}


/***/ }),

/***/ "./node_modules/emailjs-com/es/store/store.js":
/*!****************************************************!*\
  !*** ./node_modules/emailjs-com/es/store/store.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
const store = {
    _origin: 'https://api.emailjs.com',
};


/***/ }),

/***/ "./node_modules/emailjs-com/es/utils/validateParams.js":
/*!*************************************************************!*\
  !*** ./node_modules/emailjs-com/es/utils/validateParams.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateParams: () => (/* binding */ validateParams)
/* harmony export */ });
const validateParams = (userID, serviceID, templateID) => {
    if (!userID) {
        throw 'The user ID is required. Visit https://dashboard.emailjs.com/admin/integration';
    }
    if (!serviceID) {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID) {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
    return true;
};


/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/hiddenMenu.js":
/*!**************************************!*\
  !*** ./src/components/hiddenMenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const hiddenMenu = document.querySelectorAll('.menu__box');
const body = document.getElementsByTagName('body');

const hidden = () => {
    hamContainer.classList.toggle("change");
    hiddenMenu[0].classList.toggle("menuActive");
    body[0].classList.toggle('stopScrolling');

    const check = () => {
    if(hiddenMenu[0].classList.contains('menuActive')){
        window.addEventListener('resize', check);
        if (window.innerWidth > 999) {
            hidden();
            window.removeEventListener('resize', check)
          }
    }
    }
    check();
  }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hidden);

/***/ }),

/***/ "./src/components/isValid.js":
/*!***********************************!*\
  !*** ./src/components/isValid.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const alertElement = document.getElementById('alert');
const tryAgainElement = document.getElementById('alert-2');

const isValidEmail = (email) => {
    const emailRegEx = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let isValid = emailRegEx.test(email);

    return isValid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValidEmail);

/***/ }),

/***/ "./src/assets/about-us-2.jpeg":
/*!************************************!*\
  !*** ./src/assets/about-us-2.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "about-us-2.jpeg";

/***/ }),

/***/ "./src/assets/about-us.png":
/*!*********************************!*\
  !*** ./src/assets/about-us.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "about-us.png";

/***/ }),

/***/ "./src/assets/blue-1.jpeg":
/*!********************************!*\
  !*** ./src/assets/blue-1.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "blue-1.jpeg";

/***/ }),

/***/ "./src/assets/hero.png":
/*!*****************************!*\
  !*** ./src/assets/hero.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hero.png";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.png";

/***/ }),

/***/ "./src/assets/proj-mandur-cropped.jpeg":
/*!*********************************************!*\
  !*** ./src/assets/proj-mandur-cropped.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "proj-mandur-cropped.jpeg";

/***/ }),

/***/ "./src/assets/proj-tintyava-cropped.jpeg":
/*!***********************************************!*\
  !*** ./src/assets/proj-tintyava-cropped.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "proj-tintyava-cropped.jpeg";

/***/ }),

/***/ "./src/assets/rectangle-13.jpeg":
/*!**************************************!*\
  !*** ./src/assets/rectangle-13.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "rectangle-13.jpeg";

/***/ }),

/***/ "./src/assets/rectangle-14.jpeg":
/*!**************************************!*\
  !*** ./src/assets/rectangle-14.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "rectangle-14.jpeg";

/***/ }),

/***/ "./src/assets/rectangle-15.jpeg":
/*!**************************************!*\
  !*** ./src/assets/rectangle-15.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "rectangle-15.jpeg";

/***/ }),

/***/ "./src/fonts/Barlow/Barlow-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/Barlow/Barlow-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Barlow-Regular.ttf";

/***/ }),

/***/ "./src/fonts/Futura/FuturaPTLight.otf":
/*!********************************************!*\
  !*** ./src/fonts/Futura/FuturaPTLight.otf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "FuturaPTLight.otf";

/***/ }),

/***/ "./src/fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf":
/*!***********************************************************************!*\
  !*** ./src/fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "PlayfairDisplay-Regular.ttf";

/***/ }),

/***/ "./src/fonts/rosmarie-signature/TheRosmarieSignature-Regular.otf":
/*!***********************************************************************!*\
  !*** ./src/fonts/rosmarie-signature/TheRosmarieSignature-Regular.otf ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "TheRosmarieSignature-Regular.otf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _components_hiddenMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/hiddenMenu */ "./src/components/hiddenMenu.js");
/* harmony import */ var _components_isValid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/isValid */ "./src/components/isValid.js");
/* harmony import */ var _assets_hero_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/hero.png */ "./src/assets/hero.png");
/* harmony import */ var _assets_proj_tintyava_cropped_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/proj-tintyava-cropped.jpeg */ "./src/assets/proj-tintyava-cropped.jpeg");
/* harmony import */ var _assets_proj_mandur_cropped_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/proj-mandur-cropped.jpeg */ "./src/assets/proj-mandur-cropped.jpeg");
/* harmony import */ var _assets_about_us_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/about-us.png */ "./src/assets/about-us.png");
/* harmony import */ var _assets_about_us_2_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/about-us-2.jpeg */ "./src/assets/about-us-2.jpeg");
/* harmony import */ var _assets_rectangle_13_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/rectangle-13.jpeg */ "./src/assets/rectangle-13.jpeg");
/* harmony import */ var _assets_rectangle_14_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/rectangle-14.jpeg */ "./src/assets/rectangle-14.jpeg");
/* harmony import */ var _assets_rectangle_15_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/rectangle-15.jpeg */ "./src/assets/rectangle-15.jpeg");
/* harmony import */ var _assets_blue_1_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/blue-1.jpeg */ "./src/assets/blue-1.jpeg");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/es/index.js");















const logoDom = document.getElementById('logo-img');
const hamContainer = document.getElementById('hamContainer');
const logoMenu = document.getElementById('logo-menu');
const heroImg = document.getElementById('hero');
const tintyavaImg = document.getElementById('tintyava');
const mandurImg = document.getElementById('mandur');
const elegantImg = document.getElementById('elegantImg');
const elegantImg2 = document.getElementById('elegantImg2');
const chairs = document.querySelectorAll('.shop-img');
const blogImg = document.querySelectorAll('.blog-img');
const logoFooter = document.getElementById('logo-img-footer');
const button = document.getElementById('subscribe-button');
const userInput = document.getElementById('email');
let userEmail = '';
const form = document.querySelectorAll('.form-email');
const alertElement = document.getElementById('alert');
const tryAgainElement = document.getElementById('alert-2');

const chairsArr = [_assets_rectangle_13_jpeg__WEBPACK_IMPORTED_MODULE_9__, _assets_rectangle_14_jpeg__WEBPACK_IMPORTED_MODULE_10__, _assets_rectangle_15_jpeg__WEBPACK_IMPORTED_MODULE_11__];
hamContainer.addEventListener('click', _components_hiddenMenu__WEBPACK_IMPORTED_MODULE_2__["default"]);
logoDom.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__;
logoMenu.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__;
heroImg.src = _assets_hero_png__WEBPACK_IMPORTED_MODULE_4__;
heroImg.style.maxWidth = "100%";
heroImg.style.height = "auto";
tintyavaImg.src = _assets_proj_tintyava_cropped_jpeg__WEBPACK_IMPORTED_MODULE_5__;
tintyavaImg.style.maxWidth = "100%";
tintyavaImg.style.height = "auto";
mandurImg.src = _assets_proj_mandur_cropped_jpeg__WEBPACK_IMPORTED_MODULE_6__;
mandurImg.style.maxWidth = "100%";
mandurImg.style.height = "auto";
elegantImg.src = _assets_about_us_png__WEBPACK_IMPORTED_MODULE_7__;
elegantImg2.src = _assets_about_us_2_jpeg__WEBPACK_IMPORTED_MODULE_8__;
logoFooter.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__;
logoFooter.style.width = "130px";
logoFooter.style.height = '120px';

for(let i = 0; i<chairs.length; i++){
    chairs[i].src = chairsArr[i];
    chairs[i].style.width = "350px";
    chairs[i].style.height = "460px";
}

blogImg.forEach((x) => {
    x.src = _assets_blue_1_jpeg__WEBPACK_IMPORTED_MODULE_12__;
});

userInput.onchange = () =>{
    userEmail = userInput.value;
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    if((0,_components_isValid__WEBPACK_IMPORTED_MODULE_3__["default"])(userEmail)){
        emailjs_com__WEBPACK_IMPORTED_MODULE_13__["default"].sendForm('service_cmi2my7', 'template_u165adt', form , '08eDmS0SPjZLmErhw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alertElement.style.display = "block";
        setTimeout(() => {
            alertElement.style.display = "none"
        }, 5000);
    }
    else{
        tryAgainElement.style.display = "block";
        setTimeout(() => {
            tryAgainElement.style.display = "none"
        }, 5000);
    }
});



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map