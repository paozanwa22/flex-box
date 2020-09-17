const menuToggle = document.querySelector('.menu-toggle input'); // mengambil menu togel yang berada di file index.html
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () { //jika menuToggle di click jalankan function
    nav.classList.toggle('slide'); //toggle = kalau ada tulisan slide, hilangkan tapi kalau tidak ada tambahkan (terjadi di dalam html) (cara membuat clas di html dan cara menghilangkan melalui JS)
});