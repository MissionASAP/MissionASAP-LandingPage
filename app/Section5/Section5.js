import { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from '../Section5.module.css';
const Section5 = () => {
  	
  	return (
    		<div className={styles.sectionjoinus}>
      			<div className={styles.container1}>
        				<div className={styles.col}>
          					<div className={styles.title}>
            						<div className={styles.pingUsParent}>
              							<b className={styles.pingUs}>Ping Us?</b>
                								<div className={styles.wellGetBack1}>We'll get back to you within 24 hours</div>
                								</div>
                								</div>
                								<div className={styles.form}>
                  									<div className={styles.row}>
                    										<div className={styles.col1}>
                      											<div className={styles.input4}>
                        												<div className={styles.label}>How is your project called?</div>
                          													<div className={styles.input5} />
                          													</div>
                          													<div className={styles.input4}>
                            														<div className={styles.label}>Please tell us a few words about  this ping</div>
                            														<div className={styles.input5} />
                          													</div>
                          													</div>
                          													<div className={styles.col1}>
                            														<div className={styles.input4}>
                              															<div className={styles.label}>Your Email</div>
                              															<div className={styles.input5} />
                            														</div>
                            														<div className={styles.input4}>
                              															<div className={styles.label}>Github profile</div>
                              															<div className={styles.input5} />
                            														</div>
                          													</div>
                          													</div>
                          													<div className={styles.button}>
                            														<div className={styles.primaryButton}>
                              															<div className={styles.placeholder}>Send</div>
                            														</div>
                          													</div>
                          													</div>
                          													</div>
                          													<div className={styles.col3}>
                            														<div className={styles.row1}>
                              															<Image className={styles.socialIcon4} alt="" src="/Facebook.svg" />
                              															<Image className={styles.socialIcon4} alt="" src="/Github.svg" />
                              															<Image className={styles.socialIcon4} alt="" src="/Twitter.svg" />
                              															<Image className={styles.socialIcon4} alt="" src="/Telegram.svg" />
                            														</div>
                            														<div className={styles.row2}>
                              															<div className={styles.infomissionasapcom}>info@missionasap.com</div>
                              															<div className={styles.infomissionasapcom}>Join us on Slack</div>
                            														</div>
                          													</div>
                          													</div>
                          													</div>);
                        												};
                        												
export default Section5;
                        												