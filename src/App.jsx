import { Hero, Feature, Education, Skills, Experience, Testimonial, Certificates, Projects, Extracurriculars} from "./components";
import * as data from "./components/TextData"

export default function App() {
  
  return (
    <>
      <Hero title={data.designation} summary={data.summary}/>
      <Feature languages={data.languages} frameworks={data.frameworks} tools={data.tools} dataStore={data.dataStore} platforms={data.platforms} webDev={data.webDev}/>
      <Experience />
      <Education />
      <Certificates/>
      <Projects/>
      <Extracurriculars/>
      {/* <Skills /> */}
      {/* <Testimonial /> */}
    </>
  );
}
