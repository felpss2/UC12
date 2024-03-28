function validaBusca() {
    if (document.querySelector('#q').value == "") {
        alert('Não pode ficar em branco!');
        return false;

    }
}

var banners = ["img/destaque-home.jpg", "img/destaque-home2.jpg"]
var bannerAtual = 0
function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2
    document.querySelector('.destaque img').src = banners[bannerAtual]
}
var timer = setInterval(trocaBanner, 4000);

document.querySelector('#form-busca').onsubmit = validaBusca;

var controle = document.querySelector('.pause');
controle.onclick = function () {
    if (controle.className == 'pause') {
        clearInterval(timer);
        controle.className = 'play';
    } else {
        timer = setInterval(trocaBanner, 4000);
        controle.className = 'pause';
    } return false;
};
