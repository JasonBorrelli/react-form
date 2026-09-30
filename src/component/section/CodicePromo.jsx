import { useState } from "react"
import Alert from "../ui/Alert.jsx"
import Button from "../ui/Button.jsx";
import { Smile } from "lucide-react";



const codiciSconto = [{
    codice: "SCONTO10",
    valore: "10%"
},
{
    codice: "SCONTO20",
    valore: "20%"
},
{
    codice: "SCONTO30",
    valore: "30%"
}]





export default function CodicePromo() {
    const [scontoApplicato, setScontoApplicato] = useState(null)
    const [codePromo, setCodePromo] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        setCodePromo(e.target.value)
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        const foundSconto = codiciSconto.find((sconto) => sconto.codice === codePromo.trim().toUpperCase())
        if(foundSconto) {
            setScontoApplicato(foundSconto)
            setIsSubmit(true)
        }
        else if(codePromo.trim() === "") {
            alert("Per favore, inserisci un codice sconto")
        }
        else {
            alert("Codice sconto non valido")
        }
    }


    const handleReset = () => {
        setIsSubmit(false)
        setCodePromo('')
        setScontoApplicato(null)
    }    
    
  


   return isSubmit ? (
    <Alert
      type="success"
      classes="d-flex align-items-center justify-content-center mt-2"
    >
      <Smile size={40} className="me-2 " />
      <h3>Sconto del {scontoApplicato.valore} applicato con successo</h3>
  
      <Button onClick={handleReset} className="btn btn-primary m-2 bor ">
        Applicca un altro codice sconto
      </Button>
    </Alert>
  ) : (
    <section className="m-4  p-2 m-4 bg-light p-2 border rounded-3 border-light shadow-sm border-2 rounded-3">
      <h2 className="text-center mb-3 text-info fw-bold">Riscatta il tuo codice sconto</h2>
      <p className="text-center mb-3 ">
        Inserisci il codice sconto per ottenere uno sconto sul tuo acquisto
      </p>
      <form onSubmit={handleSumbit} className="container w-50 mx-auto mt-4">
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <label htmlFor="codice" className="form-label d-block text-center">
            Codice Sconto
          </label>
          <input 
            type="text"
            id="codice"
            className="form-control"
            value={codePromo}
            onChange={handleChange}
            placeholder=" es.SCONTO10, SCONTO20, SCONTO30"
          />
        </div>
        <Button type="submit" className="btn btn-primary d-block mx-auto">
          Invia
        </Button>
      </form>
    </section>
  );
} 