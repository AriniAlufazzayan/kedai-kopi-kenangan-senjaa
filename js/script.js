const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = () => {
    searchForm.classList.toggle('active');
}

// toggle class active untuk shopping cart
const shoppingCart =document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e ) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};


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

