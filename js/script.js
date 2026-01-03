const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const searchForm = document.querySelector('.search-form');
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
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
