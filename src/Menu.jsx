import MenuItem from "./MenuItem";

const Menu = ({menus}) => {
  return (
    <div className="section-center">
        { menus.map((menuItem) => {
            return (
                <MenuItem key={menuItem.id} {...menuItem}/>
            )
        })}
    </div>
  )
}
export default Menu