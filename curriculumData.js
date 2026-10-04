/**
 * ResultSeal — NEC Curriculum Data (Regulation 2023)
 * National Engineering College (NEC), K.R. Nagar, Kovilpatti
 * 
 * Contains 8-semester course structures (167 total credits) for 7 departments:
 * - CSE: Computer Science and Engineering
 * - ECE: Electronics and Communication Engineering
 * - EEE: Electrical and Electronics Engineering
 * - IT: Information Technology
 * - AD: Artificial Intelligence and Data Science
 * - CE: Civil Engineering
 * - ME: Mechanical Engineering
 */

const CURRICULUM_DATA = {
  CSE: {
    department: "Computer Science and Engineering",
    department_code: "CSE",
    college: "National Engineering College, K.R. Nagar, Kovilpatti",
    regulation: "R-2023",
    total_credits: 167,
    semesters: {
      1: {
        total_credits: 22,
        subjects: [
          { code: "23SH11C", title: "Technical English", category: "HSMC", credits: 3 },
          { code: "23SH12C", title: "Matrices and Calculus", category: "BSC", credits: 4 },
          { code: "23SH13C", title: "Engineering Physics", category: "BSC", credits: 3 },
          { code: "23SH14C", title: "Engineering Chemistry", category: "BSC", credits: 3 },
          { code: "23CS11C", title: "Problem Solving and Python Programming", category: "ESC", credits: 4 },
          { code: "23CS12C", title: "Python Programming Laboratory", category: "ESC", credits: 2 },
          { code: "23SH15C", title: "Physics & Chemistry Laboratory", category: "BSC", credits: 2 },
          { code: "23MC01C", title: "Environmental Science and Sustainability", category: "MC", credits: 0 }
        ]
      },
      2: {
        total_credits: 22,
        subjects: [
          { code: "23SH21C", title: "Professional English II", category: "HSMC", credits: 3 },
          { code: "23SH22C", title: "Transforms and Partial Differential Equations", category: "BSC", credits: 4 },
          { code: "23CS21C", title: "Programming in C", category: "PCC", credits: 3 },
          { code: "23EE21C", title: "Basic Electrical and Electronics Engineering", category: "ESC", credits: 3 },
          { code: "23ME11C", title: "Engineering Graphics", category: "ESC", credits: 4 },
          { code: "23CS22C", title: "C Programming Laboratory", category: "PCC", credits: 2 },
          { code: "23EM21C", title: "Engineering Practices Laboratory", category: "ESC", credits: 2 },
          { code: "23MC02C", title: "Constitution of India", category: "MC", credits: 0 }
        ]
      },
      3: {
        total_credits: 23,
        subjects: [
          { code: "23CS31C", title: "Discrete Mathematics", category: "BSC", credits: 4 },
          { code: "23CS32C", title: "Data Structures", category: "PCC", credits: 3 },
          { code: "23CS33C", title: "Digital Principles and Computer Organization", category: "PCC", credits: 4 },
          { code: "23CS34C", title: "Object Oriented Programming in Java", category: "PCC", credits: 3 },
          { code: "23CS35C", title: "Software Engineering", category: "PCC", credits: 3 },
          { code: "23CS36C", title: "Data Structures Laboratory", category: "PCC", credits: 2 },
          { code: "23CS37C", title: "Java Programming Laboratory", category: "PCC", credits: 2 },
          { code: "23MC03C", title: "Heritage of Tamils / Indian Culture", category: "MC", credits: 0 }
        ]
      },
      4: {
        total_credits: 24,
        subjects: [
          { code: "23CS41C", title: "Probability and Statistics", category: "BSC", credits: 4 },
          { code: "23CS42C", title: "Database Management Systems", category: "PCC", credits: 3 },
          { code: "23CS43C", title: "Operating Systems", category: "PCC", credits: 3 },
          { code: "23CS44C", title: "Design and Analysis of Algorithms", category: "PCC", credits: 4 },
          { code: "23CS45C", title: "Theory of Computation", category: "PCC", credits: 4 },
          { code: "23CS46C", title: "Database Management Systems Laboratory", category: "PCC", credits: 2 },
          { code: "23CS47C", title: "Operating Systems Laboratory", category: "PCC", credits: 2 },
          { code: "23SE01C", title: "Science Elective", category: "BSC", credits: 2, isElective: true }
        ]
      },
      5: {
        total_credits: 22,
        subjects: [
          { code: "23CS51C", title: "Computer Networks", category: "PCC", credits: 3 },
          { code: "23CS52C", title: "Compiler Design", category: "PCC", credits: 4 },
          { code: "23CS53C", title: "Artificial Intelligence & Machine Learning", category: "PCC", credits: 3 },
          { code: "23CSPE1", title: "Program Elective I", category: "PEC", credits: 3, isElective: true },
          { code: "23CSPE2", title: "Program Elective II", category: "PEC", credits: 3, isElective: true },
          { code: "23CS54C", title: "Networks & AI Laboratory", category: "PCC", credits: 2 },
          { code: "23CS55C", title: "Mini Project / Creative Project", category: "EEC", credits: 2 }
        ]
      },
      6: {
        total_credits: 22,
        subjects: [
          { code: "23CS61C", title: "Cryptography and Network Security", category: "PCC", credits: 3 },
          { code: "23CS62C", title: "Cloud Computing and DevOps", category: "PCC", credits: 3 },
          { code: "23CSPE3", title: "Program Elective III", category: "PEC", credits: 3, isElective: true },
          { code: "23CSPE4", title: "Program Elective IV", category: "PEC", credits: 3, isElective: true },
          { code: "23CSOE1", title: "Open Elective I", category: "OEC", credits: 3, isElective: true },
          { code: "23CS63C", title: "Cloud & Security Laboratory", category: "PCC", credits: 2 },
          { code: "23CS64C", title: "Mobile Application Development Lab", category: "PCC", credits: 2 }
        ]
      },
      7: {
        total_credits: 20,
        subjects: [
          { code: "23CS71C", title: "Full Stack Web Development", category: "PCC", credits: 3 },
          { code: "23CSPE5", title: "Program Elective V", category: "PEC", credits: 3, isElective: true },
          { code: "23CSPE6", title: "Program Elective VI", category: "PEC", credits: 3, isElective: true },
          { code: "23CSOE2", title: "Open Elective II", category: "OEC", credits: 3, isElective: true },
          { code: "23CSOE3", title: "Open Elective III", category: "OEC", credits: 3, isElective: true },
          { code: "23CS72C", title: "Full Stack Web Development Lab", category: "PCC", credits: 2 },
          { code: "23CS73C", title: "Industrial Training / Internship", category: "EEC", credits: 3 }
        ]
      },
      8: {
        total_credits: 12,
        subjects: [
          { code: "23CS81C", title: "Project Work / Dissertation", category: "EEC", credits: 10 },
          { code: "23CS82C", title: "Professional Ethics and Human Values", category: "HSMC", credits: 2 }
        ]
      }
    }
  },

  ECE: {
    department: "Electronics and Communication Engineering",
    department_code: "ECE",
    college: "National Engineering College, K.R. Nagar, Kovilpatti",
    regulation: "R-2023",
    total_credits: 167,
    semesters: {
      1: {
        total_credits: 22,
        subjects: [
          { code: "23SH11C", title: "Professional English I", category: "HSMC", credits: 3 },
          { code: "23SH12C", title: "Matrices and Calculus", category: "BSC", credits: 4 },
          { code: "23SH13C", title: "Engineering Physics", category: "BSC", credits: 3 },
          { code: "23SH14C", title: "Engineering Chemistry", category: "BSC", credits: 3 },
          { code: "23EC11C", title: "Circuit Theory", category: "ESC", credits: 4 },
          { code: "23EC12C", title: "Circuit Theory Laboratory", category: "ESC", credits: 2 },
          { code: "23SH15C", title: "Physics & Chemistry Laboratory", category: "BSC", credits: 2 },
          { code: "23MC01C", title: "Environmental Science and Sustainability", category: "MC", credits: 0 }
        ]
      },
      2: {
        total_credits: 22,
        subjects: [
          { code: "23SH21C", title: "Professional English II", category: "HSMC", credits: 3 },
          { code: "23SH22C", title: "Vector Calculus and Complex Integration", category: "BSC", credits: 4 },
          { code: "23EC21C", title: "Electronic Devices", category: "PCC", credits: 3 },
          { code: "23CS21C", title: "Programming in C", category: "ESC", credits: 3 },
          { code: "23ME11C", title: "Engineering Graphics", category: "ESC", credits: 4 },
          { code: "23EC22C", title: "Electronic Devices Laboratory", category: "PCC", credits: 2 },
          { code: "23EM21C", title: "Engineering Practices Laboratory", category: "ESC", credits: 2 },
          { code: "23MC02C", title: "Constitution of India", category: "MC", credits: 0 }
        ]
      },
      3: {
        total_credits: 23,
        subjects: [
          { code: "23EC31C", title: "Signals and Systems", category: "BSC", credits: 4 },
          { code: "23EC32C", title: "Electronic Circuits I", category: "PCC", credits: 3 },
          { code: "23EC33C", title: "Digital Electronics", category: "PCC", credits: 4 },
          { code: "23EC34C", title: "Electromagnetic Fields", category: "PCC", credits: 3 },
          { code: "23EC35C", title: "Data Structures & C++", category: "ESC", credits: 3 },
          { code: "23EC36C", title: "Analog & Digital Circuits Lab", category: "PCC", credits: 2 },
          { code: "23EC37C", title: "Object Oriented Programming Lab", category: "ESC", credits: 2 },
          { code: "23MC03C", title: "Heritage of Tamils", category: "MC", credits: 0 }
        ]
      },
      4: {
        total_credits: 24,
        subjects: [
          { code: "23EC41C", title: "Linear Algebra & Random Processes", category: "BSC", credits: 4 },
          { code: "23EC42C", title: "Analog Communication", category: "PCC", credits: 3 },
          { code: "23EC43C", title: "Electronic Circuits II", category: "PCC", credits: 3 },
          { code: "23EC44C", title: "Linear Integrated Circuits", category: "PCC", credits: 4 },
          { code: "23EC45C", title: "Transmission Lines and Waveguides", category: "PCC", credits: 4 },
          { code: "23EC46C", title: "Linear Integrated Circuits Laboratory", category: "PCC", credits: 2 },
          { code: "23EC47C", title: "Analog Communication Laboratory", category: "PCC", credits: 2 },
          { code: "23SE01C", title: "Science Elective", category: "BSC", credits: 2, isElective: true }
        ]
      },
      5: {
        total_credits: 22,
        subjects: [
          { code: "23EC51C", title: "Digital Signal Processing", category: "PCC", credits: 4 },
          { code: "23EC52C", title: "Digital Communication", category: "PCC", credits: 3 },
          { code: "23EC53C", title: "Microprocessors and Microcontrollers", category: "PCC", credits: 3 },
          { code: "23ECPE1", title: "Program Elective I", category: "PEC", credits: 3, isElective: true },
          { code: "23ECPE2", title: "Program Elective II", category: "PEC", credits: 3, isElective: true },
          { code: "23EC54C", title: "DSP & Microcontroller Lab", category: "PCC", credits: 2 },
          { code: "23EC55C", title: "Mini Project", category: "EEC", credits: 2 }
        ]
      },
      6: {
        total_credits: 22,
        subjects: [
          { code: "23EC61C", title: "VLSI Design", category: "PCC", credits: 4 },
          { code: "23EC62C", title: "Wireless Communication", category: "PCC", credits: 3 },
          { code: "23ECPE3", title: "Program Elective III", category: "PEC", credits: 3, isElective: true },
          { code: "23ECPE4", title: "Program Elective IV", category: "PEC", credits: 3, isElective: true },
          { code: "23ECOE1", title: "Open Elective I", category: "OEC", credits: 3, isElective: true },
          { code: "23EC63C", title: "VLSI & Wireless Lab", category: "PCC", credits: 2 },
          { code: "23EC64C", title: "Embedded Systems Laboratory", category: "PCC", credits: 2 }
        ]
      },
      7: {
        total_credits: 20,
        subjects: [
          { code: "23EC71C", title: "Optical Communication & Networks", category: "PCC", credits: 3 },
          { code: "23ECPE5", title: "Program Elective V", category: "PEC", credits: 3, isElective: true },
          { code: "23ECPE6", title: "Program Elective VI", category: "PEC", credits: 3, isElective: true },
          { code: "23ECOE2", title: "Open Elective II", category: "OEC", credits: 3, isElective: true },
          { code: "23ECOE3", title: "Open Elective III", category: "OEC", credits: 3, isElective: true },
          { code: "23EC72C", title: "Optical & Microwave Lab", category: "PCC", credits: 2 },
          { code: "23EC73C", title: "Industrial Training / Internship", category: "EEC", credits: 3 }
        ]
      },
      8: {
        total_credits: 12,
        subjects: [
          { code: "23EC81C", title: "Project Work", category: "EEC", credits: 10 },
          { code: "23EC82C", title: "Professional Ethics and Human Values", category: "HSMC", credits: 2 }
        ]
      }
    }
  },

  EEE: {
    department: "Electrical and Electronics Engineering",
    department_code: "EEE",
    college: "National Engineering College, K.R. Nagar, Kovilpatti",
    regulation: "R-2023",
    total_credits: 167,
    semesters: {
      1: {
        total_credits: 22,
        subjects: [
          { code: "23SH11C", title: "Professional English I", category: "HSMC", credits: 3 },
          { code: "23SH12C", title: "Matrices and Calculus", category: "BSC", credits: 4 },
          { code: "23SH13C", title: "Engineering Physics", category: "BSC", credits: 3 },
          { code: "23SH14C", title: "Engineering Chemistry", category: "BSC", credits: 3 },
          { code: "23EE11C", title: "Electric Circuit Analysis", category: "ESC", credits: 4 },
          { code: "23EE12C", title: "Electric Circuits Laboratory", category: "ESC", credits: 2 },
          { code: "23SH15C", title: "Physics & Chemistry Laboratory", category: "BSC", credits: 2 },
          { code: "23MC01C", title: "Environmental Science and Sustainability", category: "MC", credits: 0 }
        ]
      },
      2: {
        total_credits: 22,
        subjects: [
          { code: "23SH21C", title: "Professional English II", category: "HSMC", credits: 3 },
          { code: "23SH22C", title: "Differential Equations & Complex Variables", category: "BSC", credits: 4 },
          { code: "23EE21C", title: "Electromagnetic Theory", category: "PCC", credits: 3 },
          { code: "23CS21C", title: "Programming in C", category: "ESC", credits: 3 },
          { code: "23ME11C", title: "Engineering Graphics", category: "ESC", credits: 4 },
          { code: "23EE22C", title: "Electrical Measurements Laboratory", category: "PCC", credits: 2 },
          { code: "23EM21C", title: "Engineering Practices Laboratory", category: "ESC", credits: 2 },
          { code: "23MC02C", title: "Constitution of India", category: "MC", credits: 0 }
        ]
      },
      3: {
        total_credits: 23,
        subjects: [
          { code: "23EE31C", title: "Numerical Methods", category: "BSC", credits: 4 },
          { code: "23EE32C", title: "Electrical Machines I", category: "PCC", credits: 4 },
          { code: "23EE33C", title: "Analog Electronics", category: "PCC", credits: 3 },
          { code: "23EE34C", title: "Digital Logic Circuits", category: "PCC", credits: 3 },
          { code: "23CS34C", title: "Object Oriented Programming in C++", category: "ESC", credits: 3 },
          { code: "23EE35C", title: "Electrical Machines Lab I", category: "PCC", credits: 2 },
          { code: "23EE36C", title: "Analog & Digital Electronics Lab", category: "PCC", credits: 2 },
          { code: "23MC03C", title: "Heritage of Tamils", category: "MC", credits: 0 }
        ]
      },
      4: {
        total_credits: 24,
        subjects: [
          { code: "23EE41C", title: "Electrical Machines II", category: "PCC", credits: 4 },
          { code: "23EE42C", title: "Transmission and Distribution", category: "PCC", credits: 4 },
          { code: "23EE43C", title: "Linear Integrated Circuits", category: "PCC", credits: 3 },
          { code: "23EE44C", title: "Control Systems", category: "PCC", credits: 4 },
          { code: "23EE45C", title: "Measurements and Instrumentation", category: "PCC", credits: 3 },
          { code: "23EE46C", title: "Electrical Machines Lab II", category: "PCC", credits: 2 },
          { code: "23EE47C", title: "Control & Instrumentation Lab", category: "PCC", credits: 2 },
          { code: "23SE01C", title: "Science Elective", category: "BSC", credits: 2, isElective: true }
        ]
      },
      5: {
        total_credits: 22,
        subjects: [
          { code: "23EE51C", title: "Power Electronics", category: "PCC", credits: 4 },
          { code: "23EE52C", title: "Power System Analysis", category: "PCC", credits: 4 },
          { code: "23EE53C", title: "Microprocessors & Microcontrollers", category: "PCC", credits: 3 },
          { code: "23EEPE1", title: "Program Elective I", category: "PEC", credits: 3, isElective: true },
          { code: "23EEPE2", title: "Program Elective II", category: "PEC", credits: 3, isElective: true },
          { code: "23EE54C", title: "Power Electronics & Simulation Lab", category: "PCC", credits: 2 },
          { code: "23EE55C", title: "Mini Project", category: "EEC", credits: 2 }
        ]
      },
      6: {
        total_credits: 22,
        subjects: [
          { code: "23EE61C", title: "Power System Protection & Switchgear", category: "PCC", credits: 3 },
          { code: "23EE62C", title: "Solid State Drives", category: "PCC", credits: 3 },
          { code: "23EEPE3", title: "Program Elective III", category: "PEC", credits: 3, isElective: true },
          { code: "23EEPE4", title: "Program Elective IV", category: "PEC", credits: 3, isElective: true },
          { code: "23EEOE1", title: "Open Elective I", category: "OEC", credits: 3, isElective: true },
          { code: "23EE63C", title: "Power System Simulation Lab", category: "PCC", credits: 2 },
          { code: "23EE64C", title: "Microcontroller & Drives Lab", category: "PCC", credits: 2 }
        ]
      },
      7: {
        total_credits: 20,
        subjects: [
          { code: "23EE71C", title: "Renewable Energy Systems", category: "PCC", credits: 3 },
          { code: "23EEPE5", title: "Program Elective V", category: "PEC", credits: 3, isElective: true },
          { code: "23EEPE6", title: "Program Elective VI", category: "PEC", credits: 3, isElective: true },
          { code: "23EEOE2", title: "Open Elective II", category: "OEC", credits: 3, isElective: true },
          { code: "23EEOE3", title: "Open Elective III", category: "OEC", credits: 3, isElective: true },
          { code: "23EE72C", title: "Renewable Energy & IoT Lab", category: "PCC", credits: 2 },
          { code: "23EE73C", title: "Industrial Training / Internship", category: "EEC", credits: 3 }
        ]
      },
      8: {
        total_credits: 12,
        subjects: [
          { code: "23EE81C", title: "Project Work", category: "EEC", credits: 10 },
          { code: "23EE82C", title: "Professional Ethics and Human Values", category: "HSMC", credits: 2 }
        ]
      }
    }
  },

  IT: {
    department: "Information Technology",
    department_code: "IT",
    college: "National Engineering College, K.R. Nagar, Kovilpatti",
    regulation: "R-2023",
    total_credits: 167,
    semesters: {
      1: {
        total_credits: 22,
        subjects: [
          { code: "23SH11C", title: "Professional English I", category: "HSMC", credits: 3 },
          { code: "23SH12C", title: "Matrices and Calculus", category: "BSC", credits: 4 },
          { code: "23SH13C", title: "Engineering Physics", category: "BSC", credits: 3 },
          { code: "23SH14C", title: "Engineering Chemistry", category: "BSC", credits: 3 },
          { code: "23IT11C", title: "Programming for Problem Solving", category: "ESC", credits: 4 },
          { code: "23IT12C", title: "Programming Laboratory", category: "ESC", credits: 2 },
          { code: "23SH15C", title: "Physics & Chemistry Laboratory", category: "BSC", credits: 2 },
          { code: "23MC01C", title: "Environmental Science and Sustainability", category: "MC", credits: 0 }
        ]
      },
      2: {
        total_credits: 22,
        subjects: [
          { code: "23SH21C", title: "Professional English II", category: "HSMC", credits: 3 },
          { code: "23SH22C", title: "Discrete Mathematics for IT", category: "BSC", credits: 4 },
          { code: "23IT21C", title: "Python for Data Science", category: "PCC", credits: 3 },
          { code: "23EE21C", title: "Basic Electrical & Electronics", category: "ESC", credits: 3 },
          { code: "23ME11C", title: "Engineering Graphics", category: "ESC", credits: 4 },
          { code: "23IT22C", title: "Python & Data Science Lab", category: "PCC", credits: 2 },
          { code: "23EM21C", title: "Engineering Practices Laboratory", category: "ESC", credits: 2 },
          { code: "23MC02C", title: "Constitution of India", category: "MC", credits: 0 }
        ]
      },
      3: {
        total_credits: 23,
        subjects: [
          { code: "23IT31C", title: "Data Structures and Algorithms", category: "PCC", credits: 4 },
          { code: "23IT32C", title: "Object Oriented Programming with Java", category: "PCC", credits: 3 },
          { code: "23IT33C", title: "Computer Organization and Architecture", category: "PCC", credits: 3 },
          { code: "23IT34C", title: "Operating Systems Principles", category: "PCC", credits: 3 },
          { code: "23IT35C", title: "Software Engineering & Agile", category: "PCC", credits: 4 },
          { code: "23IT36C", title: "Data Structures & Java Lab", category: "PCC", credits: 2 },
          { code: "23IT37C", title: "OS and Linux Systems Lab", category: "PCC", credits: 2 },
          { code: "23MC03C", title: "Heritage of Tamils", category: "MC", credits: 0 }
        ]
      },
      4: {
        total_credits: 24,
        subjects: [
          { code: "23IT41C", title: "Probability and Queuing Theory", category: "BSC", credits: 4 },
          { code: "23IT42C", title: "Database Management Systems", category: "PCC", credits: 4 },
          { code: "23IT43C", title: "Design and Analysis of Algorithms", category: "PCC", credits: 4 },
          { code: "23IT44C", title: "Web Technology Fundamentals", category: "PCC", credits: 3 },
          { code: "23IT45C", title: "Computer Communication Networks", category: "PCC", credits: 3 },
          { code: "23IT46C", title: "DBMS Laboratory", category: "PCC", credits: 2 },
          { code: "23IT47C", title: "Web Technology Laboratory", category: "PCC", credits: 2 },
          { code: "23SE01C", title: "Science Elective", category: "BSC", credits: 2, isElective: true }
        ]
      },
      5: {
        total_credits: 22,
        subjects: [
          { code: "23IT51C", title: "Information Security & Cryptography", category: "PCC", credits: 4 },
          { code: "23IT52C", title: "Full Stack Frameworks", category: "PCC", credits: 3 },
          { code: "23IT53C", title: "Artificial Intelligence Fundamentals", category: "PCC", credits: 3 },
          { code: "23ITPE1", title: "Program Elective I", category: "PEC", credits: 3, isElective: true },
          { code: "23ITPE2", title: "Program Elective II", category: "PEC", credits: 3, isElective: true },
          { code: "23IT54C", title: "Full Stack Development Lab", category: "PCC", credits: 2 },
          { code: "23IT55C", title: "Mini Project", category: "EEC", credits: 2 }
        ]
      },
      6: {
        total_credits: 22,
        subjects: [
          { code: "23IT61C", title: "Cloud Computing Architectures", category: "PCC", credits: 3 },
          { code: "23IT62C", title: "Mobile Application Development", category: "PCC", credits: 3 },
          { code: "23ITPE3", title: "Program Elective III", category: "PEC", credits: 3, isElective: true },
          { code: "23ITPE4", title: "Program Elective IV", category: "PEC", credits: 3, isElective: true },
          { code: "23ITOE1", title: "Open Elective I", category: "OEC", credits: 3, isElective: true },
          { code: "23IT63C", title: "Cloud & Microservices Lab", category: "PCC", credits: 2 },
          { code: "23IT64C", title: "Mobile Apps Lab", category: "PCC", credits: 2 }
        ]
      },
      7: {
        total_credits: 20,
        subjects: [
          { code: "23IT71C", title: "Big Data Analytics", category: "PCC", credits: 3 },
          { code: "23ITPE5", title: "Program Elective V", category: "PEC", credits: 3, isElective: true },
          { code: "23ITPE6", title: "Program Elective VI", category: "PEC", credits: 3, isElective: true },
          { code: "23ITOE2", title: "Open Elective II", category: "OEC", credits: 3, isElective: true },
          { code: "23ITOE3", title: "Open Elective III", category: "OEC", credits: 3, isElective: true },
          { code: "23IT72C", title: "Big Data & AI Lab", category: "PCC", credits: 2 },
          { code: "23IT73C", title: "Industrial Internship", category: "EEC", credits: 3 }
        ]
      },
      8: {
        total_credits: 12,
        subjects: [
          { code: "23IT81C", title: "Capstone Project Work", category: "EEC", credits: 10 },
          { code: "23IT82C", title: "Professional Ethics in IT", category: "HSMC", credits: 2 }
        ]
      }
    }
  },

  AD: {
    department: "Artificial Intelligence and Data Science",
    department_code: "AD",
    college: "National Engineering College, K.R. Nagar, Kovilpatti",
    regulation: "R-2023",
    total_credits: 167,
    semesters: {
      1: {
        total_credits: 22,
        subjects: [
          { code: "23SH11C", title: "Professional English I", category: "HSMC", credits: 3 },
          { code: "23SH12C", title: "Linear Algebra & Calculus", category: "BSC", credits: 4 },
          { code: "23SH13C", title: "Engineering Physics", category: "BSC", credits: 3 },
          { code: "23SH14C", title: "Engineering Chemistry", category: "BSC", credits: 3 },
          { code: "23AD11C", title: "Python Programming for AI", category: "ESC", credits: 4 },
          { code: "23AD12C", title: "Python for AI Laboratory", category: "ESC", credits: 2 },
          { code: "23SH15C", title: "Physics & Chemistry Laboratory", category: "BSC", credits: 2 },
          { code: "23MC01C", title: "Environmental Science", category: "MC", credits: 0 }
        ]
      },
      2: {
        total_credits: 22,
        subjects: [
          { code: "23SH21C", title: "Professional English II", category: "HSMC", credits: 3 },
          { code: "23AD21C", title: "Probability & Inferential Statistics", category: "BSC", credits: 4 },
          { code: "23AD22C", title: "Data Structures in C++", category: "PCC", credits: 3 },
          { code: "23EE21C", title: "Basic Electrical and Electronics", category: "ESC", credits: 3 },
          { code: "23ME11C", title: "Engineering Graphics", category: "ESC", credits: 4 },
          { code: "23AD23C", title: "Data Structures Laboratory", category: "PCC", credits: 2 },
          { code: "23EM21C", title: "Engineering Practices Laboratory", category: "ESC", credits: 2 },
          { code: "23MC02C", title: "Constitution of India", category: "MC", credits: 0 }
        ]
      },
      3: {
        total_credits: 23,
        subjects: [
          { code: "23AD31C", title: "Discrete Structures and Logic", category: "BSC", credits: 4 },
          { code: "23AD32C", title: "Artificial Intelligence Principles", category: "PCC", credits: 4 },
          { code: "23AD33C", title: "Database Systems & SQL", category: "PCC", credits: 3 },
          { code: "23AD34C", title: "Design & Analysis of Algorithms", category: "PCC", credits: 3 },
          { code: "23AD35C", title: "Object Oriented Programming in Java", category: "PCC", credits: 3 },
          { code: "23AD36C", title: "AI & Search Algorithms Lab", category: "PCC", credits: 2 },
          { code: "23AD37C", title: "DBMS & SQL Laboratory", category: "PCC", credits: 2 },
          { code: "23MC03C", title: "Heritage of Tamils", category: "MC", credits: 0 }
        ]
      },
      4: {
        total_credits: 24,
        subjects: [
          { code: "23AD41C", title: "Optimization Techniques in AI", category: "BSC", credits: 4 },
          { code: "23AD42C", title: "Machine Learning Fundamentals", category: "PCC", credits: 4 },
          { code: "23AD43C", title: "Data Visualization & Exploration", category: "PCC", credits: 3 },
          { code: "23AD44C", title: "Operating Systems & Shell Scripting", category: "PCC", credits: 3 },
          { code: "23AD45C", title: "Computer Networks & IoT", category: "PCC", credits: 4 },
          { code: "23AD46C", title: "Machine Learning Laboratory", category: "PCC", credits: 2 },
          { code: "23AD47C", title: "Data Visualization Laboratory", category: "PCC", credits: 2 },
          { code: "23SE01C", title: "Science Elective", category: "BSC", credits: 2, isElective: true }
        ]
      },
      5: {
        total_credits: 22,
        subjects: [
          { code: "23AD51C", title: "Deep Learning & Neural Networks", category: "PCC", credits: 4 },
          { code: "23AD52C", title: "Natural Language Processing", category: "PCC", credits: 3 },
          { code: "23AD53C", title: "Big Data Architectures", category: "PCC", credits: 3 },
          { code: "23ADPE1", title: "Program Elective I", category: "PEC", credits: 3, isElective: true },
          { code: "23ADPE2", title: "Program Elective II", category: "PEC", credits: 3, isElective: true },
          { code: "23AD54C", title: "Deep Learning & NLP Lab", category: "PCC", credits: 2 },
          { code: "23AD55C", title: "Mini Project", category: "EEC", credits: 2 }
        ]
      },
      6: {
        total_credits: 22,
        subjects: [
          { code: "23AD61C", title: "Computer Vision & Pattern Recognition", category: "PCC", credits: 3 },
          { code: "23AD62C", title: "Reinforcement Learning", category: "PCC", credits: 3 },
          { code: "23ADPE3", title: "Program Elective III", category: "PEC", credits: 3, isElective: true },
          { code: "23ADPE4", title: "Program Elective IV", category: "PEC", credits: 3, isElective: true },
          { code: "23ADOE1", title: "Open Elective I", category: "OEC", credits: 3, isElective: true },
          { code: "23AD63C", title: "Computer Vision Laboratory", category: "PCC", credits: 2 },
          { code: "23AD64C", title: "AI Application Development Lab", category: "PCC", credits: 2 }
        ]
      },
      7: {
        total_credits: 20,
        subjects: [
          { code: "23AD71C", title: "Generative AI & LLMs", category: "PCC", credits: 3 },
          { code: "23ADPE5", title: "Program Elective V", category: "PEC", credits: 3, isElective: true },
          { code: "23ADPE6", title: "Program Elective VI", category: "PEC", credits: 3, isElective: true },
          { code: "23ADOE2", title: "Open Elective II", category: "OEC", credits: 3, isElective: true },
          { code: "23ADOE3", title: "Open Elective III", category: "OEC", credits: 3, isElective: true },
          { code: "23AD72C", title: "GenAI & Prompt Engineering Lab", category: "PCC", credits: 2 },
          { code: "23AD73C", title: "Industrial Internship", category: "EEC", credits: 3 }
        ]
      },
      8: {
        total_credits: 12,
        subjects: [
          { code: "23AD81C", title: "Major Project / Dissertation", category: "EEC", credits: 10 },
          { code: "23AD82C", title: "Ethics & Responsible AI", category: "HSMC", credits: 2 }
        ]
      }
    }
  },

  CE: {
    department: "Civil Engineering",
    department_code: "CE",
    college: "National Engineering College, K.R. Nagar, Kovilpatti",
    regulation: "R-2023",
    total_credits: 167,
    semesters: {
      1: {
        total_credits: 22,
        subjects: [
          { code: "23SH11C", title: "Professional English I", category: "HSMC", credits: 3 },
          { code: "23SH12C", title: "Matrices and Calculus", category: "BSC", credits: 4 },
          { code: "23SH13C", title: "Engineering Physics", category: "BSC", credits: 3 },
          { code: "23SH14C", title: "Engineering Chemistry", category: "BSC", credits: 3 },
          { code: "23CE11C", title: "Engineering Mechanics", category: "ESC", credits: 4 },
          { code: "23ME12C", title: "Engineering Graphics Laboratory", category: "ESC", credits: 2 },
          { code: "23SH15C", title: "Physics & Chemistry Laboratory", category: "BSC", credits: 2 },
          { code: "23MC01C", title: "Environmental Science and Sustainability", category: "MC", credits: 0 }
        ]
      },
      2: {
        total_credits: 22,
        subjects: [
          { code: "23SH21C", title: "Professional English II", category: "HSMC", credits: 3 },
          { code: "23SH22C", title: "Transforms and Boundary Value Problems", category: "BSC", credits: 4 },
          { code: "23CE21C", title: "Construction Materials & Technology", category: "PCC", credits: 3 },
          { code: "23CE22C", title: "Surveying and Geomatics", category: "PCC", credits: 3 },
          { code: "23CS21C", title: "Programming in C", category: "ESC", credits: 4 },
          { code: "23CE23C", title: "Surveying Laboratory I", category: "PCC", credits: 2 },
          { code: "23EM21C", title: "Engineering Practices Laboratory", category: "ESC", credits: 2 },
          { code: "23MC02C", title: "Constitution of India", category: "MC", credits: 0 }
        ]
      },
      3: {
        total_credits: 23,
        subjects: [
          { code: "23CE31C", title: "Strength of Materials I", category: "PCC", credits: 4 },
          { code: "23CE32C", title: "Fluid Mechanics", category: "PCC", credits: 4 },
          { code: "23CE33C", title: "Advanced Surveying", category: "PCC", credits: 3 },
          { code: "23CE34C", title: "Engineering Geology", category: "BSC", credits: 3 },
          { code: "23CE35C", title: "Building Planning & Drawing", category: "PCC", credits: 3 },
          { code: "23CE36C", title: "Strength of Materials Laboratory", category: "PCC", credits: 2 },
          { code: "23CE37C", title: "Fluid Mechanics Laboratory", category: "PCC", credits: 2 },
          { code: "23MC03C", title: "Heritage of Tamils", category: "MC", credits: 0 }
        ]
      },
      4: {
        total_credits: 24,
        subjects: [
          { code: "23CE41C", title: "Strength of Materials II", category: "PCC", credits: 4 },
          { code: "23CE42C", title: "Applied Hydraulic Engineering", category: "PCC", credits: 4 },
          { code: "23CE43C", title: "Concrete Technology", category: "PCC", credits: 3 },
          { code: "23CE44C", title: "Soil Mechanics", category: "PCC", credits: 4 },
          { code: "23CE45C", title: "Environmental Engineering I", category: "PCC", credits: 3 },
          { code: "23CE46C", title: "Concrete & Highway Materials Lab", category: "PCC", credits: 2 },
          { code: "23CE47C", title: "Environmental Engineering Lab", category: "PCC", credits: 2 },
          { code: "23SE01C", title: "Science Elective", category: "BSC", credits: 2, isElective: true }
        ]
      },
      5: {
        total_credits: 22,
        subjects: [
          { code: "23CE51C", title: "Design of Reinforced Concrete Elements", category: "PCC", credits: 4 },
          { code: "23CE52C", title: "Structural Analysis I", category: "PCC", credits: 4 },
          { code: "23CE53C", title: "Foundation Engineering", category: "PCC", credits: 3 },
          { code: "23CEPE1", title: "Program Elective I", category: "PEC", credits: 3, isElective: true },
          { code: "23CEPE2", title: "Program Elective II", category: "PEC", credits: 3, isElective: true },
          { code: "23CE54C", title: "Soil Mechanics Laboratory", category: "PCC", credits: 2 },
          { code: "23CE55C", title: "Survey Camp / Mini Project", category: "EEC", credits: 2 }
        ]
      },
      6: {
        total_credits: 22,
        subjects: [
          { code: "23CE61C", title: "Design of Steel Structures", category: "PCC", credits: 4 },
          { code: "23CE62C", title: "Transportation Engineering", category: "PCC", credits: 3 },
          { code: "23CEPE3", title: "Program Elective III", category: "PEC", credits: 3, isElective: true },
          { code: "23CEPE4", title: "Program Elective IV", category: "PEC", credits: 3, isElective: true },
          { code: "23CEOE1", title: "Open Elective I", category: "OEC", credits: 3, isElective: true },
          { code: "23CE63C", title: "CADD & Building Detailing Lab", category: "PCC", credits: 2 },
          { code: "23CE64C", title: "GIS & Remote Sensing Lab", category: "PCC", credits: 2 }
        ]
      },
      7: {
        total_credits: 20,
        subjects: [
          { code: "23CE71C", title: "Estimation, Costing & Valuation", category: "PCC", credits: 3 },
          { code: "23CEPE5", title: "Program Elective V", category: "PEC", credits: 3, isElective: true },
          { code: "23CEPE6", title: "Program Elective VI", category: "PEC", credits: 3, isElective: true },
          { code: "23CEOE2", title: "Open Elective II", category: "OEC", credits: 3, isElective: true },
          { code: "23CEOE3", title: "Open Elective III", category: "OEC", credits: 3, isElective: true },
          { code: "23CE72C", title: "Structural Design & Analysis Lab", category: "PCC", credits: 2 },
          { code: "23CE73C", title: "Industrial Practical Training", category: "EEC", credits: 3 }
        ]
      },
      8: {
        total_credits: 12,
        subjects: [
          { code: "23CE81C", title: "Project Work", category: "EEC", credits: 10 },
          { code: "23CE82C", title: "Construction Project Management & Ethics", category: "HSMC", credits: 2 }
        ]
      }
    }
  },

  ME: {
    department: "Mechanical Engineering",
    department_code: "ME",
    college: "National Engineering College, K.R. Nagar, Kovilpatti",
    regulation: "R-2023",
    total_credits: 167,
    semesters: {
      1: {
        total_credits: 22,
        subjects: [
          { code: "23SH11C", title: "Professional English I", category: "HSMC", credits: 3 },
          { code: "23SH12C", title: "Matrices and Calculus", category: "BSC", credits: 4 },
          { code: "23SH13C", title: "Engineering Physics", category: "BSC", credits: 3 },
          { code: "23SH14C", title: "Engineering Chemistry", category: "BSC", credits: 3 },
          { code: "23ME11C", title: "Engineering Graphics", category: "ESC", credits: 4 },
          { code: "23ME12C", title: "Workshop Practice Laboratory", category: "ESC", credits: 2 },
          { code: "23SH15C", title: "Physics & Chemistry Laboratory", category: "BSC", credits: 2 },
          { code: "23MC01C", title: "Environmental Science and Sustainability", category: "MC", credits: 0 }
        ]
      },
      2: {
        total_credits: 22,
        subjects: [
          { code: "23SH21C", title: "Professional English II", category: "HSMC", credits: 3 },
          { code: "23SH22C", title: "Differential Equations and Vector Calculus", category: "BSC", credits: 4 },
          { code: "23ME21C", title: "Engineering Mechanics", category: "ESC", credits: 4 },
          { code: "23ME22C", title: "Materials Science and Metallurgy", category: "PCC", credits: 3 },
          { code: "23CS21C", title: "Programming in C", category: "ESC", credits: 3 },
          { code: "23ME23C", title: "Computer Aided Drafting Lab", category: "PCC", credits: 2 },
          { code: "23EM21C", title: "Engineering Practices Laboratory", category: "ESC", credits: 2 },
          { code: "23MC02C", title: "Constitution of India", category: "MC", credits: 0 }
        ]
      },
      3: {
        total_credits: 23,
        subjects: [
          { code: "23ME31C", title: "Transforms and Partial Differential Equations", category: "BSC", credits: 4 },
          { code: "23ME32C", title: "Engineering Thermodynamics", category: "PCC", credits: 4 },
          { code: "23ME33C", title: "Fluid Mechanics and Machinery", category: "PCC", credits: 4 },
          { code: "23ME34C", title: "Manufacturing Technology I", category: "PCC", credits: 3 },
          { code: "23EE22C", title: "Electrical Drives and Controls", category: "ESC", credits: 3 },
          { code: "23ME35C", title: "Manufacturing Technology Lab I", category: "PCC", credits: 2 },
          { code: "23ME36C", title: "Fluid Mechanics & Electrical Lab", category: "PCC", credits: 2 },
          { code: "23MC03C", title: "Heritage of Tamils", category: "MC", credits: 0 }
        ]
      },
      4: {
        total_credits: 24,
        subjects: [
          { code: "23ME41C", title: "Thermal Engineering", category: "PCC", credits: 4 },
          { code: "23ME42C", title: "Strength of Materials for Mechanical Engineers", category: "PCC", credits: 4 },
          { code: "23ME43C", title: "Manufacturing Technology II", category: "PCC", credits: 3 },
          { code: "23ME44C", title: "Kinematics of Machinery", category: "PCC", credits: 4 },
          { code: "23ME45C", title: "Machine Drawing", category: "PCC", credits: 3 },
          { code: "23ME46C", title: "Manufacturing Technology Lab II", category: "PCC", credits: 2 },
          { code: "23ME47C", title: "Thermal Engineering Lab", category: "PCC", credits: 2 },
          { code: "23SE01C", title: "Science Elective", category: "BSC", credits: 2, isElective: true }
        ]
      },
      5: {
        total_credits: 22,
        subjects: [
          { code: "23ME51C", title: "Design of Machine Elements", category: "PCC", credits: 4 },
          { code: "23ME52C", title: "Dynamics of Machinery", category: "PCC", credits: 4 },
          { code: "23ME53C", title: "Metrology and Measurements", category: "PCC", credits: 3 },
          { code: "23MEPE1", title: "Program Elective I", category: "PEC", credits: 3, isElective: true },
          { code: "23MEPE2", title: "Program Elective II", category: "PEC", credits: 3, isElective: true },
          { code: "23ME54C", title: "Dynamics & Metrology Lab", category: "PCC", credits: 2 },
          { code: "23ME55C", title: "Design & Innovation Project", category: "EEC", credits: 2 }
        ]
      },
      6: {
        total_credits: 22,
        subjects: [
          { code: "23ME61C", title: "Design of Transmission Systems", category: "PCC", credits: 4 },
          { code: "23ME62C", title: "Heat and Mass Transfer", category: "PCC", credits: 4 },
          { code: "23MEPE3", title: "Program Elective III", category: "PEC", credits: 3, isElective: true },
          { code: "23MEPE4", title: "Program Elective IV", category: "PEC", credits: 3, isElective: true },
          { code: "23MEOE1", title: "Open Elective I", category: "OEC", credits: 3, isElective: true },
          { code: "23ME63C", title: "Heat Transfer Laboratory", category: "PCC", credits: 2 },
          { code: "23ME64C", title: "CAD/CAM Laboratory", category: "PCC", credits: 2 }
        ]
      },
      7: {
        total_credits: 20,
        subjects: [
          { code: "23ME71C", title: "Mechatronics & Industry 4.0", category: "PCC", credits: 3 },
          { code: "23MEPE5", title: "Program Elective V", category: "PEC", credits: 3, isElective: true },
          { code: "23MEPE6", title: "Program Elective VI", category: "PEC", credits: 3, isElective: true },
          { code: "23MEOE2", title: "Open Elective II", category: "OEC", credits: 3, isElective: true },
          { code: "23MEOE3", title: "Open Elective III", category: "OEC", credits: 3, isElective: true },
          { code: "23ME72C", title: "Mechatronics & Automation Lab", category: "PCC", credits: 2 },
          { code: "23ME73C", title: "Industrial Practical Training", category: "EEC", credits: 3 }
        ]
      },
      8: {
        total_credits: 12,
        subjects: [
          { code: "23ME81C", title: "Project Work", category: "EEC", credits: 10 },
          { code: "23ME82C", title: "Power Plant Engineering & Ethics", category: "HSMC", credits: 2 }
        ]
      }
    }
  }
};
