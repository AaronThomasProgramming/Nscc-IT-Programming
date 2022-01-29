function highestAmount(arr) {
    //current streak
    let count = 1;
    //length of array
    let len = 0;
    //highest streak
    let max = 1;
    //current streak amount
    let currentAmount = 0;
    //highest streak amount
    let highestAmount = 0;
    //get startStreak sum
    let startStreak = 0;
    //hold startStreak sum value
    let startStreakAmount = 0;
    //previous streak
    let previousStreak = 1;

    while(len < arr.length){
        //consecutive numbers detected
        if(arr[len] === arr[len - 1] + 1){
            //add to the current amount
            currentAmount = currentAmount + arr[len - 1] + 1;
            //increment current streak
            count++;

            //get value from the start of the streak
            if(startStreak == 0){
                //add first value from streak into the current amount
                startStreakAmount = arr[len] - 1;
                currentAmount = currentAmount + startStreakAmount;
                //turns to 1 to avoid being again until streak ends
                startStreak = 1;
            }
            
            if(count >= max){
                //current highest streak
                max = count;
                //if streak is same but amount is higher
                if(max == previousStreak && currentAmount > highestAmount){
                    previousStreak = max;
                    //current amount becomes the highest amount
                    highestAmount = currentAmount;
                    //longest streak
                } else if(max > previousStreak){
                    previousStreak = max;
                    //current amount becomes the highest amount
                    highestAmount = currentAmount;
                }
            }
            //reset variables if no match
        }else if (arr[len] != arr[len - 1] + 1){
            count = 1;
            startStreak = 0;
            currentAmount = 0;
        };
        len++;
    };
    console.log("Highest Amount",highestAmount);
};

let arr1 = [1, 2, 3, 6, 9, 34, 2, 6];
let arr2 = [3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3];
let arr3 = [100, 101, 102, 3, 4, 5, 6, 9];

highestAmount(arr1);
highestAmount(arr2);
highestAmount(arr3);