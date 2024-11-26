export default function Experience() {
  return (
    <section className="dark:bg-gray-900 dark:pb-3">
      <div className="container mx-auto px-10 lg:px-32 lg:py-14">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20 dark:text-white">
          Experience
          {/* <br className="hidden sm:block" />Selfies Wayfarers */}
        </h1>
        <ol className="relative lg:mx-52 border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <div className="mb-6">
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                BitsFlow Technologies
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mx-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Latest
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Software Development Engineer, Jan 2023
              </time>

              <div className="mb-4">
                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Loan Management System</h4>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  End-to-end loan processing, including customer and loan booking, loan drafting, initialization, and disbursement with an author-maker system for secure handling.
                </p>
                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                  <li>Reduced mandate approval time by 50% by automating backend file validation for bulk authoring.</li>
                  <li>Minimized manual entry errors by 25% through the development of user-friendly frontend interfaces for receipt capture and backend batch creation.</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Finfinity</h4>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Customer Acquisition System: A business-generating product that connects high-probability loan leads from various sources to banks, driving revenue growth.
                </p>
                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                  <li>Reduced interaction delays by 30% by refactoring frontend components and enhancing backend lead management.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">ColApp</h4>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Loan collection app: App for bank collectors, available in web and mobile versions, with offline support via VueX and SQLite for efficient recovery of defaulted loans.
                </p>
                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                  <li>Increased payment processing speed by 20% by integrating Razorpay for sending payment links via email and generating QR codes.</li>
                </ul>
              </div>
            </div>
          </li>


          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <div className="mb-6">
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Thoughtworks
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Software Development Engineer Intern, May 2022 - Dec 2022
              </time>

              <div className="mb-4">
                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">ThoughtVerse:</h4>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  PoC of Metaverse for new Thoughtworks office, in a team of 4, with decentralized authentication, deep linking, voice, and screen sharing using Mirror and Agora, deployed on GCP. Using Unity Game Engine and C#. </p>
              </div>

              <div className="mb-4">
                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">SecretSanta Script</h4>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Single-handedly created from scratch a script that anonymously pairs users and shares Secret Santa wish lists, adhering to company security guidelines. Implemented in Google Apps Script using JavaScript, HTML, CSS.</p>
              </div>

              <div>
                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">ArtGallery</h4>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Created an internal portal in a team of 7 for colleagues to socialize. Features include: liking photographs uploaded by other team members, signup, and login, following Test-Driven Development. Using Java, Spring Boot, JPA, React, HTML, CSS, Postman API, PostgreSQL, Heroku, and Netlify.</p>
              </div>

              <div>
                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">ARK Wiki</h4>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Collaborated with stakeholders from China to proofread build guides for teams developing iOS and Android apps.</p>
              </div>
            </div>
          </li>

          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <div className="mb-6">
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                StepUp Era
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Software Development Engineer Intern, 2021
              </time>

              <div className="mb-4">
                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                  <li>Developed scripts to assist Human Resources supervisor to automate onboarding of new members.</li>
                  <li>Saved 250 hrs/yr for organization by developing an efficient record keeping & maintenance format, which saved 2hr/manager/week for a team of 5 managers.</li>
                  <li>Communicated with potential clients to realize successful conversion by recommending right StepUp Era programs suitable to client needs.</li>
                  <li>Awarded Star Performer for exceptional contribution.</li>
                </ul>
              </div>

            </div>
          </li>






        </ol>
      </div>
    </section>
  );
}
