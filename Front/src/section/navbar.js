import React from 'react'
import '../App.css' 

import { useSelector, useDispatch } from "react-redux";
import { signout } from "../authentification/redax/signInAction";
 
import { Link ,Redirect} from "react-router-dom";
import jwt_decode from "jwt-decode";

const Nav = () => {
	const auth = useSelector((state) => state.signInStore);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout()) && <Redirect to={`signIn`} />;
  };

  const jareb = () => {
    window.location.reload(logout())  ;
  };
  const userNav = ()=>{
	const result = localStorage.getItem("token");
    const token = jwt_decode(result);
    console.log(token)


	  return(
		  <div>
		<nav className="lv-header-main-nav-wrapper">
			<ul className="lv-header-main-nav lv-list">
				<li > <a className="navbar-brand" href=".">
      <div className="logo-image">
            <img src="image" className="img-fluid"/>
      </div>
</a> </li>
 		<li><Link to='/'><button aria-expanded="false" aria-hidden="false" tabIndex="0" type="button" className="lv-header-main-nav__item"><span>New</span> <svg focusable="false" aria-hidden="true" className="lv-icon -chevron lv-small-only"><use xlinkHref="/_nuxt/icons.svg#sprite-controls-chevron-right"></use></svg></button></Link></li>
				<li><button aria-expanded="false" aria-hidden="false" tabIndex="0" type="button" className="lv-header-main-nav__item"><span>Women</span> <svg focusable="false" aria-hidden="true" className="lv-icon -chevron lv-small-only"><use xlinkHref="/_nuxt/icons.svg#sprite-controls-chevron-right"></use></svg></button></li>
				<li><button aria-expanded="false" aria-hidden="false" tabIndex="0" type="button" className="lv-header-main-nav__item"><span>Men</span> <svg focusable="false" aria-hidden="true" className="lv-icon -chevron lv-small-only"><use xlinkHref="/_nuxt/icons.svg#sprite-controls-chevron-right"></use></svg></button></li>
				<li><button aria-expanded="false" aria-hidden="false" tabIndex="0" type="button" className="lv-header-main-nav__item"><span>Sales</span> <svg focusable="false" aria-hidden="true" className="lv-icon -chevron lv-small-only"><use xlinkHref="/_nuxt/icons.svg#sprite-controls-chevron-right"></use></svg></button></li>
			<li><img id="dec" src={token.photo} /></li>
			<li id='userName'>{token.fullName}</li>

				<Link to='/signIn'> <li id="out"><a href="/eng-e1/magazine" aria-hidden="false" tabIndex="0" className="lv-smart-link lv-header-main-nav__item" onClick={jareb}>Sign out</a></li></Link>
				<br/>
			</ul>
		

 		</nav>
	
		  </div>
	  )
  }

  const navDeBaz = ()=>{
	  return(<div>
<nav className="lv-header-main-nav-wrapper">
			<ul className="lv-header-main-nav lv-list">
 		<li><Link to='/'><button aria-expanded="false" aria-hidden="false" tabIndex="0" type="button" className="lv-header-main-nav__item"><span>New</span> <svg focusable="false" aria-hidden="true" className="lv-icon -chevron lv-small-only"><use xlinkHref="/_nuxt/icons.svg#sprite-controls-chevron-right"></use></svg></button></Link></li>
				<li><button aria-expanded="false" aria-hidden="false" tabIndex="0" type="button" className="lv-header-main-nav__item"><span>Women</span> <svg focusable="false" aria-hidden="true" className="lv-icon -chevron lv-small-only"><use xlinkHref="/_nuxt/icons.svg#sprite-controls-chevron-right"></use></svg></button></li>
				<li><button aria-expanded="false" aria-hidden="false" tabIndex="0" type="button" className="lv-header-main-nav__item"><span>Men</span> <svg focusable="false" aria-hidden="true" className="lv-icon -chevron lv-small-only"><use xlinkHref="/_nuxt/icons.svg#sprite-controls-chevron-right"></use></svg></button></li>
				<li><button aria-expanded="false" aria-hidden="false" tabIndex="0" type="button" className="lv-header-main-nav__item"><span>Art Of Living</span> <svg focusable="false" aria-hidden="true" className="lv-icon -chevron lv-small-only"><use xlinkHref="/_nuxt/icons.svg#sprite-controls-chevron-right"></use></svg></button></li>
				<Link to='/signIn'> <li id="in"><a href="/eng-e1/magazine" aria-hidden="false" tabIndex="0" className="lv-smart-link lv-header-main-nav__item">SignIn</a></li></Link>
				<Link to='/register'>	<li id="reg"><a href="" aria-hidden="false" tabIndex="0" className="lv-smart-link lv-header-main-nav__item">Register</a></li>
				</Link>	</ul>
		</nav>
	  </div>)
  }
    return(
<div><br/>
   <nav className="lv-header-navi">
	<div className="lv-logo">
 
			
		<img className="sr-only" src="https://assets.website-files.com/5ee732bebd9839b494ff27cd/5eefdfc3fb067983940b118a_Font-Louis-Vuitton-Logo.jpg" alt="Docplanner Group" />
 
	
		
	
{auth.authenticate ? userNav() : navDeBaz()}
<br/>
	</div>
  </nav>

</div>

   )
       
    } 
   export default Nav ;