import { ExamSession } from './exam';

// Helper generators for full mock structural completeness
export const createCbseQuestions = () => {
  const questions = [];

  // Section A: Questions 1 to 16 (16 MCQs including 2 Assertion-Reasoning) - 1 Mark Each
  for (let i = 1; i <= 16; i++) {
    if (i === 15 || i === 16) {
      questions.push({
        id: `q_cbse_${i}`,
        questionNumber: i,
        sectionTitle: 'Section A: Multiple Choice & Assertion-Reasoning',
        questionType: 'MULTIPLE_CHOICE' as const,
        visualType: 'MARKDOWN' as const,
        prompt: `**Assertion (A):** Boiling point of alkyl halides increases with increase in molecular mass.\n**Reason (R):** Van der Waals forces of attraction increase with increase in size and surface area of the halogen atom.\n\nSelect the correct option:`,
        options: [
          { label: 'A', text: 'Both A and R are true and R is the correct explanation of A.' },
          { label: 'B', text: 'Both A and R are true but R is NOT the correct explanation of A.' },
          { label: 'C', text: 'A is true but R is false.' },
          { label: 'D', text: 'A is false but R is true.' }
        ],
        maxMarks: 1,
        correctAnswer: 'A'
      });
    } else if (i === 1) {
      questions.push({
        id: `q_cbse_1`,
        questionNumber: 1,
        sectionTitle: 'Section A: Multiple Choice',
        questionType: 'MULTIPLE_CHOICE' as const,
        visualType: 'TEXT' as const,
        prompt: 'Which of the following solutions will have the highest boiling point at 1 atm pressure?',
        options: [
          { label: 'A', text: '0.1 M Glucose' },
          { label: 'B', text: '0.1 M NaCl' },
          { label: 'C', text: '0.1 M BaCl2' },
          { label: 'D', text: '0.1 M FeCl3' }
        ],
        maxMarks: 1,
        correctAnswer: 'D'
      });
    } else {
      questions.push({
        id: `q_cbse_${i}`,
        questionNumber: i,
        sectionTitle: 'Section A: Multiple Choice',
        questionType: 'MULTIPLE_CHOICE' as const,
        visualType: 'TEXT' as const,
        prompt: `Sample CBSE Class 12 Chemistry MCQ Question ${i}: Identify the product formed when phenol reacts with dilute $HNO_3$ at room temperature.`,
        options: [
          { label: 'A', text: 'o-Nitrophenol and p-Nitrophenol' },
          { label: 'B', text: '2,4,6-Trinitrophenol' },
          { label: 'C', text: 'Picric acid' },
          { label: 'D', text: 'Benzene' }
        ],
        maxMarks: 1,
        correctAnswer: 'A'
      });
    }
  }

  // Section B: Questions 17 to 21 (5 Very Short Answer Questions) - 2 Marks Each
  for (let i = 17; i <= 21; i++) {
    questions.push({
      id: `q_cbse_${i}`,
      questionNumber: i,
      sectionTitle: 'Section B: Very Short Answer',
      questionType: 'SHORT_INPUT' as const,
      visualType: 'MARKDOWN' as const,
      prompt: `**Q${i}.** Define **Molar Conductivity** ($\\\Lambda_m$). How does it vary with concentration for weak vs strong electrolytes?`,
      maxMarks: 2,
      rubric: {
        keyPoints: [
          'Definition: Conductance of solution containing 1 mole of electrolyte placed between two electrodes unit distance apart.',
          'Variation: Increases with dilution for both strong and weak electrolytes; sharp increase for weak electrolytes due to increased degree of dissociation.'
        ]
      }
    });
  }

  // Section C: Questions 22 to 28 (7 Short Answer Questions) - 3 Marks Each
  for (let i = 22; i <= 28; i++) {
    if (i === 22) {
      questions.push({
        id: `q_cbse_22`,
        questionNumber: 22,
        sectionTitle: 'Section C: Short Answer',
        questionType: 'SHORT_INPUT' as const,
        visualType: 'MARKDOWN' as const,
        prompt: 'State **Kohlrausch’s Law** of independent migration of ions. Express molar conductivity at infinite dilution for $CaCl_2$.',
        maxMarks: 3,
        rubric: {
          keyPoints: [
            'Definition: Limiting molar conductivity of an electrolyte can be represented as the sum of individual ionic contributions.',
            'Formula: $\\Lambda_m^0(CaCl_2) = \\lambda^0(Ca^{2+}) + 2\\lambda^0(Cl^-)$'
          ]
        }
      });
    } else {
      questions.push({
        id: `q_cbse_${i}`,
        questionNumber: i,
        sectionTitle: 'Section C: Short Answer',
        questionType: 'SHORT_INPUT' as const,
        visualType: 'MARKDOWN' as const,
        prompt: `**Q${i}.** Explain $SN_1$ and $SN_2$ mechanisms with respect to stereochemical inversion and racemization. Give one example for each.`,
        maxMarks: 3,
        rubric: {
          keyPoints: [
            'SN1 leads to racemization due to planar carbocation intermediate.',
            'SN2 leads to Walden inversion due to backside attack.'
          ]
        }
      });
    }
  }

  // Section D: Questions 29 to 30 (2 Case-Based / Passage Questions) - 4 Marks Each
  for (let i = 29; i <= 30; i++) {
    questions.push({
      id: `q_cbse_${i}`,
      questionNumber: i,
      sectionTitle: 'Section D: Case-Based Integrated Questions',
      questionType: 'ESSAY_LONG_TEXT' as const,
      visualType: 'MARKDOWN' as const,
      prompt: `### Case Study Passage - Electrochemistry and Fuel Cells\nFuel cells are galvanic cells that convert chemical energy directly into electrical energy with high efficiency (~70%). The most common hydrogen-oxygen fuel cell uses porous carbon electrodes with concentrated $KOH$ as electrolyte.\n\n**Sub-Questions:**\n1. Write the anodic and cathodic reactions involved in the $H_2-O_2$ fuel cell. (2 Marks)\n2. State two advantages of fuel cells over conventional thermal power plants. (2 Marks)`,
      maxMarks: 4,
      rubric: {
        keyPoints: [
          'Anode reaction: $2H_2 + 4OH^- \\rightarrow 4H_2O + 4e^-$',
          'Cathode reaction: $O_2 + 2H_2O + 4e^- \\rightarrow 4OH^-$',
          'Advantages: Continuous power supply without recharging, eco-friendly (water as byproduct).'
        ]
      }
    });
  }

  // Section E: Questions 31 to 38 (8 Long Answer Questions) - 5 Marks Each
  for (let i = 31; i <= 38; i++) {
    questions.push({
      id: `q_cbse_${i}`,
      questionNumber: i,
      sectionTitle: 'Section E: Long Answer',
      questionType: 'ESSAY_LONG_TEXT' as const,
      visualType: 'MARKDOWN' as const,
      prompt: `**Q${i}.** (a) Derive Nernst Equation for a general electrochemical cell.\n(b) Calculate the EMF of the cell at $25^\\circ C$:\n$Mg(s) | Mg^{2+}(0.001 M) || Cu^{2+}(0.0001 M) | Cu(s)$\nGiven $E^0_{cell} = +2.71 V$.`,
      maxMarks: 5,
      rubric: {
        keyPoints: [
          'Correct derivation of $E = E^0 - \\frac{0.0591}{n} \\log Q$',
          'Identification of $n = 2$',
          'Correct substitution: $Q = \\frac{[Mg^{2+}]}{[Cu^{2+}]} = \\frac{10^{-3}}{10^{-4}} = 10$',
          'Final calculated value: $E = 2.71 - 0.0295 = 2.68 V$'
        ]
      }
    });
  }

  return questions;
};

export const createJeeQuestions = () => {
  const questions = [] as any;
  const subjects = ['Physics', 'Chemistry', 'Mathematics'];

  let globalQuestionNumber = 1;

  subjects.forEach((subj) => {
    // Section A: 20 MCQs per subject (4 Marks each, -1 negative marking)
    for (let i = 1; i <= 20; i++) {
      if (globalQuestionNumber === 1) {
        questions.push({
          id: `q_jee_1`,
          questionNumber: 1,
          sectionTitle: 'Physics - Section A: Single Choice MCQs',
          questionType: 'MULTIPLE_CHOICE' as const,
          visualType: 'TABLE' as const,
          prompt: 'Analyze the thermodynamic state transitions for an ideal gas shown in the table below and identify the total work done during the complete cycle $A \\rightarrow B \\rightarrow C \\rightarrow A$.',
          supplementaryData: {
            tableHeaders: ['State', 'Pressure (kPa)', 'Volume (L)', 'Temperature (K)'],
            tableData: [
              ['A', '100', '2.0', '300'],
              ['B', '300', '2.0', '900'],
              ['C', '100', '6.0', '900']
            ]
          },
          options: [
            { label: 'A', text: '400 J' },
            { label: 'B', text: '800 J' },
            { label: 'C', text: '1200 J' },
            { label: 'D', text: '1600 J' }
          ],
          maxMarks: 4,
          correctAnswer: 'A'
        });
      } else {
        questions.push({
          id: `q_jee_${globalQuestionNumber}`,
          questionNumber: globalQuestionNumber,
          sectionTitle: `${subj} - Section A: Single Choice MCQs`,
          questionType: 'MULTIPLE_CHOICE' as const,
          visualType: 'MARKDOWN' as const,
          prompt: `**${subj} Q${globalQuestionNumber}:** A particle moves in a circle of radius $R = 5\\text{ m}$ with constant angular acceleration $\\alpha = 2\\text{ rad/s}^2$. If it starts from rest, calculate its total acceleration at $t = 2\\text{ s}$.`,
          options: [
            { label: 'A', text: '10 m/s²' },
            { label: 'B', text: '80 m/s²' },
            { label: 'C', text: '80.6 m/s²' },
            { label: 'D', text: '40 m/s²' }
          ],
          maxMarks: 4,
          correctAnswer: 'C'
        });
      }
      globalQuestionNumber++;
    }

    // Section B: 5 Numerical Value Questions per subject (4 Marks each, integer/decimal answer)
    for (let i = 1; i <= 5; i++) {
      questions.push({
        id: `q_jee_${globalQuestionNumber}`,
        questionNumber: globalQuestionNumber,
        sectionTitle: `${subj} - Section B: Numerical Value Questions`,
        questionType: 'SHORT_INPUT' as const,
        visualType: 'MARKDOWN' as const,
        prompt: `**${subj} Numerical Q${globalQuestionNumber}:** A projectile is thrown with speed $v = 20\\text{ m/s}$ at an angle of $30^\\circ$ with horizontal. Find the maximum height reached (in meters). Take $g = 10\\text{ m/s}^2$. Round off to nearest integer.`,
        maxMarks: 4,
        rubric: {
          keyPoints: [
            'Formula: $H_{max} = \\frac{v^2 \\sin^2 \\theta}{2g}$',
            'Calculation: $H_{max} = \\frac{400 \\times (0.5)^2}{20} = \\frac{100}{20} = 5$'
          ]
        }
      });
      globalQuestionNumber++;
    }
  });

  return questions; // Exact Total: 75 Questions
};

export const updatedIndianExamSessions: Record<string, ExamSession> = {
  // 3. INDIAN CBSE Class 12 Chemistry (Hybrid: Exactly 38 Questions)
  'cbse-chemistry-003': {
    id: 'sess_cbse_003',
    userId: 'user_in_302',
    timeLimitMinutes: 180, // 3 Hours
    createdAt: new Date().toISOString(),
    config: {
      category: 'ACADEMIC',
      country: 'India',
      state: 'Delhi',
      examName: 'CBSE Class 12 Board Exam',
      stream: 'Science',
      subject: 'Chemistry',
      targetProgram: 'B.Tech Chemical Engineering',
      targetCareer: 'Chemical Researcher',
      primaryObjective: 'class 11 to 12 exam',
      difficulty: 'STANDARD',
      targetScore: 70, // Max theory marks = 70
      academicBackground: 'Class 12 CBSE Board Student',
      examDescription: 'Official pattern 38-question CBSE Chemistry paper (Sections A-E).'
    },
    questions: createCbseQuestions()
  },

  // 4. INDIAN JEE Main (Physics, Chemistry & Math: Exactly 75 Questions)
  'jee-physics-004': {
    id: 'sess_jee_004',
    userId: 'user_global_05',
    timeLimitMinutes: 180, // 3 Hours
    createdAt: new Date().toISOString(),
    config: {
      category: 'ACADEMIC',
      country: 'India',
      examName: 'JEE Main',
      stream: 'Science',
      subject: 'Physics, Chemistry & Mathematics',
      targetProgram: 'Computer Science & Engineering (NIT/IIT)',
      targetCareer: 'AI Research Scientist',
      primaryObjective: 'university admission',
      difficulty: 'HIGH_DISTINCTION',
      targetScore: 300, // Total score = 75 x 4 = 300
      academicBackground: 'Class 12 Graduate prepping for JEE Main & Advanced',
      examDescription: 'Complete 75-question NTA JEE Main official pattern exam.'
    },
    questions: createJeeQuestions()
  }
};