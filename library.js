(function(module) {
    "use strict";
    var winston = require('winston');
    var spreadsheet = {},
        embed = '<iframe width="100%" height="450" frameborder="0" src="https://docs.google.com/spreadsheet/ccc?key=$1&usp=sharing&output=html&widget=true"></iframe>';

        spreadsheet.init = function() {
            winston.info("spreadsheet loaded");
        };

        spreadsheet.parse = function (data, callback) {
            if (!data || !data.postData || !data.postData.content) {
                return callback(null, data);
            }
            data.postData.content = data.postData.content.replace(/<a href="(?:https?:\/\/)?(?:docs\.google\.com)\/spreadsheet\/ccc\?key=(.+)&amp;usp=sharing" rel="nofollow">.+<\/a>/g, embed);
            
            callback(null, data);
        };              
        
        spreadsheet.onLoad = function(params, callback) {
            spreadsheet.init();
            callback();
        };


    module.exports = spreadsheet;
}(module));