export default function PersonalProjects() {
    return (
      <section className="dark:bg-gray-900">
        <div className="container mx-auto px-32 py-14">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20 dark:text-white">
            Personal Projects
          </h1>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
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
                  Collision Avoidance System
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Calculates real-time braking distance of a vehicle based on speed and ambient conditions like fog. 
                  Technologies used: Arduino, Ultrasound Sensor, Light Detecting Diode, LEDs, Photo Sensor.
                </p>
              </div>
            </li>
  
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
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
                  Online Shopping System
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  E-commerce shopping cart and signup facility to learn PHP/MySQL app development. 
                  Technologies used: PHP, HTML, CSS, SQL, phpMyAdmin, LAMP.
                </p>
              </div>
            </li>
  
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
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
                  Super Mario Clone
                </h3>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Implemented a proof of concept to learn the Unity game engine. 
                  Technologies used: Unity Game Engine, C#.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    );
  }
  