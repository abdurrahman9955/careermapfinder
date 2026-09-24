import { ExamSession } from './exam';

// Helper generator for AWS Certified Solutions Architect - Associate (65 Questions Total)
export const createAwsSaaQuestions = () => {
  const questions = [];

  // Domain 1: Design Secure Architectures (Questions 1 to 20) ~ 30%
  for (let i = 1; i <= 20; i++) {
    if (i === 1) {
      questions.push({
        id: `q_aws_1`,
        questionNumber: 1,
        sectionTitle: 'Domain 1: Design Secure Architectures',
        questionType: 'MULTIPLE_SELECT' as const,
        visualType: 'MARKDOWN' as const,
        prompt: `A company needs to implement a decoupled architecture for processing incoming order notifications using **AWS services**. High throughput is required, and messages must not be lost if a subscriber component goes offline.\n\nWhich **TWO** AWS components satisfy these requirements? (Select TWO)`,
        options: [
          { label: 'A', text: 'Amazon Simple Queue Service (Amazon SQS) to buffer incoming orders.' },
          { label: 'B', text: 'AWS Step Functions to store raw payload objects directly.' },
          { label: 'C', text: 'Amazon Simple Notification Service (Amazon SNS) to publish notifications to SQS queues.' },
          { label: 'D', text: 'Amazon EC2 Instance Store volumes for persistent message persistence.' },
          { label: 'E', text: 'Amazon ElastiCache for Redis in Cluster Mode.' }
        ],
        maxMarks: 2,
        correctAnswer: 'A,C'
      });
    } else {
      questions.push({
        id: `q_aws_${i}`,
        questionNumber: i,
        sectionTitle: 'Domain 1: Design Secure Architectures',
        questionType: 'MULTIPLE_CHOICE' as const,
        visualType: 'TEXT' as const,
        prompt: `A solution architect is designing an enterprise workload requiring secure key management. Secrets must be rotated automatically every 30 days without application downtime. Which service combination meets this requirement with the LEAST operational overhead?`,
        options: [
          { label: 'A', text: 'AWS Secrets Manager with built-in AWS Lambda rotation functions' },
          { label: 'B', text: 'AWS Systems Manager Parameter Store with manual Lambda execution' },
          { label: 'C', text: 'Amazon S3 Bucket Key with custom cron jobs on EC2' },
          { label: 'D', text: 'AWS KMS key policies modified manually via AWS CLI' }
        ],
        maxMarks: 1,
        correctAnswer: 'A'
      });
    }
  }

  // Domain 2: Design Resilient Architectures (Questions 21 to 37) ~ 26%
  for (let i = 21; i <= 37; i++) {
    questions.push({
      id: `q_aws_${i}`,
      questionNumber: i,
      sectionTitle: 'Domain 2: Design Resilient Architectures',
      questionType: 'MULTIPLE_CHOICE' as const,
      visualType: 'MARKDOWN' as const,
      prompt: `An web application running on Amazon EC2 instances behind an Application Load Balancer (ALB) experiences sudden traffic spikes. The database layer uses Amazon Aurora MySQL. Which configuration provides the **highest availability** across multiple Availability Zones?`,
      options: [
        { label: 'A', text: 'Deploy Aurora Multi-AZ with Read Replicas and Auto Scaling on EC2 instances across 3 AZs.' },
        { label: 'B', text: 'Deploy Aurora Single-AZ with automated hourly S3 snapshots.' },
        { label: 'C', text: 'Place EC2 instances in a single private subnet with a Network Load Balancer.' },
        { label: 'D', text: 'Use AWS Elastic Beanstalk in Single-Instance mode.' }
      ],
      maxMarks: 1,
      correctAnswer: 'A'
    });
  }

  // Domain 3: Design High-Performing Architectures (Questions 38 to 53) ~ 24%
  for (let i = 38; i <= 53; i++) {
    questions.push({
      id: `q_aws_${i}`,
      questionNumber: i,
      sectionTitle: 'Domain 3: Design High-Performing Architectures',
      questionType: 'MULTIPLE_CHOICE' as const,
      visualType: 'TEXT' as const,
      prompt: `A global media platform serves static assets (images, videos) to millions of users worldwide. The origin server is an Amazon S3 bucket. What solution minimizes latency globally while providing DDoS protection at the edge?`,
      options: [
        { label: 'A', text: 'Amazon CloudFront distribution with AWS Shield Standard backed by S3 Origin Access Control (OAC)' },
        { label: 'B', text: 'Amazon S3 Cross-Region Replication (CRR) to all AWS Regions' },
        { label: 'C', text: 'AWS Global Accelerator pointing directly to S3 REST endpoints' },
        { label: 'D', text: 'Amazon Route 53 Latency-Based Routing pointing to EC2 proxy instances' }
      ],
      maxMarks: 1,
      correctAnswer: 'A'
    });
  }

  // Domain 4: Design Cost-Optimized Architectures (Questions 54 to 65) ~ 20%
  for (let i = 54; i <= 65; i++) {
    questions.push({
      id: `q_aws_${i}`,
      questionNumber: i,
      sectionTitle: 'Domain 4: Design Cost-Optimized Architectures',
      questionType: 'MULTIPLE_CHOICE' as const,
      visualType: 'TEXT' as const,
      prompt: `An analytics job processes log files once per week for 4 hours. The job can be interrupted and resumed without losing state. Which EC2 pricing model offers the MOST cost-effective compute capacity?`,
      options: [
        { label: 'A', text: 'Spot Instances' },
        { label: 'B', text: 'On-Demand Instances' },
        { label: 'C', text: 'Reserved Instances (1-year term)' },
        { label: 'D', text: 'Dedicated Hosts' }
      ],
      maxMarks: 1,
      correctAnswer: 'A'
    });
  }

  return questions; // Exact Total: 65 Questions
};

// Helper generator for CompTIA Security+ SY0-701 (90 Questions Total)
export const createSecurityPlusQuestions = () => {
  const questions = [];

  // Performance-Based Questions (PBQs) / Scenario-Based Inputs (Questions 1 to 5)
  for (let i = 1; i <= 5; i++) {
    if (i === 1) {
      questions.push({
        id: `q_sec_1`,
        questionNumber: 1,
        sectionTitle: 'Performance-Based Question (PBQ) - Security Controls',
        questionType: 'SHORT_INPUT' as const,
        visualType: 'MARKDOWN' as const,
        prompt: `### Scenario Analysis: Firewalls & Network Access Control Lists (NACLs)\nAnalyze the following log excerpt from a perimeter firewall facing a brute-force attack on SSH (Port 22):\n\n\`\`\`text\n2026-09-23 14:02:11 DENY TCP 192.168.1.45:51204 -> 10.0.0.5:22 FLAGS:SYN\n2026-09-23 14:02:12 DENY TCP 192.168.1.45:51205 -> 10.0.0.5:22 FLAGS:SYN\n\`\`\`\n\n**Task:** Identify the specific defense-in-depth control (e.g., *Fail2ban*, *Stateless NACL Rule*, *MFA*, *IP Blacklisting*) that should be configured at the network perimeter to immediately mitigate this automated attack vector.`,
        maxMarks: 5,
        rubric: {
          keyPoints: [
            'Identification of IP Blacklisting / Automated Rate-limiting rule at the perimeter firewall.',
            'Implementation of Fail2ban or automated SIEM-driven NACL drop rule for source IP 192.168.1.45.'
          ]
        }
      });
    } else {
      questions.push({
        id: `q_sec_${i}`,
        questionNumber: i,
        sectionTitle: `Performance-Based Question (PBQ ${i})`,
        questionType: 'SHORT_INPUT' as const,
        visualType: 'MARKDOWN' as const,
        prompt: `**PBQ Scenario ${i}:** A security analyst detects unauthorized data exfiltration via DNS tunneling. Specify the SIEM detection rule signature keyword and network mitigation technique needed to block outgoing port 53 traffic except from authorized internal DNS resolvers.`,
        maxMarks: 5,
        rubric: {
          keyPoints: [
            'Configure internal DNS sinkhole/filtering.',
            'Restrict egress UDP/TCP port 53 traffic solely to internal domain controllers/resolvers.'
          ]
        }
      });
    }
  }

  // Domain 1: General Security Concepts (Questions 6 to 16) ~ 12%
  for (let i = 6; i <= 16; i++) {
    questions.push({
      id: `q_sec_${i}`,
      questionNumber: i,
      sectionTitle: 'Domain 1: General Security Concepts',
      questionType: 'MULTIPLE_CHOICE' as const,
      visualType: 'TEXT' as const,
      prompt: `Which security architecture model enforces the principle that no user or device inside or outside the network perimeter should be trusted by default?`,
      options: [
        { label: 'A', text: 'Zero Trust Architecture (ZTA)' },
        { label: 'B', text: 'Defense in Depth' },
        { label: 'C', text: 'Air-Gapped Perimeter' },
        { label: 'D', text: 'Demilitarized Zone (DMZ)' }
      ],
      maxMarks: 1,
      correctAnswer: 'A'
    });
  }

  // Domain 2: Threats, Vulnerabilities & Mitigations (Questions 17 to 36) ~ 22%
  for (let i = 17; i <= 36; i++) {
    questions.push({
      id: `q_sec_${i}`,
      questionNumber: i,
      sectionTitle: 'Domain 2: Threats, Vulnerabilities & Mitigations',
      questionType: 'MULTIPLE_CHOICE' as const,
      visualType: 'TEXT' as const,
      prompt: `An employee receives an urgent email claiming to be from the CEO requesting an immediate wire transfer to a new supplier. The email address uses a subtle typo-squatted domain name. Which attack vector is being executed?`,
      options: [
        { label: 'A', text: 'Spear Phishing / Business Email Compromise (BEC)' },
        { label: 'B', text: 'Watering Hole Attack' },
        { label: 'C', text: 'SQL Injection' },
        { label: 'D', text: 'Man-in-the-Middle (MitM)' }
      ],
      maxMarks: 1,
      correctAnswer: 'A'
    });
  }

  // Domain 3: Security Architecture (Questions 37 to 53) ~ 18%
  for (let i = 37; i <= 53; i++) {
    questions.push({
      id: `q_sec_${i}`,
      questionNumber: i,
      sectionTitle: 'Domain 3: Security Architecture',
      questionType: 'MULTIPLE_CHOICE' as const,
      visualType: 'TEXT' as const,
      prompt: `Which cryptographic protocol provides mutual authentication and encrypted transport for remote command-line administration over untrusted networks?`,
      options: [
        { label: 'A', text: 'SSH (Secure Shell)' },
        { label: 'B', text: 'Telnet' },
        { label: 'C', text: 'HTTP' },
        { label: 'D', text: 'SNMPv1' }
      ],
      maxMarks: 1,
      correctAnswer: 'A'
    });
  }

  // Domain 4: Security Operations (Questions 54 to 78) ~ 28%
  for (let i = 54; i <= 78; i++) {
    questions.push({
      id: `q_sec_${i}`,
      questionNumber: i,
      sectionTitle: 'Domain 4: Security Operations',
      questionType: 'MULTIPLE_CHOICE' as const,
      visualType: 'TEXT' as const,
      prompt: `A Incident Response team is analyzing an ongoing ransomware infection. What step should be taken IMMEDIATELY after identifying the infected endpoint to prevent lateral movement?`,
      options: [
        { label: 'A', text: 'Isolate the affected host from the network' },
        { label: 'B', text: 'Format the hard drive immediately' },
        { label: 'C', text: 'Pay the ransom requested' },
        { label: 'D', text: 'Reboot the domain controller' }
      ],
      maxMarks: 1,
      correctAnswer: 'A'
    });
  }

  // Domain 5: Security Program Management & Oversight (Questions 79 to 90) ~ 20%
  for (let i = 79; i <= 90; i++) {
    questions.push({
      id: `q_sec_${i}`,
      questionNumber: i,
      sectionTitle: 'Domain 5: Security Program Management & Oversight',
      questionType: 'MULTIPLE_CHOICE' as const,
      visualType: 'TEXT' as const,
      prompt: `Which compliance framework agreement defines the operational metrics, uptime guarantees, and response times required from a cloud service provider?`,
      options: [
        { label: 'A', text: 'Service Level Agreement (SLA)' },
        { label: 'B', text: 'Non-Disclosure Agreement (NDA)' },
        { label: 'C', text: 'Memorandum of Understanding (MOU)' },
        { label: 'D', text: 'Business Impact Analysis (BIA)' }
      ],
      maxMarks: 1,
      correctAnswer: 'A'
    });
  }

  return questions; // Exact Total: 90 Questions
};

export const updatedProfessionalExamSessions: Record<string, ExamSession> = {
  // 1. AWS Certified Solutions Architect - Associate (SAA-C03: Exactly 65 Questions)
  'aws-solution-architect-005': {
    id: 'sess_aws_005',
    userId: 'user_prof_88',
    timeLimitMinutes: 130, // 2 Hours 10 Minutes
    createdAt: new Date().toISOString(),
    config: {
      category: 'PROFESSIONAL',
      industry: 'Cloud Computing',
      certVendor: 'Amazon Web Services (AWS)',
      examName: 'AWS Certified Solutions Architect - Associate (SAA-C03)',
      subject: 'Cloud Architecture',
      targetCareer: 'Senior Cloud Solutions Architect',
      academicBackground: 'B.Sc Computer Science with 2 years backend engineering experience',
      difficulty: 'STANDARD',
      targetScore: 720, // Scaled score out of 1000
      examDescription: 'Complete 65-question official pattern AWS SAA-C03 exam covering all 4 core architecture domains.'
    },
    questions: createAwsSaaQuestions()
  },

  // 2. CompTIA Security+ (SY0-701: Exactly 90 Questions including PBQs)
  'comptia-security-plus-006': {
    id: 'sess_sec_006',
    userId: 'user_prof_99',
    timeLimitMinutes: 90, // 1 Hour 30 Minutes
    createdAt: new Date().toISOString(),
    config: {
      category: 'PROFESSIONAL',
      industry: 'Cyber Security',
      certVendor: 'CompTIA',
      examName: 'CompTIA Security+ (SY0-701)',
      subject: 'Security Architecture',
      targetCareer: 'Cybersecurity Analyst / SOC Engineer',
      academicBackground: 'Network & System Administration background',
      difficulty: 'STANDARD',
      targetScore: 750, // Scaled score out of 900
      examDescription: 'Official 90-question CompTIA Security+ (SY0-701) exam featuring PBQs and standard multiple-choice questions.'
    },
    questions: createSecurityPlusQuestions()
  }
};