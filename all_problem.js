function calculateMoney(soldTicket){
    if(soldTicket >= 0){
        const perTicketPrice = 120;
        const totalTicketSold = 120 * soldTicket;
        const guardBill = 500;
        const lunchBill = 8 * 50;

        const totalExpense = guardBill + lunchBill;

        const moneyLeft = totalTicketSold - totalExpense;
        return moneyLeft;
    }
    else{
        return "Invalid Number";
    }
}

// console.log(calculateMoney(-130));



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



function deleteInvalids(array) {
    // console.log();
    if (Array.isArray(array)) {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            if (typeof (array[i]) === "number" && !isNaN(array[i])) {
                result.push(array[i]);

            }
        }
        return result;

    }
    else {
        return "Invalid Array";
    }

}
// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));



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



function monthlySavings(arr , livingCost){

    if(Array.isArray(arr) && typeof(livingCost)==="number"){
        let totalSavings = 0;
        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i] >= 3000){
                totalSavings += arr[i] - (arr[i] * (20/100));
            }
            else{
                totalSavings += arr[i];
            }
        }
        let leftMoney = totalSavings - livingCost;
        if(leftMoney >= 0){
            return leftMoney;
        }
        else{
            return "earn more";
        }

    }
    else{
        return "invalid input";
    }
}
// console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000))