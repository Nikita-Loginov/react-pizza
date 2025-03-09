import './index.scss'

export default function Button({text, backgroundColor, type}) {
    return (
        <button className="button" style={{backgroundColor: backgroundColor}} type={type}>
            {text}
        </button>
    )
}