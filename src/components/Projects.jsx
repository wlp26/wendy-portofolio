import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Modal Component
const Modal = ({ isOpen, onClose, images }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={onClose}
    >
      <div
        className="relative p-4 bg-white rounded-lg w-3/4 max-w-4xl flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 bg-red-800 text-white rounded-full pr-2 pl-2 z-40"
          onClick={onClose}
        >
          ×
        </button>

        <div className="flex justify-center items-center w-full h-full">
          <Swiper
            spaceBetween={10}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="max-w-full max-h-screen"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="max-w-full max-h-screen object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [modalImages, setModalImages] = useState(null);

  const openModal = (images) => {
    setModalImages(images);
  };

  const closeModal = () => {
    setModalImages(null);
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-12">
        {PROJECTS.map((project, index) => (
          <div
            className={`flex flex-col items-center ${
              index % 2 === 0 ? "lg:items-start" : "lg:items-end"
            }`}
            key={index}
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-xl"
            >
              <h2 className="mb-2 text-center font-bold lg:text-center text-xl pb-2">
                {project.title}
              </h2>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full flex justify-center lg:justify-center"
              >
                <div className="w-full">
                  <Swiper
                    spaceBetween={10}
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    className="w-full h-60 rounded-xl cursor-pointer"
                    onClick={() => openModal(project.image)}
                  >
                    {project.image.map((img, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <img
                          src={img}
                          alt={`Slide ${imgIndex + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </motion.div>
              <p className="mb-4 text-center text-neutral-400 lg:text-center">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-center">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-400"
                    key={techIndex}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Modal for image preview */}
      <Modal
        isOpen={modalImages !== null}
        onClose={closeModal}
        images={modalImages}
      />
    </div>
  );
};

export default Projects;
