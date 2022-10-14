const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'The time was 2 am. It was a crisp 94 fahrenheit outside, quite literally the opposite of a dark and stormy night. :insertx:, in all their glory, went for a (literal) hot girl walk. When they got to :inserty:, they :insertz:. Bob, the innocent bystander they are, watched the whole thing in horror. It was quite a scene — :insertx: weighs 300 pounds, and it was a hot night.'
let insertX = ['Phredeigh Himself', 'Desmond the Moon Bear', 'Steve the Stegosaurus', 'Walter White', 'Mike Wazowski', 'Shrek'];
let insertY = ['the cereal lounge', 'Disneyland', 'the center of the earth', 'Los Pollos Hermanos', 'the shady park up the street', 'Shreks Swamp'];
let insertZ = ['ate a bowl of cereal', 'jumped into the lake', 'broke down screaming crying and throwing up', 'snorted some smarties', 'hulk smashed the ground', 'stole candy straight out of the hands of some children', 'realized that god gives his silliest little battles to his goofiest little soldiers'];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714) + ' stone';
    const temperature =  Math.round(34.444) + ' celsius';
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);

  }

  story.textContent = newStory;

  story.style.visibility = 'visible';
}