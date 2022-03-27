export const Question = (props)=>(
    <div>
        <div>{props.data.title}</div>
        <div>
            {
                `Asked by ${props.data.userName} on
                ${props.data.created.toLocaleDateString()} 
                ${props.data.created.toLocaleTimeString()}` 
            }
        </div>
    </div>
)