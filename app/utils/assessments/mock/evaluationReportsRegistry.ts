import { ComprehensiveEvaluationReport } from './exam';

export const allEvaluationReports: Record<string, ComprehensiveEvaluationReport> = {
  // 1. NIGERIAN JAMB UTME (Use of English - Objective CBT)
  'sess_jamb_001': {
    sessionId: 'sess_jamb_001',
    examName: 'JAMB UTME',
    subject: 'Use of English',
    totalMarksObtained: 76,
    totalMaxMarks: 100,
    percentage: 76,
    grade: 'Excellent (76/100)',
    overallFeedback: 'Demonstrated strong speed and accuracy in Lexis and Structure, but lost critical marks in Passage 1 inferences due to rushed reading.',
    strengths: [
      'High accuracy in Antonyms and Synonyms section (14/15 correct).',
      'Solid grasp of concord and tense agreement in Cloze tests.',
      'Completed all 50 questions within 42 minutes (18 minutes remaining).'
    ],
    improvementAreas: [
      'Inference-based questions in Reading Comprehension require careful elimination.',
      'Re-check prepositions following specific phrasal verbs.'
    ],
    categoryBreakdown: [
      { categoryName: 'Reading Comprehension', score: 14, maxScore: 20, percentage: 70, status: 'Needs Improvement' },
      { categoryName: 'Cloze Test & Gap Filling', score: 18, maxScore: 20, percentage: 90, status: 'Strong' },
      { categoryName: 'Lexis & Structure', score: 26, maxScore: 30, percentage: 86.7, status: 'Strong' },
      { categoryName: 'Antonyms & Synonyms', score: 18, maxScore: 30, percentage: 60, status: 'Critical Focus' }
    ],
    questionEvaluations: [
      {
        questionId: 'q_jamb_1',
        questionNumber: 1,
        userAnswer: 'C',
        correctAnswer: 'C',
        isCorrect: true,
        marksAwarded: 2,
        maxMarks: 2,
        feedback: 'Correct. Option C accurately reflects the passage’s emphasis on inadequate regulatory oversight.'
      },
      {
        questionId: 'q_jamb_11',
        questionNumber: 11,
        userAnswer: 'A',
        correctAnswer: 'B',
        isCorrect: false,
        marksAwarded: 0,
        maxMarks: 2,
        feedback: 'Incorrect. The idiom "probe into" is the standard colocation for official investigations, not "look into" in this context.',
        modelAnswer: 'Option B: probe'
      }
    ],
    generatedAt: new Date().toISOString()
  },

  // 2. NIGERIAN WAEC WASSCE (English Language Paper 2 - Theory & Essay)
  'sess_waec_002': {
    sessionId: 'sess_waec_002',
    examName: 'WAEC WASSCE',
    subject: 'English Language (Paper 2 Theory)',
    totalMarksObtained: 74,
    totalMaxMarks: 100,
    percentage: 74,
    grade: 'B2 (Credit with Distinction)',
    overallFeedback: 'Solid performance in Essay Writing and Summary. Formal letter layout was fully compliant with WAEC marking guidelines.',
    strengths: [
      'Flawless formal letter address and sign-off format in Section A.',
      'Concise summary writing with full grammatical adherence in Section C.',
      'Rich vocabulary usage with strong paragraph transitions.'
    ],
    improvementAreas: [
      'Deducted 2.5 marks for mechanical accuracy errors (comma splices and spelling of "infrastructure").',
      'Grammatical function identification in Section B needs tighter grammatical naming.'
    ],
    categoryBreakdown: [
      { categoryName: 'Section A: Formal Letter / Essay', score: 38, maxScore: 50, percentage: 76, status: 'Strong' },
      { categoryName: 'Section B: Comprehension', score: 14, maxScore: 20, percentage: 70, status: 'Needs Improvement' },
      { categoryName: 'Section C: Summary Writing', score: 22, maxScore: 30, percentage: 73.3, status: 'Strong' }
    ],
    questionEvaluations: [
      {
        questionId: 'q_waec_1',
        questionNumber: 1,
        userAnswer: 'Dear Sir,\n\nLETTER OF COMPLAINT ON INFRASTRUCTURAL DECAY IN OUR LOCAL GOVERNMENT AREA...\n[Full Candidate Essay Response Submitted]',
        marksAwarded: 38,
        maxMarks: 50,
        feedback: 'Content (8/10), Organization (8/10), Expression (15/20), Mechanical Accuracy (7/10). Excellent points raised for water and road networks.',
        modelAnswer: 'See WAEC Official Marking Guide: Formal letter layout with 3 clear infrastructural challenges and matching actionable solutions.'
      }
    ],
    generatedAt: new Date().toISOString()
  },

  // 3. INDIAN CBSE Class 12 (Chemistry - Hybrid 38 Questions)
  'sess_cbse_003': {
    sessionId: 'sess_cbse_003',
    examName: 'CBSE Class 12 Board Exam',
    subject: 'Chemistry',
    totalMarksObtained: 61.5,
    totalMaxMarks: 70,
    percentage: 87.8,
    grade: 'A1',
    overallFeedback: 'Outstanding numerical accuracy in Electrochemistry and Solutions. Case-study integration was well articulated.',
    strengths: [
      '100% accuracy in Section A MCQs and Assertion-Reasoning questions.',
      'Proper application of Nernst equation formula steps in Section E.',
      'Clean presentation of organic chemical equations.'
    ],
    improvementAreas: [
      'Include explicit chemical reaction state symbols (s, aq, g) in Section B short answers.',
      'Provide chemical equation representations alongside verbal definitions.'
    ],
    categoryBreakdown: [
      { categoryName: 'Physical Chemistry', score: 22, maxScore: 23, percentage: 95.6, status: 'Strong' },
      { categoryName: 'Inorganic Chemistry', score: 18, maxScore: 19, percentage: 94.7, status: 'Strong' },
      { categoryName: 'Organic Chemistry', score: 21.5, maxScore: 28, percentage: 76.8, status: 'Needs Improvement' }
    ],
    questionEvaluations: [
      {
        questionId: 'q_cbse_1',
        questionNumber: 1,
        userAnswer: 'D',
        correctAnswer: 'D',
        isCorrect: true,
        marksAwarded: 1,
        maxMarks: 1,
        feedback: 'Correct. FeCl3 dissociates into 4 ions (i = 4), yielding the highest van \'t Hoff factor.'
      },
      {
        questionId: 'q_cbse_22',
        questionNumber: 22,
        userAnswer: 'Kohlrausch law states that molar conductivity of an electrolyte at infinite dilution is the sum of limiting molar conductivities of its anions and cations.',
        marksAwarded: 2.5,
        maxMarks: 3,
        feedback: 'Definition is accurate. Lost 0.5 marks for omitting the mathematical equation representation for CaCl2.',
        modelAnswer: 'Kohlrausch’s Law: Limiting molar conductivity of an electrolyte can be represented as the sum of individual ionic contributions. Formula: Λm°(CaCl2) = λ°(Ca²⁺) + 2λ°(Cl⁻).'
      }
    ],
    generatedAt: new Date().toISOString()
  },

  // 4. INDIAN JEE Main (Physics, Chemistry & Math - 75 Questions CBT)
  'sess_jee_004': {
    sessionId: 'sess_jee_004',
    examName: 'JEE Main',
    subject: 'Physics, Chemistry & Mathematics',
    totalMarksObtained: 212,
    totalMaxMarks: 300,
    percentage: 70.6,
    grade: '98.85 Percentile (Estimated)',
    overallFeedback: 'Strong score across Physics and Chemistry. Mathematics section had a high accuracy rate but slower solving pace.',
    strengths: [
      'Exceptional performance in Thermodynamics state table analysis.',
      'Zero negative marking incurred in Physics Section B numerical inputs.',
      'High accuracy rate (88%) across attempted questions.'
    ],
    improvementAreas: [
      'Avoid unattempted numerical input questions in Mathematics.',
      'Speed up integration techniques to improve overall exam time allocation.'
    ],
    categoryBreakdown: [
      { categoryName: 'Physics', score: 82, maxScore: 100, percentage: 82, status: 'Strong' },
      { categoryName: 'Chemistry', score: 76, maxScore: 100, percentage: 76, status: 'Strong' },
      { categoryName: 'Mathematics', score: 54, maxScore: 100, percentage: 54, status: 'Critical Focus' }
    ],
    questionEvaluations: [
      {
        questionId: 'q_jee_1',
        questionNumber: 1,
        userAnswer: 'A',
        correctAnswer: 'A',
        isCorrect: true,
        marksAwarded: 4,
        maxMarks: 4,
        feedback: 'Correct. Work done during cyclic process equals area under the P-V curve = 400 J.'
      },
      {
        questionId: 'q_jee_21',
        questionNumber: 21,
        userAnswer: '5',
        correctAnswer: '5',
        isCorrect: true,
        marksAwarded: 4,
        maxMarks: 4,
        feedback: 'Correct integer value. Maximum height H = (v² sin²θ)/(2g) = (400 × 0.25)/20 = 5m.'
      }
    ],
    generatedAt: new Date().toISOString()
  },

  // 5. AWS Certified Solutions Architect - Associate (SAA-C03)
  'sess_aws_005': {
    sessionId: 'sess_aws_005',
    examName: 'AWS Certified Solutions Architect - Associate (SAA-C03)',
    subject: 'Cloud Architecture, Security, Resilience & Cost Optimization',
    totalMarksObtained: 815,
    totalMaxMarks: 1000,
    percentage: 81.5,
    grade: 'PASS (Threshold: 720)',
    overallFeedback: 'Passed comfortably. Showed mastery in decoupled event-driven architectures and multi-AZ database resilience.',
    strengths: [
      '100% accuracy on Domain 1 (Design Secure Architectures).',
      'Strong selection of serverless components (SQS, SNS, Lambda) over self-managed EC2 proxies.',
      'Good understanding of CloudFront OAC origin security.'
    ],
    improvementAreas: [
      'Review Amazon EFS storage class lifecycle rules vs. S3 Glacier flexible retrieval.',
      'Re-examine VPC Peering transitive routing limitations.'
    ],
    categoryBreakdown: [
      { categoryName: 'Domain 1: Design Secure Architectures (30%)', score: 285, maxScore: 300, percentage: 95, status: 'Strong' },
      { categoryName: 'Domain 2: Design Resilient Architectures (26%)', score: 210, maxScore: 260, percentage: 80.7, status: 'Strong' },
      { categoryName: 'Domain 3: Design High-Performing Architectures (24%)', score: 180, maxScore: 240, percentage: 75, status: 'Needs Improvement' },
      { categoryName: 'Domain 4: Design Cost-Optimized Architectures (20%)', score: 140, maxScore: 200, percentage: 70, status: 'Critical Focus' }
    ],
    questionEvaluations: [
      {
        questionId: 'q_aws_1',
        questionNumber: 1,
        userAnswer: ['A', 'C'],
        correctAnswer: 'A,C',
        isCorrect: true,
        marksAwarded: 2,
        maxMarks: 2,
        feedback: 'Correct. SQS provides message buffering while SNS fan-out delivers notifications reliably.'
      }
    ],
    generatedAt: new Date().toISOString()
  },

  // 6. CompTIA Security+ (SY0-701)
  'sess_sec_006': {
    sessionId: 'sess_sec_006',
    examName: 'CompTIA Security+ (SY0-701)',
    subject: 'Threats, Attacks, Security Architecture, Operations & Governance',
    totalMarksObtained: 785,
    totalMaxMarks: 900,
    percentage: 87.2,
    grade: 'PASS (Threshold: 750)',
    overallFeedback: 'Passed. Solid performance in Incident Response protocols and threat vector identification.',
    strengths: [
      'Excellent log analysis in Performance-Based Questions (PBQs).',
      'Accurate identification of social engineering attack classifications.',
      'Thorough understanding of Zero Trust principles.'
    ],
    improvementAreas: [
      'Review cryptographic cipher block modes (GCM vs. CBC).',
      'Differentiate clearly between Risk Avoidance, Risk Transfer, and Risk Acceptance scenarios.'
    ],
    categoryBreakdown: [
      { categoryName: 'General Security Concepts (12%)', score: 100, maxScore: 108, percentage: 92.5, status: 'Strong' },
      { categoryName: 'Threats, Vulnerabilities & Mitigations (22%)', score: 180, maxScore: 198, percentage: 90.9, status: 'Strong' },
      { categoryName: 'Security Architecture (18%)', score: 140, maxScore: 162, percentage: 86.4, status: 'Strong' },
      { categoryName: 'Security Operations (28%)', score: 215, maxScore: 252, percentage: 85.3, status: 'Strong' },
      { categoryName: 'Security Program Management & Oversight (20%)', score: 150, maxScore: 180, percentage: 83.3, status: 'Needs Improvement' }
    ],
    questionEvaluations: [
      {
        questionId: 'q_sec_1',
        questionNumber: 1,
        userAnswer: 'Configure automated Fail2ban perimeter firewall rule to block source IP 192.168.1.45',
        marksAwarded: 5,
        maxMarks: 5,
        feedback: 'Correct PBQ answer. Identified both the correct perimeter control and target source IP address.',
        modelAnswer: 'Set up automated rate-limiting / drop rule at the perimeter firewall targeting source IP 192.168.1.45 on TCP port 22.'
      }
    ],
    generatedAt: new Date().toISOString()
  }
};

/**
 * Retrieve an evaluation report by session ID
 */
export const getEvaluationReportBySessionId = (sessionId: string): ComprehensiveEvaluationReport | null => {
  return allEvaluationReports[sessionId] || null;
};