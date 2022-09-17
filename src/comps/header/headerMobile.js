import { useLocation } from 'react-router-dom';
import applist from '../../app-list.json';
import { useState } from 'react';


const HeaderMobile = () => {

    const location = useLocation();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [mobileMenuClasses, setMobileMenuClasses] = useState('menu has-bg-dark is-hidden-tablet');
    const [normalMenuClasses, setNormalMenuClasses] = useState('is-flex-tablet has-justify-between has-w-full is-hidden');   


    const toggleMenu = () => {
 
        if (showMobileMenu === false){
          setShowMobileMenu(true);
          setNormalMenuClasses('is-flex-tablet has-justify-between has-w-full');
          
        }
        else{
          setShowMobileMenu(false);
          setNormalMenuClasses('is-flex-tablet has-justify-between has-w-full is-hidden');      
        }
    
    }


return(
    <>
    <div		  
        id="navbar-toggler"
        onClick={() =>  toggleMenu()  }
        className={mobileMenuClasses}
    ></div>
    <div
        id="navbar-menu"
        className={normalMenuClasses}
    >
        <div className="is-flex-tablet">
        <div className="is-inlie-block with-dropdown has-mr-2">
            <button className="button is-flex has-items-center has-pr-4">
            Projects
            <i className="si-chevron-down has-size-2 has-ml-2"></i>
            </button>
            <div className="dropdown">
            {createDropdownList(location.pathname)}
            </div>
        </div>
        {createMenuList(location.pathname)}
        </div>
        <div className="has-ml-auto-tablet has-mt-4-mobile">
        {createDownloadButton(location.pathname)}
        </div>
    </div>
    </>
);
}

export default HeaderMobile;


const createDropdownList = (pathname) => {
    let dropdownData = [];
    for (let i = 0; i < applist.length; i++) {
      let key = "dropdown_" + i;
      let name = applist[i].name;
      let link = applist[i].link;
  
      if (pathname === link) {
        dropdownData.push(
          <a
            href={link}
            key={key}
            className="navlink has-text-black has-bg-highlight"
          >
            {name}
          </a>
        );
      } else {
        dropdownData.push(
          <a href={link} key={key} className="navlink has-text-black">
            {name}
          </a>
        );
      }
    }
  
    return dropdownData;
  };
  
  const createMenuList = (pathname) => {
    const menuList = [
      { name: "News", link: "/news" },
      { name: "Contact", link: "/contact" },
      { name: "About", link: "/about" },
    ];
  
    let menuData = [];
    for (let i = 0; i < menuList.length; i++) {
      let key = "menuList_" + i;
      let name = menuList[i].name;
      let link = menuList[i].link;
  
      if (pathname === link) {
        menuData.push(
          <a
            href={link}
            key={key}
            className="navlink has-mb-2-mobile has-bg-dark-hover has-bg-highlight has-text-black"
          >
            {name}
          </a>
        );
      } else {
        menuData.push(
          <a
            href={link}
            key={key}
            className="navlink has-mb-2-mobile has-bg-dark-hover"
          >
            {name}
          </a>
        );
      }
    }
  
    return menuData;
  };
  
  const createDownloadButton = (pathname) => {
    if (pathname === "/downloads") {
      return (
        <a
          href="/downloads"
          className="button is-full has-bg-highlight has-text-black"
        >
          Downloads
        </a>
      );
    } else {
      return (
        <a href="/downloads" className="button is-full">
          Downloads
        </a>
      );
    }
  };

