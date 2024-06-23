import { useState } from "react"
import ThankYou from "./components/ThankYou";
import Submit from "./components/Submit";



function App() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  

  return (
    <section className="section">
      {submitted ? (
        <ThankYou rating={rating} />
        ) : (
        <Submit rating={rating} setRating={setRating} setSubmitted={setSubmitted} />)}

    </section>
  )
}

export default App
