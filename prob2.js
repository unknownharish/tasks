

let conversion = {
    tons: 1000000000,
    kilograms: 1000000,
    grams: 1000,
    milligrams: 1
}


let initial_stock = { "tons": 1, "kilograms": 0, "grams": 0, "milligrams": 0 }

const after_sale = update_stock(initial_stock, { "tons": 0, "kilograms": 0, "grams": 1, "milligrams": 0 }, "sell")
const after_purchase = update_stock(initial_stock, { "tons": 0, "kilograms": 0, "grams": 1001, "milligrams": 0 }, "purchase")


function update_stock(init, value, type) {

    let Amount = 0;
    Object.keys(value)?.map(key => {
        if (value[key] != 0 && key == "tons") Amount += value[key] * conversion.tons;
        if (value[key] != 0 && key == "kilograms") Amount += value[key] * conversion.kilograms;
        if (value[key] != 0 && key == "grams") Amount += value[key] * conversion.grams;
        if (value[key] != 0 && key == "milligrams") Amount += value[key] * conversion.milligrams;
    })

    let totalAmount = 0;
    Object.keys(init)?.map(key => {
        if (init[key] != 0 && key == "tons") totalAmount += init[key] * conversion.tons;
        if (init[key] != 0 && key == "kilograms") totalAmount += init[key] * conversion.kilograms;
        if (init[key] != 0 && key == "grams") totalAmount += init[key] * conversion.grams;
        if (init[key] != 0 && key == "milligrams") totalAmount += init[key] * conversion.milligrams;
    })

    let remainingAmount;
    if (type == "sell")
        remainingAmount = totalAmount - Amount

    else
        remainingAmount = totalAmount + Amount

    console.log(remainingAmount)


    // update 
    init.tons = parseInt(remainingAmount / conversion.tons)
    remainingAmount = (remainingAmount % conversion.tons)
    // console.log("tons", remainingAmount)
    init.kilograms = parseInt(remainingAmount / conversion.kilograms)
    remainingAmount = (remainingAmount % conversion.kilograms)
    // console.log("kg", remainingAmount)

    init.grams = parseInt(remainingAmount / conversion.grams)
    remainingAmount = (remainingAmount % conversion.grams)
    // console.log("grams", remainingAmount)

    init.milligrams = parseInt(remainingAmount / conversion.milligrams)
    // console.log("mili", remainingAmount)


    console.log(init)

    return init


}
