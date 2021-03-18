$.ajax({
    url: 'https://data.cityofnewyork.us/resource/25th-nujf.json',
    dataType: 'json',
    success: function(data) { 
        alert("Hey are you lost on what to name you child? We can do that for you.");
        
        var userName = prompt("Find a popular baby name!, input any first letter and we'll give you a list of popular names the begin with that letter!");
        userName = "";
        }});//the input value or first 
        

for(var i = 0; i < data.length; i++) {
    if(data[i].nm.substr(userName) === 0) { 
document.write("Here are all names beginning with" + userName + (data[i].nm))}
        } //prints out names that based off the user input 