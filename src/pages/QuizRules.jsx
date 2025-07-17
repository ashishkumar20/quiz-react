
const QuizRules = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6 relative border-2 border-blue-400">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 pb-2 border-dotted border-blue-400">
          Quiz rules
        </h2>

        <div className="mb-6 border border-dotted border-blue-300 p-4 rounded-md bg-gray-50">
          <h3 className="font-semibold mb-2">10-Second Timer</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Each question comes with a 10-second timer.</li>
            <li>If you don’t answer within the time limit, the app will automatically move to the next question.</li>
          </ul>
        </div>

        <div className="mb-6 border border-dotted border-blue-300 p-4 rounded-md bg-gray-50">
          <h3 className="font-semibold mb-2">Manual Navigation</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>You can navigate to the next question manually before the timer expires.</li>
            <li>Use the "Next" button to move ahead if you’re ready before the timer runs out.</li>
          </ul>
        </div>

        <div className="border border-dotted border-blue-300 p-4 rounded-md bg-gray-50">
          <h3 className="font-semibold mb-2">Final Score and Performance Message</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>After all questions are answered, your final score will be displayed.</li>
            <li>
              Based on your performance, you will receive a personalized message:
              <ul className="list-disc ml-6 mt-2">
                <li>Great job!: If you score <strong>above 80%</strong>.</li>
                <li>Well done!: If you score <strong>between 60% and 80%</strong>.</li>
                <li>Keep practicing!: If you score <strong>below 60%</strong>.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuizRules;