import './index.css'

const RowComponent = props => {
  const {item, filterItems} = props
  const {option, filter, id} = item
  const shuffleList = () => {
    filterItems(id)
  }
  const classNamemod1 = option === 'Email Address' ? 'modwidth1' : null

  return (
    <th className={`column1 ${classNamemod1}`}>
      <span className="col1-text">{option}</span>
      {filter ? (
        <button type="button" className="arrowButton" onClick={shuffleList}>
          <img
            alt="arrow"
            className="arrowButton"
            src="https://res.cloudinary.com/dttk0z3nc/image/upload/v1669902841/ArrowsDownUp_gawsdb.png"
          />
        </button>
      ) : null}
    </th>
  )
}
export default RowComponent
