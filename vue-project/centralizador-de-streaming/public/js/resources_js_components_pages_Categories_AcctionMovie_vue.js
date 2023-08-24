"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Categories_AcctionMovie_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/MoviesSection.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/MoviesSection.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! keen-slider/keen-slider.min.css */ "./node_modules/keen-slider/keen-slider.min.css");
/* harmony import */ var keen_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! keen-slider */ "./node_modules/keen-slider/keen-slider.es.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Slider",
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      slider: null
    };
  },
  mounted: function mounted() {
    this.initializeSlider();
  },
  updated: function updated() {
    this.destroySlider();
    this.initializeSlider();
  },
  beforeDestroy: function beforeDestroy() {
    this.destroySlider();
  },
  methods: {
    initializeSlider: function initializeSlider() {
      var _this = this;
      this.$nextTick(function () {
        _this.slider = new keen_slider__WEBPACK_IMPORTED_MODULE_1__["default"](_this.$refs.slider, {
          loop: true,
          mode: "free-snap",
          slides: {
            perView: 6,
            spacing: 8
          }
        });
      });
    },
    destroySlider: function destroySlider() {
      if (this.slider) {
        this.slider.destroy();
        this.slider = null;
      }
    },
    openInfoMovie: function openInfoMovie(movie) {
      console.log("O id desse filme é o id: " + movie.id);
      this.$router.push({
        name: 'ShowMovie',
        query: {
          id: movie.id,
          title: movie.title,
          img: movie.image,
          description: movie.description,
          video: movie.video
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! keen-slider/keen-slider.min.css */ "./node_modules/keen-slider/keen-slider.min.css");
/* harmony import */ var keen_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! keen-slider */ "./node_modules/keen-slider/keen-slider.es.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Slider",
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  computed: {
    dotHelper: function dotHelper() {
      return this.slider ? _toConsumableArray(Array(this.slider.track.details.slides.length).keys()) : [];
    }
  },
  data: function data() {
    return {
      current: 0,
      slider: null
    };
  },
  methods: {
    openMovie: function openMovie(movie) {
      console.log("O id desse filme é o id: " + movie.id);
      this.$router.push({
        name: 'ShowPrincipalMovie',
        query: {
          id: movie.id,
          video: movie.video
        }
      });
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.slider = new keen_slider__WEBPACK_IMPORTED_MODULE_1__["default"](this.$refs.slider, {
      initial: 0,
      slideChanged: function slideChanged(s) {
        _this.current = s.track.details.rel;
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.slider) this.slider.destroy();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Header/Header.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Header/Header.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    redirectToLogin: function redirectToLogin() {
      window.location.href = '/sair';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Header/Header.vue */ "./resources/js/components/Header/Header.vue");
/* harmony import */ var _mixins_Spinner_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../mixins/Spinner.vue */ "./resources/js/mixins/Spinner.vue");
/* harmony import */ var _Carousel_MoviesSection_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Carousel/MoviesSection.vue */ "./resources/js/components/Carousel/MoviesSection.vue");
/* harmony import */ var _Carousel_PrincipalMovie_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Carousel/PrincipalMovie.vue */ "./resources/js/components/Carousel/PrincipalMovie.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);




// import api from '../../../services/Axios'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Header: _Header_Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    PrincipalMovie: _Carousel_PrincipalMovie_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    MoviesSection: _Carousel_MoviesSection_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Spinner: _mixins_Spinner_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      user: {},
      conselho: '',
      principalMovie: [{
        id: 1,
        image: "https://www.publicitarioscriativos.com/wp-content/uploads/2019/08/Todos-os-po%CC%82steres-do-Universo-Cinematogra%CC%81fico-Marvel-em-alta-qualidade.png",
        title: "Vingadores Ultimato",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 2,
        image: "https://cinepop.com.br/wp-content/uploads/2022/11/avatar2_29.jpg",
        title: "Avatar 2",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://v4.cdnpk.net/videvo_files/video/free/video0453/large_watermarked/_import_605f65a0c8cfa7.70318750_FPpreview.mp4"
      }, {
        id: 3,
        image: "https://uploads.jovemnerd.com.br/wp-content/uploads/2018/10/deadpool-2-familia.jpg",
        title: "Deadpool 2",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://v4.cdnpk.net/videvo_files/video/free/video0467/large_watermarked/_import_615005a8789b18.38685020_FPpreview.mp4"
      }, {
        id: 4,
        image: "https://images.cgames.de/images/gamestar/290/joker_6078890.jpg",
        title: "Coringa",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://v4.cdnpk.net/videvo_files/video/free/video0457/large_watermarked/_import_60bc622a5b8144.54299663_FPpreview.mp4"
      }],
      recommendedMovies: [{
        id: 1,
        streaming_logo: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png',
        img: "https://files.tecnoblog.net/wp-content/uploads/2020/12/ordem-filmes-harry-potter-e1609427898909-700x393.jpg",
        title: "Filme 1",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 2,
        streaming_logo: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png',
        img: "https://conteudo.imguol.com.br/c/entretenimento/f1/2021/11/15/o-poster-mostra-peter-parker-e-doutor-estranho-lutando-contra-os-viloes-dos-homem-aranha-antigos-1637010597234_v2_1x1.jpg",
        title: "Filme 2",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 3,
        streaming_logo: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
        img: "https://img.olhardigital.com.br/wp-content/uploads/2023/02/o-projeto-adam-divulgacao-netflix-1.png",
        title: "Filme 3",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 4,
        streaming_logo: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIEN8hAzw3zJFEfnMlTrborAZon3HXAKHM1Q&usqp=CAU",
        title: "Filme 4",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 5,
        streaming_logo: 'https://c.clc2l.com/t/p/a/paramount-ZPsCyQ.png',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtz6-RrA7Xb75mXTBbEIs84VqzXpcMnF6CA&usqp=CAU",
        title: "Filme 5",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 6,
        streaming_logo: 'https://c.clc2l.com/t/p/a/paramount-ZPsCyQ.png',
        img: "https://6vezes7.com.br/wp-content/uploads/2023/05/arte-blog-75-1024x576.png",
        title: "Filme 6",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 7,
        streaming_logo: 'https://cdn.windowsreport.com/wp-content/uploads/sites/3/2021/01/Amazon-Prime-a-bloque-le-VPN_Voici-ce-qui-marche-encore.jpg',
        img: "https://i.pinimg.com/originals/a0/47/91/a047914690fb35a8ce4f06d743ceb23a.png",
        title: "Filme 7",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 8,
        streaming_logo: 'https://cdn.windowsreport.com/wp-content/uploads/sites/3/2021/01/Amazon-Prime-a-bloque-le-VPN_Voici-ce-qui-marche-encore.jpg',
        img: "https://br.web.img3.acsta.net/r_1280_720/newsv7/20/04/22/22/18/1797065.jpg",
        title: "Filme 8",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 9,
        streaming_logo: 'https://play-lh.googleusercontent.com/aZLb5JKvnzXBAcaU2M9fsgp0vfYBfsXQu_yHaehDzqMDqxCXixVPOdY3y1kWVfJfSBew=w240-h480-rw',
        img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/02/destruicao-final-amazon.jpg",
        title: "Filme 9",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 10,
        streaming_logo: 'https://play-lh.googleusercontent.com/aZLb5JKvnzXBAcaU2M9fsgp0vfYBfsXQu_yHaehDzqMDqxCXixVPOdY3y1kWVfJfSBew=w240-h480-rw',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdAmrUJHKHsdxN0yQazjyv7O0-D-bQy9Jqw&usqp=CAU",
        title: "Filme 10",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }],
      acctionMovies: [{
        id: 1,
        streaming_logo: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png',
        img: "https://s2.glbimg.com/uYRv1HsL0I1mVRHxND5W6_b5R4E=/620x413/top/e.glbimg.com/og/ed/f/original/2019/03/20/mv5bndjjmtqzm2mtnteyzs00y2filwi1ngmtmmy0m2y5yjrimwu1xkeyxkfqcgdeqxvynjk3nju0ndy._v1_sx1777_cr001777999_al_.jpg",
        title: "Filme 1",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 2,
        streaming_logo: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png',
        img: "https://img.wallpapic-br.com/i6762-343-437/medium/tomb-raider-filmes-poster-filme-de-acao-imagem-de-fundo.jpg",
        title: "Filme 2",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 3,
        streaming_logo: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFz-uo4bncM9B2I_WWWRB3TyDEvDnlkoupsKmZ8BI5WZMJMLdzn6uu6Ry8c1TaZ795c2s&usqp=CAU",
        title: "Filme 3",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 4,
        streaming_logo: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
        img: "https://static1.purebreak.com.br/articles/0/10/24/20/@/425265-tambem-ha-filmes-de-acao-natalinos-e-d-700x700-2.jpg",
        title: "Filme 4",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 5,
        streaming_logo: 'https://c.clc2l.com/t/p/a/paramount-ZPsCyQ.png',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgrywbDSAChA7In3ejJleDRF7jyJ3BZhTrw&usqp=CAU",
        title: "Filme 5",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 6,
        streaming_logo: 'https://c.clc2l.com/t/p/a/paramount-ZPsCyQ.png',
        img: "https://br.web.img3.acsta.net/pictures/210/140/21014018_2013061921374075.jpg",
        title: "Filme 6",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 7,
        streaming_logo: 'https://cdn.windowsreport.com/wp-content/uploads/sites/3/2021/01/Amazon-Prime-a-bloque-le-VPN_Voici-ce-qui-marche-encore.jpg',
        img: "https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/10/99/1099133_capitao-america-guerra-civil-filme-acao-ms_m1_637383523771667202.jpg",
        title: "Filme 7",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 8,
        streaming_logo: 'https://cdn.windowsreport.com/wp-content/uploads/sites/3/2021/01/Amazon-Prime-a-bloque-le-VPN_Voici-ce-qui-marche-encore.jpg',
        img: "https://br.web.img3.acsta.net/r_1280_720/newsv7/20/04/22/22/18/1797065.jpg",
        title: "Filme 8",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 9,
        streaming_logo: 'https://play-lh.googleusercontent.com/aZLb5JKvnzXBAcaU2M9fsgp0vfYBfsXQu_yHaehDzqMDqxCXixVPOdY3y1kWVfJfSBew=w240-h480-rw',
        img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/02/destruicao-final-amazon.jpg",
        title: "Filme 9",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }, {
        id: 10,
        streaming_logo: 'https://play-lh.googleusercontent.com/aZLb5JKvnzXBAcaU2M9fsgp0vfYBfsXQu_yHaehDzqMDqxCXixVPOdY3y1kWVfJfSBew=w240-h480-rw',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdAmrUJHKHsdxN0yQazjyv7O0-D-bQy9Jqw&usqp=CAU",
        title: "Filme 10",
        description: "O filme se passa em um tradicional colégio interno, o St. Benedict's, no qual estudam os mais prósperos e influentes jovens da sociedade americana. O lema da Instituição é “o fim depende do início”. Para ser mais preciso, ela tem como objetivo formar homens de caráter tendo por base a transmissão do saber e do conhecimento dando como exemplo grandes nomes do passado que muito contribuíram para uma verdadeira democracia.",
        video: "https://resource.flexclip.com/templates/video/720p/epic-fire-effect-movie-trailer.mp4"
      }]
    };
  },
  methods: {
    searchMovies: function searchMovies(event, moviesCategory) {
      if (event.key === "Enter") {
        var searchQuery = event.target.value;
        console.log("Pesquisar filmes da categoria: " + moviesCategory + " com a consulta: " + searchQuery);
      }
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/mixins/Spinner.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/mixins/Spinner.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoading: true
    };
  },
  methods: {
    simulateLoading: function simulateLoading() {
      var _this = this;
      setTimeout(function () {
        _this.isLoading = false; // Set isLoading to false after a delay
      }, 1700); // Adjust the delay as needed
    }
  },
  mounted: function mounted() {
    this.simulateLoading(); // Call the loading simulation method
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/MoviesSection.vue?vue&type=template&id=0035223e&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/MoviesSection.vue?vue&type=template&id=0035223e&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0035223e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  ref: "slider",
  "class": "keen-slider"
};
var _hoisted_2 = ["src", "onClick"];
var _hoisted_3 = {
  "class": "streaming"
};
var _hoisted_4 = ["src"];
var _hoisted_5 = {
  "class": "movie-title"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.movies, function (movie) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "keen-slider__slide slides",
      key: movie.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "movie-img",
      src: movie.image,
      alt: "",
      onClick: function onClick($event) {
        return $options.openInfoMovie(movie);
      }
    }, null, 8 /* PROPS */, _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: movie.streaming_logo,
      alt: "",
      "class": "streaming-logo"
    }, null, 8 /* PROPS */, _hoisted_4)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(movie.title), 1 /* TEXT */)]);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=template&id=3461a994&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=template&id=3461a994&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-3461a994"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "navigation-wrapper"
};
var _hoisted_2 = {
  ref: "slider",
  "class": "keen-slider"
};
var _hoisted_3 = {
  "class": "image-overlay"
};
var _hoisted_4 = {
  "class": "movie-info"
};
var _hoisted_5 = {
  "class": "movie-title"
};
var _hoisted_6 = {
  "class": "movie-description"
};
var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Descrição:", -1 /* HOISTED */);
});
var _hoisted_8 = {
  "class": "button-container"
};
var _hoisted_9 = ["onClick"];
var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "material-icons"
  }, "play_arrow", -1 /* HOISTED */);
});
var _hoisted_11 = ["src"];
var _hoisted_12 = {
  key: 0,
  "class": "dots"
};
var _hoisted_13 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.movies, function (movie) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "keen-slider__slide",
      key: movie.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(movie.title), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(movie.description), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "play-button",
      onClick: function onClick($event) {
        return $options.openMovie(movie);
      }
    }, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Play")], 8 /* PROPS */, _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button class=\"info-button\">More info</button> ")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: movie.image,
      alt: ""
    }, null, 8 /* PROPS */, _hoisted_11)]);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */)]), $data.slider ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.dotHelper, function (_slide, idx) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      onClick: function onClick($event) {
        return $data.slider.moveToIdx(idx);
      },
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        dot: true,
        active: $data.current === idx
      }),
      key: idx
    }, null, 10 /* CLASS, PROPS */, _hoisted_13);
  }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Header/Header.vue?vue&type=template&id=770cded8&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Header/Header.vue?vue&type=template&id=770cded8&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-770cded8"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "header"
};
var _hoisted_2 = {
  "class": "buttons-container"
};
var _hoisted_3 = {
  "class": "right-container"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("header", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h3 style=\"color: var(--blue);\">STREAMING</h3> \r\n      <h3 style=\"color: var(--pink);\">CENTRALIZER</h3> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <a href=\"#\" class=\"icon-search\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" fill=\"currentColor\" class=\"bi bi-search\" viewBox=\"0 0 16 16\">\r\n            <path d=\"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z\"/>\r\n          </svg>\r\n        </a>\r\n\r\n        <input class=\"header-search\" type=\"search\" placeholder=\"Pesquise\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "sair-button",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.redirectToLogin && $options.redirectToLogin.apply($options, arguments);
    })
  }, "Sair")])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=template&id=b163e5b0&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=template&id=b163e5b0&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-b163e5b0"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "content"
};
var _hoisted_2 = {
  "class": "homepage"
};
var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_5 = {
  "class": "recommended-movies"
};
var _hoisted_6 = {
  "class": "search"
};
var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Filmes Recomendados", -1 /* HOISTED */);
});
var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_10 = {
  "class": "acction-movies"
};
var _hoisted_11 = {
  "class": "search"
};
var _hoisted_12 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Filmes de Ação", -1 /* HOISTED */);
});
var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Header");
  var _component_PrincipalMovie = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PrincipalMovie");
  var _component_MoviesSection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MoviesSection");
  var _component_Spinner = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Spinner");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Header), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PrincipalMovie, {
    movies: $data.principalMovie
  }, null, 8 /* PROPS */, ["movies"]), _hoisted_3, _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "header-search",
    type: "search",
    placeholder: "Pesquise",
    onKeypress: _cache[0] || (_cache[0] = function ($event) {
      return $options.searchMovies($event, 'recommendedMovies');
    })
  }, null, 32 /* HYDRATE_EVENTS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MoviesSection, {
    movies: $data.recommendedMovies
  }, null, 8 /* PROPS */, ["movies"])]), _hoisted_8, _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "header-search",
    type: "search",
    placeholder: "Pesquise",
    onKeypress: _cache[1] || (_cache[1] = function ($event) {
      return $options.searchMovies($event, 'acctionMovies');
    })
  }, null, 32 /* HYDRATE_EVENTS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_MoviesSection, {
    movies: $data.acctionMovies
  }, null, 8 /* PROPS */, ["movies"])]), _hoisted_13, _hoisted_14]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Spinner)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/mixins/Spinner.vue?vue&type=template&id=e4359e0c":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/mixins/Spinner.vue?vue&type=template&id=e4359e0c ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "spin"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ring"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "lds-roller"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div")])], -1 /* HOISTED */);
var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_3)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/keen-slider/keen-slider.es.js":
/*!****************************************************!*\
  !*** ./node_modules/keen-slider/keen-slider.es.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ y)
/* harmony export */ });
var n=function(){return n=Object.assign||function(n){for(var t,i=1,e=arguments.length;i<e;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},n.apply(this,arguments)};function t(n,t,i){if(i||2===arguments.length)for(var e,r=0,a=t.length;r<a;r++)!e&&r in t||(e||(e=Array.prototype.slice.call(t,0,r)),e[r]=t[r]);return n.concat(e||Array.prototype.slice.call(t))}function i(n){return Array.prototype.slice.call(n)}function e(n,t){var i=Math.floor(n);return i===t||i+1===t?n:t}function r(){return Date.now()}function a(n,t,i){if(t="data-keen-slider-"+t,null===i)return n.removeAttribute(t);n.setAttribute(t,i||"")}function o(n,t){return t=t||document,"function"==typeof n&&(n=n(t)),Array.isArray(n)?n:"string"==typeof n?i(t.querySelectorAll(n)):n instanceof HTMLElement?[n]:n instanceof NodeList?i(n):[]}function u(n){n.raw&&(n=n.raw),n.cancelable&&!n.defaultPrevented&&n.preventDefault()}function s(n){n.raw&&(n=n.raw),n.stopPropagation&&n.stopPropagation()}function c(){var n=[];return{add:function(t,i,e,r){t.addListener?t.addListener(e):t.addEventListener(i,e,r),n.push([t,i,e,r])},input:function(n,t,i,e){this.add(n,t,function(n){return function(t){t.nativeEvent&&(t=t.nativeEvent);var i=t.changedTouches||[],e=t.targetTouches||[],r=t.detail&&t.detail.x?t.detail:null;return n({id:r?r.identifier?r.identifier:"i":e[0]?e[0]?e[0].identifier:"e":"d",idChanged:r?r.identifier?r.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",raw:t,x:r&&r.x?r.x:e[0]?e[0].screenX:r?r.x:t.pageX,y:r&&r.y?r.y:e[0]?e[0].screenY:r?r.y:t.pageY})}}(i),e)},purge:function(){n.forEach((function(n){n[0].removeListener?n[0].removeListener(n[2]):n[0].removeEventListener(n[1],n[2],n[3])})),n=[]}}}function d(n,t,i){return Math.min(Math.max(n,t),i)}function l(n){return(n>0?1:0)-(n<0?1:0)||+n}function f(n){var t=n.getBoundingClientRect();return{height:e(t.height,n.offsetHeight),width:e(t.width,n.offsetWidth)}}function p(n,t,i,e){var r=n&&n[t];return null==r?i:e&&"function"==typeof r?r():r}function v(n){return Math.round(1e6*n)/1e6}function h(n){var t,i,e,r,a,o;function u(t){o||(o=t),s(!0);var a=t-o;a>e&&(a=e);var l=r[i];if(l[3]<a)return i++,u(t);var f=l[2],p=l[4],v=l[0],h=l[1]*(0,l[5])(0===p?1:(a-f)/p);if(h&&n.track.to(v+h),a<e)return d();o=null,s(!1),c(null),n.emit("animationEnded")}function s(n){t.active=n}function c(n){t.targetIdx=n}function d(){var n;n=u,a=window.requestAnimationFrame(n)}function l(){var t;t=a,window.cancelAnimationFrame(t),s(!1),c(null),o&&n.emit("animationStopped"),o=null}return t={active:!1,start:function(t){if(l(),n.track.details){var a=0,o=n.track.details.position;i=0,e=0,r=t.map((function(n){var t,i=Number(o),r=null!==(t=n.earlyExit)&&void 0!==t?t:n.duration,u=n.easing,s=n.distance*u(r/n.duration)||0;o+=s;var c=e;return e+=r,a+=s,[i,n.distance,c,e,n.duration,u]})),c(n.track.distToIdx(a)),d(),n.emit("animationStarted")}},stop:l,targetIdx:null}}function m(n){var i,e,a,o,u,s,c,f,h,m,g,b,x,k,y=1/0,w=[],M=null,T=0;function C(n){_(T+n)}function E(n){var t=z(T+n).abs;return D(t)?t:null}function z(n){var i=Math.floor(Math.abs(v(n/e))),r=v((n%e+e)%e);r===e&&(r=0);var a=l(n),o=c.indexOf(t([],c,!0).reduce((function(n,t){return Math.abs(t-r)<Math.abs(n-r)?t:n}))),u=o;return a<0&&i++,o===s&&(u=0,i+=a>0?1:-1),{abs:u+i*s*a,origin:o,rel:u}}function I(n,t,i){var e;if(t||!S())return A(n,i);if(!D(n))return null;var r=z(null!=i?i:T),a=r.abs,o=n-r.rel,u=a+o;e=A(u);var c=A(u-s*l(o));return(null!==c&&Math.abs(c)<Math.abs(e)||null===e)&&(e=c),v(e)}function A(n,t){if(null==t&&(t=v(T)),!D(n)||null===n)return null;n=Math.round(n);var i=z(t),r=i.abs,a=i.rel,o=i.origin,u=O(n),d=(t%e+e)%e,l=c[o],f=Math.floor((n-(r-a))/s)*e;return v(l-d-l+c[u]+f+(o===s?e:0))}function D(n){return L(n)===n}function L(n){return d(n,h,m)}function S(){return o.loop}function O(n){return(n%s+s)%s}function _(t){var i;i=t-T,w.push({distance:i,timestamp:r()}),w.length>6&&(w=w.slice(-6)),T=v(t);var e=H().abs;if(e!==M){var a=null!==M;M=e,a&&n.emit("slideChanged")}}function H(t){var r=t?null:function(){if(s){var n=S(),t=n?(T%e+e)%e:T,i=(n?T%e:T)-u[0][2],r=0-(i<0&&n?e-Math.abs(i):i),c=0,d=z(T),f=d.abs,p=d.rel,v=u[p][2],y=u.map((function(t,i){var a=r+c;(a<0-t[0]||a>1)&&(a+=(Math.abs(a)>e-1&&n?e:0)*l(-a));var u=i-p,d=l(u),h=u+f;n&&(-1===d&&a>v&&(h+=s),1===d&&a<v&&(h-=s),null!==g&&h<g&&(a+=e),null!==b&&h>b&&(a-=e));var m=a+t[0]+t[1],x=Math.max(a>=0&&m<=1?1:m<0||a>1?0:a<0?Math.min(1,(t[0]+a)/t[0]):(1-a)/t[0],0);return c+=t[0]+t[1],{abs:h,distance:o.rtl?-1*a+1-t[0]:a,portion:x,size:t[0]}}));return f=L(f),p=O(f),{abs:L(f),length:a,max:k,maxIdx:m,min:x,minIdx:h,position:T,progress:n?t/e:T/a,rel:p,slides:y,slidesLength:e}}}();return i.details=r,n.emit("detailsChanged"),r}return i={absToRel:O,add:C,details:null,distToIdx:E,idxToDist:I,init:function(t){if(function(){if(o=n.options,u=(o.trackConfig||[]).map((function(n){return[p(n,"size",1),p(n,"spacing",0),p(n,"origin",0)]})),s=u.length){e=v(u.reduce((function(n,t){return n+t[0]+t[1]}),0));var t,i=s-1;a=v(e+u[0][2]-u[i][0]-u[i][2]-u[i][1]),c=u.reduce((function(n,i){if(!n)return[0];var e=u[n.length-1],r=n[n.length-1]+(e[0]+e[2])+e[1];return r-=i[2],n[n.length-1]>r&&(r=n[n.length-1]),r=v(r),n.push(r),(!t||t<r)&&(f=n.length-1),t=r,n}),null),0===a&&(f=0),c.push(v(e))}}(),!s)return H(!0);var i;!function(){var t=n.options.range,i=n.options.loop;g=h=i?p(i,"min",-1/0):0,b=m=i?p(i,"max",y):f;var e=p(t,"min",null),r=p(t,"max",null);null!==e&&(h=e),null!==r&&(m=r),x=h===-1/0?h:n.track.idxToDist(h||0,!0,0),k=m===y?m:I(m,!0,0),null===r&&(b=m),p(t,"align",!1)&&m!==y&&0===u[O(m)][2]&&(k-=1-u[O(m)][0],m=E(k-T)),x=v(x),k=v(k)}(),i=t,Number(i)===i?C(A(L(t))):H()},to:_,velocity:function(){var n=r(),t=w.reduce((function(t,i){var e=i.distance,r=i.timestamp;return n-r>200||(l(e)!==l(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=e),t.lastTimestamp&&(t.time+=r-t.lastTimestamp),t.lastTimestamp=r),t}),{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}function g(n){var t,i,e,r,a,o,u,s;function c(n){return 2*n}function f(n){return d(n,u,s)}function p(n){return 1-Math.pow(1-n,3)}function v(){return e?n.track.velocity():0}function h(){b();var t="free-snap"===n.options.mode,i=n.track,e=v();r=l(e);var u=n.track.details,s=[];if(e||!t){var d=m(e),h=d.dist,g=d.dur;if(g=c(g),h*=r,t){var x=i.idxToDist(i.distToIdx(h),!0);x&&(h=x)}s.push({distance:h,duration:g,easing:p});var k=u.position,y=k+h;if(y<a||y>o){var w=y<a?a-k:o-k,M=0,T=e;if(l(w)===r){var C=Math.min(Math.abs(w)/Math.abs(h),1),E=function(n){return 1-Math.pow(1-n,1/3)}(C)*g;s[0].earlyExit=E,T=e*(1-C)}else s[0].earlyExit=0,M+=w;var z=m(T,100),I=z.dist*r;n.options.rubberband&&(s.push({distance:I,duration:c(z.dur),easing:p}),s.push({distance:-I+M,duration:500,easing:p}))}n.animator.start(s)}else n.moveToIdx(f(u.abs),!0,{duration:500,easing:function(n){return 1+--n*n*n*n*n}})}function m(n,t){void 0===t&&(t=1e3);var i=147e-9+(n=Math.abs(n))/t;return{dist:Math.pow(n,2)/i,dur:n/i}}function g(){var t=n.track.details;t&&(a=t.min,o=t.max,u=t.minIdx,s=t.maxIdx)}function b(){n.animator.stop()}n.on("updated",g),n.on("optionsChanged",g),n.on("created",g),n.on("dragStarted",(function(){e=!1,b(),t=i=n.track.details.abs})),n.on("dragChecked",(function(){e=!0})),n.on("dragEnded",(function(){var e=n.options.mode;"snap"===e&&function(){var e=n.track,r=n.track.details,u=r.position,s=l(v());(u>o||u<a)&&(s=0);var c=t+s;0===r.slides[e.absToRel(c)].portion&&(c-=s),t!==i&&(c=i),l(e.idxToDist(c,!0))!==s&&(c+=s),c=f(c);var d=e.idxToDist(c,!0);n.animator.start([{distance:d,duration:500,easing:function(n){return 1+--n*n*n*n*n}}])}(),"free"!==e&&"free-snap"!==e||h()})),n.on("dragged",(function(){i=n.track.details.abs}))}function b(n){var t,i,e,r,a,f,p,v,h,m,g,b,x,k,y,w,M,T,C=c();function E(t){if(f&&v===t.id){var o=D(t);if(h){if(!A(t))return I(t);m=o,h=!1,n.emit("dragChecked")}if(w)return m=o;u(t);var c=function(t){if(M===-1/0&&T===1/0)return t;var e=n.track.details,o=e.length,u=e.position,s=d(t,M-u,T-u);if(0===o)return 0;if(!n.options.rubberband)return s;if(u<=T&&u>=M)return t;if(u<M&&i>0||u>T&&i<0)return t;var c=(u<M?u-M:u-T)/o,l=r*o,f=Math.abs(c*l),p=Math.max(0,1-f/a*2);return p*p*t}(p(m-o)/r*e);i=l(c);var x=n.track.details.position;(x>M&&x<T||x===M&&i>0||x===T&&i<0)&&s(t),g+=c,!b&&Math.abs(g*r)>5&&(b=!0),n.track.add(c),m=o,n.emit("dragged")}}function z(t){!f&&n.track.details&&n.track.details.length&&(g=0,f=!0,b=!1,h=!0,v=t.id,A(t),m=D(t),n.emit("dragStarted"))}function I(t){f&&v===t.idChanged&&(f=!1,n.emit("dragEnded"))}function A(n){var t=L(),i=t?n.y:n.x,e=t?n.x:n.y,r=void 0!==x&&void 0!==k&&Math.abs(k-e)<=Math.abs(x-i);return x=i,k=e,r}function D(n){return L()?n.y:n.x}function L(){return n.options.vertical}function S(){r=n.size,a=L()?window.innerHeight:window.innerWidth;var t=n.track.details;t&&(M=t.min,T=t.max)}function O(n){b&&(s(n),u(n))}function _(){if(C.purge(),n.options.drag&&!n.options.disabled){var i;i=n.options.dragSpeed||1,p="function"==typeof i?i:function(n){return n*i},e=n.options.rtl?-1:1,S(),t=n.container,function(){var n="data-keen-slider-clickable";o("[".concat(n,"]:not([").concat(n,"=false])"),t).map((function(n){C.add(n,"dragstart",s),C.add(n,"mousedown",s),C.add(n,"touchstart",s)}))}(),C.add(t,"dragstart",(function(n){u(n)})),C.add(t,"click",O,{capture:!0}),C.input(t,"ksDragStart",z),C.input(t,"ksDrag",E),C.input(t,"ksDragEnd",I),C.input(t,"mousedown",z),C.input(t,"mousemove",E),C.input(t,"mouseleave",I),C.input(t,"mouseup",I),C.input(t,"touchstart",z,{passive:!0}),C.input(t,"touchmove",E,{passive:!1}),C.input(t,"touchend",I),C.input(t,"touchcancel",I),C.add(window,"wheel",(function(n){f&&u(n)}));var r="data-keen-slider-scrollable";o("[".concat(r,"]:not([").concat(r,"=false])"),n.container).map((function(n){return function(n){var t;C.input(n,"touchstart",(function(n){t=D(n),w=!0,y=!0}),{passive:!0}),C.input(n,"touchmove",(function(i){var e=L(),r=e?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,a=t-D(i),o=e?n.scrollTop:n.scrollLeft,s=e&&"scroll"===n.style.overflowY||!e&&"scroll"===n.style.overflowX;if(t=D(i),(a<0&&o>0||a>0&&o<r)&&y&&s)return w=!0;y=!1,u(i),w=!1})),C.input(n,"touchend",(function(){w=!1}))}(n)}))}}n.on("updated",S),n.on("optionsChanged",_),n.on("created",_),n.on("destroyed",C.purge)}function x(n){var t,i,e=null;function r(t,i,e){n.animator.active?o(t,i,e):requestAnimationFrame((function(){return o(t,i,e)}))}function a(){r(!1,!1,i)}function o(i,r,a){var o=0,u=n.size,d=n.track.details;if(d&&t){var l=d.slides;t.forEach((function(n,t){if(i)!e&&r&&s(n,null,a),c(n,null,a);else{if(!l[t])return;var d=l[t].size*u;!e&&r&&s(n,d,a),c(n,l[t].distance*u-o,a),o+=d}}))}}function u(t){return"performance"===n.options.renderMode?Math.round(t):t}function s(n,t,i){var e=i?"height":"width";null!==t&&(t=u(t)+"px"),n.style["min-"+e]=t,n.style["max-"+e]=t}function c(n,t,i){if(null!==t){t=u(t);var e=i?t:0;t="translate3d(".concat(i?0:t,"px, ").concat(e,"px, 0)")}n.style.transform=t,n.style["-webkit-transform"]=t}function d(){t&&(o(!0,!0,i),t=null),n.on("detailsChanged",a,!0)}function l(){r(!1,!0,i)}function f(){d(),i=n.options.vertical,n.options.disabled||"custom"===n.options.renderMode||(e="auto"===p(n.options.slides,"perView",null),n.on("detailsChanged",a),(t=n.slides).length&&l())}n.on("created",f),n.on("optionsChanged",f),n.on("beforeOptionsChanged",(function(){d()})),n.on("updated",l),n.on("destroyed",d)}function k(t,i){return function(e){var r,u,s,d,l,v,h=c();function m(n){var t;a(e.container,"reverse","rtl"!==(t=e.container,window.getComputedStyle(t,null).getPropertyValue("direction"))||n?null:""),a(e.container,"v",e.options.vertical&&!n?"":null),a(e.container,"disabled",e.options.disabled&&!n?"":null)}function g(){b()&&M()}function b(){var t=null;if(d.forEach((function(n){n.matches&&(t=n.__media)})),t===r)return!1;r||e.emit("beforeOptionsChanged"),r=t;var i=t?s.breakpoints[t]:s;return e.options=n(n({},s),i),m(),I(),A(),C(),!0}function x(n){var t=f(n);return(e.options.vertical?t.height:t.width)/e.size||1}function k(){return e.options.trackConfig.length}function y(t){for(var a in r=!1,s=n(n({},i),t),h.purge(),u=e.size,d=[],s.breakpoints||[]){var o=window.matchMedia(a);o.__media=a,d.push(o),h.add(o,"change",g)}h.add(window,"orientationchange",z),h.add(window,"resize",E),b()}function w(n){e.animator.stop();var t=e.track.details;e.track.init(null!=n?n:t?t.abs:0)}function M(n){w(n),e.emit("optionsChanged")}function T(n,t){if(n)return y(n),void M(t);I(),A();var i=k();C(),k()!==i?M(t):w(t),e.emit("updated")}function C(){var n=e.options.slides;if("function"==typeof n)return e.options.trackConfig=n(e.size,e.slides);for(var t=e.slides,i=t.length,r="number"==typeof n?n:p(n,"number",i,!0),a=[],o=p(n,"perView",1,!0),u=p(n,"spacing",0,!0)/e.size||0,s="auto"===o?u:u/o,c=p(n,"origin","auto"),d=0,l=0;l<r;l++){var f="auto"===o?x(t[l]):1/o-u+s,v="center"===c?.5-f/2:"auto"===c?0:c;a.push({origin:v,size:f,spacing:u}),d+=f}if(d+=u*(r-1),"auto"===c&&!e.options.loop&&1!==o){var h=0;a.map((function(n){var t=d-h;return h+=n.size+u,t>=1||(n.origin=1-t-(d>1?0:1-d)),n}))}e.options.trackConfig=a}function E(){I();var n=e.size;e.options.disabled||n===u||(u=n,T())}function z(){E(),setTimeout(E,500),setTimeout(E,2e3)}function I(){var n=f(e.container);e.size=(e.options.vertical?n.height:n.width)||1}function A(){e.slides=o(e.options.selector,e.container)}e.container=(v=o(t,l||document)).length?v[0]:null,e.destroy=function(){h.purge(),e.emit("destroyed"),m(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=T,y(e.options)}}var y=function(n,i,e){try{return function(n,t){var i,e={};return i={emit:function(n){e[n]&&e[n].forEach((function(n){n(i)}));var t=i.options&&i.options[n];t&&t(i)},moveToIdx:function(n,t,e){var r=i.track.idxToDist(n,t);if(r){var a=i.options.defaultAnimation;i.animator.start([{distance:r,duration:p(e||a,"duration",500),easing:p(e||a,"easing",(function(n){return 1+--n*n*n*n*n}))}])}},on:function(n,t,i){void 0===i&&(i=!1),e[n]||(e[n]=[]);var r=e[n].indexOf(t);r>-1?i&&delete e[n][r]:i||e[n].push(t)},options:n},function(){if(i.track=m(i),i.animator=h(i),t)for(var n=0,e=t;n<e.length;n++)(0,e[n])(i);i.track.init(i.options.initial||0),i.emit("created")}(),i}(i,t([k(n,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),x,b,g],e||[],!0))}catch(n){console.error(n)}};


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/keen-slider/keen-slider.min.css":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/keen-slider/keen-slider.min.css ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".keen-slider:not([data-keen-slider-disabled]){-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;align-content:flex-start;display:flex;overflow:hidden;position:relative;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;user-select:none;-khtml-user-select:none;width:100%}.keen-slider:not([data-keen-slider-disabled]) .keen-slider__slide{min-height:100%;overflow:hidden;position:relative;width:100%}.keen-slider:not([data-keen-slider-disabled])[data-keen-slider-reverse]{flex-direction:row-reverse}.keen-slider:not([data-keen-slider-disabled])[data-keen-slider-v]{flex-wrap:wrap}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/MoviesSection.vue?vue&type=style&index=0&id=0035223e&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/MoviesSection.vue?vue&type=style&index=0&id=0035223e&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.keen-slider[data-v-0035223e] {\r\n  display: flex;\n}\n.keen-slider__slide[data-v-0035223e] {\r\n  width: 100%;\r\n  display: flex;\r\n  background-color: rgba(75, 73, 73, 0.486);\r\n  flex-direction: column;\r\n  align-items: center; \r\n  justify-content: center;\n}\n.movie-img[data-v-0035223e] {\r\n  width: 100%;\r\n  height: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  max-height: 250px;\r\n  cursor: pointer; \r\n  filter: brightness(100%); \r\n  transition: filter 0.3s ease;\n}\n.movie-img[data-v-0035223e]:hover {\r\n  /* outline: 2px solid var(--blue); */\r\n  filter: brightness(70%);\n}\n.movie-title[data-v-0035223e] {\r\n  margin: 15px 0px;\r\n  font-size: 18px;\r\n  font-weight: 2px;\r\n  color: var(--light);\n}\n.streaming-logo[data-v-0035223e]{\r\n  width: 30px; \r\n  height: 30px; \r\n  border-radius: 50%;\r\n  position: absolute;\r\n  right: 0.5rem;\r\n  top: 0.5rem;\r\n  z-index: 3;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=style&index=0&id=3461a994&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=style&index=0&id=3461a994&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.keen-slider[data-v-3461a994] {\r\n  display: flex;\r\n  height: 700px;\r\n  width: 100%;\r\n  z-index: 0;\n}\n.keen-slider__slide[data-v-3461a994] {\r\n  width: 100%;\r\n  display: flex;\r\n  background-color: transparent;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative; /* Add position relative to enable overlay positioning */\n}\n.keen-slider__slide img[data-v-3461a994] {\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: pointer;\r\n  filter: brightness(0.8);\n}\r\n\r\n/* Overlay styles */\n.image-overlay[data-v-3461a994] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 45%; /* Adjust the width of the overlay to fit your needs */\r\n  height: 100%;\r\n  background: linear-gradient(to right, black, rgba(0, 0, 0, 0.0)); /* Less transparent on the right */\r\n  z-index: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 20px;\r\n  color: #fff;\n}\r\n/* .movie-info { */\r\n  /* text-align: center; */\r\n/* } */\n.movie-title h1[data-v-3461a994] {\r\n  font-size: 80px;\r\n  text-align: center;\r\n  margin-top: 2rem;\n}\n.movie-description p[data-v-3461a994]{\r\n  color: #c5c5c5;\n}\n.button-container[data-v-3461a994]{\r\n  display: flex;\r\n  align-items: center;\r\n  /* justify-content: center; */\n}\n.play-button[data-v-3461a994],\r\n.info-button[data-v-3461a994] {\r\n  font-size: 20px;\r\n  padding: 0.4rem 1.2rem;\r\n  border-radius: 4px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 5px;\n}\n.play-button[data-v-3461a994] {\r\n  color: black;\r\n  background-color: white;\n}\r\n\r\n/* .info-button {\r\n  color: #fff;\r\n  background-color: rgba(128, 128, 128, 0.5);\r\n  position: relative; \r\n} */\n.play-button[data-v-3461a994]:hover{\r\noutline: 2px solid white;\n}\r\n/* .info-button:hover{\r\n  outline: 2px solid #fff;\r\n} */\n.navigation-wrapper[data-v-3461a994] {\r\n  position: relative;\n}\n.dots[data-v-3461a994] {\r\n  display: flex;\r\n  padding: 10px 0;\r\n  justify-content: center;\n}\n.dot[data-v-3461a994] {\r\n  border: none;\r\n  width: 10px;\r\n  height: 10px;\r\n  background: #c5c5c5;\r\n  border-radius: 50%;\r\n  margin: 0 5px;\r\n  padding: 5px;\r\n  cursor: pointer;\n}\n.dot[data-v-3461a994]:focus {\r\n  outline: none;\n}\n.dot.active[data-v-3461a994] {\r\n  background: var(--blue);\n}\n.arrow[data-v-3461a994] {\r\n  width: 30px;\r\n  height: 30px;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  -webkit-transform: translateY(-50%);\r\n  fill: #fff;\r\n  cursor: pointer;\n}\n.arrow--left[data-v-3461a994] {\r\n  left: 5px;\n}\n.arrow--right[data-v-3461a994] {\r\n  left: auto;\r\n  right: 5px;\n}\n.arrow--disabled[data-v-3461a994] {\r\n  fill: rgba(255, 255, 255, 0.5);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Header/Header.vue?vue&type=style&index=0&id=770cded8&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Header/Header.vue?vue&type=style&index=0&id=770cded8&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.header[data-v-770cded8] {\r\n  width: 100%;\r\n  /* display: flex; */\r\n  align-items: center;\r\n  position: fixed;\r\n  padding: 22px;\r\n  background-color: rgb(0, 0,0, 0.5);\r\n  z-index: 2;\n}\r\n/* h3{\r\n  font-weight: bold;\r\n  text-align: center;\r\n} */\n.right-container[data-v-770cded8] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content:right;\n}\n.header-search[data-v-770cded8] {\r\n  padding: 8px 25px;\r\n  background-color: transparent;\r\n  outline: 1px solid #00aacd;\r\n  border: none;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  transition: background-color 0.3s linear, outline 0.3s linear, color 0.3s linear;\n}\n.icon-search[data-v-770cded8] {\r\n  color: white;\r\n  margin-right: 6px;\n}\n.header-search[data-v-770cded8]{\r\n  margin-right: 8px ;\n}\n.sair-button[data-v-770cded8] {\r\n  padding: 6px 35px;\r\n  background-color: transparent;\r\n  border-radius: 2px;\r\n  outline: 1px solid #00aacd;\r\n  color: #fff;\r\n  transition: background-color 0.3s linear, outline 0.3s linear, color 0.3s linear;\n}\n.sair-button[data-v-770cded8]:hover {\r\n  background-color: #00aacd;\r\n  outline: 1px solid #fff;\r\n  color: #17161b;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=style&index=0&id=b163e5b0&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=style&index=0&id=b163e5b0&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.content[data-v-b163e5b0] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  color:var(--light);\r\n  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),\r\n    url('https://www.revistarua.pt/wp-content/uploads/2020/03/jason-bourne.jpg');\r\n  background-size: cover;\r\n  background-attachment: fixed;\n}\n.homepage[data-v-b163e5b0]{\r\n  margin-top: 84px;\r\n  /* background-color: blue ; */\r\n  margin-top: 5.5rem; \r\n  margin-right:8rem;\r\n  margin-left:8rem;\n}\n.search[data-v-b163e5b0]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-bottom: 0.5rem;\n}\n.header-search[data-v-b163e5b0] {\r\n  padding: 8px 25px;\r\n  background-color: transparent;\r\n  outline: 1px solid #00aacd;\r\n  border: none;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n  transition: background-color 0.3s linear, outline 0.3s linear, color 0.3s linear;\n}\r\n\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/mixins/Spinner.vue?vue&type=style&index=0&id=e4359e0c&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/mixins/Spinner.vue?vue&type=style&index=0&id=e4359e0c&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.spin{\r\n    z-index: 2;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 1);\r\n    position: fixed;\n}\n.ring{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin: 0 auto;\r\n    height: 100%;\n}\n.lds-roller {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\n}\n.lds-roller div {\r\n  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n  transform-origin: 40px 40px;\n}\n.lds-roller div:after {\r\n  content: \" \";\r\n  display: block;\r\n  position: absolute;\r\n  width: 7px;\r\n  height: 7px;\r\n  border-radius: 50%;\r\n  background: #fff;\r\n  margin: -4px 0 0 -4px;\n}\n.lds-roller div:nth-child(1) {\r\n  animation-delay: -0.036s;\n}\n.lds-roller div:nth-child(1):after {\r\n  top: 63px;\r\n  left: 63px;\n}\n.lds-roller div:nth-child(2) {\r\n  animation-delay: -0.072s;\n}\n.lds-roller div:nth-child(2):after {\r\n  top: 68px;\r\n  left: 56px;\n}\n.lds-roller div:nth-child(3) {\r\n  animation-delay: -0.108s;\n}\n.lds-roller div:nth-child(3):after {\r\n  top: 71px;\r\n  left: 48px;\n}\n.lds-roller div:nth-child(4) {\r\n  animation-delay: -0.144s;\n}\n.lds-roller div:nth-child(4):after {\r\n  top: 72px;\r\n  left: 40px;\n}\n.lds-roller div:nth-child(5) {\r\n  animation-delay: -0.18s;\n}\n.lds-roller div:nth-child(5):after {\r\n  top: 71px;\r\n  left: 32px;\n}\n.lds-roller div:nth-child(6) {\r\n  animation-delay: -0.216s;\n}\n.lds-roller div:nth-child(6):after {\r\n  top: 68px;\r\n  left: 24px;\n}\n.lds-roller div:nth-child(7) {\r\n  animation-delay: -0.252s;\n}\n.lds-roller div:nth-child(7):after {\r\n  top: 63px;\r\n  left: 17px;\n}\n.lds-roller div:nth-child(8) {\r\n  animation-delay: -0.288s;\n}\n.lds-roller div:nth-child(8):after {\r\n  top: 56px;\r\n  left: 12px;\n}\n@keyframes lds-roller {\n0% {\r\n    transform: rotate(0deg);\n}\n100% {\r\n    transform: rotate(360deg);\n}\n}\r\n\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/keen-slider/keen-slider.min.css":
/*!******************************************************!*\
  !*** ./node_modules/keen-slider/keen-slider.min.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./keen-slider.min.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/keen-slider/keen-slider.min.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/MoviesSection.vue?vue&type=style&index=0&id=0035223e&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/MoviesSection.vue?vue&type=style&index=0&id=0035223e&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MoviesSection_vue_vue_type_style_index_0_id_0035223e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MoviesSection.vue?vue&type=style&index=0&id=0035223e&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/MoviesSection.vue?vue&type=style&index=0&id=0035223e&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MoviesSection_vue_vue_type_style_index_0_id_0035223e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MoviesSection_vue_vue_type_style_index_0_id_0035223e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=style&index=0&id=3461a994&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=style&index=0&id=3461a994&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrincipalMovie_vue_vue_type_style_index_0_id_3461a994_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrincipalMovie.vue?vue&type=style&index=0&id=3461a994&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=style&index=0&id=3461a994&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrincipalMovie_vue_vue_type_style_index_0_id_3461a994_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrincipalMovie_vue_vue_type_style_index_0_id_3461a994_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Header/Header.vue?vue&type=style&index=0&id=770cded8&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Header/Header.vue?vue&type=style&index=0&id=770cded8&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_770cded8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=style&index=0&id=770cded8&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Header/Header.vue?vue&type=style&index=0&id=770cded8&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_770cded8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_770cded8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=style&index=0&id=b163e5b0&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=style&index=0&id=b163e5b0&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AcctionMovie_vue_vue_type_style_index_0_id_b163e5b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AcctionMovie.vue?vue&type=style&index=0&id=b163e5b0&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=style&index=0&id=b163e5b0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AcctionMovie_vue_vue_type_style_index_0_id_b163e5b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AcctionMovie_vue_vue_type_style_index_0_id_b163e5b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/mixins/Spinner.vue?vue&type=style&index=0&id=e4359e0c&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/mixins/Spinner.vue?vue&type=style&index=0&id=e4359e0c&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Spinner_vue_vue_type_style_index_0_id_e4359e0c_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Spinner.vue?vue&type=style&index=0&id=e4359e0c&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/mixins/Spinner.vue?vue&type=style&index=0&id=e4359e0c&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Spinner_vue_vue_type_style_index_0_id_e4359e0c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Spinner_vue_vue_type_style_index_0_id_e4359e0c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Carousel/MoviesSection.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Carousel/MoviesSection.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MoviesSection_vue_vue_type_template_id_0035223e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MoviesSection.vue?vue&type=template&id=0035223e&scoped=true */ "./resources/js/components/Carousel/MoviesSection.vue?vue&type=template&id=0035223e&scoped=true");
/* harmony import */ var _MoviesSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoviesSection.vue?vue&type=script&lang=js */ "./resources/js/components/Carousel/MoviesSection.vue?vue&type=script&lang=js");
/* harmony import */ var _MoviesSection_vue_vue_type_style_index_0_id_0035223e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoviesSection.vue?vue&type=style&index=0&id=0035223e&scoped=true&lang=css */ "./resources/js/components/Carousel/MoviesSection.vue?vue&type=style&index=0&id=0035223e&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_MoviesSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MoviesSection_vue_vue_type_template_id_0035223e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-0035223e"],['__file',"resources/js/components/Carousel/MoviesSection.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Carousel/PrincipalMovie.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Carousel/PrincipalMovie.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PrincipalMovie_vue_vue_type_template_id_3461a994_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrincipalMovie.vue?vue&type=template&id=3461a994&scoped=true */ "./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=template&id=3461a994&scoped=true");
/* harmony import */ var _PrincipalMovie_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrincipalMovie.vue?vue&type=script&lang=js */ "./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=script&lang=js");
/* harmony import */ var _PrincipalMovie_vue_vue_type_style_index_0_id_3461a994_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrincipalMovie.vue?vue&type=style&index=0&id=3461a994&scoped=true&lang=css */ "./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=style&index=0&id=3461a994&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PrincipalMovie_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PrincipalMovie_vue_vue_type_template_id_3461a994_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-3461a994"],['__file',"resources/js/components/Carousel/PrincipalMovie.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Header/Header.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Header/Header.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_770cded8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=770cded8&scoped=true */ "./resources/js/components/Header/Header.vue?vue&type=template&id=770cded8&scoped=true");
/* harmony import */ var _Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js */ "./resources/js/components/Header/Header.vue?vue&type=script&lang=js");
/* harmony import */ var _Header_vue_vue_type_style_index_0_id_770cded8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.vue?vue&type=style&index=0&id=770cded8&scoped=true&lang=css */ "./resources/js/components/Header/Header.vue?vue&type=style&index=0&id=770cded8&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Header_vue_vue_type_template_id_770cded8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-770cded8"],['__file',"resources/js/components/Header/Header.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/pages/Categories/AcctionMovie.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/pages/Categories/AcctionMovie.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AcctionMovie_vue_vue_type_template_id_b163e5b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AcctionMovie.vue?vue&type=template&id=b163e5b0&scoped=true */ "./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=template&id=b163e5b0&scoped=true");
/* harmony import */ var _AcctionMovie_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AcctionMovie.vue?vue&type=script&lang=js */ "./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=script&lang=js");
/* harmony import */ var _AcctionMovie_vue_vue_type_style_index_0_id_b163e5b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AcctionMovie.vue?vue&type=style&index=0&id=b163e5b0&scoped=true&lang=css */ "./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=style&index=0&id=b163e5b0&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AcctionMovie_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AcctionMovie_vue_vue_type_template_id_b163e5b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-b163e5b0"],['__file',"resources/js/components/pages/Categories/AcctionMovie.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/mixins/Spinner.vue":
/*!*****************************************!*\
  !*** ./resources/js/mixins/Spinner.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Spinner_vue_vue_type_template_id_e4359e0c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spinner.vue?vue&type=template&id=e4359e0c */ "./resources/js/mixins/Spinner.vue?vue&type=template&id=e4359e0c");
/* harmony import */ var _Spinner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner.vue?vue&type=script&lang=js */ "./resources/js/mixins/Spinner.vue?vue&type=script&lang=js");
/* harmony import */ var _Spinner_vue_vue_type_style_index_0_id_e4359e0c_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Spinner.vue?vue&type=style&index=0&id=e4359e0c&lang=css */ "./resources/js/mixins/Spinner.vue?vue&type=style&index=0&id=e4359e0c&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Spinner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Spinner_vue_vue_type_template_id_e4359e0c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/mixins/Spinner.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Carousel/MoviesSection.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Carousel/MoviesSection.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MoviesSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MoviesSection_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MoviesSection.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/MoviesSection.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrincipalMovie_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrincipalMovie_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrincipalMovie.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Header/Header.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Header/Header.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Header/Header.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AcctionMovie_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AcctionMovie_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AcctionMovie.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/mixins/Spinner.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/mixins/Spinner.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Spinner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Spinner_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Spinner.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/mixins/Spinner.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Carousel/MoviesSection.vue?vue&type=template&id=0035223e&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Carousel/MoviesSection.vue?vue&type=template&id=0035223e&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MoviesSection_vue_vue_type_template_id_0035223e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MoviesSection_vue_vue_type_template_id_0035223e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MoviesSection.vue?vue&type=template&id=0035223e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/MoviesSection.vue?vue&type=template&id=0035223e&scoped=true");


/***/ }),

/***/ "./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=template&id=3461a994&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=template&id=3461a994&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrincipalMovie_vue_vue_type_template_id_3461a994_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrincipalMovie_vue_vue_type_template_id_3461a994_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrincipalMovie.vue?vue&type=template&id=3461a994&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=template&id=3461a994&scoped=true");


/***/ }),

/***/ "./resources/js/components/Header/Header.vue?vue&type=template&id=770cded8&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Header/Header.vue?vue&type=template&id=770cded8&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_770cded8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_template_id_770cded8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=template&id=770cded8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Header/Header.vue?vue&type=template&id=770cded8&scoped=true");


/***/ }),

/***/ "./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=template&id=b163e5b0&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=template&id=b163e5b0&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AcctionMovie_vue_vue_type_template_id_b163e5b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AcctionMovie_vue_vue_type_template_id_b163e5b0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AcctionMovie.vue?vue&type=template&id=b163e5b0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=template&id=b163e5b0&scoped=true");


/***/ }),

/***/ "./resources/js/mixins/Spinner.vue?vue&type=template&id=e4359e0c":
/*!***********************************************************************!*\
  !*** ./resources/js/mixins/Spinner.vue?vue&type=template&id=e4359e0c ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Spinner_vue_vue_type_template_id_e4359e0c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Spinner_vue_vue_type_template_id_e4359e0c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Spinner.vue?vue&type=template&id=e4359e0c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/mixins/Spinner.vue?vue&type=template&id=e4359e0c");


/***/ }),

/***/ "./resources/js/components/Carousel/MoviesSection.vue?vue&type=style&index=0&id=0035223e&scoped=true&lang=css":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Carousel/MoviesSection.vue?vue&type=style&index=0&id=0035223e&scoped=true&lang=css ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MoviesSection_vue_vue_type_style_index_0_id_0035223e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MoviesSection.vue?vue&type=style&index=0&id=0035223e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/MoviesSection.vue?vue&type=style&index=0&id=0035223e&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=style&index=0&id=3461a994&scoped=true&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=style&index=0&id=3461a994&scoped=true&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PrincipalMovie_vue_vue_type_style_index_0_id_3461a994_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PrincipalMovie.vue?vue&type=style&index=0&id=3461a994&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carousel/PrincipalMovie.vue?vue&type=style&index=0&id=3461a994&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/Header/Header.vue?vue&type=style&index=0&id=770cded8&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Header/Header.vue?vue&type=style&index=0&id=770cded8&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Header_vue_vue_type_style_index_0_id_770cded8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Header.vue?vue&type=style&index=0&id=770cded8&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Header/Header.vue?vue&type=style&index=0&id=770cded8&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=style&index=0&id=b163e5b0&scoped=true&lang=css":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=style&index=0&id=b163e5b0&scoped=true&lang=css ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AcctionMovie_vue_vue_type_style_index_0_id_b163e5b0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AcctionMovie.vue?vue&type=style&index=0&id=b163e5b0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/pages/Categories/AcctionMovie.vue?vue&type=style&index=0&id=b163e5b0&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/mixins/Spinner.vue?vue&type=style&index=0&id=e4359e0c&lang=css":
/*!*************************************************************************************!*\
  !*** ./resources/js/mixins/Spinner.vue?vue&type=style&index=0&id=e4359e0c&lang=css ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Spinner_vue_vue_type_style_index_0_id_e4359e0c_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Spinner.vue?vue&type=style&index=0&id=e4359e0c&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/mixins/Spinner.vue?vue&type=style&index=0&id=e4359e0c&lang=css");


/***/ })

}]);