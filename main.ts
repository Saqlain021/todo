#! /usr/bin/env node
import inquirer from "inquirer";
let arr = [];
let condititon = true;
while (condititon){
    let ask1 =await inquirer.prompt([
        {message:"what do you want to add in your list:",
         name:"firstmessage",
         type:"input"},
         {message:"Do you want to update list or not:",
         name:"secondmessage",
         type:"confirm",
         default:false}
    ]);
    arr.push(ask1.firstmessage);
    condititon=ask1.secondmessage;
    console.log(arr);
}