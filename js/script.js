const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const searchForm = document.querySelector('.search-form');
const shoppingCart = document.querySelector('.shopping-cart');
const searchButton = document.querySelector('#search-button');
const cartButton = document.querySelector('#shopping-cart-button');

// hamburger menu
hamburgerMenu.onclick = () => {
    navbarNav.classList.toggle('active');
};

// search
searchButton.onclick = () => {
    searchForm.classList.toggle('active');
};

// shopping cart
cartButton.onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

// klik di luar elemen
document.addEventListener('click', function (e) {

    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    if (!cartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }

});

const menus = [
{
    nama: "Espresso",
    harga: "IDR 15K",
    gambar: "img/menu/espresso.jpg"
},
{
    nama: "Kopi Susu",
    harga: "IDR 20K",
    gambar: "img/menu/kopi-susu.jpg"
},
{
    nama: "Latte",
    harga: "IDR 22K",
    gambar: "img/menu/latte.jpg"
}
];

const menuList = document.getElementById("menu-list");

menus.forEach(menu => {
    menuList.innerHTML += `
    <div class="menu-card">
    <img src="${menu.gambar}" class="menu-card-img">
    <h3 class="menu-card-title">- ${menu.nama} -</h3>
    <p class="menu-card-price">${menu.harga}</p>
    </div>
`;
});

