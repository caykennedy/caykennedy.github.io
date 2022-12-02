const json =
[
    {
        "Name" : "Phredeigh Cereal-Lounge",
        "Profile" : "Phredeigh is the founder and owner of Freddie's Secret Cereal Lounge. He has a degree in Cereology from the University of Kellogg's, and has dedicated his life to his love of cereal.",
        "imgSrc"  : "",
        "imgAlt" : "",
        "cerealRanking" : [
            {
                "cerealName" : "Frosted Flakes",
                "review" : ""
            },
            {
                "cerealName" : "Honey Nut Cheerios",
                "review" : ""
            },
            {
                "cerealName" : "Trix",
                "review" : ""
            },
            {
                "cerealName" : "Cocoa Puffs",
                "review" : ""
            },
            {
                "cerealName" : "Reeses Puffs",
                "review" : ""
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
                "review" : "Tasty"
            },
            {
                "cerealName" : "Kix",
                "review" : "Dont worry about it"
            },
            {
                "cerealName" : "Special K With Strawberries",
                "review" : "Fagettaboutit"
            },
            {
                "cerealName" : "Cheerios",
                "review" : "Gobagool"
            },
            {
                "cerealName" : "Weetabix",
                "review" : "Gobble Ghoul"
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
                "review" : ""
            },
            {
                "cerealName" : "Lucky Charms",
                "review" : ""
            },
            {
                "cerealName" : "Frosted Flakes",
                "review" : ""
            },
            {
                "cerealName" : "Frosted Mini Wheats",
                "review" : ""
            },
            {
                "cerealName" : "Captain Crunch Berries",
                "review" : ""
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
                "review" : ""
            },
            {
                "cerealName" : "Apple Jacks",
                "review" : ""
            },
            {
                "cerealName" : "Froot Loops",
                "review" : ""
            },
            {
                "cerealName" : "Honey Smacks",
                "review" : ""
            },
            {
                "cerealName" : "Cinnamon Toast Crunch",
                "review" : ""
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
                "review" : ""
            },
            {
                "cerealName" : "Cocoa Puffs",
                "review" : ""
            },
            {
                "cerealName" : "Chocolate Cheerios",
                "review" : ""
            },
            {
                "cerealName" : "Krave",
                "review" : ""
            },
            {
                "cerealName" : "Cocoa Pebbles",
                "review" : ""
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
