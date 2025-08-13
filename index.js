console.log ( "Welcome to my portfolio wesbite ");
//alert("Refresh the page to see the changes");
 let age=18;
 let name="Misbah Jahan";
 //conditional statement
 if (age < 22)
 {
 console.log("You are not eligible to vote");
 }
 else if(age >= 22)
 {
    console.log("You are eligible to vote");
    }
    else
    {
    console.log("Invalid age");
    }
 
    //object
let person = {
    name: "Misbah Jahan",
    age: 18,
    occupation: "Student",
   hobbies: {'reading' : 'coding'}
}
console.log(person);
//template literals
console.log(`name of person is ${person.name}`);
for (let i in person)
{
    console.log(i + "" + person[i]);
}
    
function  myDetails(name , age)
{
 console.log("Name of person is :  " + name +" " + "is " + age);
}
myDetails("Misbah", 22);
//loops
let firstName ="Misbah Jahan";
 for (let n of firstName)
 {
    console.log(n);
 }

//print all even no's from 0 to 100
let i= 0;
for (let i=0;i <= 100;i++)
{
    console.log(i);
}

for (let i=0; i <= 100; i++)
{
    if(i % 2 ===0)
    {
        console.log("Even numbers are :" + i);
        }

}
//arrays

let marks=[85, 97, 44, 37,76,60];
  let sum= 0;
for (let m in marks)
{
 sum += marks[m];
}
    let totalmarks = marks.length;
   let avgMarks = sum / marks.length;
   console.log(`Average Marks are : ${avgMarks}`);
   console.log(sum);
  
//arrays methods
//toString method
let Items=["bags", "pens", "paper"];
console.log(Items);
console.log(Items.toString());


//splice
 let car = ["City", "Civic", "mehran"];
 console.log(car);
 console.log(car.slice(0, 2));
 

 /// practice Scenario
 //arr methods
 let companies= ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
 companies.splice(2, 2, "Ola");
 console.log(companies);
  console.log(companies.shift());
  console.log(companies);
 console.log(companies.push("Amazon"));
 console.log(companies);

//functions 
function myDetails(name , agee)
{
      if (agee < 18)
        {
            console.log("You are not eligible for CNIC");
        }  
    else if(agee > 18)
    {
        console.log("You are eligible for CNIC");
    }
    else
    {
 console.log("Invalid age");
    }

console.log("Welcome to Portfolio");
} 
myDetails("Misbahh" , 22);



//arrow functions 
 let multiplication = (a,b) =>
 {
       console.log(a*b);
 }
multiplication (5,5);

//practice questions
function myVowels (str)
{
       let vowels= ['a','e','i','o','u'];
        for(let char of str)
       {
        console.log(char);
        if(char === 'a' || char === 'i' || char === "e")
        {
            
            console.log("Vowels in Misbah are " + char);
    
        }
        else
        {
            console.log("Not a vowel");
        }
       }

}
myVowels("Misbah");

//arrrow function for the same task as above
let nameVowels = (str) =>
{
    let vowels= ['a','e','i','o','u'];
        for(let char of str)
       {
        console.log(char);
        if(char === 'a' || char === 'i' || char === "e")
        {
            
            console.log("Vowels in Misbah are " + char);
            char++;
    
        }
        else
        {
            console.log("Not a vowel");
        }
            return char++;     
    }
}
nameVowels("Misbahh");
//dom
let change = document.querySelector(".about");
console.log(change);

//event handling
//  let btnmode = document.querySelector("#mode");
//  let currmode = "Light";
//  btnmode.addEventListener("click",() =>
//  {
//     if (currmode === "Light")
//     {
//            currmode= "dark";
//            document.querySelector("body").style.backgroundColor= "Black";
//     }
//     else
//     {
//         currmode = "Light";
//         document.querySelector("body").style.backgroundColor= "white";
//     }
//    console.log(currmode);
//  });
//  //eventhandling
// let devtownImg = document.getElementById("devtown");
// // devtownImg.addEventListener("mouseover",certifiateImg);
// // function certifiateImg()
// // {
// //     document.getElementById("devtown");
// // }

//prototype
let result = 
{
     roll_no : 81,
     firstName : "Misbah",
     obt_marks: 50,
     total_marks: 100,
    calculateMarks()
    {
       score= this.obt_marks * 100 / this.total_marks;
       console.log(score);
    },
};
console.log(result);
let Sadia =
{
    total_marks: 100,
    obt_marks: 80
};
Sadia.__proto__ = result;
Sadia.calculateMarks();

//classes
class Person
 {
      constructor(lastName, age)
      {
           this.lastName= lastName;
           this.age=age;
      }
       details()
       {
        console.log("Can't show details rn");
       }
}
let Misbah = new Person("Jahan", 22);
console.log(Misbah);
let Sadiaa = new Person("Farooq" , 21);
console.log(Sadiaa);

//inheritance
class Bank{
    constructor(Name , acc_No)
   {
         this.Name = Name;
         this.acc_No = acc_No;
   }

   bankDetails()
   {
       console.log("Welcome to HBL");
   }
}

class Account extends Bank
{
    constructor(acc_ID, balance)
    {
        super();
        this.acc_ID = acc_ID;
        this.balance = balance;

    }
    Amount()
    {
        console.log("System is Out of Service");
    }
}
let customer = new Bank("Misbah Jahan" , 12345666);
console.log(customer);
let customer_Debt = new Account ();
console.log(customer_Debt);

//callbackk
function semResult(markss, grade)
{
    console.log ("Marks of students are : " + markss  + grade);
}

function grade (a, b, semResult)
{
    console.log("Your Grade is : " +  b);
}

grade('A' ,'B' , semResult);
// setTimeout(semResult , 4000);

//callbackk Hell - nested callbacks

// //promise
// let promise = new Promise((resolve, reject) => {
//      console.log("Your item has been placed");
//      resolve("perfume");
//     //  reject("Order has been Cancelled");



// practice questions
//Inheritance - scenario 01 
// class User 
// {
//     constructor(fullName, emailID)
//     {
//     this.fullName = prompt("Enter Your Full Name ");
//     console.log(fullName);
//     this.emailID = prompt("Enter Your Email");
//     console.log(emailID);
//     }
//    viewData()
//    {
//          console.log("Your username and Email is : " + fullName + this.emailID);
//    }
// }

// class Admin extends User
// {
//     constructor()
//     {
//      super();
//      }
//      editData(fullName, emailIDU, viewData)
//      {
//         let details = prompt("Enter Details to edit : ");
//         console.log(details);
//      }
// }

// let user = new User();
// console.log(user);
// let admin = new Admin();
// console.log(admin);

//promise
let weather = new Promise(function (resolve, reject)
{
let sunny = true;
    if(sunny)
    {
        resolve("Weather is Sunny");
    }
   else
   {
    reject("The Weather is cloudy");
   }
});
weather.then(function(message)
{
    console.log(message);
});
weather.catch(function(err)
{
    console.log(err);
}
);
//promise -- scenario 2
let deliveredProduct = true;
let order = new Promise(function (resolve, reject)
{
    if (deliveredProduct = false)
    {
        resolve("Hurray ! Got my package");
    }
    else
    {
        reject("You Need to book your order Again");
    }
});
order.then(function(message)
{
    console.log(message);
});
order.catch(function(err)
{
    console.log(err)
});

//scenario 03
//Exam Result Announcement
let isPass= true;
let examAnnounce = new Promise(function (resolve , reject)
{
    setTimeout(() =>
    {
    if(isPass)
    {
        resolve("Congratulation! You have passed the exam ");
    }
    else
       {
         reject("Oops ! You didn't pass the exam ");
       }

}, 2000)});
examAnnounce.then(function(message)
{
    console.log(message);
});
examAnnounce.catch(function(err)
{
    console.log(err);
});
//async await 
// async function boilWater()
// {
//    console.log("We gonna Boil Water");
//    setTimeout(() => 
//    {
//     console.log("Done");
//    }, 2000)};
// boilWater();

//scenario 02
const URL = "https://pokeapi.co/api/v2/pokemon/ditto";
async function fetchData()
{
   console.log("Fetching Your Dataa");
   let myData = await fetch(URL);
   let getData = ((myData) => 
    setTimeout(() =>
    {
        console.log("Fetched Data Successfully");   
    }, 2000))};

fetchData();

//maps vs obj
 let studentMarks =
 {
    "Misbah" : 88,
    "Sadia" : 90,
    "Hamna" : 85
 };
 console.log(studentMarks);
 let data = new Map([
    ["Misbah" , 88], ["Sadia" , 90], ["Maham", 85]
 ]
 )
 data.set("Hadiaa" ,99);
 data.set("Aisha", 95);
 console.log(data.get("Sadia"));
 console.log(data);

