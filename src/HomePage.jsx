import { React} from "react";
import { QuestionList } from "./QuestionList";
import {getUnansweredQuestions} from './QuestionsData'
export const HomePage = ()=>(
    <div>
        <h2>Unanswered Questions</h2>
        <button>Ask a Question</button>
        <QuestionList data={getUnansweredQuestions()}/>
    </div>
)