export const quizData = {
  categories: [
    {
      id: 'js_basics',
      name: 'JavaScript Basics',
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
          correctAnswer: 'C',
          timeLimit: 10
        },
        {
          id: 'q2',
          question: 'Which company developed JavaScript?',
          options: [
            'A. Microsoft',
            'B. Netscape',
            'C. Google',
            'D. Mozilla'
          ],
          correctAnswer: 'B',
          timeLimit: 10
        }
      ]
    },
    {
      id: 'react_basics',
      name: 'React Basics',
      questions: [
        {
          id: 'q1',
          question: 'What is the correct syntax to create a functional component in React?',
          options: [
            'A. function MyComponent() {}',
            'B. class MyComponent extends React.Component {}',
            'C. var MyComponent = React.createClass({})',
            'D. new MyComponent()'
          ],
          correctAnswer: 'A',
          timeLimit: 10
        }
      ]
    }
  ]
};