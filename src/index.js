import './main.css';
import logo from './assets/logo.png'
import hidden from './components/hiddenMenu';
import isValidEmail from './components/isValid';
import hero from './assets/hero.png';
import tintyava from './assets/proj-tintyava-cropped.jpeg';
import mandur from './assets/proj-mandur-cropped.jpeg';
import elegant from './assets/about-us.png';
import elegant2 from './assets/about-us-2.jpeg';
import chair1 from './assets/rectangle-13.jpeg';
import chair2 from './assets/rectangle-14.jpeg';
import chair3 from './assets/rectangle-15.jpeg';
import blog from './assets/blue-1.jpeg';
import emailjs from 'emailjs-com';

const logoDom = document.getElementById('logo-img');
const hamContainer = document.getElementById('hamContainer');
const logoMenu = document.getElementById('logo-menu');
const heroImg = document.getElementById('hero');
const tintyavaImg = document.getElementById('tintyava');
const mandurImg = document.getElementById('mandur');
const elegantImg = document.getElementById('elegantImg');
const elegantImg2 = document.getElementById('elegantImg2');
const chairs = document.querySelectorAll('.shop-img');
const blogImg = document.querySelectorAll('.blog-img');
const logoFooter = document.getElementById('logo-img-footer');
const userInput = document.getElementById('email');
let userEmail = '';
const form = document.querySelectorAll('.form-email');
const alertElement = document.getElementById('alert');
const tryAgainElement = document.getElementById('alert-2');
const chairsArr = [chair1, chair2, chair3];

hamContainer.addEventListener('click', hidden);

logoDom.src = logo;
logoMenu.src = logo;
heroImg.src = hero;
heroImg.style.maxWidth = "100%";
heroImg.style.height = "auto";
tintyavaImg.src = tintyava;
tintyavaImg.style.maxWidth = "100%";
tintyavaImg.style.height = "auto";
mandurImg.src = mandur;
mandurImg.style.maxWidth = "100%";
mandurImg.style.height = "auto";
elegantImg.src = elegant;
elegantImg2.src = elegant2;
logoFooter.src = logo;
logoFooter.style.width = "130px";
logoFooter.style.height = '120px';

for(let i = 0; i<chairs.length; i++){
    chairs[i].src = chairsArr[i];
    chairs[i].style.maxWidth = "100%";
    chairs[i].style.height = "auto";
}

blogImg.forEach((x) => {
    x.src = blog;
});

userInput.onchange = () =>{
    userEmail = userInput.value;
}

emailjs.init('X-AB_n2pcSTX6Qiar');
form[0].addEventListener('submit', (event) => {
    event.preventDefault();
    if(isValidEmail(userEmail)){
        emailjs.sendForm('service_jpx31y6', 'template_tox9m3w', form[0])
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alertElement.style.display = "block";
        setTimeout(() => {
            alertElement.style.display = "none"
        }, 5000);
    }
    else{
        tryAgainElement.style.display = "block";
        setTimeout(() => {
            tryAgainElement.style.display = "none"
        }, 5000);
    }
});


