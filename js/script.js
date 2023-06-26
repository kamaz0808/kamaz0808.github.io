
/* Ev tapşırığı:

1) Bütün reklam şəkillərini silin (saytın sağ tərəfində)

2) Filmin janrını "Komediya"-dan на "Drama" -ya dəyişin
Posterin arxa fon şəkilini "bg.jpg" ilə dəyişin. Şəkil "img" qovluğunda yerləşir. Bunun üçün ancaq JS-dən istifadə edin.

4) Baxılmış kinoların siyahısını JS ilə silin, əlifbaya görə sıralayın.

5) "movieDB"-də olan kino adları ilə əvəz edirik (stili HTML-dən götürün) və əlavə edilmiş kino adları nömrələnsin */

'use strict';

const movieDB = {
    movies: [
        "logan",
        "titanic",
        "Bəyin oğurlanması",
        "Xaç atası",
        "Avatar 2"
    ]
};

const reklam = document.querySelectorAll('.promo__adv img');
const janr = document.querySelector('.promo__genre');
const bgimage = document.querySelector('.promo__bg');
const kinolar = document.querySelector('.promo__interactive-list');
const addForm = document.querySelector('Form.add');
const addInput = document.querySelector('adding__input');
const checkbox = document.querySelector('[type ="checkbox"');

addForm.addEventListener('submit' , (e) => {


    const newFilm = addInput.value;
    const favorite = checkbox;
    movieDB.movies.push(newFilm);
    sortArr(movieDB.movies);
});

 const saytDeyis = () => {

};
    
 const rreklamPoz = () => {

};

 const sortArr = () => {

};

const yeniMovieYarat= () => {

};


reklam.forEach(item => {
    item.remove();
});


janr.textContent = 'DRAM';

bgimage.style.backgroundImage = 'url(../img/bg.jpg)';

console.log(kinolar.innerHTML);
kinolar.innerHTML ='';

movieDB.movies.sort();

movieDB.movies.forEach((kino , i) => {
kinolar.innerHTML  += `
<li class="promo__interactive-item">${i+1}. ${kino}
      <div class="delete"></div>
    </li>

`;
});


saytDeyis();
rreklamPoz(reklam);
sortArr(movieDB.movies);
yeniMovieYarat(kinolar , movies);