import nodeJs from '../assets/nodejs.svg'
import expressJs from '../assets/express.webp'
import reactJs from '../assets/react.svg'
import mySql from '../assets/mysql.svg'
import javaScript from '../assets/javascript.svg'
import cPlusPlus from '../assets/c++.svg'
import git from '../assets/git.svg'
import docker from '../assets/docker.svg'
import java from '../assets/java.png'
import api from '../assets/API.png'
import html from '../assets/html.svg'
import bootStrap from '../assets/bootstrap.svg'
import cp from '../assets/cp.png'
import mongoDB from '../assets/mongodb.svg'
import spring from '../assets/spring2.png'
import linux from '../assets/Linux.png'
import junit from '../assets/JUnit.png'
function Skills(){
  return (
    <div className="mt-2 ml-5 w-[40%] h-full relative">
      <div className="mt-5 flex flex-col content-center items-center text-center ">
          <h2 className="text-white text-center text-3xl font-serif tracking-wider">Tech Stack</h2>
          <div className="mt-4 mr-4 mb-4">
            <div className="[&_img]:w-25 [&_img]:h-25 grid grid-cols-4 gap-6 bg-white pt-6 p-4 border-4 border-amber-600 rounded-3xl [&_img]:transition-all [&_img]:duration-500 [&_img]:hover:scale-110 ">
              <span><img src= {java} /></span>
              <span><img src= {cPlusPlus} /></span>
              <span><img src={spring}/></span>
              <span><img src={junit}/></span>
              <span><img src={nodeJs}/></span>
              <span><img src= {mongoDB} className='scale-150 hover:scale-160!'/></span>
              <span><img src= {linux} /></span>
              <span><img src= {reactJs} /></span>
              <span><img src= {mySql} /></span>
              <span><img src= {expressJs} /></span>
              <span><img src= {javaScript} /></span>
              <span><img src= {api} /></span>
              <span><img src= {git} /></span>
              <span><img src= {docker} /></span>
              <span><img src= {html} /></span>
              <span><img src= {cp} className='scale-130 hover:scale-140!' /></span>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Skills;