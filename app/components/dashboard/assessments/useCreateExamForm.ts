import React, { useState } from 'react';
import { ExamCategory, DifficultyLevel, ExamFormPayload } from './types';

export function useCreateExamForm() {
   const [language, setLangauge] = useState<string>('English');
  const [examCategory, setExamCategory] = useState<ExamCategory>('academic');
  const [selectedCountry, setSelectedCountry] = useState<string>('in');
  const [stateRegion, setStateRegion] = useState<string>('');
  
  // Academic Form States
  const [academicExamName, setAcademicExamName] = useState<string>('');
  const [stream, setStream] = useState<string>('Sciences');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [customSubjectInput, setCustomSubjectInput] = useState<string>('');
  
  // Professional Form States
  const [proDomain, setProDomain] = useState<string>('cloud');
  const [proExamName, setProExamName] = useState<string>('');
  const [certBody, setCertBody] = useState<string>('');
  const [subject, setSubject] = useState<string>('');

  const [course, setCourse] = useState<string>('');
  const [career, setCareer] = useState<string>('');
  const [background, setBackgrund] = useState<string>('');
  
  // AI Config & Goals
  const [examPurpose, setExamPurpose] = useState<string>('admission');
  const [targetScore, setTargetScore] = useState<string>('');
  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel>('intermediate');
  const [additionalNotes, setAdditionalNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const toggleSubject = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((s) => s !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const handleAddCustomSubject = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && customSubjectInput.trim()) {
      e.preventDefault();
      const trimmed = customSubjectInput.trim();
      if (!selectedSubjects.includes(trimmed)) {
        setSelectedSubjects([...selectedSubjects, trimmed]);
      }
      setCustomSubjectInput('');
    }
  };

  const handleSubmit = async (e: React.FormEvent, onSubmitSuccess?: (payload: ExamFormPayload) => void) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload: ExamFormPayload = {
      category: examCategory,
      location: { country: selectedCountry, state: stateRegion },
      examDetails: examCategory === 'academic' 
        ? { examName: academicExamName, stream, subjects: selectedSubjects }
        : { domain: proDomain, certBody, examName: proExamName },
      config: {
        purpose: examPurpose,
        targetScore,
        difficultyLevel,
        additionalNotes,
      }
    };

    try {
      // Simulate API call to AI generator engine
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (onSubmitSuccess) onSubmitSuccess(payload);
    } catch (error) {
      console.error('Error submitting exam parameters:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    state: {
      language,
      examCategory,
      selectedCountry,
      stateRegion,
      academicExamName,
      stream,
      subject,
      course,
      career, 
      selectedSubjects,
      customSubjectInput,
      proDomain,
      proExamName,
      certBody,
      examPurpose,
      targetScore,
      difficultyLevel,
      additionalNotes,
      background, 
      isSubmitting,
    },
    actions: {
      setLangauge,
      setExamCategory,
      setSelectedCountry,
      setStateRegion,
      setAcademicExamName,
      setStream,
      setSubject,
      setCourse,
      setCareer,
      setCustomSubjectInput,
      setProDomain,
      setProExamName,
      setCertBody,
      setExamPurpose,
      setTargetScore,
      setDifficultyLevel,
      setAdditionalNotes,
      setBackgrund,
      toggleSubject,
      handleAddCustomSubject,
      handleSubmit,
    }
  };
}