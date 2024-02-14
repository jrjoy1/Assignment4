function checkName(name){
    // console.log(lastWord);
    // console.log(name[lastWord - 1]);
    // console.log(typeof(name));
    if(typeof(name) === "string"){
        const lastWord = name.length;
        const must = name[lastWord - 1];
        if((must === 'a' || must === 'y' || must === 'i' || must === 'e' || must === 'o' || must === 'u' || must === 'w') || (must === 'A' || must === 'Y' || must === 'I' || must === 'E' || must === 'O' || must === 'U' || must === 'W')){
            

            return "Good Name";
        }
        else{
            return "Bad Name";
        }
        }
    else{
        return "invalid";
    }
}

// console.log(checkName(["Rashed"]));