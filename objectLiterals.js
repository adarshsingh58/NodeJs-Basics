/**
 * http://usejsdoc.org/
 */

var person={
		firstName:"Adarsh",
		lastName:"Singh",
		printFullName:function(){
			console.log("Hi! "+this.firstName+" "+this.lastName);
		}
};
/*Using this is imp because, firstName and lastName are in this objects context.
 * Everything inside {} is an object in itself.
 *SO we can use this keyword to access the current object 
 */

console.log(person.firstName);
person.printFullName();