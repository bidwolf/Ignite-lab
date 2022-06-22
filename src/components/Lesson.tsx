import {CheckCircle} from 'phosphor-react'
function Lesson() {
    return (
        <a href="#">
            <span className="text-gray-300">Domingo • 20 de junho • 19h00</span>
            <div className="rounded p-4 border border-gray-500 mt-2 ">
                <header className="flex items-center justify-between">
                    <span className="text-blue-500 text-sm font-medium flex items-center gap-2 ">
                        <CheckCircle size={20}/>
                        Conteúdo Liberado
                    </span>
                    <span className="font-xs font-bold rounded text-green-300 border border-green-300 text-center py-[0.125rem] px-1 ">
                        Ao vivo
                    </span>
                </header>
                <strong className="">Abertura do evento Ignite labs</strong>
            </div>
        </a>
    );
}

export default Lesson;