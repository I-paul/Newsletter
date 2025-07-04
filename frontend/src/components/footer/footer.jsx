import { motion } from "framer-motion";
import { Copyright } from "lucide-react";

const Footer = () => {

    const content = {
        desc:"The newsletter contains curated content on market, competitive, technological, products/services, customer, regulatory and strategic trends drawn from multiple media sources by our analyst team. We hope you find it useful. ",
        cancel: "However, should you no longer wish to receive the newsletter, then please send a message to: sathyanarayanak@frost.com.",
        Copyright: "© Frost & Sullivan, 7550 IH 10 West, Ste. 400, San Antonio, TX 78229 | Toll Free: 1.877.GoFrost | Website: www.frost.com"
    };
    return (
        <footer className="footer font-[var(--font-main)]">
        <motion.div
            className="w-full max-w-6xl mx-auto px-4 py-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <p className="text-md text-white mb-4 cursor-default">
                {content.desc}
                {content.cancel}
            </p>
            <div className="flex hover:text-[var(--footer-link-hover)] hover:translate-y-[-2px]  hover:decoration- hover:underline hover:underline-offset-6 text-[var(--footer-text)] duration-75  ease-in items-center justify-center space-x-2 mb-4 cursor-default">
                {content.Copyright}
            </div>
        </motion.div>
        </footer>
    );
}

export default Footer;