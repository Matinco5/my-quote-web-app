import { quotes } from './quotes.js';

//Selection of the needed Html elements 
let quoteContent = document.querySelector("#quote");
let author = document.querySelector("#author");
let category = document.querySelector(".category");
let nextBtn = document.querySelector(".next-btn");
let buttons = document.querySelector(".buttons");



function eventListener(){
    nextBtn.addEventListener("click", randomQuote)
    buttons.addEventListener("click", (e)=>{
        categorizedQuotes(e)
    })
}
//Generation of random number
function randomNum (){
    let rNum =  Math.floor(Math.random() * quotes.length)
    return rNum
}

//Generation of random quotes
function randomQuote(){
    let quote = quotes[randomNum()][randomNum()]
    quoteContent.textContent = quote.content
    author.textContent = quote.author 
    category.textContent = quote.category + " quote"
}

//Here, this function displays the quote according to the category selected
function categorizedQuotes(e){
    if(e.target.classList.contains('btn')){
        let quoteId = e.target.dataset.id
        let selectedQ = quotes[quoteId][randomNum()]
        quoteContent.textContent = selectedQ.content
        author.textContent = selectedQ.author 
        category.textContent = selectedQ.category + " quote"
    }
}
//Invokation of functions
randomQuote()
eventListener()