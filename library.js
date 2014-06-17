(function(module) {
    "use strict";

    var twitchtv = {},
        embed = '<iframe frameborder="0" scrolling="no" src="http://twitch.tv/$1/chat?popout=" height="500" width="350"></iframe>';


    twitchtv.parse = function(postContent, callback) {
        postContent = postContent.replace(/<a href="(?:www\.?)?(?:twitch\.tv)\/?(.+)">.+<\/a>/g, embed);
        callback(null, postContent);
    };

    module.exports = twitchtv;
}(module));
