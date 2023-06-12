// variables

let btn = document.querySelector('#new-quote') ;
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: "The best way to find yourself to lose yourself in the service of others",
    person: 'Mahatma Gandhi'
}, 
{
    quote: "If you want to live a happy life, tie it to a goal, not to people or things",
    person: 'Albert Einstein'
},
{
    quote: "Your time is limited, so odnt waste it living simeine else's life.",
    person: 'Steve Jobs'
},
{
    quote: "Tell me and I forget. Teach me and I remember. Invole me and I learn.",
    person: 'Benjamin Franklin'
}, 
{
    quote: "A journey of a thousand miles starts with a single step.",
    person: 'Lou Tzu'
},
{
    quote: "Our live s begin to end when we become silent about the things that matter",
    person: 'Martin Luther King Jr'
},
{
    quote: "It does not matter how slowly you go as long as you don't stop.",
    person: 'Confucius'
}
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()* quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})