import { useState, useEffect } from 'react'
import './desktop.css'

const projects = [
  {
    title: "TinyStep",
    category: "UI/UX Design",
    year: "2026",
    image: "/images/desktop/1.png",
    description:
      "TinyStep is a mobile application designed to support parents in preventing stunting by providing child growth monitoring, nutrition and educational resources, and access to healthcare professionals through in-app consultation. As the UI/UX Designer, I was responsible for the end-to-end design process, starting with qualitative and quantitative research to understand users’ needs and challenges, followed by translating the findings into a user-centered digital solution. I designed the application interface and user experience from concept to final prototype, while also contributing to the development of the overall solution. The project advanced to the semifinal round and ultimately became a finalist, achieving 2nd place.",
    role: "UI/UX Designer",
    tools: "Figma",
    link: "https://canva.link/c98hi45hq0ehnm8",
  },

    {
    title: "Furniland",
    category: "Web Development",
    year: "2025",
    image: "/images/desktop/2.png",
    description:
      "FurniLand is a group project developed as part of a university course, where I collaborated with my teammates to build the frontend of a furniture-focused website. I contributed to designing and implementing the frontend, translating our ideas into an interactive web interface using HTML, CSS, and JavaScript in Visual Studio Code. Through this project, I gained hands-on experience in frontend development and learned how to collaborate effectively when turning a concept into a functional website. The project received a perfect score of 100.",
    role: "Web Developer Designer",
    tools: "Html,css,javascript",
    link: "https://canva.link/c98hi45hq0ehnm8",
  },

      {
    title: "COMPSIS",
    category: "Business Case",
    year: "2026",
    image: "/images/desktop/8.jpg",
    description:
      "COMPSIS is an official website prototype developed by Information Systems students as part of ISPM. I contributed to the system analysis and UI/UX design process, starting from developing the ERD and class diagram to conducting user interviews, defining user requirements, and designing the website flow and interface. The project was recognized as the Best Project in ISPM.",
    role: "System Analyst & UI/UX",
    tools: "Figma",
    link: "https://www.figma.com/design/iJwO4vKs7zfRXpCD0NxiGG/UI-UX-ISPM?t=qsJK6Dh1jGpSpWJD-1",
  },

    {
    title: "CORE",
    category: "Business Case",
    year: "2026",
    image: "/images/desktop/4.png",
    description:
      "CORE is a business case competition project focused on developing technology-driven solutions for Netflix across content optimization, VFX operations, and user personalization. I contributed by analyzing the business case and developing the user personalization solution, focusing on an AI-powered assistant for personalized content recommendations and an enhanced viewing experience. Ranked 1st among the Top Semifinalists.",
    role: "Business Analyst",
    tools: "Figma",
    link: "https://www.canva.com/design/DAG8ShxfvA0/cTDlLI85YQi49NDYyQchBw/edit?utm_content=DAG8ShxfvA0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },

      {
    title: "BinGo",
    category: "UI/UX Design & Business",
    year: "2026",
    image: "/images/desktop/5.png",
    description:
      "BinGo is a smart waste management application designed to encourage proper waste disposal through IoT-enabled waste stations placed in various locations. Users can dispose of waste at designated stations, earn points and vouchers, and access educational videos and tutorials to learn how to identify and properly sort different types of waste. As the UI/UX Designer, I designed the user interface and experience while also contributing to the development of the overall solution and its features. The project advanced to the semifinal round of the competition.",
    role: "Business Analyst",
    tools: "Figma",
    link: "https://www.figma.com/design/R80zRAIS0ZSvecW5jHQrSz/IOFEST?node-id=0-1&t=HiF2rfDBVgo75744-1",
  },

        {
    title: "Chocolate Analyze",
    category: "Data Analytics",
    year: "2026",
    image: "/images/desktop/6.png",
    description:
      "This project involved analyzing a chocolate dataset containing information on different chocolate products, companies, and years to identify sales patterns and generate business insights. I contributed to developing the dashboard and data visualizations, transforming the analysis into charts and insights that could support business recommendations. The project received a 95 as the final project grade.",
    role: "Business Analyst",
    tools: "Figma",
    link: "https://canva.link/8lq4gj0xsmrr3gp",
  },

         {
    title: "GroWaste",
    category: "UI/UX & Business",
    year: "2026",
    image: "/images/desktop/7.jpg",
    description:
      "GroWaste is an integrated food waste management platform designed to connect households, businesses, waste collection services, and compost-processing partners. The proposed system integrates IoT-enabled waste stations with pickup and drop-off services, allowing food waste to be collected and processed into compost products that can be sold through the platform. As a Business Analyst and UI/UX Designer, I analyzed competitors, conducted SWOT analysis, developed the project timeline, contributed to the business model, and designed the application prototype.",
    role: "UI/UX & Business",
    tools: "Figma",
    link: "https://canva.link/0jk0kfphnd9nhhm",
  },

  
         {
    title: "Structured Prompting",
    category: "Research & Analytics",
    year: "2026",
    image: "/images/desktop/9.jpg",
    description:
      "This research examined the use of structured prompting among university students through a quantitative research approach. Data was collected using a close-ended questionnaire and analyzed using SmartPLS to examine the relationships between the selected research variables. I contributed to the development of the research paper, including the introduction, research analysis, and interpretation of the findings.",
    role: "Research Analyst",
    tools: "SmartPLS",
    link: "https://www.figma.com/design/R80zRAIS0ZSvecW5jHQrSz/IOFEST?node-id=0-1&t=HiF2rfDBVgo75744-1",
  },

  

]

const experiences = [
  {
    year: "2026",
    title: "Head of Product Management",
    company: "PT Ruang Tumbuh Indonesia",
    category: "Product Management",
    icon: "💼",
    description:
      "Created successful products and programs by analyzing target markets and using qualitative and quantitative data. Developed English programs that successfully reached a large audience."
  },

  {
    year: "2026",
    title: "Data Analyst Intern",
    company: "PT VINIX7",
    category: "Data Analytics",
    icon: "📊",
    description:
      "Conducted exploratory data analysis and presented findings through dashboards containing 5+ charts and KPI cards. Analyzed child mortality data based on diseases and age across the world."
  },

  {
    year: "2026",
    title: "Regional President of Alam Sutera",
    company: "BSLC",
    category: "Leadership",
    icon: "👥",
    description:
      "Led 46+ board members, activists, and staff alongside the Deputy Regional President. Oversaw regional operations, monitored program execution, ensured organizational goals were achieved, and served as a speaker for LDKCP."
  },

  {
    year: "2026",
    title: "Beelingua Mentor",
    company: "BSLC",
    category: "Mentoring",
    icon: "🎓",
    description:
      "Mentored Beelingua participants throughout their learning journey by providing guidance and support. 86% of mentees successfully completed Beelingua on time with the support provided."
  },

  {
    year: "2026",
    title: "Vice Project Leader",
    company: "CanvaCamp",
    category: "Project Management",
    icon: "🎨",
    description:
      "Coordinated 6 divisions and 40+ committee members to deliver CanvaCamp, a creative graphic design bootcamp attended by 800+ online participants."
  },

  {
    year: "2025–2026",
    title: "Assistant Manager of HRD",
    company: "Binus English Club",
    category: "Leadership & HR",
    icon: "👥",
    description:
      "Supervised 10+ people and developed HR initiatives, coordinated member development programs, and managed recruitment and organizational growth strategies within the division."
  },

  {
    year: "2025–2026",
    title: "Coordinator & Staff Events",
    company: "BSLC",
    category: "Event Management",
    icon: "📅",
    description:
      "Coordinated and managed the planning, arrangements, and resources for more than 5 events in BSLC."
  },

  {
    year: "2025–2026",
    title: "Event Coordinator — NMR",
    company: "BNEC",
    category: "Event Coordination",
    icon: "🎪",
    description:
      "Led the end-to-end execution of organizational events, coordinating cross-functional teams and ensuring programs were delivered effectively from planning to completion, successfully gaining 60+ registrants."
  },

  {
    year: "2025–2026",
    title: "MC & MC Trainer",
    company: "BNEC",
    category: "Public Speaking",
    icon: "🎤",
    description:
      "Hosted 4 organizational events as Master of Ceremony and mentored members through MC training sessions, helping develop public speaking, stage presence, and event-hosting skills."
  },

  {
    year: "2025",
    title: "Information Systems Project Member",
    company: "BINUS University",
    category: "UI/UX & System Development",
    icon: "💻",
    description:
      "Designed the official BINUS competition management website as part of a team, developing the UI/UX to streamline competition management for the School of Information Systems."
  },

  {
    year: "2025",
    title: "Freshmen Leader",
    company: "BINUS University",
    category: "Mentoring & Leadership",
    icon: "🌱",
    description:
      "Led and guided 50+ freshmen alongside a team of student leaders, facilitating their transition and adaptation to university life through orientation and mentoring activities."
  },

  {
    year: "2025",
    title: "Freshmen Partner",
    company: "BINUS University",
    category: "Mentoring",
    icon: "🤝",
    description:
      "Accompanied and supported freshmen throughout their adaptation period by providing guidance on academic, organizational, and campus-related matters."
  }
]

function Desktop() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [text, setText] = useState('')
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [isCertificatesOpen, setIsCertificatesOpen] = useState(false)
  const [isExperienceOpen, setIsExperienceOpen] = useState(false)
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedCertificate, setSelectedCertificate] = useState(null)

useEffect(() => {
  const message = 'MICHELE OS'
  let index = 0

  const typing = setInterval(() => {
    setText(message.slice(0, index + 1))
    index++

    if (index === message.length) {
      clearInterval(typing)
    }
  }, 150)

  return () => clearInterval(typing)
}, [])
  return (
    <div className="desktop">

    <div className="portfolio-content">
    {/* nanti About Me, Projects, Certificates, dll masuk sini */}
    </div>


      <div className='computer-screen'>
        <span>{text}</span>
      </div>

            <img
        src="/images/desktop/about-me.png"
        alt="About Me"
        className="about-me"
        onClick={() => setIsAboutOpen(true)}
      />

      <img
        src="/images/desktop/project.png"
        alt="Project"
        className='project'
        onClick={() => setIsProjectsOpen(true)}
      />

      <img
        src="/images/desktop/certif.png"
        alt="Certificates"
        className="skill"
        onClick={() => setIsCertificatesOpen(true)}
      />

      <img
      src="/images/desktop/experience.png"
      alt="Experience"
      className="experience"
      onClick={() => setIsExperienceOpen(true)}
    />

      <img
        src="/images/desktop/resume.png"
        alt="Resume"
        className="resume"
        onClick={() => setIsResumeOpen(true)}
      />

      <img
        src="/images/desktop/contact.png"
        alt="Contact"
        className="contact"
        onClick={() => setIsContactOpen(true)}
      />

      <span className="sparkle sparkle-1">✦</span>
      <span className="sparkle sparkle-2">✧</span>
      <span className="sparkle sparkle-3">✦</span>
      <span className="sparkle sparkle-4">✧</span>
      <span className="sparkle sparkle-5">✦</span>

      <img src="./images/desktop/moon.png" alt="Moon" className='moon' />
{isAboutOpen && (
  <div className="about-window">

    <div className="window-header">
      <span>About Me</span>

      <button
        className="close-button"
        onClick={() => setIsAboutOpen(false)}
      >
        ×
      </button>
    </div>

    <div className="window-content">

      <div className="about-photo">
        <img
          src="/images/desktop/michele.png"
          alt="Michele"
        />
      </div>

      <div className="about-info">

        <h2>Hi, I'm Michele! ✦</h2>

        <p>
          I’m an eager learner who believes that growth comes from
          being willing to try, fail, and try again. As an Information
          Systems student, I’ve explored different areas of technology
          through projects, competitions, organizations, and new
          experiences. These experiences have allowed me to step into
          different roles, from exploring data analytics and UI/UX to
          working with digital products, cloud computing, and project
          management. Along the way, I’ve also had opportunities to
          collaborate with different people, take on leadership roles,
          and continuously develop both my technical and interpersonal
          skills.
        </p>

        <h3>🎓 Education</h3>

        <p>
          <strong>BINUS University</strong>
          <br />
          Bachelor of Information Systems
          <br />
          Semester 5 · GPA: 3.99 / 4.00
        </p>

        <h3>My Motto</h3>

        <p>
          “The past can hurt. But the way I see it, you can either run
          from it, or learn from it.”
          <br />
          <em>— The Lion King</em>
        </p>

        <h3>💬 What People Say About Me</h3>

        <p>
          People often describe me as attentive, empathetic, and
          persistent. I care about understanding the people and
          situations around me, and I try to approach challenges with
          patience and an open mind. Once I commit to something, I’m
          willing to keep learning, adapt, and see it through.
        </p>

      </div>

    </div>

  </div>
)}

{isProjectsOpen && (
  <div className="projects-window">

    <div className="window-header">
      <span>Projects</span>

      <button
        className="close-button"
        onClick={() => setIsProjectsOpen(false)}
      >
        ×
      </button>
    </div>

    <div className="projects-content">

      <div className="projects-sidebar">
        <div className="sidebar-item active">
          📁 All Projects
        </div>
      </div>

      <div className="projects-area">

        {selectedProject ? (

          <div className="project-detail">

            <button
              className="back-button"
              onClick={() => setSelectedProject(null)}
            >
              ← Back
            </button>

            <h2>{selectedProject.title}</h2>

            <span className="project-category">
              {selectedProject.category} · {selectedProject.year}
            </span>

            <div className="project-detail-image">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
            />
          </div>

          <h3>About the Project</h3>

          <p>{selectedProject.description}</p>

          <h3>My Role</h3>

          <p>{selectedProject.role}</p>

          <a
          href={selectedProject.link}
          target="_blank"
          rel="noreferrer"
          className="view-project-button"
        >
          View Project ↗
        </a>

          </div>

        ) : (

          <>
            <h2>All Projects</h2>

            <div className="project-grid">

              {projects.map((project, index) => (
                <div
                  className="project-card"
                  key={index}
                  onClick={() => setSelectedProject(project)}
                >

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                  <div className="project-info">

                    <h3>{project.title}</h3>

                    <span className="project-category">
                      {project.category}
                    </span>

                    <p>{project.year}</p>

                  </div>

                </div>
              ))}

            </div>
          </>
        )}

      </div>

    </div>

  </div>
)}

{isCertificatesOpen && (
  <div className="certificates-window">

    <div className="window-header">
      <span>Certificates</span>

      <button
        className="close-button"
        onClick={() => setIsCertificatesOpen(false)}
      >
        ×
      </button>
    </div>

    <div className="certificates-content">

      <div className="certificates-sidebar">

        <div className="sidebar-item active">
          📁 Certificates
        </div>

      </div>

      <div className="certificates-area">

        <h2>All Certificates</h2>

        <p className="certificates-description">
          Certificates and courses I've completed to keep learning and growing.
        </p>

        <div className="certificate-grid">

          <div className="certificate-card"
          onClick={() =>
    setSelectedCertificate("/images/desktop/10.jpg")
  }>
            
            <img
              src="/images/desktop/10.jpg"
              alt="Google AI Foundation Certificate"
            />

            <div className="certificate-info">
              <h3>Google AI Foundation Certificate</h3>
              <p>Google</p>
              <span>AI / ML</span>
            </div>
          </div>

          <div className="certificate-card"
          onClick={() =>
    setSelectedCertificate("/images/desktop/11.jpg")
  }>
            
            <img
              src="/images/desktop/11.jpg"
              alt="Google Data Analytics"
            />

            <div className="certificate-info">
              <h3>Dean's List</h3>
              <p>BINUS University</p>
              <span>Academic Achievement</span>
            </div>
          </div>

          <div className="certificate-card"
          
          onClick={() =>
    setSelectedCertificate("/images/desktop/region.jpg")
  }>
            <img
              src="/images/desktop/region.jpg"
              alt="AWS Cloud Foundations"
            />

            <div className="certificate-info">
              <h3>Regional President</h3>
              <p>BSLC</p>
              <span>Leadership & Organization</span>
            </div>
          </div>

          <div className="certificate-card"
          onClick={() =>
    setSelectedCertificate("/images/desktop/13.jpg")
  }>
            <img
              src="/images/desktop/13.jpg"
              alt="SheCodes"
            />

            <div className="certificate-info">
              <h3>Tutor & Senior Mentor</h3>
              <p>BSLC</p>
              <span>Mentoring</span>
            </div>
          </div>

          <div className="certificate-card"
          onClick={() =>
    setSelectedCertificate("/images/desktop/14.jpg")
  }>
            <img
              src="/images/desktop/14.jpg"
              alt="Dicoding"
            />

            <div className="certificate-info">
              <h3>Event Coordinator of NMR</h3>
              <p>BNEC</p>
              <span>Event Coordination</span>
            </div>
          </div>

          <div className="certificate-card"
          onClick={() =>
    setSelectedCertificate("/images/desktop/15.jpg")
  }>
            <img
              src="/images/desktop/15.jpg"
              alt="IBM"
            />

            <div className="certificate-info">
              <h3>Dig In Competition SemiFinalist</h3>
              <p>HIMPUNAN SISTEM INFORMASI</p>
              <span>Competition</span>
            </div>
          </div>

          
          <div className="certificate-card"
          onClick={() =>
    setSelectedCertificate("/images/desktop/16.jpg")
  }>
            <img
              src="/images/desktop/16.jpg"
              alt="IBM"
            />

            <div className="certificate-info">
              <h3>SIS Awardee Excellence</h3>
              <p>BINUS University</p>
              <span>Academic Achievement</span>
            </div>
          </div>

          <div className="certificate-card"
          onClick={() =>
    setSelectedCertificate("/images/desktop/17.jpg")
  }>
            <img
              src="/images/desktop/17.jpg"
              alt="IBM"
            />

            <div className="certificate-info">
              <h3>HACKFEST Competition Finalist</h3>
              <p>Tarumanagara University</p>
              <span>Competition</span>
            </div>
          </div>

          
          <div className="certificate-card"
          onClick={() =>
    setSelectedCertificate("/images/desktop/18.jpg")
  }>
            <img
              src="/images/desktop/18.jpg"
              alt="IBM"
            />

            <div className="certificate-info">
              <h3>SheCodes Participant Bootcamp</h3>
              <p>BINUS University</p>
              <span>Bootcamp & Training</span>
            </div>
          </div>

          
          <div className="certificate-card"
          onClick={() =>
    setSelectedCertificate("/images/desktop/19.jpg")
  }>
            <img
              src="/images/desktop/19.jpg"
              alt="IBM"
            />

            <div className="certificate-info">
              <h3>LDKCP Speaker</h3>
              <p>BSLC</p>
              <span>Public Speaking</span>
            </div>
          </div>

          
          <div className="certificate-card"
          onClick={() =>
    setSelectedCertificate("/images/desktop/21.jpg")
  }>
            <img
              src="/images/desktop/21.jpg"
              alt="IBM"
            />

            <div className="certificate-info">
              <h3>SQL Certification</h3>
              <p>HackerRank</p>
              <span>Training & Certification</span>
            </div>
          </div>

          
          
          <div className="certificate-card"
          onClick={() =>
    setSelectedCertificate("/images/desktop/12.jpg")
  }>
            <img
              src="/images/desktop/12.jpg"
              alt="IBM"
            />

            <div className="certificate-info">
              <h3>UI/UX Certificate</h3>
              <p>MySkill</p>
              <span>Training & Certification</span>
            </div>
          </div>


        </div>

      </div>

    </div>

  </div>
)}

{isExperienceOpen && (
  <div className="experience-window">

    <div className="window-header">
      <span>Experience</span>

      <button
        className="close-button"
        onClick={() => setIsExperienceOpen(false)}
      >
        ×
      </button>
    </div>

    <div className="experience-content">

      <h2>My Experience</h2>

      <p className="experience-description">
        A collection of my experiences, roles, and journey so far.
      </p>

      <div className="experience-timeline">

        {experiences.map((experience, index) => (
    <div className="timeline-item" key={index}>

      <div className="timeline-dot"></div>

      <div className="experience-card">

        <div className="experience-icon">
          {experience.icon}
        </div>

        <div className="experience-info">

          <h3>{experience.title}</h3>

          <p>{experience.company}</p>

          <span>{experience.category}</span>

          <div className="experience-description">
            {experience.description}
          </div>

        </div>

      </div>

    </div>
  ))}

</div>

    </div>

  </div>
)}

{isResumeOpen && (
  <div className="resume-window">

    <div className="window-header">
      <span>Resume</span>

      <button
        className="close-button"
        onClick={() => setIsResumeOpen(false)}
      >
        ×
      </button>
    </div>

    <div className="resume-content">

      <div className="resume-preview">
        <iframe
          src="./images/desktop/mg.png"
          title="Michele Graciela Resume"
        ></iframe>
      </div>

      <div className="resume-actions">

        <a
          href="images/desktop/ATS.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-button"
        >
          Open PDF ↗
        </a>

        <a
          href="/images/desktop/ATS.pdf"
          download
          className="resume-button"
        >
          Download CV ↓
        </a>

      </div>

    </div>

  </div>
)}
{isContactOpen && (
  <div className="contact-window">

    <div className="window-header">
      <span>Contact</span>

      <button
        className="close-button"
        onClick={() => setIsContactOpen(false)}
      >
        ×
      </button>
    </div>

    <div className="contact-content">

      <h2>Let's Connect! ✦</h2>

      <p>
        I'm always open to new opportunities, collaborations,
        and conversations.
      </p>

      <div className="contact-list">

        <a
          href="mailto:micheledharma9@gmail.com"
          className="contact-card"
        >
          <div className="contact-icon">✉</div>

          <div>
            <h3>Email</h3>
            <span>micheledharma9@gmail.com</span>
          </div>

          <div className="contact-arrow">↗</div>
        </a>


        <a
          href="https://www.linkedin.com/in/michele-graciela-27bb70325?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">in</div>

          <div>
            <h3>LinkedIn</h3>
            <span>linkedin.com/in/michele-graciela</span>
          </div>

          <div className="contact-arrow">↗</div>
        </a>


        <a
          href="https://github.com/mgrclaa"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">◉</div>

          <div>
            <h3>GitHub</h3>
            <span>github.com/mgrclaa</span>
          </div>

          <div className="contact-arrow">↗</div>
        </a>

      </div>

    </div>

  </div>
)}

{selectedCertificate && (
  <div className="certificate-preview-window">

    <div className="window-header">
      <span>Certificate Preview</span>

      <button
        className="close-button"
        onClick={() => setSelectedCertificate(null)}
      >
        ×
      </button>
    </div>

    <div className="certificate-preview-content">
      <img
        src={selectedCertificate}
        alt="Certificate Preview"
      />
    </div>

  </div>
)}

    </div>
  )
}

export default Desktop