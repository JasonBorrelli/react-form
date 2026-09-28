export default function Alert({ classes, type = 'primary', children}) {
    
    return (
        <div className={`alert alert-${type} ${classes}`}>{children}</div>
    )
} 