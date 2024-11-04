const users = [
	{
		name: "Mykhailo",
		age: 32,
		sex: "male",
	},
	{
		name: "Marharyta",
		age: 24,
		sex: "female",
	},
	{
		name: "Ilia",
		age: 26,
		sex: "male",
	},
	{
		name: "Sara",
		age: 17,
		sex: "female",
	},
	{
		name: "Petro",
		age: 14,
		sex: "male",
	},
	{
		name: "Pedro",
		age: 44,
		sex: "male",
	}
];

let count = {
	men : 0,
	woman : 0
}
/* users.forEach(function(element,index) {
	element.sex === "male" ? count.men++ : count.woman++; 
})
console.log(count); */

const adults = users.filter(item => item.age >= 25);

console.log(adults);



					for(let item of users) {
						console.log(item);
}


// const correctNames = users.map(function (item) {
// 	return item.sex === "male" ? "Mr. " + item.name : "Mrs." + item.name;
// });

const sum = users.reduce(function (accumulator, currentValue) {
	return accumulator + currentValue.age;
}, 0);
// console.log(correctNames);
// console.log(users);

// console.log(sum/users.length);

const findObj = users.filter(function (item) {
	return item.age > 18;
});

// console.log(findObj);

// const findSomeSex = users.forEach(function (item) {
// 	console.log(item);
// });

// console.log(findSomeSex);

function getMoneyRemaining(bankAccount, banknoteDenomination = 100) {
	return bankAccount % banknoteDenomination;
};

// console.log(getMoneyRemaining(1473,20));
// console.log(getMoneyRemaining(1250,50));