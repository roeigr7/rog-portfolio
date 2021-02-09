import { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { MyLink } from '../../assets/reausableComponents/MyTags';

const NavBar = () => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', changeBg);
  });

  const changeBg = () => {
    if (window.scrollY > 300) {
      setNavBg(true);
    } else setNavBg(false);
  };

  return (
    <div
      className={
        navBg ? 'navbar-with-bg mx-auto p-0 m-0' : 'py-2 navbar-wrapper'
      }
    >
      <Navbar expand='sm' className='main-nav p-0 m-0 mx-0'>
        <MyLink
          className='ml-2 navbar-brand font-weight-bold text-white'
          href='/'
        >
          Roei
        </MyLink>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className='mr-auto'>
            <Link
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='nav-link'
            >
              Home
            </Link>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='nav-link'
            >
              About Me
            </Link>
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='nav-link'
            >
              My Projects
            </Link>
            <Link
              activeClass='active'
              to='stack'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='nav-link'
            >
              My Stack
            </Link>
            <Link
              activeClass='active'
              to='rate'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='nav-link'
            >
              Rate My Site
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
