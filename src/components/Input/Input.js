import './Input.css';

const Input = ({
                 type,
                 id,
                 label,
                 name,
                 onChange,
                 min,
                 max,
                 placeholder,
                 required,
                 value
               }) => {
  return (
    <div className="input">
      <label className="input__label" htmlFor={ id }>{ label }</label>
      <input type={ type }
             id={ id }
             className="input__field"
             name={ name }
             onChange={ onChange }
             placeholder={ placeholder }
             minLength={ min }
             maxLength={ max }
             required={ required }
             value={ value  }
      />
    </div>
  );
};

export default Input;
