import "./App.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function App() {
  return (
    <div>
      <nav>
        <h2>My Portfolio</h2>

        <div>
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#experience">Experience</a>
  <a href="#education">Education</a>
  <a href="#contact">Contact</a>
</div>
      </nav>

      <main>
        <section id="home">
          <h1>Hi, I'm Abhinav Jain</h1>

          <h2>DevOps Engineer</h2>
<p>
  I am a DevOps professional passionate about automation,
  cloud technologies, CI/CD, Docker, Kubernetes, and infrastructure.
</p>

<a href="#projects" className="hero-button">View My Work</a>
<a href="#contact" className="hero-button">Contact Me</a>
        </section>

       <section id="about">
  <h2>About Me</h2>
  <p>
    I am a DevOps professional interested in building reliable,
    automated, and scalable applications. I enjoy working with
    technologies such as Linux, Git, Docker, CI/CD, Kubernetes,
    AWS, and Infrastructure as Code.
  </p>

  <p>
    This portfolio is also a practical DevOps project where I am
    applying these technologies step by step, from development and
    version control to containerization, automation, cloud,
    deployment, and monitoring.
  </p>
</section>
        <section id="skills">
  <h2>Skills</h2>

  <div className="skills-container">
    <div className="skill-card">
      <h3>Linux</h3>
      <p>System administration and command line</p>
    </div>

    <div className="skill-card">
      <h3>Git & GitHub</h3>
      <p>Version control and collaboration</p>
    </div>

    <div className="skill-card">
      <h3>Docker</h3>
      <p>Containerization and Docker images</p>
    </div>

    <div className="skill-card">
      <h3>CI/CD</h3>
      <p>GitHub Actions and automation</p>
    </div>

    <div className="skill-card">
      <h3>Kubernetes</h3>
      <p>Container orchestration</p>
    </div>

    <div className="skill-card">
      <h3>AWS</h3>
      <p>Cloud infrastructure and services</p>
    </div>
  </div>
</section>

       <section id="projects">
  <h2>Projects</h2>

  <div className="projects-container">
    <div className="project-card">
      <h3>DevOps Portfolio</h3>
      <p>
        A production-style React portfolio deployed using
        Docker, GitHub Actions, Kubernetes, and AWS.
      </p>
      <span>React | Docker | GitHub Actions | Kubernetes | AWS</span>
    </div>

    <div className="project-card">
      <h3>CI/CD Pipeline</h3>
      <p>
        Automated application testing, building, and deployment
        using GitHub Actions.
      </p>
      <span>GitHub Actions | CI/CD | Docker</span>
    </div>

    <div className="project-card">
      <h3>Cloud Infrastructure</h3>
      <p>
        Infrastructure deployment and management using AWS
        and Terraform.
      </p>
      <span>AWS | Terraform | Infrastructure as Code</span>
    </div>
  </div>
</section>

       <section id="experience">
  <h2>Experience</h2>

  <div className="experience-container">
    <div className="experience-card">
      <h3>DevOps & Cloud Projects</h3>
      <h4>Hands-on Learning & Practice</h4>
      <p className="experience-date">Current</p>

```
  <p>
    Building hands-on experience with Linux, Git, Docker,
    GitHub Actions, Kubernetes, AWS, and Infrastructure as Code
    through practical projects and continuous learning.
  </p>
</div>

<div className="experience-card">
  <h3>DevOps Portfolio Project</h3>
  <h4>Personal Project</h4>
  <p className="experience-date">Current</p>

  <p>
    Developing a production-style React portfolio and gradually
    implementing CI/CD, containerization, Kubernetes deployment,
    cloud infrastructure, and monitoring.
  </p>
</div>
```

  </div>
</section>
<section id="education">
  <h2>Education</h2>

  <div className="education-container">
    <div className="education-card">
      <h3>Bachelor of Computer Applications (BCA)</h3>
      <h4>Apex Institute of Management and Science - Rajasthan University</h4>
      <p className="education-date">2017</p>

```
  <p>
    Bachelor of Computer Applications with a foundation in
    computer applications, programming, and information technology.
  </p>
</div>
```

  </div>
</section>


  <section id="contact">
  <h2>Contact Me</h2>

  <p>
    I'm always open to discussing new opportunities,
    projects, and DevOps-related work.
  </p>

  <div className="contact-container">
    <a href="mailto:abhinavjain132@gmail.com" title="Email">
      <FaEnvelope />
      <span>Email</span>
    </a>

    <a href="https:www.linkedin.com/in/abhinav-jain-015a9318b" target="_blank" rel="noreferrer" title="LinkedIn">
      <FaLinkedin />
      <span>LinkedIn</span>
    </a>

    <a href="https://github.com/abhinavjain132-sudo" target="_blank" rel="noreferrer" title="GitHub">
      <FaGithub />
      <span>GitHub</span>
    </a>

    <a href="#" target="_blank" rel="noreferrer" title="Instagram">
      <FaInstagram />
      <span>Instagram</span>
    </a>

    <a href="https://wa.me/917877792357" target="_blank" rel="noreferrer" title="WhatsApp">
      <FaWhatsapp />
      <span>WhatsApp</span>
    </a>

    <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noreferrer" title="Naukri">
      <span>Naukri</span>
    </a>
  </div>
</section>
      </main>
    </div>
  );
}

export default App;