import { Question } from "@/types/question";

export const questions: Question[] = [
  {
    id: "1",
    text: "How much experience do you have with keeping pets?",
    options: [
      {
        id: "a",
        question_id: "1",
        text: "Beginner (never had a pet before)",
      },
      {
        id: "b",
        question_id: "1",
        text: "Some experience (had a pet in the past)",
      },
      {
        id: "c",
        question_id: "1",
        text: "Experienced (had multiple pets)",
      },
    ],
  },
  {
    id: "2",
    text: "What size of pet do you prefer?",
    options: [
      {
        id: "a",
        question_id: "2",
        text: "Small-sized",
      },
      {
        id: "b",
        question_id: "2",
        text: "Medium-sized",
      },
      {
        id: "c",
        question_id: "2",
        text: "Large-sized",
      },
      {
        id: "d",
        question_id: "2",
        text: "No particular preference",
      },
    ],
  },
  {
    id: "3",
    text: "What type of interaction do you want to have with your pet?",
    options: [
      {
        id: "a",
        question_id: "3",
        text: "Actively play together",
      },
      {
        id: "b",
        question_id: "3",
        text: "Quietly bond and cuddle",
      },
      {
        id: "c",
        question_id: "3",
        text: "Teach and train the pet",
      },
      {
        id: "d",
        question_id: "3",
        text: "No particular preference",
      },
    ],
  },
  {
    id: "4",
    text: "How important is intelligence and learning ability in a pet for you?",
    options: [
      {
        id: "a",
        question_id: "4",
        text: "I desire very high intelligence and learning ability",
      },
      {
        id: "b",
        question_id: "4",
        text: "Moderate intelligence and learning ability is sufficient",
      },
      {
        id: "c",
        question_id: "4",
        text: "Intelligence and learning ability is not that important",
      },
    ],
  },
  {
    id: "5",
    text: "How much effort are you willing to put into taking care of your pet?",
    options: [
      {
        id: "a",
        question_id: "5",
        text: "I prefer a pet that requires minimal effort",
      },
      {
        id: "b",
        question_id: "5",
        text: "I can handle average care and maintenance",
      },
      {
        id: "c",
        question_id: "5",
        text: "I don't mind a pet that requires a bit more effort",
      },
      {
        id: "d",
        question_id: "5",
        text: "I'm willing to dedicate my time and energy, even for a high-maintenance pet",
      },
    ],
  },
  {
    id: "6",
    text: "What type of living environment do you have?",
    options: [
      {
        id: "a",
        question_id: "6",
        text: "Detached house",
      },
      {
        id: "b",
        question_id: "6",
        text: "Apartment or condominium",
      },
      {
        id: "c",
        question_id: "6",
        text: "Large tracts of land",
      },
    ],
  },
  {
    id: "7",
    text: "Do you have children or elderly people in your household?",
    options: [
      {
        id: "a",
        question_id: "7",
        text: "I have children",
      },
      {
        id: "b",
        question_id: "7",
        text: "I have elderly people",
      },
      {
        id: "c",
        question_id: "7",
        text: "I have both children and elderly people",
      },
      {
        id: "d",
        question_id: "7",
        text: "I have neither",
      },
    ],
  },
  {
    id: "8",
    text: "Do you have any allergies?",
    options: [
      {
        id: "a",
        question_id: "8",
        text: "Yes",
      },
      {
        id: "b",
        question_id: "8",
        text: "No",
      },
    ],
  },
  {
    id: "9",
    text: "How much are you willing to spend on your pet?",
    options: [
      {
        id: "a",
        question_id: "9",
        text: "Low (prefer minimal monthly costs)",
      },
      {
        id: "b",
        question_id: "9",
        text: "Moderate (can afford some costs for pet care and maintenance)",
      },
      {
        id: "c",
        question_id: "9",
        text: "High (no significant limitations on pet expenses)",
      },
    ],
  },
];
