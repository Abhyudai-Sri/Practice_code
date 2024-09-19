// TWO SUM

// function sumpair(A, S){
//     let n = A.length;

//     let ans = []

//     for(let i = 0; i < n; i++){
//         for(let j = i+1; j < n; j++){
//             if(A[i] + A[j] == S){
//                 // ans.push([A[i] , A[j]])
//                 console.log("pair of given sum " + S + " = " + A[i] + "," + A[j] );
//             }  
//         }
//     }
// }


// let arr = [5,3,9,6,12];
// let sum = 15;

// let result = sumpair(arr, sum);
// console.log(result);


// PRIME NUMBERS

function isPrime(){
    let count;
    for(let i = 1; i < 100; i++){
        count = 0;
        for(let j = i; j < 100; j++){
            if(j % i == 0)
                count++;
        }
        if(count == 2){
            return i;
        }
    }
}


let names = document.getElementById("name");

const pws = document.getElementById("password");

function passwordValidation(){

    let regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(pws.length < 6 || pws.length > 10){
        return alert("PAssword shii likh ")
    }
   
    if(pws == ""){
        return document.getElementById("msg1").innerHTML = "Must not be empty";
    }
    if(!regex.test(pws)){
        return document.getElementById("msg1").innerHTML = "Password must contain any of this #,$,@,!,a,A,1";
    }

    // const data = {
    //     meraName : names.value,
    //     meraPAss : pws.value
    // }
    // alert(data)
}

function confirmPassword(){

    const pws1 = document.getElementById("cnfrm");

    if(pws != pws1){
        return document.getElementById("msg").innerHTML = "Password did not Match";
    }
}

function handlesubmit(e){
    e.preventDefault()
        // const data = {
        //     meraName : names.value,
        //     meraPAss : pws.value
        // }
    // alert(data)
    passwordValidation();
    confirmPassword();
}

