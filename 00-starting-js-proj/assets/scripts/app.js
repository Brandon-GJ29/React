//1. Variables y demas. 
//import {apiKey} from "./util.js";

//console.log(apiKey);


//2. Objetos y clases.

// const user ={
//     name:"Max",
//     age:34,
//     great(){
//         console.log("Hola");
//         console.log("Hola soy "+this.name+ "Y mi edad es: "+this.age);
//     }
// };

// console.log(user.great)
// user.great();


// //Clase
// class User{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     great(){
//         console.log("Hola soy: "+this.name+ " y mi edad es: "+this.age);
//     }
// }

// const user1 = new User("Panchito", 16);

// user1.great();


//3.Arrays Arreglos.

// const hobbies=["Sport", "Cooking", "Working Out","Reading"];
// console.log(hobbies[0]);
//Esto es para agregar al arreglo
// hobbies.push("Cooking");
// hobbies.push("Holaaa");
// hobbies.
// console.log("Espacio");
// console.log(hobbies);

//Esto extrar la posicion
// const index = hobbies.findIndex((item)=>{
//         return item === "Reading";
//     }
// )


// const index = hobbies.findIndex((item)=>item === "Reading"
// )

// console.log(index);
// console.log("Division");

// //Modifica todos los elementos del arreglo. Hace un casting.
// const editededHobbies= hobbies.map((item)=>item+"?");
// console.log(editededHobbies);


// //3.2. Ejercicio.
// const numberList=[1,2,3];

// const editedNumbers=numberList.map(num=>({val:num}));
// console.log(editedNumbers);


//4. Destructuring.

// const [firstName, secondName]=["Lalo", "Martinez"];
// console.log(firstName);

// //Es otra forma de llamar a las variables. 
// const {name:userName, age}={
//     name:"Max",
//     age:21
// }
// console.log(userName);



// //5. The Spread Operator. 
// const hobbies=["Sport", "Cooking"];

// const newHobbies=["Swimming"];

// //Usando los puntos se combinan , si se quitan seria un arreglo de areglos, en este caso
// // Es un arreglo combinado de Strings
// const mergedHobiies=[...hobbies,...newHobbies];
// console.log(mergedHobiies);

// //Tambien se puede con otros datos, como los objetos

// const user={
//     name:"Max",
//     age:21
// }


// const extendedUser={
//     isAdmin: true,
//     ... user
// }

// console.log(extendedUser);


// //6. Control Stroctures

// const password= prompt("Your Pasword");

// console.log(password);

// const hobbies=["Kissing", "Driving"];

// for(const hobbie of hobbies){
//     console.log(hobbie);

// }

// // 7. Manipuling the DOM. 


// const list= document.querySelector("ul");
// list.remove();

// 8. Using Functions as values. 


function funcion1(){
    console.log("Primer Hola");
}

const funcion2 =()=>{
    console.log("Segundo Hola");

}


setTimeout(funcion1,0);


setTimeout(funcion2,4000);

setTimeout(()=>{
    console.log("Tercer Hola")
},10000);
