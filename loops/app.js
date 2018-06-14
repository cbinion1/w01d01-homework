

//What is an array?
//an array is a list of values
//

//const list = ['string', {}, [], 1, null, undefined];

//Accessing an array:
//We use the index number and the name of the array in order to access whatever item we happen to want
//in the array.

//console.log(list[0]);

//console.log(list.length);

//const ghostBusters1984 = ["Venkman", "Spengler", "Stantz", "Zeddemore", "Melnitz", "Barrett", "Tully"];

//console.log(ghostBusters1984 [0]);

//console.log(ghostBusters1984 [2]);

//console.log(ghostBusters1984.length);


//const kitchenSink = ["dirty spoon", "sponge", "plate that's gross", "soap", "water"];

//for(let i = 0; i < kitchenSink.length; i++){
//	console.log(`This is in my sink: ${kitchenSink[i]}`);
//};

//Every other item in the array.
//for (let i = 0; i < kitchenSink.length; i += 2){
//	console.log(`This is in my sink: ${kitchenSink[i]}`);
//};


//const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch",
//            "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];

//for(let i = 0; i < drSeuss.length; i++){
//    	console.log(drSeuss[i]);
//}
//for (var i = 1; i < drSeuss.legnth; i+=2) {
//	console.log(drSeuss[i]);
//	console.log(i);
//};


// const foodSelections = ["pizza", "ramen", "tea", "ice cream", "apple"];

// for(let i = 0; i < foodSelections.length; i++){
// 	if(i % 2 === 0){
// 		console.log(foodSelections.length[i], i);
// 	}
// }

// for (let i = 0; i < foodSelections.length; i++){

// 	if((i === 3) || (i % 2 === 0)){
// 		console.log(foodSelections[i, i, "<---stuff"]);
// 	}
// }


// const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety",
//                         "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];

//     for(let i = 0; i < looneyTunesChars.length; i++){
//     	if(i % 2 === 0){
//     		console.log(looneyTunesChars[i]);
//     	if(i === looneyTunesChars[3])
//     		console.log(looneyTunesChars[i]);
//     	}
//     }


// Changing elements inside of an array;

// const veggies = ["red pepper", "leek", "pumpkin", "broccoli"];

// veggies[3] = "spinach";

// console.log(veggies);



// const favMovies = ["Star Wars", "Last of the Mohicans", "The Last Starfighter"];
// favMovies.push("Flight of the Navigator");
// favMovies.sort();
// favMovies.reverse();
// console.log(favMovies);

for (let i = 50; i > 19; i--){
	console.log(i);
}

// for (var i=0; i<Infinity; i++) {
//   console.log(i);
// }

const classmates = ["Bridjet", "Nathan", "Matias", "Mike", "Jason", "Reuben", "Ben", "Lane", "John", "Chris", "Terry", "Ann", "Katelyn", "Naomi", "Jeff"];

for (var i = 0; i < classmates.length; i += 2) {
	console.log(classmates[i]);
}

const menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},{name: "donut", glutenFree: false},{name: "steak", glutenFree: true},{name: "chicken", glutenFree: true},{name: "cheeseburger", glutenFree: false}];

for (var i = 0; i < menu.length; i++) {
	if(glutenFree === true){
		console.log
	}
}




