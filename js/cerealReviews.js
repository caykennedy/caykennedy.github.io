const json =
[
    {
        "Name" : "Phredeigh Cereal-Lounge",
        "Profile" : "Phredeigh is the founder and owner of Freddie's Secret Cereal Lounge. He has a degree in Cereology from the University of Kellogg's, and has dedicated his life to his love of cereal.",
        "imgSrc"  : "./img/clipart-fruit-cereal-1.png",
        "imgAlt" : "A Bowl of Cereal",
        "cerealRanking" : [
            {
                "cerealName" : "Frosted Flakes",
                "review" : "A delectable combination of the classic corn flake with a sugary twist. Flavors the milk and leaves the diner wanting to drink every last drop."
            },
            {
                "cerealName" : "Honey Nut Cheerios",
                "review" : "One can never go wrong with Honey Nut Cheerios. These delicious loops were my introduction to the world of cereal, and have a special place in my heart."
            },
            {
                "cerealName" : "Trix",
                "review" : "Not just for kids, this cereal is a delightful treat for all ages."
            },
            {
                "cerealName" : "Cocoa Puffs",
                "review" : "I am a large fan of cereals that flavor the milk afterwards, and Cocoa Puffs certainly do that."
            },
            {
                "cerealName" : "Reeses Puffs",
                "review" : "The peanut butter chocolate flavor with milk is absolutely delectable."
            }
        ]
    },
    {
        "Name" : "Leon Von Leopard",
        "Profile" : "Leon is one of Phredeigh's business partners who studied Cereology at the University of General Mills. He is quite the health nut, and is always trying to stay fit.",
        "imgSrc"  : "./img/leon.png",
        "imgAlt" : "Leon",
        "cerealRanking" : [
            {
                "cerealName" : "Honey Bunches of Oats",
                "review" : "Although they are not the most healthy, they are pleasantly sweet without quite as much sugar as most cereal."
            },
            {
                "cerealName" : "Kix",
                "review" : "My favorite take on corn flakes, Kix has the same great taste with an interesting texture."
            },
            {
                "cerealName" : "Special K With Strawberries",
                "review" : "The strawberries are just amazing, quite delicious and healthy at the same time."
            },
            {
                "cerealName" : "Cheerios",
                "review" : "A timeless classic that nobody can forget, original Cheerios are not too sweet."
            },
            {
                "cerealName" : "Weetabix",
                "review" : "This British cereal may be difficult to find in the United States, but it is truly one that everyone should try."
            }
        ]
    },
    {
        "Name" : "Mailman Steve",
        "Profile" : "Steve is our mail man, but we trust his opinions on cereal.",
        "imgSrc"  : "./img/steve.png",
        "imgAlt" : "Steve",
        "cerealRanking" : [
            {
                "cerealName" : "Fruity Pebbles",
                "review" : "They taste pretty good!"
            },
            {
                "cerealName" : "Lucky Charms",
                "review" : "They keep me going!"
            },
            {
                "cerealName" : "Frosted Flakes",
                "review" : "They have plenty of sugar!"
            },
            {
                "cerealName" : "Frosted Mini Wheats",
                "review" : "They wake me up in the morning!"
            },
            {
                "cerealName" : "Captain Crunch Berries",
                "review" : "They're very crunchy!"
            }
        ]
    },
    {
        "Name" : "Kevin",
        "Profile" : "Kevin threatened us with a knife. He's not qualified to review cereal. Please, we're being held hostage.",
        "imgSrc"  : "./img/kevin.png",
        "imgAlt" : "Kevin",
        "cerealRanking" : [
            {
                "cerealName" : "Captain Crunch Berries",
                "review" : "I like the crunch."
            },
            {
                "cerealName" : "Apple Jacks",
                "review" : "I like the milk flavor."
            },
            {
                "cerealName" : "Froot Loops",
                "review" : "I like the fruit."
            },
            {
                "cerealName" : "Honey Smacks",
                "review" : "I like the sugar."
            },
            {
                "cerealName" : "Cinnamon Toast Crunch",
                "review" : "I like the cinnamon."
            }
        ]
    },
    {
        "Name" : "Jumpin' Jimothy",
        "Profile" : "Jimothy is just a little guy, but he's got big opinions! He studied with Phredeigh at the University of General Mills, and if we're being honest with you, Jimothy throws the best parties.",
        "imgSrc"  : "./img/Jimothy.png",
        "imgAlt" : "Jimothy",
        "cerealRanking" : [
            {
                "cerealName" : "Count Chocula",
                "review" : "I love the chocolate!"
            },
            {
                "cerealName" : "Cocoa Puffs",
                "review" : "Mmmmm choccy milk."
            },
            {
                "cerealName" : "Chocolate Cheerios",
                "review" : "Chocolate Tasty."
            },
            {
                "cerealName" : "Krave",
                "review" : "Choclatey goodness."
            },
            {
                "cerealName" : "Cocoa Pebbles",
                "review" : "Chocolate chocolate chocolate!"
            }
        ]
    }
]

const phredeighButton = document.querySelector('#Phredeigh');
const leonButton = document.querySelector('#Leon');
const kevinButton = document.querySelector('#Kevin');
const steveButton = document.querySelector('#Steve');
const jimothyButton = document.querySelector('#Jimothy');

let imgArea = document.querySelector('#charPortrait');
let nameArea = document.querySelector('#charName');
let profileArea = document.querySelector('#profile');
let listArea = document.querySelector('#cerealRankings');
let topFiveHeader = document.querySelector('#topFive');
let reviewArea = document.querySelector('.reviewContainer')

phredeighButton.addEventListener('click', function(){change(0)});
leonButton.addEventListener('click', function(){change(1)});
steveButton.addEventListener('click', function(){change(2)});
kevinButton.addEventListener('click',function(){change(3)});
jimothyButton.addEventListener('click',function(){change(4)});



function change(num)
{
    imgArea.setAttribute('src',json[num]['imgSrc']);
    imgArea.setAttribute('alt',json[num]['imgAlt']);
    nameArea.textContent = json[num]['Name'];
    profileArea.textContent = json[num]['Profile'];
    topFiveHeader.textContent = json[num]['Name'] + "'s Top Five"

    listArea.replaceChildren();

    for (let i = 0; i < 5; i++)
    {
        var li = document.createElement('li');
        li.innerText = json[num]['cerealRanking'][i]['cerealName'] + " - " + json[num]['cerealRanking'][i]['review'];
        listArea.appendChild(li);
    }

    reviewArea.removeAttribute("style");

}
