import TimeLine from "@/components/TimeLine";

const About = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col text-center">
        <h1 className="text-4xl my-8">About Me</h1>
        <p className="text-lg">
          I am currently a fullstack web developer, software engineering teacher
          and a Computer Science student in the Technical University of Varna 👨‍💻
          based in the seaside city Varna, Bulgaria 🌊. My professional
          interests are in creating beautiful and stylish UIs 😎 ,
          straightforward UX 💡 and elegant yet <i>blazingly</i> fast backends
          🚀. I am very open to new technologies, tools and frameworks so my
          toolset is ever-changing but as of now my frontend technology of
          choice is the react ecosystem including, but not limited to
          react-hook-form, tanstack-query, react-router, zod and typescript.
          When creating fullstack applications on my own I opt for Next.js for
          the fast and enjoyable DX. My backend toolset consists of Node &
          Express and Java & Spring Boot. I am a big crypto enthusiast 💎 and
          have experience writing smart contracts for EVM compatible networks in
          the Solidity language.
        </p>
      </div>
      <TimeLine />
    </div>
  );
};

export default About;
