// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Ashray",
    "full name": "Ashray Stan",
    [mySym]: "mykey1",
    age: 18,
    location: "Shimla",
    email: "ashray@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ashray@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "stan@microsoft.com"
// console.log(JsUser);


JsUser.greetingOne = function(){
    console.log("Hello User!");
}

JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}!`);
}

console.log(JsUser.greetingOne());
console.log(JsUser.greetingTwo());
