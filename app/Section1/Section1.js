import { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from '../Section1.module.css';
const Section1 = () => {

  	return (
    		<div className={styles.section}>
      			<div className={styles.container1}>
        				<div className={styles.containerInner}>
          					<div className={styles.frameParent}>
            						<div className={styles.missionAsapParent}>
              							<b className={styles.missionAsap}>Mission ASAP</b>
              							<div className={styles.weBuildReadmes}>We build READMEs that lets developers enjoy their weekend.</div>
            						</div>
            						<div className={styles.primaryButtonWrapper}>
              							<div className={styles.primaryButton}>
                								<div className={styles.placeholder}>Get Started</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default Section1;
