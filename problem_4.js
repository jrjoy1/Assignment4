function password(obj){
    // console.log(obj.name);
    if(obj.name != null && obj.siteName != null && (obj.birthYear > 999 && obj.birthYear <= 9999)){
        let firstWord = obj.siteName[0].toUpperCase();
        let leftWord = obj.siteName.slice(1);
        // console.log(firstWord+leftWord);

        return firstWord+leftWord+'#'+obj.name+'@'+obj.birthYear;
    }
    else{
        return "invalid";
    }
}

// console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));