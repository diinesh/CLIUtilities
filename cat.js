#!/usr/bin/env node
"use strict";

let fs = require('pn/fs')

let length = process.argv.length
//process.stdout.write(process.argv[2]+"\n")

 fs.readFile(process.argv[2]).then(function (data) 
  { process.stdout.write( data+"\n")})
//fs.readFile(__filename, function (err,data) { process.stdout.write( data+"\n")})




