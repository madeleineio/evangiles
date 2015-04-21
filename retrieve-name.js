'use strict'

var fs = require('fs')
var path = require('path')
var natural = require('natural')
var tokenizer = new natural.WordTokenizer()

var evangiles = JSON.parse(fs.readFileSync(path.resolve('public/data/evangiles.json')))

evangiles.forEach(function(v){
    // remove verset num
    // split with multiples separators _ . , ' ? : ; -
    // http://stackoverflow.com/questions/650022/how-do-i-split-a-string-with-multiple-separators-in-javascript
    // filter string <= 1
    // filter string with no Uppercase
    console.log(v.text.trim().replace(/\d+:\d+ /, '').split(/(?: |'|\.|;|\?|:|-)/).filter(function(w){
        return w.length > 1 && /[A-ZÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]/.test(w.charAt(0))
    }))

})