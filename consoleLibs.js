var head = document.getElementsByTagName("head")[0];

var jquery_tag = document.createElement("script");
jquery_tag.type = "text/javascript";
jquery_tag.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js";

var lodash_tag = document.createElement("script");
lodash_tag.type = "text/javascript";
lodash_tag.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js"


head.appendChild(jquery_tag);
head.appendChild(lodash_tag);
