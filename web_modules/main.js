/**
 * Created by nicolasmondon on 08/02/15.
 */

var $ = require('jquery');
var getData = require('services/get-data');


$(function(){

    getData.then(function(data){
        console.log(data);

    })

});