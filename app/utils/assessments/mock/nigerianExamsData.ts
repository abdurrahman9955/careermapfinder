import { ExamSession } from './exam';

// Helper generator for JAMB UTME Use of English (50 Objective Questions)
export const createJambEnglishQuestions = () => {
  const questions = [];

  // 1. Passages / Comprehension (Questions 1 - 10)
  for (let i = 1; i <= 10; i++) {
    questions.push({
      id: `q_jamb_${i}`,
      questionNumber: i,
      sectionTitle: 'Section 1: Reading Comprehension',
      questionType: 'MULTIPLE_CHOICE' as const,
      visualType: 'MARKDOWN' as const,
      prompt: `### Passage 1 (Questions 1 - 5)\n*Read the passage carefully and answer the question that follows.*\n\nThe rapid rise of digital financial technology in West Africa has transformed local economies, enabling small business owners to execute instant transactions. However, regulatory frameworks continue to lag behind, exposing consumers to cybersecurity risks and predatory lending practices.\n\n**Question ${i}:** According to the author, what is the primary threat associated with rapid fintech expansion?`,
      options: [
        { label: 'A', text: 'Decrease in small business productivity' },
        { label: 'B', text: 'Lack of consumer interest in mobile payments' },
        { label: 'C', text: 'Inadequate regulatory oversight and cybersecurity risks' },
        { label: 'D', text: 'High costs of mobile data subscriptions' }
      ],
      maxMarks: 1,
      correctAnswer: 'C'
    });
  }

  // 2. Cloze Test / Gap Filling (Questions 11 - 20)
  for (let i = 11; i <= 20; i++) {
    questions.push({
      id: `q_jamb_${i}`,
      questionNumber: i,
      sectionTitle: 'Section 2: Cloze Test (Passage Completion)',
      questionType: 'MULTIPLE_CHOICE' as const,
      visualType: 'MARKDOWN' as const,
      prompt: `**Gap ${i - 10}:** The government committee was set up to ___ [${i}] ___ into the remote causes of the recent industrial strike action.`,
      options: [
        { label: 'A', text: 'look' },
        { label: 'B', text: 'probe' },
        { label: 'C', text: 'search' },
        { label: 'D', text: 'inquire' }
      ],
      maxMarks: 1,
      correctAnswer: 'B'
    });
  }

  // 3. Sentence Completion & Grammar (Questions 21 - 35)
  for (let i = 21; i <= 35; i++) {
    questions.push({
      id: `q_jamb_${i}`,
      questionNumber: i,
      sectionTitle: 'Section 3: Lexis and Structure',
      questionType: 'MULTIPLE_CHOICE' as const,
      visualType: 'TEXT' as const,
      prompt: `Select the option that BEST completes the sentence:\nNeither the principal nor the teachers ___ present at the emergency board meeting yesterday.`,
      options: [
        { label: 'A', text: 'was' },
        { label: 'B', text: 'were' },
        { label: 'C', text: 'are' },
        { label: 'D', text: 'is' }
      ],
      maxMarks: 1,
      correctAnswer: 'B'
    });
  }

  // 4. Antonyms and Synonyms (Questions 36 - 50)
  for (let i = 36; i <= 50; i++) {
    if (i <= 43) {
      questions.push({
        id: `q_jamb_${i}`,
        questionNumber: i,
        sectionTitle: 'Section 4: Antonyms (Opposite in Meaning)',
        questionType: 'MULTIPLE_CHOICE' as const,
        visualType: 'TEXT' as const,
        prompt: `In the question below, choose the word or phrase that is **MOST NEARLY OPPOSITE** in meaning to the underlined word:\n\nThe manager made a **meticulous** inspection of the production line.`,
        options: [
          { label: 'A', text: 'Careless' },
          { label: 'B', text: 'Thorough' },
          { label: 'C', text: 'Detailed' },
          { label: 'D', text: 'Cautious' }
        ],
        maxMarks: 1,
        correctAnswer: 'A'
      });
    } else {
      questions.push({
        id: `q_jamb_${i}`,
        questionNumber: i,
        sectionTitle: 'Section 5: Synonyms (Nearest in Meaning)',
        questionType: 'MULTIPLE_CHOICE' as const,
        visualType: 'TEXT' as const,
        prompt: `Choose the option that is **NEAREST IN MEANING** to the underlined word:\n\nThe witness gave a **candid** account of what transpired during the robbery.`,
        options: [
          { label: 'A', text: 'Frank' },
          { label: 'B', text: 'Vague' },
          { label: 'C', text: 'Biased' },
          { label: 'D', text: 'Secret' }
        ],
        maxMarks: 1,
        correctAnswer: 'A'
      });
    }
  }

  return questions; // Exact Total: 50 Objective Questions
};

// Helper generator for WAEC/NECO Paper 2 (Theory, Essay & Summary)
export const createWaecEnglishQuestions = () => {
  return [
    // Section A: Essay Writing (Choose 1 of 5, 50 Marks)
    {
      id: 'q_waec_1',
      questionNumber: 1,
      sectionTitle: 'Section A: Essay / Letter Writing (Answer ONE question from this section)',
      questionType: 'ESSAY_LONG_TEXT' as const,
      visualType: 'MARKDOWN' as const,
      prompt: `**Option 1 (Formal Letter):** Write a letter to the Chairman of your Local Government Area describing at least three major infrastructural problems facing your community and proposing realistic solutions.\n\n*(Your answer should be between 400 – 450 words)*`,
      maxMarks: 50,
      rubric: {
        keyPoints: [
          'Content (10 Marks): Must address 3 distinct problems (e.g., roads, pipe-borne water, health center) and realistic solutions.',
          'Organization (10 Marks): Proper formal letter structure (Sender & Recipient addresses, Date, Title, Salutation, 4-5 paragraphs, Formal Sign-off).',
          'Expression (20 Marks): Appropriate formal tone, clarity, varied sentence structures, precise vocabulary.',
          'Mechanical Accuracy (10 Marks): Deduct 1/2 mark for each grammatical error, spelling mistake, or punctuation error.'
        ]
      }
    },
    {
      id: 'q_waec_2',
      questionNumber: 2,
      sectionTitle: 'Section A: Essay / Letter Writing',
      questionType: 'ESSAY_LONG_TEXT' as const,
      visualType: 'MARKDOWN' as const,
      prompt: `**Option 2 (Article for Publication):** Write an article suitable for publication in a national newspaper on the topic: *"The Role of Youth in Combating Examination Malpractice in Secondary Schools."*`,
      maxMarks: 50,
      rubric: {
        keyPoints: [
          'Format: Article Title, Author Name/Caption.',
          'Content: Must analyze root causes and state concrete actions youth can take.'
        ]
      }
    },

    // Section B: Comprehension (20 Marks)
    {
      id: 'q_waec_3',
      questionNumber: 3,
      sectionTitle: 'Section B: Comprehension',
      questionType: 'ESSAY_LONG_TEXT' as const,
      visualType: 'MARKDOWN' as const,
      prompt: `### Comprehension Passage\n*Read the passage below and answer all the questions that follow in complete sentences.*\n\nFor decades, deforestation in the West African sub-region has accelerated at an alarming rate. Logging companies, subsistence farmers, and charcoal producers have stripped millions of hectares of virgin forest. The environmental consequences are severe: topsoil erosion has depleted agricultural yield, and unpredictable rainfall patterns now threaten food security.\n\n**Sub-Questions:**\n1. State two major human activities mentioned in the passage that contribute to deforestation. (4 Marks)\n2. What two environmental consequences result from tree removal? (4 Marks)\n3. *"unpredictable rainfall patterns..."*\n   (i) What grammatical name is given to this expression? (2 Marks)\n   (ii) What is its function as used in the sentence? (2 Marks)\n4. For each of the following words, find another word or phrase that can replace it as used in the passage:\n   (a) *accelerated* (b) *stripped* (c) *severe* (d) *depleted* (8 Marks)`,
      maxMarks: 20,
      rubric: {
        keyPoints: [
          'Sub-Q1: Logging, subsistence farming, charcoal production.',
          'Sub-Q2: Topsoil erosion/depletion of crop yield and unpredictable rainfall/threat to food security.',
          'Sub-Q3: (i) Noun phrase. (ii) Functions as the subject of the verb "threaten".',
          'Sub-Q4: (a) Increased/quickened, (b) Bare/cleared, (c) Serious/harsh, (d) Exhausted/reduced.'
        ]
      }
    },

    // Section C: Summary Writing (30 Marks)
    {
      id: 'q_waec_4',
      questionNumber: 4,
      sectionTitle: 'Section C: Summary Writing',
      questionType: 'ESSAY_LONG_TEXT' as const,
      visualType: 'MARKDOWN' as const,
      prompt: `### Summary Passage\n*Read the passage below and complete the summary exercise.*\n\nModern technology has undeniably enhanced human productivity, enabling high-speed communication and automated manufacturing. However, over-reliance on digital devices has bred widespread sedentary lifestyles, leading to health complications such as obesity and cardiovascular disease. Furthermore, the constant influx of digital notifications reduces attention spans and impairs face-to-face interpersonal relationships.\n\n**Summary Task:**\nIn **FIVE** concise sentences, one for each point, summarize:\n(a) Three negative health and psychological effects of technology mentioned in the passage.\n(b) Two positive economic and productivity benefits of technology mentioned in the passage.`,
      maxMarks: 30,
      rubric: {
        keyPoints: [
          'Must be written in 5 separate, full grammatical sentences.',
          'Deduct 1 mark for each incomplete sentence or inclusion of extraneous material.',
          'Points (a): Sedentary lifestyle leading to obesity, cardiovascular risks, reduced attention spans/impaired relationships.',
          'Points (b): High-speed communication, automated manufacturing.'
        ]
      }
    }
  ];
};

export const updatedNigerianExamSessions: Record<string, ExamSession> = {
  // 1. JAMB UTME (Use of English - Exactly 50 Questions)
  'jamb-english-001': {
    id: 'sess_jamb_001',
    userId: 'user_ng_99',
    timeLimitMinutes: 60,
    createdAt: new Date().toISOString(),
    config: {
      category: 'ACADEMIC',
      country: 'Nigeria',
      examName: 'JAMB UTME',
      subject: 'Use of English',
      targetProgram: 'Law / Mass Communication',
      targetCareer: 'Legal Practitioner',
      primaryObjective: 'university admission',
      difficulty: 'STANDARD',
      targetScore: 90, // Out of 100
      academicBackground: 'SS3 Secondary School Graduate',
      examDescription: 'Complete 50-question JAMB UTME Use of English computer-based test.'
    },
    questions: createJambEnglishQuestions()
  },

  // 2. WAEC WASSCE (English Language Paper 2 - Theory, Essay & Summary)
  'waec-english-002': {
    id: 'sess_waec_002',
    userId: 'user_ng_101',
    timeLimitMinutes: 120, // 2 Hours
    createdAt: new Date().toISOString(),
    config: {
      category: 'ACADEMIC',
      country: 'Nigeria',
      examName: 'WAEC WASSCE',
      subject: 'English Language (Paper 2 Theory)',
      targetProgram: 'Mass Communication',
      targetCareer: 'Journalist',
      primaryObjective: 'class 11 to 12 exam',
      difficulty: 'HIGH_DISTINCTION',
      targetScore: 85, // Out of 100 Marks
      academicBackground: 'SS3 Secondary School Student',
      examDescription: 'Official WAEC/NECO Paper 2 Theory covering Essay Writing, Comprehension, and Summary.'
    },
    questions: createWaecEnglishQuestions()
  }
};