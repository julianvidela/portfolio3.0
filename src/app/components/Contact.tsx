import SocialButton from "../components/navbar/layout/SocialButton";
import Github from "../../../public/github.svg";
import Instagram from "../../../public/instagram.svg";
import Mail from "../../../public/mail.svg";
import Linkedin from "../../../public/linkedin.svg";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <section
        className="grid grid-cols-1 lg:col-span-4 gap-4 mb-4  rounded-3xl shadow-box colorBg"
        id="Contact"
      >
        <div className=" h-[25rem] md:h-[22rem] lg:h-[17rem]  p-8  flex flex-col ">
          <div className=" my-5 grid gap-3">
            <h1 className="text-2xl font-bold title ">
              Can I help you with something?
            </h1>

            <p className=" text-[18px] text-white subtitle flex items-center ">
              If you want more information, download my CV 🚀
            </p>
          </div>

          <div
            className="flex flex-col lg:flex-row items-center gap-4 justify-self-end mt-7
          flex-1"
          >
            <a
              href="https://1drv.ms/b/s!Av0NuIn2vREOlGHPhCwlXrkk2ZdP?e=jhjpbM"
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
      </section>
    </>
  );
};

export default Contact;
