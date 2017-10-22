var inquirer = require("inquirer");


function Words(word){
 this.word = word
 this.printWord = function(){
 console.log("Word: " + this.word)	

	 }
}	

var word_1 = new Words("wolves");
var word_2 = new Words("muscle");
var word_3 = new Words("thievery");
var word_4 = new Words("replicate");
var word_5 = new Words("jungle");
var word_6 = new Words("wimpy");
var word_7 = new Words("tumultuous")


var word_bank = [
	word_1,
	word_2,
	word_3,
	word_4,
	word_5,
	word_6,
	word_7
]


var randWord = word_bank[Math.floor(Math.random() * word_bank.length)];

//console.log(randWord.word)

function makeWordArray(){ 
var wordArr = [];
for (var i = 0; i < randWord.word.length; i++){
	var indexWord = randWord.word.charAt(i);
	//console.log(indexWord)
	wordArr.push(indexWord);
	}
//console.log(randWord.word.length)

console.log(wordArr);
 }
 makeWordArray();



//why am I not saying this.printWord
//what's wrong with console.log(word_1)