import aboutbg from "../assets/aboutbg.mp4";
// import codingmeme from "../assets/codingmeme.png";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap" ;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-1/2 left-1/2 w-[200%] h-auto max-h-[100%] transform -translate-x-1/2 -translate-y-1/2 object-contain z-0 opacity-90 rounded-xl"
        src={aboutbg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Masked Heading */}
      <div className="absolute top-30 left-40 z-10">
        <h1
          className="masked-text text-[3rem] md:text-[4.5rem] leading-tight"
          style={{
            fontFamily: "'Shadows Into Light', cursive",
          }}
        >
          About Me
        </h1>
      </div>

      {/* About Section with Image */}
      <div className="absolute top-[30%] left-10 right-8 md:left-[25%]  ">
        {/* Text */}
        <div className="max-w-3xl ">
          <p  
            className="text-lg md:text-3xl leading-relaxed text-justify"
            style={{
              fontFamily: "Slabo 27px",
              wordSpacing: "-3px",
            }}
          >
           I'm an aspiring full-stack developer with experience in Python, Django, and React. I enjoy crafting practical tools like user dashboards and AI-integrated applications, always striving for clean UI and optimal performance. I'm currently leveling up my Data Structures and Algorithms (DSA) skills and believe in learning by doing—pushing every project a step further.
          </p>
        </div>

        {/* Meme Image */}
        {/* <img
          src={codingmeme}
          alt="Coding Meme"
          className="w-10 md:w-80 lg:w-80 rounded-md shadow-lg opacity-90 ml-10"
        /> */}
      </div>

      {/* Masked Text Animation */}
      <style>
        {`
          .masked-text {
            font-weight: bold;
            color: transparent;
            background-image: url('https://images.unsplash.com/photo-1732535725600-f805d8b33c9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
            background-size: 200%;
            background-position: 0 50%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: animate-background 6s infinite alternate linear;
          }

          @keyframes animate-background {
            0% {
              background-position: 0 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;

