class Car{
    constructor(carname, model, year){
        this.carname = carname;
        this.model = model;
        this.year = year;
    }
    carAge(){
        let date = new Date();
        return date.getFullYear()-this.year
    }
}

var myCar = new Car("Ford", "fieast","1990")

console.log('Car age is : ', myCar.carAge()
);