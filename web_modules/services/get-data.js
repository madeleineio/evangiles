/**
 * Created by nicolasmondon on 08/02/15.
 */

var P = require('bluebird');
var d3 = require('d3');
var _ = require('lodash');

var regSort = /(.+)-.* (\d+).*-.* (\d+).*/;
var regCleanText = /\d+:\d+(.+)/;

module.exports = new P(function(resolve){
    d3.json('data/evangiles.json', function(data){

        resolve(_.groupBy(data.map(function(v){
            var regTab = v.title.match(regSort);
            return _.extend({}, v, {
                author: _.trim(regTab[1]),
                chapter: parseInt(regTab[2]),
                verset: parseInt(regTab[3]),
                text: _.trim(v.text.match(regCleanText)[1])
            });
        }), function(v){
            return v.author;
        }));

    });
});