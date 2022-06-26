import { CaretRight, DiscordLogo, FileArrowDown, FileImage, Lightning ,Question} from "phosphor-react";
import ButtonSuccess from "./ButtonSuccess";
import ButtonSecondary from "./ButtonSecondary";
import { Player, Youtube } from "@vime/react";
import { useGetLessonBySlugQuery } from "../graphql/generated";
interface IVideoProps {
  lessonSlug: string;
}
export function Video(props: IVideoProps) {
  const { data } = useGetLessonBySlugQuery({
    fetchPolicy: 'network-only',
    variables: { slug: props.lessonSlug },
  });
  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p> Aqui virá o componente de loading</p>
      </div>
    )
  }
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-[90%] w-[90%] aspect-video max-w[1180px] max-h-[60vh]">
          <Player controls={true}>
            <Youtube videoId={data.lesson.videoId} />
          </Player></div>
      </div>
      <div className="p-8 mx-auto max-w-[1180px]">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">{data.lesson.description}</p>
          </div>
          <div className="flex flex-col gap-4">
            <ButtonSuccess
              textButton="Comunidade do Discord"
              href="https://discord.gg/yWKJfrnK"
              icon={
                <DiscordLogo size={24}></DiscordLogo>}
            ></ButtonSuccess>
            <ButtonSecondary
              textButton=" Seguir para desafios"
              href="#"
              icon={<Lightning size={24}></Lightning>}
            ></ButtonSecondary>
          </div>
        </div>
        {data.lesson.teacher && (
          <div className="flex flex-1 mt-6 gap-4">
            <img
              src={data?.lesson.teacher.avatarURL}
              alt="Teacher Profile Icon"
              className="rounded-full border-2 border-blue-500 max-h-[8vh] max-w-[8vh]"
            />
            <div className="leading-relaxed">
              <strong className="text-bold text-2xl block">{data?.lesson.teacher?.name}</strong>
              <span className="text-sm text-gray-200 block">{data?.lesson.teacher?.bio}</span>
            </div>
          </div>)
        }
        <div className="mt-20 grid gap-8 items-stretch grid-cols-2">


          <a href="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5" className="bg-gray-700 flex justify-start rounded overflow-hidden gap-6 hover:bg-gray-600">
            <div className="bg-green-700 flex items-center p-6 h-full"><FileArrowDown size={40} /></div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl"> Material Complementar</strong>
              <p className="text-sm text-gray-200 mt-2 ">Acesse o material complementar para acelerar o seu desenvolvimento</p>
            </div>
            <div className="h-full flex items-center p-6">
              <CaretRight className="text-blue-300" size={24} />
            </div>
          </a>


          <a href="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR?usp=sharing" className="bg-gray-700 flex  justify-start rounded overflow-hidden gap-6 hover:bg-gray-600">
            <div className="bg-green-700 flex items-center p-6 h-full"><FileImage size={40} /></div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers</strong>
              <p className="text-sm text-gray-200 mt-2">Baixe wallpapers exclusivos da Maratona Explorer e personalize a sua máquina</p>
            </div>
            <div className="h-full flex items-center p-6">
              <CaretRight className="text-blue-300" size={24} />
            </div>
          </a>
          <a href="https://discord-service.rocketseat.dev/signin/ignite-lab" className="bg-gray-700 flex  justify-start rounded overflow-hidden gap-6 hover:bg-gray-600">
            <div className="bg-green-700 flex items-center p-6 h-full"><Question size={40} /></div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Dúvidas?</strong>
              <p className="text-sm text-gray-200 mt-2">Acesse a comunidade da Rocketseat no discord e evolua com os outros devs!</p>
            </div>
            <div className="h-full flex items-center p-6">
              <CaretRight className="text-blue-300" size={24} />
            </div>
          </a>

        </div>
      </div>
    </div>
  )
}