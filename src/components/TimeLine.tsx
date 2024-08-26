const TimeLine = () => {
  const timelineData = [
    {
      year: "2024",
      events: [
        "Launch this blog site with the idea to spread knowledge on software engineering 📝",
      ],
    },
    {
      year: "2023",
      events: [
        "Begin a new position as a mid level frontend developer at DXC Technology 🏆",
        "Be a part of layoffs (from 140 to ~20 headcount) in Quanterall 😟",
      ],
    },
    {
      year: "2022",
      events: [
        "Complete my blockchain training with over 3 protocols implemented in Solidity 👷",
        "Finished my internship and promoted to a junior developer at Quanterall 👏",
        "Begin a very thorough frontend and blockchain training which would span over the end of the year 🥷",
      ],
    },
    {
      year: "2021",
      events: [
        "Land my first internship role at Quanterall 🔑",
        "Begin my Computer Science bachelor's degree at the Technical University of Varna 🏫",
        "Register in multiple freelance platforms and offer web scraping, automation and web development opportunities ⚙️",
      ],
    },
    {
      year: "2020",
      events: [
        "Mark the start of my teaching begginings by sharing knowledge and experience to friends 🤝",
        "Create numerous 'dummy' projects and upload them on my github account to test my skills in practice ✍️",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="text-3xl mb-8">My timeline</h1>
      <div className="relative">
        {/* Vertical bar */}
        <div className="absolute left-1/2 w-1 h-full bg-white"></div>
        {/* Events on the timeline */}
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex justify-center items-center w-20 h-20 bg-white rounded-full text-xl font-bold text-black shadow-lg z-10">
                {item.year}
              </div>
              <div className="space-y-12">
                {item.events.map((event, idx) => (
                  <div
                    key={idx}
                    className={`${
                      index % 2 == 0 ? "ml-[50%]" : "mr-[50%]"
                    } flex items-center`}
                  >
                    {index % 2 == 0 ? (
                      <>
                        <div className="w-[24rem] h-1 bg-white"></div>
                        <div className="bg-black w-[26rem] p-4 rounded-lg shadow-md border border-white">
                          {event}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-black w-[26rem] p-4 rounded-lg shadow-md border border-white">
                          {event}
                        </div>
                        <div className="w-[24rem] h-1 bg-white"></div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
