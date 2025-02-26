
const Feedback = ({ feedback }) => {
  if (!feedback.good && !feedback.neutral && !feedback.bad) {
    return <p>No feedback yet</p>;
  }
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {feedback.good + feedback.neutral + feedback.bad}</p>
      <p></p>
    </div>
  );
};
export default Feedback;