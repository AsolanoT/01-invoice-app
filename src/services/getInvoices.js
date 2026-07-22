import { invoice } from "../data/invoice"

export const getInvoice = () => {
    console.log(invoice);

    // calculo de total primera forma
    /*
    let total = 0;
    invoice.items.forEach(item => {
        total += item.price * item.quantity; 
    });
    */

    // segunda forma
    const total = calculateTotal(invoice.items);
    return {...invoice, total};
}

export const calculateTotal = (items = [])  => {
    return items
        .map(item => item.price * item.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

}
