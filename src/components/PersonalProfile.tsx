import Image from "next/image";

const PersonalProfile = () => {
  return (
    <div className="bg-background text-primary max-w-[70%] min-h-[70vh] m-auto border-l-2 border-r-2 border-dashed border-primary border-opacity-40 text-center flex flex-col justify-center">
      <h1 className="text-4xl">Viktor Stefanov</h1>
      <Image
        src="/profile.jpeg"
        alt="Profile Picture of Viktor Stefanov"
        width={400}
        height={400}
        className="rounded-[25%] m-auto my-8"
      />
      <p className="text-lg">
        “Our doubts are traitors, And make us lose the good we oft might win, By
        fearing to attempt.” – William Shakespeare
      </p>
    </div>
  );
};

export default PersonalProfile;
