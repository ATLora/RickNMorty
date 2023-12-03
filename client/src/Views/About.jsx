import Yo from "../Assets/Yo.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <div className="pt-8 w-full min-h-screen bg-blue-900 flex flex-col items-center">
      <div className="flex md:flex-row md:justify-center items-center flex-col">
        <div className="ml-10">
          <img
            src={Yo}
            alt="David Lora"
            className="lg:h-[450px] lg:w-[450px] md:h-[350px] md:w-[350px] h-[400px] w-[400px] rounded-full"
          />
        </div>
        <div className="flex flex-col justify-start md:mt mt-10 md:ml-[50px]  lg:ml-[100px] md:w-[700px] w-[450px] md:h-[400px] md:mr-10">
          <h1 className="text-green-500 text-4xl">What is this place?</h1>
          <p className="text-xl text-gray-300">
            This website propuse is as showcase and prove of concept, it was
            build unsing React for the Front, alonside TailwindCSS for the
            styling, Redux for managing global states and other front end
            libriries. The back was build using Express and integrating the Rick
            and Morty API{" "}
            <a
              href="https://rickandmortyapi.com/"
              className="text-blue-500 underline"
              target="blank_"
            >
              {"https://rickandmortyapi.com/ "}
            </a>
            alongside PostgressSQL for the data base.
          </p>
          <h1 className="text-green-500 text-4xl mt-10">
            About The Developert
          </h1>
          <p className="text-xl text-gray-300">
            Hi! My name is David, I’m a Full-Stack developer passionate about
            developing and, sometimes, designing awesome websites and apps using
            the hottest technologies. I have loved programming since I was 11
            years old when I got my first Pearson n’ Pearson book on C++ (which
            was way too advanced for me then), but sparked my endless curiosity
            for tech and passion for building software. I am eager to work for
            the best software companies, if you're here, I'll invite you to
            check my portfolio and LinkedIn profile below.
          </p>
        </div>
      </div>
      <div className="xl:mt-[180px] lg:mt-[220px] md:mt-[260px] mt-10 md:mb-0 mb-10 flex flex-row w-[400px] justify-around">
        <a
          href="https://www.linkedin.com/in/david-lora-b1942622b/"
          target="_blank"
          className="flex flex-row text-xl bg-cyan-600 border-2 border-cyan-700 p-2 rounded-md hover:scale-110 hover:brightness-125"
        >
          Linkedin <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/ATLora"
          target="_blank"
          className="flex flex-row text-xl bg-gray-600 border-2 border-gray-700 p-2 rounded-md hover:scale-110 hover:brightness-125"
        >
          Github <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
}
