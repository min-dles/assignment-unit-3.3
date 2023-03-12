console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log('Console log the variable:', partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log(supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log('This is the second value in Supply Changes:', supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');
console.log(supplyChanges.pop());
console.log('New Supply Changes list is:', supplyChanges);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);
console.log('Supply Changes has been updated and is now:', supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');
for(let i = 0; i < supplyChanges.length; i++){
    if(supplyChanges[i] > 0){
    console.log('Added', supplyChanges[i], 'parts.');
    }
    if(supplyChanges[i] === 0){
        console.log('No Change.');
    }
    if(supplyChanges[i] < 0){
        console.log('Removed', supplyChanges[i], 'parts.');
    }
}

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');
for(catalogue of supplyChanges){
    if(catalogue === 0){
        console.log('No change here.');
    } // end No Change check
    if(catalogue > 0){
        console.log('Added', catalogue, 'parts.');
    } // end greater than 0 check (positive values only)
    if(catalogue < 0){
        console.log('Removed', catalogue, 'parts.');
    } // end less than 0 check (negative values only)
} // end For Of loop here

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');
/* THOUGHTS: when approaching this problem, my first thought is to use a For loop (For as many values are in this
array, calculate the total). Then I looked up how to calculate the sum, and found reduce(). This method is 
very confusing to me at the moment, and fortunately there was more info about a For loop being an even faster
way to do what reduce() does! This method also utilizes the operator "+=" which we previously learned, so I was
glad to see familiar operators in this function. */

let totalParts = 0;
for(i = 0; i < supplyChanges.length; i++){
    totalParts += supplyChanges[i];
}
console.log('Total supplies available is:', totalParts);

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');
/* Currently, I'm reading Eloquent JavaScript and the first thing I thought of was the % remainder operator
for this problem. Not sure if that is what I'll end up using, but those are my first thoughts. */
let parts = 0;
const partsPerBox = 7;
let fullBox = 0;
let totalBoxes = fullBox;
const maxParts = 572;
/* At this point in thinking about solutions, I realized that a compound conditional might be useful to 
check on the values of 1. Parts per box (max is 7) and/or 2. Total parts (572). Then I also remembered 
from last week's stretch goal, ternary operators.

while(parts < maxParts || parts <= fullBox){
    parts++;
}
Trying this made me realize that maybe i should try a while loop WITHIN a while loop? To simultaneously
calculate the parts per box, and boxes. Maybe compound conditional isn't quite what i need- */


while((fullBox * 7) < maxParts){
    if(parts <= partsPerBox){
        parts++;
    }else{
        fullBox++;
        parts = 0;
        totalBoxes = fullBox - 1;
    }
}

console.log('Total boxes filled:', totalBoxes);
console.log('Parts remaining:', (maxParts - (totalBoxes * 7)));
