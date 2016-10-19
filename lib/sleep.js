'use strict';

var Promise = require('bluebird');

var sleep = module.exports = function(msec, value){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(value);
        }, msec)
    })
}

