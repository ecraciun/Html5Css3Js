//#region Cookies

// setting the cookie value 
function setCookie(cookieName, cookieValue, expirationDays) { 
    var expirationDate = new Date(); 
    expirationDate.setDate(expirationDate.getDate() + expirationDays); 
    cookieValue = cookieValue + "; expires=" + expirationDate.toUTCString(); 
    document.cookie = cookieName + "=" + cookieValue; 
} 
 
// retrieving the cookie value 
function getCookie(cookieName) 
{ 
    var cookies = document.cookie.split(";"); 
     
    for (var i = 0; i < cookies.length; i++) { 
      var cookie = cookies[i]; 
      var index = cookie.indexOf("="); 
      var key = cookie.substr(0, index); 
      var val = cookie.substr(index + 1); 
 
      if (key == cookieName) 
        return val; 
    } 
} 
 
// usage 
setCookie('firstName', 'Glenn', 1); 
var firstName = getCookie('firstName');
console.log(firstName);

// OR with jQuery

$.cookie('firstName', 'Glenn'); 
firstName = $.cookie('firstName');
console.log(firstName);

//#endregion Cookies

function isWebStorageSupported() { 
    return 'localStorage' in window; 
 } 
 
 function doLocalStorageStuff(){
    if (isWebStorageSupported()) { 
        localStorage.setItem('firstName', $('#firstName').val()); 
        window.addEventListener('storage', respondToChange, false);

        //localStorage.setItem('firstName', $('#firstName').val()); 
        //localStorage['firstName'] = $('#firstName').val(); 
        //localStorage.firstName = $('#firstName').val();

        //var firstName = localStorage.getItem('firstName'); 
        //var firstName = localStorage['firstName']; 
        firstName = localStorage.firstName;

        console.log(firstName);

        localStorage.removeItem('firstName');

        localStorage.clear();

        var itemCount = localStorage.length;

        var person = { firstName: 'Glenn', lastName: 'Johnson' }; 
        localStorage.setItem('glenn', JSON.stringify(person));
    }
}

function respondToChange(e) { 
    alert(e.newValue); 
} 

$('#play').on('click', doLocalStorageStuff); 