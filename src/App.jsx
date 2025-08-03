import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, User, Briefcase, GraduationCap, Star, Award, Code, Database, BrainCircuit, Menu, X, FolderGit2 } from 'lucide-react';

// Main App Component with all styles included
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // This function highlights the current section in the navbar based on scroll position
  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
        setActiveSection(section);
        break; // Exit loop once the active section is found
      }
    }
  };

  // Add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links data
  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'education', title: 'Education' },
    { id: 'certifications', title: 'Certs' },
    { id: 'contact', title: 'Contact' },
  ];

  // All CSS styles are defined here in a style tag.
  const styles = `
    :root {
      --bg-dark: #111827;
      --bg-medium: #1f2937;
      --bg-light: #374151;
      --text-light: #e5e7eb;
      --text-medium: #9ca3af;
      --cyan: #06b6d4;
      --cyan-hover: #0891b2;
    }

    body {
      background-color: var(--bg-dark);
      color: var(--text-light);
      font-family: sans-serif;
      line-height: 1.6;
      margin: 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    /* Header */
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      background-color: rgba(17, 24, 39, 0.8);
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    }
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1.5rem;
    }
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--cyan);
      text-decoration: none;
    }
    .nav-desktop {
      display: none;
    }
    .nav-link {
      font-size: 0.875rem;
      font-weight: 500;
      text-decoration: none;
      color: var(--text-light);
      transition: color 0.3s;
    }
    .nav-link:hover {
      color: var(--cyan);
    }
    .nav-link.active {
      color: var(--cyan);
    }
    .menu-button {
      background: none;
      border: none;
      color: var(--text-light);
      cursor: pointer;
    }
    .nav-mobile {
      background-color: var(--bg-medium);
      padding: 1rem;
    }
    .nav-mobile a {
      display: block;
      padding: 0.5rem 1rem;
      text-decoration: none;
      color: var(--text-light);
      border-radius: 0.25rem;
    }
    .nav-mobile a:hover {
      background-color: var(--bg-light);
      color: var(--cyan);
    }

    /* Main Content */
    main {
      padding-top: 60px; /* Adjust based on header height */
    }
    section {
      padding: 5rem 0;
    }
    .section-dark { background-color: var(--bg-dark); }
    .section-medium { background-color: var(--bg-medium); }
    .section-title {
      font-size: 2.25rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 3rem;
      color: white;
    }

    /* Hero Section */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .hero-text {
      max-width: 42rem;
      margin-bottom: 2.5rem;
    }
    .hero h1 {
      font-size: 2.5rem;
      font-weight: 800;
      color: white;
      margin-bottom: 1rem;
    }
    .hero .subtitle {
      font-size: 1.25rem;
      color: var(--cyan);
      margin-bottom: 1.5rem;
    }
    .hero .description {
      color: var(--text-medium);
      margin-bottom: 2rem;
    }
    .hero-buttons {
      display: flex;
      gap: 1rem;
    }
    .btn {
      font-weight: bold;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      text-decoration: none;
      transition: background-color 0.3s;
      display: flex;
      align-items: center;
    }
    .btn-primary {
      background-color: var(--cyan);
      color: white;
    }
    .btn-primary:hover {
      background-color: var(--cyan-hover);
    }
    .btn-secondary {
      background-color: var(--bg-light);
      color: white;
    }
    .btn-secondary:hover {
      background-color: #4b5563;
    }
    .hero-image-wrapper {
        margin-top: 2rem;
    }
    .hero-image {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      border: 4px solid var(--cyan);
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
    }

    /* Shared Card Styles */
    .card {
      background-color: var(--bg-medium);
      padding: 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .grid {
      display: grid;
      gap: 2rem;
    }
    .grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
    
    /* About Section */
    .about-card {
      max-width: 48rem;
      margin: 0 auto;
      background-color: var(--bg-dark);
      padding: 2rem;
      color: var(--text-light);
      font-size: 1.125rem;
    }

    /* Skills Section */
    .skill-card {
        text-align: center;
    }
    .skill-card .icon {
        margin-bottom: 1rem;
        display: inline-block;
    }
    .skill-card h3 {
        font-size: 1.25rem;
        font-weight: bold;
        color: white;
        margin-bottom: 0.5rem;
    }
    .skill-card p {
        color: var(--text-medium);
    }

    /* Experience Section */
    .timeline {
        max-width: 48rem;
        margin: 0 auto;
        position: relative;
    }
    .timeline-item {
        padding-left: 2rem;
        position: relative;
    }
    .timeline-line {
        position: absolute;
        top: 2rem;
        left: 1rem;
        bottom: 0;
        width: 2px;
        background-color: var(--cyan);
    }
    .timeline-dot {
        position: absolute;
        left: 0;
        top: 0.5rem;
        transform: translateX(-50%);
        width: 1.5rem;
        height: 1.5rem;
        background-color: var(--cyan);
        border-radius: 50%;
        border: 4px solid var(--bg-medium);
    }
    .timeline-item h3 {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--cyan);
    }
    .timeline-item .company {
        font-size: 1.125rem;
        font-weight: 600;
        color: white;
        margin-bottom: 0.25rem;
    }
    .timeline-item .date {
        font-size: 0.875rem;
        color: var(--text-medium);
        margin-bottom: 1rem;
    }
    .timeline-item ul {
        list-style-type: disc;
        padding-left: 1.25rem;
        color: var(--text-light);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    /* Project Card */
    .project-card {
        display: flex;
        flex-direction: column;
    }
    .project-card h3 {
        font-size: 1.25rem;
        font-weight: bold;
        color: var(--cyan);
        margin-bottom: 0.5rem;
    }
    .project-card p {
        color: var(--text-medium);
        margin-bottom: 1rem;
        flex-grow: 1;
    }
    .project-card .tags {
        margin-bottom: 1rem;
    }
    .project-card .tag {
        display: inline-block;
        background-color: var(--bg-light);
        color: var(--cyan);
        font-size: 0.75rem;
        font-weight: 600;
        margin-right: 0.5rem;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
    }
    .project-card .link {
        color: white;
        font-weight: bold;
        text-decoration: none;
        align-self: flex-start;
    }
    .project-card .link:hover {
        color: var(--cyan);
    }

    /* Education Section */
    .education-card {
        max-width: 48rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    .education-card .icon {
        flex-shrink: 0;
    }
    .education-card h3 {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--cyan);
    }
    .education-card .school {
        font-size: 1.125rem;
        font-weight: 600;
        color: white;
        margin-bottom: 0.25rem;
    }
    .education-card .date {
        font-size: 0.875rem;
        color: var(--text-medium);
    }

    /* Certifications Section */
    .cert-card {
        display: flex;
        align-items: center;
        gap: 1rem;
        background-color: var(--bg-dark);
    }
    .cert-card .icon {
        flex-shrink: 0;
    }
    .cert-card p {
        font-weight: 500;
        color: var(--text-light);
    }

    /* Contact Section */
    .contact {
        text-align: center;
    }
    .contact p {
        max-width: 42rem;
        margin: 0 auto 2rem auto;
        color: var(--text-medium);
    }
    .contact-links {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    .contact-links a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 1.125rem;
        color: var(--text-light);
        text-decoration: none;
        transition: color 0.3s;
    }
    .contact-links a:hover {
        color: var(--cyan);
    }

    /* Footer */
    .footer {
        background-color: var(--bg-medium);
        padding: 1.5rem 0;
        text-align: center;
        color: var(--text-medium);
    }
    .footer p {
        margin: 0;
    }
    .footer .built-with {
        font-size: 0.875rem;
        margin-top: 0.5rem;
    }

    /* Responsive Design */
    @media (min-width: 768px) {
      .menu-button { display: none; }
      .nav-desktop { display: flex; gap: 1.5rem; }
      .hero-content { flex-direction: row; text-align: left; justify-content: space-between; }
      .hero-text { margin-bottom: 0; }
      .hero h1 { font-size: 3.75rem; }
      .hero .subtitle { font-size: 1.5rem; }
      .hero-image-wrapper { margin-top: 0; }
      .grid-cols-md-2 { grid-template-columns: repeat(2, 1fr); }
      .grid-cols-md-3 { grid-template-columns: repeat(3, 1fr); }
      .contact-links { flex-direction: row; justify-content: center; gap: 2rem; }
    }
    @media (min-width: 1024px) {
      .grid-cols-lg-3 { grid-template-columns: repeat(3, 1fr); }
      .grid-cols-lg-4 { grid-template-columns: repeat(4, 1fr); }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="portfolio-body">
        {/* Header */}
        <header className="header">
          <div className="container header-content">
            <a href="#home" className="logo">Manoj Karthik</a>
            
            <nav className="nav-desktop">
              {navLinks.map(link => (
                <a key={link.id} href={`#${link.id}`} className={`nav-link ${activeSection === link.id ? 'active' : ''}`}>
                  {link.title}
                </a>
              ))}
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-button">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {isMenuOpen && (
            <nav className="nav-mobile">
              {navLinks.map(link => (
                <a key={link.id} href={`#${link.id}`} onClick={() => setIsMenuOpen(false)}>
                  {link.title}
                </a>
              ))}
            </nav>
          )}
        </header>

        <main>
          {/* Hero Section */}
          <section id="home" className="hero section-dark">
            <div className="container hero-content">
              <div className="hero-text">
                <h1>Kesarapu Manoj Karthik</h1>
                <p className="subtitle">AI & Data Science Student | Full-Stack Developer | Founder</p>
                <p className="description">
                  Building predictive models & full-stack solutions. Proficient in Python, TensorFlow & Cloud Technologies. Founder & CEO at Wholewagon.
                </p>
                <div className="hero-buttons">
                  <a href="#contact" className="btn btn-primary">Contact Me</a>
                  <a href="https://github.com/manoj0246" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <Github className="mr-2" size={20}/> GitHub
                  </a>
                </div>
              </div>
              <div className="hero-image-wrapper">
                <img src="https://placehold.co/400x400/1a202c/76e4f7?text=MK" alt="Kesarapu Manoj Karthik" className="hero-image" />
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="section-medium">
            <div className="container">
              <h2 className="section-title">About Me</h2>
              <div className="card about-card">
                <p>
                  As a final-year B.Tech student specializing in Artificial Intelligence and Data Science, I am passionate about building end-to-end solutions that solve real-world problems. My experience as the founder of Wholewagon has provided me with a unique blend of technical and business acumen.
                </p>
                <br/>
                <p>
                  My academic and project work is focused on machine learning, data engineering, and predictive modeling. I am proficient in Python, its core data science libraries, and frameworks like TensorFlow and PyTorch. I am a proactive learner, always eager to tackle new challenges.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="section-dark">
              <div className="container">
                  <h2 className="section-title">Technical Skills</h2>
                  <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-4">
                      <SkillCard icon={<BrainCircuit size={40} color="#06b6d4"/>} title="AI/ML" description="TensorFlow, PyTorch, Scikit-learn" />
                      <SkillCard icon={<Database size={40} color="#06b6d4"/>} title="Data Engineering" description="SQL, Database Optimization" />
                      <SkillCard icon={<Code size={40} color="#06b6d4"/>} title="Data Modeling" description="Pandas, NumPy" />
                      <SkillCard icon={<Code size={40} color="#06b6d4"/>} title="Backend" description="Python, RESTful APIs" />
                  </div>
              </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="section-medium">
            <div className="container">
              <h2 className="section-title">Professional Experience</h2>
              <div className="timeline">
                <div className="card timeline-item">
                    <div className="timeline-line"></div>
                    <div className="timeline-dot"></div>
                    <h3>Founder and CEO</h3>
                    <p className="company">WHOLEWAGON</p>
                    <p className="date">January 2023 - Present</p>
                    <ul>
                        <li>Architected and deployed a full-stack e-commerce platform.</li>
                        <li>Engineered the database backend using SQL, reducing latency by 25%.</li>
                        <li>Developed and managed RESTful APIs for scalable data exchange.</li>
                        <li>Managed the complete product lifecycle from concept to deployment.</li>
                    </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section-dark">
            <div className="container">
              <h2 className="section-title">My Projects</h2>
              <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3">
                <ProjectCard
                  title="Wholewagon E-commerce Platform"
                  description="A full-stack e-commerce site built from the ground up, featuring optimized database schemas and scalable RESTful APIs."
                  tags={["Full-Stack", "SQL", "System Design", "APIs"]}
                  link="https://github.com/manoj0246"
                />
                <ProjectCard
                  title="Predictive Sales Forecaster"
                  description="An ML model using historical data to predict future product sales, helping with inventory management."
                  tags={["Python", "TensorFlow", "Scikit-learn", "Pandas"]}
                  link="https://github.com/manoj0246"
                />
                <ProjectCard
                  title="Customer Churn Analysis"
                  description="A data analysis project to identify key factors leading to customer churn, providing actionable insights for retention strategies."
                  tags={["Data Analysis", "Python", "Pandas", "Visualization"]}
                  link="https://github.com/manoj0246"
                />
              </div>
            </div>
          </section>
          
          {/* Education Section */}
          <section id="education" className="section-medium">
              <div className="container">
                  <h2 className="section-title">Education</h2>
                  <div className="card education-card">
                      <div className="icon"><GraduationCap size={60} color="#06b6d4" /></div>
                      <div>
                          <h3>Bachelor of Technology, AI & Data Science</h3>
                          <p className="school">Vasireddy Venkatadri Institute of Technology</p>
                          <p className="date">2022 - 2026</p>
                      </div>
                  </div>
              </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="section-dark">
            <div className="container">
              <h2 className="section-title">Certifications</h2>
              <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3">
                {["Streamlining Your Work with Microsoft Copilot", "Tata Group - Cybersecurity Analyst Job Simulation", "Generative Al: The Evolution of Thoughtful Online Search", "AWS APAC - Solutions Architecture Job Simulation", "Ethics in the Age of Generative Al"].map((cert, index) => (
                  <div key={index} className="card cert-card">
                    <div className="icon"><Award size={30} color="#06b6d4" /></div>
                    <p>{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section-medium">
            <div className="container contact">
              <h2 className="section-title">Get In Touch</h2>
              <p>I'm currently seeking full-time Data Scientist or Machine Learning Engineer roles. If you have an opportunity or just want to connect, feel free to reach out!</p>
              <div className="contact-links">
                <a href="mailto:manojkarthik0246@gmail.com">
                  <Mail /> manojkarthik0246@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/manojkarthik-ai" target="_blank" rel="noopener noreferrer">
                  <Linkedin /> manojkarthik-ai
                </a>
                 <a href="https://github.com/manoj0246" target="_blank" rel="noopener noreferrer">
                  <Github /> manoj0246
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2025 Kesarapu Manoj Karthik. All Rights Reserved.</p>
            <p className="built-with">Built with React</p>
          </div>
        </footer>
      </div>
    </>
  );
};

// Reusable Skill Card Component
const SkillCard = ({ icon, title, description }) => (
    <div className="card skill-card">
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

// Reusable Project Card Component
const ProjectCard = ({ title, description, tags, link }) => (
  <div className="card project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="tags">
      {tags.map(tag => (
        <span key={tag} className="tag">{tag}</span>
      ))}
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer" className="link">
      View on GitHub &rarr;
    </a>
  </div>
);

export default App;
