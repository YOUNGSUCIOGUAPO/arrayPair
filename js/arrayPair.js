//create an alogithm to sort a string into pairs in an array 
//if the string is odd complete the last pair with '_'
//display the populated array in following format
    // 'abcd' => ['ab', 'cd']
    // 'abcde' => ['ab', 'cd', 'e_']


    const array = [];

    function solution(str) {
        if (str.length % 2 !== 0) { //find the odd number and add _ to it
            str += '_';
            slicer(str);
            console.log(array);
            }
        else{
            slicer(str);
            console.log(array);
        }
        }
    
    
    
    function slicer(str){
        for (x=0; x<str.length; x+=2){
            let pair = str.slice(x,x+2);
            array.push(pair);
        }
    }
    let str = 'abcd';
    solution(str);