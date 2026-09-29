export default function Button({ children, onClick, className }) {
    return (
        <button type="submit" onClick={onClick} className={className}>{children}</button>
    )
}    