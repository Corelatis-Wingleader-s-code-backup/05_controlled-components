import { Question } from "./Question"
export const QuestionList =(props)=>(
    <ul>
        {props.data.map((question)=>(
            <li key={question.questionId}>
                <Question data={question}/>
            </li>
        ))}
    </ul>
)
/**
 * A props can be optional so that the comsumer doesn't necessarily have 
 * to pass it into a component. For example, we could have an optional prop
 * in the Question Component that allows a consumer to change whether the 
 * content of the question is rendered or not. 
 */