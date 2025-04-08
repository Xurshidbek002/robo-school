import { motion } from "framer-motion";

const Modal = (props) => {
  return (
    <div className="fixed z-10000000000 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.62)] flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 20 }}
        transition={{ duration: 0, ease: "easeOut" }}
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default Modal;
