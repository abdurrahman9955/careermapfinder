export type FeedbackReason =
  | 'General Experience'
  | 'Bug / Issue Report'
  | 'Feature Request'
  | 'Data Accuracy / Correction'
  | 'Content Improvement';

export interface FeedbackFormData {
  fullName: string;
  email: string; // Optional
  reason: FeedbackReason;
  rating: number; // Supports 0.5 step increments (0.5 to 5.0)
  statement: string;
}