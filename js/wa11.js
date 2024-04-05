const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNames = ['../img/pic1.jpg','../img/pic2.jpg','../img/pic3.jpg','../img/pic4.jpg','../img/pic5.jpg'];

/* Declaring the alternative text for each image file */
const descr = ['close up of an eye','patterned rock','purple pansies','hieroglyphs','moth'];

/* Looping through images */
for (i in fileNames){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', fileNames[i]);
    newImage.setAttribute('alt', descr[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', e => {
        //displayedImage.setAttribute('src','../img/'+fileNames[i]);
        //displayedImage.setAttribute('alt',descr[i]);
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,50%)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });