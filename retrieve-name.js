'use strict'

var fs = require('fs')
var path = require('path')
var indexOf = require('lodash/array/indexOf')
var capitalize = require('lodash/string/capitalize')

var evangiles = JSON.parse(fs.readFileSync(path.resolve('public/data/evangiles.json')))
var mostFrequents = JSON.parse(fs.readFileSync(path.resolve('public/data/frequence.json')))
    .map(function (w) {
        return capitalize(w.label)
    })


evangiles.forEach(function (v) {
    console.log(v.text
        .trim()
        // remove verset num
        .replace(/\d+:\d+ /, '')
        // split with multiples separators _ . , ' ? : ; - !
        // http://stackoverflow.com/questions/650022/how-do-i-split-a-string-with-multiple-separators-in-javascript
        .split(/(?: |'|\.|,|;|\?|:|-|!)/)
        .filter(function (w) {
            // filter string <= 1
            return w.length > 1
                    // filter string with no Uppercase
                && /[A-ZÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]/.test(w.charAt(0))
                && indexOf(mostFrequents, w) === -1

        }))

})