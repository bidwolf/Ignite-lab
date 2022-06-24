import { DiscordLogo, Lightning } from "phosphor-react";
import ButtonSuccess from "./ButtonSuccess";
import ButtonSecondary from "./ButtonSecondary";
export function Video() {
    return (
      <div className="flex-1">
        <div className="bg-black flex justify-center">
          <div className="h-full w-full aspect-video max-w[1180px] max-h-[60vh]"> </div>
        </div>
        <div className="p-8 mx-auto max-w-[1180px]">
          <div className="flex items-start gap-16">
            <div className="flex-1">
              <h1 className="text-2xl font-bold">
                Aula 1
              </h1>
              <p className="mt-4 text-gray-200">
                Nessa aula vamos dar inicio ao projeto criando a estrutura base da aplicação
              </p>
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
        </div>
      </div>
    )
}