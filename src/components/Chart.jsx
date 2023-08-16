import { Sparklines, SparklinesLine } from "react-sparklines";
export function Chart({ title, data, description, color }) {

    return (
        <article>
            <h2>{title}</h2>
            <Sparklines data={data} limit={100} width={150} height={40} margin={5}>
                <SparklinesLine color={color} />
            </Sparklines>
        </article>
    )
}