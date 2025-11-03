import React from 'react';
import './Resume.css';

const Resume = ({ data }) => {
  return (
    <div className="container">
      <div className="left-column">
        <img 
          src={data.personalInfo.profilePic} 
          alt="Profile Picture" 
          className="profile-pic"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        
        <div className="section-content">
          <div className="section-title">
            <h3>PROFILE<hr /></h3>
          </div>
          <p>{data.personalInfo.profile}</p>
        </div>

        <div className="section-content">
          <div className="section-title">
            <h3>SKILLS<hr /></h3>
          </div>
          {data.skills.map((skill, index) => (
            <div key={index}>
              <p>{skill.name}</p>
              <div className="skills-bar">
                <span style={{ width: `${skill.level}%` }}></span>
              </div>
            </div>
          ))}
        </div>

        <div className="section-content">
          <div className="section-title">CERTIFICATIONS</div>
          {data.certifications.map((cert, index) => (
            <p key={index}>
              {cert.title}
              {cert.organization && (
                <>
                  <br />
                  <strong>{cert.organization}</strong>
                </>
              )}
            </p>
          ))}
        </div>
      </div>

      <div className="right-column">
        <h1>{data.personalInfo.name}</h1>
        <h2>{data.personalInfo.title}</h2>

        <div className="contact-info">
          <div>
            <h4>PHONE<hr /></h4>
            {data.contact.phone.map((phone, index) => (
              <p key={index}>{phone}</p>
            ))}
          </div>
          <div>
            <h4>EMAIL<hr /></h4>
            {data.contact.email.map((email, index) => (
              <p key={index}>{email}</p>
            ))}
          </div>
          <div>
            <h4>ADDRESS<hr /></h4>
            <p>{data.contact.address}</p>
          </div>
        </div>

        <div className="section-content objective">
          <div className="section-title">OBJECTIVE<hr /></div>
          <p>{data.objective}</p>
        </div>

        <div className="section-content personal-traits">
          <div className="section-title">PERSONAL TRAITS</div>
          <hr />
          <ul>
            {data.personalTraits.map((trait, index) => (
              <li key={index}>{trait}</li>
            ))}
          </ul>
        </div>

        <div className="section-content">
          <div className="section-title">EDUCATION HISTORY</div>
          <hr />
          {data.education.map((edu, index) => (
            <p key={index}>
              {edu.years}
              <br />
              {edu.degree}
              <br />
              {edu.institution}
            </p>
          ))}
        </div>

        <div className="section-content work-experience">
          <div className="section-title">WORK EXPERIENCE</div>
          <hr />
          {data.workExperience.map((work, index) => (
            <div key={index}>
              <strong>
                <li>{work.title}, {work.company}</li>
              </strong>
              <p>
                {work.period}
                <br />
                {work.description}
              </p>
            </div>
          ))}
        </div>

        <div className="section-content references">
          {data.references.map((ref, index) => (
            <div key={index}>
              <h3>REFERENCE {index + 1}</h3>
              <p>
                {ref.name}
                <br />
                {ref.title}
                <br />
                {ref.phone}
                <br />
                {ref.email.map((email, idx) => (
                  <React.Fragment key={idx}>
                    {email}
                    {idx < ref.email.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
