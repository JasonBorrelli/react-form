import { useState } from "react"
import Button from "../ui/Button.jsx"
import Alert from "../ui/Alert.jsx"
import { FaceGrinning } from "lucide-react";


const initialState = {
    name: '',
    surname: '',
    email: ''
}



export default function NewsLetter() {

   

    const [state, setState] = useState(initialState);

    const handleSumbit = (e) => {
        e.preventDefault()
        setState(initialState)
        setIsSubmit(true)
    }

    const handleFields = (e) => {
        const { name, value } = e.target 
        setState(active => ({ ...active, [name]: value }))
    }
    
    const [isSubmit, setIsSubmit] = useState(false); 


 
    return (


        <section className="m-4 bg-success-subtle p-2 border rounded-3 border-secondary-subtle shadow-sm">
            <h2 className="text-center">Iscriviti alla NewsLetter</h2>

            { isSubmit ? (
                <Alert classes="d-flex justify-content-center align-items-center P" type="success">
                   <FaceGrinning size={40} className="me-2"/>                  
                   <h3 className="">Grazie per la tua iscrizione!</h3>
                  
                </Alert> 
            ) : (
           
                <form onSubmit={handleSumbit} className=" container w-25 mx-auto mt-4">
                    <div className="mb-3">
                        <label 
                        htmlFor="name"
                        className="form-label"
                        >Nome</label>
                        <input 
                        type="text"
                        id="name" 
                        name="name" 
                        value={state.name}
                        onChange={handleFields}
                        className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label 
                        htmlFor="surname"
                        className="form-label"
                        >Cognome</label>
                        <input 
                        type="text"
                        id="surname" 
                        name="surname" 
                        value={state.surname}
                        onChange={handleFields}
                        className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label 
                        htmlFor="email"
                        className="form-label"
                        >Email</label>
                        <input 
                        type="email"
                        id="email" 
                        name="email" 
                        value={state.email}
                        onChange={handleFields}
                        className="form-control"/>
                    </div>
                    <Button
                    children= "Iscriviti"
                    className= "btn btn-primary"
                    onClick= {handleSumbit}
                    />
                </form>
            )}  
        </section>
    )
}
  