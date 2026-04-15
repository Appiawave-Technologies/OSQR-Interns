const changeNumberToSeconds = (minutes) => {


    const SECONDS_IN_MINUTE = 60;

    if(minutes < 0){

        console.log("Please enter a positive number");
    }
    else{

        const seconds = minutes * SECONDS_IN_MINUTE;
        console.log(minutes + " minutes is equal to " + seconds + " seconds");
    }

}

changeNumberToSeconds(5);