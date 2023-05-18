import Image from "next/image";
import Profile from "../../assets/svg/juan.svg";
export default function About() {
  return (
    <main>
      <div className="bg-gradient-to-br from-[#0D0D0D] to-[#131315] shadow-md rounded-[40px] border border-[0.5px] border-[#252427]">
        <div className="container flex m-0 w-screen  justify-items-center flex-row ">
          <div m-0>
            <Image
              src={Profile}
              alt="profile picture"
              width="500"
              height="500"
            ></Image>
          </div>
          <div className="text-[#fff] flex flex-col items-start justify-center ">
            <h4 className="text-xs	">Hey, my name is</h4>
            <p className="text-3xl my-3">Juan Amaral</p>
            <a>Front-End Developer. Unity, Java</a>
            <a>C#, React/Next expert and</a>
            <a>technology enthusiast.</a>
          </div>
        </div>

        <div className="flex text-xs text-[#fff]  space-x-4 p-4 ">
          <div>@juan.amaral_</div>
          <div>
            <a>Contact</a>
            <a>Home</a>
            <a>Portfolio</a>
          </div>
          <div>
            <a>f</a>
            <a>l</a>
            <a>g</a>
            <a>t</a>
          </div>
        </div>
      </div>

      <a className="text-xs text-[#fff] text-center	flex justify-center">
        Copyright © Juan Amaral. ‍All Rights Reserved.
      </a>
    </main>
  );
}
