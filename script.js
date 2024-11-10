// Certificates data
const certificates = [
    {
        title: "Introduction to SQL - SimpliLearn",
        image: "assets/img/sql-certificate.jpg",
    },
    {
        title: "Frontend Development - IBM SkillsBuild",
        image: "assets/img/frontend-certificate.jpg",
    },
    // Add more certificates as needed
];

// Projects data
const projects = [
    {
        title: "Melody Generator",
        description: "A music generator project built with HTML, CSS, and JavaScript.",
        image: "assets/img/project-melody.jpg",
    },
    {
        title: "Weather Website",
        description: "A weather website built using HTML, CSS, and JavaScript.",
        image: "assets/img/weather-website.jpg",
    },
    // Add more projects as needed
];

// Function to load certificates
function loadCertificates() {
    const certificateList = document.getElementById('certificate-list');
    certificates.forEach(cert => {
        const certItem = document.createElement('div');
        certItem.classList.add('certificate-item');

        const certImg = document.createElement('img');
        certImg.src = cert.image;
        certImg.alt = cert.title;

        const certTitle = document.createElement('p');
        certTitle.textContent = cert.title;

        certItem.appendChild(certImg);
        certItem.appendChild(certTitle);
        certificateList.appendChild(certItem);
    });
}

// Function to load projects
function loadProjects() {
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');

        const projectImg = document.createElement('img');
        projectImg.src = project.image;
        projectImg.alt = project.title;

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;

        const projectDesc = document.createElement('p');
        projectDesc.textContent = project.description;

        projectItem.appendChild(projectImg);
        projectItem.appendChild(projectTitle);
        projectItem.appendChild(projectDesc);
        projectList.appendChild(projectItem);
    });
}

// Load the certificates and projects on page load
window.onload = function() {
    loadCertificates();
    loadProjects();
};
