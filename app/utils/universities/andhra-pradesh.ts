// Definitions for the University Dataset Schema

// Central Universities

// Central University of Andhra Pradesh, Anantapur,
// Central Tribal University of Andhra Pradesh, Vizianagaram,
// National Sanskrit University, Tirupati

// State Universities

// Acharya N. G. Ranga Agricultural University, Guntur,
// Acharya Nagarjuna University, Guntur,  
// Adikavi Nannaya University, Rajahmundry,  
// Andhra Kesari University, Ongole,  
// Andhra Pradesh Fisheries University, Vijayawada,  
// Andhra University, Visakhapatnam, 
// Cluster University, Kurnool,  
// Damodaram Sanjivayya National Law University, Visakhapatnam,  
// Dr. Y.S.R. Architecture and Fine Arts University, Kadapa,  
// Dr. Abdul Haq Urdu University, Kurnool,  
// Dr. B.R. Ambedkar University, Srikakulam,  
// Dr. NTR University of Health Sciences, Vijayawada,  
// Dr. Y.S.R. Horticultural University, Tadepalligudem,  
// Dravidian University, Kuppam,  
// Jawaharlal Nehru Technological University, Anantapur (JNTUA),  
// Jawaharlal Nehru Technological University, Kakinada (JNTUK),  
// Jawaharlal Nehru Technological University Gurajada, Vizianagaram (JNTUGV),  
// Krishna University, Machilipatnam,  
// Rajiv Gandhi University of Knowledge Technologies, Nuzvid (RGUKT),  
// Rayalaseema University, Kurnool,  
// Sri Krishnadevaraya University, Anantapur,  
// Sri Padmavati Mahila Visvavidyalayam, Tirupati,  
// Sri Venkateswara Institute of Medical Sciences, Tirupati,  
// Sri Venkateswara University, Tirupati,  
// Sri Venkateswara Vedic University, Tirupati,  
// Sri Venkateswara Veterinary University, Tirupati,  
// Vikrama Simhapuri University, Nellore,
// Yogi Vemana University, Kadapa,  



// Deemed-to-be Universities

// Gandhi Institute of Technology and Management (GITAM), Visakhapatnam,
// K L University (Koneru Lakshmaiah Education Foundation), Vaddeswaram, Guntur, 
// Sri Sathya Sai Institute of Higher Learning, Puttaparthi,
// Vignan's Foundation for Science, Technology & Research, Guntur,
// Madanapalle Institute of Technology and Science (MITS), Madanapalle,
// Audisankara Deemed to be University, Gudur,
// Siddhartha Academy of Higher Education (VR Siddhartha), Vijayawada  



// State Private Universities

// Aditya University, Surampalem,
// Annamacharya University, Rajampet,
// B.E.S.T. Innovation University, Anantapur,
// Centurion University of Technology and Management, Vizianagaram,
// Godavari Global University, Rajamahendravaram,
// Krea University, Sri City,
// Mohan Babu University, Tirupati,
// Saveetha Amaravati University, Amaravati,
// SRM University, Amaravati,
// The Apollo University, Chittoor,
// VIT-AP University, Amaravati


// Premier Autonomous Institutes (National Importance)

// IIT Tirupati,
// IIM Visakhapatnam,
// NIT Andhra Pradesh, Tadepalligudem,  
// IIIT Sri City,
// IIITDM Kurnool,  
// IISER Tirupati,  
// AIIMS Mangalagiri,
// School of Planning and Architecture (SPA), Vijayawada,  
// Indian Institute of Petroleum and Energy (IIPE), Visakhapatnam  

export type UniversityType = 'Public' | 'Private' | 'Deemed' | 'Central' | 'State';

export interface LocationInfo {
  city: string;
  state: string;
  address: string;
}

export interface RankingInfo {
  indiaRank: number | null;
  globalRank: number | null;
  nirfRank: number | null;
}

export interface RangeValue {
  min: number | null;
  max: number | null;
  currency?: string;
}

export interface HostelInfo {
  available: boolean;
  costPerYear: number | null;
}

export interface FeeStructure {
  tuitionPerYear: RangeValue;
  hostel: HostelInfo;
}

export interface AdmissionProcess {
  undergraduate: string[];
  postgraduate: string[];
}

export interface RequirementsInfo {
  minPercentage: string;
  entranceExams: string[];
  documentsRequired: string[];
}

export interface AgeLimit {
  min: number | null;
  max: number | null;
}

export interface PlacementInfo {
  averageSalary: number | null; // Value in INR
  highestSalary: number | null; // Value in INR
  topRecruiters: string[];
}

export interface University {
  id: string;
  name: string;
  shortName: string;
  description: string;
  type: UniversityType;
  establishedYear: number;
  location: LocationInfo;
  website: string;
  affiliations: string[];
  ranking: RankingInfo;
  acceptanceRate: number | null;
  coursesOffered: string[];
  admissionProcess: AdmissionProcess;
  requirements: RequirementsInfo;
  ageLimit: AgeLimit;
  fees: FeeStructure;
  scholarships: string[];
  placements: PlacementInfo;
  facilities: string[];
  notablePoints: string[];
}

export interface StateUniversityBatch {
  id: string;
  country: string;
  state: string;
  totalInstitutionsInBatch: number;
  hasMoreBatches: boolean;
  universities: University[];
}

export const andhraPradeshUniversities: StateUniversityBatch = {
  id: "andhra_pradesh_1",
  country: "India",
  state: "Andhra Pradesh",
  totalInstitutionsInBatch: 20,
  hasMoreBatches: true,
  universities: [
    {
      id: "andhra-university-visakhapatnam",
      name: "Andhra University",
      shortName: "AU",
      description: "One of the oldest educational institutions in India, established in 1926. It is a premier state university renowned for science, engineering, and pharmacy education.",
      type: "State",
      establishedYear: 1926,
      location: {
        city: "Visakhapatnam",
        state: "Andhra Pradesh",
        address: "Waltair Junction, Visakhapatnam, Andhra Pradesh 530003"
      },
      website: "https://www.andhrauniversity.edu.in",
      affiliations: ["UGC", "AICTE", "NAAC A++ Grade"],
      ranking: {
        indiaRank: 41,
        globalRank: 801,
        nirfRank: 41
      },
      acceptanceRate: 15,
      coursesOffered: ["Engineering", "Pharmacy", "Law", "Commerce", "Arts", "Management", "Science", "Others"],
      admissionProcess: {
        undergraduate: ["AP EAPCET", "AUCET", "Merit-based"],
        postgraduate: ["GATE", "AP PGECET", "AUCET", "AP ICET"]
      },
      requirements: {
        minPercentage: "50%",
        entranceExams: ["AP EAPCET", "AP PGECET", "AUCET"],
        documentsRequired: ["10th Marks Sheet", "12th Certificate", "Transfer Certificate", "Caste Certificate", "ID Proof"]
      },
      ageLimit: {
        min: 17,
        max: null
      },
      fees: {
        tuitionPerYear: {
          min: 10000,
          max: 85000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 25000
        }
      },
      scholarships: ["Jagananna Vidya Deevena", "Prathibha Awards", "UGC Merit Scholarships"],
      placements: {
        averageSalary: 650000,
        highestSalary: 1500000,
        topRecruiters: ["TCS", "Infosys", "Wipro", "Dr. Reddy's", "L&T"]
      },
      facilities: ["Central Library", "Hostels", "Research Labs", "Sports Complex", "WiFi Campus", "Gymnasium"],
      notablePoints: ["Pioneer in Marine Engineering and Nautical Architecture", "NAAC A++ accredited grade with high score"]
    },
    {
      id: "sri-venkateswara-university-tirupati",
      name: "Sri Venkateswara University",
      shortName: "SVU",
      description: "A premier public university located in Tirupati, famous for research, biological sciences, and humanities.",
      type: "State",
      establishedYear: 1954,
      location: {
        city: "Tirupati",
        state: "Andhra Pradesh",
        address: "SVU Campus, Tirupati, Andhra Pradesh 517502"
      },
      website: "https://svuniversity.edu.in",
      affiliations: ["UGC", "AICTE", "NAAC A+ Grade"],
      ranking: {
        indiaRank: 60,
        globalRank: 1200,
        nirfRank: 60
      },
      acceptanceRate: 20,
      coursesOffered: ["Engineering", "Science", "Arts", "Commerce", "Management", "Education", "Law"],
      admissionProcess: {
        undergraduate: ["AP EAPCET", "SVUCET"],
        postgraduate: ["AP PGECET", "AP ICET", "GATE"]
      },
      requirements: {
        minPercentage: "50%",
        entranceExams: ["AP EAPCET", "AP ICET", "SVUCET"],
        documentsRequired: ["10th Mark Sheet", "12th Pass Certificate", "Entrance Rank Card", "Category Certificate"]
      },
      ageLimit: {
        min: 17,
        max: null
      },
      fees: {
        tuitionPerYear: {
          min: 12000,
          max: 75000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 20000
        }
      },
      scholarships: ["Post Matric Scholarship AP", "SVU Merit Scholarship"],
      placements: {
        averageSalary: 550000,
        highestSalary: 1200000,
        topRecruiters: ["Cognizant", "HCL", "TCS", "Tech Mahindra"]
      },
      facilities: ["Digital Library", "Auditorium", "Sports Stadium", "Incubation Center", "Hostel"],
      notablePoints: ["Second oldest university in Andhra Pradesh", "Sprawling 1000-acre lush green campus"]
    },
    {
      id: "jntu-kakinada",
      name: "Jawaharlal Nehru Technological University, Kakinada",
      shortName: "JNTUK",
      description: "A leading public technical university focusing on engineering, technology, and applied research.",
      type: "State",
      establishedYear: 1946,
      location: {
        city: "Kakinada",
        state: "Andhra Pradesh",
        address: "Pithapuram Road, Kakinada, Andhra Pradesh 533003"
      },
      website: "https://www.jntuk.edu.in",
      affiliations: ["UGC", "AICTE", "NAAC A+ Grade"],
      ranking: {
        indiaRank: 101,
        globalRank: null,
        nirfRank: 101
      },
      acceptanceRate: 12,
      coursesOffered: ["Engineering", "Management", "Pharmacy", "Computer Applications"],
      admissionProcess: {
        undergraduate: ["AP EAPCET"],
        postgraduate: ["GATE", "AP PGECET", "AP ICET"]
      },
      requirements: {
        minPercentage: "45%",
        entranceExams: ["AP EAPCET", "GATE", "AP PGECET"],
        documentsRequired: ["SSC Marks Memo", "Intermediate Marks Memo", "EAPCET Rank Card", "Residence Certificate"]
      },
      ageLimit: {
        min: 16,
        max: null
      },
      fees: {
        tuitionPerYear: {
          min: 35000,
          max: 90000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 30000
        }
      },
      scholarships: ["Jagananna Vidya Deevena", "AICTE Pragati Scholarship"],
      placements: {
        averageSalary: 600000,
        highestSalary: 1800000,
        topRecruiters: ["TCS", "Accenture", "Oracle", "Cisco", "Hyundai"]
      },
      facilities: ["High-tech Computing Labs", "Central Library", "Robotics Lab", "Hostel", "Placement Cell"],
      notablePoints: ["Affiliates hundreds of engineering colleges across coastal Andhra", "Strong R&D focus"]
    },
    {
      id: "jntu-anantapur",
      name: "Jawaharlal Nehru Technological University, Anantapur",
      shortName: "JNTUA",
      description: "A major technical university serving the Rayalaseema region with strong engineering programs.",
      type: "State",
      establishedYear: 1946,
      location: {
        city: "Anantapur",
        state: "Andhra Pradesh",
        address: "Sir Mokshagundam Vishveshwariah Road, Anantapur, Andhra Pradesh 515002"
      },
      website: "https://www.jntua.ac.in",
      affiliations: ["UGC", "AICTE", "NAAC A Grade"],
      ranking: {
        indiaRank: 151,
        globalRank: null,
        nirfRank: 151
      },
      acceptanceRate: 15,
      coursesOffered: ["Engineering", "Pharmacy", "Management"],
      admissionProcess: {
        undergraduate: ["AP EAPCET"],
        postgraduate: ["GATE", "AP PGECET", "AP ICET"]
      },
      requirements: {
        minPercentage: "45%",
        entranceExams: ["AP EAPCET", "GATE"],
        documentsRequired: ["10th Certificate", "12th Certificate", "Admit Card", "Allotment Letter"]
      },
      ageLimit: {
        min: 16,
        max: null
      },
      fees: {
        tuitionPerYear: {
          min: 30000,
          max: 80000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 25000
        }
      },
      scholarships: ["State Government Fee Reimbursement", "National Merit Scholarships"],
      placements: {
        averageSalary: 520000,
        highestSalary: 1400000,
        topRecruiters: ["TCS", "Infosys", "Mindtree", "Capgemini"]
      },
      facilities: ["Library", "Language Lab", "Sports Grounds", "Hostel", "Auditorium"],
      notablePoints: ["Established originally as College of Engineering Anantapur in 1946"]
    },
    {
      id: "kl-university-guntur",
      name: "Koneru Lakshmaiah Education Foundation (KL Deemed to be University)",
      shortName: "K L University",
      description: "Top-ranked private deemed university offering world-class infrastructure and high placement outcomes in tech and management.",
      type: "Deemed",
      establishedYear: 1980,
      location: {
        city: "Vaddeswaram, Guntur",
        state: "Andhra Pradesh",
        address: "Green Fields, Vaddeswaram, Guntur District, Andhra Pradesh 522302"
      },
      website: "https://www.kluniversity.in",
      affiliations: ["UGC", "AICTE", "NAAC A++ Grade", "COA"],
      ranking: {
        indiaRank: 46,
        globalRank: 801,
        nirfRank: 46
      },
      acceptanceRate: 35,
      coursesOffered: ["Engineering", "Architecture", "Management", "Law", "Pharmacy", "Arts", "Science"],
      admissionProcess: {
        undergraduate: ["KLEEE", "JEE Main", "AP EAPCET"],
        postgraduate: ["KLPGCET", "GATE", "CAT", "MAT"]
      },
      requirements: {
        minPercentage: "60%",
        entranceExams: ["KLEEE", "JEE Main"],
        documentsRequired: ["Class X Certificate", "Class XII Certificate", "KLEEE Rank Card", "ID Proof"]
      },
      ageLimit: {
        min: 17,
        max: 21
      },
      fees: {
        tuitionPerYear: {
          min: 180000,
          max: 280000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 95000
        }
      },
      scholarships: ["KLU Merit Scholarships", "Sports Scholarships", "Fee Concession for Top Rankers"],
      placements: {
        averageSalary: 980000,
        highestSalary: 5800000,
        topRecruiters: ["Amazon", "Microsoft", "ServiceNow", "CISCO", "JP Morgan"]
      },
      facilities: ["Smart Classrooms", "AC Hostels", "Advanced R&D Labs", "Indoor Sports Complex", "24x7 Medical Center"],
      notablePoints: ["100% placement record for eligible students", "Highest package regularly exceeds 50 LPA"]
    },
    {
      id: "vignan-university-guntur",
      name: "Vignan's Foundation for Science, Technology and Research",
      shortName: "Vignan University",
      description: "A deemed university in Guntur offering technical education with strong corporate linkages and outcome-based learning.",
      type: "Deemed",
      establishedYear: 1997,
      location: {
        city: "Vadlamudi, Guntur",
        state: "Andhra Pradesh",
        address: "Vadlamudi, Guntur District, Andhra Pradesh 522213"
      },
      website: "https://vignan.ac.in",
      affiliations: ["UGC", "AICTE", "NAAC A+ Grade"],
      ranking: {
        indiaRank: 75,
        globalRank: null,
        nirfRank: 75
      },
      acceptanceRate: 40,
      coursesOffered: ["Engineering", "Pharmacy", "Management", "Science", "Arts", "Law"],
      admissionProcess: {
        undergraduate: ["V-SAT", "JEE Main", "AP EAPCET"],
        postgraduate: ["GATE", "V-PGJET", "CAT"]
      },
      requirements: {
        minPercentage: "60%",
        entranceExams: ["V-SAT", "JEE Main"],
        documentsRequired: ["10th Marksheet", "12th Marksheet", "V-SAT Hall Ticket", "Transfer Certificate"]
      },
      ageLimit: {
        min: 17,
        max: 22
      },
      fees: {
        tuitionPerYear: {
          min: 110000,
          max: 240000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 85000
        }
      },
      scholarships: ["V-SAT Merit Scholarships", "Defense Wards Concession"],
      placements: {
        averageSalary: 500000,
        highestSalary: 1800000,
        topRecruiters: ["TCS", "IBM", "Hyundai", "Wipro", "L&T Infotech"]
      },
      facilities: ["Central Library", "Hostels", "Innovation Center", "Sports Grounds", "WiFi"],
      notablePoints: ["Strong emphasis on industry-oriented internships and skill development"]
    },
    {
      id: "srm-university-ap-amaravati",
      name: "SRM University, AP",
      shortName: "SRM AP",
      description: "A state-of-the-art private research university set up in the capital region, offering interdisciplinary liberal arts and technology programs.",
      type: "Private",
      establishedYear: 2017,
      location: {
        city: "Amaravati",
        state: "Andhra Pradesh",
        address: "Neerukonda, Mangalagiri Mandal, Guntur District, Mangalagiri, Andhra Pradesh 522502"
      },
      website: "https://srmap.edu.in",
      affiliations: ["UGC"],
      ranking: {
        indiaRank: 50,
        globalRank: null,
        nirfRank: null
      },
      acceptanceRate: 30,
      coursesOffered: ["Engineering", "Liberal Arts", "Management", "Science"],
      admissionProcess: {
        undergraduate: ["SRMJEEE", "JEE Main", "SAT"],
        postgraduate: ["SRMJEE-M", "GATE", "CAT"]
      },
      requirements: {
        minPercentage: "60%",
        entranceExams: ["SRMJEEE", "JEE Main"],
        documentsRequired: ["10th standard scorecard", "12th standard scorecard", "SRMJEEE Rank Card", "ID Proof"]
      },
      ageLimit: {
        min: 16,
        max: 21
      },
      fees: {
        tuitionPerYear: {
          min: 150000,
          max: 350000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 110000
        }
      },
      scholarships: ["Founder's Scholarship", "SRM Merit Scholarship", "State Merit Award"],
      placements: {
        averageSalary: 920000,
        highestSalary: 5000000,
        topRecruiters: ["Google", "Amazon", "PayPal", "Barclays", "Marvell"]
      },
      facilities: ["Research Laboratories", "Modern Hostels", "Incubation Center", "Auditorium", "Sports Complex"],
      notablePoints: ["Collaborations with MIT and UC Berkeley for curriculum and research"]
    },
    {
      id: "vit-ap-university-amaravati",
      name: "VIT-AP University",
      shortName: "VIT-AP",
      description: "A top-rated private university established by the VIT Group, offering technology, law, and business programs.",
      type: "Private",
      establishedYear: 2017,
      location: {
        city: "Amaravati",
        state: "Andhra Pradesh",
        address: "Inavolu, Beside AP Secretariat Amaravati, Andhra Pradesh 522237"
      },
      website: "https://vitap.ac.in",
      affiliations: ["UGC"],
      ranking: {
        indiaRank: null,
        globalRank: null,
        nirfRank: null
      },
      acceptanceRate: 25,
      coursesOffered: ["Engineering", "Management", "Law", "Sciences"],
      admissionProcess: {
        undergraduate: ["VITEEE", "CLAT", "LSAT"],
        postgraduate: ["VITMEE", "CAT", "MAT"]
      },
      requirements: {
        minPercentage: "60%",
        entranceExams: ["VITEEE"],
        documentsRequired: ["Class 10 Marksheet", "Class 12 Marksheet", "VITEEE Scorecard", "Transfer Certificate"]
      },
      ageLimit: {
        min: 17,
        max: 22
      },
      fees: {
        tuitionPerYear: {
          min: 173000,
          max: 200000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 105000
        }
      },
      scholarships: ["STARS Scheme (100% fee waiver for rural toppers)", "VITEEE Merit Scholarships"],
      placements: {
        averageSalary: 900000,
        highestSalary: 6300000,
        topRecruiters: ["Microsoft", "Amazon", "Intel", "Deloitte", "Ebay"]
      },
      facilities: ["Flexible Credit System (FFCS)", "Modern Dining & Hostels", "Robotics & AI Labs", "Sports Complex"],
      notablePoints: ["Offers unique Fully Flexible Credit System (FFCS)", "High placement rate in tier-1 tech firms"]
    },
    {
      id: "iit-tirupati",
      name: "Indian Institute of Technology Tirupati",
      shortName: "IIT Tirupati",
      description: "A premier central autonomous institute of national importance specializing in engineering and technological research.",
      type: "Central",
      establishedYear: 2015,
      location: {
        city: "Tirupati",
        state: "Andhra Pradesh",
        address: "Yerpedu - Venkatagiri Road, Yerpedu Post, Tirupati District, Andhra Pradesh 517619"
      },
      website: "https://www.iittp.ac.in",
      affiliations: ["Institute of National Importance (INI)", "UGC"],
      ranking: {
        indiaRank: 59,
        globalRank: null,
        nirfRank: 59
      },
      acceptanceRate: 1,
      coursesOffered: ["Engineering", "Science"],
      admissionProcess: {
        undergraduate: ["JEE Advanced"],
        postgraduate: ["GATE", "JAM"]
      },
      requirements: {
        minPercentage: "75%",
        entranceExams: ["JEE Main", "JEE Advanced"],
        documentsRequired: ["Class 10 & 12 Certificates", "JEE Advanced Scorecard", "Category Certificate", "Seat Allotment Letter"]
      },
      ageLimit: {
        min: 16,
        max: null
      },
      fees: {
        tuitionPerYear: {
          min: 200000,
          max: 220000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 40000
        }
      },
      scholarships: ["MHRD Top Class Education Scholarship", "Institute Merit-cum-Means Scholarship"],
      placements: {
        averageSalary: 1750000,
        highestSalary: 4600000,
        topRecruiters: ["Amazon", "MathWorks", "ServiceNow", "L&T", "TCS Research"]
      },
      facilities: ["State-of-the-Art Labs", "Supercomputing Facility", "High-speed Campus Network", "Hostel", "Sports Complex"],
      notablePoints: ["Fastest-growing 3rd-generation IIT with permanent eco-friendly campus"]
    },
    {
      id: "iim-visakhapatnam",
      name: "Indian Institute of Management Visakhapatnam",
      shortName: "IIM Vizag",
      description: "A top-tier central business school designated as an Institute of National Importance.",
      type: "Central",
      establishedYear: 2015,
      location: {
        city: "Visakhapatnam",
        state: "Andhra Pradesh",
        address: "Gambheeram, Visakhapatnam, Andhra Pradesh 530052"
      },
      website: "https://www.iimv.ac.in",
      affiliations: ["Institute of National Importance (INI)"],
      ranking: {
        indiaRank: 26,
        globalRank: null,
        nirfRank: 26
      },
      acceptanceRate: 2,
      coursesOffered: ["Management"],
      admissionProcess: {
        undergraduate: [],
        postgraduate: ["CAT", "Personal Interview"]
      },
      requirements: {
        minPercentage: "50%",
        entranceExams: ["CAT"],
        documentsRequired: ["Graduation Marksheets", "CAT Percentile Scorecard", "Work Experience Certificates", "ID Proof"]
      },
      ageLimit: {
        min: 20,
        max: null
      },
      fees: {
        tuitionPerYear: {
          min: 800000,
          max: 900000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 100000
        }
      },
      scholarships: ["Need-Based Financial Assistance", "Central Sector Scholarship"],
      placements: {
        averageSalary: 1660000,
        highestSalary: 3200000,
        topRecruiters: ["KPMG", "Deloitte", "Amazon", "ICICI Bank", "Cognizant"]
      },
      facilities: ["Bloomberg Lab", "Executive Classrooms", "Hostels", "Library", "Incubation Center"],
      notablePoints: ["Highest placement growth among newer IIMs", "Permanent green campus at Gambheeram"]
    },
    {
      id: "aiims-mangalagiri",
      name: "All India Institute of Medical Sciences, Mangalagiri",
      shortName: "AIIMS Mangalagiri",
      description: "A premier medical university and hospital of national importance providing top-quality medical education and healthcare.",
      type: "Central",
      establishedYear: 2018,
      location: {
        city: "Mangalagiri",
        state: "Andhra Pradesh",
        address: "Mangalagiri, Guntur District, Andhra Pradesh 522503"
      },
      website: "https://www.aiimsmangalagiri.edu.in",
      affiliations: ["Institute of National Importance (INI)", "MCI / NMC"],
      ranking: {
        indiaRank: 30,
        globalRank: null,
        nirfRank: null
      },
      acceptanceRate: 0.5,
      coursesOffered: ["Medical"],
      admissionProcess: {
        undergraduate: ["NEET UG"],
        postgraduate: ["INI CET"]
      },
      requirements: {
        minPercentage: "50%",
        entranceExams: ["NEET UG", "INI CET"],
        documentsRequired: ["NEET Rank Card", "10th & 12th Certificates", "Category Certificate", "Medical Fitness Certificate"]
      },
      ageLimit: {
        min: 17,
        max: 25
      },
      fees: {
        tuitionPerYear: {
          min: 1628,
          max: 3000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 1000
        }
      },
      scholarships: ["Central Sector Scheme for Top Class Education"],
      placements: {
        averageSalary: 1200000,
        highestSalary: 2400000,
        topRecruiters: ["Top Public & Private Super Specialty Hospitals"]
      },
      facilities: ["Super Speciality Hospital", "Advanced Medical Labs", "Library", "Hostels", "Dissection Hall"],
      notablePoints: ["Extremely affordable fee structure with world-class clinical training"]
    },
    {
      id: "sri-padmavati-mahila-visvavidyalayam-tirupati",
      name: "Sri Padmavati Mahila Visvavidyalayam",
      shortName: "SPMVV",
      description: "A state women's university dedicated to empowering women through higher education, technical skills, and research.",
      type: "State",
      establishedYear: 1983,
      location: {
        city: "Tirupati",
        state: "Andhra Pradesh",
        address: "Padmavathi Nagar, Near West Railway Station, Tirupati, Andhra Pradesh 517502"
      },
      website: "https://www.spmvv.ac.in",
      affiliations: ["UGC", "AICTE", "NAAC A+ Grade"],
      ranking: {
        indiaRank: 101,
        globalRank: null,
        nirfRank: null
      },
      acceptanceRate: 30,
      coursesOffered: ["Engineering", "Pharmacy", "Arts", "Science", "Commerce", "Management", "Law", "Education"],
      admissionProcess: {
        undergraduate: ["AP EAPCET", "SPMVVCET"],
        postgraduate: ["AP PGECET", "AP ICET", "SPMVVCET"]
      },
      requirements: {
        minPercentage: "50%",
        entranceExams: ["AP EAPCET", "AP ICET"],
        documentsRequired: ["10th & 12th Certificate", "Gender Verification/TC", "Entrance Scorecard"]
      },
      ageLimit: {
        min: 16,
        max: null
      },
      fees: {
        tuitionPerYear: {
          min: 15000,
          max: 70000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 22000
        }
      },
      scholarships: ["Jagananna Vidya Deevena", "Women Empowerment Grants"],
      placements: {
        averageSalary: 480000,
        highestSalary: 1000000,
        topRecruiters: ["TCS", "Wipro", "Cognizant", "Novartis"]
      },
      facilities: ["Women Incubation Center", "Digital Library", "Hostels", "Health Center", "Sports Ground"],
      notablePoints: ["Only dedicated state women's university in Andhra Pradesh"]
    },
    {
      id: "acharya-nagarjuna-university-guntur",
      name: "Acharya Nagarjuna University",
      shortName: "ANU",
      description: "A major public university located in Guntur district catering to diverse academic fields across humanities, sciences, and engineering.",
      type: "State",
      establishedYear: 1976,
      location: {
        city: "Guntur",
        state: "Andhra Pradesh",
        address: "NH16, Nagarjuna Nagar, Guntur, Andhra Pradesh 522510"
      },
      website: "http://www.nagarjunauniversity.ac.in",
      affiliations: ["UGC", "AICTE", "NAAC A Grade"],
      ranking: {
        indiaRank: 85,
        globalRank: null,
        nirfRank: 85
      },
      acceptanceRate: 35,
      coursesOffered: ["Arts", "Science", "Commerce", "Engineering", "Pharmacy", "Law", "Physical Education"],
      admissionProcess: {
        undergraduate: ["AP EAPCET", "ANUPGCET"],
        postgraduate: ["AP PGECET", "ANUPGCET", "AP ICET"]
      },
      requirements: {
        minPercentage: "45%",
        entranceExams: ["AP EAPCET", "ANUPGCET"],
        documentsRequired: ["10th & 12th Marks Memo", "Caste Certificate", "TC", "Allotment Letter"]
      },
      ageLimit: {
        min: 17,
        max: null
      },
      fees: {
        tuitionPerYear: {
          min: 8000,
          max: 60000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 18000
        }
      },
      scholarships: ["State Fee Reimbursement", "Post-Matric Scholarships"],
      placements: {
        averageSalary: 400000,
        highestSalary: 900000,
        topRecruiters: ["TCS", "HCL", "Hetero Drugs", "Divis Labs"]
      },
      facilities: ["University Library", "Hostel", "Botanical Garden", "Gymnasium", "Stadium"],
      notablePoints: ["Named after the great Buddhist philosopher Acharya Nagarjuna"]
    },
    {
      id: "dr-br-ambedkar-university-srikakulam",
      name: "Dr. B.R. Ambedkar University, Srikakulam",
      shortName: "BRAU",
      description: "A public state university serving the north coastal region of Andhra Pradesh.",
      type: "State",
      establishedYear: 2008,
      location: {
        city: "Etcherla, Srikakulam",
        state: "Andhra Pradesh",
        address: "Etcherla, Srikakulam District, Andhra Pradesh 532410"
      },
      website: "http://www.brau.edu.in",
      affiliations: ["UGC", "NAAC B Grade"],
      ranking: {
        indiaRank: null,
        globalRank: null,
        nirfRank: null
      },
      acceptanceRate: 50,
      coursesOffered: ["Arts", "Science", "Commerce", "Management", "Education", "Law"],
      admissionProcess: {
        undergraduate: ["Merit-based", "AP OAMDC"],
        postgraduate: ["APPGCET", "AP ICET"]
      },
      requirements: {
        minPercentage: "45%",
        entranceExams: ["APPGCET", "AP ICET"],
        documentsRequired: ["Qualifying Exam Certificates", "ID Proof", "Conduct Certificate"]
      },
      ageLimit: {
        min: 17,
        max: null
      },
      fees: {
        tuitionPerYear: {
          min: 6000,
          max: 35000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 15000
        }
      },
      scholarships: ["Jagananna Vidya Deevena", "SC/ST Welfare Scholarships"],
      placements: {
        averageSalary: 320000,
        highestSalary: 650000,
        topRecruiters: ["Infosys BPM", "TCS Smart Hire", "Local Agro-industries"]
      },
      facilities: ["Library", "Hostels", "Computer Lab", "Playground"],
      notablePoints: ["Caters extensively to rural and tribal students in North Coastal AP"]
    },
    {
      id: "rayalaseema-university-kurnool",
      name: "Rayalaseema University",
      shortName: "RU",
      description: "A public state university delivering higher education opportunities across the Rayalaseema region.",
      type: "State",
      establishedYear: 2008,
      location: {
        city: "Kurnool",
        state: "Andhra Pradesh",
        address: "Nandyal Road, Kurnool, Andhra Pradesh 518007"
      },
      website: "http://uk.rayalaseemauniversity.ac.in",
      affiliations: ["UGC", "NAAC B Grade"],
      ranking: {
        indiaRank: null,
        globalRank: null,
        nirfRank: null
      },
      acceptanceRate: 45,
      coursesOffered: ["Arts", "Science", "Commerce", "Management", "Computer Applications"],
      admissionProcess: {
        undergraduate: ["Merit-based", "AP OAMDC"],
        postgraduate: ["APPGCET", "AP ICET"]
      },
      requirements: {
        minPercentage: "45%",
        entranceExams: ["APPGCET"],
        documentsRequired: ["10th/12th Mark Memo", "TC", "Reservation Certificate"]
      },
      ageLimit: {
        min: 17,
        max: null
      },
      fees: {
        tuitionPerYear: {
          min: 8000,
          max: 40000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 16000
        }
      },
      scholarships: ["AP Government Post-Matric Scholarship"],
      placements: {
        averageSalary: 350000,
        highestSalary: 700000,
        topRecruiters: ["Wipro", "Reliance Retail", "Hetero"]
      },
      facilities: ["Central Library", "Computer Center", "Sports Grounds", "Hostel"],
      notablePoints: ["Key educational institution uplifting Kurnool district higher education"]
    },
    {
      id: "vikrama-simhapuri-university-nellore",
      name: "Vikrama Simhapuri University",
      shortName: "VSU",
      description: "State university located in Nellore offering postgraduate and undergraduate programs in marine biology, sciences, and management.",
      type: "State",
      establishedYear: 2008,
      location: {
        city: "Nellore",
        state: "Andhra Pradesh",
        address: "Kakutur, Nellore District, Andhra Pradesh 524320"
      },
      website: "http://vsu.ac.in",
      affiliations: ["UGC", "NAAC B Grade"],
      ranking: {
        indiaRank: null,
        globalRank: null,
        nirfRank: null
      },
      acceptanceRate: 45,
      coursesOffered: ["Science", "Commerce", "Arts", "Management", "Marine Biology"],
      admissionProcess: {
        undergraduate: ["AP OAMDC"],
        postgraduate: ["APPGCET", "AP ICET"]
      },
      requirements: {
        minPercentage: "45%",
        entranceExams: ["APPGCET"],
        documentsRequired: ["10th & 12th Marks Card", "Caste Certificate", "Transfer Certificate"]
      },
      ageLimit: {
        min: 17,
        max: null
      },
      fees: {
        tuitionPerYear: {
          min: 7500,
          max: 45000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 17000
        }
      },
      scholarships: ["State Vidya Deevena Scheme"],
      placements: {
        averageSalary: 360000,
        highestSalary: 750000,
        topRecruiters: ["Aquaculture companies", "TCS", "HDFC Bank"]
      },
      facilities: ["Library", "Science Labs", "Hostels", "Auditorium"],
      notablePoints: ["Specialized research in Coastal and Marine Ecosystems"]
    },
    {
      id: "yogi-vemana-university-kadapa",
      name: "Yogi Vemana University",
      shortName: "YVU",
      description: "A state public university located in Kadapa, known for science research and human resource development in Rayalaseema.",
      type: "State",
      establishedYear: 2006,
      location: {
        city: "Kadapa",
        state: "Andhra Pradesh",
        address: "Vemanapuram, Kadapa, Andhra Pradesh 516005"
      },
      website: "http://www.yogivemanauniversity.ac.in",
      affiliations: ["UGC", "NAAC A Grade"],
      ranking: {
        indiaRank: 120,
        globalRank: null,
        nirfRank: null
      },
      acceptanceRate: 40,
      coursesOffered: ["Arts", "Science", "Commerce", "Engineering", "Management"],
      admissionProcess: {
        undergraduate: ["AP EAPCET", "AP OAMDC"],
        postgraduate: ["APPGCET", "AP ICET"]
      },
      requirements: {
        minPercentage: "50%",
        entranceExams: ["APPGCET", "AP EAPCET"],
        documentsRequired: ["Marks Sheets", "TC", "Residence Proof", "Community Certificate"]
      },
      ageLimit: {
        min: 17,
        max: null
      },
      fees: {
        tuitionPerYear: {
          min: 8500,
          max: 50000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 18000
        }
      },
      scholarships: ["State Government Merit Scholarships"],
      placements: {
        averageSalary: 400000,
        highestSalary: 800000,
        topRecruiters: ["Pharma Sector", "TCS", "Wipro"]
      },
      facilities: ["C.P. Brown Language Research Center", "Botanical Garden", "Central Instrumentation Facility"],
      notablePoints: ["Houses the famous C.P. Brown Memorial Library for Telugu literature"]
    },
    {
      id: "adikavi-nannaya-university-rajahmundry",
      name: "Adikavi Nannaya University",
      shortName: "AKNU",
      description: "A major public state university in Rajamahendravaram covering East and West Godavari districts.",
      type: "State",
      establishedYear: 2006,
      location: {
        city: "Rajahmundry",
        state: "Andhra Pradesh",
        address: "NH-16, Rajanagaram, Rajamahendravaram, Andhra Pradesh 533296"
      },
      website: "http://www.aknu.edu.in",
      affiliations: ["UGC", "NAAC B+ Grade"],
      ranking: {
        indiaRank: null,
        globalRank: null,
        nirfRank: null
      },
      acceptanceRate: 40,
      coursesOffered: ["Arts", "Science", "Commerce", "Engineering", "Management", "Education", "Law"],
      admissionProcess: {
        undergraduate: ["AP EAPCET", "AP OAMDC"],
        postgraduate: ["APPGCET", "AP ICET"]
      },
      requirements: {
        minPercentage: "45%",
        entranceExams: ["APPGCET", "AP EAPCET"],
        documentsRequired: ["10th & 12th Certificates", "Rank Card", "Transfer Certificate"]
      },
      ageLimit: {
        min: 17,
        max: null
      },
      fees: {
        tuitionPerYear: {
          min: 9000,
          max: 55000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 20000
        }
      },
      scholarships: ["Jagananna Vidya Deevena", "Prathibha Awards"],
      placements: {
        averageSalary: 380000,
        highestSalary: 850000,
        topRecruiters: ["Infosys", "TCS", "Divi's Laboratories"]
      },
      facilities: ["Library", "Computer Center", "Sports Ground", "Hostels"],
      notablePoints: ["Largest university jurisdiction in AP in terms of affiliated degree colleges"]
    },
    {
      id: "gitam-university-visakhapatnam",
      name: "Gandhi Institute of Technology and Management (GITAM)",
      shortName: "GITAM",
      description: "A top-ranked private deemed university offering engineering, medical, management, and humanities degree programs.",
      type: "Deemed",
      establishedYear: 1980,
      location: {
        city: "Visakhapatnam",
        state: "Andhra Pradesh",
        address: "Gandhi Nagar, Rushikonda, Visakhapatnam, Andhra Pradesh 530045"
      },
      website: "https://www.gitam.edu",
      affiliations: ["UGC", "AICTE", "MCI", "NAAC A++ Grade"],
      ranking: {
        indiaRank: 67,
        globalRank: null,
        nirfRank: 67
      },
      acceptanceRate: 40,
      coursesOffered: ["Engineering", "Medical", "Pharmacy", "Management", "Law", "Architecture", "Science", "Humanities"],
      admissionProcess: {
        undergraduate: ["GAT (GITAM Admission Test)", "JEE Main", "NEET UG"],
        postgraduate: ["GAT", "GATE", "CAT", "NEET PG"]
      },
      requirements: {
        minPercentage: "60%",
        entranceExams: ["GAT", "JEE Main", "NEET UG"],
        documentsRequired: ["10th & 12th Certificate", "GAT Rank Card", "ID Proof"]
      },
      ageLimit: {
        min: 17,
        max: null
      },
      fees: {
        tuitionPerYear: {
          min: 160000,
          max: 380000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 110000
        }
      },
      scholarships: ["GITAM Merit Scholarships", "Sports Scholarships"],
      placements: {
        averageSalary: 650000,
        highestSalary: 4600000,
        topRecruiters: ["Amazon", "Microsoft", "Deloitte", "Mindtree", "TCS"]
      },
      facilities: ["Ocean-facing Scenic Campus", "Medical Hospital", "High-Tech Labs", "Sports Complex", "AC Hostels"],
      notablePoints: ["Includes GITAM Institute of Medical Sciences and Research (GIMSR)"]
    },
    {
      id: "centurion-university-vizianagaram",
      name: "Centurion University of Technology and Management, AP",
      shortName: "CUTM AP",
      description: "Skill-focused private university in Vizianagaram providing practical hands-on technical and vocational higher education.",
      type: "Private",
      establishedYear: 2017,
      location: {
        city: "Vizianagaram",
        state: "Andhra Pradesh",
        address: "Tekkali Village, Vizianagaram, Andhra Pradesh 535003"
      },
      website: "https://cutmap.ac.in",
      affiliations: ["UGC", "AICTE", "NAAC A Grade"],
      ranking: {
        indiaRank: null,
        globalRank: null,
        nirfRank: null
      },
      acceptanceRate: 55,
      coursesOffered: ["Engineering", "Agriculture", "Management", "Vocational Studies", "Applied Sciences"],
      admissionProcess: {
        undergraduate: ["CUEE", "AP EAPCET"],
        postgraduate: ["CUEE", "AP PGECET"]
      },
      requirements: {
        minPercentage: "50%",
        entranceExams: ["CUEE"],
        documentsRequired: ["10th Certificate", "12th Marksheet", "CUEE Scorecard"]
      },
      ageLimit: {
        min: 17,
        max: null
      },
      fees: {
        tuitionPerYear: {
          min: 80000,
          max: 180000,
          currency: "INR"
        },
        hostel: {
          available: true,
          costPerYear: 65000
        }
      },
      scholarships: ["Skill India Merit Scholarship", "EWS Scholarship"],
      placements: {
        averageSalary: 420000,
        highestSalary: 1200000,
        topRecruiters: ["Ashok Leyland", "TCS", "Yamaha", "Schneider Electric"]
      },
      facilities: ["Manufacturing Production Units", "Agriculture Farms", "Hostel", "Digital Labs"],
      notablePoints: ["Unique model integrating production centers with classroom learning"]
    }, {
    id: 'iim-visakhapatnam',
    name: 'Indian Institute of Management Visakhapatnam',
    shortName: 'IIM Visakhapatnam',
    description:
      'Established in 2015 as an Institute of National Importance under the IIM Act, IIM Visakhapatnam (IIMV) is among the fastest-growing premier management institutes in India, operating from a state-of-the-art permanent campus at Gambheeram.',
    type: 'Central',
    establishedYear: 2015,
    location: {
      city: 'Visakhapatnam',
      state: 'Andhra Pradesh',
      address: 'Gambheeram, Anandapuram Mandal, Visakhapatnam - 530052, Andhra Pradesh',
    },
    website: 'https://www.iimv.ac.in',
    affiliations: ['Autonomous / MHRD / Govt. of India'],
    ranking: {
      indiaRank: 26,
      globalRank: null,
      nirfRank: 26,
    },
    acceptanceRate: 1,
    coursesOffered: [
      'PGP (MBA)',
      'PGPEx (Executive MBA)',
      'PGPDGM (Digital Governance & Management)',
      'Ph.D. in Management',
      'Executive Ph.D.',
    ],
    admissionProcess: {
      undergraduate: [],
      postgraduate: [
        'CAT score-based shortlisting',
        'Personal Interview (PI) round via CAP (Common Admission Process) or direct IIMV process',
        'Final merit list calculated based on CAT percentile, PI score, academic profile, and work experience',
      ],
    },
    requirements: {
      minPercentage: '50% aggregate in Bachelor degree (45% for SC/ST/PwD)',
      entranceExams: ['CAT', 'GMAT', 'GRE', 'NET-JRF (for Ph.D.)'],
      documentsRequired: [
        '10th and 12th Marksheets & Certificates',
        'Graduation Degree & Semester Marksheets',
        'CAT/GMAT Scorecard',
        'Work Experience Certificates (if applicable)',
        'Category Certificate (EWS/OBC-NCL/SC/ST/PwD)',
        'Identity Proof (Aadhaar / Passport)',
      ],
    },
    ageLimit: {
      min: null,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 900000,
        max: 950000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 120000,
      },
    },
    scholarships: [
      'IIMV Financial Aid Scheme (Need-based tuition fee waiver)',
      'Ministry of Social Justice & Empowerment Scholarships for SC/ST',
      'Merit-cum-Means Scholarships for Minority Students',
      'Central Sector Scholarship Scheme for Top Class Education',
    ],
    placements: {
      averageSalary: 1640000,
      highestSalary: 3250000,
      topRecruiters: [
        'Deloitte',
        'KPMG',
        'EY',
        'PwC',
        'ICICI Bank',
        'Goldman Sachs',
        'Bosch',
        'Cognizant',
        'Infosys',
        'TVS Motors',
      ],
    },
    facilities: [
      'State-of-the-art Smart Classrooms',
      'Bloomberg Terminal & Financial Research Lab',
      'Fully Residential Air-Conditioned Hostels',
      'Digital Library with Access to Top Databases',
      'Sports Complex & Gym',
      'Incubation Center (IIMV-FIELD)',
    ],
    notablePoints: [
      'Recognized as an Institute of National Importance under the IIM Act, 2017.',
      'Achieved a 100% placement record consistently across all graduating MBA batches.',
      'Operates a dedicated startup incubator, IIMV-FIELD, supporting women-led ventures and regional entrepreneurship.',
    ],
  },
  {
    id: 'nit-andhra-pradesh',
    name: 'National Institute of Technology Andhra Pradesh',
    shortName: 'NIT Andhra Pradesh',
    description:
      'Established in 2015, NIT Andhra Pradesh is the youngest among the 31 National Institutes of Technology in India. It is an Institute of National Importance offering top-tier engineering, technology, and research education.',
    type: 'Central',
    establishedYear: 2015,
    location: {
      city: 'Tadepalligudem',
      state: 'Andhra Pradesh',
      address: 'Near National Highway 16, Kadakatla, Tadepalligudem - 534101, Andhra Pradesh',
    },
    website: 'https://www.nitandhra.ac.in',
    affiliations: ['Autonomous / MoE / Govt. of India'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: 201,
    },
    acceptanceRate: 2,
    coursesOffered: [
      'B.Tech in Computer Science & Engineering',
      'B.Tech in Electronics & Communication Engineering',
      'B.Tech in Electrical & Electronics Engineering',
      'B.Tech in Mechanical Engineering',
      'B.Tech in Civil Engineering',
      'B.Tech in Chemical Engineering',
      'B.Tech in Metallurgical & Materials Engineering',
      'B.Tech in Biotechnology',
      'M.Tech (Various Engineering Streams)',
      'Ph.D. in Engineering & Basic Sciences',
    ],
    admissionProcess: {
      undergraduate: [
        'Appear for JEE Main exam',
        'Participate in JoSAA / CSAB centralized seat allocation counseling',
        'Document verification and reporting at allotted institute',
      ],
      postgraduate: [
        'GATE qualification for M.Tech admissions',
        'Centralized counseling via CCMT',
        'Institute-level test and interview for Ph.D.',
      ],
    },
    requirements: {
      minPercentage: '75% aggregate in 10+2 (65% for SC/ST) or top 20 percentile in Board',
      entranceExams: ['JEE Main', 'GATE', 'DASA'],
      documentsRequired: [
        'JEE Main / GATE Scorecard',
        '10th and 12th Marks Statements & Passing Certificates',
        'JoSAA / CCMT Seat Allotment Letter',
        'Transfer and Migration Certificates',
        'Caste / Category Certificate (if applicable)',
        'Conduct & Medical Fitness Certificates',
      ],
    },
    ageLimit: {
      min: null,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 125000,
        max: 136000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 72000,
      },
    },
    scholarships: [
      'Central Sector Scheme of Scholarships for College and University Students',
      'National Fellowship and Scholarship for Higher Education of ST Students',
      'Fee Remission for SC/ST/PH and Economically Weaker Section B.Tech Students',
      'Andhra Pradesh Jagananna Vidya Deevena (for eligible state domiciles)',
    ],
    placements: {
      averageSalary: 754000,
      highestSalary: 4800000,
      topRecruiters: [
        'Amazon',
        'L&T',
        'TCS',
        'Infosys',
        'Cognizant',
        'Accenture',
        'Deloitte',
        'Hero MotoCorp',
        'Adani Group',
        'Publicis Sapient',
      ],
    },
    facilities: [
      'Modern Residential Campus spanning 170+ acres',
      'Advanced Research Labs & High-Performance Computing Center',
      'Central Library with E-Resources',
      'Boys and Girls Hostels with Wi-Fi',
      'Sports Complex, Gymnasium, and Medical Unit',
    ],
    notablePoints: [
      '31st and youngest NIT established under the NITSER Act by the Government of India.',
      'Full tuition fee waiver for SC/ST/PwD students and students with family income less than INR 1 Lakh/year.',
      'Rapidly expanding permanent campus with world-class academic and research infrastructure.',
    ],
  },
  {
    id: 'iiit-sri-city',
    name: 'Indian Institute of Information Technology Sri City, Chittoor',
    shortName: 'IIIT Sri City',
    description:
      'IIIT Sri City is an Institute of National Importance established under the Public-Private Partnership (PPP) model. Situated inside the industrial hub of Sri City, it benefits from direct proximity to global technology and manufacturing giants.',
    type: 'Central',
    establishedYear: 2013,
    location: {
      city: 'Sri City',
      state: 'Andhra Pradesh',
      address: '630 Gnan Marg, Sri City, Tirupati District - 517646, Andhra Pradesh',
    },
    website: 'https://www.iiits.ac.in',
    affiliations: ['Autonomous / MoE Govt. of India (PPP Mode)'],
    ranking: {
      indiaRank: 133,
      globalRank: null,
      nirfRank: 133,
    },
    acceptanceRate: 3,
    coursesOffered: [
      'B.Tech in Computer Science and Engineering (CSE)',
      'B.Tech in Artificial Intelligence and Data Science (AI & DS)',
      'B.Tech in Electronics and Communication Engineering (ECE)',
      'M.Tech in AI & Machine Learning',
      'M.Tech in Cyber Security',
      'M.S. by Research',
      'Ph.D. in CSE, ECE, & Basic Sciences',
    ],
    admissionProcess: {
      undergraduate: [
        'Qualify JEE Main',
        'Counseling through JoSAA / CSAB rounds',
        'Reporting and physical document verification at the campus',
      ],
      postgraduate: [
        'GATE score screening for M.Tech via CCMT',
        'Direct institute written test and interview for M.S. and Ph.D. candidates',
      ],
    },
    requirements: {
      minPercentage: '75% in 10+2 with PCM (65% for SC/ST/PwD)',
      entranceExams: ['JEE Main', 'GATE', 'DASA'],
      documentsRequired: [
        'JEE Main Scorecard & Seat Allotment Letter',
        'Class 10th and 12th Certificate & Marksheet',
        'Category Certificate (OBC-NCL / EWS / SC / ST / PwD)',
        'Transfer & Conduct Certificates',
        'Government Photo ID Proof',
      ],
    },
    ageLimit: {
      min: null,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 330000,
        max: 390000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 90000,
      },
    },
    scholarships: [
      'National Scholarship Portal (NSP) schemes',
      'Pratibha Awards & AP Government Fee Reimbursement',
      'Fee concessions for meritorious and economically backward students',
    ],
    placements: {
      averageSalary: 1844000,
      highestSalary: 12000000,
      topRecruiters: [
        'Google',
        'Amazon',
        'Microsoft',
        'Broadridge',
        'Deloitte',
        'Cognizant',
        'Groww',
        'Genesys',
        'L&T',
        'Samsung',
      ],
    },
    facilities: [
      '70-Acre Eco-friendly Smart Campus',
      'High-Performance Computing Infrastructure and AI Research Labs',
      'Air-conditioned Auditoriums & Digital Classrooms',
      'Fully Furnished Hostels with High-Speed Wi-Fi',
      'Sports Arena & Student Activity Center',
    ],
    notablePoints: [
      'Located in Sri City integrated industrial township, providing industry interaction and internship opportunities.',
      'Strong placement statistics with top packages touching INR 1.2 Crore.',
      'Focuses heavily on cutting-edge research in AI, IoT, Data Analytics, and Next-Gen Wireless Systems.',
    ],
  },
  {
    id: 'iiitdm-kurnool',
    name: 'Indian Institute of Information Technology Design and Manufacturing Kurnool',
    shortName: 'IIITDM Kurnool',
    description:
      'Established in 2015 by the Ministry of Education, IIITDM Kurnool is an Institute of National Importance specialized in integrating information technology with design and manufacturing engineering practices.',
    type: 'Central',
    establishedYear: 2015,
    location: {
      city: 'Kurnool',
      state: 'Andhra Pradesh',
      address: 'Jagannathagattu, Dinnedevarapadu, Kurnool - 518007, Andhra Pradesh',
    },
    website: 'https://www.iiitk.ac.in',
    affiliations: ['Autonomous / MoE / Govt. of India'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: 151,
    },
    acceptanceRate: 3,
    coursesOffered: [
      'B.Tech in Computer Science and Engineering (CSE)',
      'B.Tech in CSE with specialization in AI & Data Science',
      'B.Tech in Electronics and Communication Engineering (ECE) with Design & Manufacturing',
      'B.Tech in Mechanical Engineering with Design & Manufacturing',
      'M.Tech in Smart Manufacturing / VLSI & Embedded Systems',
      'Ph.D. in Computer, Electronics, Mechanical, and Basic Sciences',
    ],
    admissionProcess: {
      undergraduate: [
        'Secure valid rank in JEE Main',
        'Participate in centralized counseling via JoSAA / CSAB',
        'Complete registration and verification at IIITDM Kurnool',
      ],
      postgraduate: [
        'Qualify GATE exam for M.Tech admissions via CCMT',
        'Institute entrance exam and interview for Ph.D.',
      ],
    },
    requirements: {
      minPercentage: '75% aggregate in 10+2 with Physics, Chemistry, and Mathematics',
      entranceExams: ['JEE Main', 'GATE', 'DASA'],
      documentsRequired: [
        '10th and 12th Marks Cards and Certificates',
        'JEE Main / GATE Scorecard',
        'Seat Allotment Letter & Fee Receipt',
        'Category / Disability Certificate (if applicable)',
        'Transfer, Migration, and Character Certificates',
      ],
    },
    ageLimit: {
      min: null,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 140000,
        max: 160000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 65000,
      },
    },
    scholarships: [
      'Top Class Education Scheme for SC/ST Students',
      'Central Sector Scheme of Scholarships',
      'State-specific scholarships via NSP Portal',
    ],
    placements: {
      averageSalary: 980000,
      highestSalary: 2800000,
      topRecruiters: [
        'L&T Infotech',
        'Cognizant',
        'TCS',
        'Capgemini',
        'MathWorks',
        'Amazon',
        'Wipro',
        'Mindtree',
        'Samsung',
      ],
    },
    facilities: [
      'Hilltop Scenic Campus spanning 151 acres',
      'Advanced Prototyping & Product Design Labs',
      'CAD/CAM and Robotics Laboratories',
      'Modern Hostel Blocks with Mess Facilities',
      'Central Library and High-Speed Campus Network',
    ],
    notablePoints: [
      'Unique curriculum integrating Design Thinking and Manufacturing with IT core disciplines.',
      'Designated Institute of National Importance situated on the Jagannathagattu hillock in Kurnool.',
      'Active innovation ecosystem with state-of-the-art additive manufacturing and IoT prototyping setups.',
    ],
  },
  {
    id: 'iiser-tirupati',
    name: 'Indian Institute of Science Education and Research Tirupati',
    shortName: 'IISER Tirupati',
    description:
      'Established in 2015, IISER Tirupati is an autonomous Institute of National Importance under the Ministry of Education. It is dedicated to high-quality science education and cutting-edge research across fundamental science disciplines.',
    type: 'Central',
    establishedYear: 2015,
    location: {
      city: 'Tirupati',
      state: 'Andhra Pradesh',
      address: 'Yerpedu - Venkatagiri Road, Yerpedu Post, Tirupati District - 517619, Andhra Pradesh',
    },
    website: 'http://www.iisertirupati.ac.in',
    affiliations: ['Autonomous / MoE / Govt. of India'],
    ranking: {
      indiaRank: 55,
      globalRank: null,
      nirfRank: 55,
    },
    acceptanceRate: 2,
    coursesOffered: [
      'BS-MS Dual Degree (5 Years)',
      'Integrated Ph.D. Program',
      'Ph.D. in Biology, Chemistry, Mathematics, Physics, and Earth Sciences',
      'M.S. by Research',
    ],
    admissionProcess: {
      undergraduate: [
        'Apply via IISER Aptitude Test (IAT)',
        'Centralized IISER Joint Admission Counseling based on IAT Rank',
        'Document verification and admission confirmation',
      ],
      postgraduate: [
        'Shortlisting based on national level exams (GATE / CSIR-NET / JEST / JAM)',
        'Interview and research proposal presentation at IISER Tirupati',
      ],
    },
    requirements: {
      minPercentage: '60% marks in 10+2 with Science Stream (55% for SC/ST/PwD)',
      entranceExams: ['IAT (IISER Aptitude Test)', 'CSIR-NET', 'UGC-NET', 'GATE', 'JAM', 'JEST'],
      documentsRequired: [
        'IAT Rank Card / Qualification Scorecard',
        'Class 10th and 12th Marksheets',
        'Category Certificate (if applicable)',
        'Identification Proof',
        'Migration and Transfer Certificates',
      ],
    },
    ageLimit: {
      min: null,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 95000,
        max: 115000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 45000,
      },
    },
    scholarships: [
      'INSPIRE Scholarship (DST) worth INR 80,000/year for eligible BS-MS students',
      'PMRF (Prime Minister’s Research Fellowship) for top Ph.D. scholars',
      'Institute Fellowships for Integrated Ph.D. and Ph.D. researchers',
    ],
    placements: {
      averageSalary: 850000,
      highestSalary: 2000000,
      topRecruiters: [
        'Dr. Reddy’s Laboratories',
        'AstraZeneca',
        'Syngene International',
        'TCS Research',
        'Biocon',
        'Academic & International PhD Placements (Max Planck, MIT, ETH Zurich)',
      ],
    },
    facilities: [
      'Permanent World-Class Campus in Yerpedu',
      'Advanced Instrumentation Facility (NMR, Mass Spec, Electron Microscopy)',
      'High-Performance Supercomputing Cluster',
      'Comprehensive Library and Digital Knowledge Portal',
      'Fully Residential Campus with Sports and Recreational Amenities',
    ],
    notablePoints: [
      'Emphasizes interdisciplinary scientific research right from the undergraduate level.',
      'A majority of BS-MS graduates secure fully funded Ph.D. positions at top Ivy League and international universities.',
      'Hosts specialized centers for energy research, climate science, and molecular biology.',
    ],
  },
  {
    id: 'spa-vijayawada',
    name: 'School of Planning and Architecture, Vijayawada',
    shortName: 'SPA Vijayawada',
    description:
      'Established in 2008 as an autonomous Institute of National Importance under the Ministry of Education, SPA Vijayawada is one of the premier institutions in India exclusively focused on architecture, planning, and design education.',
    type: 'Central',
    establishedYear: 2008,
    location: {
      city: 'Vijayawada',
      state: 'Andhra Pradesh',
      address: 'ITI Road, Vijayawada - 520008, Andhra Pradesh',
    },
    website: 'https://www.spav.ac.in',
    affiliations: ['Autonomous / MoE / Council of Architecture (CoA)'],
    ranking: {
      indiaRank: 12,
      globalRank: null,
      nirfRank: 12,
    },
    acceptanceRate: 3,
    coursesOffered: [
      'Bachelor of Architecture (B.Arch - 5 Years)',
      'Bachelor of Planning (B.Plan - 4 Years)',
      'Master of Architecture (Sustainable Architecture / Landscape Architecture / Urban Design)',
      'Master of Planning (Urban & Regional / Environmental / Transport / Housing)',
      'Ph.D. in Architecture and Planning',
    ],
    admissionProcess: {
      undergraduate: [
        'Qualify JEE Main Paper 2A (for B.Arch) or Paper 2B (for B.Plan)',
        'Participate in JoSAA / CSAB counseling',
        'Document verification and final seat acceptance',
      ],
      postgraduate: [
        'Qualify GATE or CEED score',
        'Counseling via CCMT or direct SPAV entrance process/interview',
      ],
    },
    requirements: {
      minPercentage: '50% aggregate in 10+2 with Mathematics as compulsory subject',
      entranceExams: ['JEE Main Paper 2', 'NATA', 'GATE', 'CEED'],
      documentsRequired: [
        'JEE Main / NATA Scorecard',
        '10th and 12th Marksheets & Certificates',
        'Council of Architecture Eligibility Proof',
        'Category Certificate (if applicable)',
        'Portfolio (for PG Architecture interviews)',
      ],
    },
    ageLimit: {
      min: null,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 90000,
        max: 120000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 50000,
      },
    },
    scholarships: [
      'Central Sector Scholarship Scheme',
      'PG GATE / CEED Stipend of INR 12,400/month for M.Arch & M.Plan students',
      'State Welfare Scholarships for SC/ST/OBC students',
    ],
    placements: {
      averageSalary: 650000,
      highestSalary: 1600000,
      topRecruiters: [
        'Gensler',
        'L&T Construction',
        'Atkins',
        'Jones Lang LaSalle (JLL)',
        'CBRE',
        'RITES',
        'TCPO (Town and Country Planning Organisation)',
        'Surbana Jurong',
      ],
    },
    facilities: [
      'GRIHA 5-Star Rated Eco-Friendly Campus',
      'Material Testing & Environmental Design Laboratories',
      'GIS and Spatial Analytics Labs',
      'Central Library with Architecture & Planning Repositories',
      'Design Studios and Model Making Workshops',
    ],
    notablePoints: [
      'One of only three central SPAs established by the Govt. of India (alongside SPA Delhi and SPA Bhopal).',
      'NIRF Ranked among top institutions in India for Architecture and Planning.',
      'Active consultancy wing involved in major smart city, urban development, and heritage preservation projects.',
    ],
  },
  {
    id: 'iipe-visakhapatnam',
    name: 'Indian Institute of Petroleum and Energy, Visakhapatnam',
    shortName: 'IIPE Visakhapatnam',
    description:
      'Established in 2016 under the IIPE Act, 2017, IIPE Visakhapatnam is an autonomous Institute of National Importance backed by major public sector oil companies (HPCL, IOCL, ONGC, GAIL, OIL). It focuses on energy, petroleum, and chemical domain expertise.',
    type: 'Central',
    establishedYear: 2016,
    location: {
      city: 'Visakhapatnam',
      state: 'Andhra Pradesh',
      address: '2nd Floor, AU Block, Tech-Park Campus, Andhra University / Permanent Campus: Vangali, Sabhavaram Mandal, Visakhapatnam - 530003, Andhra Pradesh',
    },
    website: 'https://www.iipe.ac.in',
    affiliations: ['Autonomous / Ministry of Petroleum & Natural Gas (MoPNG)'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null,
    },
    acceptanceRate: 2,
    coursesOffered: [
      'B.Tech in Petroleum Engineering',
      'B.Tech in Chemical Engineering',
      'M.Tech in Energy Engineering',
      'Ph.D. in Petroleum, Chemical, Energy, and Basic Sciences',
    ],
    admissionProcess: {
      undergraduate: [
        'Must qualify JEE Advanced exam',
        'Apply directly through the IIPE online portal (Admissions outside JoSAA)',
        'Merit-based admission selection based on JEE Advanced Rank',
      ],
      postgraduate: [
        'GATE score screening for M.Tech',
        'Written test and interview process for Ph.D. applicants',
      ],
    },
    requirements: {
      minPercentage: '75% aggregate in 10+2 with Physics, Chemistry, and Mathematics (65% for SC/ST/PwD)',
      entranceExams: ['JEE Advanced', 'GATE'],
      documentsRequired: [
        'JEE Advanced Admit Card and Rank Card',
        '10th and 12th Marksheets & Certificates',
        'Category Certificate (EWS/OBC-NCL/SC/ST/PwD)',
        'Transfer & Character Certificates',
        'Aadhaar / Photo ID Card',
      ],
    },
    ageLimit: {
      min: null,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 150000,
        max: 180000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 60000,
      },
    },
    scholarships: [
      'Merit-cum-Means Scholarship sponsored by PSUs',
      'Central Sector Scholarship Scheme',
      'Financial Assistance to economically weak students',
    ],
    placements: {
      averageSalary: 1100000,
      highestSalary: 2400000,
      topRecruiters: [
        'HPCL',
        'IOCL',
        'ONGC',
        'GAIL',
        'Oil India Limited',
        'Reliance Industries',
        'Halliburton',
        'Schlumberger',
        'Baker Hughes',
        'L&T Energy',
      ],
    },
    facilities: [
      'State-of-the-art Petroleum and Chemical Testing Labs',
      'Advanced Simulation & Reservoir Modeling Software',
      'Library with Online Access to OnePetro & ScienceDirect',
      'Hostel accommodations with modern amenities',
      'New 200+ Acre Permanent Campus development in Sabhavaram',
    ],
    notablePoints: [
      'Directly mentored and backed by major oil and gas Maharatna PSUs (ONGC, HPCL, IOCL, GAIL, OIL).',
      'B.Tech admissions are strictly based on JEE Advanced ranks (similar to IITs).',
      'Designed to lead research in traditional hydrocarbons as well as renewable energy technologies.',
    ],
  },
  {
    id: 'aditya-university',
    name: 'Aditya University',
    shortName: 'Aditya University',
    description:
      'Established originally as Aditya Engineering College in 2001 and elevated to a State Private University, Aditya University is a multidisciplinary institution in Surampalem known for its expansive campus, NAAC A++ accreditation, and strong placement ecosystem.',
    type: 'Private',
    establishedYear: 2001,
    location: {
      city: 'Surampalem',
      state: 'Andhra Pradesh',
      address: 'Aditya Nagar, ADB Road, Surampalem, Kakinada District - 533437, Andhra Pradesh',
    },
    website: 'https://www.adityauniversity.in',
    affiliations: ['UGC Recognized', 'NAAC A++ Accredited', 'AICTE Approved'],
    ranking: {
      indiaRank: 151,
      globalRank: null,
      nirfRank: 151,
    },
    acceptanceRate: 65,
    coursesOffered: [
      'B.Tech in Computer Science & Engineering',
      'B.Tech in AI & Machine Learning',
      'B.Tech in Data Science',
      'B.Tech in Electronics & Communication Engineering',
      'B.Tech in Agricultural Engineering',
      'B.Tech in Petroleum Technology',
      'B.Tech in Mechanical Engineering',
      'MBA',
      'MCA',
      'B.Pharm',
      'Ph.D. Programs',
    ],
    admissionProcess: {
      undergraduate: [
        'Appear for AP EAPCET (EAMCET) or Aditya University Scholastic Aptitude Test (ASAT)',
        'Participate in state counseling or direct university management entry',
        'Document verification and fee submission for final seat confirmation',
      ],
      postgraduate: [
        'Qualify AP PGECET / GATE for M.Tech programs',
        'Qualify AP ICET for MBA and MCA courses',
        'Direct university interview for research/doctoral admissions',
      ],
    },
    requirements: {
      minPercentage: '45% aggregate in 10+2 with PCM (40% for reserved categories)',
      entranceExams: ['AP EAPCET', 'ASAT', 'AP ICET', 'AP PGECET', 'JEE Main'],
      documentsRequired: [
        '10th and 12th Marks Statements & Passing Certificates',
        'AP EAPCET / Entrance Rank Card',
        'Transfer and Conduct Certificates',
        'Caste / Community Certificate (if applicable)',
        'Passport size Photographs & Government Photo ID',
      ],
    },
    ageLimit: {
      min: null,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 60000,
        max: 120000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 75000,
      },
    },
    scholarships: [
      'Aditya Merit Scholarships based on EAPCET/ASAT ranks',
      'Andhra Pradesh Jagananna Vidya Deevena Fee Reimbursement Scheme',
      'Sports and Special Achievements Concessions',
    ],
    placements: {
      averageSalary: 450000,
      highestSalary: 3130000,
      topRecruiters: [
        'TCS',
        'Infosys',
        'Wipro',
        'Cognizant',
        'DXC Technology',
        'Capgemini',
        'Tech Mahindra',
        'L&T Infotech',
        'Hyundai',
      ],
    },
    facilities: [
      '180+ Acre Modern Residential Campus',
      'Advanced Robotics & Cloud Computing Labs',
      'Central Digital Library with IEEE Access',
      'On-campus Technical Training and Placement Incubation Cell',
      'Sports Complex, Gymnasium, and Indoor Stadium',
    ],
    notablePoints: [
      'Accredited with NAAC A++ grade.',
      'Operates a specialized Technical Skill Development Center in partnership with APSSDC.',
      'Strong regional industry linkages leading to high-volume recruitment drives annually.',
    ],
  },
  {
    id: 'annamacharya-university',
    name: 'Annamacharya University',
    shortName: 'Annamacharya University',
    description:
      'Founded in 1998 as Annamacharya Institute of Technology and Sciences (AITS) and elevated to a State Private University, Annamacharya University is a leading technical and professional educational hub in the Rayalaseema region.',
    type: 'Private',
    establishedYear: 1998,
    location: {
      city: 'Rajampet',
      state: 'Andhra Pradesh',
      address: 'New Boyanapalli, Rajampet, Annamayya District - 516126, Andhra Pradesh',
    },
    website: 'https://annamacharyauniversity.edu.in',
    affiliations: ['UGC Recognized', 'NAAC A+ Accredited', 'AICTE Approved'],
    ranking: {
      indiaRank: 81,
      globalRank: null,
      nirfRank: null,
    },
    acceptanceRate: 70,
    coursesOffered: [
      'B.Tech in Computer Science & Engineering',
      'B.Tech in Artificial Intelligence & Data Science',
      'B.Tech in Electronics & Communication Engineering',
      'B.Tech in Electrical & Electronics Engineering',
      'B.Tech in Civil Engineering',
      'B.Tech in Mechanical Engineering',
      'M.Tech in Structural / VLSI / CSE',
      'MBA',
      'MCA',
      'Diploma Programs (Polytechnic)',
    ],
    admissionProcess: {
      undergraduate: [
        'Qualify AP EAPCET exam',
        'Participate in APSCHE seat allotment counseling or University direct quotas',
        'Physical reporting and verification of academic credentials',
      ],
      postgraduate: [
        'Qualify AP ICET for MBA/MCA or AP PGECET/GATE for M.Tech',
        'Seat allocation via state counseling or merit list',
      ],
    },
    requirements: {
      minPercentage: '45% marks in 10+2 with Physics, Chemistry, and Mathematics (40% for reserved classes)',
      entranceExams: ['AP EAPCET', 'AUET', 'AP ICET', 'AP PGECET', 'GATE'],
      documentsRequired: [
        'AP EAPCET / Entrance Rank Card & Hall Ticket',
        'Class 10th and 12th Marksheets & Certificates',
        'Transfer Certificate (TC) & Migration Certificate',
        'Integrated Community Certificate (if claiming quota)',
        'Aadhaar Card copy',
      ],
    },
    ageLimit: {
      min: null,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 60000,
        max: 95000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 60000,
      },
    },
    scholarships: [
      'AP Government Fee Reimbursement (Jagananna Vidya Deevena)',
      'Merit-based Fee Waivers by Annamacharya Educational Trust',
      'Post-Matric Scholarships for SC/ST/BC Students',
    ],
    placements: {
      averageSalary: 400000,
      highestSalary: 1200000,
      topRecruiters: [
        'TCS',
        'Cognizant',
        'Wipro',
        'Infosys',
        'Capgemini',
        'Hexaware',
        'IBM',
        'Mphasis',
      ],
    },
    facilities: [
      'Spacious 30+ Acre Green Campus',
      'Well-equipped Computer Labs & Center of Excellence',
      'Central Library with Electronic Journals',
      'Separate Hostels for Boys and Girls with Dining Facilities',
      'Playgrounds for Cricket, Volleyball, and Track Events',
    ],
    notablePoints: [
      'Carries over 25 years of educational heritage in the Rayalaseema region.',
      'Holds NAAC A+ accreditation status.',
      'Active Memorandum of Understanding (MoUs) with leading IT firms for skill development.',
    ],
  },
  {
    id: 'best-innovation-university',
    name: 'B.E.S.T. Innovation University',
    shortName: 'BESTIU',
    description:
      'Established in 2019, Bharatiya Engineering Science and Technology Innovation University (BESTIU) in Anantapur focuses on applied learning, emerging technology integration, sustainable agriculture, and entrepreneurial innovation.',
    type: 'Private',
    establishedYear: 2019,
    location: {
      city: 'Anantapur',
      state: 'Andhra Pradesh',
      address: 'Gownivaripalli, Gorantla Mandal, Anantapur District - 515231, Andhra Pradesh',
    },
    website: 'https://bestiu.edu.in',
    affiliations: ['UGC Recognized', 'Established under AP Private Universities Act'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null,
    },
    acceptanceRate: 75,
    coursesOffered: [
      'B.Tech in Computer Science & Engineering',
      'B.Tech in AI & Data Science',
      'B.Tech in Cyber Security',
      'B.Sc. (Hons) Agriculture',
      'B.Sc. Forestry / Horticulture',
      'BBA / MBA in Agri-Business Management',
      'B.Design',
      'Ph.D. Programs',
    ],
    admissionProcess: {
      undergraduate: [
        'Apply online and appear for BEE (BESTIU Entrance Exam) or submit AP EAPCET / CUET / JEE scores',
        'Personal Interview / counseling evaluation',
        'Provisional admission offer and document verification',
      ],
      postgraduate: [
        'University entrance test followed by interview',
        'Merit evaluation based on Bachelor degree scores',
      ],
    },
    requirements: {
      minPercentage: '50% aggregate in 10+2 with relevant stream subjects',
      entranceExams: ['BEE', 'AP EAPCET', 'CUET', 'JEE Main'],
      documentsRequired: [
        'Class 10th and 12th Marksheets & Certificates',
        'Entrance Test Scorecard',
        'Transfer & Conduct Certificates',
        'Government Identity Proof (Aadhaar)',
        'Passport Size Photographs',
      ],
    },
    ageLimit: {
      min: null,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 75000,
        max: 175000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 70000,
      },
    },
    scholarships: [
      'BESTIU National Bright Spark Scholarship Scheme',
      'Merit Scholarship for top entrance rank holders',
      'Sports & Defence Wards Financial Assistance',
    ],
    placements: {
      averageSalary: 420000,
      highestSalary: 1000000,
      topRecruiters: [
        'AgroStar',
        'TCS',
        'Tech Mahindra',
        'Ninjacart',
        'Cognizant',
        'Bayer',
        'Syngenta',
      ],
    },
    facilities: [
      'Eco-friendly Rural Innovation Campus',
      'Agricultural Research Farms & Polyhouses',
      'IoT and AI Technology Labs',
      'On-campus Residential Quarters & Hostels',
      'Library and E-learning Center',
    ],
    notablePoints: [
      'Unique focus on merging Information Technology with Agricultural and Environmental Sciences.',
      'Dedicated Innovation & Incubation Center fostering student startup ventures.',
      'Hands-on experimental learning modules incorporated into all undergraduate programs.',
    ],
  },
  {
    id: 'godavari-global-university',
    name: 'Godavari Global University',
    shortName: 'GGU Rajahmundry',
    description:
      'Formerly Godavari Institute of Engineering and Technology (GIET) founded in 1998, Godavari Global University is a state private university in Rajamahendravaram dedicated to engineering, management, healthcare, and applied sciences.',
    type: 'Private',
    establishedYear: 1998,
    location: {
      city: 'Rajamahendravaram',
      state: 'Andhra Pradesh',
      address: 'NH-16, Chaitanya Knowledge City, Rajamahendravaram - 533296, Andhra Pradesh',
    },
    website: 'https://www.ggu.ac.in',
    affiliations: ['UGC Recognized', 'NAAC A+ Accredited', 'AICTE Approved'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null,
    },
    acceptanceRate: 70,
    coursesOffered: [
      'B.Tech in Computer Science & Engineering',
      'B.Tech in Artificial Intelligence & Machine Learning',
      'B.Tech in Electronics & Communication Engineering',
      'B.Tech in Mechanical Engineering',
      'B.Tech in Petroleum Engineering',
      'B.Pharm / Pharm.D',
      'MBA / MCA',
      'M.Tech Programs',
      'Ph.D. Degrees',
    ],
    admissionProcess: {
      undergraduate: [
        'Apply through AP EAPCET counseling or direct university entrance test (GGUET)',
        'Seat allotment based on entrance rank and candidate choice',
        'Physical certificate verification and admission fee payment',
      ],
      postgraduate: [
        'Scores in AP ICET (for MBA/MCA) or AP PGECET/GATE (for M.Tech)',
        'Direct registration and interview for research programs',
      ],
    },
    requirements: {
      minPercentage: '45% aggregate in 10+2 with PCM/PCB (40% for reserved categories)',
      entranceExams: ['AP EAPCET', 'GGUET', 'AP ICET', 'AP PGECET', 'JEE Main', 'GPAT'],
      documentsRequired: [
        'Class 10th and 12th Mark Statements',
        'Entrance Exam Hall Ticket & Rank Card',
        'Transfer Certificate and Study Certificates',
        'Category Certificate (if applicable)',
        'Aadhaar Card and Passport Photos',
      ],
    },
    ageLimit: {
      min: null,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 65000,
        max: 130000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 70000,
      },
    },
    scholarships: [
      'AP Government Jagananna Vidya Deevena Scheme',
      'GGU Merit Scholarships for high scorers in EAPCET/GGUET',
      'Institutional Financial Concessions for needy students',
    ],
    placements: {
      averageSalary: 450000,
      highestSalary: 2200000,
      topRecruiters: [
        'TCS',
        'Wipro',
        'Infosys',
        'Cognizant',
        'Capgemini',
        'HCL',
        'Virtusa',
        'Reliance Industries',
      ],
    },
    facilities: [
      'Chaitanya Knowledge City Integrated Campus',
      'Siemens Center of Excellence Labs',
      'High-Speed Internet Enabled Digital Classrooms',
      'Comprehensive Central Library',
      'Hostels with In-House Dining and Medical Services',
    ],
    notablePoints: [
      'Carries forward over two decades of engineering education excellence from the former GIET campus.',
      'Features a Siemens Center of Excellence providing hands-on industrial automation training.',
      'Maintains consistent campus recruitment tracks with top tier IT and core sector employers.',
    ],
  },
  {
    id: 'krea-university',
    name: 'Krea University',
    shortName: 'Krea University',
    description:
      'Established in 2018 in Sri City, Krea University is a pioneer in liberal arts and science education anchored by its unique Interwoven Learning approach, housing the renowned IFMR Graduate School of Business.',
    type: 'Private',
    establishedYear: 2018,
    location: {
      city: 'Sri City',
      state: 'Andhra Pradesh',
      address:'Central Expressways, Sri City, Tirupati District - 517646, Andhra Pradesh',
    },
    website: 'https://krea.edu.in',
    affiliations: ['UGC Recognized', 'Established under AP Private Universities Act'],
    ranking: {
      indiaRank: 60,
      globalRank: null,
      nirfRank: 60,
    },
    acceptanceRate: 15,
    coursesOffered: [
      'B.A. (Hons.) in Economics, History, Politics, Philosophy, Literature, Social Studies',
      'B.Sc. (Hons.) in Computer Science, Biological Sciences, Chemistry, Mathematics, Physics, Environmental Studies',
      'MBA (via IFMR Graduate School of Business)',
      'Ph.D. in Management, Humanities, & Sciences',
    ],
    admissionProcess: {
      undergraduate: [
        'Online application submission with essays and academic credentials',
        'Krea Immersion Day including aptitude assessment, essay writing, and presentation/group conversation',
        'Personal Interview round followed by admission decision',
      ],
      postgraduate: [
        'CAT / XAT / NMAT / GMAT / CMAT scores for MBA (IFMR GSB)',
        'Personal Interview and WAT (Written Ability Test) selection process',
      ],
    },
    requirements: {
      minPercentage: 'Passing Class 12th or equivalent board examination',
      entranceExams: ['Krea Immersion Assessment', 'SAT', 'ACT', 'CAT', 'XAT', 'GMAT', 'NMAT'],
      documentsRequired: [
        '10th and 12th Marksheets / Predicted Grades',
        'Extracurricular Achievements Portfolio',
        'Personal Statement & Essays',
        'Entrance Exam Scorecard (if applicable)',
        'Government ID Proof',
      ],
    },
    ageLimit: {
      min: null,
      max: 21,
    },
    fees: {
      tuitionPerYear: {
        min: 800000,
        max: 950000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 200000,
      },
    },
    scholarships: [
      'Need-based Financial Aid covering up to 100% of tuition and living costs',
      'Merit-cum-Means Scholarships for underprivileged students',
    ],
    placements: {
      averageSalary: 1350000,
      highestSalary: 2290000,
      topRecruiters: [
        'Barclays',
        'JPMorgan Chase',
        'Deloitte',
        'EY',
        'KPMG',
        'Accenture',
        'Wells Fargo',
        'Crisil',
        'HSBC',
      ],
    },
    facilities: [
      '40-Acre State-of-the-Art Eco-Friendly Residential Campus',
      'Advanced Science Labs & Media Studios',
      'World-class Library with Global Online Journal Databases',
      'Air-conditioned Student Residences with Dining Halls',
      'Sports Complex including Athletics, Basketball, and Indoor Courts',
    ],
    notablePoints: [
      'Backed by prominent global leaders, academicians, and industrialists including Raghuram Rajan and Anand Mahindra.',
      'Unique "Interwoven Learning" pedagogy connecting arts, sciences, and practical human skills.',
      'Houses IFMR GSB, one of South India’s premier business schools with top-tier financial sector placements.',
    ],
  },
  {
    id: 'mohan-babu-university',
    name: 'Mohan Babu University',
    shortName: 'MBU Tirupati',
    description:
      'Established in 2022 and built upon the 30-year legacy of Sree Vidyanikethan Educational Trust, Mohan Babu University is a premier multidisciplinary university offering over 108 programs across tech, healthcare, film, and management.',
    type: 'Private',
    establishedYear: 2022,
    location: {
      city: 'Tirupati',
      state: 'Andhra Pradesh',
      address: 'Sree Sainath Nagar, A.Rangampet, Chandragiri Mandal, Tirupati - 517102, Andhra Pradesh',
    },
    website: 'https://www.mbu.asia',
    affiliations: ['UGC Recognized', 'NAAC A+ Accredited', 'AICTE Approved'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: 151,
    },
    acceptanceRate: 60,
    coursesOffered: [
      'B.Tech in Computer Science & Engineering (with AI/ML, Cyber Security, Data Science)',
      'B.Tech in Electronics & Communication Engineering',
      'B.Pharm / Pharm.D',
      'B.Sc. Nursing / Allied Health Sciences',
      'BBA / MBA',
      'B.Des / Film & Media Studies',
      'B.A. LL.B (Hons) / B.B.A. LL.B (Hons)',
      'Ph.D. Programs',
    ],
    admissionProcess: {
      undergraduate: [
        'Apply online and appear for MBUET (Mohan Babu University Entrance Test) or present AP EAPCET / JEE Main ranks',
        'Counseling session and discipline selection based on merit',
        'Document verification and registration fee payment',
      ],
      postgraduate: [
        'Scores in national/state entrance tests (AP ICET / GATE / MBU Entrance)',
        'Personal interview evaluation where applicable',
      ],
    },
    requirements: {
      minPercentage: '50% aggregate in 10+2 with relevant subject background',
      entranceExams: ['MBUET', 'AP EAPCET', 'JEE Main', 'AP ICET', 'CLAT', 'NEET'],
      documentsRequired: [
        '10th and 12th Mark Statements',
        'MBUET / Qualifying Entrance Scorecard',
        'Transfer and Conduct Certificates',
        'Community / Category Certificate',
        'Aadhaar Card and Passport Photos',
      ],
    },
    ageLimit: {
      min: null,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 100000,
        max: 250000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 85000,
      },
    },
    scholarships: [
      'MBU Merit Scholarships for entrance exam top rankers',
      'Scholarships for sports quota and defense personnel dependents',
      'Andhra Pradesh State Government Fee Assistance schemes',
    ],
    placements: {
      averageSalary: 600000,
      highestSalary: 6000000,
      topRecruiters: [
        'Amazon',
        'Google',
        'Cognizant',
        'TCS',
        'Infosys',
        'Wipro',
        'HCL',
        'Hyundai',
        'Deloitte',
      ],
    },
    facilities: [
      'Massive 100+ Acre Residential Campus near Tirupati',
      'State-of-the-Art Innovation Center and AI Labs',
      'Central Library with over 100,000 volumes',
      'On-Campus Multi-Specialty Hospital and Health Center',
      'Sports Arena, Gymnasium, and Performing Arts Theaters',
    ],
    notablePoints: [
      'Founded under the leadership of veteran actor and educator Dr. M. Mohan Babu.',
      'Maintains an exceptional track record of placement packages up to INR 60 LPA.',
      'Offers wide multidisciplinary programs ranging from core engineering to film, media, and law.',
    ],
  },
  {
    id: 'saveetha-amaravati-university',
    name: 'Saveetha Amaravati University',
    shortName: 'SAU Amaravati',
    description:
      'Established in 2017 in Vijayawada/Amaravati under the Saveetha Group, Saveetha Amaravati University specializes in medical, dental, occupational therapy, physiotherapy, allied health sciences, and engineering education.',
    type: 'Private',
    establishedYear: 2017,
    location: {
      city: 'Amaravati',
      state: 'Andhra Pradesh',
      address: 'Vaishnavi Complex, Opposite Best Price, Vijayawada - 520008, Andhra Pradesh',
    },
    website: 'https://saveethaamaravati.university',
    affiliations: ['UGC Recognized', 'Approved by AP State Government Gazette', 'PCI / INC Approved'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null,
    },
    acceptanceRate: 65,
    coursesOffered: [
      'Bachelor of Physiotherapy (BPT)',
      'Bachelor of Occupational Therapy (BOT)',
      'B.Sc. Allied Health Sciences (Radiology, Lab Technology, Anesthesia)',
      'B.Tech in Computer Science & Engineering',
      'B.Tech in Biomedical Engineering',
      'B.Sc. Nursing',
      'Postgraduate Health Science Programs',
    ],
    admissionProcess: {
      undergraduate: [
        'Online application through university admission portal',
        'Merit screening based on 10+2 marks / NEET scores (for medical streams)',
        'Counseling and seat allotment process',
      ],
      postgraduate: [
        'Merit in qualifying graduation degree and personal interview',
      ],
    },
    requirements: {
      minPercentage: '50% aggregate in 10+2 with Physics, Chemistry, and Biology/Mathematics',
      entranceExams: ['NEET', 'AP EAPCET', 'University Entrance Test'],
      documentsRequired: [
        'Class 10th and 12th Marksheets',
        'Transfer and Migration Certificates',
        'NEET Scorecard (for medical/paramedical if required)',
        'Government Photo ID Proof',
        'Passport Size Photographs',
      ],
    },
    ageLimit: {
      min: 17,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 90000,
        max: 200000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 80000,
      },
    },
    scholarships: [
      'Merit-based tuition fee waivers for high board exam scorers',
      'Financial concessions for economically weaker students',
    ],
    placements: {
      averageSalary: 480000,
      highestSalary: 1200000,
      topRecruiters: [
        'Apollo Hospitals',
        'Manipal Hospitals',
        'Saveetha Medical Center',
        'TCS',
        'Capgemini',
        'HCL',
        'Religare Healthcare',
      ],
    },
    facilities: [
      'Modern Clinical Training and Simulation Center',
      'Advanced Anatomy & Biomedical Laboratories',
      'Digital Library with Access to International Medical Journals',
      'Student Hostels with Modern Amenities and Dining',
      'On-Campus Clinical Training Hospital',
    ],
    notablePoints: [
      'Backed by Chennai’s renowned Saveetha Group with decades of medical and healthcare education leadership.',
      'Strong clinical exposure and practical internship placements in multi-specialty hospitals.',
      'Emerging hub for allied health sciences, physiotherapy, and bio-engineering in the capital region.',
    ],
  },
  {
    id: 'apollo-university',
    name: 'The Apollo University',
    shortName: 'Apollo University',
    description:
      'Established in 2021 by the Apollo Hospitals Group, The Apollo University in Chittoor is a research-driven institution dedicated to healthcare, health technology, management, nursing, and life sciences education.',
    type: 'Private',
    establishedYear: 2021,
    location: {
      city: 'Chittoor',
      state: 'Andhra Pradesh',
      address: 'The Apollo Knowledge City Campus, Murukambattu, Chittoor - 517127, Andhra Pradesh',
    },
    website: 'https://apollouniversity.edu.in',
    affiliations: ['UGC Recognized', 'INC Approved', 'AICTE Approved'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null,
    },
    acceptanceRate: 60,
    coursesOffered: [
      'B.Sc. Nursing',
      'Bachelor of Physiotherapy (BPT)',
      'B.Sc. Medical Lab Technology / Imaging Technology',
      'B.Tech in Computer Science & Engineering (AI & Data Science for Healthcare)',
      'BBA in Healthcare Management',
      'MBA in Hospital & Healthcare Management',
      'M.Sc. Health Informatics',
    ],
    admissionProcess: {
      undergraduate: [
        'Apply online through the university admissions portal',
        'Appear for Apollo University Entrance Assessment / Interview or state exam evaluation',
        'Verification of academic transcripts and final seat allotment',
      ],
      postgraduate: [
        'Evaluation of graduation aggregate marks and interview performance',
        'Management test scores (AP ICET / CAT / MAT) for MBA admissions',
      ],
    },
    requirements: {
      minPercentage: '50% aggregate in 10+2 with Science/Commerce streams as required per course',
      entranceExams: ['Apollo Entrance Assessment', 'AP EAPCET', 'NEET', 'AP ICET', 'MAT'],
      documentsRequired: [
        'Class 10th and 12th Mark Sheets & Passing Certificates',
        'Transfer and Migration Certificates',
        'Entrance Scorecard (if applicable)',
        'Identity Proof (Aadhaar Card)',
        'Medical Fitness Certificate',
      ],
    },
    ageLimit: {
      min: 17,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 100000,
        max: 220000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 85000,
      },
    },
    scholarships: [
      'Apollo Merit Scholarship Scheme for academic toppers',
      'Financial Assistance for children of healthcare and frontline workers',
      'Need-based fee waivers for eligible rural candidates',
    ],
    placements: {
      averageSalary: 520000,
      highestSalary: 1500000,
      topRecruiters: [
        'Apollo Hospitals Group',
        'Apollo Pharmacy',
        'Philips Healthcare',
        'Cognizant',
        'Fortis Healthcare',
        'Dr. Reddy’s Laboratories',
        'TCS Healthcare',
      ],
    },
    facilities: [
      'Apollo Knowledge City Integrated Campus',
      'Advanced Health Informatics & Telemedicine Labs',
      'Simulation Center for Clinical and Emergency Training',
      'Digital Knowledge Resource Center',
      'Air-conditioned Residential Hostels with Sports Facilities',
    ],
    notablePoints: [
      'Direct backing and integration with Apollo Hospitals, Asia’s leading healthcare network.',
      'Students gain direct access to clinical internships, hospital operations training, and health-tech research.',
      'Unique specialization in merging Artificial Intelligence and Data Science with Healthcare systems.',
    ],
  },
  {
    id: 'angrau-guntur',
    name: 'Acharya N. G. Ranga Agricultural University',
    shortName: 'ANGRAU',
    description:
      'Established in 1964 as Andhra Pradesh Agricultural University, ANGRAU is the premier state agricultural university headquartered in Lam, Guntur, dedicated to education, research, and extension in agricultural and allied sciences.',
    type: 'State',
    establishedYear: 1964,
    location: {
      city: 'Guntur',
      state: 'Andhra Pradesh',
      address: 'Administrative Office, Lam, Guntur - 522034, Andhra Pradesh',
    },
    website: 'https://angrau.ac.in',
    affiliations: ['UGC Recognized', 'ICAR Accredited'],
    ranking: {
      indiaRank: 31,
      globalRank: null,
      nirfRank: 31,
    },
    acceptanceRate: 15,
    coursesOffered: [
      'B.Sc. (Hons) Agriculture',
      'B.Tech. Agricultural Engineering',
      'B.Tech. Food Technology',
      'B.Sc. (Hons) Community Science',
      'M.Sc. Agriculture',
      'M.Tech. Agricultural Engineering',
      'Ph.D. in Agricultural Sciences',
      'Diploma in Agriculture / Seed Technology / Organic Farming',
    ],
    admissionProcess: {
      undergraduate: [
        'Appear for AP EAPCET (Agriculture Stream) or ICAR AIEEA UG',
        'Participate in ANGRAU state counseling for seat allocation based on merit and category ranks',
        'Verification of original certificates and payment of term fees',
      ],
      postgraduate: [
        'Qualify ICAR AIEEA PG for M.Sc. and M.Tech admissions',
        'Participate in ICAR / ANGRAU central counseling and interview procedures',
      ],
    },
    requirements: {
      minPercentage: '50% aggregate in 10+2 with PCB or PCM subjects (40% for SC/ST/PH)',
      entranceExams: ['AP EAPCET', 'ICAR AIEEA UG', 'ICAR AIEEA PG', 'ICAR AICE-JRF/SRF'],
      documentsRequired: [
        'AP EAPCET / ICAR Rank Card and Hall Ticket',
        'Class 10th and 12th Marks Statements & Certificates',
        'Transfer Certificate and Study/Bonafide Certificates (Classes 6 to 12)',
        'Agriculture Non-Municipal Area Certificate (Form-VIII, if applying under farmer quota)',
        'Caste & Income Certificates (if applicable)',
      ],
    },
    ageLimit: {
      min: 17,
      max: 22,
    },
    fees: {
      tuitionPerYear: {
        min: 25000,
        max: 55000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 30000,
      },
    },
    scholarships: [
      'ICAR National Talent Scholarship (NTS)',
      'Jagananna Vidya Deevena & Vasathi Deevena (AP State Govt Schemes)',
      'ANGRAU Merit Stipends for Postgraduate & Doctoral Scholars',
    ],
    placements: {
      averageSalary: 450000,
      highestSalary: 1200000,
      topRecruiters: [
        'ITC Agri-Business',
        'Coromandel International',
        'Nagarjuna Fertilizers',
        'Syngenta',
        'Bayer CropScience',
        'Netafim',
        'Godrej Agrovet',
        'State Bank of India (Agricultural Field Officers)',
      ],
    },
    facilities: [
      'Extensive Agricultural Research Farms and Experimental Stations',
      'Central Instrumentation Laboratories & Micro-propagation Units',
      'Krishi Vigyan Kendras (KVKs) and Extension Centers',
      'Comprehensive Digital Library with CAB Direct and CeRA Access',
      'On-campus Student Hostels, Auditoriums, and Sports Grounds',
    ],
    notablePoints: [
      'One of India’s oldest and largest state agricultural universities with a vast network of research stations and KVKs.',
      'Ranks among the top ICAR-accredited agricultural universities in the country.',
      'Maintains a special reservation quota for candidates hailing from rural and agricultural family backgrounds.',
    ],
  },
  {
    id: 'andhra-kesari-university',
    name: 'Andhra Kesari University',
    shortName: 'AKU Ongole',
    description:
      'Established in 2022 by upgrading the erstwhile Acharya Nagarjuna University Post-Graduate Centre in Ongole, Andhra Kesari University serves as a key public state university driving higher education in the Prakasam district.',
    type: 'State',
    establishedYear: 2022,
    location: {
      city: 'Ongole',
      state: 'Andhra Pradesh',
      address: 'Pelluru, Ongole, Prakasam District - 523225, Andhra Pradesh',
    },
    website: 'https://aku.edu.in',
    affiliations: ['UGC Recognized', 'NCTE Approved'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null,
    },
    acceptanceRate: 80,
    coursesOffered: [
      'M.A. in English, Economics, History, Telugu',
      'M.S.W. (Master of Social Work)',
      'M.Com',
      'M.Sc. in Mathematics, Statistics, Physics, Chemistry',
      'M.Ed.',
      'B.Ed.',
      'Ph.D. Programs',
    ],
    admissionProcess: {
      undergraduate: [
        'Admissions to affiliated colleges via AP OAMDC (Online Admissions Module for Degree Colleges)',
        'Verification of intermediate/10+2 credentials during online web-options allotment',
      ],
      postgraduate: [
        'Appear for APPGCET (Andhra Pradesh Post Graduate Common Entrance Test)',
        'Participate in state web-counseling conducted by APSCHE',
        'Reporting to the university campus with allotment order and original documents',
      ],
    },
    requirements: {
      minPercentage: '50% aggregate in Bachelor Degree for PG programs (45% for SC/ST)',
      entranceExams: ['APPGCET', 'AP EdCET'],
      documentsRequired: [
        'APPGCET Scorecard and Rank Card',
        'Degree Provisional Certificate & Consolidated Marks Memo',
        'Class 10th and 12th Certificates',
        'Transfer Certificate (TC)',
        'Integrated Community & Residence Certificates',
      ],
    },
    ageLimit: {
      min: null,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 12000,
        max: 35000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 25000,
      },
    },
    scholarships: [
      'Jagananna Vidya Deevena Fee Reimbursement',
      'Jagananna Vasathi Deevena Hostel Assistance',
      'Post-Matric Scholarships for SC/ST/BC/EWS Students',
    ],
    placements: {
      averageSalary: 300000,
      highestSalary: 600000,
      topRecruiters: [
        'Regional Educational Institutions',
        'Local Banking & Financial Sector Firms',
        'NGOs and Social Enterprises',
        'Pharmaceutical Laboratories',
      ],
    },
    facilities: [
      'University PG Campus with Dedicated Departmental Buildings',
      'Central Library and Reading Halls',
      'Computer Center with Internet Connectivity',
      'Separate University Hostels for Men and Women',
      'Sports and Recreation Facilities',
    ],
    notablePoints: [
      'Named after the illustrious freedom fighter and first Chief Minister of Andhra State, Tanguturi Prakasam Pantulu (Andhra Kesari).',
      'Evolved from a 30-year-old ANU PG Center into a full-fledged independent State Public University.',
      'Focuses heavily on regional socio-economic development through accessible humanities, science, and teacher education.',
    ],
  },
  {
    id: 'ap-fisheries-university',
    name: 'Andhra Pradesh Fisheries University',
    shortName: 'APFU Vijayawada',
    description:
      'Established in 2022 in Vijayawada, Andhra Pradesh Fisheries University is a specialized state university created to strengthen education, scientific research, and sustainable development in fisheries, aquaculture, and marine sciences.',
    type: 'State',
    establishedYear: 2022,
    location: {
      city: 'Vijayawada',
      state: 'Andhra Pradesh',
      address: 'Padmaja Nagar, Tadigadapa, Vijayawada, NTR District - 520007, Andhra Pradesh',
    },
    website: 'https://apfu.ap.gov.in',
    affiliations: ['UGC Recognized', 'ICAR Recognized'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null,
    },
    acceptanceRate: 40,
    coursesOffered: [
      'Bachelor of Fisheries Science (B.F.Sc.)',
      'Master of Fisheries Science (M.F.Sc.)',
      'Diploma in Fisheries Engineering / Aquaculture',
      'Ph.D. in Fisheries Science',
    ],
    admissionProcess: {
      undergraduate: [
        'Appear for AP EAPCET (Agriculture/Pharmacy Stream)',
        'Apply for APFU state counseling based on EAPCET ranks',
        'Document verification and seat allotment in constituent fisheries colleges',
      ],
      postgraduate: [
        'Qualify ICAR AIEEA PG (Fisheries discipline) or APFU entrance assessment',
        'Merit-based selection and counseling interview',
      ],
    },
    requirements: {
      minPercentage: '50% aggregate in 10+2 with Physics, Chemistry, and Biology (40% for reserved categories)',
      entranceExams: ['AP EAPCET', 'ICAR AIEEA PG'],
      documentsRequired: [
        'AP EAPCET / Entrance Rank Card',
        '10th and 12th Marks Memos & Certificates',
        'Transfer and Study Certificates',
        'Farmer/Fishermen Community Certificate (if applying under special quota)',
        'Aadhaar Card and Caste Certificate',
      ],
    },
    ageLimit: {
      min: 17,
      max: 22,
    },
    fees: {
      tuitionPerYear: {
        min: 20000,
        max: 45000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 30000,
      },
    },
    scholarships: [
      'AP State Jagananna Vidya Deevena Scheme',
      'ICAR Fellowships for PG Scholars',
      'Coastal Community & Fisheries Department Stipends',
    ],
    placements: {
      averageSalary: 420000,
      highestSalary: 950000,
      topRecruiters: [
        'MPEDA (Marine Products Export Development Authority)',
        'Avanti Feeds',
        'Apex Frozen Foods',
        'CP Aquaculture',
        'Coastal Corporation',
        'State Fisheries Department (Fisheries Development Officers)',
      ],
    },
    facilities: [
      'Aquaculture Hatcheries and Experimental Ponds',
      'Marine Biology and Aquatic Animal Health Labs',
      'Fish Processing and Quality Control Demonstration Units',
      'Central Library with Marine Science Journals',
      'Hostel Accommodation with Mess Facilities',
    ],
    notablePoints: [
      'Created specifically to cater to Andhra Pradesh’s position as India’s leading state in shrimp and fish production.',
      'Direct tie-ups with commercial export houses and research bodies like CIFT and CIBA.',
      'Strong focus on practical field training along coastal and inland water systems.',
    ],
  },
  {
    id: 'cluster-university-kurnool',
    name: 'Cluster University, Kurnool',
    shortName: 'CUK Kurnool',
    description:
      'Established in 2019 under RUSA (Rashtriya Uchchatar Shiksha Abhiyan), Cluster University, Kurnool was formed by pooling premier heritage institutions including Silver Jubilee Degree College to provide quality multidisciplinary higher education.',
    type: 'State',
    establishedYear: 2019,
    location: {
      city: 'Kurnool',
      state: 'Andhra Pradesh',
      address: 'Silver Jubilee Degree College Campus, B-Camp, Kurnool - 518002, Andhra Pradesh',
    },
    website: 'https://cukurnool.ac.in',
    affiliations: ['UGC Recognized'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null,
    },
    acceptanceRate: 70,
    coursesOffered: [
      'B.A. in Special English, History, Economics, Political Science',
      'B.Sc. in Mathematics, Physics, Computer Science, Chemistry, Biotechnology',
      'B.Com. (General / Computer Applications)',
      'M.Sc. in Computer Science / Chemistry / Physics',
      'M.Com and M.A. Programs',
    ],
    admissionProcess: {
      undergraduate: [
        'Register through AP OAMDC (Online Admissions Module for Degree Colleges)',
        'Web-counseling seat allotment based on 10+2 merit and reservation rules',
      ],
      postgraduate: [
        'Appear for APPGCET',
        'Web-counseling and document verification at designated university centers',
      ],
    },
    requirements: {
      minPercentage: 'Passing 10+2 / Intermediate examination for UG; qualifying Bachelor Degree for PG',
      entranceExams: ['APPGCET (for PG)'],
      documentsRequired: [
        '10th and 12th Marks Cards',
        'Degree Certificates (for PG)',
        'OAMDC / APPGCET Allotment Letter',
        'Transfer Certificate (TC)',
        'Residence / Community Certificates',
      ],
    },
    ageLimit: {
      min: null,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 8000,
        max: 25000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 20000,
      },
    },
    scholarships: [
      'Andhra Pradesh Jagananna Vidya Deevena & Vasathi Deevena',
      'Government Post-Matric Scholarships for SC/ST/BC/EWS',
    ],
    placements: {
      averageSalary: 280000,
      highestSalary: 550000,
      topRecruiters: [
        'TCS (Ignite Program)',
        'Wipro Step',
        'Infosys BPM',
        'ICICI Bank',
        'State Government Public Services',
      ],
    },
    facilities: [
      'Historic Campus of Silver Jubilee Degree College',
      'Science Laboratories & Computer Infrastructure',
      'Central Library with Digital Archives',
      'On-Campus Student Hostels',
      'Sports Fields for Cricket, Volleyball, and Athletics',
    ],
    notablePoints: [
      'Includes the prestigious Silver Jubilee Degree College, known for producing notable civil servants, scientists, and political leaders.',
      'Created under the RUSA initiative to modernize state college clusters into cohesive university units.',
      'Offers high-quality public higher education at highly affordable fee structures.',
    ],
  },
  {
    id: 'dsnlu-visakhapatnam',
    name: 'Damodaram Sanjivayya National Law University',
    shortName: 'DSNLU',
    description:
      'Established in 2008 in Visakhapatnam, DSNLU is a autonomous National Law University (NLU) dedicated to legal education, interdisciplinary research, and legal aid services.',
    type: 'State',
    establishedYear: 2008,
    location: {
      city: 'Visakhapatnam',
      state: 'Andhra Pradesh',
      address: 'NYAYAPRASTHA, Sabbavaram, Visakhapatnam District - 531035, Andhra Pradesh',
    },
    website: 'https://dsnlu.ac.in',
    affiliations: ['UGC Recognized', 'Bar Council of India (BCI) Approved', 'Association of Indian Universities (AIU)'],
    ranking: {
      indiaRank: 28,
      globalRank: null,
      nirfRank: 28,
    },
    acceptanceRate: 5,
    coursesOffered: [
      '5-Year Integrated B.A. LL.B. (Hons.)',
      '1-Year LL.M. (Constitutional Law, Criminal Law, Corporate Law)',
      'Ph.D. in Law',
    ],
    admissionProcess: {
      undergraduate: [
        'Appear for Common Law Admission Test (CLAT UG)',
        'Participate in CLAT Centralized Counseling for NLU seat allotment',
        'Document submission and admission fee confirmation at DSNLU campus',
      ],
      postgraduate: [
        'Appear for CLAT PG examination',
        'CLAT counseling allotment based on rank and preference',
      ],
    },
    requirements: {
      minPercentage: '45% aggregate in 10+2 for General/OBC; 40% for SC/ST categories',
      entranceExams: ['CLAT UG', 'CLAT PG'],
      documentsRequired: [
        'CLAT Scorecard and Admit Card',
        'Class 10th and 12th Marks Sheets and Certificates',
        'Transfer and Conduct Certificates',
        'Caste / Category / Domicile Certificate (for AP domicile quota)',
        'Passport Size Photographs',
      ],
    },
    ageLimit: {
      min: null,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 150000,
        max: 220000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 60000,
      },
    },
    scholarships: [
      'Andhra Pradesh State Government Vidya Deevena Scheme (for eligible local students)',
      'Merit-cum-Means Financial Assistance by DSNLU',
      'Central Sector Scholarships for SC/ST Law Students',
    ],
    placements: {
      averageSalary: 750000,
      highestSalary: 1800000,
      topRecruiters: [
        'Cyril Amarchand Mangaldas',
        'Trilegal',
        'Khaitan & Co',
        'Luthra and Luthra',
        'ICICI Bank Legal Dept',
        'TATA AIG Legal',
        'Ernst & Young (EY)',
      ],
    },
    facilities: [
      '50-Acre "Nyayaprastha" Green Residential Campus in Sabbavaram',
      'Modern Moot Court Halls and Legal Aid Clinic',
      'Advanced Law Library with Manupatra, SCC Online, and LexisNexis',
      'Fully Air-Conditioned Classrooms and Digital Auditoriums',
      'Hostels with Wi-Fi, Gym, and Sports Courts',
    ],
    notablePoints: [
      'Part of India’s premier network of National Law Universities (NLUs).',
      'Features specialized research centers for Intellectual Property Rights, Maritime Law, and Criminal Justice.',
      'Maintains strong moot court culture with student teams competing globally.',
    ],
  },
  {
    id: 'dr-ysr-afau-kadapa',
    name: 'Dr. Y.S.R. Architecture and Fine Arts University',
    shortName: 'Dr. YSR AFAU',
    description:
      'Established in 2020 in Kadapa, Dr. Y.S.R. Architecture and Fine Arts University is a specialized state university devoted to promoting architectural design, urban planning, visual arts, and traditional crafts.',
    type: 'State',
    establishedYear: 2020,
    location: {
      city: 'Kadapa',
      state: 'Andhra Pradesh',
      address: 'Ashtagramam, Korrapadu Road, Kadapa District - 516003, Andhra Pradesh',
    },
    website: 'https://ysrafau.ac.in',
    affiliations: ['UGC Recognized', 'Council of Architecture (COA) Approved'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null,
    },
    acceptanceRate: 65,
    coursesOffered: [
      'Bachelor of Architecture (B.Arch)',
      'Bachelor of Design (B.Des in Interior Design / Fashion Design)',
      'Bachelor of Fine Arts (BFA in Painting, Sculpture, Applied Art, Photography)',
      'B.Tech in Urban & Regional Planning',
      'Postgraduate Fine Arts & Design Degrees',
    ],
    admissionProcess: {
      undergraduate: [
        'For B.Arch: Must possess valid NATA score or JEE Main Paper 2 score followed by state counseling',
        'For BFA/B.Des: Appear for university entrance test (Dr. YSR AFAU CET) / state art aptitude test',
        'Seat allotment and document verification',
      ],
      postgraduate: [
        'Academic merit evaluation and entrance interview / portfolio review',
      ],
    },
    requirements: {
      minPercentage: '50% aggregate in 10+2 with Physics, Chemistry, and Mathematics (for B.Arch)',
      entranceExams: ['NATA', 'JEE Main Paper 2', 'State Art CET'],
      documentsRequired: [
        'NATA / Entrance Exam Scorecard',
        '10th and 12th Mark Statements',
        'Portfolio of Artwork / Design Work (where applicable)',
        'Transfer Certificate',
        'Caste and Domicile Certificates',
      ],
    },
    ageLimit: {
      min: null,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 35000,
        max: 85000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 35000,
      },
    },
    scholarships: [
      'Jagananna Vidya Deevena Fee Reimbursement',
      'Jagananna Vasathi Deevena',
      'State Welfare Scholarships for SC/ST/BC Students',
    ],
    placements: {
      averageSalary: 380000,
      highestSalary: 800000,
      topRecruiters: [
        'Architectural Design Studios',
        'Urban Planning Agencies',
        'Interior Design Firms',
        'Media & Advertising Houses',
        'Construction Conglomerates',
      ],
    },
    facilities: [
      'Architectural Design Studios and Drafting Rooms',
      'Sculpture Workshops, Metal Casting, and Printmaking Labs',
      'CAD / GIS Computer Centers',
      'Art Gallery and Exhibition Spaces',
      'Central Library for Fine Arts and Built Environment',
    ],
    notablePoints: [
      'First dedicated state university for Architecture and Fine Arts in Andhra Pradesh.',
      'Combines traditional South Indian art forms and craft preservation with modern digital architecture and design.',
      'Approved by the Council of Architecture (COA) for standard professional architectural degrees.',
    ],
  },
  {
    id: 'dr-abdul-haq-urdu-university',
    name: 'Dr. Abdul Haq Urdu University',
    shortName: 'DAHUU Kurnool',
    description:
      'Established in 2016 in Kurnool, Dr. Abdul Haq Urdu University is a state public university established to promote Urdu language and literature, humanities, sciences, and professional education in the Urdu medium.',
    type: 'State',
    establishedYear: 2016,
    location: {
      city: 'Kurnool',
      state: 'Andhra Pradesh',
      address: 'Orvakal, Kurnool District - 518010, Andhra Pradesh',
    },
    website: 'https://ahuuk.ac.in',
    affiliations: ['UGC Recognized'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null,
    },
    acceptanceRate: 85,
    coursesOffered: [
      'B.A. in Urdu, History, Economics',
      'B.Sc. in Computer Science, Mathematics, Statistics',
      'B.Com. (Computer Applications)',
      'M.A. in Urdu, English',
      'M.Sc. in Computer Science, Mathematics',
      'M.Com',
      'MSW (Master of Social Work)',
    ],
    admissionProcess: {
      undergraduate: [
        'Apply online through AP OAMDC portal',
        'Seat allotment based on 10+2 merit (preference given to students with Urdu background)',
      ],
      postgraduate: [
        'Qualify APPGCET in the respective discipline',
        'State web-counseling and physical document verification',
      ],
    },
    requirements: {
      minPercentage: 'Passing 10+2 with Urdu as a subject or medium of instruction preferred',
      entranceExams: ['APPGCET (for PG)'],
      documentsRequired: [
        '10th and 12th Marksheets (proof of Urdu language if applicable)',
        'APPGCET Rank Card (for PG)',
        'Transfer Certificate',
        'Integrated Community Certificate',
        'Aadhaar Card',
      ],
    },
    ageLimit: {
      min: null,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 8000,
        max: 20000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 20000,
      },
    },
    scholarships: [
      'AP State Government Jagananna Vidya Deevena Scheme',
      'Minority Welfare Department Scholarships',
      'Post-Matric Financial Schemes',
    ],
    placements: {
      averageSalary: 250000,
      highestSalary: 500000,
      topRecruiters: [
        'Language & Translation Agencies',
        'Schools and Educational Foundations',
        'IT Support & BPO Services',
        'State Government Services',
      ],
    },
    facilities: [
      'Permanent Campus in Orvakal near Kurnool',
      'Urdu Language and Computer Laboratories',
      'University Library with Classical Urdu Manuscripts & Modern Textbooks',
      'Hostel Accommodation for Men and Women',
      'Seminar Halls and Sports Facilities',
    ],
    notablePoints: [
      'Named after the renowned Urdu scholar Baba-e-Urdu Dr. Abdul Haq.',
      'Set up specifically to empower linguistic minorities and advance higher education in Urdu medium.',
      'Maintains active preservation programs for regional Urdu literature and cultural heritage.',
    ],
  },
  {
    id: 'dr-ntr-uhs-vijayawada',
    name: 'Dr. YSR University of Health Sciences',
    shortName: 'YSRUHS (formerly NTRUHS)',
    description:
      'Established in 1986 in Vijayawada as the first health sciences university in India, Dr. YSR University of Health Sciences (formerly Dr. NTR University of Health Sciences) governs all medical, dental, nursing, and health science colleges across Andhra Pradesh.',
    type: 'State',
    establishedYear: 1986,
    location: {
      city: 'Vijayawada',
      state: 'Andhra Pradesh',
      address: 'NH-16 Service Road, Gunadala, Vijayawada, NTR District - 520008, Andhra Pradesh',
    },
    website: 'https://drysruhs.edu.in',
    affiliations: [
      'UGC Recognized',
      'National Medical Commission (NMC) Approved',
      'Dental Council of India (DCI) Approved',
      'Indian Nursing Council (INC) Approved',
      'AYUSH Approved',
    ],
    ranking: {
      indiaRank: 45,
      globalRank: null,
      nirfRank: null,
    },
    acceptanceRate: 5,
    coursesOffered: [
      'MBBS (Bachelor of Medicine and Bachelor of Surgery)',
      'BDS (Bachelor of Dental Surgery)',
      'BAMS / BHMS / BUMS (AYUSH degrees)',
      'B.Sc. Nursing',
      'Bachelor of Physiotherapy (BPT)',
      'MD / MS / MDS Specialist Degrees',
      'DM / M.Ch. Super-Specialty Degrees',
      'Ph.D. in Health Sciences',
    ],
    admissionProcess: {
      undergraduate: [
        'Appear for NEET UG examination',
        'Register for AP State NEET counseling conducted by Dr. YSRUHS',
        'Seat allotment in government or private medical/dental colleges based on NEET rank',
      ],
      postgraduate: [
        'Appear for NEET PG / NEET MDS / NEET SS exams',
        'State counseling allotment and physical verification at respective medical colleges',
      ],
    },
    requirements: {
      minPercentage: '50% aggregate in PCB in 10+2 for General; 40% for SC/ST/OBC plus qualifying NEET percentile',
      entranceExams: ['NEET UG', 'NEET PG', 'NEET MDS', 'NEET SS'],
      documentsRequired: [
        'NEET Admit Card and Rank Card',
        'Class 10th and 12th Certificate Marks Cards',
        'Study Certificates from Class 6 to 12',
        'Transfer & Migration Certificates',
        'AP Domicile / Residence Certificate',
        'Caste and EWS Certificate (if applicable)',
      ],
    },
    ageLimit: {
      min: 17,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 15000,
        max: 500000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 35000,
      },
    },
    scholarships: [
      'Andhra Pradesh Dr. YSR Aarogyasri / Health Welfare Student Grants',
      'Jagananna Vidya Deevena (for eligible medical students in state seats)',
      'Central Sector Medical Fellowships for Postgraduates',
    ],
    placements: {
      averageSalary: 900000,
      highestSalary: 2500000,
      topRecruiters: [
        'Andhra Pradesh Government Health Services (Civil Assistant Surgeons)',
        'Apollo Hospitals',
        'KIMS Hospitals',
        'Ramesh Hospitals',
        'Care Hospitals',
        'Max Healthcare',
        'Fortis Healthcare',
      ],
    },
    facilities: [
      'Affiliation and Examination Network covering 200+ Medical, Dental, and Nursing Colleges',
      'Central Health Sciences Digital Library',
      'Tele-Medicine and Electronic Examination System',
      'Dedicated Research and Academic Wing in Vijayawada',
    ],
    notablePoints: [
      'India’s first dedicated University of Health Sciences, serving as a pioneer model for other Indian states.',
      'Renamed to Dr. YSR University of Health Sciences in 2022 by the Government of Andhra Pradesh.',
      'Regulates medical standards, admissions, and degree conferrals for all medical doctors and healthcare professionals in the state.',
    ],
  },
  {
    id: 'dr-ysr-hu-tadepalligudem',
    name: 'Dr. Y.S.R. Horticultural University',
    shortName: 'Dr. YSRHU',
    description:
      'Established in 2007 at Venkataramannagudem near Tadepalligudem, Dr. Y.S.R. Horticultural University is India’s second dedicated horticultural university, pioneering research, education, and farm extension in fruits, vegetables, spices, and floriculture.',
    type: 'State',
    establishedYear: 2007,
    location: {
      city: 'Tadepalligudem',
      state: 'Andhra Pradesh',
      address: 'Venkataramannagudem, West Godavari District - 534101, Andhra Pradesh',
    },
    website: 'https://drysrhu.ap.gov.in',
    affiliations: ['UGC Recognized', 'ICAR Accredited'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null,
    },
    acceptanceRate: 20,
    coursesOffered: [
      'B.Sc. (Hons) Horticulture',
      'M.Sc. Horticulture (Fruit Science, Vegetable Science, Floriculture, Plantation Crops)',
      'Ph.D. in Horticulture',
      'Diploma in Horticulture',
    ],
    admissionProcess: {
      undergraduate: [
        'Appear for AP EAPCET (Agriculture Stream)',
        'Participate in state web counseling for horticultural college seat allotment',
      ],
      postgraduate: [
        'Qualify ICAR AIEEA PG for Master’s programs',
        'University merit entrance/interview for doctoral seats',
      ],
    },
    requirements: {
      minPercentage: '50% aggregate in 10+2 with Physics, Chemistry, and Biology (40% for reserved classes)',
      entranceExams: ['AP EAPCET', 'ICAR AIEEA PG', 'ICAR AICE-JRF/SRF'],
      documentsRequired: [
        'AP EAPCET / ICAR Rank Card',
        '10th and 12th Class Certificates',
        'Study and Residence Certificates',
        'Farmer Quota Proof (Form-VIII, if applicable)',
        'Caste and Income Certificates',
      ],
    },
    ageLimit: {
      min: 17,
      max: 22,
    },
    fees: {
      tuitionPerYear: {
        min: 22000,
        max: 48000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 28000,
      },
    },
    scholarships: [
      'ICAR National Talent Scholarship (NTS)',
      'Jagananna Vidya Deevena & Vasathi Deevena',
      'University Research Stipends for PG and Ph.D. Scholars',
    ],
    placements: {
      averageSalary: 420000,
      highestSalary: 900000,
      topRecruiters: [
        'ITC Spices Division',
        'Namdhari Seeds',
        'Mahyco',
        'Bayer CropScience',
        'UPL Limited',
        'State Horticulture Department (Horticulture Officers)',
      ],
    },
    facilities: [
      'Extensive Horticultural Research Stations and Demonstration Gardens',
      'Post-Harvest Technology & Food Processing Labs',
      'Tissue Culture and Biotechnology Facilities',
      'Central Digital Library',
      'Hostels for Boys and Girls on Main Campus',
    ],
    notablePoints: [
      'Second dedicated university for horticultural sciences established in India.',
      'Operates specialized research stations across various agro-climatic zones in Andhra Pradesh.',
      'Plays a critical role in increasing yield and export quality of tropical fruits, oil palm, and spices in South India.',
    ],
  },
  {
    id: 'dravidian-university-kuppam',
    name: 'Dravidian University',
    shortName: 'Dravidian University',
    description:
      'Established in 1997 at Kuppam near the tri-state border junction of AP, Karnataka, and Tamil Nadu, Dravidian University was founded to promote integrated research and linguistic harmony among South Indian (Dravidian) languages and folklore.',
    type: 'State',
    establishedYear: 1997,
    location: {
      city: 'Kuppam',
      state: 'Andhra Pradesh',
      address: 'Srinivasa Vanam, Agali Road, Kuppam, Chittoor District - 517425, Andhra Pradesh',
    },
    website: 'https://www.dravidianuniversity.ac.in',
    affiliations: ['UGC Recognized', 'NAAC Accredited'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null,
    },
    acceptanceRate: 80,
    coursesOffered: [
      'M.A. in Telugu, Kannada, Tamil, Malayalam, English, Linguistics, Comparative Literature',
      'M.A. in Folklore and Tribal Studies',
      'M.Sc. in Computer Science, Biotechnology, Chemistry, Herbal Sciences',
      'MBA / MCA',
      'B.Ed.',
      'Ph.D. in Dravidian Linguistics & Interdisciplinary Humanities',
    ],
    admissionProcess: {
      undergraduate: [
        'Online admission registration through AP OAMDC portal',
        'Merit-based allotment based on Intermediate/10+2 marks',
      ],
      postgraduate: [
        'Appear for APPGCET or Dravidian University Common Entrance Test (DUCET)',
        'Counseling and certificate verification for campus allotment',
      ],
    },
    requirements: {
      minPercentage: 'Pass in 10+2 for UG; Bachelor’s degree in relevant discipline for PG programs',
      entranceExams: ['APPGCET', 'AP ICET', 'AP EdCET', 'DUCET'],
      documentsRequired: [
        'APPGCET / Entrance Scorecard',
        'Degree Provisional Certificate & Marks Memos',
        '10th and 12th Certificates',
        'Transfer and Study Certificates',
        'Caste / Community Certificate',
      ],
    },
    ageLimit: {
      min: null,
      max: null,
    },
    fees: {
      tuitionPerYear: {
        min: 10000,
        max: 35000,
        currency: 'INR',
      },
      hostel: {
        available: true,
        costPerYear: 22000,
      },
    },
    scholarships: [
      'Jagananna Vidya Deevena & Vasathi Deevena Schemes',
      'Inter-State Dravidian Language Scholar Grants',
      'State Government Post-Matric Scholarships',
    ],
    placements: {
      averageSalary: 300000,
      highestSalary: 650000,
      topRecruiters: [
        'Translation & Publishing Houses',
        'Language Research Institutes',
        'Educational Foundations & Schools',
        'Software Companies (Localization divisions)',
        'State Civil Services',
      ],
    },
    facilities: [
      'Sprawling 1000+ Acre Scenic Campus "Srinivasa Vanam"',
      'Dravidian Language Translation & Publishing Bureau',
      'Prasaaraanga (Publication Center)',
      'Central Library with Rare Manuscripts on South Indian Heritage',
      'Residential Hostels for Boys and Girls',
    ],
    notablePoints: [
      'Jointly supported by the governments of Andhra Pradesh, Karnataka, Tamil Nadu, and Kerala.',
      'Located strategically near the tri-state border junction of Kuppam.',
      'Dedicated to cross-cultural linguistic research, Dravidian folklore preservation, and comparative literature.',
    ],
  },
  {
    id: 'jntugv-vizianagaram',
    name: 'Jawaharlal Nehru Technological University Gurajada, Vizianagaram',
    shortName: 'JNTUGV',
    description: 'A state university in Andhra Pradesh established to promote technical education and research across the northern coastal districts.',
    type: 'State',
    establishedYear: 2022,
    location: {
      city: 'Vizianagaram',
      state: 'Andhra Pradesh',
      address: 'Dwarapudi, Vizianagaram, Andhra Pradesh - 535003'
    },
    website: 'https://jntugv.edu.in',
    affiliations: ['UGC', 'AICTE'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null
    },
    acceptanceRate: null,
    coursesOffered: ['B.Tech', 'M.Tech', 'MCA', 'MBA', 'Ph.D.'],
    admissionProcess: {
      undergraduate: ['Entrance Exam Score (AP EAPCET)', 'State Level Counseling (APSCHE)'],
      postgraduate: ['Entrance Exam Score (AP PGECET / GATE / AP ICET)', 'State Level Counseling']
    },
    requirements: {
      minPercentage: '45%',
      entranceExams: ['AP EAPCET', 'AP PGECET', 'GATE', 'AP ICET'],
      documentsRequired: ['10th Marks Memo', '12th Marks Memo', 'Transfer Certificate', 'Rank Card', 'Caste Certificate']
    },
    ageLimit: {
      min: 16,
      max: null
    },
    fees: {
      tuitionPerYear: {
        min: 35000,
        max: 70000,
        currency: 'INR'
      },
      hostel: {
        available: true,
        costPerYear: 35000
      }
    },
    scholarships: ['Jagananna Vidya Deevena (JVD)', 'Post-Matric Scholarship'],
    placements: {
      averageSalary: 400000,
      highestSalary: 1200000,
      topRecruiters: ['TCS', 'Wipro', 'Infosys', 'Cognizant', 'Tech Mahindra']
    },
    facilities: ['Central Library', 'Computer Labs', 'Sports Complex', 'Auditorium', 'Hostels'],
    notablePoints: ['Bifurcated from JNTU Kakinada to strengthen North Coastal AP education', 'Offers state-of-the-art laboratory infrastructure']
  },
  {
    id: 'krishna-university',
    name: 'Krishna University',
    shortName: 'KRU',
    description: 'A public state university located in Machilipatnam providing multi-disciplinary academic and professional education.',
    type: 'State',
    establishedYear: 2008,
    location: {
      city: 'Machilipatnam',
      state: 'Andhra Pradesh',
      address: 'Rudravaram, Machilipatnam, Krishna District, Andhra Pradesh - 521004'
    },
    website: 'https://kru.ac.in',
    affiliations: ['UGC', 'NAAC'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null
    },
    acceptanceRate: null,
    coursesOffered: ['B.Tech', 'M.Sc', 'M.A', 'M.Com', 'MBA', 'MCA', 'Ph.D.'],
    admissionProcess: {
      undergraduate: ['Entrance Exam Score (AP EAPCET)', 'Merit-based admission for degree programs'],
      postgraduate: ['AP PGCET', 'AP ICET', 'State Counseling']
    },
    requirements: {
      minPercentage: '45%',
      entranceExams: ['AP EAPCET', 'AP PGCET', 'AP ICET'],
      documentsRequired: ['Class 10 & 12 Certificates', 'Degree Certificates', 'Entrance Rank Card', 'Income/Caste Certificate']
    },
    ageLimit: {
      min: null,
      max: null
    },
    fees: {
      tuitionPerYear: {
        min: 15000,
        max: 50000,
        currency: 'INR'
      },
      hostel: {
        available: true,
        costPerYear: 30000
      }
    },
    scholarships: ['Jagananna Vidya Deevena', 'Government SC/ST Scholarships'],
    placements: {
      averageSalary: 350000,
      highestSalary: 800000,
      topRecruiters: ['Infosys', 'TCS', 'HDFC Bank', 'ICICI Bank']
    },
    facilities: ['Library', 'Laboratories', 'Hostels', 'Sports Facilities', 'NSS Unit'],
    notablePoints: ['Serves as a major educational center for Krishna district', 'Focuses on coastal environmental studies and professional learning']
  },
  {
    id: 'rgukt-nuzvid',
    name: 'Rajiv Gandhi University of Knowledge Technologies, Nuzvid',
    shortName: 'RGUKT Nuzvid',
    description: 'A autonomous state institute offering an integrated 6-year B.Tech program tailored for meritorious rural youth in Andhra Pradesh.',
    type: 'State',
    establishedYear: 2008,
    location: {
      city: 'Nuzvid',
      state: 'Andhra Pradesh',
      address: 'Mylavaram Road, Nuzvid, Eluru District, Andhra Pradesh - 521202'
    },
    website: 'https://rguktn.ac.in',
    affiliations: ['UGC', 'AICTE'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null
    },
    acceptanceRate: null,
    coursesOffered: ['Integrated B.Tech (6-Year)', 'M.Tech'],
    admissionProcess: {
      undergraduate: ['Merit based on Class 10 (SSC) GPA with rural weightage', 'RGUKT CET (if conducted)'],
      postgraduate: ['GATE', 'AP PGECET']
    },
    requirements: {
      minPercentage: '60%',
      entranceExams: ['RGUKT CET', 'GATE', 'AP PGECET'],
      documentsRequired: ['10th Class Hall Ticket & Marks Sheet', 'Study Certificates (Class 4 to 10)', 'Caste Certificate', 'EWS Certificate']
    },
    ageLimit: {
      min: 15,
      max: 18
    },
    fees: {
      tuitionPerYear: {
        min: 45000,
        max: 50000,
        currency: 'INR'
      },
      hostel: {
        available: true,
        costPerYear: 25000
      }
    },
    scholarships: ['Full Fee Reimbursement by AP Government (JVD)'],
    placements: {
      averageSalary: 550000,
      highestSalary: 2200000,
      topRecruiters: ['ThoughtWorks', 'Infosys', 'TCS', 'Wipro', 'Intel', 'AMD']
    },
    facilities: ['ICT-Enabled Classrooms', 'Massive Digital Library', 'Residential Campus', 'Sports Ground', 'Incubation Center'],
    notablePoints: ['Offers integrated PUC + B.Tech degree', 'Primarily focuses on empowering high-performing rural students']
  },
  {
    id: 'sku-anantapur',
    name: 'Sri Krishnadevaraya University',
    shortName: 'SKU',
    description: 'A prominent public state university located in Anantapur providing comprehensive education in arts, sciences, law, and engineering.',
    type: 'State',
    establishedYear: 1981,
    location: {
      city: 'Anantapur',
      state: 'Andhra Pradesh',
      address: 'NH-44, Ananthapuramu, Andhra Pradesh - 515003'
    },
    website: 'http://skuniversity.ac.in',
    affiliations: ['UGC', 'NAAC'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null
    },
    acceptanceRate: null,
    coursesOffered: ['B.Tech', 'M.Sc', 'M.A', 'MBA', 'MCA', 'M.Com', 'LL.B', 'Ph.D.'],
    admissionProcess: {
      undergraduate: ['AP EAPCET for B.Tech', 'Merit for general UG'],
      postgraduate: ['AP PGCET', 'AP ICET', 'AP LAWCET']
    },
    requirements: {
      minPercentage: '45%',
      entranceExams: ['AP EAPCET', 'AP PGCET', 'AP ICET', 'AP LAWCET'],
      documentsRequired: ['Class 10 & 12 Certificate', 'Degree Certificates', 'Entrance Test Rank Card', 'Residence Certificate']
    },
    ageLimit: {
      min: null,
      max: null
    },
    fees: {
      tuitionPerYear: {
        min: 10000,
        max: 45000,
        currency: 'INR'
      },
      hostel: {
        available: true,
        costPerYear: 28000
      }
    },
    scholarships: ['Government Fee Reimbursement (JVD)', 'Post-Matric Scholarships'],
    placements: {
      averageSalary: 360000,
      highestSalary: 900000,
      topRecruiters: ['TCS', 'Wipro', 'Cognizant', 'HDFC Bank']
    },
    facilities: ['Central Library', 'Research Labs', 'Boys & Girls Hostels', 'Gymnasium', 'Health Center'],
    notablePoints: ['Named after the legendary Vijayanagara Emperor Sri Krishnadevaraya', 'Main academic hub for Rayalaseema region']
  },
  {
    id: 'svims-tirupati',
    name: 'Sri Venkateswara Institute of Medical Sciences',
    shortName: 'SVIMS',
    description: 'A premier medical institute and university hospital in Tirupati specializing in advanced medical education, research, and healthcare services.',
    type: 'State',
    establishedYear: 1993,
    location: {
      city: 'Tirupati',
      state: 'Andhra Pradesh',
      address: 'Alipiri Road, Tirupati, Andhra Pradesh - 517507'
    },
    website: 'https://svimstpt.ap.nic.in',
    affiliations: ['UGC', 'NMC', 'INC'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null
    },
    acceptanceRate: null,
    coursesOffered: ['MBBS', 'MD', 'MS', 'DM', 'M.Ch', 'B.Sc Nursing', 'M.Sc Nursing', 'Physiotherapy (BPT/MPT)'],
    admissionProcess: {
      undergraduate: ['NEET-UG score followed by AP NEET Counseling'],
      postgraduate: ['NEET-PG / NEET-SS score followed by counseling']
    },
    requirements: {
      minPercentage: '50% in PCB for MBBS',
      entranceExams: ['NEET-UG', 'NEET-PG', 'NEET-SS'],
      documentsRequired: ['NEET Score Card', '10th & 12th Certificate', 'MBBS Certificate (for PG)', 'Medical Registration Certificate']
    },
    ageLimit: {
      min: 17,
      max: null
    },
    fees: {
      tuitionPerYear: {
        min: 60000,
        max: 200000,
        currency: 'INR'
      },
      hostel: {
        available: true,
        costPerYear: 40000
      }
    },
    scholarships: ['State Medical Scholarships', 'Government Stipends for PG Residents'],
    placements: {
      averageSalary: 800000,
      highestSalary: 2400000,
      topRecruiters: ['Apollo Hospitals', 'Fortis Health', 'Max Healthcare', 'Government Hospitals']
    },
    facilities: ['Super Specialty Hospital', 'Advanced Diagnostic Labs', 'Medical Library', 'Resident Hostels', 'Trauma Center'],
    notablePoints: ['Established under the umbrella of Tirumala Tirupati Devasthanams (TTD)', 'Recognized for advanced tertiary healthcare and specialty research']
  },
  {
    id: 'svvu-tirupati',
    name: 'Sri Venkateswara Vedic University',
    shortName: 'SVVU',
    description: 'A specialized state university dedicated to preserving, researching, and teaching Vedic literature, Agamas, and ancient Indian sciences.',
    type: 'State',
    establishedYear: 2006,
    location: {
      city: 'Tirupati',
      state: 'Andhra Pradesh',
      address: 'Alipiri-Chandragiri Bypass Road, Tirupati, Andhra Pradesh - 517502'
    },
    website: 'http://svvedicuniversity.ac.in',
    affiliations: ['UGC'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null
    },
    acceptanceRate: null,
    coursesOffered: ['Veda Shastri', 'Paurohitya', 'Agama', 'M.A Vedic Studies', 'Ph.D.'],
    admissionProcess: {
      undergraduate: ['Traditional Vedic test / Oral assessment & Merit'],
      postgraduate: ['University Entrance Exam / Interview']
    },
    requirements: {
      minPercentage: 'Traditional Veda pass / Equivalent Class 12',
      entranceExams: ['University Entrance Test'],
      documentsRequired: ['Traditional Education Proof / Marks Sheet', 'Transfer Certificate', 'Identity Proof']
    },
    ageLimit: {
      min: null,
      max: null
    },
    fees: {
      tuitionPerYear: {
        min: 2000,
        max: 10000,
        currency: 'INR'
      },
      hostel: {
        available: true,
        costPerYear: 12000
      }
    },
    scholarships: ['TTD Vedic Stipends', 'Government Merit Scholarships'],
    placements: {
      averageSalary: 300000,
      highestSalary: 600000,
      topRecruiters: ['TTD Temples', 'Religious Trusts', 'Research Institutes', 'Academic Institutions']
    },
    facilities: ['Manuscript Library', 'Vedic Chanting Halls', 'Hostels', 'Audio-Visual Archival Center'],
    notablePoints: ['Supported by Tirumala Tirupati Devasthanams (TTD)', 'Preserves rare Vedic manuscripts and oral traditions']
  },
  {
    id: 'svvetu-tirupati',
    name: 'Sri Venkateswara Veterinary University',
    shortName: 'SVVU',
    description: 'A state university focusing on education, research, and extension activities in Veterinary, Fishery, and Dairy Sciences.',
    type: 'State',
    establishedYear: 2005,
    location: {
      city: 'Tirupati',
      state: 'Andhra Pradesh',
      address: 'Administrative Office, Dr. Y.S.R. Bhavan, Tirupati, Andhra Pradesh - 517502'
    },
    website: 'https://svvu.edu.in',
    affiliations: ['UGC', 'ICAR', 'VCI'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null
    },
    acceptanceRate: null,
    coursesOffered: ['B.V.Sc & A.H', 'B.Tech (Dairy Technology)', 'B.F.Sc', 'M.V.Sc', 'Ph.D.'],
    admissionProcess: {
      undergraduate: ['AP EAPCET score for B.V.Sc & B.Tech Dairy', 'ICAR AIEEA quota'],
      postgraduate: ['ICAR AIEEA PG / University Entrance Test']
    },
    requirements: {
      minPercentage: '50% in PCB for Veterinary Science',
      entranceExams: ['AP EAPCET', 'ICAR AIEEA'],
      documentsRequired: ['Class 10 & 12 Marks Memos', 'Rank Card', 'Community Certificate', 'Medical Fitness Certificate']
    },
    ageLimit: {
      min: 17,
      max: 25
    },
    fees: {
      tuitionPerYear: {
        min: 30000,
        max: 60000,
        currency: 'INR'
      },
      hostel: {
        available: true,
        costPerYear: 35000
      }
    },
    scholarships: ['ICAR National Talent Scholarship', 'AP State Post-Matric Scholarships'],
    placements: {
      averageSalary: 500000,
      highestSalary: 1000000,
      topRecruiters: ['Amul', 'Heritage Foods', 'State Animal Husbandry Dept', 'Venky\'s', 'Suguna Foods']
    },
    facilities: ['Veterinary Clinical Complex', 'Dairy Processing Plant', 'Research Farms', 'Central Library', 'Hostels'],
    notablePoints: ['Leading veterinary and dairy technology institute in Andhra Pradesh', 'Operates specialized livestock research stations across the state']
  },
  {
    id: 'cuap-anantapur',
    name: 'Central University of Andhra Pradesh',
    shortName: 'CUAP',
    description: 'A premier central university established by the Government of India, offering multidisciplinary UG and PG programs.',
    type: 'Central',
    establishedYear: 2018,
    location: {
      city: 'Anantapur',
      state: 'Andhra Pradesh',
      address: 'JNTU Road, Chinmaya Nagar, Ananthapuramu, Andhra Pradesh - 515002'
    },
    website: 'https://cuap.ac.in',
    affiliations: ['UGC'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null
    },
    acceptanceRate: null,
    coursesOffered: ['B.A. (Hons)', 'B.Sc. (Hons)', 'B.Voc', 'M.A.', 'M.Sc.', 'MBA'],
    admissionProcess: {
      undergraduate: ['CUET-UG Score followed by Central Counseling'],
      postgraduate: ['CUET-PG Score followed by Central Counseling']
    },
    requirements: {
      minPercentage: '50%',
      entranceExams: ['CUET-UG', 'CUET-PG'],
      documentsRequired: ['CUET Score Card', '10th & 12th Certificate', 'Category Certificate (if applicable)', 'Migration Certificate']
    },
    ageLimit: {
      min: null,
      max: null
    },
    fees: {
      tuitionPerYear: {
        min: 12000,
        max: 35000,
        currency: 'INR'
      },
      hostel: {
        available: true,
        costPerYear: 24000
      }
    },
    scholarships: ['Central Sector Scheme', 'UGC National Fellowship', 'Eshan Uday (where applicable)'],
    placements: {
      averageSalary: 420000,
      highestSalary: 950000,
      topRecruiters: ['TCS', 'Ernst & Young', 'Azim Premji Foundation', 'NGOs & Research Orgs']
    },
    facilities: ['Modern Computer Labs', 'Language Lab', 'Library', 'Hostel Facilities', 'Sports Amenities'],
    notablePoints: ['Established under the Andhra Pradesh Reorganisation Act, 2014', 'Mentored initially by University of Hyderabad']
  },
  {
    id: 'ctuap-vizianagaram',
    name: 'Central Tribal University of Andhra Pradesh',
    shortName: 'CTUAP',
    description: 'A central university dedicated to tribal studies, regional development, and multi-disciplinary academic courses.',
    type: 'Central',
    establishedYear: 2019,
    location: {
      city: 'Vizianagaram',
      state: 'Andhra Pradesh',
      address: 'AU PG Centre, Kondakarakam Village, Cantonment Area, Vizianagaram, Andhra Pradesh - 535003'
    },
    website: 'https://www.ctuap.ac.in',
    affiliations: ['UGC'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null
    },
    acceptanceRate: null,
    coursesOffered: ['B.Sc. (Hons)', 'B.B.A.', 'B.S.W.', 'M.A.', 'M.Sc.', 'M.S.W.', 'Ph.D.'],
    admissionProcess: {
      undergraduate: ['CUET-UG Score and Merit List'],
      postgraduate: ['CUET-PG Score and University Counseling']
    },
    requirements: {
      minPercentage: '50%',
      entranceExams: ['CUET-UG', 'CUET-PG'],
      documentsRequired: ['CUET Score Card', '10th & 12th Marks Sheet', 'Caste/Tribal Certificate', 'Transfer Certificate']
    },
    ageLimit: {
      min: null,
      max: null
    },
    fees: {
      tuitionPerYear: {
        min: 8000,
        max: 25000,
        currency: 'INR'
      },
      hostel: {
        available: true,
        costPerYear: 20000
      }
    },
    scholarships: ['National Fellowship for ST Students', 'Central Sector Scholarships'],
    placements: {
      averageSalary: 350000,
      highestSalary: 700000,
      topRecruiters: ['Development Sector NGOs', 'Research Institutions', 'Social Work Agencies']
    },
    facilities: ['Transit Campus Labs', 'Central Library', 'Hostels', 'Tribal Research Wing'],
    notablePoints: ['Focuses on research in tribal art, culture, medicinal plants, and livelihood', 'Established under the Central Universities (Amendment) Act, 2019']
  },
  {
    id: 'nsu-tirupati',
    name: 'National Sanskrit University',
    shortName: 'NSU',
    description: 'A premier central university dedicated to higher studies, research, and promotion of Sanskrit language and literature.',
    type: 'Central',
    establishedYear: 1961,
    location: {
      city: 'Tirupati',
      state: 'Andhra Pradesh',
      address: 'Near Alipiri, Tirupati, Andhra Pradesh - 517507'
    },
    website: 'https://nsktu.ac.in',
    affiliations: ['UGC', 'NAAC (A+)'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null
    },
    acceptanceRate: null,
    coursesOffered: ['Prak-Sastri', 'Sastri (B.A)', 'B.Ed (Shiksha Sastri)', 'Acharya (M.A)', 'M.Ed', 'Ph.D. (Vidyavaridhi)'],
    admissionProcess: {
      undergraduate: ['CUET-UG Score'],
      postgraduate: ['CUET-PG Score / University Entrance Exam']
    },
    requirements: {
      minPercentage: '45% to 50%',
      entranceExams: ['CUET-UG', 'CUET-PG'],
      documentsRequired: ['CUET Rank Card', 'Academic Certificates', 'Category Certificate', 'Character Certificate']
    },
    ageLimit: {
      min: null,
      max: null
    },
    fees: {
      tuitionPerYear: {
        min: 3000,
        max: 12000,
        currency: 'INR'
      },
      hostel: {
        available: true,
        costPerYear: 15000
      }
    },
    scholarships: ['Sanskrit Promotion Fellowships', 'Central Sector Scholarships'],
    placements: {
      averageSalary: 380000,
      highestSalary: 750000,
      topRecruiters: ['Educational Institutions', 'Research Organizations', 'Publishing Houses', 'Cultural Bodies']
    },
    facilities: ['Massive Sanskrit Library', 'Computer Center with Sanskrit Software', 'Hostels', 'Auditorium'],
    notablePoints: ['Elevated from Rashtriya Sanskrit Vidyapeetha to a Central University in 2020', 'Pioneer in Sanskrit Computer Linguistics']
  },
  {
    id: 'sssihl-puttaparthi',
    name: 'Sri Sathya Sai Institute of Higher Learning',
    shortName: 'SSSIHL',
    description: 'A modern deemed university offering value-based holistic education completely free of tuition fee for all students.',
    type: 'Deemed',
    establishedYear: 1981,
    location: {
      city: 'Puttaparthi',
      state: 'Andhra Pradesh',
      address: 'Prasanthi Nilayam, Puttaparthi, Sri Sathya Sai District, Andhra Pradesh - 515134'
    },
    website: 'https://www.sssihl.edu.in',
    affiliations: ['UGC', 'NAAC (A++)'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null
    },
    acceptanceRate: null,
    coursesOffered: ['B.A.', 'B.Sc.', 'B.Com', 'B.B.A.', 'M.Sc.', 'M.A.', 'M.Tech', 'MBA', 'Ph.D.'],
    admissionProcess: {
      undergraduate: ['SSSIHL Entrance Test followed by Personal Interview'],
      postgraduate: ['SSSIHL Entrance Test followed by Personal Interview']
    },
    requirements: {
      minPercentage: '55% to 60%',
      entranceExams: ['SSSIHL Admissions Test'],
      documentsRequired: ['10th & 12th Marks Sheet', 'Transfer Certificate', 'Conduct Certificate']
    },
    ageLimit: {
      min: 16,
      max: 23
    },
    fees: {
      tuitionPerYear: {
        min: 0,
        max: 0,
        currency: 'INR'
      },
      hostel: {
        available: true,
        costPerYear: 22000
      }
    },
    scholarships: ['100% Free Tuition offered to all enrolled students'],
    placements: {
      averageSalary: 600000,
      highestSalary: 1400000,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Deloitte', 'Goldman Sachs']
    },
    facilities: ['Integrated Residential Campus', 'Advanced Research Labs', 'Libraries', 'Sports Stadium', 'Planetarium'],
    notablePoints: ['Zero tuition fee model for all academic programs', 'Combines top-tier academic rigor with moral and spiritual orientation']
  },
  {
    id: 'mits-madanapalle',
    name: 'Madanapalle Institute of Technology and Science',
    shortName: 'MITS',
    description: 'An autonomous engineering institute located in Madanapalle known for its industry collaboration, accreditation, and research setup.',
    type: 'Private',
    establishedYear: 1998,
    location: {
      city: 'Madanapalle',
      state: 'Andhra Pradesh',
      address: 'Post Box No 14, Kadiri Road, Angallu, Madanapalle, Andhra Pradesh - 517325'
    },
    website: 'https://www.mits.ac.in',
    affiliations: ['UGC', 'AICTE', 'JNTUA', 'NAAC (A+)'],
    ranking: {
      indiaRank: 251,
      globalRank: null,
      nirfRank: 251
    },
    acceptanceRate: null,
    coursesOffered: ['B.Tech', 'M.Tech', 'MBA', 'MCA', 'Ph.D.'],
    admissionProcess: {
      undergraduate: ['AP EAPCET Score / Management Quota'],
      postgraduate: ['AP PGECET', 'GATE', 'AP ICET']
    },
    requirements: {
      minPercentage: '45%',
      entranceExams: ['AP EAPCET', 'AP PGECET', 'GATE', 'AP ICET'],
      documentsRequired: ['Class 10 & 12 Marks Memos', 'Rank Card', 'Transfer Certificate', 'Allotment Order']
    },
    ageLimit: {
      min: 16,
      max: null
    },
    fees: {
      tuitionPerYear: {
        min: 70000,
        max: 105000,
        currency: 'INR'
      },
      hostel: {
        available: true,
        costPerYear: 65000
      }
    },
    scholarships: ['Jagananna Vidya Deevena (JVD)', 'Merit Scholarships by College Management'],
    placements: {
      averageSalary: 480000,
      highestSalary: 2400000,
      topRecruiters: ['Cognizant', 'Accenture', 'TCS', 'LTIMindtree', 'HCLTech']
    },
    facilities: ['Advanced Computing Labs', 'Siemens COE', 'Central Library', 'In-Campus Hostels', 'Sports Complex'],
    notablePoints: ['Accredited by NBA for major B.Tech branches', 'Houses specialized innovation centers and incubation hubs']
  },
  {
    id: 'audisankara-gudur',
    name: 'Audisankara Deemed to be University',
    shortName: 'ADU',
    description: 'A multi-disciplinary deemed university in Gudur providing technical, managerial, and applied science education.',
    type: 'Deemed',
    establishedYear: 2001,
    location: {
      city: 'Gudur',
      state: 'Andhra Pradesh',
      address: 'NH-16 Bypass Road, Aravinda Nagar, Gudur, Tirupati District, Andhra Pradesh - 524101'
    },
    website: 'https://audisankarauniversity.edu.in',
    affiliations: ['UGC', 'AICTE', 'NAAC (A+)'],
    ranking: {
      indiaRank: null,
      globalRank: null,
      nirfRank: null
    },
    acceptanceRate: null,
    coursesOffered: ['B.Tech', 'M.Tech', 'MBA', 'MCA', 'B.Pharm', 'M.Pharm', 'B.Sc'],
    admissionProcess: {
      undergraduate: ['AP EAPCET / University Entrance Exam / Merit'],
      postgraduate: ['AP PGECET', 'AP ICET', 'GATE']
    },
    requirements: {
      minPercentage: '45%',
      entranceExams: ['AP EAPCET', 'AP PGECET', 'AP ICET'],
      documentsRequired: ['Class 10 & 12 Marks Sheets', 'Entrance Hall Ticket & Rank Card', 'Caste Certificate (if applicable)']
    },
    ageLimit: {
      min: 16,
      max: null
    },
    fees: {
      tuitionPerYear: {
        min: 45000,
        max: 100000,
        currency: 'INR'
      },
      hostel: {
        available: true,
        costPerYear: 55000
      }
    },
    scholarships: ['AP Government Fee Reimbursement', 'Merit-based Management Scholarships'],
    placements: {
      averageSalary: 400000,
      highestSalary: 1200000,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'IBM', 'Tech Mahindra']
    },
    facilities: ['Digital Classrooms', 'Laboratories', 'Hostels', 'Placement & Training Cell', 'Sports Infrastructure'],
    notablePoints: ['Transitioned from Audisankara College of Engineering & Technology to Deemed University status', 'Strong placement track record in southern AP']
  },
  {
    id: 'sahe-vr-siddhartha-vijayawada',
    name: 'Siddhartha Academy of Higher Education (VR Siddhartha)',
    shortName: 'SAHE',
    description: 'A premier deemed university in Vijayawada (formerly VR Siddhartha Engineering College) renowned for its top-rank technical education.',
    type: 'Deemed',
    establishedYear: 1977,
    location: {
      city: 'Vijayawada',
      state: 'Andhra Pradesh',
      address: 'Vijayawada - Machilipatnam Highway, Kanuru, Vijayawada, Andhra Pradesh - 520007'
    },
    website: 'https://www.vrsiddhartha.ac.in',
    affiliations: ['UGC', 'AICTE', 'NAAC (A+)'],
    ranking: {
      indiaRank: 151,
      globalRank: null,
      nirfRank: 151
    },
    acceptanceRate: null,
    coursesOffered: ['B.Tech', 'M.Tech', 'MBA', 'MCA', 'B.Sc (Computer Science)', 'Ph.D.'],
    admissionProcess: {
      undergraduate: ['SEEE (Siddhartha Engineering Entrance Exam) / AP EAPCET / JEE Main'],
      postgraduate: ['GATE', 'AP PGECET', 'AP ICET', 'SPCAT']
    },
    requirements: {
      minPercentage: '50%',
      entranceExams: ['SEEE', 'AP EAPCET', 'JEE Main', 'GATE', 'AP PGECET', 'AP ICET'],
      documentsRequired: ['Class 10 & 12 Certificates', 'Entrance Exam Rank Card', 'Transfer Certificate', 'Conduct Certificate']
    },
    ageLimit: {
      min: 16,
      max: null
    },
    fees: {
      tuitionPerYear: {
        min: 80000,
        max: 250000,
        currency: 'INR'
      },
      hostel: {
        available: true,
        costPerYear: 75000
      }
    },
    scholarships: ['Merit Scholarships by Siddhartha Academy', 'AP Government Fee Reimbursement'],
    placements: {
      averageSalary: 550000,
      highestSalary: 4400000,
      topRecruiters: ['Amazon', 'Microsoft', 'Adobe', 'TCS', 'Cognizant', 'LTI Mindtree']
    },
    facilities: ['TIFAC-CORE Telematics Center', 'Modern Innovation Labs', 'Central Library', 'Hostels', 'Sports Complex'],
    notablePoints: ['First private engineering college established in unified Andhra Pradesh (1977)', 'Granted Deemed to be University status by UGC in 2024']
  }
  ]
};