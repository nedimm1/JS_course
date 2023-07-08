//calculate jhon and mikes BMI's

/*For each of them, create an object with properties for their full name, mass, and height 
(Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as 
fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI 
(the same method on both objects). 
Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. 
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    
    calcBMI: function(){
        this.markBMI = this.mass / (this.height * this.height )
        return this.markBMI
    }
}

const jhon = {
    fullName: 'Jhon Smith',
    mass: 92,
    height: 1.95,
    
    calcBMI: function(){
        this.jhonBMI = this.mass / (this.height * this.height)
        return this.jhonBMI
    }
}

if(mark.calcBMI() > jhon.calcBMI()){
    console.log(`${mark.fullName}'s BMI (${mark.markBMI}) is higher than ${jhon.fullName}'s (${jhon.jhonBMI})!`)
}else{
    console.log(`${jhon.fullName}'s BMI (${jhon.jhonBMI}) is higher than ${mark.fullName}'s  (${mark.markBMI})!`)
}