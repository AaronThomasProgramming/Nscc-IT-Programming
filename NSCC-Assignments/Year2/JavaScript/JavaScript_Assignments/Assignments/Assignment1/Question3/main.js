function myNextBirthday(birtDate){
    //get the time in seconds by subtrating the birthday in seconds to the current date in seconds
    let timeInSeconds = Date.parse(birtDate) - Date.parse(new Date());
    //convert time to proper format
    // https://www.extendoffice.com/documents/excel/820-excel-convert-hour-minute-second-date.html
    let weeks = Math.floor( timeInSeconds/(1000*60*60*24)/7 );
    let days = Math.floor( timeInSeconds/(1000*60*60*24)%7 );
    let hours = Math.floor( (timeInSeconds/(1000*60*60)) % 24 );
    let minutes = Math.floor( (timeInSeconds/1000/60) % 60 );
    let seconds = Math.floor( (timeInSeconds/1000) % 60 );

    console.log("There are",weeks,"weeks,", days,"days,", 
    hours,"hours,", minutes,"minutes,", seconds,"seconds until my next birthday!")
}

myNextBirthday("2021-10-21");