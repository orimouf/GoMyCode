
// Exercices 

/* =============================== QUESTION 5 ================================================
   a. Create a function called reverse which take a parameter and it returns the reverse of the parameter.
   Don't use the built in reverse method.
  b. Create a function called isPalindrome which check if a parameter is a palindrome or not.
    Use the function from a to reverse words.
============================================================================================ */
//5a
const reverse = value => {
  let reversed = '';
  if (typeof value === 'number') {
    const formatedValue = value.toString();
    const len = formatedValue.length;
    for (let i = len - 1; i >= 0; i--) {
      reversed += formatedValue[i];
    }
  } else if (typeof value === 'string') {
    const formatedValue = value
      .trim()
      .replace(/\W/g, '')
      .toLowerCase();
    let len = formatedValue.length;
    for (let i = len - 1; i >= 0; i--) {
      reversed += formatedValue[i];
    }
  } else {
    return 'Not a valid parameter';
  }
  return reversed;
};
console.log(reverse('car'));
console.log(reverse('Cat '));
console.log(reverse('Tuna nut.'));
console.log(reverse('A nut for a jar of tuna.'));
// end of 5a

//5b
const isPalindrome = value => {
  let isPalindrome = false;
  if (typeof value === 'number') {
    const formatedValue = value.toString();
    if (reverse(formatedValue) === formatedValue) {
      isPalindrome = true;
    }
  } else if (typeof value === 'string') {
    const formatedValue = value
      .trim()
      .replace(/\W/g, '')
      .toLowerCase();
    if (reverse(formatedValue) === formatedValue) {
      isPalindrome = true;
    }
  } else {
    return 'Not a valid parameter';
  }
  return isPalindrome;
};
console.log(isPalindrome('Anna')); //true
console.log(isPalindrome(121)); //true
console.log(isPalindrome('Noon')); //true
console.log(isPalindrome('Asa ')); //true
console.log(isPalindrome('Asab')); //false
console.log(isPalindrome('cat')); //false
console.log(isPalindrome('Tuna nut.')); // true
console.log(isPalindrome('A nut for a jar of tuna.')); // true
console.log(isPalindrome('A man, a plan, a canal. Panama'));
/* =============================== QUESTION 6 =============================================
    Create a function called countPalindrowWords which counts the number of palindrome words in
   the palindoromeWords array or in any array.
  =========================================================================================== */
const words = [
  'Anna',
  'Asa',
  'Civic',
  'common',
  'Kayak',
  'Level',
  'Madam',
  'Mom',
  'Noon ',
  'Rotor',
  'Sagas ',
  'Solar',
  'Stats',
  'Tenet ',
  'Wow'
];

const  countPalindrowWords= arr => {
  let count = 0;
  for (const word of arr) {
    if (isPalindrome(word)) {
      count++;
    }
  }
  return count;
};
console.log(countPalindrowWords(words)); // 13

/* =============================== QUESTION 7 =============================================
   Count the number of palindrome words in the following sentence.
  =========================================================================================== */
const sentence = `He met his mom at noon and she was watching an epsoide of the begninging of her Solos. Her tenet helped her to level up her stats. After that he went to kayak driving Civic Honda.`;
const countPalindrowWords2 = sent => {
  const words = sent.split(' ');
  const palindromeWords = [];
  let count = 0;
  for (const word of words) {
    if (isPalindrome(word)) {
      count++;
      palindromeWords.push(word);
    }
  }
  return { count, words: palindromeWords };
};
console.log(countPalindrowWords2(sentence));
//{count:8, words:["mom", "noon", "Solos.", "tenet", "level", "stats.", "kayak", "Civic"]}
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
    for (let i = 0; i < products.length; i++) {
      if (products[i]._id === productId) {
        for (let j = 0; j < products[i].ratings.length; j++) {
          if (products[i].ratings[j].userId === userId) {
            const rate = { userId:userId, rate: ratingPoint };
            products[i].ratings[j].rate = ratingPoint;
            found = true;
            break;
          }
        }
        if (!found) {
          products[i].ratings.push({ userId:userId, rate: ratingPoint });
        }
      }
    }
  };
  
  
  console.log(products);
  rateProduct('eedfcf', 'eefamr', 1);
  rateProduct('aegfal', 'fg12cy', 2.5);
  rateProduct('aegfal', 'fg12cy', 2.0);
  rateProduct('eedfcf','ghderc',3);
  console.log(products);
  

  
  //b
  const averageRating = productId => {
    let sum = 0;
    let len; // number of ratings
    for (let i = 0; i < products.length; i++) {
      if (products[i]._id === productId) {
        len = products[i].ratings.length;
        for (let j = 0; j < len; j++) {
          if (len === 0) {
            return 0;
          } else {
            sum += products[i].ratings[j].rate;
          }
        }
      }
    }
    console.log(len);
    return sum / len;
  };
  console.log(averageRating('eedfcf'));
  
  /* =============================== QUESTION 10 =============================================
    Create a function called likeProduct.
    This function will helps to like to the product if it is not liked and remove like if it was liked.
    =========================================================================================== */
  const likeProduct = (productId, userId) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i]._id === productId) {
        const likes = products[i].likes;
        const index = products[i].likes.indexOf(userId);
        if (index !== -1) {
          products[i].likes.splice(index, 1);
        } else {
          products[i].likes.push(userId);
        }
      }
    }
  };
  console.log(likeProduct('aegfal', 'fg12cy'));
  console.log(likeProduct('eedfcf', 'fg12cy'));
  

  
 