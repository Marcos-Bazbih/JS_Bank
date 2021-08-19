const clients = [
    {
        id: 1,
        firstName: "Marcos",
        email: "marcos@gmail.com",
        phone: "052-1112233",
        balance: 350,
        isBlocked: false
    },
    {
        id: 2,
        firstName: "Haim",
        email: "haim@gmail.com",
        phone: "050-5552233",
        balance: 250,
        isBlocked: true
    },
    {
        id: 3,
        firstName: "ermias",
        email: "ermias@gmail.com",
        phone: "054-1197233",
        balance: -5500,
        isBlocked: false
    },
    {
        id: 4,
        firstName: "lior",
        email: "lior@gmail.com",
        phone: "055-1112845",
        balance: 7.5,
        isBlocked: false
    }
]
// *************************__1__**************************
// function addClient(array, anotherClient) {
//     array.push(anotherClient);
//     return array;
// };
// const clientPlusOne = addClient(clients, {
//     id: 5,
//     firstName: "Matan",
//     email: "matan@gmail.com",
//     phone: "053-2812845",
//     balance: -555,
//     isBlocked: true
// })
// console.log(clientPlusOne);
// *************************__1__**************************


// *************************__2__**************************
// function getClient(array, userId) {
//     for (let i = 0; i < array.length; i++) {
//         if (userId == array[i].id) {
//             return array[i];
//         }
//     }
//     return "not here";
// }
// let getById = getClient(clients, 2);
// console.log(getById);
// *************************__2__**************************


// *************************__3__**************************
// function deleteClient(array, userId) {
//     for (let i = 0; i < array.length; i++) {
//         if (userId == array[i].id) {
//             array.splice([i], 1)
//             return array;
//         }
//     }
// }
// let deleteById = deleteClient(clients, 4);
// console.log(deleteById);
// *************************__3__**************************


// *************************__4__**************************
// function withdrawMoney(array, userId, amount) {
//     for (let i = 0; i < array.length; i++) {
//         if (userId == array[i].id) {
//             array[i].balance -= amount;
//             return array[i];
//         }
//     }
// }
// let lessMoney = withdrawMoney(clients, 1, 500);
// console.log(lessMoney);
// *************************__4__**************************


// *************************__5__**************************
// function depositMoney(array, userId, amount) {
//     for (let i = 0; i < array.length; i++) {
//         if (userId == array[i].id) {
//             array[i].balance += amount;
//             return array[i];
//         }
//     }
// }
// let moreMoney = depositMoney(clients, 2, 250);
// console.log(moreMoney);
// *************************__5__**************************





// ******************************__Blocked clients__*******************************

// // *************************__1__**************************
// clients.push(
//     {
//         id: 6,
//         firstName: "aschalow",
//         email: "aschalow@gmail.com",
//         phone: "058-3212233",
//         balance: 100,
//         isBlocked: false
//     }
// )
// *************************__1__**************************


// *************************__2__**************************
// for (let i = 0; i < clients.length; i++) {
//     if (clients[i].isBlocked == false && clients[i].balance > 0) {
//         clients[i].balance -= 100;
//     }
// }
// console.log(clients);
// *************************__2__**************************


// *************************__3__**************************
// for (let i = 0; i < clients.length; i++) {
//         clients[i].balance += 350;
// }
// console.log(clients);
// *************************__3__**************************


// *************************__4-5__**************************
// for (let i = 0; i < clients.length; i++) {
//     if (clients[i].balance > 400) {
//         console.log(`${clients[i].firstName} has more then 400`);
//     }
//     else if (clients[i].balance < 200) {
//         console.log(`${clients[i].firstName} has less then 200`);
//     }
// }
// *************************__4-5__**************************


// *************************__6__**************************
// console.log(clients);
// let userName = prompt("clientName");
// let withdrawAmount = Number(prompt("amount"));

// for (let i = 0; i < clients.length; i++) {
//     if(userName == clients[i].firstName && clients[i].isBlocked == false ){
//         clients[i].balance -= withdrawAmount;
//         alert("ok");
//         console.log(clients[i]);
//     }
//     else if(userName == clients[i].firstName && clients[i].isBlocked == true){
//         alert("you are blocked");
//         console.log(clients[i]);
//     }
// }
// *************************__6__**************************

// ******************************__Blocked clients__*******************************


// ******************************__11__*******************************
// ******************************__a__*******************************
const addClient = document.getElementsByClassName("addClient");
const addClientBtn = document.getElementById("addClientBtn");

addClientBtn.onclick = function () {
    let newClient = {

    }
    newClient.id = Number(addClientId.value);
    newClient.firstName = addClientName.value;
    newClient.email = addClientEmail.value;
    newClient.phone = addClientPhone.value;
    newClient.balance = Number(addClientBalance.value);
    clients.push(newClient);
    console.log(clients);
}
// ******************************__a__*******************************


// ******************************__b__*******************************
const getMoneyBtn = document.getElementById("getMoneyBtn");
getMoneyBtn.onclick = function(){
    for(let i=0; i<clients.length;i++){
        if(getMoneyId.value == clients[i].id && getMoneyName.value == clients[i].firstName){
            clients[i].balance -= Number (getMoneyAmount.value);
            console.log(clients[i]);
        }
    }
}
// ******************************__b__*******************************


// ******************************__c__*******************************
const depositMoneyBtn = document.getElementById("depositMoneyBtn");
depositMoneyBtn.onclick = function(){
    for(let i=0; i<clients.length;i++){
        if(depositMoneyId.value == clients[i].id && depositMoneyName.value == clients[i].firstName){
            clients[i].balance += Number (depositMoneyAmount.value);
            console.log(clients[i]);
        }
    }
}
// ******************************__c__*******************************
// ******************************__11__*******************************