import React from 'react';


const Error = (props) => {

    return(
        <div className="error">
            <div className="container error__container">
                <div className="row error__container__row">
                    <p>We couldn't find any results for your search term "{props.errorTerm}"</p>
                </div>
            </div>
        </div>
    );
};

export default Error;