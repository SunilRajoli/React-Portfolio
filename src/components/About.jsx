import React from "react";
import AboutImg from "../assets/profile-image.jpg";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Rajoli Sunil. I am a
            Full Stack Developer. I am a Full Stack Developer specializing in crafting seamless web applications from frontend to backend.
          </p>
          <p className="pb-5">
          On the frontend, I excel in building dynamic user interfaces with React.js, Redux for state management, and utilizing modern CSS frameworks like Tailwind CSS for responsive design.
          </p>

          <p>In backend development, I leverage Node.js and Express.js to create robust server-side applications, coupled with MongoDB and Mongoose for efficient database management and integration.</p>

        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;