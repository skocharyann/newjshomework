const users = [
    {
        id:1,
        name:"John",
        revenue: 560_000,
        brd: new Date("5/12/1978")
    },
    {
        id:2,
        name:"Rock",
        revenue: 860_000,
        brd: new Date("8/18/1972")
    },
    {
        id:3,
        name:"Silva",
        revenue: 320_500,
        brd: new Date("2/3/1998")
    },
    {
        id:4,
        name:"Emily",
        revenue: 780_600,
        brd: new Date("11/14/1994")
    }
]

// 1. Ստւգել արդյոք մարդ կա, ով ծնվել է այսօր

const today =  new Date();
const todaysBirth = users.some(user => {
    const birthday = user.brd;
    return(
        birthday.getDate() === today.getDate() &&
        birthday.getMonth() === today.getMonth() &&
        birthday.getFullYear() === today.getFullYear()
    );
});
if(todaysBirth){
    console.log("We have a birthday today! ")
}else{
    console.log("No birthdays found!")
};
/******* */
// 2․ Սորտավորել զանգվածը ըստ տարիքի(փոքրից-մեծ)

users.forEach(user => {
    user.age = new Date().getFullYear() - user.brd.getFullYear();
});
users.sort((a, b) => a.age - b.age);

console.log(users);
/***** */

//3․ Գտնել ամենաքիչ գումար ստացողին և ավելացնել նրա շահույթը 80․000-ով

const lowestSellary = users.reduce((a,b) =>{
    return a.revenue < b.revenue ? a : b ;

});
lowestSellary.revenue += 80_000;
console.log(lowestSellary);
console.log(users);
/******* */

//4․ Փոխել 3 id ունեցող մարդու ծննդյան տարեթիվը(ավելացնել 2 տարի)

const newAge = users.find(user => user.id === 3);
newAge.brd.setFullYear(newAge.brd.getFullYear() + 2);

console.log(users);
/************* */
//5․ Գտնել ՕԳՈՍՏՈՍ ամսում ծնված բոլոր մարդկանց

const BornInAugust = users.filter(user => user.brd.getMonth() === 7);

console.log(BornInAugust);
/************* */
// 6. Rock--ի անունը փոխել,սարգել "Rocky"

const user = users.find(user => user.name === "Rock");
user.name = "Rocky";

console.log(users);

// Տպել զանգվածում առկա true-ների քանակը։

const arr = [1,7,"hello",NaN,false ,17,true,71,true]
const trues  = arr.filter(elem => elem === true);
console.log(trues.length)
// ճիշտ ա՞