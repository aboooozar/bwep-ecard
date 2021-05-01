<<<<<<< HEAD
document.getElementById('button').addEventListener('click', function() {
  document.querySelector('.box').style.display = 'flex';
}

);
=======
var modalBtn = document.querySelector('.modal-btn');
var modalBtn1 = document.querySelector('.modal-btn1');
var modalBtn2 = document.querySelector('.modal-btn2');
var modalBtn3 = document.querySelector('.modal-btn3');




var modalBg = document.querySelector('.modal-bg');
var modalBg1 = document.querySelector('.modal-bg1');
var modalBg2 = document.querySelector('.modal-bg2');
var modalBg3 = document.querySelector('.modal-bg3');




var modalClose = document.querySelector('.modal-close');
var modalClose1 = document.querySelector('.modal-close1');
var modalClose2 = document.querySelector('.modal-close2');
var modalClose3 = document.querySelector('.modal-close3');




modalBtn.addEventListener('click',function () {
  modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click',function () {
  modalBg.classList.remove('bg-active');
});


modalBtn1.addEventListener('click',function () {
  modalBg1.classList.add('bg-active1');
});

modalClose1.addEventListener('click',function () {
  modalBg1.classList.remove('bg-active1');
});


modalBtn2.addEventListener('click',function () {
  modalBg2.classList.add('bg-active2');
});

modalClose2.addEventListener('click',function () {
  modalBg2.classList.remove('bg-active2');
});


modalBtn3.addEventListener('click',function () {
  modalBg3.classList.add('bg-active3');
});

modalClose3.addEventListener('click',function () {
  modalBg3.classList.remove('bg-active3');
});
>>>>>>> 6ed6711f0cf374e3136d7b63c50d699090096ff6
