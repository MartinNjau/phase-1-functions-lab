function distanceFromHqInBlocks(pickup) {
    const hq=42;
    return Math.abs(pickup-hq);

}
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(35);
distanceFromHqInBlocks(22);
    

function distanceFromHqInFeet(num){
    let dist=(distanceFromHqInBlocks(num)*264);
    return dist;
}

    


function distanceTravelledInFeet(pickup,dropoff){
    return Math.abs((pickup-dropoff)*264);
    
}

function calculatesFarePrice(start, destination){
        let distance=Math.abs((destination-start)*264);
        if (distance<=400) {
            return 0;
        }
        else if (distance>400&&distance<=2000) {
            let fare = ((distance-400)*0.02) ;
            return  fare;
        }
        else if (distance>2000&&distance<=2500) {
            const charge=25;
            return charge;

        }
        else{
            return 'cannot travel that far';
        }
    }
