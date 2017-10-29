var request = new XMLHttpRequest(); 
var url = "/api/Test";

//request.open("GET", url, false);
//request.send();


//if (request.status != 200) {
//    alert("Error " + request.status + " - " + request.statusText);
//} 

function getResponse(request) {
    var type = request.getResponseHeader("Content-Type");
    switch (type) {
        case "text/xml":
            return request.responseXML;
        case "application/json":
            return JSON.parse(request.responseText);
        default:
            return request.responseText;
    }
} 

//document.write(getResponse(request));

//request.open("GET", url, true);

//request.onreadystatechange = function () {
//    if (request.readyState === 4) {
//        document.writeln(getResponse(request));
//    }
//}; 

//request.send();

//$.get(url, function (data) {
//    document.writeln(JSON.stringify(data));
//}).error(function () {
//    alert("Ooops!");
//});

$.ajax({
    url: url,
    type: 'GET',
    timeout: 12000,
    dataType: 'text'
}).done(function (responseText) {
    $('#answer').text(responseText);
}).fail(function () {
    alert('An error has occurred - you may not have been entered');
}); 