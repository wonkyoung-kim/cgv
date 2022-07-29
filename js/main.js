// 상단 광고 닫기버튼
let closeBtn = document.querySelector('.btn-ad-close');
closeBtn.addEventListener('click', () => {
  document.querySelector('.cgv-top-ad').style.display = 'none';
})

// 메인메뉴 마우스오버시 서브메뉴 보이게 처리
let navbar = document.querySelector('.gnb-list');
navbar.addEventListener('mouseover', (e) => {
  e.preventDefault();
  document.querySelector('.sub-menu-wrap').style.height = '359px';
})
document.querySelector('.gnb').addEventListener('mouseleave', (e) => {
  e.preventDefault();
  document.querySelector('.sub-menu-wrap').style.height = '0px';
})