export const quizData = {
  categories: [
    {
      id: 'js_basics',
      name: 'JavaScript Basics (5 Questions)',
      questions: [
        {
          id: 'q1',
          question: "What is the correct syntax for referring to an external script called 'script.js'?",
          options: [
            "A. <script name='script.js'>",
            "B. <script href='script.js'>",
            "C. <script src='script.js'>",
            "D. <script file='script.js'>"
          ],
          correctAnswer: "C",
          timeLimit: 10
        },
        {
          id: 'q2',
          question: "Which company developed JavaScript?",
          options: [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          correctAnswer: "B",
          timeLimit: 10
        },
        {
          id: 'q3',
          question: "Inside which HTML element do we put the JavaScript?",
          options: [
            "A. <javascript>",
            "B. <js>",
            "C. <script>",
            "D. <code>"
          ],
          correctAnswer: "C",
          timeLimit: 10
        },
        {
          id: 'q4',
          question: "How do you write \"Hello World\" in an alert box?",
          options: [
            "A. msg('Hello World');",
            "B. alertBox('Hello World');",
            "C. alert('Hello World');",
            "D. msgBox('Hello World');"
          ],
          correctAnswer: "C",
          timeLimit: 10
        },
        {
          id: 'q5',
          question: "How to write an IF statement in JavaScript?",
          options: [
            "A. if i = 5 then",
            "B. if i == 5 then",
            "C. if (i == 5)",
            "D. if i = 5"
          ],
          correctAnswer: "C",
          timeLimit: 10
        }
      ]
    },
    {
      id: 'react_basics',
      name: 'React Basics (5 Questions)',
      questions: [
        {
          id: 'q6',
          question: "What is React?",
          options: [
            "A. A JavaScript library for building user interfaces",
            "B. A CSS framework",
            "C. A database",
            "D. A server-side language"
          ],
          correctAnswer: "A",
          timeLimit: 10
        },
        {
          id: 'q7',
          question: "What is the command to create a new React app?",
          options: [
            "A. npx create-react-app myApp",
            "B. npm init react",
            "C. create-react myApp",
            "D. react-create myApp"
          ],
          correctAnswer: "A",
          timeLimit: 10
        },
        {
          id: 'q8',
          question: "What is JSX?",
          options: [
            "A. A syntax extension for JavaScript",
            "B. A new programming language",
            "C. JSON with XML",
            "D. JavaScript XML transformer"
          ],
          correctAnswer: "A",
          timeLimit: 10
        },
        {
          id: 'q9',
          question: "Which hook is used to manage state in functional components?",
          options: [
            "A. useEffect",
            "B. useContext",
            "C. useReducer",
            "D. useState"
          ],
          correctAnswer: "D",
          timeLimit: 10
        },
        {
          id: 'q10',
          question: "How do you pass data from a parent to a child component?",
          options: [
            "A. Using props",
            "B. Using useState",
            "C. Using context",
            "D. Using Redux"
          ],
          correctAnswer: "A",
          timeLimit: 10
        }
      ]
    }
  ]
};