import { RowItemView } from "./RowItemView"
import PropTypes from 'prop-types';

export const ListItemView = ({ title, items, handlerDeleteItem}) => {
    return (
        <>
            <h3> {title} </h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Productos</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, product, quantity, price }) => (
                        <RowItemView 
                        key={ id } 
                        id={ id } 
                        product={ product } 
                        quantity={ quantity } 
                        price={ price }
                        handlerDeleteItem={id => handlerDeleteItem(id)}
                        />
                    )
                    )}

                </tbody>
            </table>
        </>
    )
}

// prop-types
ListItemView.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}