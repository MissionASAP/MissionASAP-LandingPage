import { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from '../Section4.module.css';
const Section4 = () => {
  	
  	return (
    		<div className={styles.section}>
      			<div className={styles.container1}>
        				<div className={styles.title}>
          					<div className={styles.forTeams}>— For Teams</div>
          					<b className={styles.getYourDevsContainer}>
            						<span>{`Get your devs `}</span>
            						<span className={styles.upToSpeed}>up to speed</span>
            						<span> so that they start contributing to your team’s repo in Minutes.</span>
          					</b>
        				</div>
        				<div className={styles.ul}>
          					<div className={styles.li}>
            						<div className={styles.li1}>
              							<div className={styles.instanceParent}>
                								<div className={styles.title}>
                  									<Image className={styles.cocolinetickIcon} alt="" src="/Tick.svg" />
                								</div>
                								<div className={styles.lowEntryPricesOnDefiTokenWrapper}>
                  									<div className={styles.lowEntryPrices6}>Automate local code set up on the click of a button on your README.</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.li1}>
              							<div className={styles.instanceParent}>
                								<div className={styles.title}>
                  									<Image className={styles.cocolinetickIcon} alt="" src="/Tick.svg" />
                								</div>
                								<div className={styles.lowEntryPricesOnDefiTokenWrapper}>
                  									<div className={styles.lowEntryPrices6}>Edit and push changes to your READMEs on the click of a button without PR.</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.li}>
            						<div className={styles.li1}>
              							<div className={styles.instanceParent}>
                								<div className={styles.title}>
                  									<Image className={styles.cocolinetickIcon} alt="" src="/Tick.svg" />
                								</div>
                								<div className={styles.lowEntryPricesOnDefiTokenWrapper}>
                  									<div className={styles.lowEntryPrices6}>Synchronise the format of README across all your repos..</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.li1}>
              							<div className={styles.instanceParent}>
                								<div className={styles.title}>
                  									<Image className={styles.cocolinetickIcon} alt="" src="/Tick.svg" />
                								</div>
                								<div className={styles.lowEntryPricesOnDefiTokenWrapper}>
                  									<div className={styles.lowEntryPrices6}>Update your READMEs automatically on every code push.</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.li}>
            						<div className={styles.li1}>
              							<div className={styles.instanceParent}>
                								<div className={styles.title}>
                  									<Image className={styles.cocolinetickIcon} alt="" src="/Tick.svg" />
                								</div>
                								<div className={styles.lowEntryPricesOnDefiTokenWrapper}>
                  									<div className={styles.lowEntryPrices6}>Get Intractive README that guides new devs through the testing process of your code.</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.li1}>
              							<div className={styles.instanceParent}>
                								<div className={styles.title}>
                  									<Image className={styles.cocolinetickIcon} alt="" src="/Tick.svg" />
                								</div>
                								<div className={styles.lowEntryPricesOnDefiTokenWrapper}>
                  									<div className={styles.lowEntryPrices6}>Pick and choose what you want in your README.</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.buttons}>
          					<div className={styles.primaryButton}>
            						<div className={styles.placeholder}>Get Started </div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default Section4;
