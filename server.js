const express = require('express')
const bodyParser = require('body-parser')
const server = express()
server.use(bodyParser.urlencoded({ extended: false }))
// the cores config
server.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  if (req.method === 'OPTIONS') {
    res.send(200)
    ;/make the require of options turn back quickly/
  } else {
    next()
  }
})
server.listen(3306, () => {
  console.log('正在监听3306端口')
})

// deal router
server.use('/', require('./route/index.js')())
