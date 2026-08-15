
function About(){
  return(
    <div className="text-white mt-10 ml-6 w-[55%] relative">
      <div className="flex flex-col z-10 absolute">
        <h2 className="text-2xl text-amber-500 font-serif tracking-wider font-medium">About me</h2>
        <br />
        <div className="skills">
          <p>
          <span>I am, <span className="text-white font-extrabold tracking-wider text-xl">Vipin Soni</span><br></br>
            An aspiring 
            <span className="mr-1">
              <span className="text-white font-extrabold tracking-wider text-xl ml-2 transition-all duration-500 hover:text-amber-600">Java Full Stack Developer </span> & Programmer,
            </span>
          </span>
            with strong foundations in modern web technologies. I am highly adaptable to new skills and tools, with a constant drive to learn and grow in the ever-evolving tech landscape. With a balance of technical expertise and problem-solving ability, I strive to build efficient and user-friendly solutions while continuously expanding my knowledge. My enthusiasm for growth and innovation fuels my journey as a developer committed to lifelong learning.
            </p>
            <br />
            <div className="mt-0">
              <h3 className="text-amber-600 font-medium tracking-wider text-lg">Education</h3>
              <br />
              <span className="">
                <h3 className="text-gray-500 font-bold">Schooling :</h3>
                <p>10th & 12th from UP board</p>
              </span>
              <span className="">
                <h3 className="text-gray-500 font-bold">Graduation :</h3>
                <p>
                  <span className=" text-amber-600 font-bold">BTech</span> CSE from Maharana Pratap
                  Engineering College
                </p>
                <p>Kanpur</p> 
              </span><br />
              <p className="conclusion">
                My future goals as a developer are centered around becoming an experienced software professional who not only delivers impactful projects but also contributes as a mentor and team leader. I aspire to play an important role in driving innovation and growth within a company.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;