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



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) { /*이름,반복회수*/
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, /**순차적으로. 처음은 0, 0 * 0.7 = 0, 1 * 0.7 = 0.7, 2* 0.7 = 1.4 초 뒤 */
        opacity: 1
    });  /** 요소, 지속시간, 옵션 */
});



/** new Swiper(선택자 , 옵션) */
new Swiper('.notice-line .swiper-container', {
    /** 옵션(객체 데이터 형태) */
    direction: 'vertical',   /** 방향 수직으로 */
    autoplay: true,/** 자동 재생 여부 */
    loop: true  /** 반복 재생 (4번째 이후 1번째로 넘어가는 부분*/
});   /** 생성자 생성.(new) */

new Swiper('.promotion .swiper-container', {
    /** 스와이퍼 기본값 direction은 horizontal */
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000  //500 = 0.5초에 한번씩 이미지 슬라이드 (기본값은 3000)
    },
    pagination: {
        el: '.promotion .swiper-pagination',  //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어 가능 여부 ( 클릭 할 수 있는지 )
    },
    navigation: {
        prevEl: '.promotion .swiper-prev', //이전 슬라이드 보는 버튼
        nextEl: '.promotion .swiper-next'  //다음 슬라이드 보는 버튼
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion  /** 반대가 되게 만들기 .*/
    /** false의 반댓값 , true 로 */
    if (isHidePromotion) {
        /** 숨김 처리 ! */
        promotionEl.classList.add('hide');/** hide라는 클래스 추가 */
    } else { /** false 보임처리*/
    promotionEl.classList.remove('hide');
    }
})