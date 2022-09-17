import { useState, useEffect } from 'react';
import HeaderMobile from './headerMobile';
import HeaderWeb from './headerWeb';

const Header = () => {

  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const mobileMenu = (window.innerWidth < 816) ? setIsMobile(true) : setIsMobile(false);  
  }, []);

  

  return (
    <div className="container has-pt-6">
      <div className="container has-pt-4 has-pb-4 has-pl-6 has-pr-6 is-flex has-items-center has-flex-wrap-mobile has-bg-dark has-text-white is-rounded big-shadow">
        <a
          href="/"
          className="is-flex has-items-center has-mr-6-tablet has-mr-auto-mobile has-size-2 has-text-current is-not-underlined"
        >
          <i className="si-git-branch has-size-4 has-mr-2"></i>
          Portacall Development
        </a>

        {isMobile ? <HeaderMobile /> : <HeaderWeb /> }

      </div>
    </div>
  );
};

export default Header;


