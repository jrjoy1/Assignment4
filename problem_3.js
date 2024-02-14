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

