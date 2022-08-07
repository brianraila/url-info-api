import { useRef } from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import NpmPackage from "./components/NpmPackage";
import TestAPI from "./components/TestAPI";
import TestPreview from "./components/TestPreview";

function App() {
  const landingRef = useRef(null);
  const testRef = useRef(null);
  const apiRef = useRef(null);
  const featuresRef = useRef(null);
  const npmRef = useRef(null);

  const scrollToLanding = () =>
    landingRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToTest = () =>
    testRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToApi = () =>
    apiRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToFeatures = () =>
    featuresRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToNpm = () =>
    npmRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="App">
      <Landing
        landingRef={landingRef}
        scrollToFeatures={scrollToFeatures}
      />
      <Features
        featuresRef={featuresRef}
        scrollToTest={scrollToTest}
        scrollToApi={scrollToApi}
        scrollToNpm={scrollToNpm}
      />
      <TestPreview testRef={testRef} />
      <TestAPI apiRef={apiRef}></TestAPI>
      <NpmPackage npmRef={npmRef}></NpmPackage>
      <Footer
        scrollToTest={scrollToTest}
        scrollToLanding={scrollToLanding}
        scrollToApi={scrollToApi}
        scrollToNpm={scrollToNpm}
      />
    </div>
  );
}

export default App;
