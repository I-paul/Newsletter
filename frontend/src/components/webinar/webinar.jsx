import { motion } from "framer-motion";
import WebinarData from "../../data/webinarData.json";

const Webinar = () => {

    return(
        <div id="Webinar" className="flex flex-col text-[var(--brand-primary)] justify-center items-center my-8 mx-4 family-[var(--font-main)]">
                <motion.h2
                    className="text-3xl font-bold mb-4 family-[var(--font-main)]"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 , color: "var(--btn-accent-hover)" }}
                >
                    {WebinarData.title}
                </motion.h2>
            <a href={WebinarData.link} className="decoration-none " target="_blank" rel="noopener noreferrer" >
                <img src={WebinarData.banner} alt="webinarPoster" className="overflow-hidden " loading="lazy"/>
            </a>
        </div>
    )
}

export default Webinar;