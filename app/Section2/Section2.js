import { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from '../Section2.module.css';

const Section2 = () => {
  	
  	return (
    		<div className={styles.section}>
      			<div className={styles.container1}>
        				<div className={styles.title}>
          					<b className={styles.whyTraditionalReadmes}>{`Why traditional READMEs don’t work? `}</b>
        				</div>
        				<div className={styles.ul}>
          					<div className={styles.li}>
            						<div className={styles.row}>
              							<div className={styles.col}>
                								<b className={styles.b}>01</b>
              							</div>
              							<div className={styles.col1}>
                								<div className={styles.withoutABig5}>They are too long. This leads to TL;DR</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.li}>
            						<div className={styles.row}>
              							<div className={styles.col}>
                								<b className={styles.b}>02</b>
              							</div>
              							<div className={styles.col1}>
                								<div className={styles.withoutABig5}>Fragmented local dev setup frustrates devs, ruins weekends.</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.li}>
            						<div className={styles.row}>
              							<div className={styles.col}>
                								<b className={styles.b}>03</b>
              							</div>
              							<div className={styles.col1}>
                								<div className={styles.withoutABig5}>Writing complete READMEs is a lengthy process.</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.li}>
            						<div className={styles.row}>
              							<div className={styles.col}>
                								<b className={styles.b}>04</b>
              							</div>
              							<div className={styles.col1}>
                								<div className={styles.withoutABig5}>They are almost all of the time outdated.</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.li}>
            						<div className={styles.row}>
              							<div className={styles.col}>
                								<b className={styles.b}>05</b>
              							</div>
              							<div className={styles.col1}>
                								<div className={styles.withoutABig5}>Result: READMEs that contains ROBIN HOOD stories instead of project info.</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.section1}>
        				<div className={styles.containerFluid1}>
          			
          					<div className={styles.img}>
            						<div className={styles.image31Wrapper}>
              							<Image className={styles.image31Icon} alt="" src="/screenshot.png" />
            						</div>
          					</div>
          					<div className={styles.col10}>
            						<div className={styles.thatsWhyWeBuiltMissionAsWrapper}>
              							<b className={styles.thatsWhyWeContainer}>
                								<p className={styles.thatsWhyWeBuiltMissionAs}>
                  									<span className={styles.thatsWhyWe1}>{`That’s why we built Mission ASAP. So that you experience `}</span>
                  									<span className={styles.interactiveConsistentTime}>interactive, consistent, time saving, and blissfull</span>
                  									<span> READMEs like never before.</span>
                								</p>
                								<p className={styles.thatsWhyWeBuiltMissionAs}>&nbsp;</p>
                								<p className={styles.thatsWhyWeBuiltMissionAs}>We promise you that you will not want to return back.</p>
              							</b>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default Section2;
