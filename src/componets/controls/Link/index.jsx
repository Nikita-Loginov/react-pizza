import './index.scss'

export default function Link({text, backgroundColor, href}) {
    return (
        <a href={href} className="link" style={{backgroundColor: backgroundColor}}>
            {text}
        </a>
    )
}