#!/usr/bin/env node

"use strict";

let fs = require('pn/fs')
let path = require('path')
let _ = require('lodash')

if (process.argv.length < 3) {
        console.error('Usage: ls.js <file name> <options>');
        process.exit(1);
}

var rootPath = process.argv[2]
var param
var recursive = false



function rm(rootPath)
{
     try 
     {
        let lspromises = []
        fs.stat(rootPath).then(function (data){
        if(data.isFile()){
           console.log("removing file"+rootPath)
            fs.unlink(rootPath).then(console.log("removing file"+rootPath))
        }
        else{
         fs.readdir(rootPath).then(function(fileNames){
             for (let fileName of fileNames) 
             {
                let filePath = path.join(rootPath, fileName)
                let promise = rm(filePath)

          
            }
              fs.rmdir(rootPath).then(console.log("removing directory "+rootPath))
        })}})
    } catch (e) {
        console.log(e.stack)
    }
}

rm(rootPath)

