console.log("Looping over Objects");

const obj = [
    {
        name: "omkar",
        surname: "gavhane",
        fathername: "bhagwan"
    },
    {
        name: "Ashish",
        surname: "gavhane",
        fathername: "bhagwan"
    },
    {
        name: "Pranali",
        surname: "gavhane",
        fathername: "bhagwan"
    },
];

//---FOR LOOP---//

for (let i = 0; i < obj.length; i++) {
    console.log(obj[i]);
}


// // //---FOR EACH LOOP---//

obj.forEach((item) =>{
    for(let key in item){
        console.log(key,item[key]);
    }
});


// //---FOR IN LOOP---//

let array1 = ["mumbai","kolkata","banglore","delhi"]

for(let abc in array1){
    console.log(array1[abc]);
};

//---FOR OF LOOP---//

let array2 = ["mumbai","kolkata","banglore","delhi"]

for(let abc of array2){
    console.log(abc);
};









































