const buttonBack = document.querySelector('.back_button');

const buttonForward = document.querySelector('.forward_button');

const images = ['luffy.jpg', 'zoro.jpg', 'chopper.jpg', 'nami.jpg', 'usopp.jpg', 'franky.jpg', 'robin.jpg', 'sanji.jpg', 'jinbei.jpg', 'brook.jpg'];
let i = 0;
const image = document.querySelector('img');

image.setAttribute('src', images[i]);

buttonBack.onclick = function () {
  i -= 1;
  if (i < 0) {
    i = images.length - 1;
  }
  image.setAttribute('src', images[i]);
};

buttonForward.onclick = function () {
    i += 1;
    if (i >= images.length) {
      i = 0;
    }
    image.setAttribute('src', images[i]);
  };
