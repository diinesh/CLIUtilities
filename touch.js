#!/usr/bin/env node
"use strict";

let fs = require('pn/fs')

let length = process.argv.length
//process.stdout.write(process.argv[2]+"\n")
let currtime=Date.now()/1000
let fd = fs.open(process.argv[2],'w').then(function (fd) 
  { fs.futimes(fd, currtime, currtime)})
 //