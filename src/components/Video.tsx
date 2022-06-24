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
              <p className="mt-4 text-gray-200 leading-relaxed">
              Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.              </p>
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
            <div className="flex flex-1 mt-6 gap-4">
              <img
                src="https://github.com/bidwolf.png"
                alt="Teacher Profile Icon"
                className="rounded-full border-2 border-blue-500 max-h-[8vh] max-w-[8vh]"
              />
              <div className="leading-relaxed">
                <strong className="text-bold text-2xl block"> Henrique de Paula Rodrigues</strong>
                <span className="text-sm text-gray-200 block">Membro da equipe de Desenvolvimento na COMPET - CEFET-MG</span>
              </div>
            </div>
        </div>
      </div>
    )
}