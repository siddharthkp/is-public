#!/usr/bin/env node

const isPublic = require('./index.js')
const { info, warn, error } = require('prettycli')

const repo = process.argv[2]

if (!repo) console.log('Please pass the username/repo')
else {
  isPublic(repo)
    .then(public => {
      if (public) info('PUBLIC', `${repo} is public`)
      else warn(`${repo} is not public`)
    })
    .catch(err => error(err, { silent: true }))
}
