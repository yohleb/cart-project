const FormInput = ({ label, type, name, defaultValue }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text">{label}</span>
      </label>
      <input defaultValue={defaultValue} id={name} name={name} type={type} placeholder="Type here" className="input input-bordered" />
    </div>
  );
}

export default FormInput;