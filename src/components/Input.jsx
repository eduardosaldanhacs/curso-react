function Input(props) {
  return (
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      
      {...props} //deixar o props assim é a mesma coisa que exibir um por um

    //OU 

    //   type={props.type}
    //   placeholder={props.placeholder}
    //   value={props.value}
    //   onChange={props.onChange}
    />
  );
}

export default Input;
