import { FunctionComponent } from 'react';
import styles from '../Header.module.css';
const Header = () => {

  	return (
    		<div className={styles.header}>
      			<div className={styles.container1}>
        				<div className={styles.logo}>
          					<b className={styles.missionAsap}>Mission ASAP</b>
        				</div>
        				<div className={styles.colright}>
          					<div className={styles.menu}>
            						<div className={styles.menuItem}>
              							<div className={styles.placeholder}>For Individuals</div>
            						</div>
            						<div className={styles.menuItem}>
              							<div className={styles.placeholder}>For Teams</div>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default Header;
