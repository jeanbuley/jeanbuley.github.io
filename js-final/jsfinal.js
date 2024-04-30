volume = 0;
generated = 0;

displayVolume = "Volume: " + volume;
displayGenerated = "Generated Number: " + generated;

display();

const btnG = document.querySelector('#generate');
btnG.addEventListener('click', generateNumber);

const btnA = document.querySelector('#add');
btnA.addEventListener('click', addNumber);

const btnS = document.querySelector('#subtract');
btnS.addEventListener('click', subtractNumber);

const btnR = document.querySelector('#reset');
btnR.addEventListener('click', resetNumber);

function generateNumber(){
    generated = Math.floor(Math.random() * 101);
    displayGenerated = "Generated Number: " + generated;
    console.log(generated);
    console.log(volume);
    display();
}

function addNumber(){
    volume += generated;
    generated = 0;
    displayVolume = "Volume: " + volume;
    displayGenerated = "Generated Number: " + generated;
    console.log(generated);
    console.log(volume);
    display();
}

function subtractNumber(){
    volume -= generated;
    generated = 0;
    displayVolume = "Volume: " + volume;
    displayGenerated = "Generated Number: " + generated;
    console.log(generated);
    console.log(volume);
    display();
}

function resetNumber(){
    volume = 0;
    generated = 0;
    displayVolume = "Volume: " + volume;
    displayGenerated = "Generated Number: " + generated;
    console.log(generated);
    console.log(volume);
    display();
}

function display(){
    const volumeText = document.querySelector('#total');
    volumeText.textContent = displayVolume;

    const generatedText = document.querySelector('#generated');
    generatedText.textContent = displayGenerated;
}


