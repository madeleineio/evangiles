/**
 * Created by nicolasmondon on 27/01/15.
 */

// modules
var cheerio = require('cheerio');
var needle = require('needle');
var fs = require('fs');
var Promise = require('bluebird');
var _ = require('underscore');

// generate urls
var urls = [];
var urlTemplate = _.template('http://www.bible-en-ligne.net/bible,<%=id%>N-<%=numPage%>,<%=author%>.php');
var evangileNames = [
    {
        author: 'matthieu',
        total: 28,
        id: '40'
    },
    {
        author: 'luc',
        total: 24,
        id: '42'
    },
    {
        author: 'marc',
        total: 16,
        id: '41'
    },
    {
        author: 'jean',
        total: 21,
        id: '43'
    }
];
evangileNames.forEach(function(e){
    urls = urls.concat(_.range(1, e.total+1).map(function(numPage){
        return urlTemplate(_.extend({
            numPage: numPage
        }, e));
    }));
});

// retrieve datas
var evangiles = [];
var options = {
    timeout: 5000
};
Promise.promisifyAll(needle);
var current = Promise.resolve();
Promise.map(urls, function(url){
    current = current.then(function(){
        console.log(url);
        return needle.getAsync(url, options);
    });
    return current;
}).map(function(responseAndBody){
    var $ = cheerio.load(responseAndBody[1], {
        normalizeWhitespace: true,
        xmlMode: true,
        decodeEntities: false
    });
    $('#principal p').each(function(){
        evangiles.push( {
            title: $(this).find('a').attr('title'),
            text: $(this).text()
        });
    });
}).then(function(){
    fs.writeFileSync('public/data/evangiles.json', JSON.stringify(evangiles));
});