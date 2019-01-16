// Clean string array of empty strings ("")
Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

// Update URL query parameters and pushState it
var updateQueryStringParam = function (key, value) {
    var baseUrl = [location.protocol, '//', location.host, location.pathname].join(''),
        urlQueryString = document.location.search,
        newParam = key + '=' + value,
        params = '?' + newParam;
    if (urlQueryString) {
        var updateRegex = new RegExp('([\?&])' + key + '[^&]*');
        var removeRegex = new RegExp('([\?&])' + key + '=[^&;]+[&;]?');
        if( typeof value == 'undefined' || value == null || value == '' ) {
            params = urlQueryString.replace(removeRegex, "$1");
            params = params.replace( /[&;]$/, "" );
        } else if (urlQueryString.match(updateRegex) !== null) {
            params = urlQueryString.replace(updateRegex, "$1" + newParam);
        } else { 
            params = urlQueryString + '&' + newParam;
        }
    }
    params = params == '?' ? '' : params;
    window.history.pushState({}, "", baseUrl + params);
};


// Update URL Query array mode
var updateQueryStringArray = function(param, value) {
    var actualquery = getQueryStringParam(param);
    if (actualquery){
        var arr = actualquery.split(',');
        var index = arr.indexOf(value);
        if(index >= 0){
            arr.splice(index, 1);
            updateQueryStringParam(param, arr.join(","))
        }else{
            actualquery += ','+value;
            updateQueryStringParam(param, actualquery)
        }
    }else{
        updateQueryStringParam(param, value);
    }
}


// Get URL query parameters
var getQueryStringParam = function (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var getQueryStringArray = function (name, url) {
    var param = getQueryStringParam(name, url);
    if(param && param != ''){
        return param.split(',')
    }
    return [];
}

var openInNewTab = function (url) {
  var win = window.open(url, '_blank');
  win.focus();
}

var copyToClipboard = function (str=window.location.href) {
    var hiddenInput = document.getElementById("js-copytext")
    hiddenInput.value = str;
    document.execCommand("Copy", false, document.getElementById('js-copytext').select());
    alert("Url copiada en el portapapeles");
}

var shareOnTwitter = function (url=window.location.href, msg="") {
    url = escape(url);
    openInNewTab('http://twitter.com/share?text='+msg+'&url='+url)
}

var shareOnFacebook = function (url=window.location.href) {
    url = escape(url);
    openInNewTab('https://www.facebook.com/sharer/sharer.php?u='+url)
}





/*
var initConfig = {
    'lat': 40.428655,
    'lng': -3.6622,
    'zoom': 12,
    'circlesize': 30,
}
var cfg = {};

// Integrer keys (lar, lng, zoom)
Object.keys(initConfig).forEach(function(key) {
    let qparam = getQueryStringParam(key);
    cfg[key] = !isNaN(qparam) && qparam != null ? +qparam : initConfig[key];
});

// String keys
var optionalkeys = ['dist','act', 'st', 'point'];
optionalkeys.forEach(function(key){
    if(getQueryStringParam(key) != null){
        cfg[key] = getQueryStringParam(key);
    }
})


d3.csv("assets/data/").then(function(data) {

    data.forEach(function(d){

    })

    var container = d3.select('#map')
        .style('height', window.innerHeight + 'px');

    ahmap = new Map(container, data, cfg);

});
*/