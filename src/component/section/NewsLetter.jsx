import { useState } from "react"
import Button from "../ui/Button.jsx"


const initialState = {
    name: '',
    surname: '',
    email: ''
}



export default function NewsLetter() {




    return (
        <section className="m-4">
            <h2 className="text-center">Iscriviti alla NewsLetter</h2>
            <form> 
                <div className="mb-3">
                    <label 
                    htmlFor="name"
                    className="form-label"
                    >Nome</label>
                    <input 
                    type="text"
                    id="name" 
                    name="name" 
                    value="" 
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
                    value="" 
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
                    value="" 
                    className="form-control"/>
                </div>



                
            </form>
        </section>
    )
}
  