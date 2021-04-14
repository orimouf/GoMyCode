/*
 Write a function which takes an array as a parameter and returns an array of the data types of each item
 */

const arr = ['Asabeneh', 100, true, null, undefined, { job: 'teaching' }];

function typeArray(array){
  const newArray = []; 
  
  for(let i=0; i < array.length; i++){
    let type = typeof(array[i]);
    newArray.push(type);
  }

  return newArray;
}

console.log(typeArray(arr));

/*
Create a function which filter ages greater than 18 from ages array.
*/

const ages = [35, 30, 17, 18, 15, 22, 16, 20];
   

function agesGreaterEighteen(array){
  const newArray = []; 
  
  for(let i=0; i < array.length; i++){
    if(array[i] > 18 ){
      newArray.push(array[i]);
    }   
  }
  return newArray;
}

console.log(agesGreaterEighteen(ages));

/*
The following shopping cart has four products. 
  Create an addProduct, removeProduct ,editProduct , removeAll functions to modify the shopping cart.
    const shoppingCart = ['Milk','Coffee','Tea', 'Honey'];
    addProduct( "Meat");
    ["Milk", "Coffee", "Tea", "Honey", "Meat"]
    editProduct(3, "Sugar" );
    ["Milk", "Coffee", "Tea", "Sugar", "Meat"]
    removeProduct(0);
    ["Coffee", "Tea", "Sugar", "Meat"]
    removeProduct(3);
    ["Coffee", "Tea", "Sugar"]
*/
const shoppingCart = ['Milk','Coffee','Tea', 'Honey'];

function addProduct(product){
    let found = false;
    if(product !== ""){
        for(let i=0; i < shoppingCart.length; i++){
            if(product === shoppingCart[i]){
                found = true;
            }
        }
    }

    if(!found){
        shoppingCart.push(product);
    }
}
addProduct("Meat");
console.log(shoppingCart);

function editProduct(index, product){
  if(product !== "" && index !== ""){
      for(let i=0; i < shoppingCart.length; i++){
          if(index === i){
              shoppingCart[i] = product;
          }
      }
  }
}
editProduct(3, "Sugar");
console.log(shoppingCart);

function removeProduct(index){
  if(index !== ""){
    shoppingCart.splice(index,1);
  }
}
removeProduct(0);
console.log(shoppingCart);
removeProduct(3);
console.log(shoppingCart);


/*

Create a function which solve quadratic equation ax2 + bx + c = 0. 
    A quadratic equation may have one, two or no solution. 
    The function should return a set of the solution(s).

2b-4c
-b+racine du determinant , le tt sur a 
-b-racine du determinant , le tt sur a 

*/

function equation(){
    let x1, x2;
    let a = prompt("Enter the value for A:");
    let b = prompt("Enter the value for B:")
    let c = prompt("Enter the value for C:")
    let det = (b*b) - (4*a*c);
    
    if (det > 0) {
    x1 = (-b - Math.sqrt(det))/(2 * a);
    x2 = (-b + Math.sqrt(det))/(2 * a);
    
    alert(`The roots of the Quadratic Equation ${x1} and ${x2}`);
    }
    else if(det == 0) {
    x1 = (-b - 0 / (2 * a));
    x2 = (-b + 0 / (2 * a));
    
    alert(`The roots of the Quadratic Equation are ${x1} and ${x2}`);
    }
  }
  equation();