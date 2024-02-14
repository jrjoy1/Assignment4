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