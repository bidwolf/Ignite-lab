import { gql, useMutation } from "@apollo/client";
import { Fragment, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import ButtonSubmit from "../components/ButtonSubmit";
import Logo from "../components/Logo";
const CREATE_SUBSCRIBER_MUTATION = gql`
mutation CreateSubscriber ($name:String!, $email:String!){
  createSubscriber(data: {name: $name, email: $email}) {
    id
  }
  
}
`
// Faz uma mutation no graphCMS que cadastra uma pessoa no evento e retorna o id da pessoa cadastrada
function Subscribe() {
    const navigate = useNavigate();
    const [name, setName] = useState(''); //Usa as variáveis de estado para atualizar a variável name ao ser alterada no input
    const [email, setEmail] = useState('');//Usa as variáveis de estado para atualizar a variável email ao ser alterada no input
    // gera uma função chamada createSubscriberMutation que possui os mesmos parâmetros da mutation cadastrada
    const [createSubscriberMutation, { data, error ,loading}] = useMutation(CREATE_SUBSCRIBER_MUTATION, {
        variables: {
            name: name,
            email: email
        }
    })
    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();
        await createSubscriberMutation({
            variables: {
                name,
                email
            }
        })
        navigate('/event');
    }
    return (

        <Fragment>
            <div className="flex flex-col items-center min-w-screen bg-blur bg-cover bg-no-repeat">
                <main className="flex w-full max-w-[1180px] mt-20 mx-28 gap-20 justify-between">
                    <header className="mt-10">
                        <Logo height="30px" width="300px" />
                        <h1 className="mt-8 text-3xl">
                            Construa uma <strong className="text-blue-500">aplicação completa</strong>,<br /> do zero, com <strong className="text-blue-500">ReactJS</strong>
                        </h1>
                    </header>
                    <div id="formulario" className="">
                        <form onSubmit={handleSubscribe} className="bg-gray-700 p-8 max-w-[27vw] border border-gray-600" id="subscribe">
                            <div className="mb-6 flex">
                                <label htmlFor="subscribe" className="text-2xl font-bold ">Inscreva-se Gratuitamente</label>
                            </div>
                            <input
                                type={"text"}
                                id="userName"
                                name="username"
                                placeholder="Seu nome completo"
                                onChange={event => setName(event.target.value)}
                                className="input"
                            />
                            <input
                                type={"email"}
                                id="email"
                                name="email"
                                placeholder="Digite seu email"
                                onChange={event => setEmail(event.target.value)}
                                className="input"
                            />
                            <div className="mt-4">
                                <ButtonSubmit textButton="Garantir minha vaga" disabled={loading} />
                            </div>
                        </form>
                    </div>
                </main>
                <div>
                    <img src="/src/assets/react-bg.png" alt="react" />
                </div>
            </div>
        </Fragment>
    );
}

export default Subscribe;