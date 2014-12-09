(function(module) {
    "use strict";

    var spreadsheet = {},
        embed = '<iframe width="100%" height="450" frameborder="0" src="https://docs.google.com/spreadsheet/ccc?key=$1&usp=sharing&output=html&widget=true"></iframe>';


    spreadsheet.parse = function(postContent, callback) {
        postContent = postContent.replace(/<a href="(?:https?:\/\/)?(?:docs\.google\.com)\/spreadsheet\/ccc\?key=(.+)&usp=sharing">.+<\/a>/g, embed);
        callback(null, postContent);
    };

    module.exports = spreadsheet;
}(module));