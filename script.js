// Complete the js code
function Car(make, model) {
	this.Make=make,
	this.Model=model
}
Car.prototype.getMakeModel=function(){
	return `${this.Make} ${this.Model}`;
}
function SportsCar(make, model, topSpeed) {
	Car.call(this, make, model);
	this.TopSpeed=topSpeed
}

SportsCar.prototype=Object.create(Car.prototype);
SportsCar.prototype.constructor=SportsCar;

SportsCar.prototype.getTopSpeed=function(){
	return this.TopSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
