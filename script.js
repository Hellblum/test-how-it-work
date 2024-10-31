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
];

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

console.log(findObj);


