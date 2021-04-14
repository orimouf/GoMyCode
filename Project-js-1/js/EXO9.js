
// Exercices 
//=============================== QUESTION 9 =============================================
// The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product
// b. Create a function called averageRating which calculate the average rating of a product
//=========================================================================================== */
const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '17/05/2019 9:00 AM',
      isLoggedIn: false
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '17/05/2019 9:30 AM',
      isLoggedIn: true
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '17/05/2019 9:45 AM',
      isLoggedIn: true
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '17/05/2019 9:50 AM',
      isLoggedIn: false
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '17/05/2019 10:00 AM',
      isLoggedIn: false
    }
  ];
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [{ userId: 'fg12cy', rate: 5 }, { userId: 'zwf8md', rate: 4.5 }],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ];

const rateProduct = (productId, userId, ratingPoint) => {
  let found = false;
  for (let i=0; i < products.length; i++){
    if(products[i]._id === productId){
      for (let j=0; j < products[i].ratings.length; j++){
        if(products[i].ratings[j].userId === userId){
          const rate = { userId: userId, rate: ratingPoint};
          products[i].ratings[j].rate = ratingPoint;
          found = true;
          break;
        }
      }
      if (!found) {
        products[i].ratings.push({ userId: userId, rate: ratingPoint});
      }
    }
  }
};


rateProduct("aegfal","ab12ex",7);
rateProduct("eedfcf","zwf8md",6);
rateProduct("hedfcg","fg12cy",2);

console.log(products);
  

const averageRating = (productId) => {
  let found = false;
  let totalRate = 0;
  let averageRate = 0;
  for (let i=0; i < products.length; i++){
    if(products[i]._id === productId){
      found = true;
      for (let j=0; j < products[i].ratings.length; j++){
        totalRate = totalRate + products[i].ratings[j].rate;
      }
      if(products[i].ratings.length === 0){
        averageRate = 0;
      } else {
        averageRate = totalRate / products[i].ratings.length;
      }
      return averageRate;
    }
  }
  if(!found) {
    return "not found!";
  }
}

let result1 = averageRating("aegfal");
let result2 = averageRating("hedfcg");
let result3 = averageRating("eedfcf");
let result4 = averageRating("ssssss");

console.log("id Product `aegfal` ==> averageRating :" + result1);
console.log("id Product `hedfcg` ==> averageRating :" + result2);
console.log("id Product `eedfcf` ==> averageRating :" + result3);
console.log("id Product `ssssss` ==> averageRating :" + result4);



/* =============================== QUESTION 10 =============================================
  Create a function called likeProduct.
  This function will helps to like to the product if it is not liked and remove like if it was liked.
  =========================================================================================== */

  const likeProduct = (productId, userId) => {
    let found = false;
    for (let i=0; i < products.length; i++){
      if(products[i]._id === productId){
        for (let j=0; j < products[i].likes.length; j++){
          if(products[i].likes[j] === userId){
            products[i].likes.pop(userId);
            found = true;
            break;
          }
        }
        if (!found) {
          products[i].likes.push(userId);
        }
      }
    }
  };

  likeProduct("aegfal","ab12ex");
  likeProduct("eedfcf","zwf8md");
  likeProduct("hedfcg","fg12cy");

console.log(products);

  /* =============================== Bonus =============================================
    Write a function which filter users who has scoresGreaterThan85.
    Write a function which addUser to the user array only if the user does not exist. 
    Write a function which addUserSkill which can add skill to a user only if the user exist.
    Write a function which editUser if the user exist in the users array.
   ========================================================================================== */

   const users2 = [
    {
      name: 'Brook',
      scores: 75,
      skills: ['HTM', 'CSS', 'JS'],
      age: 16
    },
    {
      name: 'Alex',
      scores: 80,
      skills: ['HTM', 'CSS', 'JS'],
      age: 18
    },
    {
      name: 'David',
      scores: 75,
      skills: ['HTM', 'CSS'],
      age: 22
    },
    {
      name: 'John',
      scores: 85,
      skills: ['HTM'],
      age: 25
    },
    {
      name: 'Sara',
      scores: 95,
      skills: ['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name: 'Martha',
      scores: 80,
      skills: ['HTM', 'CSS', 'JS'],
      age: 18
    },
    {
      name: 'Thomas',
      scores: 90,
      skills: ['HTM', 'CSS', 'JS'],
      age: 20
    }
  ];

const scoresGreaterThan85 = () => {
  const filterUsers = [];
  for (let i=0; i < users2.length; i++){
    if(users2[i].scores > 85){
      const user = {
        name: users2[i].name,
        scores: users2[i].scores,
        skills: users2[i].skills,
        age: users2[i].age
      };
      filterUsers.push(user);
    }
  }
  return filterUsers;
};

let resultFilterUsers = scoresGreaterThan85();
console.log(resultFilterUsers);


const addUser = (userName,scores,skills,age) => {
  let found = false;
  for (let i=0; i < users2.length; i++){
    if(users2[i].name === userName){
        found = true;
        break;
    }
  }
  if (!found) {
    const user = {
      name: userName,
      scores: scores,
      skills: skills,
      age: age
    };
    users2.push(user);
  }
};

addUser("Max",100,['CSS','JS'],22);
console.log(users2);


const addUserSkill = (userName,skills) => {
  for (let i=0; i < users2.length; i++){
    if(users2[i].name === userName){
      users2[i].skills.push(skills);
      break;
    }
  }
};

addUserSkill("Thomas","PHP");
console.log(users2);


const editUser = (userName,scores,skills,age) => {
  let found = false;
  for (let i=0; i < users2.length; i++){
    if(users2[i].name === userName){
        found = true;
        break;
    }
  }
  if (!found) {
    const user = {
      name: userName,
      scores: scores,
      skills: skills,
      age: age
    };
    users2.push(user);
  }
};
  