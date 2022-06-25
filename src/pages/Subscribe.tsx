import { Fragment } from "react";
import ButtonSuccess from "../components/ButtonSuccess";
import Logo from "../components/Logo";
function Subscribe() {
    return (
        <Fragment>
            <div className="flex flex-col items-center min-w-screen bg-blur bg-cover bg-no-repeat">
            <main className="flex w-full max-w-[1180px] mt-20 mx-28 gap-20 justify-between">
            <header className="mt-10">
                <Logo height="30px"width="300px" />
                <h1 className="mt-8 text-3xl">
                    Construa uma <strong className="text-blue-500">aplicação completa</strong>,<br /> do zero, com <strong className="text-blue-500">ReactJS</strong>
                </h1>  
            </header>   
            <div id="formulario" className=""><form action="/sub" method="POST" className="bg-gray-700 p-8 max-w-[27vw] border border-gray-600" id="subscribe">
                <div className="mb-6 flex">
                    <label htmlFor="subscribe" className="text-2xl font-bold ">Inscreva-se Gratuitamente</label>
                </div>
                <input
                    type={"text"}
                id="userName"
                name="username"
                placeholder="Seu nome completo"
                className="input"
                />
                   <input
                type={"email"}
                id="email"
                name="email"
                placeholder="Digite seu email"
                className="input"
            />
                    <div className="mt-4">
                        <ButtonSuccess type="submit" textButton="Garantir minha vaga" />
                    </div>
            </form>
                </div>
            </main>
                <div>
                    <img src="/src/assets/react-bg.png" alt="react"/>
                </div>
            </div>
        </Fragment>
    );
}

export default Subscribe;