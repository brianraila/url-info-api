import { useRef } from "react";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import TestAPI from "./components/TestAPI";
import TestPreview from "./components/TestPreview";

function App() {
  const landingRef = useRef(null);
  const testRef = useRef(null);
  const apiRef = useRef(null);

  const scrollToLanding = () =>
    landingRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToTest = () =>
    testRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToApi = () =>
    apiRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="App">
      <Landing
        landingRef={landingRef}
        scrollToTest={scrollToTest}
        scrollToApi={scrollToApi}
      />
      <TestPreview testRef={testRef} />
      <TestAPI apiRef={apiRef}></TestAPI>
      <Footer
        scrollToTest={scrollToTest}
        scrollToLanding={scrollToLanding}
        scrollToApi={scrollToApi}
      />
    </div>
  );
}

export default App;
