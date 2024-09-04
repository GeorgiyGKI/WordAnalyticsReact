
import Stats from "./Stats";
import Textarea from "./TextArea";
import Footer from "./Footer";
import Container from "./Container";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [stats, setStats] = useState({
    numberOfWords: 0,
    numberOfCharacters: 0,
    instagramCharactersLeft: 280,
    facebookCharactersLeft: 2200,
  });

  return (
    <>
      <Header />

      <Container>
        <Textarea setStats={setStats} />
        <Stats stats={stats} />
      </Container>

      <Footer />
    </>
  );
}

export default App;