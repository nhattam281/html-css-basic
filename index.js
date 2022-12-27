const btnBuys = document.querySelectorAll('.js-place-buy-btn');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');

// Hàm mở hiển thị modal khi nhấn button (thêm class open vào thẻ modal)
function showModalBuy() {
    modal.classList.add('open');
}

// Hàm đóng modal khi nhấn button close (gỡ class open vào thẻ modal)
function removeModalBuy() {
    modal.classList.remove('open');
}

for (const btnBuy of btnBuys) {
    btnBuy.addEventListener('click', showModalBuy);
}

modalClose.addEventListener('click', removeModalBuy);

modal.addEventListener('click', removeModalBuy);

// Hàm ngăn sự kiện "nổi bọt" khi click vào thẻ modalcontainẻ
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});
