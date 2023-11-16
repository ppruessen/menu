import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const App = () => {

  const [menus, setMenus] = useState(menu);
  
  // const tempCategories = menu.map((item) => item.category);
  // const tempItems = [...tempCategories, 'all'];
  // const tempSet = new Set(tempItems);
  // const [categories, setCategories] = useState(tempSet);

  const allCategories = [...new Set(menu.map((item) => item.category)), 'all'];

  const [categories, setCategories] = useState(allCategories);

  const filterMenus = (category) => {
    if (category !== 'all') {
      const newMenus = menu.filter((menuItem) => menuItem.category === category);
      setMenus(newMenus);
    } else {
      setMenus(menu);
    }
  }

  return <main>
    <section className="menu">
      <Title text='our menu'/>
      <Categories categories={Array.from(categories)} filterMenus={filterMenus}/>
      <Menu menus={menus} />
    </section>

  </main>;
};
export default App;
