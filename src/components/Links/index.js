
import './Links.css'

export function Links(Props, Url) {
    return (
        <div>
            <a href={Url}>
                <p>{Props.canal}</p>
            </a>

        </div>

    )
}