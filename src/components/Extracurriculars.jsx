import React from "react";

export default function Extracurriculars() {
  const activities = [
    {
      title: "Diversity, Equality & Inclusion Initiatives",
      details: "Led initiatives focused on social issues like mental health and well-being.",
      icon: "🌍",
    },
    {
      title: "Founder & President, Indian Dance Society KMV",
      details: "Led society from 2017 to 2019, organizing cultural events and training students in classical and fusion dance styles.",
      year: "2017 - 2019",
      icon: "🎭",
    },
    {
      title: "Event Anchor & Coordinator, RaasRang International World Flute Festival",
      details: "Coordinated and anchored the prestigious international festival in 2012, showcasing global flute maestros.",
      year: "2012",
      icon: "🎤",
    },
    {
      title: "Diploma (Hons), National Institute of Kathak Dance",
      details: "Received honors diploma in classical Kathak dance.",
      icon: "💃",
    },
    {
      title: "Learning Japanese",
      details: "Pursuing the study of Japanese language and culture.",
      icon: "🇯🇵",
    },
  ];

  return (
    <section className="dark:bg-gray-900 bg-white py-14">
      <div className="container mx-auto px-8">
        <h2 className="text-2xl sm:text-3xl font-medium title-font text-center text-gray-900 dark:text-white mb-10">
          Extracurriculars
        </h2>
        <div className="flex flex-col gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start">
              <div className="text-3xl mr-4">{activity.icon}</div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {activity.title}
                </h3>
                {activity.year && (
                  <time className="block mb-2 text-sm text-gray-500 dark:text-gray-400">
                    {activity.year}
                  </time>
                )}
                <p className="text-base text-gray-600 dark:text-gray-300">
                  {activity.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
