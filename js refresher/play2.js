const person = {
	name: 'Wen',
	age: 25,
	greet() {
		console.log('Hi, I am ' + this.name);
	}
};

// person.greet();

const printName = (personData) => {
	console.log(personData.greet())
}

printName(person)

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
// 	console.log(hobby)
// }


// console.log(hobbies.map(hobby => "Hobby: " + hobby));
// hobbies.push('Programming')
// console.log(hobbies)

const copiedArray = [...hobbies];
// console.log(copiedArray)

const toArray = (...args) => {
	return args
}

// console.log(toArray(1,2,3,4))
