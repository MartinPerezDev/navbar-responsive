import NavBar from './components/NavBar';
import { motion } from 'framer-motion';
import logo from './assets/logo.png';

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <motion.div
        className="overflow-x-hidden bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('/background.png')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo animation */}
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          className="absolute left-0 top-1/4 transform -translate-x-1/2 -translate-y-1/2 w-full"
        >
          <img src={logo} alt="logo" className="px-2 md:px-10 w-60 md:w-96" />
        </motion.div>
        {/* Title animation */}
        <motion.div
          initial={{ left: '-100%' }}
          animate={{ left: '50%' }}
          transition={{ duration: 0.6 }}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
        >
          <div className="text-white font-anton italic font-bold flex justify-center">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">Be Your</h2>
            <h2 className="pl-3 md:pl-9 text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">Best</h2>
          </div>
        </motion.div>
        {/* Button animation */}
        <motion.div
          initial={{ left: '-100%' }}
          animate={{ left: '50%' }}
          transition={{ duration: 0.7 }}
          className="absolute left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 w-full"
        >
          <div className="flex justify-center">
            <button className="bg-primary px-6 py-3 text-xl uppercase rounded-sm">Join Today</button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default App;
