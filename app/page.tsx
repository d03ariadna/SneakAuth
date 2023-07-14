import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";

export default function HomePage() {
  return (
    <div className="flex max-w-7xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 bg-black">
        
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Generating dream rooms{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative">using AI</span>
          </span>{" "}
          for everyone.
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          Take a picture of your room and see how your room looks in different
          themes. 100% free – remodel your room today.
        </h2>
        <Link
          className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
          href="/dream"
        >
          Generate your dream room
        </Link>
        <div className="flex justify-between w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col justify-between">
              <div>
                <h1 className="mb-1 font-bold text-5xl text-left">About Us</h1>
              </div>
              <div className="sm:mt-0 mt-8">
                <Image
                  alt="Generated photo of a room with roomGPT.io"
                  width={400}
                  height={400}
                  src="/generated-pic-2.jpg"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>

        <section id="project" className="mt-20 mb-24">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl mt-10">
          What are we doing at{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            
            <span className="relative gradientText">SneakAuth</span>
          </span>{" "}?
          </h1>
          <div className="flex justify-between w-full  flex-row sm:mt-10 pt-8">
            <div className="w-1/5 gradient shadow sm:p-1 md:p-1 mx-5 mb-24 rounded-3xl">
              <div className="w-full p-5 bg-black sm:p-6 md:p-8 rounded-3xl">
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, soluta. Corrupti, doloribus quis vel officia temporibus totam necessitatibus amet cumque expedita illo excepturi eum sit fugiat mollitia, hic quaerat quisquam?</p>
            </div>
            </div>
            <div className="w-1/5 gradient shadow sm:p-1 md:p-1 mx-5 mt-24 rounded-3xl">
              <div className="w-full p-5 bg-black sm:p-6 md:p-8 rounded-3xl">
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, soluta. Corrupti, doloribus quis vel officia temporibus totam necessitatibus amet cumque expedita illo excepturi eum sit fugiat mollitia, hic quaerat quisquam?</p>
            </div>
            </div>
            <div className="w-1/5 gradient shadow sm:p-1 md:p-1 mx-5 mb-24 rounded-3xl">
              <div className="w-full p-5 bg-black sm:p-6 md:p-8 rounded-3xl">
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, soluta. Corrupti, doloribus quis vel officia temporibus totam necessitatibus amet cumque expedita illo excepturi eum sit fugiat mollitia, hic quaerat quisquam?</p>
            </div>
            </div>
            <div className="w-1/5 gradient shadow sm:p-1 md:p-1 mx-5 mt-24 rounded-3xl">
              <div className="w-full p-5 bg-black sm:p-6 md:p-8 rounded-3xl">
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, soluta. Corrupti, doloribus quis vel officia temporibus totam necessitatibus amet cumque expedita illo excepturi eum sit fugiat mollitia, hic quaerat quisquam?</p>
            </div>
            </div>
            {/* <div className="w-1/5 max-w-sm p-10 border-2 border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-5 mt-24">
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, soluta. Corrupti, doloribus quis vel officia temporibus totam necessitatibus amet cumque expedita illo excepturi eum sit fugiat mollitia, hic quaerat quisquam?</p>
            </div> */}
          </div>
        </section>

        
        <section id="roadmap" className="mt-20 mb-24">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          {" "}
          <span className="relative whitespace-nowrap text-blue-600">
            
            <span className="relative gradientText">SneakAuth</span>
          </span>{" "}Roadmap
          </h1>
          <div className="flex justify-between w-full  flex-row sm:mt-8 p-4">
            <div className="w-1/4 max-w-sm shadow sm:p-6 md:p-8 dark:bg-gray-800 mx-5">
              <div className="mx-auto">
                <p className="font-black text-5xl p-5 text-center text-white mb-5">Q1</p>
              </div>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur </p>
            </div>
            <div className="w-1/4 max-w-sm bg-gradient-to-r shadow sm:p-6 md:p-8 mx-5">
              <div className="mx-auto">
                <p className="font-black text-5xl p-5 text-center text-white mb-5">Q2</p>
              </div>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur </p>
            </div>
            <div className="w-1/4 max-w-sm bg-gradient-to-r shadow sm:p-6 md:p-8 mx-5">
              <div className="mx-auto">
                <p className="font-black text-5xl p-5 text-center text-white mb-5">Q3</p>
              </div>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur </p>
            </div>
            <div className="w-1/4 max-w-sm bg-gradient-to-r shadow sm:p-6 md:p-8 mx-5">
              <div className="mx-auto">
                <p className="font-black text-5xl p-5 text-center text-white mb-5">Q4</p>
              </div>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur </p>
            </div>
          </div>
        </section>



        <section id="team" className="mt-20 mb-36">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Meet our{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            
            <span className="relative gradientText">Team</span>
          </span>{" "}
          </h1>
          <div className="flex justify-center w-full  flex-row sm:mt-10 pt-8">
            <a href="https://www.linkedin.com/in/gibran-reyes/" target={"_blank"} className="w-1/4 max-w-sm p-10 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-5">
              <p className="text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, soluta. Corrupti, doloribus quis vel officia temporibus totam necessitatibus amet cumque expedita illo excepturi eum sit fugiat mollitia, hic quaerat quisquam? temporibus totam necessitatibus amet cumque expedita illo excepturi eum sit fugiat mollitia, hic quaerat quisquam?</p>
            </a>
            
            <a href="https://www.linkedin.com/in/ariadna-martinez30/" target={"_blank"} className="w-1/4 max-w-sm p-10 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-5">
              <p className="text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, soluta. Corrupti, doloribus quis vel officia temporibus totam necessitatibus amet cumque expedita illo excepturi eum sit fugiat mollitia, hic quaerat quisquam? temporibus totam necessitatibus amet cumque expedita illo excepturi eum sit fugiat mollitia, hic quaerat quisquam?</p>
            </a>
            <a href="https://www.linkedin.com/in/rodrigo-se-mx/" target={"_blank"} className="w-1/4 max-w-sm p-10 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-5">
              <p className="text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, soluta. Corrupti, doloribus quis vel officia temporibus totam necessitatibus amet cumque expedita illo excepturi eum sit fugiat mollitia, hic quaerat quisquam? temporibus totam necessitatibus amet cumque expedita illo excepturi eum sit fugiat mollitia, hic quaerat quisquam?</p>
            </a>
          </div>
          <div className="flex justify-center w-full  flex-row sm:mt-10 pt-8">
            <a href="https://www.linkedin.com/in/abraham-orozco-m/" target={"_blank"} className="w-1/4 max-w-sm p-10 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-5">
              <p className="text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, soluta. Corrupti, doloribus quis vel officia temporibus totam necessitatibus amet cumque expedita illo excepturi eum sit fugiat mollitia, hic quaerat quisquam? temporibus totam necessitatibus amet cumque expedita illo excepturi eum sit fugiat mollitia, hic quaerat quisquam?</p>
            </a>
            <a href="https://www.linkedin.com/in/jonathan-uriel-duran-carrasco-4a4845242/" target={"_blank"} className="w-1/4 max-w-sm p-10 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-5">
              <p className="text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, soluta. Corrupti, doloribus quis vel officia temporibus totam necessitatibus amet cumque expedita illo excepturi eum sit fugiat mollitia, hic quaerat quisquam? temporibus totam necessitatibus amet cumque expedita illo excepturi eum sit fugiat mollitia, hic quaerat quisquam?</p>
            </a>
            <a href="https://www.linkedin.com/in/fernandoponce/" target={"_blank"} className="w-1/4 max-w-sm p-10 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-5">
              <p className="text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, soluta. Corrupti, doloribus quis vel officia temporibus totam necessitatibus amet cumque expedita illo excepturi eum sit fugiat mollitia, hic quaerat quisquam? temporibus totam necessitatibus amet cumque expedita illo excepturi eum sit fugiat mollitia, hic quaerat quisquam?</p>
            </a>
          </div>
        </section>

        <section id="signUp">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-gray-300 sm:text-7xl ">
          Want to know more?
          </h1>
          <form className="w-full mt-10 mb-20">
            <div className="flex items-center py-2">
              <input className="appearance-none bg-transparent w-full text-slate-200 mr-3 py-4 px-8 leading-tight focus:outline-none border-white rounded-2xl" type="text" placeholder="Write your email" aria-label="Full name" ></input>
              <button className="flex-shrink-0 bg-white text-black shadow-md hover:bg-gradient-to-r from-purple-500 to-blue-600 font-bold hover:text-white py-4 px-8 rounded-2xl" type="button">
                Sign Up
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
