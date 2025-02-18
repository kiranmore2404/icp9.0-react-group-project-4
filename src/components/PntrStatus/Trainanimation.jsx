import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import trainGif from "./../../assets/images/prntrakerimg/Trainimg.png";

const TrainAnimation = ({ speed = 6 }) => {
  const [trainX, setTrainX] = useState(0);
  const trainRef = useRef(null);

  useEffect(() => {
    const updatePosition = () => {
      if (trainRef.current) {
        const pageWidth = window.innerWidth;
        setTrainX(pageWidth);
      }
    };

    window.addEventListener("resize", updatePosition);
    updatePosition();

    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  console.log("TrainAnimation component rendered");

  return (
    <div className="absolute bottom-0 left-0 w-full z-0 overflow-hidden"> 
      <motion.div
        ref={trainRef}
        className="flex justify-center"
        initial={{ x: "-100px" }}
        animate={{ x: trainX }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <img src={trainGif} alt="Moving Train" className="w-32 md:w-40 lg:w-52 " />
      </motion.div>
    </div>
  );
};

export default TrainAnimation;