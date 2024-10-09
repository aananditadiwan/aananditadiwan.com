import { Hero, Feature, Education, Skills, Experience, Testimonial } from "./components";

export default function App() {
  let designation = "Full Stack Software Engineer"
  let summary= "I am passionate about writing clean code with focus on scalability."
  return (
    <>
      <Hero title={designation} summary={summary}/>
      <Feature />
      <Education />
      <Skills />
      <Experience />
      <Testimonial />
    </>
  );
}
