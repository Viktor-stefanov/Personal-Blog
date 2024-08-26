import Image from "next/image";

const PersonalProfile = () => {
  return (
    <div className="text-center flex flex-col justify-center gap-8">
      <div>
        <h1 className="text-4xl my-8">Viktor Stefanov</h1>
        <p className="text-lg">
          “Our doubts are traitors, And make us lose the good we oft might win,
          By fearing to attempt.” – William Shakespeare
        </p>
        <Image
          src="/profile.jpeg"
          alt="Profile Picture of Viktor Stefanov"
          width={350}
          height={350}
          className="rounded-[25%] m-auto my-12"
        />
      </div>
      <div>
        <p className="text-lg">
          I created this blog website with the idea to pass on the knowledge I
          have gained and am going to gain from my journey as a software
          developer. I am not &quot;boxing&quot; myself into a specific
          language, technology or framework, but rather sharing my experience
          and eurika! moments in whatever it is that I currently find
          fascinating, be it frontend, backend, databases, cloud computing,
          machine learning, embedded systems or just some thoughts I have on the
          current state of the SE industry. I hope you find this content useful
          and inspiring. Enjoy!
        </p>
      </div>
    </div>
  );
};

export default PersonalProfile;
