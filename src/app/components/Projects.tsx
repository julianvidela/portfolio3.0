"use client";

import Github from "../../../public/githubblanco.svg";
import LinkUrl from "../../../public/link.svg";

interface Props {
  name?: string | undefined;
  description?: string | undefined;
  imgUrl?: string | undefined;
  bgColor?: string | undefined;
  dark?: boolean | undefined;
  urlLink?: string | undefined;
  gitLink?: string | undefined;
}

const Project: React.FC<Props> = ({
  name = "block name",
  description = "this is good",
  imgUrl = "/project-1.png",
  urlLink = "https://www.youtube.com/watch?v=v8zT3O_xsDg&ab_channel=Marendez",
  gitLink = "https://github.com",
}) => {
  return (
    <div
      className="h-[420px] rounded-3xl  flex flex-col card-pro p-4 gap-3 justify-between ">
        <div  className=" w-[500px] h-[220px]  rounded-xl flex justify-between  bg-cover bg-no-repeat "
        style={{ backgroundImage: `url('${imgUrl}')` }} >
          
        </div>
   
        <div className="h-[110px]">
          <h2 className="from-neutral-300 text-lg subtitle text-white ">
            {name}
          </h2>
          <p className="dark:text-zinc-300 text-sm subtitle text-zinc-400">
            {description}
          </p>
        </div>
        <div className="flex gap-2 items-end ">
          <a href={gitLink} target="_blank">
            <div className=" h-9 w-9 rounded-lg flex justify-center items-center cursor-pointer buttom-pro">
              <Github className="w-4 h-4" />
            </div>
          </a>

          <a href={urlLink} target="_blank">
            <div className=" h-9 w-9  flex justify-center items-center cursor-pointer buttom-pro rounded-lg">
              <LinkUrl className=" w-4 h-4" />
            </div>
          </a>
        </div>
      
    </div>
  );
};
export default Project;
