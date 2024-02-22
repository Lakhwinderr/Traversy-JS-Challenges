function analyzeCarMileage(cars) {
    const result = {
        averageMileage : 0,
        highestMileageCar : cars[0],
        lowestMileageCar: cars[0],
        totalMileage: 0
    };
let count = 0;
 result.totalMileage = cars.reduce(
    (total, car) => {
        const mileage  = car.mileage;
        if(mileage > result.highestMileageCar.mileage){
            result.highestMileageCar = car;
        }
        if(mileage < result.lowestMileageCar.mileage){
            result.lowestMileageCar = car;
        }
        count++;
        total+=mileage;
        return total;
    }, 0
 )
 result.averageMileage = parseFloat((result.totalMileage/count).toFixed(2));
 return result;
}

// const cars = [
//     { make: 'Toyota', model: 'Corolla', year: 2020, mileage: 25000 },
//     { make: 'Honda', model: 'Civic', year: 2019, mileage: 30000 },
//     { make: 'Ford', model: 'Mustang', year: 2021, mileage: 15000 },
//   ];
  
//   const analysis = analyzeCarMileage(cars);
//   console.log(analysis);
module.exports = analyzeCarMileage;
