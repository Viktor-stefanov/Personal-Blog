import PostCard from "./PostCard";

const RecentPosts = () => {
  const blogPosts = [
    {
      title: "Building a Single Page Application with React",
      description:
        "Learn how to build a single page application with React and React Router.",
      date: "2021-09-01",
      slug: "building-a-single-page-application-with-react",
      image: "/react.jpg",
      tags: ["React", "Web Development"],
      link: "/posts/building-a-single-page-application-with-react",
    },
    {
      title: "How to contribute to open source projects?",
      description: "Learn how to contribute to open source projects on GitHub.",
      date: "2021-09-15",
      slug: "how-to-contribute-to-open-source-projects",
      image: "/react.jpg",
      tags: ["React", "Web Development"],
      link: "/posts/how-to-contribute-to-open-source-projects",
    },
    {
      title: "How to build a RESTful API with Node.js and Express?",
      description: "Learn how to build a RESTful API with Node.js and Express.",
      date: "2021-10-01",
      slug: "how-to-build-a-restful-api-with-nodejs-and-express",
      image: "/react.jpg",
      tags: ["React", "Web Development"],
      link: "/posts/how-to-build-a-restful-api-with-nodejs-and-express",
    },
    {
      title: "How to build a full-stack application with React and Node.js?",
      description:
        "Learn how to build a full-stack application with React and Node.js.",
      date: "2021-10-15",
      slug: "how-to-build-a-full-stack-application-with-react-and-nodejs",
      image: "/react.jpg",
      tags: ["React", "Web Development"],
      link: "/posts/how-to-build-a-full-stack-application-with-react-and-nodejs",
    },
    {
      title: "Understanding the basics of TypeScript",
      description:
        "Learn the basics of TypeScript and how to use it in your projects.",
      date: "2021-11-01",
      slug: "understanding-the-basics-of-typescript",
      image: "/react.jpg",
      tags: ["React", "Web Development"],
      link: "/posts/understanding-the-basics-of-typescript",
    },
    {
      title: "How to build a responsive website with Tailwind CSS?",
      description: "Learn how to build a responsive website with Tailwind CSS.",
      date: "2021-11-15",
      slug: "how-to-build-a-responsive-website-with-tailwind-css",
      image: "/react.jpg",
      tags: ["React", "Web Development"],
      link: "/posts/how-to-build-a-responsive-website-with-tailwind-css",
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl text-center mb-8">Recent Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.slice(0, 12).map((post, idx) => (
          <PostCard post={post} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
