import { InterviewEvaluationReport } from './interview';

export const mockInterviewEvaluationReports: Record<string, InterviewEvaluationReport> = {
  // 1. SOFTWARE ENGINEERING
  'session_swe_001': {
    sessionId: 'session_swe_001',
    targetJobTitle: 'Senior Distributed Systems Engineer',
    overallScore: 88.5,
    hireRecommendation: 'Strong Hire',
    executiveSummary: 'Candidate demonstrated exceptional depth in low-latency backend systems and algorithm optimization. Solution for the Sliding Window Rate Limiter was clean and edge-case aware. System design logic showed strong familiarity with distributed consensus and saga patterns.',
    radarMetrics: {
      technicalProficiency: 92,
      communicationClarity: 85,
      problemSolvingLogic: 90,
      cultureAndLeadership: 84,
      domainKnowledge: 91.5
    },
    strengths: [
      'Proactively identified memory leak risks when evicting stale rate limiter timestamps.',
      'Flawless understanding of idempotency keys using Redis distributed locks.',
      'Clear, articulate communication when evaluating trade-offs under network partition scenarios.'
    ],
    weaknesses: [
      'Could elaborate further on database replication lag during multi-region failovers.',
      'Could elaborate further on database replication lag during multi-region failovers.',
      'Initial time complexity estimate missed array reallocation overhead in high-throughput streams.'
    ],
    keyImprovementAreas: [
      'Practice explicitly stating big-O space complexity before writing code.',
      'Practice explicitly stating big-O space complexity before writing code.',
      'Incorporate concrete latency SLA metrics (e.g., p99 < 15ms) directly into system design responses.'
    ],
    categoryBreakdowns: [
      {
        category: 'TECHNICAL_LIVE_CODING',
        categoryName: 'Live Coding & Data Structures',
        score: 92,
        status: 'Mastered'
      },
      {
        category: 'SYSTEM_DESIGN_ARCHITECTURE',
        categoryName: 'System Design & Architecture',
        score: 88,
        status: 'Mastered'
      },

      {
        category: 'BEHAVIORAL_STAR',
        categoryName: 'Behavioral & Leadership (STAR)',
        score: 84,
        status: 'Proficient'
      },

    ],
    questionEvaluations: [
      {
        questionId: 'q_swe_1',
        questionNumber: 1,
        category: 'TECHNICAL_LIVE_CODING',
        score: 94,
        feedback: 'Excellent implementation of sliding window. Code was idiomatic TypeScript with clean variable naming.',
        strengthsObserved: [
          'Handled window boundary conditions smoothly.',
          'Explained amortized O(1) time complexity correctly.'
        ],
        missedOpportunities: [
          'Could have used a deque data structure to achieve strict O(1) pop operations.'
        ],
        idealAnswerOutline: 'Maintain timestamp logs array per key. On check, binary search or pop items older than (now - window). If array size < limit, append now and return true.'
      },
      {
        questionId: 'q_swe_2',
        questionNumber: 2,
        category: 'SYSTEM_DESIGN_ARCHITECTURE',
        score: 83,
        feedback: 'Solid global architecture setup. Handled idempotency locking and Kafka event queues effectively.',
        strengthsObserved: [
          'Strong selection of CockroachDB for multi-region transactional consistency.',
          'Clear separation between sync authorization and async webhook delivery.'
        ],
        missedOpportunities: [
          'Did not explicitly cover fallbacks for third-party payment processor gateway timeouts.'
        ],
        idealAnswerOutline: 'Enforce API idempotency at CloudFront edge using distributed Redis locks. Route to multi-region transactional store with two-phase commit, streaming async webhooks to Kafka dead-letter queues.'
      }
    ],
    generatedAt: new Date().toISOString()
  },

  // 2. HEALTHCARE
  'session_health_002': {
    sessionId: 'session_health_002',
    targetJobTitle: 'Healthcare Informatics Analyst',
    overallScore: 82.0,
    hireRecommendation: 'Lean Hire',
    executiveSummary: 'Strong grasp of clinical data standards, specifically HL7 FHIR resource structures and RESTful API mapping. Candidate communicated compliance protocols clearly and showed empathy for clinical end-user workflows.',
    radarMetrics: {
      technicalProficiency: 78,
      communicationClarity: 88,
      problemSolvingLogic: 80,
      cultureAndLeadership: 85,
      domainKnowledge: 89
    },
    strengths: [
      'Thorough knowledge of HIPAA Minimum Necessary rules when exposing PHI attributes.',
      'Articulated practical strategies for mapping legacy SQL relational schemas to FHIR JSON resources.',
      'Strong patient data privacy awareness and audit log design.'
    ],
    weaknesses: [
      'Did not mention OAuth2 / SMART on FHIR authorization standards explicitly.',
      'Underestimated API throughput constraints during high-volume batch migration.'
    ],
    keyImprovementAreas: [
      'Review SMART on FHIR authorization scopes and token exchange flows.',
      'Include concrete performance benchmarks for clinical data ingestion pipelines.'
    ],
    categoryBreakdowns: [
      {
        category: 'DOMAIN_SPECIFIC',
        categoryName: 'Healthcare & EHR Integration',
        score: 89,
        status: 'Mastered'
      },
      {
        category: 'CASE_STUDY_PROBLEM_SOLVING',
        categoryName: 'Clinical Workflow Optimization',
        score: 78,
        status: 'Proficient'
      },
      {
        category: 'HR_RECRUITER_SCREENING',
        categoryName: 'Culture & Compliance Screening',
        score: 85,
        status: 'Proficient'
      }
    ],
    questionEvaluations: [
      {
        questionId: 'q_health_1',
        questionNumber: 1,
        category: 'DOMAIN_SPECIFIC',
        score: 89,
        feedback: 'Clear, structured explanation of FHIR resource mapping and RBAC access controls.',
        strengthsObserved: [
          'Correctly identified Patient and Observation resource mapping.',
          'Emphasized immutable audit trails for PHI access.'
        ],
        missedOpportunities: [
          'Omitted token-based SMART on FHIR access delegation.'
        ],
        idealAnswerOutline: 'Wrap legacy SQL DB with Node/Python service mapping rows to FHIR JSON. Enforce SMART on FHIR OAuth2, apply field-level masking for PHI attributes, and write all requests to an append-only audit log.'
      }
    ],
    generatedAt: new Date().toISOString()
  },

  // 3. CYBERSECURITY
  'session_cyber_003': {
    sessionId: 'session_cyber_003',
    targetJobTitle: 'Senior Cyber Incident Response Specialist',
    overallScore: 91.0,
    hireRecommendation: 'Strong Hire',
    executiveSummary: 'Exceptional response under simulated incident pressure. Candidate correctly diagnosed malicious w3wp.exe child process spawning, executed immediate containment protocols, and demonstrated rigorous forensic preservation tactics.',
    radarMetrics: {
      technicalProficiency: 94,
      communicationClarity: 88,
      problemSolvingLogic: 92,
      cultureAndLeadership: 86,
      domainKnowledge: 95
    },
    strengths: [
      'Instant recognition of C2 beaconing and shadow copy deletion attempts.',
      'Prioritized host network isolation within minutes without prematurely powering down RAM.',
      'Clear step-by-step incident response playbook aligned with NIST SP 800-61.'
    ],
    weaknesses: [
      'Could have mentioned Kerberos ticket purging earlier in the credential revoking phase.'
    ],
    keyImprovementAreas: [
      'Incorporate active threat intelligence sharing steps (e.g., STIX/TAXII automated ingestion) post-containment.'
    ],
    categoryBreakdowns: [
      {
        category: 'CASE_STUDY_PROBLEM_SOLVING',
        categoryName: 'Incident Response & Threat Hunting',
        score: 93,
        status: 'Mastered'
      },
      {
        category: 'DOMAIN_SPECIFIC',
        categoryName: 'Enterprise Cloud & Network Security',
        score: 90,
        status: 'Mastered'
      }
    ],
    questionEvaluations: [
      {
        questionId: 'q_cyber_1',
        questionNumber: 1,
        category: 'CASE_STUDY_PROBLEM_SOLVING',
        score: 93,
        feedback: 'Outstanding triage skills. Demonstrated seasoned incident commander mindset.',
        strengthsObserved: [
          'Prioritized host isolation via EDR agent before full forensic memory acquisition.',
          'Identified C2 destination IP and vssadmin shadow copy deletion tactics.'
        ],
        missedOpportunities: [
          'Failed to mention resetting golden/silver Kerberos ticket keys.'
        ],
        idealAnswerOutline: '1. Isolate WEB-PROD and DB hosts via EDR. 2. Capture volatile RAM dumps. 3. Block C2 IP (185.220.101.5) at perimeter firewall. 4. Revoke compromised service account credentials and force Kerberos password reset. 5. Re-image compromised nodes.'
      }
    ],
    generatedAt: new Date().toISOString()
  },

  // 4. ELECTRICAL ENGINEERING
  'session_ee_004': {
    sessionId: 'session_ee_004',
    targetJobTitle: 'Embedded Hardware & Systems Engineer',
    overallScore: 86.0,
    hireRecommendation: 'Strong Hire',
    executiveSummary: 'Solid proficiency in low-level C programming, microcontroller register manipulation, and real-time ISR communication. Demonstrated good hardware awareness regarding memory constraints and atomic operations.',
    radarMetrics: {
      technicalProficiency: 89,
      communicationClarity: 82,
      problemSolvingLogic: 87,
      cultureAndLeadership: 80,
      domainKnowledge: 88
    },
    strengths: [
      'Correct usage of volatile pointers for shared ISR memory addresses.',
      'Implemented bitwise modulo optimization for power-of-two ring buffer sizes.',
      'Strong practical knowledge of BMS cell balancing and CAN bus signaling.'
    ],
    weaknesses: [
      'Initial Ring Buffer implementation missed strict atomic write barriers for ARM Cortex-M architecture.'
    ],
    keyImprovementAreas: [
      'Study explicit memory barrier instructions (__DMB, __DSB) when developing multi-threaded or interrupt-driven embedded C code.'
    ],
    categoryBreakdowns: [
      {
        category: 'TECHNICAL_LIVE_CODING',
        categoryName: 'Embedded Firmware & Drivers (C)',
        score: 88,
        status: 'Mastered'
      },
      {
        category: 'DOMAIN_SPECIFIC',
        categoryName: 'Microcontrollers & Power Electronics',
        score: 84,
        status: 'Proficient'
      }
    ],
    questionEvaluations: [
      {
        questionId: 'q_ee_1',
        questionNumber: 1,
        category: 'TECHNICAL_LIVE_CODING',
        score: 88,
        feedback: 'Very good implementation of lock-free ring buffer for microcontrollers.',
        strengthsObserved: [
          'Used volatile keyword appropriately.',
          'Handled head/tail index wrapping correctly using bitwise mask.'
        ],
        missedOpportunities: [
          'Did not add atomic memory compiler barriers for Cortex-M processors.'
        ],
        idealAnswerOutline: 'Define RingBuffer with volatile head/tail indices. In push ISR, check if (head + 1) & MASK == tail (full). If not full, write byte to buffer[head], update head with bitwise mask, and return true.'
      }
    ],
    generatedAt: new Date().toISOString()
  },

  // 5. FINANCE
  'session_fin_005': {
    sessionId: 'session_fin_005',
    targetJobTitle: 'Corporate Finance & Valuation Analyst',
    overallScore: 84.5,
    hireRecommendation: 'Lean Hire',
    executiveSummary: 'Strong technical mechanics in DCF modeling, WACC calculation, and financial statement reconciliation. Solid analytical reasoning, though sensitivity assumptions around terminal growth rate could be defended more rigorously.',
    radarMetrics: {
      technicalProficiency: 86,
      communicationClarity: 84,
      problemSolvingLogic: 85,
      cultureAndLeadership: 80,
      domainKnowledge: 87.5
    },
    strengths: [
      'Flawless calculation of Cost of Equity using CAPM and WACC weighted capital structure.',
      'Clear understanding of Unlevered Free Cash Flow (UFCF) adjustments from EBITDA.',
      'Structured approach to evaluating M&A deal multi-year synergies.'
    ],
    weaknesses: [
      'Assumed static risk-free rate without considering macroeconomic inflation adjustments.',
      'Overlooked CapEx working capital changes in year 2 projections.'
    ],
    keyImprovementAreas: [
      'Incorporate multiple macroeconomic scenario tables (Bull/Base/Bear) when presenting valuation models.'
    ],
    categoryBreakdowns: [
      {
        category: 'CASE_STUDY_PROBLEM_SOLVING',
        categoryName: 'Financial Valuation & DCF Modeling',
        score: 86,
        status: 'Mastered'
      },
      {
        category: 'DOMAIN_SPECIFIC',
        categoryName: 'Corporate Finance & M&A',
        score: 83,
        status: 'Proficient'
      }
    ],
    questionEvaluations: [
      {
        questionId: 'q_fin_1',
        questionNumber: 1,
        category: 'CASE_STUDY_PROBLEM_SOLVING',
        score: 86,
        feedback: 'Accurate WACC step-by-step calculation and sound Gordon Growth sensitivity analysis.',
        strengthsObserved: [
          'Correct formula application for WACC = (E/V * Re) + (D/V * Rd * (1 - t)).',
          'Accurately explained how 100 bps terminal growth increase expands Gordon Growth multiplier.'
        ],
        missedOpportunities: [
          'Omitted working capital NWC reinvestment deduction in Free Cash Flow.'
        ],
        idealAnswerOutline: '1. Calculate WACC using CAPM. 2. Derive UFCF = EBIT*(1-t) + D&A - CapEx - ΔNWC. 3. Apply Gordon Growth Model for Terminal Value = (UFCF_n * (1+g)) / (WACC - g). 4. Discount cash flows to present value.'
      }
    ],
    generatedAt: new Date().toISOString()
  },

  // 6. DATA ANALYTICS
  'session_data_006': {
    sessionId: 'session_data_006',
    targetJobTitle: 'Lead Analytics Engineer',
    overallScore: 89.0,
    hireRecommendation: 'Strong Hire',
    executiveSummary: 'Outstanding communication and stakeholder management skills. Used the STAR method effectively to explain how technical dbt data modeling resolved executive metric disagreements between Product and Marketing leadership.',
    radarMetrics: {
      technicalProficiency: 88,
      communicationClarity: 94,
      problemSolvingLogic: 90,
      cultureAndLeadership: 91,
      domainKnowledge: 87
    },
    strengths: [
      'Structured response using Situation, Task, Action, and Result (STAR) framework.',
      'Articulated concrete business impact (creating a single source of truth and eliminating metric discrepancies).',
      'Strong technical grounding in dbt semantic layer implementation and BigQuery optimization.'
    ],
    weaknesses: [
      'Could have provided specific dbt testing assertions (e.g., dbt_expectations package details).'
    ],
    keyImprovementAreas: [
      'Quantify financial or operational time savings metrics (e.g., "saved 15 analyst hours per week") directly in STAR result sections.'
    ],
    categoryBreakdowns: [
      {
        category: 'BEHAVIORAL_STAR',
        categoryName: 'Stakeholder Alignment & STAR Method',
        score: 93,
        status: 'Mastered'
      },
      {
        category: 'TECHNICAL_LIVE_CODING',
        categoryName: 'Data Modeling & Telemetry (dbt/SQL)',
        score: 85,
        status: 'Proficient'
      }
    ],
    questionEvaluations: [
      {
        questionId: 'q_data_1',
        questionNumber: 1,
        category: 'BEHAVIORAL_STAR',
        score: 93,
        feedback: 'Exceptional STAR method structure. Masterfully bridged technical engineering with executive communication.',
        strengthsObserved: [
          'Clear delineation of conflicting MAU and Churn definitions.',
          'Demonstrated leadership by driving cross-functional alignment and implementing dbt contracts.'
        ],
        missedOpportunities: [
          'Could have cited explicit automated data quality testing frameworks.'
        ],
        idealAnswerOutline: 'S: Product & Marketing used conflicting churn formulas causing executive reporting friction. T: Establish a unified telemetry metric contract. A: Led metric workshops, defined standardized SQL models in dbt, and enforced CI/CD schema testing. R: Single source of truth established with 100% executive adoption.'
      }
    ],
    generatedAt: new Date().toISOString()
  }
};


export const getEvaluationReportBySessionId = (sessionId: string): InterviewEvaluationReport | null => {
  return mockInterviewEvaluationReports[sessionId] || null;
};
