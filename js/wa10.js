const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

storyText = "It was 94 fahrenheit, so :insertX: left the werkroom. When she got :insertY: she was gagged, then :insertZ:. Rupaul saw the whole thing, and had her sashay away — :insertX:'s wig weighs 300 pounds, and she was not America's next top drag queen.";
insertX = ["Nymphia Wind", "Plane Jane", "Dawn"];
insertY = ["outside", " to the runway", "backstage"];
insertZ = ["bombed snatch game","flopped the lipsync","had her wig snatched"];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  const XItem = randomValueFromArray(insertX);
  const YItem = randomValueFromArray(insertY);
  const ZItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertX:", XItem);
  newStory = newStory.replaceAll(":insertY:", YItem);
  newStory = newStory.replaceAll(":insertZ:", ZItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Rupaul", "Guest judge " + name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + " stone";
    const temperature =  Math.round((94-32)*(5/9)) + " centigrade";
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

