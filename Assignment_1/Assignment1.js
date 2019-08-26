/*jslint browser:true*/
/*global console*/

console.log(`*******************************`);
console.log(`*********** Assignment 1 *********`);
console.log(`*******************************`);

// The first part is just a little programme I was playing around with

console.log(`PART 1`);

const firstNameRepository = ["Till", "Richard", "Paul", "Oliver", "Christoph", "Christian",];
const lastNameRepository = ["Lindemann", "Kruspe", "Landers", "Riedel", "Schneider", "Lorenz",];


const band = {singer:'', guitarist1:'', guitarist2:'', bassist: ``, drummer: ``, keyboardist: ``,};

let createBand = () => {
    band.singer = `${firstNameRepository[0]} ${lastNameRepository[0]}`;
    band.guitarist1 = `${firstNameRepository[1]} ${lastNameRepository[1]}`;
    band.guitarist2 = `${firstNameRepository[2]} ${lastNameRepository[2]}`;
    band.bassist = `${firstNameRepository[3]} ${lastNameRepository[3]}`;
    band.drummer = `${firstNameRepository[4]} ${lastNameRepository[4]}`;
    band.keyboardist = `${firstNameRepository[5]} ${lastNameRepository[5]}`;
    
    /*for(var j in band){
        var l = 0;
        band.j = `${firstNameRepository[l]} ${lastNameRepository[l]}`;
        l++;
    }*/
};

createBand();

// copying the object
const Rammstein = {...band};

// displaying the band
console.log(`BAND: `);

for(var i in Rammstein){
    console.log(`${i}: ${Rammstein[i]}`);
}

// trying it in a different way
Object.keys(Rammstein).forEach(function (item) {
	console.log(`${item}: ${Rammstein[item]}`); // value
});

function findKeyboardist(arr, query) {
    return arr.filter(function(name) {
        return name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
  }
  
  console.log(findKeyboardist(lastNameRepository, 'Lo'));

// For the second part I went through all the examples and did my version of each example

console.log(`PART 2`);

var a = 2;
var b = 3;

function fun1(aa, bb){
    let c = 4;

    console.log(`If a=${aa} and b=${bb} then their sum is ${aa+bb}.`);

    c = aa + bb + c;
    console.log(`c now equals ${c}`);
    
    c = c * c;
    console.log(`And c squared equals ${c}`);
}

fun1(a, b);

{
    const d = 6;
    const e = 9;

    console.log(`Now let's try some different numbers!`)

    fun1(d, e);
}

fun1(a,b);

var c = 4;
var d = 7;

{
    let ar1 = [a, b, c, d];
    let ar2 = [9, 5, ...ar1];

    console.log(`Array 1: ${ar1}`);
    console.log(`Array 2: ${ar2}`);

    let map1 = ar2.map(x => Math.sqrt(x));
    console.log(`Sqare root of Array 2: ${map1}`);
}

