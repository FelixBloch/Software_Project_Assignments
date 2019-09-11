/*jslint browser:true*/
/*global console*/

console.log(`*******************************`);
console.log(`*********** Assignment 1 *********`);
console.log(`*******************************`);


/* Playing around with different features */

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
};

createBand();

const Rammstein = {...band};

console.log(`BAND: `);

for(var i in Rammstein){
    console.log(`${i}: ${Rammstein[i]}`);
}

// displaying the object in a different way
Object.keys(Rammstein).forEach(function (item) {
	console.log(`${item}: ${Rammstein[item]}`);
});

function findKeyboardist(arr, query) {
    return arr.filter(function(name) {
        return name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
}

if(Rammstein.keyboardist == ''){
    console.log(`They need to hire a keyboardist`);

} else {
    console.log(findKeyboardist(lastNameRepository, 'Lo'));
}

/* Playing around some more with the features */

var myBirthday = [1997, 7, 30, 13];
var bday = new Date(...myBirthday);

console.log(bday);

var a = 2;
var b = 3;

function fun1(aa, bb = 10){
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

fun1(a);

var c = 4;
var d = 7;
var e;

const arr1 = [a, b, c, d];

{
    let arr2 = [...arr1, 9, 5,];

    console.log(`Array 1: ${arr1}`);
    console.log(`Array 2: ${arr2}`);

    let map1 = arr2.map(item => Math.sqrt(item));

    console.log(`Sqare root of Array 2: ${map1}`);
}

let obj1 = {'alpha': a, 'beta': b, 'charlie': c, 'delta': d, ['echo' + 'Alternative']: 1};

Object.keys(obj1).forEach(function (item) {
	console.log(`${item}: ${obj1[item]}`);
});

// Using the new way of defining functions
console.log(`Reverse`);

var obj2 = {
    arrayReverse() {
        var i = arr1.length;
        while(i>=0){
            console.log(arr1[i]);
            i--;
        }
    }
};
obj2.arrayReverse();

console.log(`Normal`);
var obj3 = {
    array1() {
        arr1.forEach(function(i){
            console.log(i);
        });
    }
};

obj3.array1();

(function (){
    console.log(`The sqr root of a is ${Math.sqrt(a)}.
    The sqr root of b is ${Math.sqrt(b)}.`)
})();

if(e == undefined){
    console.log(`e is ${e}`);

} else {
    console.log(`e is ${e}`);
}

// trying out closures
rootAddition = (x) => {
    return (y) => {
        return x*x + y*y;
    };
}

const ax = rootAddition(a);

console.log(`The root of a (${a}) plus the root of b(${b}) equals ${ax(b)}.`);

/* ----------------------
Class & Class inheritance
-----------------------*/

class Rain {
    constructor(type, hazard){
        this.name = 'Rain';
        this.type = type;
        this.hazard = hazard;
    }

    rainInfo (){
        console.log(`Todays ${this.name}-designation is ${this.type}.
        The hazard is ${this.hazard}`)
    }
    
}

class Raindrop extends Rain {
    constructor(liquid, speed){
        super(liquid, speed);
        this.name = 'Raindrop';
    }
}

let r1 = new Rain('Short shower', 'mild');
r1.rainInfo();

let r2 = new Rain('Thunderstorm', 'moderate');
r2.rainInfo();

const rd1 = new Raindrop('Water', 'mild');
rd1.rainInfo();

let rd2 = new Raindrop('Lava', 'extreme');
rd2.rainInfo();




let teacher39 = {nose: `running`, fiever: true, tired: true, sentence: `We will have the exam no matter what!`, }

let teacher119 = {nose: `fine`, fiever: false, tired: true, sentence: `We will have the exam no matter what!`, }

let hasFlu = (nose, fiever, tired) => {
    if(nose === `running`){
        if(fiever){
            if(tired){
                return true;
            }
        }
    }
    return false;
}

let examDeterminer = (nose, fiever, tired, sentence) => {
    if(hasFlu(nose, fiever, tired) && sentence == `We will have the exam no matter what!`){
        console.log(`Exam is cancelled.`);
        
    } else {
        console.log(`Exam!`);

        if(fiever == 0 && tired == 1){
            console.log(`But first coffe is needed.`);
        }
    }
}

examDeterminer(teacher39.nose, teacher39.fiever, teacher39.tired, teacher39.sentence);

examDeterminer(teacher119.nose, teacher119.fiever, teacher119.tired, teacher119.sentence);