import PropTypes from 'prop-types';

export const ClientView = ({ title, client }) => {

    //desestrcuturamos cliente
    const { name: nameClient, lastname, address: { country, city, street, number } } = client;

    return (
        <>

            <h3> {title} </h3>
            <ul className="list-group">
                <li className="list-group-item active"> Nombre Completo: {nameClient} {lastname}</li>
                <li className="list-group-item"> Pais y Ciudad: {country} / {city} </li>
                <li className="list-group-item"> Direccion: Calle {street} # {number} </li>
            </ul>
        </>
    )
}

// prop-types
ClientView.propTypes = {
    title: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired,
}