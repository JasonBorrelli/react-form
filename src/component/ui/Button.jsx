export default function Button({ children, onClick, className }) {
    return (
        <button type="submit" onClick={onClick} className={"btn btn-primary mt-2 " + className}>{children}</button>
    )
}   