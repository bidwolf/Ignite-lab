import { useState } from "react";
import ButtonSubmit from "./ButtonSubmit";
interface IFormsProperties{
  title: string;

}
function Forms({title}:IFormsProperties) {
  const [name, setName] = useState(""); //Usa as variáveis de estado para atualizar a variável name ao ser alterada no input
  const [email, setEmail] = useState(""); //Usa as variáveis de estado para atualizar a variável email ao ser alterada no input
  return (
    <div id="formulario" className="">
      <form
        onSubmit={() => window.alert("sexo")}
        className="bg-gray-700 p-8 max-w-[27vw] border border-gray-600"
        id="subscribe"
      >
        <div className="mb-6 flex">
          <label htmlFor="subscribe" className="text-2xl font-bold ">
            {title??title}
          </label>
        </div>
        <input
          type={"text"}
          id="userName"
          name="username"
          placeholder="Seu nome completo"
          onChange={(event) => setName(event.target.value)}
          className="input"
        />
        <input
          type={"email"}
          id="email"
          name="email"
          placeholder="Digite seu email"
          onChange={(event) => setEmail(event.target.value)}
          className="input"
        />
        <div className="mt-4">
          <ButtonSubmit textButton="Garantir minha vaga" disabled={false} />
        </div>
      </form>
    </div>
  );
}

export default Forms;
