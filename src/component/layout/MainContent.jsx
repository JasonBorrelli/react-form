import NewsLetter from "../section/NewsLetter.jsx"
import Feedback from "../section/Feedback.jsx"
import CodicePromo from "../section/CodicePromo.jsx"
import Booking from "../section/Booking.jsx"

export default function MainContent() {
    return (
        <main className="maincontent container bg-body-secondary p-2 my-5 shadow-lg rounded-4 border border-secondary-subtle">  
            <section>
                <NewsLetter />
            </section>
            <section>
                <CodicePromo />
            </section>
            <section>
                <Booking />
            </section>
            <section>
                <Feedback />
            </section>
        </main>
    )
}
    