import ButtonSuccess from "../components/ButtonSuccess";
function Subscribe() {
    return (
        <main className="flex flex-1 min-w-screen">
            
            <form action="/sub" method="POST" className="bg-gray-700 p-8 max-w-[27vw] border border-gray-600" id="subscribe">
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
        </main>
    );
}

export default Subscribe;