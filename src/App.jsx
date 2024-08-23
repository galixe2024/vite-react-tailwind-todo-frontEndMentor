
import CrossIcon from "./components/CrossIcon";
import MoonIcon
 from "./components/icons/MoonIcon";
const App = () => {


  return (
    <>
      <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen">

        <header className="container mx-auto px-4 pt-8">
          <div className="flex justify-between">
            <h1 className="uppercase text-white text-3xl font-bold tracking-[0.5em]">Todo</h1>
            <button>
              <MoonIcon className="fill-white"/>
            </button>
          </div>

          <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8"  >
            <span className="rounded-full inline-block h-5 w-5 border-2"></span>
            <input type="text" className="w-full text-gray-400 outline-none" placeholder="Create a new todo..." />
          </form>
        </header>

        <main className="container mx-auto px-4 mt-8">
          <div className="bg-white rounded-md [&>article]:p-4">
            <article className="flex gap-4 border-b border-b-gray-400 ">
              <button className="inline-block h-5 w-5 rounded-full border-2"></button>
              <p className="text-gray-600 grow">Complete online Javascript course in Bluuweb</p>
              <button className="flex-none"><CrossIcon></CrossIcon></button>
            </article>

            <article className="flex gap-4 border-b border-b-gray-400 ">
              <button className="inline-block h-5 w-5 rounded-full border-2"></button>
              <p className="text-gray-600 grow">Complete online Javascript course in Bluuweb</p>
              <button className="flex-none"><CrossIcon></CrossIcon></button>
            </article>

            <article className="flex gap-4 border-b border-b-gray-400 ">
              <button className="inline-block h-5 w-5 rounded-full border-2"></button>
              <p className="text-gray-600 grow">Complete online Javascript course in Bluuweb</p>
              <button className="flex-none"><CrossIcon></CrossIcon></button>
            </article>


            <section className="flex justify-between py-4 px-4">
              <span className="text-gray-400">5 items left</span>
              <button className="text-gray-400">Clear completed</button>
            </section>

          </div>
        </main>

        <section className="container mx-auto px-4  mt-8">
          <div className="flex gap-4 justify-center bg-white rounded-md p-4">
            <button className="text-blue-600 font-bold">All</button>
            <button className="hover:text-blue-600 font-semibold text-gray-600">Active</button>
            <button className="hover:text-blue-600 font-semibold text-gray-600">Completed</button>
          </div>
        </section>

        <p className="text-center mt-8 text-gray-500 font-medium">Drag and Drop to reorder list</p>


      </div>
    </>
  )
}

export default App
