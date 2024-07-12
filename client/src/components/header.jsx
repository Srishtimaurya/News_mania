// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom'
// import countries from "./countries";
// import downArrow from './../assets/downarrow.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios';




// function Header() {
//   const [active, setActive] = useState(false);
//   const [showCountryDropdown, setShowCountryDropdown] = useState(false);
//   const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

//   const [theme, setTheme] = useState("light-theme");
//   let category = ["business", "entertainment", "general", "health", "science", "sports", "technology","politics"]
//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme])
//   function toggleTheme() {
//     if (theme === "light-theme") {
//       setTheme("dark-theme")
//     }
//     else {
//       setTheme("light-theme")
//     }
//   }
//   return (
//     <header className="">
//      <nav class="fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-around">
      
//       <h3 class="relative heading font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50 mb-5 mt-5">News_Aggregator</h3>

//         <ul className={active ? "nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active" : " nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"}>
//           <li><Link className="no-underline font-semibold" to="/" onClick={() => { setActive(!active) }}>All News</Link></li>
//           <li className="dropdown-li"><Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCategoryDropdown(!showCategoryDropdown); setShowCountryDropdown(false) }}>Top-Headlines <FontAwesomeIcon className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} /></Link>

//             <ul className={showCategoryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
//               {category.map((element, index) => {
//                 return (
//                   <li key={index} onClick={() => { setShowCategoryDropdown(!showCategoryDropdown) }}>

//                     <Link to={"/top-headlines/" + element} className="flex gap-3 capitalize" type="btn"
//                       onClick={() => {
//                         setActive(!active)
//                       }}>
//                       {element}
//                     </Link>
//                   </li>
//                 )
//               })}
//             </ul>
//           </li>
//           <li className="dropdown-li"><Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCountryDropdown(!showCountryDropdown); setShowCategoryDropdown(false) }}>Country <FontAwesomeIcon className={showCountryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} /></Link>
//             <ul className={showCountryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
//               {countries.map((element, index) => {
//                 return (
//                   <li key={index} onClick={() => { setShowCountryDropdown(!showCountryDropdown) }}>
//                     <Link to={"/country/" + element?.iso_2_alpha} className="flex gap-3" type="btn"
//                       onClick={() => {
//                         setActive(!active)
//                       }}>
//                       <img
//                         src={element?.png}
//                         srcset={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`}
                   
//                         alt={element?.countryName} />
//                       <span>{element?.countryName}</span>
//                     </Link>
//                   </li>
//                 )
//               })}
//             </ul>
//           </li>

//           <li><Link className="no-underline font-semibold" to="/add_notes" onClick={() => { setActive(!active); }}>Notes</Link></li>
        
      






//           <li><Link className="no-underline font-semibold" to="#" onClick={() => { toggleTheme() }}>
      
//           <input type="checkbox" class="checkbox" id="checkbox"/>
//              <label for="checkbox" class="checkbox-label">
//           <i class="fas fa-moon"></i>
//           <i class="fas fa-sun"></i>
//           <span class="ball"></span>
//           </label>
          

//           </Link></li>
//         </ul>
//         <div className={active ? "ham-burger z-index-100 ham-open" : "ham-burger z-index-100"} onClick={() => { setActive(!active) }}>
//           <span className="lines line-1"></span>
//           <span className="lines line-2"></span>
//           <span className="lines line-3"></span>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;




// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from 'react-router-dom';
// import countries from "./countries";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// function Header() {
//   const [active, setActive] = useState(false);
//   const [showCountryDropdown, setShowCountryDropdown] = useState(false);
//   const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
//   const [theme, setTheme] = useState("light-theme");

//   const location = useLocation();

//   const category = ["business", "entertainment", "general", "health", "science", "sports", "technology", "politics"];

//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme]);

//   function toggleTheme() {
//     if (theme === "light-theme") {
//       setTheme("dark-theme");
//     } else {
//       setTheme("light-theme");
//     }
//   }

//   const isNotesPage = location.pathname === "/add_notes";

//   return (
//     <header>
//       <nav className="fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-around">
//         <h3 className="relative heading font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50 mb-5 mt-5">News_Aggregator</h3>
//         <ul className={active ? "nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active" : "nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"}>
//           <li><Link className="no-underline font-semibold" to="/" onClick={() => { setActive(!active); }}>All News</Link></li>
//           {!isNotesPage && (
//             <>
//               <li className="dropdown-li">
//                 <Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCategoryDropdown(!showCategoryDropdown); setShowCountryDropdown(false); }}>
//                   Top-Headlines <FontAwesomeIcon className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
//                 </Link>
//                 <ul className={showCategoryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
//                   {category.map((element, index) => (
//                     <li key={index} onClick={() => { setShowCategoryDropdown(!showCategoryDropdown); }}>
//                       <Link to={"/top-headlines/" + element} className="flex gap-3 capitalize" type="btn" onClick={() => { setActive(!active); }}>
//                         {element}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//               <li className="dropdown-li">
//                 <Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCountryDropdown(!showCountryDropdown); setShowCategoryDropdown(false); }}>
//                   Country <FontAwesomeIcon className={showCountryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
//                 </Link>
//                 <ul className={showCountryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
//                   {countries.map((element, index) => (
//                     <li key={index} onClick={() => { setShowCountryDropdown(!showCountryDropdown); }}>
//                       <Link to={"/country/" + element?.iso_2_alpha} className="flex gap-3" type="btn" onClick={() => { setActive(!active); }}>
//                         <img src={element?.png} srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`} alt={element?.countryName} />
//                         <span>{element?.countryName}</span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             </>
//           )}
//           <li><Link className="no-underline font-semibold" to="/add_notes" onClick={() => { setActive(!active); }}>Notes</Link></li>
//           {!isNotesPage && (
//             <li><Link className="no-underline font-semibold" to="#" onClick={() => { toggleTheme(); }}>
//               <input type="checkbox" className="checkbox" id="checkbox" />
//               <label htmlFor="checkbox" className="checkbox-label">
//                 <i className="fas fa-moon"></i>
//                 <i className="fas fa-sun"></i>
//                 <span className="ball"></span>
//               </label>
//             </Link></li>
//           )}
//         </ul>
//         <div className={active ? "ham-burger z-index-100 ham-open" : "ham-burger z-index-100"} onClick={() => { setActive(!active); }}>
//           <span className="lines line-1"></span>
//           <span className="lines line-2"></span>
//           <span className="lines line-3"></span>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;




// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from 'react-router-dom';
// import countries from "./countries";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// function Header() {
//   const [active, setActive] = useState(false);
//   const [showCountryDropdown, setShowCountryDropdown] = useState(false);
//   const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
//   const [theme, setTheme] = useState("light-theme");

//   const location = useLocation();

//   const category = ["business", "entertainment", "general", "health", "science", "sports", "technology", "politics"];

//   const isNotesPage = location.pathname === "/add_notes";

//   useEffect(() => {
//     if (!isNotesPage) {
//       document.body.className = theme;
//     } else {
//       document.body.className = "light-theme"; // Default theme for Notes page
//     }
//   }, [theme, isNotesPage]);

//   function toggleTheme() {
//     if (theme === "light-theme") {
//       setTheme("dark-theme");
//     } else {
//       setTheme("light-theme");
//     }
//   }

//   return (
//     <header>
//       <nav className="fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-around">
//         <h3 className="relative heading font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50 mb-5 mt-5">News_Aggregator</h3>
//         <ul className={active ? "nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active" : "nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"}>
//           <li><Link className="no-underline font-semibold" to="/" onClick={() => { setActive(!active); }}>All News</Link></li>
//           {!isNotesPage && (
//             <>
//               <li className="dropdown-li">
//                 <Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCategoryDropdown(!showCategoryDropdown); setShowCountryDropdown(false); }}>
//                   Top-Headlines <FontAwesomeIcon className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
//                 </Link>
//                 <ul className={showCategoryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
//                   {category.map((element, index) => (
//                     <li key={index} onClick={() => { setShowCategoryDropdown(!showCategoryDropdown); }}>
//                       <Link to={"/top-headlines/" + element} className="flex gap-3 capitalize" type="btn" onClick={() => { setActive(!active); }}>
//                         {element}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//               <li className="dropdown-li">
//                 <Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCountryDropdown(!showCountryDropdown); setShowCategoryDropdown(false); }}>
//                   Country <FontAwesomeIcon className={showCountryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
//                 </Link>
//                 <ul className={showCountryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
//                   {countries.map((element, index) => (
//                     <li key={index} onClick={() => { setShowCountryDropdown(!showCountryDropdown); }}>
//                       <Link to={"/country/" + element?.iso_2_alpha} className="flex gap-3" type="btn" onClick={() => { setActive(!active); }}>
//                         <img src={element?.png} srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`} alt={element?.countryName} />
//                         <span>{element?.countryName}</span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             </>
//           )}
//           <li><Link className="no-underline font-semibold" to="/add_notes" onClick={() => { setActive(!active); }}>Notes</Link></li>
//           {!isNotesPage && (
//             <li><Link className="no-underline font-semibold" to="#" onClick={() => { toggleTheme(); }}>
//               <input type="checkbox" className="checkbox" id="checkbox" />
//               <label htmlFor="checkbox" className="checkbox-label">
//                 <i className="fas fa-moon"></i>
//                 <i className="fas fa-sun"></i>
//                 <span className="ball"></span>
//               </label>
//             </Link></li>
//           )}
//         </ul>
//         <div className={active ? "ham-burger z-index-100 ham-open" : "ham-burger z-index-100"} onClick={() => { setActive(!active); }}>
//           <span className="lines line-1"></span>
//           <span className="lines line-2"></span>
//           <span className="lines line-3"></span>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;



// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from 'react-router-dom';
// import countries from "./countries";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// function Header() {
//   const [active, setActive] = useState(false);
//   const [showCountryDropdown, setShowCountryDropdown] = useState(false);
//   const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
//   const [theme, setTheme] = useState("light-theme");

//   const location = useLocation();

//   const category = ["business", "entertainment", "general", "health", "science", "sports", "technology", "politics"];

//   const isNotesPage = location.pathname.startsWith("/add_notes");

//   useEffect(() => {
//     if (!isNotesPage) {
//       document.body.classList.add(theme);
//     } else {
//       document.body.classList.remove("light-theme", "dark-theme");
//     }
//   }, [theme, isNotesPage]);

//   function toggleTheme() {
//     if (theme === "light-theme") {
//       setTheme("dark-theme");
//     } else {
//       setTheme("light-theme");
//     }
//   }

//   return (
//     <header>
//       <nav className="fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-around">
//         <h3 className="relative heading font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50 mb-5 mt-5">News_Aggregator</h3>
//         <ul className={active ? "nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active" : "nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"}>
//           <li><Link className="no-underline font-semibold" to="/" onClick={() => { setActive(!active); }}>All News</Link></li>
//           {!isNotesPage && (
//             <>
//               <li className="dropdown-li">
//                 <Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCategoryDropdown(!showCategoryDropdown); setShowCountryDropdown(false); }}>
//                   Top-Headlines <FontAwesomeIcon className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
//                 </Link>
//                 <ul className={showCategoryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
//                   {category.map((element, index) => (
//                     <li key={index} onClick={() => { setShowCategoryDropdown(!showCategoryDropdown); }}>
//                       <Link to={"/top-headlines/" + element} className="flex gap-3 capitalize" type="btn" onClick={() => { setActive(!active); }}>
//                         {element}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//               <li className="dropdown-li">
//                 <Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCountryDropdown(!showCountryDropdown); setShowCategoryDropdown(false); }}>
//                   Country <FontAwesomeIcon className={showCountryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
//                 </Link>
//                 <ul className={showCountryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
//                   {countries.map((element, index) => (
//                     <li key={index} onClick={() => { setShowCountryDropdown(!showCountryDropdown); }}>
//                       <Link to={"/country/" + element?.iso_2_alpha} className="flex gap-3" type="btn" onClick={() => { setActive(!active); }}>
//                         <img src={element?.png} srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`} alt={element?.countryName} />
//                         <span>{element?.countryName}</span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             </>
//           )}
//           <li><Link className="no-underline font-semibold" to="/add_notes" onClick={() => { setActive(!active); }}>Notes</Link></li>
//           {!isNotesPage && (
//             <li><Link className="no-underline font-semibold" to="#" onClick={() => { toggleTheme(); }}>
//               <input type="checkbox" className="checkbox" id="checkbox" />
//               <label htmlFor="checkbox" className="checkbox-label">
//                 <i className="fas fa-moon"></i>
//                 <i className="fas fa-sun"></i>
//                 <span className="ball"></span>
//               </label>
//             </Link></li>
//           )}
//         </ul>
//         <div className={active ? "ham-burger z-index-100 ham-open" : "ham-burger z-index-100"} onClick={() => { setActive(!active); }}>
//           <span className="lines line-1"></span>
//           <span className="lines line-2"></span>
//           <span className="lines line-3"></span>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;




// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from 'react-router-dom';
// import countries from "./countries";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// function Header() {
//   const [active, setActive] = useState(false);
//   const [showCountryDropdown, setShowCountryDropdown] = useState(false);
//   const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
//   const [theme, setTheme] = useState("light-theme");

//   const location = useLocation();

//   const category = ["business", "entertainment", "general", "health", "science", "sports", "technology", "politics"];

//   const isNotesPage = location.pathname.startsWith("/add_notes") || 
//                       location.pathname.startsWith("/notes/create") || 
//                       location.pathname.startsWith("/notes/delete/") || 
//                       location.pathname.startsWith("/notes/edit/");

//   useEffect(() => {
//     if (!isNotesPage) {
//       document.body.classList.add(theme);
//     } else {
//       document.body.classList.remove("light-theme", "dark-theme");
//     }
//   }, [theme, isNotesPage]);

//   function toggleTheme() {
//     if (theme === "light-theme") {
//       setTheme("dark-theme");
//     } 
//     else {
//       setTheme("light-theme");
//     }
//   }

//   return (
//     <header>
//       <nav className="fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-around">
//         <h3 className="relative heading font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50 mb-5 mt-5">News_Aggregator</h3>
//         <ul className={active ? "nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active" : "nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"}>
//           <li><Link className="no-underline font-semibold" to="/" onClick={() => { setActive(!active); }}>All News</Link></li>
//           {!isNotesPage && (
//             <>
//               <li className="dropdown-li">
//                 <Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCategoryDropdown(!showCategoryDropdown); setShowCountryDropdown(false); }}>
//                   Top-Headlines <FontAwesomeIcon className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
//                 </Link>
//                 <ul className={showCategoryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
//                   {category.map((element, index) => (
//                     <li key={index} onClick={() => { setShowCategoryDropdown(!showCategoryDropdown); }}>
//                       <Link to={"/top-headlines/" + element} className="flex gap-3 capitalize" type="btn" onClick={() => { setActive(!active); }}>
//                         {element}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//               <li className="dropdown-li">
//                 <Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCountryDropdown(!showCountryDropdown); setShowCategoryDropdown(false); }}>
//                   Country <FontAwesomeIcon className={showCountryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
//                 </Link>
//                 <ul className={showCountryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
//                   {countries.map((element, index) => (
//                     <li key={index} onClick={() => { setShowCountryDropdown(!showCountryDropdown); }}>
//                       <Link to={"/country/" + element?.iso_2_alpha} className="flex gap-3" type="btn" onClick={() => { setActive(!active); }}>
//                         <img src={element?.png} srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`} alt={element?.countryName} />
//                         <span>{element?.countryName}</span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             </>
//           )}
//           <li><Link className="no-underline font-semibold" to="/add_notes" onClick={() => { setActive(!active); }}>Notes</Link></li>
//           {!isNotesPage && (
//             <li><Link className="no-underline font-semibold" to="#" onClick={() => { toggleTheme(); }}>
//               <input type="checkbox" className="checkbox" id="checkbox" />
//               <label htmlFor="checkbox" className="checkbox-label">
//                 <i className="fas fa-moon"></i>
//                 <i className="fas fa-sun"></i>
//                 <span className="ball"></span>
//               </label>
//             </Link></li>
//           )}
//         </ul>
//         <div className={active ? "ham-burger z-index-100 ham-open" : "ham-burger z-index-100"} onClick={() => { setActive(!active); }}>
//           <span className="lines line-1"></span>
//           <span className="lines line-2"></span>
//           <span className="lines line-3"></span>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;



// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from 'react-router-dom';
// import countries from "./countries";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import { Context} from "../main";


// function Header() {
//   const [active, setActive] = useState(false);
//   const [showCountryDropdown, setShowCountryDropdown] = useState(false);
//   const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
//   const [theme, setTheme] = useState("light-theme");

//   const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
//   useContext(Context);
//   const location = useLocation();

//   const category = ["business", "entertainment", "general", "health", "science", "sports", "technology", "politics"];

//   const isNotesPage = location.pathname.startsWith("/add_notes") || 
//                       location.pathname.startsWith("/notes/create") || 
//                       location.pathname.startsWith("/notes/delete/") || 
//                       location.pathname.startsWith("/Register") || 
//                       location.pathname.startsWith("/login") || 
//                       location.pathname.startsWith("/notes/edit/");

//    useEffect(() => {
//     if (!isNotesPage) {
//       // document.body.classList.add(theme);
//       document.body.className = theme;
//     } else {
//       document.body.classList.remove("light-theme", "dark-theme");
//     }
//   }, [theme, isNotesPage]);

//   function toggleTheme() {
//     // Toggle between light and dark themes
//     setTheme(prevTheme => (prevTheme === "light-theme" ? "dark-theme" : "light-theme"));
//   }



//   const logoutHandler = async () => {
//     setLoading(true);
//     try {
//       await axios.get(`http://localhost:3000/users/logout`, {
//         withCredentials: true,
//       });

//       toast.success("Logged Out Successfully");
//       setIsAuthenticated(false);
//       setLoading(false);
//     } catch (error) {
//       toast.error(error.response.data.message);
//       setIsAuthenticated(true);
//       setLoading(false);
//     }
//   };





//   return (
//     <header>
//       <nav className="fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-around">
//         <h3 className="relative heading font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50 mb-5 mt-5">News_Aggregator</h3>
//         <ul className={active ? "nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active" : "nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"}>
//           <li><Link className="no-underline font-semibold" to="/" onClick={() => { setActive(false); }}>All News</Link></li>
//           {!isNotesPage && (
//             <>
//               <li className="dropdown-li">
//                 <Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCategoryDropdown(!showCategoryDropdown); setShowCountryDropdown(false); }}>
//                   Top-Headlines <FontAwesomeIcon className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
//                 </Link>
//                 <ul className={showCategoryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
//                   {category.map((element, index) => (
//                     <li key={index} onClick={() => { setShowCategoryDropdown(false); }}>
//                       <Link to={"/top-headlines/" + element} className="flex gap-3 capitalize" onClick={() => { setActive(false); }}>
//                         {element}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//               <li className="dropdown-li">
//                 <Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCountryDropdown(!showCountryDropdown); setShowCategoryDropdown(false); }}>
//                   Country <FontAwesomeIcon className={showCountryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
//                 </Link>
//                 <ul className={showCountryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
//                   {countries.map((element, index) => (
//                     <li key={index} onClick={() => { setShowCountryDropdown(false); }}>
//                       <Link to={"/country/" + element?.iso_2_alpha} className="flex gap-3" onClick={() => { setActive(false); }}>
//                         <img src={element?.png} srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`} alt={element?.countryName} />
//                         <span>{element?.countryName}</span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             </>
//           )}
//           <li><Link className="no-underline font-semibold" to="/add_notes" onClick={() => { setActive(false); }}>Notes</Link></li>
         
//           <li><Link className="no-underline font-semibold" to="/Register" onClick={() => { setActive(false); }}>Register</Link></li>
         
//           {isAuthenticated ? (
//           <button disabled={loading} onClick={logoutHandler} className="btn">
//             Logout
//           </button>
//         ) : (
//           <Link to={"/login"}>Login</Link>
//         )}
          
         
//           {!isNotesPage && (
//             <li><Link className="no-underline font-semibold" to="#" onClick={() => { toggleTheme(); }}>
//               <input type="checkbox" className="checkbox" id="checkbox" />
//               <label htmlFor="checkbox" className="checkbox-label">
//                 <i className="fas fa-moon"></i>
//                 <i className="fas fa-sun"></i>
//                 <span className="ball"></span>
//               </label>
//             </Link></li>
//           )}
//         </ul>
//         <div className={active ? "ham-burger z-index-100 ham-open" : "ham-burger z-index-100"} onClick={() => { setActive(!active); }}>
//           <span className="lines line-1"></span>
//           <span className="lines line-2"></span>
//           <span className="lines line-3"></span>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;




// import React, { useState, useEffect, useContext } from "react"; // Add useContext to the import statement
// import { Link, useLocation } from 'react-router-dom';
// import countries from "./countries";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import { Context } from "../main";
// import { toast } from 'react-hot-toast';

// function Header() {
//   const [active, setActive] = useState(false);
//   const [showCountryDropdown, setShowCountryDropdown] = useState(false);
//   const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
//   const [theme, setTheme] = useState("light-theme");

//   const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context); // Use useContext here
//   const location = useLocation();

//   const category = ["business", "entertainment", "general", "health", "science", "sports", "technology", "politics"];

//   const isNotesPage = location.pathname.startsWith("/add_notes") || 
//                       location.pathname.startsWith("/notes/create") || 
//                       location.pathname.startsWith("/notes/delete/") || 
//                       location.pathname.startsWith("/Register") || 
//                       location.pathname.startsWith("/login") || 
//                       location.pathname.startsWith("/notes/edit/");

//   useEffect(() => {
//     if (!isNotesPage) {
//       // document.body.classList.add(theme);
//       document.body.className = theme;
//     } else {
//       document.body.classList.remove("light-theme", "dark-theme");
//     }
//   }, [theme, isNotesPage]);

//   function toggleTheme() {
//     // Toggle between light and dark themes
//     setTheme(prevTheme => (prevTheme === "light-theme" ? "dark-theme" : "light-theme"));
//   }

//   const logoutHandler = async () => {
//     setLoading(true);
//     try {
//       await axios.get(`http://localhost:3000/users/logout`, {
//         withCredentials: true,
//       });

//       toast.success("Logged Out Successfully");
//       setIsAuthenticated(false);
//       setLoading(false);
//     } catch (error) {
//       toast.error(error.response.data.message);
//       setIsAuthenticated(true);
//       setLoading(false);
//     }
//   };

//   return (
//     <header>
//       <nav className="fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-around">
//         <h3 className="relative heading font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50 mb-5 mt-5">News_Aggregator</h3>
//         <ul className={active ? "nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active" : "nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"}>
//           <li><Link className="no-underline font-semibold" to="/" onClick={() => { setActive(false); }}>All News</Link></li>
//           {!isNotesPage && (
//             <>
//               <li className="dropdown-li">
//                 <Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCategoryDropdown(!showCategoryDropdown); setShowCountryDropdown(false); }}>
//                   Top-Headlines <FontAwesomeIcon className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
//                 </Link>
//                 <ul className={showCategoryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
//                   {category.map((element, index) => (
//                     <li key={index} onClick={() => { setShowCategoryDropdown(false); }}>
//                       <Link to={"/top-headlines/" + element} className="flex gap-3 capitalize" onClick={() => { setActive(false); }}>
//                         {element}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//               <li className="dropdown-li">
//                 <Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCountryDropdown(!showCountryDropdown); setShowCategoryDropdown(false); }}>
//                   Country <FontAwesomeIcon className={showCountryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
//                 </Link>
//                 <ul className={showCountryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
//                   {countries.map((element, index) => (
//                     <li key={index} onClick={() => { setShowCountryDropdown(false); }}>
//                       <Link to={"/country/" + element?.iso_2_alpha} className="flex gap-3" onClick={() => { setActive(false); }}>
//                         <img src={element?.png} srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`} alt={element?.countryName} />
//                         <span>{element?.countryName}</span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             </>
//           )}
//           <li><Link className="no-underline font-semibold" to="/add_notes" onClick={() => { setActive(false); }}>Notes</Link></li>
         
//           <li><Link className="no-underline font-semibold" to="/Register" onClick={() => { setActive(false); }}>Register</Link></li>
         
//           {isAuthenticated ? (
//             <button disabled={loading} onClick={logoutHandler} className="btn">
//               Logout
//             </button>
//           ) : (
//             <Link to={"/login"}>Login</Link>
//           )}
          
//           {!isNotesPage && (
//             <li><Link className="no-underline font-semibold" to="#" onClick={() => { toggleTheme(); }}>
//               <input type="checkbox" className="checkbox" id="checkbox" />
//               <label htmlFor="checkbox" className="checkbox-label">
//                 <i className="fas fa-moon"></i>
//                 <i className="fas fa-sun"></i>
//                 <span className="ball"></span>
//               </label>
//             </Link></li>
//           )}
//         </ul>
//         <div className={active ? "ham-burger z-index-100 ham-open" : "ham-burger z-index-100"} onClick={() => { setActive(!active); }}>
//           <span className="lines line-1"></span>
//           <span className="lines line-2"></span>
//           <span className="lines line-3"></span>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;



import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from 'react-router-dom';
import countries from "./countries";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Context } from "../main";
import { toast } from 'react-hot-toast';

function Header() {
  const [active, setActive] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [theme, setTheme] = useState("light-theme");

  const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context);
  const location = useLocation();

  const category = ["business", "entertainment", "general", "health", "science", "sports", "technology", "politics"];

  const isNotesPage = location.pathname.startsWith("/add_notes") || 
                      location.pathname.startsWith("/notes/create") || 
                      location.pathname.startsWith("/notes/delete/") || 
                      location.pathname.startsWith("/Register") || 
                      location.pathname.startsWith("/login") || 
                      location.pathname.startsWith("/notes/edit/");

  useEffect(() => {
    if (!isNotesPage) {
      document.body.className = theme;
    } else {
      document.body.classList.remove("light-theme", "dark-theme");
    }
  }, [theme, isNotesPage]);

  function toggleTheme() {
    setTheme(prevTheme => (prevTheme === "light-theme" ? "dark-theme" : "light-theme"));
  }

  const logoutHandler = async () => {
    setLoading(true);
    try {
      await axios.get(`http://localhost:3000/users/logout`, {
        withCredentials: true,
      });


      console.log("logged out");
      toast.success("Logged Out Successfully");
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-around">
        <h3 className="relative heading font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50 mb-5 mt-5">News_Aggregator</h3>
        <ul className={active ? "nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active" : "nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"}>
          <li><Link className="no-underline font-semibold" to="/" onClick={() => { setActive(false); }}>All News</Link></li>
          {!isNotesPage && (
            <>
              <li className="dropdown-li">
                <Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCategoryDropdown(!showCategoryDropdown); setShowCountryDropdown(false); }}>
                  Top-Headlines <FontAwesomeIcon className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
                </Link>
                <ul className={showCategoryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
                  {category.map((element, index) => (
                    <li key={index} onClick={() => { setShowCategoryDropdown(false); }}>
                      <Link to={"/top-headlines/" + element} className="flex gap-3 capitalize" onClick={() => { setActive(false); }}>
                        {element}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="dropdown-li">
                <Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCountryDropdown(!showCountryDropdown); setShowCategoryDropdown(false); }}>
                  Country <FontAwesomeIcon className={showCountryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
                </Link>
                <ul className={showCountryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
                  {countries.map((element, index) => (
                    <li key={index} onClick={() => { setShowCountryDropdown(false); }}>
                      <Link to={"/country/" + element?.iso_2_alpha} className="flex gap-3" onClick={() => { setActive(false); }}>
                        <img src={element?.png} srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`} alt={element?.countryName} />
                        <span>{element?.countryName}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </>
          )}
          <li><Link className="no-underline font-semibold" to="/add_notes" onClick={() => { setActive(false); }}>Notes</Link></li>
         
          <li><Link className="no-underline font-semibold" to="/Register" onClick={() => { setActive(false); }}>Register</Link></li>
         
          {isAuthenticated ? (
            <button disabled={loading} onClick={logoutHandler} className="no-underline font-semibold btn">
              Logout
            </button>
          ) : (
            <Link to={"/login"} className="no-underline font-semibold">Login</Link>
          )}
          
         
          {!isNotesPage && (
            <li><Link className="no-underline font-semibold" to="#" onClick={() => { toggleTheme(); }}>
              <input type="checkbox" className="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="checkbox-label">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <span className="ball"></span>
              </label>
            </Link></li>
          )}
        </ul>
        <div className={active ? "ham-burger z-index-100 ham-open" : "ham-burger z-index-100"} onClick={() => { setActive(!active); }}>
          <span className="lines line-1"></span>
          <span className="lines line-2"></span>
          <span className="lines line-3"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;


