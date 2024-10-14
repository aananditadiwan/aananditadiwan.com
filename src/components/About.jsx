import React from 'react';

export default function Feature({ languages, frameworks, tools, dataStore, platforms, webDev }) {
  const categories = [
    { title: "Languages", skills: languages },
    { title: "Frameworks", skills: frameworks },
    { title: "Tools", skills: tools },
    { title: "Data Store", skills: dataStore },
    { title: "Platforms", skills: platforms },
    { title: "Web Development", skills: webDev },
  ];

  // Function to return SVG based on title
  const getSVG = (title) => {
    switch (title) {
      case "Languages":
        return (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M3 3h18v18H3z"></path>
            <path d="M6 9h12M6 15h12M6 12h12"></path>
          </svg>
        );
      case "Frameworks":
        return (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M3 3h18v18H3z"></path>
            <path d="M3 9h18M3 15h18"></path>
          </svg>
        );
      case "Tools":
        return (
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M9 5l-4 4 4 4M5 9l4-4M19 19l-4-4 4-4M15 15l4 4"></path>
          </svg>
        );
      case "Data Store":
        return (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M3 3h18v18H3z"></path>
            <path d="M12 12h8M4 12h8M12 6h8M12 18h8"></path>
          </svg>
        );
      case "Platforms":
        return (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M2 2h20v20H2z"></path>
            <path d="M6 12h12M6 8h12M6 16h12"></path>
          </svg>
        );
      case "Web Development":
        return (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 22h20L12 2z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="text-gray-600 body-font dark:text-gray-400 dark:bg-gray-900">
      <div className="container px-5 pt-10 pb-14 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20 dark:text-white">
          Skills
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {categories.map(({ title, skills }) => (
            <div key={title} className="p-4 md:w-1/6 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0 dark:bg-gray-800 dark:text-indigo-400">
                {getSVG(title)} {/* Render SVG based on title */}
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2 dark:text-white">
                  {title}
                </h2>
                <ul className="list-disc list-inside leading-relaxed text-base">
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
