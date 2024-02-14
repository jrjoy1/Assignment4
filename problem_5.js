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
// console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));