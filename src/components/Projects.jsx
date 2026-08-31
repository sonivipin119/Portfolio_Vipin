import medicalRX2 from '../assets/medical_RX2.webp'
import homieeBook from '../assets/homeeBook.webp'
import passWord from '../assets/password_strength.jpg'
import background3 from '../assets/portfolio_background3.jpg'
function Projects(){
  return (
    <div className="mt-2 pb-6 text-white min-h-screen bg-cover bg-no-repeat bg-center" style={{backgroundImage : `url(${background3})`}}>
      <div className="text-center content-center items-center">
        <h2 className='text-amber-500 text-3xl mt-8 font-bold tracking-wider'>Projects</h2>
      </div>
      <div className="m-8">
        <div className="flex flex-row">
          <div className="object-cover">
            <div className="w-60 h-60 shadow-[15px_15px_10px_0px_rgba(135,206,235,0.3)] rounded-2xl">
              <img src= {medicalRX2}  />
            </div>
          </div>
          <div className="ml-10 w-1/2">
            <h2 className='font-serif text-xl tracking-wider'>RxGuard<span className="text-amber-500"> | Medical Prescription And Varification System</span></h2>
            <p>
              Developing a secure web application using Node.js, Express.js,
              and MongoDB to streamline digital medical prescriptions and
              ensure their authenticity. Implemented user authentication to
              safeguard access for doctors, patients, and pharmacists, and
              <b>&nbsp; integrated blockchain like technology</b> to store and verify
              prescriptions in a tamper-proof manner. This ensured that
              prescriptions could not be altered or forged, providing
              transparency and trust between stakeholders.
              <span className='text-amber-600 ml-1 font-serif text-lg'>Currently Under active development.</span>
            </p>
            <div className="[&_button]:border-2 [&_button]:border-amber-600 [&_button]:bg-amber-600 [&_button]:rounded-md [&_button]:p-1 [&_button]:text-black text-[14px] font-bold tracking-wider">
              <a href="#" target="_blank"><button className="cursor-pointer">🚧 Progress</button></a>
              <a href="https://github.com/sonivipin119/RxGuard" target="_blank"><button className="ml-2 cursor-pointer">View Code</button></a>
            </div>
          </div>
          <div className="text-[#ff9301] text-[100px] ml-17.5 mt-12.5 font-serif duration-400 hover:text-white">01</div>
        </div>
        <div className="flex flex-row-reverse mb-4">
          <div className="object-cover bg-cover">
            <div className="shadow-[-15px_15px_10px_0px_rgba(135,206,235,0.3)] rounded-2xl">
              <img src= {homieeBook} className='w-60 h-60 rounded-2xl' />
            </div>
          </div>
          <div className="mr-10 w-1/2">
            <h2 className='font-serif text-xl tracking-wider'>HomieeBook | <span className='text-amber-500'>Home Rental Platform</span></h2> 
            <p>
              Developed a full-stack home rental and reservation platform using <b>Java, Spring Boot, React.js, MySQL, JPA/Hibernate, and Tailwind CSS</b>, enabling guests to browse, search, favourite, and book rental properties while hosts can list and manage their homes. Implemented secure authentication and role-based authorization using <b>JWT and Google OAuth 2.0</b>. Built RESTful APIs for property management, bookings, reviews, and user operations. Designed a responsive and user-friendly interface with a focus on security, scalability, maintainability, and reliable data management.
            </p>
            <div className="[&_button]:border-2 [&_button]:border-amber-600 [&_button]:bg-amber-600 [&_button]:rounded-md [&_button]:p-1 [&_button]:text-black text-[14px] font-bold tracking-wider">
              <a href="https://homiee-book-9a2u.vercel.app/" target="_blank"><button className="cursor-pointer">Live Demo</button></a>
              <a href="https://github.com/sonivipin119/HomieeBookJ.git" target="_blank"><button className="ml-2 cursor-pointer">View Code</button></a>
            </div>
          </div>
          <div className="text-[#ff9301] text-[100px] mr-17.5 mt-12.5 font-serif duration-400 hover:text-white">02</div>
        </div>
        <div className="flex flex-row">
          <div className="front">
            <div className=" shadow-[15px_15px_10px_0px_rgba(135,206,235,0.3)] rounded-2xl">
              <img src={passWord} className='w-60 h-60 rounded-2xl' />
            </div>
          </div>
          <div className="ml-10 w-1/2">
            <h2 className='font-serif text-xl tracking-wider'>Password strength Checker</h2>
            <p>
              Built a lightweight tool using HTML, CSS, JavaScript, with a
              Node.js backend. Provides real-time strength feedback (length,
              character variety, and common-pattern checks) with a color-coded
              meter. Offers actionable suggestions to improve weak passwords
              and validates inputs on the server for consistency. Focused on
              clean UI, fast performance, and practical security best
              practices.
            </p>
            <div className="[&_button]:border-2 [&_button]:border-amber-600 [&_button]:bg-amber-600 [&_button]:rounded-md [&_button]:p-1 [&_button]:text-black text-[14px] font-bold tracking-wider">
              <a href="https://password-strength-checkervip.netlify.app/" target="_blank"><button className="cursor-pointer">Live Demo</button></a>
              <a href="https://github.com/sonivipin119/My-projects/tree/main/password" target="_blank"><button className="ml-2 cursor-pointer">View Code</button></a>
            </div>
          </div>
          <div className="text-[#ff9301] text-[100px] ml-17.5 mt-12.5 font-serif duration-400 hover:text-white">03</div>
        </div>
      </div>
    </div>
  );
}
export default Projects;