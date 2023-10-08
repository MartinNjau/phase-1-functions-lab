function distanceFromHqInBlocks() {
    let Hq=42;
    let pickup=34;
    let blocks=(Hq-pickup);
    return blocks;
}

function distanceFromHqInFeet(){
    let Hq=42;
    let pickup=34;
    let blocks=(Hq-pickup);
    let blocksinfeet=(blocks*264);
    return blocksinfeet;
}

function distanceTravelledInFeet(){
    let pickup=34;
    let dropoff=39;
    let distance=((dropoff-pickup)*264);
    return distance ;
}

function calculatesFarePrice(start, destination){
        let dist=(destination-start)*264;
        if(dist<=400){
            return 0;
        }
        else if(dist>400&&dist<=2000){
            let fare=(dist*0.02);
            return 'Your total bill is $' + fare;
        }
        else if(dist>2000&&dist<=2500){
            const charge=25;
            return charge;

        }
        else{
            return 'cannot travel that far';
        }
    }
