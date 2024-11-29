// ハンバーガーメニューの開閉処理
const menuIcon = document.querySelector('.menu-icon');
const gnavList = document.querySelector('.gnav-list');

menuIcon.addEventListener('click', function() {
    gnavList.classList.toggle('open'); // メニューを表示・非表示に切り替える
});
