        let roman = "";

        function convertToRoman(num) {
            const obj = {
                M: 1000,
                CM: 900,
                D: 500,
                CD: 400,
                C: 100,
                XC: 90,
                L: 50,
                XL: 40,
                X: 10,
                IX: 9,
                V: 5,
                IV: 4,
                III:3,
                I: 1
            };
            for(let key in obj){
                if(num >= obj[key]){
                    roman = roman+key;
                    console.log(num)
                    console.log(num - obj[key]);
                    num = num - obj[key];
                     
                }
                
            }
            return roman;
        
        }
            


  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));
console.log(convertToRoman(19));




// do not edit below this line
module.exports = convertToRoman
