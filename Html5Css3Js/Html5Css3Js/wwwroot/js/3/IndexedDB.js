window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB; 
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction; 
window.IDBCursor = window.IDBCursor || window.webkitIDBCursor; 
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;

var indexedDB = window.indexedDB; 
var openRequest = indexedDB.open('Library', 1); 
openRequest.onupgradeneeded = function(response) { 
    response.currentTarget.result.createObjectStore("authors", { keypath: 'id', autoIncrement: true }); 
};

var db; 
 
openRequest.onsuccess = function(response) { 
    db = openRequest.result; 
    //addAuthor(); 
    //updateAuthor(); 
    //getAuthor(); 
    //findAuthors();
}; 
 
openRequest.onerror = function (response) { 
    alert("Error code: " + response.target.errorCode); 
};

function addAuthor() { 
    var trans = db.transaction('authors', 'readwrite'); 
    var authors = trans.objectStore("authors"); 
    var request = authors.add({firstName: 'Daniel', lastName: 'Defoe'}); 
    request.onsuccess = function(response) { 
        alert('New record id: ' + request.result); 
    }; 
 
    request.onerror = function(response) { console.error(response); }; 
};

function updateAuthor() { 
    var trans = db.transaction('authors', 'readwrite'); 
    var authors = trans.objectStore("authors"); 
    var request = authors.put({firstName: 'Bob', lastName: 'Defoe'}, 1); 
    request.onsuccess = function(response) { 
        alert('Updated record id: ' + request.result); 
    }; 
 
    request.onerror = function(response) { console.error(response); }; 
};

function deleteAuthor() { 
    var trans = db.transaction('authors', 'readwrite'); 
    var authors = trans.objectStore("authors"); 
    var request = authors.delete(1); 
 
    request.onsuccess = function(response) {  
        // success
    }; 
    request.onerror = function(response) { console.error(response); }; 
};

function getAuthor() { 
    var trans = db.transaction('authors', 'readonly'); 
    var authors = trans.objectStore("authors"); 
    var request = authors.get(1); 
 
    request.onsuccess = function(response) { 
        var author = response.target.result; 
        alert('Last name: ' + author.lastName); 
    }; 
    request.onerror = function(response) { console.error(response); }; 
}

function findAuthors() { 
    var trans = db.transaction('authors', 'readonly'); 
    var authors = trans.objectStore("authors"); 
    var request = authors.openCursor(); 
 
    request.onsuccess = function(response) { 
        var cursor = response.target.result; 
 
        if (!cursor) { 
            alert('No records found.'); 
            return; 
        } 
         
        alert('Id: ' + cursor.key + ' Last name: ' + cursor.value.lastName); 
        cursor.continue(); 
    }; 
 
    request.onerror = function(response) { console.error(response); }; 
}

function dropDatabase(){
    var dropRequest = indexedDB.deleteDatabase('Library'); 
    dropRequest.onsuccess = function(response) {  
        // success! 
    }; 
    dropRequest.onerror = function (response) { 
        // display error 
    };
}