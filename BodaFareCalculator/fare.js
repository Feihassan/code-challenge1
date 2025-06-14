function  calculateBodaFare(distanceInKm){
    let baseFare = 50;
    let chargePerKm  = 15;
    let totalFare = baseFare + (distanceInKm * chargePerKm);
    console.log (`fare per ${distanceInKm} km ,is estimated ${totalFare}`)
}

let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
let distanceInKm = Number(input);
calculateBodaFare(distanceInKm);
