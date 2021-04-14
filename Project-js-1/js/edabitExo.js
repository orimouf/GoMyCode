function objectToArray(obj) {
    let arrayAll = [];
      for (const [key, value] of Object.entries(obj)) {
      let array = [];
      array.push(key)
      array.push(value)
      arrayAll.push(array)
    }
    return arrayAll
  }
  console.log(objectToArray({
    D: 1,
    B: 2,
    C: 3
  }))// ➞ [["D", 1], ["B", 2], ["C", 3]]
  
  console.log(objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  }))// ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

  //----------------------------------------------------------------------------------------
  function getBudgets(arr) {
	let sum = 0;
  for(let i=0;i<arr.length;i++){
    sum += arr[i].budget
  }
  return sum
}
console.log(getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]))// ➞ 65700

console.log(getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
]))// ➞ 62600
//----------------------------------------------------------------------------------------
function afterNYears(names, n) {
    let newN = Math.abs(n)
    for(var i in names){
      let newAge = names[i] + newN
      names[i] = newAge
    }
    return names
  }
  console.log(afterNYears({
    "Joel" : 32,
    "Fred" : 44,
    "Reginald" : 65,
    "Susan" : 33,
    "Julian" : 13
  }, 1))/* ➞ {
    "Joel" : 33,
    "Fred" : 45,
    "Reginald" : 66,
    "Susan" : 34,
    "Julian" : 14
  }*/
  
  console.log(afterNYears({
    "Baby" : 2,
    "Child" : 8,
    "Teenager" : 15,
    "Adult" : 25,
    "Elderly" : 71
  }, 19))/* ➞ {
    "Baby" : 21,
    "Child" : 27,
    "Teenager" : 34,
    "Adult" : 44,
    "Elderly" : 90
  }*/
  
  console.log(afterNYears({
    "Genie" : 1000,
    "Joe" : 40
  }, 5))/* ➞ {
    "Genie" : 1005,
    "Joe" : 45
  }*/
//----------------------------------------------------------------------------------------
  const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {
	let msg;
  for(var i in GUEST_LIST){
    if(i == name){
      msg = `Hi! I'm ${name}, and I'm from ${GUEST_LIST[i]}.`
      break
    } else {
      msg = `Hi! I'm a guest.`
    }
  }
  return msg
}

console.log(greeting("Randy"))// ➞ "Hi! I'm Randy, and I'm from Germany."

console.log(greeting("Sam"))// ➞ "Hi! I'm Sam, and I'm from Argentina."

console.log(greeting("Monti"))// ➞ "Hi! I'm a guest."
//----------------------------------------------------------------------------------------
function spaceApart(arr) {
	let first = 0,secound = 0,firstIsfound = false
  let numberOF1 = 0
  let sum = 0
  if(arr.length === 0) return "invalid"
  for(let i=0;i<arr.length;i++) {
    if(arr[i] < 0){
      return "invalid"
    } else if((arr[i] === "1") && (firstIsfound === false)){
      numberOF1 += 1
      first = i+1
      firstIsfound = true
    } else if((arr[i] === "1") && (firstIsfound === true)){
      numberOF1 += 1
      secound = i
    }
  }

  let newArray = arr.slice(first,secound)
  if(numberOF1 > 2){
    return "invalid"
  } else if(numberOF1 < 2){
    return "invalid"
  } else {
    for(let i=0;i<newArray.length;i++) {
      if(typeof(newArray[i]) === "number"){
        sum += newArray[i]
      }
    }
  }
  return sum
}
console.log(spaceApart([1, "1", 4, 3, "3", "4", 2, "1"]))// ➞ 9
console.log(spaceApart(["1", 9, 20]))// ➞ "invalid"
console.log(spaceApart([]))// ➞ "invalid"
console.log(spaceApart([1, "1", 0, 1, "1", 4, 3, 2, 3, 2, "1"]))// ➞ "invalid"
console.log(spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]))// ➞ 14
console.log(spaceApart(["1", 9, 20, 38, "1"]))// ➞ 67
console.log(spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]))// ➞ "invalid"
//----------------------------------------------------------------------------------------
function tetra(n) {
	return (n * (n + 1) * (n + 2)) / 6
}
console.log(tetra(2))// ➞ 4
console.log(tetra(5))// ➞ 35
console.log(tetra(6))// ➞ 56
//----------------------------------------------------------------------------------------
function constructor(x, y, width, height){
  let arr = []
	let rectg = {
    "x":x,
    "y":y,
    "width":width,
    "height":height
  }
  for(var i in rectg){
    let str = i + "=" + rectg[i]
    arr.push(str)
  }
	return  "["+arr.toString()+"]"
}
console.log(constructor(1,2,3,4))
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------