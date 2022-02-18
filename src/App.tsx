
import RTL from "./components/RTL";
import Header from "./components/Header";
import GlobalStyles from "./styles/Global";
import { Container } from "./styles/Container.styled";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <RTL>
      <GlobalStyles />
      <Header />
      <Container width="90%">
        <Auth />
      </Container>
    </RTL>
  );
};

export default App;
