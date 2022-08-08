// 상단 광고 닫기버튼
const closeBtn = document.querySelector('.btn-ad-close');
closeBtn.addEventListener('click', () => {
  document.querySelector('.cgv-top-ad').style.display = 'none';
})

// 메인메뉴 마우스오버시 서브메뉴 보이게 처리
const navbar = document.querySelector('.gnb-list');
navbar.addEventListener('mouseover', (e) => {
  e.preventDefault();
  document.querySelector('.sub-menu-wrap').style.height = '359px';
})
document.querySelector('.gnb').addEventListener('mouseleave', (e) => {
  e.preventDefault();
  document.querySelector('.sub-menu-wrap').style.height = '0px';
})

// 스크롤 내리면 메뉴 고정시키기
document.addEventListener('scroll',()=>{
  if(scrollY > 180) {
    document.querySelector('.gnb').classList.add('fixed');
  } else {
    document.querySelector('.gnb').classList.remove('fixed');
  }
})

// 비디오 컨트롤 버튼
const video = document.querySelector('video');
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const soundOff = document.querySelector('.sound-off');
const soundOn = document.querySelector('.sound-on');

pauseBtn.addEventListener('click', ()=>{
  video.pause();
  pauseBtn.style.display = 'none';
  playBtn.style.display = 'block';
})

playBtn.addEventListener('click', ()=>{
  video.play();
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'block';
})

soundOff.addEventListener('click', ()=>{
  video.muted = true;
  soundOff.style.display = 'none';
  soundOn.style.display = 'block';
})

soundOn.addEventListener('click', ()=>{
  video.muted = false;
  soundOn.style.display = 'none';
  soundOff.style.display = 'block';
})

// 슬라이드버튼 처리
const allPrevBtn = document.querySelectorAll('.slide-list .prev');

let count1 = 0;
let count2 = 0;

allPrevBtn.forEach((data)=>{
  data.style.display = 'none';
})

// 무비차트
const movieChartNextBtn = document.querySelector('.movie-chart-list .next');
const movieChartPrevBtn = document.querySelector('.movie-chart-list .prev');
movieChartNextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  movieChartPrevBtn.style.display = 'block';
  if(count1 < 3) {
    nextBtn(count1, 0);
    count1++;
    if(count1 == 3) {
      movieChartNextBtn.style.display = 'none';
    }
  }
})
movieChartPrevBtn.addEventListener('click', (e) => {
  e.preventDefault();
  movieChartNextBtn.style.display = 'block';
  if(count1 > 0){
    prevBtn(count1, 0);
    count1--;
    if(count1 == 0) {
      movieChartPrevBtn.style.display = 'none';
    }
  }
})
// 상영예정작
const commingMovieNextBtn = document.querySelector('.comming-movie-list .next');
const commingMoviePrevBtn = document.querySelector('.comming-movie-list .prev');
commingMovieNextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  commingMoviePrevBtn.style.display = 'block';
  if(count2 < 3) {
    nextBtn(count2, 1);
    count2++;
    if(count2 == 3) {
      commingMovieNextBtn.style.display = 'none';
    }
  }
})
commingMoviePrevBtn.addEventListener('click', (e) => {
  e.preventDefault();
  commingMovieNextBtn.style.display = 'block';
  if(count2 > 0){
    prevBtn(count2, 1);
    count2--;
    if(count2 == 0) {
      commingMoviePrevBtn.style.display = 'none';
    }
  }
})
// 다음 버튼
function nextBtn(count, idx) {
  if(count == 0) {
    document.querySelectorAll('.slide-list ul')[idx].style.transform = `translateX(-${980+30}px)`;
  } else if (count == 1) {
    document.querySelectorAll('.slide-list ul')[idx].style.transform = `translateX(-${1960+60}px)`; 
  } else if (count == 2) {
    document.querySelectorAll('.slide-list ul')[idx].style.transform = `translateX(-${2940+90}px)`;
  }
}
// 이전 버튼
function prevBtn(count, idx) {
  if(count == 3) {
    document.querySelectorAll('.slide-list ul')[idx].style.transform = `translateX(-${1960+60}px)`;
  } else if (count == 2) {
    document.querySelectorAll('.slide-list ul')[idx].style.transform = `translateX(-${980+30}px)`;
  } else if (count == 1) {
    document.querySelectorAll('.slide-list ul')[idx].style.transform = `translateX(0px)`;
  }
}

// 탭 보여주기
const tabBtnList = document.querySelector('.tab-button .title');
const tabBtn = document.querySelectorAll('.tab-button a');
const tabCont = document.querySelectorAll('.slide-list');

tabBtnList.addEventListener('click', (e) => {
  e.preventDefault();
  showTabCont(e.target.dataset.id);
})

function showTabCont (id){
  for(let i=0; i<tabBtn.length; i++) {
    tabBtn[i].classList.remove('on');
    tabCont[i].style.display = 'none';
  }
  tabBtn[id].classList.add('on');
  tabCont[id].style.display = 'block';
}

// 이벤트 슬라이드버튼 처리
const eventNextBtn = document.querySelector('.event-list .next');
const eventPrevBtn = document.querySelector('.event-list .prev');
let eventCount = 0;

eventNextBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  eventPrevBtn.style.display = 'block';
  if(eventCount < 2) {
    document.querySelector('.event-list ul').style.transform = `translateX(-${980+21}px)`;
    eventCount++;
    if (eventCount == 1) {
      eventNextBtn.style.display = 'none';
    }
  }
})
eventPrevBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  eventNextBtn.style.display = 'block';
  if(eventCount > 0) {
    document.querySelector('.event-list ul').style.transform = `translateX(0px)`;
    eventCount--;
    if (eventCount == 0) {
      eventPrevBtn.style.display = 'none';
    }
  }
})

// 특별관 리스트 마우스오버시 해당 이미지 노출
const hallList = document.querySelectorAll('.hall-list li');
const hallImg = document.querySelectorAll('.hall-images a');

hallList.forEach((list, idx)=>{
  list.addEventListener('mouseenter', (e) => {
    e.preventDefault();
    hallList[0].classList.remove('active');
    for(let i=0;i<hallList.length;i++){
      hallImg[i].classList.remove('show');
      hallList[i].classList.remove('active');
    }
    e.target.classList.add('active');
    hallImg[idx].classList.add('show');
  })
})

// 하단 자동슬라이드 배너
const slideImgWrap = document.querySelector('.notice-client-banner ul');
const slideImg = document.querySelectorAll('.notice-client-banner ul li');
const delay = 2000;
let slideCount = 0;
let interval = setInterval(autoSlide ,delay);

function autoSlide() {
  slideCount++;
  if(slideCount === slideImgWrap.childElementCount) {
    slideCount = 0;
  }
  slideImg.forEach((data)=>{
    data.style.transform = `translateX(-${slideCount}00%)`;
  })
}

// 자동슬라이드 컨트롤 버튼
const slidePlayBtn = document.querySelector('.notice-client-banner .play');
const slidePauseBtn = document.querySelector('.notice-client-banner .pause');

slidePauseBtn.addEventListener('click', ()=>{
  clearInterval(interval);
  slidePauseBtn.style.display = 'none';
  slidePlayBtn.style.display = 'block';
})

slidePlayBtn.addEventListener('click', ()=>{
  interval = setInterval(autoSlide ,delay);
  slidePlayBtn.style.display = 'none';
  slidePauseBtn.style.display = 'block';
})