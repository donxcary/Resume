const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Resume data API endpoint
app.get('/api/resume', (req, res) => {
  const resumeData = {
    personalInfo: {
      name: 'AKOTO NANA OFORI',
      title: 'WEB & GRAPHIC DESIGNER',
      profilePic: '/img/arctic_pkno.png',
      profile: 'Assists the department head in carrying out digital marketing campaigns. Works closely with the marketing head for digital promotions and others.'
    },
    contact: {
      phone: ['055 689 9957', '057 078 7889'],
      email: ['donxcary@gmail.com', 'donxcary@hotmail.com'],
      address: 'ENC Tema Naval Base'
    },
    skills: [
      { name: 'Programming', level: 90 },
      { name: 'Graphic Design', level: 98 },
      { name: 'Video Editing', level: 86 },
      { name: 'SEO', level: 60 },
      { name: 'Ethical Hacking', level: 75 },
      { name: 'Linux Manipulation', level: 97 },
      { name: 'Data Analysis', level: 85 },
      { name: 'Tech Support/ Assistant', level: 99 }
    ],
    certifications: [
      { title: 'Leading Seaman Promotional Course', organization: 'GHANA NAVY' },
      { title: 'Programming Hub Certificates', organization: 'Google Developers Launchpad' },
      { title: 'Front End Development', organization: 'ALX Software Engineering' },
      { title: 'Petty Officer Promotional Course', organization: 'GHANA NAVY' },
      { title: 'Instructors\' Cadre', organization: 'GHANA NAVY' },
      { title: 'Ethical Hacking Certificate', organization: 'Hackers X' },
      { title: 'And other Certs when requested', organization: '' }
    ],
    objective: 'I intend to apply highest level of ethics and professional standard in executing my duties and the realization of organizational goals.',
    personalTraits: [
      'Effective team player',
      'Good interpersonal relations and communications skills',
      'Ability to meet tight deadlines and working under pressure',
      'Dedicated to work',
      'Workload manager, juggling different tasks at once',
      'Prioritizing effectiveness',
      'Fast, assertive, protective and committed learner',
      'Competent user of the Microsoft Office Suite and Internet'
    ],
    education: [
      {
        years: '2005 - 2008',
        degree: 'West African Examination Certificate (WAEC)',
        institution: 'Presec Begoro - Ghana'
      },
      {
        years: '2012 - 2016',
        degree: 'Bachelor in Computer Science (BSC)',
        institution: 'University of Cape Coast - Ghana'
      }
    ],
    workExperience: [
      {
        title: 'WEB DESIGNER',
        company: 'PKAYNO TECH',
        period: 'January 2014 - Present',
        description: 'Responsible for designing and coding functional and aesthetically pleasing websites for clients across various industries.'
      },
      {
        title: 'GRAPHIC DESIGNER',
        company: 'GHANA NAVY',
        period: 'June 2011 - Present',
        description: 'Developed branding materials, logos, brochures, and marketing collateral for the Ghana Navy and the Armed Forces when the need be.'
      }
    ],
    references: [
      {
        name: 'David Nii Okan Okantey',
        title: 'Manager at SpiknardPlus Co.',
        phone: '024 447 1748',
        email: ['spiknardplus@hotmail.com', 'spiknardplus@gmail.com']
      },
      {
        name: 'Lawrence K. Ayelvae',
        title: 'Fleet Chief Petty Officer, Ghana Navy',
        phone: '024 325 8454',
        email: ['Lawrenceayelvae83@gmail.com']
      }
    ]
  };

  res.json(resumeData);
});

// Serve static files from img folder
app.use('/img', express.static(path.join(__dirname, 'img')));

// Serve React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
