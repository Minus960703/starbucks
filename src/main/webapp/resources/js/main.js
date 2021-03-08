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

const badgeEl = document.querySelector('header .badges'); /*header 안에 badges 찾기*/

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if(window.scrollY > 500){   //스크롤이 아래로 가면 뱃지 삭제
        //배지 숨기기
        // badgeEl.style.display = 'none';
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,      //뱃지를 0.6초동안 애니메이션 처리
            display: 'none'
        }); //0.6초
    }else{
        //배지 보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,      //뱃지를 0.6초동안 애니메이션 처리
            display: 'block'
        }); //0.6초
    }
}, 300)); /*300 = 0.3초 0.3초단위로 부하를 줘서 함수 실행되는거 방지*/
// _.throttle(함수, 시간)