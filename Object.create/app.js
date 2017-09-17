var person={
		name:"general person",
		greet:function(){console.log("Hi "+this.name);}
};

var akanksha=Object.create(person);
/*
 *akanksha is an empty object upon creation. This concept of object creation form Object.create() is both similar yet different
 *then the conecpt of object creation in Java.
 *Here the object akanksha is created from person object, but if you do akanksha.valueOf() you will get empty object {}.
 *Because using Object.create() is a way of prototyping. We are saying that if you want to access the components of
 *person object from akanksha object you will be able to do so but akanksha object in itself is null so far.
 *
 *  SO even if akanksha.valueOf() gives you {} empty object, if you do akanksha.name you will get general person as result
 *  because NJS will look for name key in akanksha object if it will not find it, it will check that in prototype class
 *  which is person here and will  output that result.
 */	
akanksha.name="Akanksha";
console.log(akanksha.valueOf());
akanksha.greet();

