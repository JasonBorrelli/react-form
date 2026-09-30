import { useState } from "react"
import Button from "../ui/Button"
import Alert from "../ui/Alert"

const initialState = {
    name: '',
    number_of_people: '',
    date: ''
}


export default function Booking() {
const [isBookingComplete, setIsBookingComplete] = useState(false)

const [state, setState] = useState(initialState)



    const handleFields = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        if (state.name === "" || state.number_of_people === "" || state.date === "") {
            alert("Per favore, inserisci tutti i campi")
        } else {
            setIsBookingComplete(true)
        }
    }


   


    return ( 


        <section className="m-4 bg-warning-subtle p-2 border rounded-3 border-warning-subtle shadow-sm-4 bg-success-subtle p-2">
            <h2 className="text-center">Prenota il tuo tavolo</h2>

            { isBookingComplete ? ( 
                <Alert
                    type="success"
                    className="mt-2 container w-25 text-center">
                    <h3 className="text-center">Prenotazione completata</h3>
                    <h6 className="text-center">Riepilogo prenotazione:</h6>
                    <p className="mb-1 text-center">Nome: {state.name}</p>
                    <p className="mb-1 text-center">Numero di persone: {state.number_of_people}</p>
                    <p className="mb-1 text-center">Data: {state.date}</p>
                    
                    </Alert>
                ) : (
                <form onSubmit={handleSumbit} className=" container w-25 mx-auto mt-4">
                    <div className="mb-3">
                        <label 
                        htmlFor="ospite"
                        className="form-label"
                        >Nome</label>
                        <input 
                        type="text"
                        id="ospite" 
                        name="name" 
                        value={state.name}
                        onChange={handleFields}
                        className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label 
                        htmlFor="number-of-people"
                        className="form-label"
                        >Numero di persone</label>
                        <input 
                        type="number"
                        id="number-of-people" 
                        name="number_of_people" 
                        value={state.number_of_people}
                        onChange={handleFields}
                        className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label 
                        htmlFor="date"
                        className="form-label"
                        >Data</label>
                        <input 
                        type="date"
                        id="date" 
                        name="date" 
                        value={state.date}
                        onChange={handleFields}
                        className="form-control"/>
                    </div>
                    <Button
                    children= "Prenota"
                    className= "btn btn-primary d-block mx-auto"
                    type= "submit"
                    />
                </form>          
                )}
        </section>
    )
}