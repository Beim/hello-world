"use strict"
const koa = require('koa');
const koaStatic = require('koa-static')
const Router = require('koa-router');
const session = require('koa-session');
const fs = require('fs');
const path = require('path');
const parse = require('co-body');


//koa
var app  = koa();
//for koa-session
app.keys = ['scret','keys'];
const opts = {'maxAge' : 60*60*1000};
app.use(session(app,opts));

//koa-router
var router = new Router();
//socket.io
var server = require('http').createServer(app.callback());
var io = require('socket.io')(server);

app.use(function* (next){
    yield next;
})

app.use(koaStatic('./'));



io.on('connection', function(socket){

})

router
    .get('/:name', function* (next){

    })


app.use(router.routes()).use(router.allowedMethods());
server.listen(2333);