import Lesson from "./Lesson"
import {gql,useQuery} from "@apollo/client"
const GET_LESSONS_QUERY = gql`
query getLessons{
  lessons(orderBy: availableAt_DESC, stage: PUBLISHED) {
    id
    slug
    title
    availableAt
    lessonType
  }
}
`
interface IGetLessonsQueryResponse{
    lessons: {
        id: string;
        slug: string;
        title: string;
        availableAt: string;
        lessonType: 'live'|'class';
    }[]
}
export function Sidebar() {
    const { data } = useQuery<IGetLessonsQueryResponse>(GET_LESSONS_QUERY);
    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            availableAt={new Date(lesson.availableAt)}
                            slug={lesson.slug}
                            title={lesson.title}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </aside>
    )
}