import css from './SearchBox.module.css'

const SearchBox = ({inputValue, handleChange}) => {
 
    return (
        <div className={css.container}>
                <p className={css.text}>Find contacts by name</p>
                 <input className={css.input} type="text" value={inputValue} onChange={handleChange} placeholder='Name'/>
        </div>
    )
 }
export default SearchBox


