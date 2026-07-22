import { useEffect, useState } from "react";

export const FormItemsView = ({ handler}) => {

    // usestate para guardar informacion temporal en el navegador
    const [formItemsState, setFormItemsState] = useState({
        product: '',
        quantity: '',
        price: ''
    });

    // desestructuracion del estado del formulario
    const { product, quantity, price } = formItemsState;
    
    // useEffect para escuchar los cambios en el estado del formulario
    useEffect(() => {
        // console.log('Cambio el precio');
    }, [price]);
    
    useEffect(() => {
        // console.log('Cambio el formItemsState');
    }, [formItemsState]);
    
    // funcion para capturar el valor del input de producto, cantidad y precio
    const onInputChange = ({ target: { name, value } }) => {
        console.log(name);
        console.log(value);
        
        setFormItemsState({
            ...formItemsState,
            [name]: value
        });
    }

    // funcion para capturar el evento de submit del formulario y agregar un nuevo item a la factura
    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault();
        
        // validacion para que no se agreguen productos vacios
        if (product.trim().length < 1) return;
        // validacion para que no se agreguen letras en el campo de cantidad
        if (quantity.trim().length < 1) {
            alert('El campo de cantidad tiene que ser mayor a 0')
            return;
        }
        if (isNaN(quantity.trim())) {
            alert('El campo de cantidad no es un numero')
            return;
        }
        // validacion para que no se agreguen productos vacios
        if (price.trim().length < 1) {
            alert('El campo de precio tiene que ser mayor a 0')
            return;
        }
        if (isNaN(price.trim())) {
            alert('El campo de precio no es un numero')
            return;
        }

        handler (formItemsState);
        
        setFormItemsState({
            product: '',
            quantity: '',
            price: ''
        });
        
    }
    return (
        <>
            <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
                <input
                    type="text"
                    name="product"
                    value={product}
                    placeholder="Productos"
                    className="form-control m-4"
                    onChange={onInputChange} />
                <input
                    type="text"
                    name="quantity"
                    value={quantity}
                    placeholder="Cantidad"
                    className="form-control m-4"
                    onChange={event => onInputChange(event)} />
                <input
                    type="text"
                    name="price"
                    value={price}
                    placeholder='Precio'
                    className="form-control m-4"
                    onChange={onInputChange} />

                <button type="submit" className="btn btn-primary m-4">Agregar Producto</button>
            </form></>
    )
}