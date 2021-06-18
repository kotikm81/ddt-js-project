export default function getRefs() {
  return {
    inputEl: document.querySelector('#search-form input'),
    galleryListEl: document.querySelector('.gallery-list'),
    headerEl: document.querySelector('.header-main'),
    jsWarningEl: document.querySelector('#js-warning'),
    signUpModal: document.querySelector('.sign-up'),
    headerHome: document.querySelector('.header-home'),
    navigator: document.querySelector('.navigation'),
    logoBtn: document.querySelector('#logoBtn'),
    homeBtn: document.querySelector('#index'),
    libraryBtn: document.querySelector('#library'),
    form: document.querySelector('#search-form'),
    buttonBox: document.querySelector('#js-buttons'),
    movieBackdrop: document.querySelector('.movie-backdrop'),
    modalCloseBtn: document.querySelector('[data-action="modal-close"]'),
    openTeamModalBtn: document.querySelector('[data-modal-open]'),
    closeTeamModalBtn: document.querySelector('[data-modal-close]'),
    teamBackdrop: document.querySelector('.backdrop'),
    teamModal: document.querySelector('[data-modal]'),
    cardsArrRef: document.querySelectorAll('.team-list__card'),
    cardsImages: document.querySelectorAll('.team-list__img'),
    movieWrap: document.querySelector('.movie-wrap'),
    libraryWatchedBtn: document.querySelector('.watched-js'),
    libraryQueueBtn: document.querySelector('.queue-js'),
    toTopBtn: document.querySelector('.uptop'),
    bodyEl: document.querySelector('body'),
    footerEl: document.querySelector('.footer'),
    emptyLibraryList: document.querySelector('#empty-library-text'),
    chooseLibraryList: document.querySelector('#choose-library-text'),
    sliderEl: document.querySelector('.slider-wrapper'),
    inputEl: document.querySelector('.search-field'),
  };
}
