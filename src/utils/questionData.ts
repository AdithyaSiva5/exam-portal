interface Question {
  id: string;
  question: string;
  options: Array<{ id: string; option: string }>;
  correctOptionId: string;
}

const questions: Question[] = [
  {
    id: "q1",
    question: "Which planet is known as the Red Planet?",
    options: [
      { id: "o1", option: "Earth" },
      { id: "o2", option: "Mars" },
      { id: "o3", option: "Venus" },
      { id: "o4", option: "Jupiter" },
    ],
    correctOptionId: "o2",
  },
  {
    id: "q2",
    question: "What is the capital city of Australia?",
    options: [
      { id: "o1", option: "Sydney" },
      { id: "o2", option: "Melbourne" },
      { id: "o3", option: "Canberra" },
      { id: "o4", option: "Brisbane" },
    ],
    correctOptionId: "o3", // Correct answer is Canberra
  },
  {
    id: "q3",
    question: "Which is the largest ocean on Earth?",
    options: [
      { id: "o1", option: "Atlantic Ocean" },
      { id: "o2", option: "Indian Ocean" },
      { id: "o3", option: "Arctic Ocean" },
      { id: "o4", option: "Pacific Ocean" },
    ],
    correctOptionId: "o4", // Correct answer is Pacific Ocean
  },
  {
    id: "q4",
    question: "What is the square root of 144?",
    options: [
      { id: "o1", option: "10" },
      { id: "o2", option: "12" },
      { id: "o3", option: "14" },
      { id: "o4", option: "16" },
    ],
    correctOptionId: "o2",
  },
  {
    id: "q5",
    question: "Which country hosted the 2016 Summer Olympics?",
    options: [
      { id: "o1", option: "China" },
      { id: "o2", option: "Brazil" },
      { id: "o3", option: "United Kingdom" },
      { id: "o4", option: "Russia" },
    ],
    correctOptionId: "o2",
  },
  {
    id: "q6",
    question: "What is the hardest natural substance on Earth?",
    options: [
      { id: "o1", option: "Gold" },
      { id: "o2", option: "Iron" },
      { id: "o3", option: "Diamond" },
      { id: "o4", option: "Platinum" },
    ],
    correctOptionId: "o3", // Correct answer is Diamond
  },
  {
    id: "q7",
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      { id: "o1", option: "Charles Dickens" },
      { id: "o2", option: "William Shakespeare" },
      { id: "o3", option: "Leo Tolstoy" },
      { id: "o4", option: "Mark Twain" },
    ],
    correctOptionId: "o2",
  },
  {
    id: "q8",
    question: "What is the chemical symbol for water?",
    options: [
      { id: "o1", option: "H2O" },
      { id: "o2", option: "CO2" },
      { id: "o3", option: "O2" },
      { id: "o4", option: "HO" },
    ],
    correctOptionId: "o1",
  },
  {
    id: "q9",
    question: "Which animal is known as the 'King of the Jungle'?",
    options: [
      { id: "o1", option: "Elephant" },
      { id: "o2", option: "Tiger" },
      { id: "o3", option: "Lion" },
      { id: "o4", option: "Cheetah" },
    ],
    correctOptionId: "o3", // Correct answer is Lion
  },
  {
    id: "q10",
    question: "In which year did the Titanic sink?",
    options: [
      { id: "o1", option: "1910" },
      { id: "o2", option: "1912" },
      { id: "o3", option: "1914" },
      { id: "o4", option: "1920" },
    ],
    correctOptionId: "o2",
  },
  {
    id: "q11",
    question: "What is the smallest prime number?",
    options: [
      { id: "o1", option: "1" },
      { id: "o2", option: "2" },
      { id: "o3", option: "3" },
      { id: "o4", option: "5" },
    ],
    correctOptionId: "o2", // Correct answer is 2
  },
  {
    id: "q12",
    question: "Which planet is the closest to the Sun?",
    options: [
      { id: "o1", option: "Venus" },
      { id: "o2", option: "Mercury" },
      { id: "o3", option: "Earth" },
      { id: "o4", option: "Mars" },
    ],
    correctOptionId: "o2",
  },
  {
    id: "q13",
    question: "Which country is known for the Great Wall?",
    options: [
      { id: "o1", option: "Japan" },
      { id: "o2", option: "China" },
      { id: "o3", option: "India" },
      { id: "o4", option: "Korea" },
    ],
    correctOptionId: "o2",
  },
  {
    id: "q14",
    question: "What is the main gas found in the air we breathe?",
    options: [
      { id: "o1", option: "Oxygen" },
      { id: "o2", option: "Nitrogen" },
      { id: "o3", option: "Carbon Dioxide" },
      { id: "o4", option: "Hydrogen" },
    ],
    correctOptionId: "o2",
  },
  {
    id: "q15",
    question: "How many days are there in a leap year?",
    options: [
      { id: "o1", option: "365" },
      { id: "o2", option: "366" },
      { id: "o3", option: "364" },
      { id: "o4", option: "367" },
    ],
    correctOptionId: "o2",
  },
  {
    id: "q16",
    question: "Who discovered gravity?",
    options: [
      { id: "o1", option: "Albert Einstein" },
      { id: "o2", option: "Isaac Newton" },
      { id: "o3", option: "Galileo Galilei" },
      { id: "o4", option: "Nikola Tesla" },
    ],
    correctOptionId: "o2",
  },
  {
    id: "q17",
    question: "What is the largest bone in the human body?",
    options: [
      { id: "o1", option: "Femur" },
      { id: "o2", option: "Humerus" },
      { id: "o3", option: "Tibia" },
      { id: "o4", option: "Skull" },
    ],
    correctOptionId: "o1",
  },
  {
    id: "q18",
    question: "Which artist painted the Mona Lisa?",
    options: [
      { id: "o1", option: "Vincent van Gogh" },
      { id: "o2", option: "Pablo Picasso" },
      { id: "o3", option: "Leonardo da Vinci" },
      { id: "o4", option: "Claude Monet" },
    ],
    correctOptionId: "o3",
  },
  {
    id: "q19",
    question: "Which is the hottest planet in the solar system?",
    options: [
      { id: "o1", option: "Mercury" },
      { id: "o2", option: "Venus" },
      { id: "o3", option: "Mars" },
      { id: "o4", option: "Jupiter" },
    ],
    correctOptionId: "o2",
  },
  {
    id: "q20",
    question: "How many planets are there in the solar system?",
    options: [
      { id: "o1", option: "7" },
      { id: "o2", option: "8" },
      { id: "o3", option: "9" },
      { id: "o4", option: "10" },
    ],
    correctOptionId: "o2",
  },
];

/**
 * Mock function to simulate fetching questions from a server.
 * Returns a promise that resolves with an array of `Question` objects after a delay of 500 milliseconds.
 *
 * @returns {Promise<Question[]>} A promise that resolves with an array of questions.
 */
export const getQuestions = () =>
  new Promise<Question[]>((resolve) =>
    setTimeout(() => resolve(questions), 500)
  );
