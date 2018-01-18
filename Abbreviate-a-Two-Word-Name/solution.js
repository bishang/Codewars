function abbrevName(name){

    var nameArray = name.split(' ');
    console.log(nameArray);
    var fName = nameArray[0].charAt(0).toUpperCase();
    var uName = nameArray[1].charAt(0).toUpperCase();
    return fName + "." + uName;

};