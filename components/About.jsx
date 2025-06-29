
import mhk from "../img/mhk.jpg"

const About = () => {
  return (
    <div>
      <section id="about" className=" text-black ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl py-8 text-blue-700  font-bold  text-center">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 animate-on-scroll">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 mx-auto">
                  <img
                    src={mhk}
                    alt="Profile"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4  rounded-full p-3 border-4 border-blue-500">
                  <code className="text-blue-500 text-xl">&lt;/&gt;</code>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 text-black animate-on-scroll">
              <h3 className="text-3xl font-bold mb-4">
                I'm a Full Stack Developer with a passion for creating intuitive
                user experiences
              </h3>
              <p className="  text-lg">
                With over 1 years of experience in web development, I specialize
                in building modern, responsive web applications using React,
                Node.js, and other cutting-edge technologies. I'm passionate
                about clean code, performance optimization, and creating
                intuitive user experiences.
              </p>
              <p className=" mb-6 text-lg">
                My journey in tech began when I built my first website at 15.
                Since then, I've worked with startups and established companies
                to bring their digital visions to life. I enjoy solving complex
                problems and continuously learning new technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-400 px-4 py-2 rounded-md flex items-center">
                  <span className="font-bold text-blue-800 mr-2 text-lg ">
                    5+
                  </span>{" "}
                  Years Experience
                </div>
                <div className="bg-gray-400 px-4 py-2 rounded-md flex items-center">
                  <span className="font-bold  text-blue-800 mr-2 text-lg">
                    50+
                  </span>{" "}
                  Projects Completed
                </div>
                <div className="bg-gray-400 px-4 py-2 rounded-md flex items-center">
                  <span className="font-bold  text-blue-800 mr-2 text-lg">
                    20+
                  </span>{" "}
                  Happy Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
