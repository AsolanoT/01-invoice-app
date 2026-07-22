import React, { useEffect, useState } from 'react'
import { calculateTotal, getInvoice } from './services/getInvoices'
import { InvoiceView } from './components/InvoiceView';
import { ClientView } from './components/ClientView';
import { CompanyView } from './components/CompanyView';
import { ListItemView } from './components/ListItemsView';
import { TotalView } from './components/TotalView';
import { FormItemsView } from './components/FormItemsView';

const invoiceInitial = {
    id: 0,
    name: 'Componentes de Laptop',
    client: {
        name: '',
        lastname: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0
        },
    },
    company: {
        name: '',
        fiscalNumber: 0,
    },
    items: []
}
export const InvoiceApp = () => {

    const [activeForm, setActiveForm] = useState(false);

    // useState para guardar el total de la factura
    const [total, setTotal] = useState(0);
    // useState para guardar el contador de items
    const [counter, setCounter] = useState(4);

    const [invoice, setInvoice] = useState(invoiceInitial);

    const [items, setItems] = useState([]);

    // llamo al servicio de getInvoice.js para obtener datos de la factura
    // const invoice = getInvoice();
    useEffect(() => {
        const data = getInvoice();
        console.log(data);
        setInvoice(data);
        setItems(data.items);

    }, []);

    const { id, name, client, company } = invoice;

    useEffect(() => {
        // console.log('Cambio el contador');
    }, [counter]);

    useEffect(() => {
        setTotal(calculateTotal(items));
        // console.log('Cambio el item');
    }, [items]);

    const handlerAddItems = ({ product, quantity, price }) => {

        setItems([...items, {
            id: counter,
            product: product.trim(),
            quantity: parseInt(quantity.trim(), 10),
            price: +price.trim()
        }]);

        setCounter(counter + 1);
    }

    const handlerDeleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    }

    const onActiveForm = () => {
        setActiveForm(!activeForm);
    }

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">InvoiceApp Ejemplo Factura</div>

                    <div className="card-body">
                        <InvoiceView id={id} name={name} />

                        <div className="row">

                            <div className="col">
                                <ClientView title="Datos del Cliente:" client={client} />
                            </div>

                            <div className="col">
                                <CompanyView title="Datos de la empresa:" company={company} />
                            </div>

                        </div>

                        <ListItemView title="Productos de la Factura:" items={items} handlerDeleteItem={id => handlerDeleteItem(id) } />
                        <TotalView total={total} />
                        <button className="btn btn-secondary"
                            onClick={onActiveForm}> {!activeForm ? 'Agregar Item' : 'Ocultar Item'} </button>
                        {!activeForm || <FormItemsView handler={handlerAddItems} />}

                    </div>
                </div>
            </div>
        </>
    )
}
