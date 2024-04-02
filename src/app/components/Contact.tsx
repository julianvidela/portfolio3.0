import SocialButton from "../components/navbar/layout/SocialButton";
import Github from "../../../public/github.svg";
import Instagram from "../../../public/instagram.svg";
import Mail from "../../../public/mail.svg";
import Linkedin from "../../../public/linkedin.svg";
import Link from "next/link";
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="grid grid-cols-1 lg:col-span-4 gap-4 mb-4   shadow-box"
        id="Contact"
      >
        <div className=" h-[25rem] md:h-[22rem] lg:h-[17rem]   p-8  flex flex-col bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_75%_100%_at_50%_0%,#000_70%,transparent_100%)] lg:[mask-image:radial-gradient(ellipse_60%_100%_at_25%_0%,#000_70%,transparent_100%)]">
          <div className=" my-5 grid gap-3">
            <h1 className="text-3xl  text-white ">
              Can I help you with something?
            </h1>

            <p className=" text-[16px] text-zinc-400 subtitle flex items-center ">
              If you want more information, download my CV 🚀
            </p>
          </div>

          <div
            className="flex flex-col lg:flex-row items-center gap-4 justify-self-end mt-7
            flex-1"
          >
            <a
              href="https://drive.google.com/file/d/1HbXEJkmK4P_UsbioZDEIWOgXwX0_boIT/view?usp=sharing"
              className="bg-white font-medium text-center text-black py-4 px-12 rounded-full w-[75%] lg:w-auto hover:bg-black hover:text-white "
            >
              Download CV
            </a>

            <div className="flex items-center   gap-4">
              <Link href="https://github.com/julianvidela" target="_blank">
                <SocialButton bgColor="black">
                  <Github className="w-6 h-6" />
                </SocialButton>
              </Link>

              <Link
                href="https://instagram.com/julianvidela_?igshid=MzMyNGUyNmU2YQ=="
                target="_blank"
              >
                <SocialButton bgColor="instagram">
                  <Instagram className="w-5 h-5" />
                </SocialButton>
              </Link>

              <Link
                href="mailto:julianvyd@gmail.com?subject=Offer%20Inquiry&body=Hi,%20how%20can%20I%20help%20you?"
                target="_blank"
              >
                <SocialButton bgColor="twitter">
                  <Mail className="w-6 h-6" />
                </SocialButton>
              </Link>

              <Link
                href="https://www.linkedin.com/in/julian-videla-87857a253/"
                target="_blank"
              >
                <SocialButton bgColor="linkedin">
                  <Linkedin className="w-5 h-5" />
                </SocialButton>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
