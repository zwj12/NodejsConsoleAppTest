'use strict';

import readline from "readline";
import fs from "fs";
import LogData from './LogData.js';
import { type } from "os";

//console.log('Hello world');
//let logData = new LogData("T_ROB1");
//logData.parse("2020-01-04 19:02:10:INFO:root:part1 start");
//console.log(logData.toString());

fs.readFile('2020-01-04_T_ROB1.log', "utf8", (err, data) => {
    if (err) throw err;    
    //let patt = new RegExp("^.*(\r)?\n", "gm");
    //let result = data.match(patt);
    //for (let i = 0; i < result.length; i++) {
    //    let logData = new LogData("T_ROB1");
    //    logData.parse(result[i].trim());
    //    console.log(logData.toString());
    //}	
    let logDataArray = LogData.parseFile(data);
    for (let i = 0; i < logDataArray.length; i++) {
        console.log(logDataArray[i].toString());
    }	
});

//const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
//});

//rl.question('What do you think of Node.js? ', (answer) => {
//    console.log(`Thank you for your valuable feedback: ${answer}`);
//    rl.close();
//});
