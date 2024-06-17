import { motion } from "framer-motion";

const TextGrid = () => {
  return (
    <div className="mb-[115px] -ml-14 flex flex-col items-center justify-start leading-normal tracking-normal gap-4 w-full px-[56px] align-center">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.3, ease: "linear" }}
        className="flex flex-col relative z-20 items-center justify-start gap-4 max-w-full text-center text-lg text-rojo font-sans"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3, ease: "linear" }}
          className="flex flex-row items-center justify-center gap-4 w-full align-center"
        >
          <div className="relative leading-[130.4%] uppercase font-medium">
            Restaurantes & Cafés
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3, ease: "linear" }}
          className="flex flex-row items-center justify-center gap-4 w-full"
        >
          <div className="relative leading-[130.4%] uppercase font-medium">
            Bares
          </div>
          <div className="relative leading-[130.4%] uppercase font-medium">
            Hoteles
          </div>
          <div className="relative leading-[130.4%] uppercase font-medium">
            Oficinas
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3, ease: "linear" }}
          className="flex flex-row items-center justify-center gap-4 w-full"
        >
          <div className="relative leading-[130.4%] uppercase font-medium">
            Comercial & Retail
          </div>
          <div className="relative leading-[130.4%] uppercase font-medium">
            Residencial
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default TextGrid;
