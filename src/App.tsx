import { gql ,useQuery} from "@apollo/client"
import { useEffect } from "react"
import {client} from "./lib/apollo"
const GET_LESSONS_QUERY = gql`

query{
  lessons{
    id
    title
  }
}
`
interface ILesson{
  id: string;
  title: string;
}
function App() {
  const {data}=useQuery(GET_LESSONS_QUERY)
  return (
    <ul>
      {data?.lessons.map((Lesson:ILesson) => {
        return <li key={Lesson.id}> {Lesson.title}</li>
      })}
    </ul>
  )
}

export default App
