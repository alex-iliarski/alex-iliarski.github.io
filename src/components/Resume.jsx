import React from 'react'
import './Resume.css'

function Resume() {
  const resumeData = {
    summary: "Passionate software engineer with expertise in web development and modern technologies.",
    contact: {
      email: "alex.iliarski@example.com",
      location: "United States"
    },
    experience: [
      {
        title: "Software Engineer",
        company: "Tech Company",
        period: "2020 - Present",
        description: [
          "Developed and maintained web applications using React and Node.js",
          "Collaborated with cross-functional teams to deliver high-quality products",
          "Implemented responsive designs and optimized performance"
        ]
      },
      {
        title: "Junior Developer",
        company: "Startup Inc.",
        period: "2018 - 2020",
        description: [
          "Built features for customer-facing web applications",
          "Participated in code reviews and agile development practices",
          "Contributed to technical documentation"
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "University Name",
        year: "2018"
      }
    ],
    skills: [
      "JavaScript/TypeScript",
      "React.js",
      "Node.js",
      "HTML/CSS",
      "Git",
      "REST APIs",
      "Responsive Design",
      "Agile/Scrum"
    ]
  }

  return (
    <main className="resume">
      <div className="resume-container">
        <section className="resume-section">
          <h2 className="section-title">Summary</h2>
          <p className="summary-text">{resumeData.summary}</p>
        </section>

        <section className="resume-section">
          <h2 className="section-title">Contact</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <span className="contact-value">{resumeData.contact.email}</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location:</span>
              <span className="contact-value">{resumeData.contact.location}</span>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">Experience</h2>
          {resumeData.experience.map((job, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3 className="job-title">{job.title}</h3>
                <span className="job-period">{job.period}</span>
              </div>
              <p className="company-name">{job.company}</p>
              <ul className="job-description">
                {job.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="section-title">Education</h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="education-item">
              <h3 className="degree">{edu.degree}</h3>
              <p className="school">{edu.school}</p>
              <p className="year">{edu.year}</p>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            {resumeData.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Resume
