export default function Hero({ title, summary }) {
  return (
    <section className="text-gray-600 body-font dark:text-gray-400 dark:bg-gray-900">
      <div className="container mx-auto flex px-5 lg:px-40 lg:py-14 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">{title}
            {/* <br className="hidden lg:inline-block" />readymade gluten */}
          </h1>
          <p className="mb-8 leading-relaxed">{summary}</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <a href="\AananditaDiwanResume.pdf" download >Resume</a>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg">
          {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
          <img className="object-cover object-center rounded" alt="hero" src="/annie.png" />
        </div>
      </div>
    </section>
  )
}
