import { motion } from "framer-motion";

interface FooterProps {
  data: any;
}

const Footer = ({ data }: FooterProps) => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-gray-100 dark:bg-black py-8 text-center border-t border-mint/10"
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-8 text-sm text-gray-600 dark:text-mint/80">
        <span>© {data?.footer?.copyright} RoboWeb. {data?.footer?.right}</span>
        <span className="mt-3 md:mt-0">{data?.footer?.credit}</span>
      </div>
    </motion.footer>
  );
};

export default Footer; 