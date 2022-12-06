let loaderContainer = document.querySelector('.loadingContainer');
let cereal = document.querySelector('#cereal');

const spinTiming = {
    duration: 650,
    iterations: 1,
    fill: 'forwards'
}

const cerealSpinIn = [
    { transform: 'rotate(0) scale(0)' },
    { transform: 'rotate(360deg) scale(1)' }
];

const cerealSpinOut = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];


const fadeTiming = {
    duration: 500,
    iterations: 1,
    fill: 'forwards'
}

const fadeLoader = [
    {opacity: 100},
    {opacity: 0}
]

cereal.animate(cerealSpinIn,spinTiming).finished
.then(response=>cereal.animate(cerealSpinOut,spinTiming).finished)
.then(response=>loaderContainer.animate(fadeLoader, fadeTiming).finished)
.then(response => loaderContainer.parentElement.removeChild(loaderContainer));