function getName()
{
	console.log("Adarsh!!!");
}

getName(); // Simple and Classic method call


//FIrst class functions as parameters

function callMethod(fn)
{
	fn();
}

callMethod(getName); //We dont use getName() here as that would be equivalent to calling the method here itself


var myFunc=function()
{
	console.log("Calling function by invoking variable name");
}

myFunc(); // we use variable name with () and not standalone

callMethod(getName);// calling a function by passing inside the parameter itself

//This is calling the function on the fly. we passed a fucntion inside other function that caused it to execute
callMethod(function(){
console.log("what!");
});
