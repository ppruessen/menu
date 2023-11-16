const MenuItem = ({title, price, img, desc}) => {
  return (
    <article>
        <div className="menu-item">
            <img className="img" src={img} height={"200px"} alt={title} />
            <div className="item-info">
                <header>
                    <h5>{title}</h5>
                    <div className="item-price">${price}</div>
                </header>
                <p className="item-text">{desc}</p>
            </div>
        </div>
    </article>
  )
}
export default MenuItem