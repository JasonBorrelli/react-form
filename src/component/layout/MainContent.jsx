import NewsLetter from "../section/NewsLetter.jsx"
import Feedback from "../section/Feedback.jsx"
import CodicePromo from "../section/CodicePromo.jsx"

export default function MainContent() {
    return (
        <main>
            <section>
                <NewsLetter />
            </section>
            <section>
                <CodicePromo />
            </section>
            <section>
                <Feedback />
            </section>
        </main>
    )
}
    