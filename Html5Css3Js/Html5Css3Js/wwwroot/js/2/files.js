window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;

window.requestFileSystem(TEMPORARY, 5 * 1024 * 1024, getFile, handleError); 


function getFile(fileSystem) { 
   fileSystem.root.getFile("example.txt", { create: true }, fileOpened, handleError); 
} 

function fileOpened(fileEntry) { 
   alert("File opened!"); 
   fileEntry.createWriter(writeToFile, handleError); 
   fileEntry.file(readFile, handleError); 
   //fileEntry.remove(fileRemoved, handleError); 
} 

function handleError(error) { 
   alert(error.code); 
}

function writeToFile(fileWriter) { 
    fileWriter.onwriteend = function() { alert('Success'); }; 
    fileWriter.onerror = function() { alert('Failed'); }; 
    fileWriter.write(new Blob(['Hello world'], {type: 'text/plain'})); 
} 

function readFile(file) { 
    var fileReader = new FileReader(); 
    fileReader.onloadend = function() { alert(this.result); }; 
    fileReader.onerror = function() { alert('Failed'); }; 
    fileReader.readAsText(file); 
}

function getDirectory(fileSystem) { 
    fileSystem.root.getDirectory("Chapter16", { create: true },  
           directoryOpened, handleError); 
} 

function directoryOpened(directoryEntry) { 
    alert(directoryEntry.fullPath); // will display "/Chapter16" 
} 