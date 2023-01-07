
/* jshint ignore:start*/
const speakersData = [
  {
    photo: './images/one.jpg',
    name: 'Hellen john',
    title: 'CE0 of African movies Festival',
    description:
      'Founder of the African movies festival, with 15 years experience in film making',
  },
  {
    photo: './images/two.jpg',
    name: 'Bazu Bazu',
    title: 'CE0 of African movies Festival',
    description:
      'Founder of the African movies festival, with 15 years experience in film making',
  },
  {
    photo: './images/three.jpg',
    name: 'Kevin Mzito',
    title: 'CE0 of African movies Festival',
    description:
      'Founder of the African movies festival, with 15 years experience in film making',
  },
  {
    photo: './images/four.jpg',
    name: 'Felix Mtongoi',
    title: 'CE0 of African movies Festival',
    description:
      'Founder of the African movies festival, with 15 years experience in film making',
  },

  {
    photo: './images/five.jpg',
    name: 'Linda Henrys',
    title: 'CE0 of African movies Festival',
    description:
      'Founder of the African movies festival, with 15 years experience in film making',
  },
  {
    photo: './images/six.jpg',
    name: 'Shruti Shah',
    title: 'CE0 of African movies Festival',
    description:
      'Founder of the African movies festival, with 15 years experience in film making',
  },
];

const speakerDetails = document.querySelector('.speaker-area');

speakersData.forEach((speaker) => {
  speakerDetails.innerHTML += `<article class='speakers-detail'>
          <img src="${speaker.photo}" class="image" ></img>
        <div class='col-2'>
          <h3>${speaker.name}</h3>
          <p style="color:#ed5342"><em>${speaker.title}</em></p>
          <span></span>
          <p>
          ${speaker.description} 
          </p>
        </div>
        </article> `;
});

/* jshint ignore:end */

const mobileMenu = document.querySelector('.main-menu');
const closeBtn = document.getElementById('close');
const hamburger = document.getElementById('menu-bar');

hamburger.onclick = function showMenu() {
  mobileMenu.style.display = 'block';
};
closeBtn.onclick = function closeMenu() {
  mobileMenu.style.display = none = 'none';
};
