const Categories = ({categories, filterMenus}) => {
  return (
    <div className="btn-container">
        {categories.map((category) => {
            return (
                <button key={category} type="button" className="btn" onClick={() => filterMenus(category)}>{category}</button>
            )
        })
        }
    </div>
  )
}
export default Categories