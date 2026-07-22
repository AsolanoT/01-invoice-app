// Creo un objeto
export const invoice = {
    id: 10,
    name: 'Componentes de Laptop',
    client: {
        name: 'Harrison',
        lastname: 'Wells Guideon',
        address: {
            country: 'Canada',
            city: 'Toronto',
            street: 'One Street',
            number: 15
        },
    },
    company: {
        name: 'Vite SAS',
        fiscalNumber: 813005263,
    },
    items: [
        {
            id: 1,
            product: 'Mouse',
            price: 50,
            quantity: 5
        },
        {
            id: 2,
            product: 'CPU intel core 9',
            price: 100,
            quantity: 2
        },
        {
            id: 3,
            product: 'Fuente de voltaje',
            price: 250,
            quantity: 1
        }
    ] 
}