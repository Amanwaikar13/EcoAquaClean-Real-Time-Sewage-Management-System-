import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMapLocationDot, faCalendarDays, faNewspaper, faGear, faBell } from '@fortawesome/free-solid-svg-icons';
import styles from '../styling/sidebar-style.module.css';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
    <div className='contact-background-image'></div>
    <div
      className={`${styles.sidebarModule} ${isHovered ? styles.sidebarModuleOpen : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className={styles.ulModule}>
        <li className={styles.liModule}>
        <Link to="/" className={styles.link}>
          <div className={styles.iconContainerModule}>
            <FontAwesomeIcon icon={faHome} />
            {isHovered && <span>Dashboard</span>}
          </div>
         </Link> 
        </li>
        <li className={styles.liModule}>
        <Link to="/maps" className={styles.link}>
          <div className={styles.iconContainerModule}>
          <FontAwesomeIcon icon={faMapLocationDot} />
            {isHovered && <span>Maps</span>}
          </div>
        </Link>  
        </li>
        <li className={styles.liModule}>
        <Link to="/schedule" className={styles.link}>
          <div className={styles.iconContainerModule}>
          <FontAwesomeIcon icon={faCalendarDays} />
            {isHovered && <span>Schedule</span>}
          </div>
        </Link>  
        </li>
        <li className={styles.liModule}>
        <Link to="/alerts" className={styles.link}>
          <div className={styles.iconContainerModule}>
            <FontAwesomeIcon icon={faBell} />
            {isHovered && <span>Alerts</span>}
          </div>
        </Link> 
        </li>
        <li className={styles.liModule}>
        <Link to="/reports" className={styles.link}>
          <div className={styles.iconContainerModule}>
          <FontAwesomeIcon icon={faNewspaper} />
            {isHovered && <span>Reports</span>}
          </div>
        </Link> 
        </li>
        <li className={styles.liModule}>
        <Link to="/settings" className={styles.link}>
          <div className={styles.iconContainerModule}>
          <FontAwesomeIcon icon={faGear} />
            {isHovered && <span>Settings</span>}
          </div>
        </Link>  
        </li>
      </ul>
    </div>
    </>  
  );
};


export default Sidebar;
