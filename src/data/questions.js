// src/data/questions.js
const questions = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "A JavaScript library for building user interfaces",
      "A CSS framework",
      "A backend framework",
      "A database"
    ],
    answer: ["A JavaScript library for building user interfaces"],
  },
  {
    id: 2,
    question: "What is the virtual DOM in React?",
    options: [
      "A copy of the real DOM",
      "A JavaScript object representation of the UI",
      "The actual DOM",
      "None of the above"
    ],
    answer: ["A JavaScript object representation of the UI"],
  },
  {
    id: 3,
    question: "Which of the following is a lifecycle method in React?",
    options: [
      "componentDidMount",
      "componentWillUnmount",
      "render",
      "All of the above"
    ],
    answer: ["componentDidMount", "componentWillUnmount", "render"],
  },
  {
    id: 4,
    question: "What is the purpose of keys in React lists?",
    options: [
      "To identify elements uniquely",
      "To optimize performance",
      "To keep track of elements",
      "All of the above"
    ],
    answer: ["To identify elements uniquely", "To optimize performance", "To keep track of elements"],
  },
  {
    id: 5,
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "JavaScript X",
      "Java Syntax Extension",
      "None of the above"
    ],
    answer: ["JavaScript XML"],
  },
  {
    id: 6,
    question: "Which hook is used to manage state in functional components?",
    options: [
      "useEffect",
      "useContext",
      "useReducer",
      "useState"
    ],
    answer: ["useState"],
  },
  {
    id: 7,
    question: "What is a higher-order component?",
    options: [
      "A component that takes another component as an argument",
      "A component that manages state",
      "A functional component",
      "None of the above"
    ],
    answer: ["A component that takes another component as an argument"],
  },
  {
    id: 8,
    question: "What is the purpose of the useEffect hook?",
    options: [
      "To perform side effects in function components",
      "To manage state",
      "To create context",
      "To handle events"
    ],
    answer: ["To perform side effects in function components"],
  },
  {
    id: 9,
    question: "What does 'lifting state up' mean in React?",
    options: [
      "Moving state to a parent component",
      "Using local state",
      "Using context API",
      "None of the above"
    ],
    answer: ["Moving state to a parent component"],
  },
  {
    id: 10,
    question: "What is React Router used for?",
    options: [
      "Managing application state",
      "Routing and navigation in React applications",
      "Styling components",
      "Fetching data"
    ],
    answer: ["Routing and navigation in React applications"],
  },
];

export default questions;
