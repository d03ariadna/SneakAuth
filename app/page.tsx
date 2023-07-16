import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div className="flex max-w-7xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <img src="/SA-MAIN.png" alt="MAIN" />
      
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4">
        <div className="flex justify-between w-full flex-col ">
          <div className="flex flex-col space-y-10 mb-6 ">
            <div className="flex sm:space-x-8 mb-20 sm:flex-row  flex-col justify-between ">
              <section id="about" className="flex w-full">
                <div className="sm:mt-32 mt-8 w-full ">
                  <h1 className="mb-1 font-bold text-5xl sm:text-6xl">About Us</h1>
                    <iframe width="840" height="472" src="https://www.youtube.com/embed/VIAobbuubdg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="mx-auto mt-4 w-full"></iframe>
                </div>
              </section>
            </div>
            <div id="statics" className="pt-6 pb-16"></div>
            <section id="StaticsPage">
              <h1 className="mb-10 font-bold text-6xl">Statics</h1>
              <div className="sm:flex justify-center">
                <div className="sm:w-[514px] sm:h-[314px] w-[414px] h-[214px]  sm:relative">
                  <div className="sm:w-[500px] sm:h-[300px] w-[400px] h-[250px] bg-[#262626] rounded-xl absolute sm:right-0 sm:bottom-0"></div>
                  <div className="bg-gradient-to-r from-bluemain to-[#650396] sm:w-[500px] sm:h-[300px] w-[400px] h-[250px] rounded-xl absolute sm:top-0 sm:left-0">
                    <img src="/STATICS.png" alt="" />
                  </div>
                </div>
                <div className="sm:w-[514px] sm:h-[314px] w-[400px] h-[250px] flex items-center">
                  <h1 className="mb-1 sm:ml-10 ml-5 mr-5 font-outf text-6xl">
                    Sneaker Market Value
                  </h1>
                </div>
              </div>
              <div className="sm:flex justify-center sm:mt-24">
                <div className="sm:w-[514px] sm:h-[314px] w-[400px] h-[250px] flex items-center">
                  <h1 className="mb-1 sm:ml-10 ml-5 mr-5 font-outf text-6xl">
                    Counterfeit Shoe Market
                  </h1>
                </div>
                <div className="sm:w-[514px] sm:h-[314px] w-[414px] h-[214px]  sm:relative">
                  <div className="sm:w-[500px] sm:h-[300px] w-[400px] h-[250px] bg-[#262626] rounded-xl absolute sm:right-0 sm:bottom-0"></div>
                  <div className="bg-gradient-to-r from-purplemain to-orange sm:w-[500px] sm:h-[300px] w-[400px] h-[250px] rounded-xl absolute flex items-center sm:top-0 sm:left-0">
                    <h1 className="mb-1 mx-16 font-bold sm:text-3xl text-2xl">
                      In August 2018 were found 380,000 counterfeits sneakers
                      with a value of more than $73 millions
                    </h1>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section id="project" className="pt-24 mb-24">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-6xl">
            What are we doing at{" "}
            <span className="relative whitespace-nowrap text-blue-600">
              <span className="relative gradientText">SneakAuth</span>
            </span>{" "}
            ?
          </h1>
          <div className="flex justify-between w-full flex-col pt-2 sm:flex-row ">
            <div className="w-full gradient shadow sm:pb-2 sm:w-1/5 md:p-1 mt-12 sm:mx-5 sm:mb-24 rounded-3xl">
              <div className="w-full px-8 py-5 bg-black sm:p-6 sm:py-12 rounded-3xl">
                <img
                  src="mission.png"
                  alt=""
                  width={"50px"}
                  className="mx-auto mb-8"
                />
                <p className="text-sm leading-loose">
                  We understand your love for sneakers and we know how much they
                  mean for you, so we seek to provide you certainty and
                  authenticity in every pair
                </p>
              </div>
            </div>
            <div className="w-full gradient shadow sm:p-1 sm:w-1/5 mt-10 sm:mx-5 sm:mt-36 rounded-3xl">
              <div className="w-full px-8 py-5 bg-black sm:p-6 sm:py-12 rounded-3xl">
                <img
                  src="vision.png"
                  alt=""
                  width={"50px"}
                  className="mx-auto mb-8"
                />
                <p className="text-sm leading-loose">
                  Our vision is to decrease the percentage sneakers counterfeit
                  sold per year by adding a layer of security to the production
                  of each pair
                </p>
              </div>
            </div>
            <div className="w-full gradient shadow sm:p-1 md:p-1 sm:w-1/5 mt-12 sm:mx-5 sm:mb-24 rounded-3xl">
              <div className="w-full px-8 py-5 bg-black sm:p-6 md:py-12 rounded-3xl">
                <img
                  src="object.png"
                  alt=""
                  width={"50px"}
                  className="mx-auto mb-8"
                />
                <p className="text-sm leading-loose">
                  We are adopting modern technologies to improve the safety of
                  the sneaker market, reinforcing their value by assuring their
                  uniqueness
                </p>
              </div>
            </div>
            <div className="w-full gradient shadow sm:p-1 sm:w-1/5 mt-10 sm:mx-5 sm:mt-36 rounded-3xl">
              <div className="w-full px-8 py-5 bg-black sm:p-6 md:py-12 rounded-3xl">
                <img
                  src="why.png"
                  alt=""
                  width={"50px"}
                  className="mx-auto mb-8"
                />
                <p className="text-sm leading-loose">
                  We are aware that through the years it will become impossible
                  to assure this authenticity, our goal is to eliminate the
                  human error that this may cause
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className="pt-44 mb-36">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-6xl">
            {" "}
            <span className="relative whitespace-nowrap text-blue-600">
              <span className="relative gradientText">SneakAuth</span>
            </span>{" "}
            Roadmap
          </h1>
          <div className="flex justify-between w-full flex-col sm:mt-8 p-4 sm:flex-row">
            <div className="w-full px-5 py-8 max-w-sm shadow sm:w-1/4 sm:p-6 md:p-8 dark:bg-gray-800 mx-5">
              <div className="mx-auto">
                <p className="font-outf text-6xl p-5 text-center text-white mb-5">
                  Q1
                </p>
              </div>
              <ul className="text-sm ml-2">
                <li className="text-sm list-disc text-center sm:text-left">
                 Market Research and Plannings
                </li>
                <li className="text-sm list-disc text-center sm:text-left">
                  Team Formation and Infrastructure Setup
                </li>
                <li className="text-sm list-disc text-center sm:text-left">
                  NFT Token Design and Development
                </li>
              </ul>
            </div>
            <div className="w-full px-5 py-8 max-w-sm shadow sm:w-1/4 sm:p-6 md:p-8 mx-5">
              <div className="mx-auto">
                <p className="font-outf text-6xl p-5 text-center text-white mb-5">
                  Q2
                </p>
              </div>
              <ul className="text-sm ml-2">
                <li className="text-sm list-disc text-center sm:text-left">
                  Sneaker Authentication System Development
                </li>
                <li className="text-sm list-disc text-center sm:text-left">
                  Smart Contract Development
                </li>
                <li className="text-sm list-disc text-center sm:text-left">
                  Partnership and Integration
                </li>
              </ul>
            </div>
            <div className="w-full px-5 py-8 max-w-sm shadow sm:w-1/4 sm:p-6 md:p-8 mx-5">
              <div className="mx-auto">
                <p className="font-outf text-6xl p-5 text-center text-white mb-5">
                  Q3
                </p>
              </div>
              <ul className="text-sm ml-2">
                <li className="text-sm list-disc text-center sm:text-left">
                  Pilot Testing and Refinemen
                </li>
                <li className="text-sm list-disc text-center sm:text-left">
                  User Interface and Experience
                </li>
                <li className="text-sm list-disc text-center sm:text-left">
                  Marketing and Awareness
                </li>
              </ul>
            </div>
            <div className="w-full px-5 py-8 max-w-sm shadow sm:w-1/4 sm:p-6 md:p-8 mx-5">
              <div className="mx-auto">
                <p className="font-outf text-6xl p-5 text-center text-white mb-5">
                  Q4
                </p>
              </div>
              <ul className="text-sm ml-2">
                <li className="text-sm list-disc text-center sm:text-left">
                  Scaling and Expansion
                </li>
                <li className="text-sm list-disc text-center sm:text-left">
                  Community Building
                </li>
                <li className="text-sm list-disc text-center sm:text-left">
                  Continuous Improvement
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="team" className="pt-30 mb-36">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-6xl mt-36">
            Meet our{" "}
            <span className="relative whitespace-nowrap text-blue-600">
              <span className="relative gradientText">Team</span>
            </span>{" "}
          </h1>
          <div className="flex justify-center sm:w-full  sm:flex-row flex-col sm:mt-10 pt-8">
            <a
              href="https://www.linkedin.com/in/gibran-reyes/"
              target={"_blank"}
              className="w-full sm:w-1/3 p-10 rounded-lg shadow sm:p-6 md:p-8 mx-5"
            >
              <img
                src="https://media.licdn.com/dms/image/D4E03AQHoQBS-lHsWYg/profile-displayphoto-shrink_400_400/0/1666110944741?e=1694649600&v=beta&t=sgeGyDQan5m_fjcUDS26n3dImwo2w85LJ7GjgfgoJco"
                alt="Gibrán Reyes Picture"
                width={"250px"}
                className="mx-auto rounded-full drop-shadow-[0_35px_35px_rgba(20,0,255,0.25)]"
              />
              <p className="text-3xl font-outf text-white mt-5">Gibrán Reyes</p>
              <p>FrontEnd Developer</p>
            </a>
            <a
              href="https://www.linkedin.com/in/ariadna-martinez30/"
              target={"_blank"}
              className="w-full sm:w-1/3 p-10 rounded-lg shadow sm:p-6 md:p-8 mx-5"
            >
              <img
                src="https://media.licdn.com/dms/image/D4E03AQEqFEcyuwPpkw/profile-displayphoto-shrink_400_400/0/1689307596509?e=1694649600&v=beta&t=hMeNT7gMcYq2PAKZC4xjx3BWxoCkKOpdoxIWIKIoCvo"
                alt="Ariadna Martínez Picture"
                width={"250px"}
                className="mx-auto rounded-full drop-shadow-[0_35px_35px_rgba(154,0,255,0.25)]"
              />
              <p className="text-3xl font-outf text-white mt-5">
                Ariadna Martínez
              </p>
              <p>FrontEnd Developer</p>
            </a>
            <a
              href="https://www.linkedin.com/in/rodrigo-se-mx/"
              target={"_blank"}
              className="w-full sm:w-1/3 p-10 sm:p-6 md:p-8 mx-5"
            >
              <img
                src="https://media.licdn.com/dms/image/D5603AQHlVtH1NJEUGQ/profile-displayphoto-shrink_400_400/0/1675462139075?e=1694649600&v=beta&t=qYa3NOWClnvkkuVt0trziGatckhRbI419R2wiB37qgc"
                alt="Rodrigo Espino Picture"
                width={"250px"}
                className="mx-auto rounded-full drop-shadow-[0_35px_35px_rgba(255,122,0,0.25)]"
              />
              <p className="text-3xl font-outf text-white mt-5">
                Rodrigo Espino
              </p>
              <p>Blockchain Developer</p>
            </a>
          </div>
          <div className="flex justify-center w-full  sm:flex-row flex-col sm:mt-10 pt-4">
            <a
              href="https://www.linkedin.com/in/abraham-orozco-m/"
              target={"_blank"}
              className="w-full sm:w-1/3 p-10 rounded-lg shadow sm:p-6 md:p-8 mx-5"
            >
              <img
                src="https://media.licdn.com/dms/image/D4E03AQGxaby_QIhwDA/profile-displayphoto-shrink_400_400/0/1686293842019?e=1694649600&v=beta&t=yihwYxmbH_quUeZkFHQuDj0_njA1ecOqlGqg_JMOb1k"
                alt="Abraham Orozco Picture"
                width={"250px"}
                className="mx-auto rounded-full drop-shadow-[0_35px_35px_rgba(154,0,255,0.35)]"
              />
              <p className="text-3xl font-outf text-white mt-5">
                Abraham Orozco
              </p>
              <p>Backend Developer</p>
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-uriel-duran-carrasco-4a4845242/"
              target={"_blank"}
              className="w-full sm:w-1/3 p-10 rounded-lg shadow sm:p-6 md:p-8 mx-5"
            >
              <img
                src="https://media.licdn.com/dms/image/D5603AQGQh85ZoFOwkg/profile-displayphoto-shrink_400_400/0/1685216779417?e=1694649600&v=beta&t=qtzh8dzcTcY8o7pQiZRuvJHimGXs-Y1lK9hpYJz_jUQ"
                alt="Uriel Duran Picture"
                width={"250px"}
                className="mx-auto rounded-full drop-shadow-[0_35px_35px_rgba(255,122,0,0.25)]"
              />
              <p className="text-3xl font-outf text-white mt-5">Uriel Durán</p>
              <p>Blockchain Developer</p>
            </a>
            <a
              href="https://www.linkedin.com/in/fernandoponce/"
              target={"_blank"}
              className="w-full sm:w-1/3 p-10 rounded-lg shadow sm:p-6 md:p-8 mx-5"
            >
              <img
                src="fernando-ponce.jpg"
                alt="Fernando Ponce Picture"
                width={"250px"}
                className="mx-auto rounded-full drop-shadow-[0_35px_35px_rgba(20,0,255,0.25)]"
              />
              <p className="text-3xl font-outf text-white mt-5">
                Fernando Ponce
              </p>
              <p>Backend Developer</p>
            </a>
          </div>
        </section>

        <section id="signUp">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-gray-300 sm:text-7xl ">
            Want to know more?
          </h1>
          <form className="w-full mt-10 mb-20">
            <div className="flex items-center py-2">
              <input
                className="appearance-none bg-transparent w-full text-slate-200 mr-3 py-4 px-8 leading-tight focus:outline-none border-white rounded-2xl"
                type="text"
                placeholder="Write your email"
                aria-label="Full name"
              ></input>
              <button
                className="flex-shrink-0 bg-white text-black shadow-md hover:bg-gradient-to-r from-bluemain to-purplemain font-bold hover:text-white py-4 px-8 rounded-2xl"
                type="button"
              >
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
