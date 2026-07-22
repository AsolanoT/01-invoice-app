import PropTypes from 'prop-types';

export const CompanyView = ( {title, company} ) => {

    // desestructuramos company para evitar llamar por ejemplo name asi: company.name
    const { name: nameCompany, fiscalNumber } = company;
    return (
        <>
            <h3> { title } </h3>
            <ul className="list-group">
                <li className="list-group-item active"> Razon Social: {nameCompany} </li>
                <li className="list-group-item"> NIT:  {fiscalNumber} </li>
            </ul>
        </>
    )
}

// prop-types
CompanyView.prototypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired,
}