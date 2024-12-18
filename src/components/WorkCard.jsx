import { FaGithub, FaLink, FaEye } from "react-icons/fa";
import { Technology } from "./Technology";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./Button";

export const WorkCard = ({ name, description, url, link, technologies }) => {
  const [hoverStates, setHoverStates] = useState({
    link: false,
    github: false,
  });

  return (
    <motion.div
      className="relative group overflow-hidden max-w-sm h-96"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} // Controla cuándo la animación comienza
      transition={{ duration: 0.5 }} // Transición general al entrar en viewport
    >
      {/* Imagen */}
      <img
        src={url}
        alt=""
        className="w-full h-auto group-hover:scale-110 transition-all duration-700"
      />

      {/* Icono "ver más" en la esquina inferior derecha con animación limitada */}
      <motion.div
        className="absolute bottom-2 right-2 opacity-100 group-hover:opacity-0 transition-opacity duration-700"
        initial={{ scale: 1 }}
        whileInView={{
          scale: [1, 1.2, 1], // Ciclo de animación al estar visible
        }}
        viewport={{ once: true }} // Solo animar la primera vez que entra en viewport
        transition={{ duration: 1.5, repeat: 1 }} // Repetir 2 veces
      >
        <FaEye className="text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full" />
      </motion.div>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-85 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* Contenido emergente */}
      <div className="absolute inset-0 flex flex-col items-center justify-around p-2 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        {/* Título y Descripción */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">{name}</h3>
          {/* Tecnologías */}
          <div className="flex gap-2 mb-10">
            {technologies.map((technology, idx) => (
              <Technology
                key={idx}
                name={technology.name}
                url={technology.url}
              />
            ))}
          </div>
          <p className="mb-6 text-terciary text-start px-8">{description}</p>
        </div>

        {/* Links */}
        <div className="flex w-full justify-between px-8">
        <Button text={'Link'}/>
        <Button text={'Code'}/>
          {/* <a
            href={link}
            onMouseEnter={() => setHoverStates({ ...hoverStates, link: true })}
            onMouseLeave={() => setHoverStates({ ...hoverStates, link: false })}
            target="_blank"
          >
            <button
              className={`flex items-center gap-2 rounded-xl px-4 py-2 outline outline-1 outline-accent ${
                hoverStates.link ? "bg-white text-black" : "bg-black text-white"
              } transition-all duration-500`}
            >
              <FaLink /> Link
            </button>
          </a>
          <a
            href={link}
            onMouseEnter={() =>
              setHoverStates({ ...hoverStates, github: true })
            }
            onMouseLeave={() =>
              setHoverStates({ ...hoverStates, github: false })
            }
            target="_blank"
          >
            <button
              className={`flex items-center gap-2 rounded-xl px-4 py-2 outline outline-1 outline-accent ${
                hoverStates.github
                  ? "bg-white text-black"
                  : "bg-black text-white"
              } transition-all duration-500`}
            >
              <FaGithub /> Code
            </button>
          </a> */}
        </div>
      </div>
    </motion.div>
  );
};
