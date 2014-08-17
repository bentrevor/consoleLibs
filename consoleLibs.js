var head = document.getElementsByTagName("head")[0];

var jquery_tag = document.createElement("script");
jquery_tag.type = "text/javascript";
jquery_tag.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js";

var underscore_tag = document.createElement("script");
underscore_tag.type = "text/javascript";
underscore_tag.src = "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js";

head.appendChild(jquery_tag);
head.appendChild(underscore_tag);
