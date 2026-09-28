import { Star } from "lucide-react";
import Button from "../ui/Button.jsx";
import { useState } from "react";
import Alert from "../ui/alert.jsx";
import { FaceGrinning } from "lucide-react";

const initialState = {
    rating: '',
    feedback: '',
}

export default function Feedback() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [feedBack, setFeedBack] = useState(initialState)
    const [isSubmit, setIsSubmit] = useState(false);

   const handleSumbit = (e) => {
        e.preventDefault();
        if (rating === 0) {
           alert("Per favore, inserisci un voto")
        }
        
        setHover(0)
        setFeedBack(initialState)
        setIsSubmit(true);
    }
    
    return (

        <form onSubmit={handleSumbit} className="m-4 text-center">
            <h3 className="text-center">Lascia il tuo feedback</h3>
            <div className="d-flex justify-content-center align-items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => {
                    const isFilled = star <= (rating);
                    return (
                            <label
                                key={star}
                                style={{ cursor: "pointer", display: "inline-flex" }}
                                onMouseEnter={() =>{
                                    if (!isSubmit) setHover(star)
                                }}

                                onMouseLeave={() => {
                                    if (!isSubmit) setHover(0)
                                    }}
                                onClick={() => {
                                        if (!isSubmit) setRating(star)
                                    }}
                            > 
                                {/* Nasconde completamente il radio button visivo */}
                                <input
                                type="radio"
                                name="rating"
                                value={star}
                                disabled={isSubmit}
                                checked={rating === star}
                                onChange={() => setRating(star)}
                                style={{ display: "none" }}
                                />

                                {/* UNICA icona per stella */}
                                <Star
                                size={32}
                                fill={isFilled ? "#f59e0b" : "transparent"}
                                stroke={isFilled ? "#f59e0b" : "#1f2937"}
                                strokeWidth={1.5}
                                style={{ transition: "all 0.15s ease" }}
                                />
                            </label>
                    )
                })}
            </div>
            
            {isSubmit ? (
                <Alert type="success" classes="d-flex align-items-center justify-content-center mt-2">
                    <FaceGrinning className="me-2" size={40}/>
                    <h3>Grazie per il tuo feedback!</h3>
                </Alert>
            ) : (
            
            <textarea 
                className="form-control w-75 mx-auto mt-4" 
                placeholder="Inserisci qui il tuo feedback..."
                value={feedBack.feedback} 
                onChange={(e) => setFeedBack({ feedback: e.target.value })}  
                rows="3">
            </textarea>
            )}

            <Button onClick={handleSumbit} type="submit" className="btn btn-primary  mt-4 d-block mx-auto">Invia</Button>
        </form>
    )
}       