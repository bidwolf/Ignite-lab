import { useParams } from "react-router-dom";
import Forms from "../components/Forms";
import { Header } from "../components/Header";

function Cadastro() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div>
      <Header/>
      <hr />
      <Forms title={`Faça sua inscrição para o ${slug??slug}`}/>
    </div>
  );
}

export default Cadastro;
