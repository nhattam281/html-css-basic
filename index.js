const btnBuys = document.querySelectorAll('.js-place-buy-btn');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');

//responsive
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
var menuItems = document.querySelectorAll('.nav li a[href*="#"]');
console.log(menuItems);

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

//header responsive
// Đóng mở menu
mobileMenu.onclick = function () {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
};

// tự động đóng khi nhấn vào menu

for (i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function (Event) {
        var isParentMenu =
            this.nextElementSibling &&
            this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    };
}
