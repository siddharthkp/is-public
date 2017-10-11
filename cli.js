#!/usr/bin/env node

var isPublic = require('./index.js')

var arguments = process.argv
var repo = arguments[2]

if (!repo) console.log('Please pass the username/repo')
else {
  isPublic(repo)
    .then(public => console.log(`${repo} is${public ? '' : ' not'} public`))
    .catch(error => console.log(error))
}
