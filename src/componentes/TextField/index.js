import './TextField.css';

const TextField = (props) => {

    

    const whenTyped = (event) => {
        props.whenChanging(event.target.value);
    }

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={whenTyped} required={props.mandatory} placeholder={props.placeholder} />
        </div>
    )
};

export default TextField;