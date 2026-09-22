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
    title: "Furniland",
    category: "Web Development",
    year: "2025",
    image: "/images/desktop/3.png",
    description:
      "A mobile application designed to help prevent stunting by supporting parents with accessible nutrition information, meal recommendations, and child growth monitoring.",
    role: "Web Developer Designer",
    tools: "Figma",
    link: "https://canva.link/c98hi45hq0ehnm8",
  },
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
        src="/images/desktop/skill.png"
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

        <h3>🦁 My Motto</h3>

        <p>
          “The past can hurt. But the way I see it, you can either run
          from it, or learn from it.”
          <br />
          <em>— Rafiki, The Lion King</em>
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

          <p>UI/UX Designer & Idea Development</p>

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

          <div className="certificate-card">
            <img
              src="/images/certificates/google-ai.png"
              alt="Google AI Essentials"
            />

            <div className="certificate-info">
              <h3>Google AI Essentials</h3>
              <p>Google</p>
              <span>AI / ML</span>
            </div>
          </div>

          <div className="certificate-card">
            <img
              src="/images/certificates/google-data.png"
              alt="Google Data Analytics"
            />

            <div className="certificate-info">
              <h3>Google Data Analytics</h3>
              <p>Google</p>
              <span>Data Analytics</span>
            </div>
          </div>

          <div className="certificate-card">
            <img
              src="/images/certificates/aws-cloud.png"
              alt="AWS Cloud Foundations"
            />

            <div className="certificate-info">
              <h3>AWS Cloud Foundations</h3>
              <p>AWS Academy</p>
              <span>Cloud Computing</span>
            </div>
          </div>

          <div className="certificate-card">
            <img
              src="/images/certificates/shecodes.png"
              alt="SheCodes"
            />

            <div className="certificate-info">
              <h3>SheCodes Bootcamp</h3>
              <p>SheCodes</p>
              <span>Data & Technology</span>
            </div>
          </div>

          <div className="certificate-card">
            <img
              src="/images/certificates/dicoding.png"
              alt="Dicoding"
            />

            <div className="certificate-info">
              <h3>Dicoding Course</h3>
              <p>Dicoding Indonesia</p>
              <span>Web Development</span>
            </div>
          </div>

          <div className="certificate-card">
            <img
              src="/images/certificates/ibm.png"
              alt="IBM"
            />

            <div className="certificate-info">
              <h3>IBM Data Science</h3>
              <p>IBM</p>
              <span>Data Science</span>
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

        {/* 2026 */}

        <div className="timeline-year">
          2026
        </div>

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="experience-card">
            <div className="experience-icon">💼</div>

            <div className="experience-info">
              <h3>Head of Product Management</h3>
              <p>PT Ruang Tumbuh Indonesia</p>
              <span>Product Management</span>
            </div>
          </div>

        </div>


        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="experience-card">
            <div className="experience-icon">📊</div>

            <div className="experience-info">
              <h3>Data Analyst</h3>
              <p>PT VINIX7</p>
              <span>Data Analytics</span>
            </div>
          </div>

        </div>


        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="experience-card">
            <div className="experience-icon">👥</div>

            <div className="experience-info">
              <h3>HRD / Leadership</h3>
              <p>BSLC</p>
              <span>Leadership</span>
            </div>
          </div>

        </div>


        {/* 2025 */}

        <div className="timeline-year">
          2025
        </div>

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="experience-card">
            <div className="experience-icon">🎓</div>

            <div className="experience-info">
              <h3>Mentor</h3>
              <p>BNEC / BSLC</p>
              <span>Teaching & Mentoring</span>
            </div>
          </div>

        </div>


        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="experience-card">
            <div className="experience-icon">👥</div>

            <div className="experience-info">
              <h3>Assistant Manager</h3>
              <p>BSLC</p>
              <span>Leadership</span>
            </div>
          </div>

        </div>


        {/* 2024 */}

        <div className="timeline-year">
          2024
        </div>

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="experience-card">
            <div className="experience-icon">📚</div>

            <div className="experience-info">
              <h3>UTS Responsi Class Tutor</h3>
              <p>BINUS University</p>
              <span>Teaching</span>
            </div>
          </div>

        </div>

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
          href="/desktop/ATS.pdf"
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
          href="mailto:your.email@gmail.com"
          className="contact-card"
        >
          <div className="contact-icon">✉</div>

          <div>
            <h3>Email</h3>
            <span>your.email@gmail.com</span>
          </div>

          <div className="contact-arrow">↗</div>
        </a>


        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">in</div>

          <div>
            <h3>LinkedIn</h3>
            <span>linkedin.com/in/yourusername</span>
          </div>

          <div className="contact-arrow">↗</div>
        </a>


        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">◉</div>

          <div>
            <h3>GitHub</h3>
            <span>github.com/yourusername</span>
          </div>

          <div className="contact-arrow">↗</div>
        </a>

      </div>

    </div>

  </div>
)}

    </div>
  )
}

export default Desktop