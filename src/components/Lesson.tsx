import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
interface ILessonProps{
    title: string;
    slug: string;
    availableAt: Date;
    type:'live'|'class'
}
function Lesson(props: ILessonProps) {
    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormat = format(props.availableAt,"EEEE' • 'd' de 'MMMM' • 'k'h'mm",{locale:ptBR})
    return (
        <a href="#">
            <span className="text-gray-300 ">{availableDateFormat}</span>
            <div className="rounded p-4 border border-gray-500 mt-2 ">
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        
                    <span className="text-blue-500 text-sm font-medium flex items-center gap-2 ">
                        <CheckCircle size={20}/>
                        Conteúdo Liberado
                    </span>
                    ):(
                    <span className="text-orange-500 text-sm font-medium flex items-center gap-2 ">
                        <Lock size={20}/>
                        Em breve
                    </span>)
                    
                }
                    <span className="font-xs font-bold rounded text-green-300 border border-green-300 text-center py-[0.125rem] px-1 ">
                        {props.type=='live'?'AO VIVO':'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className="block mt-5  text-gray-3">{props.title}</strong>
            </div>
        </a>
    );
}

export default Lesson;