import React from "react";
import api from "../assets/api.jpg";
import weather from "../assets/weather.jpg";
import todo from "../assets/todo.jpg";
import graphs from "../assets/graph.jpg";

const Projects = () => {
    const projects = [
        {
          img: api,
          title: "User Management Api",
          desc: "Developed a robust User Management API that handles user registration, authentication, and authorization.",
          live: "#",
          code: "https://github.com/SunilRajoli/user-management-api",
        },
        
        {
          img: todo,
          title: "To-Do Application",
          desc: "Built a To-Do Application to manage daily tasks, including adding, updating, and deleting tasks. Implemented using the MERN stack (MongoDB, Express, React, Node.js)",
          live: "#",
          code: "https://github.com/SunilRajoli/To-Do-List-Application",
        },
        {
          img: graphs,
          title: "Graphs and Charts Dashboards",
          desc: "Created interactive dashboards featuring graphs and charts to visualize data effectively. Used libraries like Chart.js and D3.js to represent data insights, trends, and patterns.",
          live: "https://wi-jungle-dashboard-five.vercel.app/",
          code: "https://github.com/SunilRajoli/WiJungle-Dashboard",
        },
        {
            img: weather,
            title: "Weather Dashboard",
            desc: "Created a dynamic Weather Dashboard application that fetches and displays real-time weather data for various locations using a weather API.",
            live: "https://weather-dashboard-two-topaz.vercel.app/",
            code: "https://github.com/SunilRajoli/Weather-Dashboard",
          },
      ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>

        
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;