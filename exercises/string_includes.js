// String.prototype.includes() use cases


/* 
YouTube Upload Count

You are given an array of "dates" in the format "Dec 11" and a "month"
in the format "Dec" as arguments. Each "date" represents a "video"
that was uploaded on that day. Return the number of uploads for a given month.

Output:

uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept"); // output: 2
uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct");  // output: 1
*/

// Solution:

function uploadCount(arrayDates, stringMonth){

    let totalUploads = 0;

    for(let i = 0; i < arrayDates.length; i++){

        if(arrayDates[i].includes(stringMonth)){       // includes()
            totalUploads++;
        }

    }

    return console.log(totalUploads);

}

uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept"); // output: 2
uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct");  // output: 1

// -------------------------------------------------------------------------