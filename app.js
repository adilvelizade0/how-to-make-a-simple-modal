const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.btn');
const crosBtn = document.querySelector('.moadal__header__cros');
const closeBtn = document.querySelector('.madal__footer__btn__cancle');
const okBtn = document.querySelector('.madal__footer__btn__ok');

function toggleModal() {
  modal.classList.toggle('hidden');
  modalBtn.classList.toggle('hidden');
}

modalBtn.addEventListener('click', toggleModal);
crosBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
okBtn.addEventListener('click', toggleModal);
