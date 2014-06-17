(function(module) {
    "use strict";

    var twitchtv = {},
        embed = '    <object type="application/x-shockwave-flash" height="378" width="620" id="live_embed_player_flash" data="http://www.twitch.tv/widgets/live_embed_player.swf?channel=$1" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="http://www.twitch.tv/widgets/live_embed_player.swf" /><param name="flashvars" value="hostname=www.twitch.tv&channel=$1&auto_play=false&start_volume=50" /></object>';


    twitchtv.parse = function(postContent, callback) {
        postContent = postContent.replace(/<a href="(?:http?:\/\/)?(?:www\.twitch\.tv)\/?(.+)">.+<\/a>/g, embed);
        callback(null, postContent);
    };

    module.exports = twitchtv;
}(module));
