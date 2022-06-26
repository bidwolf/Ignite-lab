import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
interface ILessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class'
}

function Lesson(props: ILessonProps) {
    const { slug } = useParams<{ slug: string }>();
    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormat = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR })
    const isLessonActive = slug == props.slug;
    return (
        <Link to={`${isLessonAvailable?`/event/lesson/${props.slug}`:""}`} className={`${isLessonAvailable?"group":"disable-link"}`}>
            <span className="text-gray-300">{availableDateFormat}</span>
            <div className={`rounded p-4 border border-gray-500 mt-2 
            ${isLessonActive ? "bg-green-500 text-white group-hover:border-green-white" : "group-hover:border-green-700"}`}>
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (

                        <span className={`${!isLessonActive ? "text-blue-500" : "bg-green-500 text-white"} text-sm font-medium flex items-center gap-2 `}>
                            <CheckCircle size={20} />
                            Conteúdo Liberado
                        </span>
                    ) : (
                        <span className={`${!isLessonActive ? "text-orange-500" : "bg-green-500 text-white"} text-sm font-medium flex items-center gap-2 `}>
                            <Lock size={20} />
                            Em breve
                        </span>)

                    }
                    <span className={`text-sm font-bold rounded ${!isLessonActive ? "text-green-300 border-green-300" : "bg-green-500 text-white border-white"} border  text-center py-[0.125rem] px-1 `}>
                        {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className="block mt-5  text-gray-3">{props.title}</strong>
            </div>
        </Link>
    );
}

export default Lesson;