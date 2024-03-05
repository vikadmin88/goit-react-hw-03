import css from './SearchBox.module.css'

const SearchBox = () => {
  return (
    <div className={css.searchBox}>
      <label className={css.label}>Find contacts by name
        <input className={css.field} type="text" name="name"/>
      </label>
    </div>
  )
}

export default SearchBox