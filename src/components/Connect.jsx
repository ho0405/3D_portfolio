// Import necessary dependencies and styles
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { connect } from '../constants';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

// Define the ConnectCard component
const ConnectCard = ({ index, connect, name, designation, company, image, socialLink }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <a href={socialLink} target="_blank" rel="noopener noreferrer">
      <div className="clickable-image-container">
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
        />
      </div>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{connect}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              on {company}
            </p>
          </div>
        </div>
      </div>
    </a>
  </motion.div>
);


// Define the Connect component
const Connect = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Connect with me</p>
          <h2 className={styles.sectionHeadText}>Social Media Handles.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {connect.map((connect, index) => (
          <ConnectCard key={connect.name} index={index} {...connect} />
        ))}
      </div>
    </div>
  );
};

// Export the Connect component with SectionWrapper
export default SectionWrapper(Connect, "connect");
