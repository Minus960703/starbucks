const searchEl = document.querySelector('.search'); /*클래스명 검색해서 찾아내기*/
const searchInputEl = searchEl.querySelector('input');  /*searchEl안에서 input 찾아냄*/

searchEl.addEventListener('click', function () {
    // Logic..
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색'); /*html의 속성을 attribute라 함*/
    /*속성 이름 , 넣을 내용*/
});

searchInputEl.addEventListener('blur', function () { /*포커스 해제하면 blur*/
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', ''); /*html의 속성을 attribute라 함*/
    /*속성 이름 , 넣을 내용*/
});