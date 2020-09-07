/* Stella Downtable Encryption */

function encrypt(data, key){
    var sourcemap = "abcdefghijklmnopqrstuvwxyz ABCEFGHIJKLMNOPQRSTUVWXYZ`¬!£$%^&*()_+1234567890-=[]{};'#:@~,./<>?\|"
var table = sourcemap.split("");
var datad = data;
var ackey = key;
var keyusage = "";
var mappedkey = [];
var currentround = 0;
var currentletter = 0;
var keyd = ackey.split("");
table.forEach(mapper);
var datamapped = datad.split("");
var output = "";
datamapped.forEach(encoder);
return output;

function encoder(item, index){
    var indexintab = table.indexOf(item);
    var mapoutput = mappedkey[indexintab] + ":";
    output = output + mapoutput;
}

function mapper(item, index){
    if (currentletter == ackey.length){
        currentround = currentround + 1;
        currentletter = 0;
    }
    var currentmapkey = keyd[currentletter];
    var currentnumber = (keyusage.split(currentmapkey).length - 1);
    keyusage = keyusage + currentmapkey;
    mappedkey.push(currentmapkey + currentnumber);
    currentletter = currentletter + 1;
}
}

function decode(data, key){
    var sourcemap = "abcdefghijklmnopqrstuvwxyz ABCEFGHIJKLMNOPQRSTUVWXYZ`¬!£$%^&*()_+1234567890-=[]{};'#:@~,./<>?\|"
var table = sourcemap.split("");
var datad = data;
var ackey = key;
var keyusage = "";
var mappedkey = [];
var currentround = 0;
var currentletter = 0;
var keyd = ackey.split("");
table.forEach(mapper);
var datamapped = datad.split(":");
var output = "";
datamapped.splice(-1,1)
datamapped.forEach(decoder);
return output;

function decoder(item, index){
    var indexintab = mappedkey.indexOf(item);
    var mapoutput = table[indexintab];
    output = output + mapoutput;
}

function mapper(item, index){
    if (currentletter == ackey.length){
        currentround = currentround + 1;
        currentletter = 0;
    }
    var currentmapkey = keyd[currentletter];
    var currentnumber = (keyusage.split(currentmapkey).length - 1);
    keyusage = keyusage + currentmapkey;
    mappedkey.push(currentmapkey + currentnumber);
    currentletter = currentletter + 1;
}
}
