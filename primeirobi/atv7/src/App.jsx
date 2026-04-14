import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import Article from './components/Article.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  const postData = {
    titulo: "O Futuro do Desenvolvimento Web com React e Vite",
    autor: "Redação Tech",
    data: "14 de Abril de 2026",
    conteudo: "A evolução das ferramentas de construção transformou-se na maneira como construímos interfaces modernas. O Vite, por exemplo, trouxe uma velocidade sem precedentes para o ambiente de desenvolvimento, permitindo que os engenheiros foquem no que realmente importa: a lógica de componentes e a experiência do usuário. Componentizar não é apenas organizar código, é criar sistemas escaláveis e sustentáveis."
  };

  const postsRelacionados = [
    "Arquitetura de Micro-Frontends",
    "Otimização de Desempenho no V8",
    "Código Limpo em Aplicações Reais",
    "Tendências de UI/UX para 2027"
  ];

  return (
    <div className="container">
      <Header title="Insights para desenvolvedores e arquitetura principal" />
      <Navigation />
      <main style={{ display: 'flex', gap: '20px' }}>
        <Article post={postData} />
        <Sidebar links={postsRelacionados} />
      </main>
      <Footer copyright="© 2026 Lab de Engenharia - Todos os direitos reservados" />
    </div>
  );
}

export default App;