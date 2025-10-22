document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.timeline-item, .project-card, .skill-item, .cert-card, .internship-card, .contact-card, .resume-card, .summary-item');

    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    const downloadResumeBtn = document.getElementById('downloadResumeBtn');
    const viewResumeBtn = document.getElementById('viewResumeBtn');

    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', function() {
            const resumeContent = generateResumeContent();
            const blob = new Blob([resumeContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Jupudi_Kiran_Resume.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }

    if (viewResumeBtn) {
        viewResumeBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    function generateResumeContent() {
        return `JUPUDI KIRAN
Computer Science Engineering Student

Contact Information:
Phone: +91-9346082434
Email: jupudik4@gmail.com
GitHub: github.com/jupudi680
LinkedIn: Jupudi Kiran
Location: Chintalanarva, Andhra Pradesh - 521403, India

OBJECTIVE
I'm looking for a challenging role in the field of Computer Science Engineering where I can apply my skills in software development, data structures, and problem-solving. I'm eager to contribute to innovative projects that combine technology and creativity, especially in areas like web development, artificial intelligence, and cloud computing, where practical solutions can make a real impact.

EDUCATION
• Seshadri Rao Gudlavalleru Engineering College (2022 - 2026)
  B. Tech - Computer Science and Engineering
  Gudlavalleru, Andhra Pradesh
  CGPA: 7.27

• AP Model Junior College (2020 - 2022)
  Intermediate - MPC
  Krishna, Andhra Pradesh
  Grade: 60%

• AP Model School (2019 - 2020)
  Secondary Education
  Krishna, Andhra Pradesh
  GPA: 9.8

PROJECTS
• Classification of Student Performance Based on Academic and Behavioral Attributes: A KDD Approach
  Duration: 2022 - 2026
  Tools: Orange Tool, Visual Studio, SQL Server Management, Data Preprocessing, Data Mining, Data Visualization

  - Developed a KDD-based student performance classification model and predicted grades from academic and behavioral attributes
  - Utilized academic attributes: course difficulty, grades
  - Analyzed behavioral attributes: study hours, attendance, assignment submissions
  - Implemented a KDD-based classification process to analyze and predict student performance
  - Achieved accurate prediction of student grades and performance categories

• Next-Gen Healthcare
  Tools: NumPy, Pandas, scikit-learn, collections, tkinter

  - Created a machine learning-based disease prediction system with a user-friendly GUI for symptom-based diagnosis
  - Implemented symptom-based disease prediction using machine learning models with majority voting
  - Developed real-time input capability via GUI

SKILLS
Programming Languages: Java, Python
Web Technologies: HTML, CSS, JavaScript

CERTIFICATIONS
• Introduction to Industry 4.0 and Industrial - NPTEL
• Cyber Security Analyst - APSCHE
• Python Essentials - Cisco
• Java Full Stack - Great Learning

INTERNSHIPS
• Cyber Security Analyst - Smart Bridge
  Acquired extensive knowledge and practical skills in threat detection, network security, and blockchain technologies through 50+ interactive modules and simulations

• Generative AI with Cloud - IBM Cloud
  Completed short-term internship focused on Generative AI using IBM Cloud. Worked on AI model creation, deployment, and cloud-based solutions. Created portfolio using HTML, CSS, and JavaScript.
`;
    }

    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    const techTags = document.querySelectorAll('.tech-tag');
    techTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});