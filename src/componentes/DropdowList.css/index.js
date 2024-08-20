import './DropdowList.css'

const DropdowList = (props) => {
    return (
        <div className='dropdow-list'>
            <label>{props.label}</label>
            <select onChange={event => props.whenChanging(event.target.value)} required={props.mandatory} value={props.value}>
                <option value=""></option>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropdowList;