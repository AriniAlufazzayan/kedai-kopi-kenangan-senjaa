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

document.addEventListener('DOMContentLoaded', () => {
    const shoppingCart = document.querySelector('.shopping-cart');
    const cartBtn = document.querySelector('#shopping-cart-button');
    const removeBtns = document.querySelectorAll('.remove-item');

    // Toggle shopping cart
    if(cartBtn && shoppingCart){
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            shoppingCart.classList.toggle('active');
        });
    } else {
        console.error('Tombol navbar atau shopping cart tidak ditemukan!');
    }

    // Hapus item dari cart
    removeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const item = btn.closest('.cart-item');
            if(item){
                item.remove();
            }
        });
    });
});
