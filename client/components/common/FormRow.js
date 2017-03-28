import React, { PropTypes } from 'react';
import classnames from 'classnames';

const FormRow = ({ value, onChange, name, type, placeholder, dataRequired, error, hasLink, formRequired, classAdditional }) => {
    return (
        <div className={classnames("form-row", classAdditional, { 'form-required': formRequired })}>
          <input 
            value={value}
            onChange={onChange}
            name={name}
            type={type}
            className={classnames("form-control", { 'error': error })}
            placeholder={placeholder}
            data-required={dataRequired}
            required={formRequired}
          />
          {error && <span className="error-message">{error}</span>}
          {hasLink && <div className="forgot-link"><a href="#">Forgot your password?</a></div>}
        </div>
    );
};

FormRow.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    dataRequired: PropTypes.bool,
    error: PropTypes.string,
    hasLink: PropTypes.bool,
    formRequired: PropTypes.bool
};

FormRow.defaultProps = {
    type: 'text'
}

export default FormRow;