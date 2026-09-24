import { InterviewSession } from './interview';

export const mockInterviewSessions: Record<string, InterviewSession> = {
 
// 1. SOFTWARE ENGINEERING (Live Coding, System Design & Behavioral STAR - Top-Tech Assessor)
'session_swe_001': {
  id: 'session_swe_001',
  userId: 'usr_swe_99',
  status: 'IN_PROGRESS',
  createdAt: new Date().toISOString(),
  config: {
    targetJobTitle: 'Senior Distributed Systems Engineer',
    industryDomain: 'Fintech & High-Frequency Trading',
    careerStage: 'SENIOR',
    workArrangement: ['REMOTE', 'OPEN_TO_RELOCATION'],
    targetCountries: ['United States', 'United Kingdom', 'Nigeria'],
    isExperienced: true,
    highestDegree: 'B.Sc. Computer Science',
    mostRecentEmployer: 'Paystack',
    yearsOfExperience: 6,
    currentJobTitle: 'Senior Backend Engineer',
    coreSkills: ['Node.js', 'Go', 'PostgreSQL', 'Redis', 'Kafka', 'System Design'],
    summaryOfAchievements: 'Architected payment processing webhooks reducing latency by 35% and handling 10M daily transactions.',
    selectedCategories: ['TECHNICAL_LIVE_CODING', 'SYSTEM_DESIGN_ARCHITECTURE', 'BEHAVIORAL_STAR'],
    interviewerStyle: 'TOP_TECH_ASSESSOR',
    estimatedDurationMins: 45,
    jobDescription: 'Seeking a Senior Engineer to build low-latency event-driven microservices for algorithmic order execution.'
  },
  questions: [
    {
      id: 'q_swe_1',
      questionNumber: 1,
      category: 'TECHNICAL_LIVE_CODING',
      visualLayout: 'CODE_EDITOR',
      title: 'Sliding Window Rate Limiter',
      prompt: 'Implement an in-memory Sliding Window Log Rate Limiter class in TypeScript. The rate limiter must support a `shouldAllow(userId: string): boolean` method enforced at `maxRequests` per `windowSizeSeconds`. Optimize for $O(1)$ time complexity lookup.',
      timeAllocationMins: 15,
      codeLanguage: 'typescript',
      codeStarterSnippet: `class SlidingWindowRateLimiter {\n  private maxRequests: number;\n  private windowSizeMs: number;\n  private userLogs: Map<string, number[]>;\n\n  constructor(maxRequests: number, windowSizeSeconds: number) {\n    this.maxRequests = maxRequests;\n    this.windowSizeMs = windowSizeSeconds * 1000;\n    this.userLogs = new Map();\n  }\n\n  public shouldAllow(userId: string): boolean {\n    // Implement your sliding window logic here\n    return false;\n  }\n}`,
      rubricCriteria: {
        expectedKeyPoints: [
          'Eviction of expired timestamps older than (currentTime - windowSizeMs)',
          'Correct boundary edge-case handling when userLogs array is empty',
          'Discussion of memory footprint mitigation strategies for inactive users'
        ],
        optimalSolutionSummary: 'Maintain a timestamp array per user inside a Map. On call, filter entries older than window, append current timestamp if length < maxRequests, and return boolean.'
      }
    },
    {
      id: 'q_swe_2',
      questionNumber: 2,
      category: 'SYSTEM_DESIGN_ARCHITECTURE',
      visualLayout: 'WHITEBOARD_DIAGRAM',
      title: 'Global High-Availability Payment Gateway',
      prompt: 'Design a globally distributed payment gateway capable of processing 50,000 requests/sec with zero double-charge guarantee under network partition events.',
      timeAllocationMins: 20,
      supplementaryData: {
        diagramNodes: [
          'API Gateway / CloudFront Edge',
          'Idempotency Key Cache (Redis Cluster)',
          'Transactional Database (CockroachDB / Spanner)',
          'Dead Letter Event Queue (Kafka)',
          'Third-Party Payment Processors (Stripe/Visa)'
        ]
      },
      rubricCriteria: {
        expectedKeyPoints: [
          'Idempotency key enforcement at API Gateway using distributed locks',
          'Two-Phase Commit (2PC) or Saga Pattern for distributed transactions',
          'Asynchronous processing with Kafka for webhook notifications'
        ]
      }
    },
    {
      id: 'q_swe_3',
      questionNumber: 3,
      category: 'BEHAVIORAL_STAR',
      visualLayout: 'STAR_STRUCTURED',
      title: 'Mitigating a Critical Production Outage Under Pressure',
      prompt: 'Describe a production outage or catastrophic degradation event in an event-driven distributed system that you led the response for. How did you diagnose the root cause under high-stake pressure, restore system availability, and implement safeguards to prevent recurrence?',
      timeAllocationMins: 10,
      rubricCriteria: {
        expectedKeyPoints: [
          'Situation: Explicitly describe the blast radius, SLA violation impact, or financial risk during the incident',
          'Task: Immediate responsibility as Senior Engineer leading incident triage and cross-functional communication',
          'Action: Methodical diagnostic steps (e.g., metric profiling, isolating Kafka consumer backpressure, rollback vs. hotfix), plus post-mortem blameless culture',
          'Result: Quantifiable recovery metrics (e.g., MTTR < 12 mins, zero data loss, new circuit breakers and automated alert thresholds deployed)'
        ],
        starBreakdown: {
          situation: 'A distributed deadlock in payment webhook consumers caused a 45-minute transaction backlog processing queue overflow.',
          task: 'Identify root cause under live SLA violation threats, stabilize consumer group rebalancing, and prevent data corruption.',
          action: 'Isolated crashing worker nodes, added backpressure rate limiting on Kafka consumers, and executed hotfix deploying distributed Redis mutexes.',
          result: 'Cleared 1.2M backlogged events in 8 minutes without double-processing; authored post-mortem adding automated integration testing.'
        }
      }
    }
  ]
},

// 2. HEALTHCARE (Medical AI / Clinical Systems - Supportive Coach)
  'session_health_002': {
    id: 'session_health_002',
    userId: 'usr_health_22',
    status: 'IN_PROGRESS',
    createdAt: new Date().toISOString(),
    config: {
      targetJobTitle: 'Healthcare Informatics Analyst',
      industryDomain: 'Digital Health & Clinical Telemedicine',
      careerStage: 'MID_LEVEL',
      workArrangement: ['HYBRID', 'REMOTE'],
      targetCountries: ['Canada', 'United States'],
      isExperienced: true,
      highestDegree: 'M.Sc. Health Informatics',
      institution: 'Bayero University Kano',
      mostRecentEmployer: 'National Hospital',
      yearsOfExperience: 4,
      currentJobTitle: 'Clinical Data Specialist',
      coreSkills: ['HL7/FHIR Protocols', 'SQL', 'Python', 'EHR Systems', 'HIPAA Compliance'],
      summaryOfAchievements: 'Migrated legacy patient records into HL7 FHIR compliant pipelines across 12 regional hospital nodes.',
      selectedCategories: ['DOMAIN_SPECIFIC', 'CASE_STUDY_PROBLEM_SOLVING', 'HR_RECRUITER_SCREENING'],
      interviewerStyle: 'SUPPORTIVE_COACH',
      estimatedDurationMins: 45,
      jobDescription: 'Analyze clinical EHR integration streams, ensure HIPAA/GDPR data compliance, and optimize clinician workflow efficiency.'
    },
    questions: [
      {
        id: 'q_health_1',
        questionNumber: 1,
        category: 'DOMAIN_SPECIFIC',
        visualLayout: 'TEXT_MARKDOWN',
        title: 'FHIR Resources & Patient Data Privacy',
        prompt: 'Explain how you would design a RESTful FHIR API wrapper around a legacy relational database containing Electronic Health Records (EHR) while strictly enforcing HIPAA Minimum Necessary standard.',
        timeAllocationMins: 10,
        rubricCriteria: {
          expectedKeyPoints: [
            'Mapping database relational tables to standardized FHIR Patient & Observation JSON schemas',
            'Role-Based Access Control (RBAC) restricting Sensitive Personal Health Information (PHI)',
            'Audit logging for every API read/write request involving patient identifiers'
          ]
        }
      },
      {
        id: 'q_health_2',
        questionNumber: 2,
        category: 'CASE_STUDY_PROBLEM_SOLVING',
        visualLayout: 'METRIC_TABLE',
        title: 'EHR Data Migration Ingestion Errors & Workflow Bottlenecks',
        prompt: 'During a live clinical EHR migration across 12 regional hospital nodes, 8.4% of incoming lab result payloads fail validation due to non-standardized units (e.g., mg/dL vs. mmol/L). Analyze the error distribution below and propose an automated ETL sanitization pipeline that prevents clinical workflow disruption.',
        timeAllocationMins: 20,
        supplementaryData: {
          tableHeaders: ['Hospital Node ID', 'Record Volume', 'Failure Rate (%)', 'Primary Error Code', 'Impacted Clinical Module'],
          tableRows: [
            ['NODE-NORTH-01', '45,000', '11.2%', 'ERR_UNIT_LOINC_MISMATCH', 'Pathology & Lab Results'],
            ['NODE-WEST-04', '62,000', '6.8%', 'ERR_DATETIME_TIMEZONE_OFFSET', 'Patient Admission Logs'],
            ['NODE-CENTRAL-02', '110,000', '8.1%', 'ERR_MISSING_PROVIDER_NPI', 'E-Prescribing & Pharmacy']
          ]
        },
        rubricCriteria: {
          expectedKeyPoints: [
            'Designing an automated staging Dead Letter Queue (DLQ) for non-blocking payload quarantine',
            'LOINC and SNOMED CT terminology server lookup for unit normalization',
            'Fallback alerting mechanisms for hospital data entry operators without halting clinical API operations'
          ]
        }
      },
      {
        id: 'q_health_3',
        questionNumber: 3,
        category: 'HR_RECRUITER_SCREENING',
        visualLayout: 'TEXT_MARKDOWN',
        title: 'Cross-Functional Collaboration with Medical Staff',
        prompt: 'Medical doctors and nursing staff are often resistant to adopting new informatics software due to heavy administrative burdens. How do you gather product feedback from non-technical clinicians and align technological requirements with patient care efficiency?',
        timeAllocationMins: 15,
        rubricCriteria: {
          expectedKeyPoints: [
            'Conducting clinical shadow sessions to observe real-world point-of-care bottlenecks',
            'Translating medical staff pain points into actionable user stories and simplified UX workflows',
            'Measuring success via clinician time-in-EHR metrics and reduced keystroke counts'
          ]
        }
      }
    ]
  },

  // 3. CYBERSECURITY (SOC Lead / Incident Response - Strict Tech Lead)
  'session_cyber_003': {
    id: 'session_cyber_003',
    userId: 'usr_cyber_44',
    status: 'IN_PROGRESS',
    createdAt: new Date().toISOString(),
    config: {
      targetJobTitle: 'Senior Cyber Incident Response Specialist',
      industryDomain: 'Enterprise Cloud Security',
      careerStage: 'SENIOR',
      workArrangement: ['REMOTE'],
      targetCountries: ['United States', 'Estonia', 'Germany'],
      isExperienced: true,
      highestDegree: 'B.Sc. Cybersecurity',
      mostRecentEmployer: 'Telecom Network Infrastructure',
      yearsOfExperience: 7,
      currentJobTitle: 'Security Operations Center (SOC) Lead',
      coreSkills: ['SIEM / Splunk', 'Threat Hunting', 'Malware Analysis', 'Zero Trust', 'Python'],
      summaryOfAchievements: 'Led containment during a active ransomware attack on enterprise infrastructure, preventing lateral movement.',
      selectedCategories: ['CASE_STUDY_PROBLEM_SOLVING', 'DOMAIN_SPECIFIC'],
      interviewerStyle: 'STRICT_TECH_LEAD',
      estimatedDurationMins: 45,
      jobDescription: 'Lead threat hunting operations, respond to zero-day vulnerabilities, and harden AWS multi-account infrastructure.'
    },
    questions: [
      {
        id: 'q_cyber_1',
        questionNumber: 1,
        category: 'CASE_STUDY_PROBLEM_SOLVING',
        visualLayout: 'METRIC_TABLE',
        title: 'Active Ransomware Containment & Log Analysis',
        prompt: 'A critical alert shows suspicious PowerShell execution spawning from IIS web worker process (`w3wp.exe`) across 3 web servers. Review the log metrics below and detail your containment steps within the first 15 minutes.',
        timeAllocationMins: 15,
        supplementaryData: {
          tableHeaders: ['Timestamp (UTC)', 'Host', 'Process Name', 'Parent Process', 'Network Egress Destination'],
          tableRows: [
            ['14:02:11', 'WEB-PROD-01', 'powershell.exe -enc ...', 'w3wp.exe', '185.220.101.5:443 (Known C2)'],
            ['14:02:45', 'WEB-PROD-02', 'powershell.exe -enc ...', 'w3wp.exe', '185.220.101.5:443 (Known C2)'],
            ['14:03:02', 'DB-PRIMARY-01', 'cmd.exe /c vssadmin delete shadows', 'psexec.exe', 'Internal Lateral Movement']
          ]
        },
        rubricCriteria: {
          expectedKeyPoints: [
            'Immediate network isolation of WEB-PROD-01, WEB-PROD-02, and DB-PRIMARY-01 via EDR',
            'Revocation of compromised service account credentials and Kerberos golden tickets',
            'Preserving memory dumps prior to system power-down for forensic timeline reconstruction'
          ]
        }
      },
      {
        id: 'q_cyber_2',
        questionNumber: 2,
        category: 'DOMAIN_SPECIFIC',
        visualLayout: 'WHITEBOARD_DIAGRAM',
        title: 'Zero Trust AWS Architecture Hardening',
        prompt: 'Design a Zero Trust network architecture for an AWS multi-account environment hosting sensitive payment APIs. The architecture must enforce strict micro-segmentation, eliminate static IAM access keys, and prevent unauthorized data exfiltration via VPC endpoints.',
        timeAllocationMins: 15,
        supplementaryData: {
          diagramNodes: [
            'AWS Organizations / Control Tower',
            'AWS IAM Identity Center (SAML SSO)',
            'Transit Gateway / Network Firewall Inspection VPC',
            'PrivateLink / VPC Endpoints (S3 & DynamoDB)',
            'GuardDuty & AWS Security Hub SIEM Stream'
          ]
        },
        rubricCriteria: {
          expectedKeyPoints: [
            'Centralized egress traffic inspection using AWS Network Firewall in a dedicated Transit Gateway VPC',
            'Enforcing short-lived STS credentials via IAM Identity Center and ABAC (Attribute-Based Access Control)',
            'S3 bucket policy lockdown enforcing `aws:sourceVpce` condition keys'
          ]
        }
      },
      {
        id: 'q_cyber_3',
        questionNumber: 3,
        category: 'DOMAIN_SPECIFIC',
        visualLayout: 'TEXT_MARKDOWN',
        title: 'Post-Incident Root Cause Analysis & Executive Communication',
        prompt: 'Following the containment of a critical zero-day exploit in your perimeter reverse proxy, you must brief both the CISO and the non-technical Board of Directors. How do you structure your Incident Post-Mortem report, and what technical vs business impact metrics do you present to each stakeholder group?',
        timeAllocationMins: 15,
        rubricCriteria: {
          expectedKeyPoints: [
            'Technical metrics for CISO: Initial vector dwell time, Mean Time to Detect (MTTD), Mean Time to Contain (MTTC), and IOC signatures',
            'Business impact metrics for Board: System downtime, customer data exposure verification, regulatory reporting compliance (GDPR/SEC 4-day rule)',
            'Actionable remediation roadmap: Micro-segmentation timeline, patch management SLA adjustments, and threat hunting playbooks'
          ]
        }
      }
    ]
  },

  // 4. ELECTRICAL ENGINEERING (Embedded Systems / IoT - Top-Tech Assessor)
  'session_ee_004': {
    id: 'session_ee_004',
    userId: 'usr_ee_55',
    status: 'IN_PROGRESS',
    createdAt: new Date().toISOString(),
    config: {
      targetJobTitle: 'Embedded Hardware & Systems Engineer',
      industryDomain: 'Smart Grid & Renewable Solar Hardware',
      careerStage: 'MID_LEVEL',
      workArrangement: ['ON_SITE', 'HYBRID'],
      targetCountries: ['Germany', 'Japan', 'Nigeria'],
      isExperienced: true,
      highestDegree: 'B.Eng. Electrical Engineering',
      institution: 'Bayero University Kano',
      mostRecentEmployer: 'Off-Grid Power Solutions',
      yearsOfExperience: 5,
      currentJobTitle: 'Embedded Firmware Developer',
      coreSkills: ['C/C++', 'STM32 Microcontrollers', 'CAN Bus', 'RTOS', 'PCB Design', 'Lithium Battery BMS'],
      summaryOfAchievements: 'Designed firmware for MPPT solar charge controllers with 98.4% power conversion efficiency.',
      selectedCategories: ['TECHNICAL_LIVE_CODING', 'DOMAIN_SPECIFIC'],
      interviewerStyle: 'TOP_TECH_ASSESSOR',
      estimatedDurationMins: 45,
      jobDescription: 'Develop real-time embedded firmware for micro-inverters and lithium battery management systems (BMS).'
    },
    questions: [
      {
        id: 'q_ee_1',
        questionNumber: 1,
        category: 'TECHNICAL_LIVE_CODING',
        visualLayout: 'CODE_EDITOR',
        title: 'Ring Buffer Driver for UART/CAN Bus Communication',
        prompt: 'Write a thread-safe lock-free Ring Buffer driver in C for a micro-controller UART interrupt service routine (ISR). Handle buffer overflow gracefully.',
        timeAllocationMins: 20,
        codeLanguage: 'c',
        codeStarterSnippet: `#include <stdint.h>\n#include <stdbool.h>\n\n#define BUFFER_SIZE 128\n\ntypedef struct {\n    uint8_t buffer[BUFFER_SIZE];\n    volatile uint16_t head;\n    volatile uint16_t tail;\n} RingBuffer;\n\nvoid ring_buffer_init(RingBuffer *rb) {\n    rb->head = 0;\n    rb->tail = 0;\n}\n\nbool ring_buffer_push(RingBuffer *rb, uint8_t data) {\n    // Implement ISR safe enqueue\n    return false;\n}`,
        rubricCriteria: {
          expectedKeyPoints: [
            'Use of volatile keyword for shared head/tail pointers accessed inside Interrupt Service Routine (ISR)',
            'Efficient modulo wrapping using bitwise bitmask `(head + 1) & (BUFFER_SIZE - 1)`',
            'Verification of thread safety without disabling global interrupts where possible'
          ]
        }
      },
      {
        id: 'q_ee_2',
        questionNumber: 2,
        category: 'DOMAIN_SPECIFIC',
        visualLayout: 'WHITEBOARD_DIAGRAM',
        title: 'Lithium BMS State of Charge (SOC) Estimation & Cell Balancing Architecture',
        prompt: 'Design an analog front-end (AFE) and firmware architecture for a 16S Lithium-ion Battery Management System (BMS). Explain your cell balancing strategy (passive vs active) and how you combine Coulomb Counting with Extended Kalman Filtering (EKF) to mitigate State of Charge (SOC) drift over temperature cycles.',
        timeAllocationMins: 15,
        supplementaryData: {
          diagramNodes: [
            '16S LiFePO4 Cell Pack',
            'Analog Front-End (AFE) Isolation IC (e.g., BQ76952)',
            'Microcontroller (STM32F4 via SPI)',
            'MOSFET Switch Gate Driver (Charge/Discharge Control)',
            'CAN Bus Interface / Isolated Transceiver'
          ]
        },
        rubricCriteria: {
          expectedKeyPoints: [
            'Deriving State of Charge (SOC) via integration of current sensing (Coulomb Counting) corrected by Open Circuit Voltage (OCV) lookup tables using Kalman Filtering',
            'Passive balancing thermal dissipation constraints during charging vs Active balancing inductive energy transfer efficiency',
            'Overvoltage, undervoltage, and thermal runaway hardware protection cutoff loops'
          ]
        }
      },
      {
        id: 'q_ee_3',
        questionNumber: 3,
        category: 'DOMAIN_SPECIFIC',
        visualLayout: 'TEXT_MARKDOWN',
        title: 'Hardware/Firmware Debugging Under Noise & EMI Interference',
        prompt: 'During high-power micro-inverter switching at 100 kHz PWM, severe electromagnetic interference (EMI) corrupts ADC readings for current sensing, causing false over-current trips. Walk through your step-by-step hardware layout adjustments and digital filtering techniques to resolve this.',
        timeAllocationMins: 10,
        rubricCriteria: {
          expectedKeyPoints: [
            'Hardware level: Kelvin connection for current shunt sensing, differential trace routing, ground plane isolation, and RC low-pass filtering',
            'Firmware level: Synchronizing ADC sampling triggers to PWM center-aligned valleys/peaks to avoid switching noise transients',
            'Digital filtering algorithms: Implementing Moving Average or Infinite Impulse Response (IIR) exponential smoothing filters'
          ]
        }
      }
    ]
  },

  // 5. FINANCE (Investment Banking / Quantitative Analytics - Strict Tech Lead)
  'session_fin_005': {
    id: 'session_fin_005',
    userId: 'usr_fin_77',
    status: 'IN_PROGRESS',
    createdAt: new Date().toISOString(),
    config: {
      targetJobTitle: 'Corporate Finance & Valuation Analyst',
      industryDomain: 'Investment Banking & Venture Capital',
      careerStage: 'MID_LEVEL',
      workArrangement: ['HYBRID', 'ON_SITE'],
      targetCountries: ['United States', 'United Arab Emirates', 'United Kingdom'],
      isExperienced: true,
      highestDegree: 'B.Sc. Economics & Finance',
      mostRecentEmployer: 'Pan-African Investment Bank',
      yearsOfExperience: 3,
      currentJobTitle: 'Financial Analyst',
      coreSkills: ['DCF Modeling', 'LBO Analysis', 'Financial Statements', 'Excel/VBA', 'Python for Finance'],
      summaryOfAchievements: 'Built valuation models for $45M cross-border M&A acquisition in energy sector.',
      selectedCategories: ['CASE_STUDY_PROBLEM_SOLVING', 'DOMAIN_SPECIFIC'],
      interviewerStyle: 'STRICT_TECH_LEAD',
      estimatedDurationMins: 45,
      jobDescription: 'Perform DCF valuations, leveraged buyout modeling, and present strategic target evaluations to investment committee.'
    },
    questions: [
      {
        id: 'q_fin_1',
        questionNumber: 1,
        category: 'CASE_STUDY_PROBLEM_SOLVING',
        visualLayout: 'METRIC_TABLE',
        title: 'Discounted Cash Flow (DCF) Valuation Sensitivity Analysis',
        prompt: 'Evaluate the target SaaS enterprise valuation using the financial metrics provided below. Calculate WACC and analyze how a 100 bps increase in terminal growth rate impacts Enterprise Value.',
        timeAllocationMins: 15,
        supplementaryData: {
          tableHeaders: ['Financial Metric', 'Current FY ($M)', 'Projected FY+1 ($M)', 'Projected FY+2 ($M)'],
          tableRows: [
            ['Revenue', '12.0', '18.5', '26.0'],
            ['EBITDA Margin', '22%', '26%', '30%'],
            ['Risk-Free Rate (10Y Yield)', '4.25%', '-', '-'],
            ['Target Capital Structure', '80% Equity / 20% Debt', '-', '-']
          ]
        },
        rubricCriteria: {
          expectedKeyPoints: [
            'Correct calculation of Weighted Average Cost of Capital (WACC) using CAPM formula',
            'Unlevered Free Cash Flow (UFCF) adjustment: EBIT * (1 - t) + D&A - CapEx - ΔNWC',
            'Understanding Gordon Growth Model terminal value sensitivity'
          ]
        }
      },
      {
        id: 'q_fin_2',
        questionNumber: 2,
        category: 'CASE_STUDY_PROBLEM_SOLVING',
        visualLayout: 'METRIC_TABLE',
        title: 'Leveraged Buyout (LBO) Debt Structuring & IRR Returns',
        prompt: 'A Private Equity firm is acquiring a $100M Enterprise Value target with 4.5x EBITDA leverage ($45M Senior Debt at 8% interest rate, $55M Sponsor Equity). Given the exit metrics below, calculate the 5-year Internal Rate of Return (IRR) and Multiple on Invested Capital (MOIC).',
        timeAllocationMins: 18,
        supplementaryData: {
          tableHeaders: ['Year', 'EBITDA ($M)', 'Mandatory Debt Repayment ($M)', 'Free Cash Flow Generated ($M)'],
          tableRows: [
            ['Entry (Y0)', '10.0', '-', '-'],
            ['Year 1', '12.0', '5.0', '6.5'],
            ['Year 2', '14.5', '5.0', '8.2'],
            ['Year 3', '17.0', '5.0', '10.5'],
            ['Year 4', '20.0', '5.0', '13.0'],
            ['Year 5 (Exit)', '24.0', '5.0', '16.0']
          ]
        },
        rubricCriteria: {
          expectedKeyPoints: [
            'Exit Enterprise Value calculation using 10.0x exit multiple on $24M Y5 EBITDA ($240M EV)',
            'Cumulative debt paydown over 5 years calculating remaining net debt at exit',
            'Deriving Sponsor Exit Equity Value to determine MOIC (Sponsor Exit Equity / $55M Initial Equity) and mapping to ~20-25% IRR threshold'
          ]
        }
      },
      {
        id: 'q_fin_3',
        questionNumber: 3,
        category: 'DOMAIN_SPECIFIC',
        visualLayout: 'TEXT_MARKDOWN',
        title: '3-Statement Financial Model Linkages Under Impairment Events',
        prompt: 'Walk through how a $10M write-down of intangible assets flows through the Income Statement, Balance Sheet, and Cash Flow Statement assuming a 25% corporate tax rate.',
        timeAllocationMins: 12,
        rubricCriteria: {
          expectedKeyPoints: [
            'Income Statement: Operating income drops by $10M. Net income decreases by $7.5M after 25% tax shield ($2.5M tax savings)',
            'Cash Flow Statement: Net income starts $7.5M lower; $10M non-cash impairment is added back under operating activities. Net cash change increases by +$2.5M',
            'Balance Sheet: Assets side: Cash increases by +$2.5M, Intangible assets decrease by -$10M (Net Assets -$7.5M). Liabilities/Equity side: Retained earnings drop by -$7.5M. Both sides balance perfectly'
          ]
        }
      }
    ]
  },

  // 6. DATA ANALYTICS (BI / Analytics Engineering - Talent Acquisition Manager)
  'session_data_006': {
    id: 'session_data_006',
    userId: 'usr_data_88',
    status: 'IN_PROGRESS',
    createdAt: new Date().toISOString(),
    config: {
      targetJobTitle: 'Lead Analytics Engineer',
      industryDomain: 'E-Commerce & SaaS Telemetry',
      careerStage: 'SENIOR',
      workArrangement: ['REMOTE'],
      targetCountries: ['United States', 'India', 'Canada'],
      isExperienced: true,
      highestDegree: 'B.Sc. Statistics',
      mostRecentEmployer: 'InfoBeatLive Analytics',
      yearsOfExperience: 6,
      currentJobTitle: 'Senior Data Engineer',
      coreSkills: ['SQL', 'dbt', 'Snowflake', 'BigQuery', 'Python', 'Mixpanel', 'Behavioral Analytics'],
      summaryOfAchievements: 'Architected SaaS metrics pipeline serving real-time analytics to 6,000+ business founders.',
      selectedCategories: ['BEHAVIORAL_STAR', 'TECHNICAL_LIVE_CODING'],
      interviewerStyle: 'TALENT_ACQUISITION',
      estimatedDurationMins: 45,
      jobDescription: 'Build reliable dbt models, optimize BigQuery warehouse costs, and align data metrics across marketing and product teams.'
    },
    questions: [
      {
        id: 'q_data_1',
        questionNumber: 1,
        category: 'BEHAVIORAL_STAR',
        visualLayout: 'STAR_STRUCTURED',
        title: 'Handling Conflicting Data Definitions Across Executive Stakeholders',
        prompt: 'Describe a situation where Marketing and Product teams used conflicting definitions for critical business metrics (e.g., Monthly Active Users or Churn Rate). How did you resolve the conflict and drive consensus?',
        timeAllocationMins: 10,
        rubricCriteria: {
          expectedKeyPoints: [
            'Situation: Clearly state the business confusion or revenue miscalculation caused by metric discrepancies',
            'Task: Responsibility as Lead Analytics Engineer to establish a Single Source of Truth',
            'Action: Conducted metric auditing workshops, documented metric contracts, implemented dbt semantic layer',
            'Result: Quantifiable outcome (e.g., eliminated weekly metric reconciliation meetings, 100% executive alignment)'
          ]
        }
      },
      {
        id: 'q_data_2',
        questionNumber: 2,
        category: 'TECHNICAL_LIVE_CODING',
        visualLayout: 'CODE_EDITOR',
        title: 'Advanced Window Functions for Cohort Retention & Churn SQL Analysis',
        prompt: 'Write an ANSI SQL query to calculate 30-day user retention cohorts by signup month for an e-commerce platform. Calculate the percentage of users who placed a second purchase within 30 days of their initial signup date.',
        timeAllocationMins: 20,
        codeLanguage: 'sql',
        codeStarterSnippet: `-- Schema: users (user_id, signup_date)\n-- Schema: orders (order_id, user_id, order_timestamp, amount)\n\nWITH user_first_orders AS (\n    -- Step 1: Identify initial order date per user\n    SELECT \n        user_id,\n        MIN(order_timestamp) AS first_order_date\n    FROM orders\n    GROUP BY user_id\n)\n-- Complete the query to derive 30-day cohort retention percentage\nSELECT \n    DATE_TRUNC('month', u.signup_date) AS cohort_month,\n    COUNT(DISTINCT u.user_id) AS total_users\nFROM users u\nGROUP BY 1;`,
        rubricCriteria: {
          expectedKeyPoints: [
            'Using `DATE_TRUNC` to group users into monthly signup cohorts',
            'Joining initial purchase dates with subsequent orders using `DATEDIFF` or timestamp interval comparisons (<= 30 days)',
            'Calculating retention percentage using `COUNT(DISTINCT CASE WHEN ... THEN user_id END) * 100.0 / NULLIF(total_users, 0)`'
          ]
        }
      },
      {
        id: 'q_data_3',
        questionNumber: 3,
        category: 'TECHNICAL_LIVE_CODING',
        visualLayout: 'TEXT_MARKDOWN',
        title: 'Data Warehouse Cost Optimization & dbt Modeling Strategy',
        prompt: 'Your BigQuery quarterly compute bill increased by 300% due to unpartitioned full table scans on a 2-terabyte raw events table. How do you redesign the dbt modeling layer (Incremental models vs Views) and implement partitioning/clustering strategies to reduce query costs while maintaining dashboard query speed?',
        timeAllocationMins: 15,
        rubricCriteria: {
          expectedKeyPoints: [
            'Refactoring heavy views into `incremental` dbt models using `unique_key` and `is_incremental()` macros',
            'Partitioning BigQuery destination tables by `DATE(event_timestamp)` and clustering by high-cardinality query filters like `user_id` or `event_type`',
            'Enforcing dbt data freshness tests and query dry-run cost estimation in CI/CD pipelines'
          ]
        }
      }
    ]
  }
};