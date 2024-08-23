import Image from "next/image";

const PersonalProfile = () => {
  return (
    <div className="min-h-[85vh] text-center flex flex-col justify-center gap-12">
      <div>
        <h1 className="text-4xl mt-12">Viktor Stefanov</h1>
        <Image
          src="/profile.jpeg"
          alt="Profile Picture of Viktor Stefanov"
          width={400}
          height={400}
          className="rounded-[25%] m-auto my-12"
        />
        <p className="text-lg">
          “Our doubts are traitors, And make us lose the good we oft might win,
          By fearing to attempt.” – William Shakespeare
        </p>
      </div>
      <div>
        <p className="text-lg">
          I created this blog website with the idea to pass on the knowledge I
          have gained and am going to gain from my journey as a software
          developer. I am not going to &quot;box&quot; myself into a specific
          language, technology or framework, but rather share my experiences and
          eurika! moments in whatever it is that I currently find fascinating,
          be it frontend or backend, databases, cloud computing, machine
          learning, embedded systems or just some thoughts I have on the current
          state of the SE industry. I hope you find this content useful and
          inspiring. Enjoy!
        </p>
      </div>
    </div>
  );
};

export default PersonalProfile;
