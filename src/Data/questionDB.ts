import { Quiz } from "./quiz.types";

const questionsSet: Quiz = {
  quizName: "Ved Quiz",
  questions: [
    {
      question: "1. When did Lord Krishna speak Bhagavad Gita to Arjuna?",
      options: [
        "(A) Before the battle",
        "(B) After the battle",
        "(C) At the palace",
        "(D) Below a tree"
      ],
      answers: [
        {
          option: "A",
          isRight: true
        },
        {
          option: "B",
          isRight: false
        },
        {
          option: "C",
          isRight: false
        },
        {
          option: "D",
          isRight: false
        }
      ],
      points: 5,
      negativepoints: 9
    },
    {
      question:
        "2. What is the most essential qualification to know Bhagavad Gita?",
      options: [
        "(A) Desire to get rid of the miseries of life",
        "(B) Taking birth in Brahmin clan",
        "(C) Knowledge of Sanskrit language"
      ],
      answers: [
        {
          option: "A",
          isRight: true
        },
        {
          option: "B",
          isRight: false
        },
        {
          option: "C",
          isRight: false
        }
      ],
      points: 10
    },
    {
      question: "3. When can one participate in 'satsang'?",
      options: [
        "(A) When one desires to acquire knowledge",
        "(B) When God desires",
        "(C) When one is invited for satsang"
      ],
      answers: [
        {
          option: "A",
          isRight: true
        },
        {
          option: "B",
          isRight: false
        },
        {
          option: "C",
          isRight: false
        }
      ],
      points: 15,
      negativepoints: 9
    },
    {
      question: "4. What is the work of a Spiritual Master Guru?",
      options: [
        "(A) To treat diseases",
        "(B) To bless profitable business",
        "(C) To give spiritual knowledge",
        "(D) To teach dhyan-yoga / meditation"
      ],
      answers: [
        {
          option: "A",
          isRight: false
        },
        {
          option: "B",
          isRight: false
        },
        {
          option: "C",
          isRight: true
        },
        {
          option: "D",
          isRight: false
        }
      ],
      points: 20
    }
  ]
};

export { questionsSet };
