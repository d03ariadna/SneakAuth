import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";

export default function HomePage() {
  return (
    <div className="flex max-w-7xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <img src="/SA-MAIN.png" alt="MAIN" />
      <div id="about"></div>
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4">
        <div className="flex justify-between w-full flex-col mt-20">
          <div className="flex flex-col space-y-10 mt-5 mb-16">
            <div className="flex sm:space-x-8 mb-20 sm:flex-row flex-col justify-between">
              <section id="AboutPage" className="flex">
                <div className="w-1/3 mt-6">
                  <h1 className="mb-8 font-bold text-5xl text-left">
                    About Us
                  </h1>
                  <p className="text-left">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse provident assumenda repellendus veniam! Tempora animi
                    error a nihil maxime nulla ratione voluptatum, hic harum,
                    fugiat necessitatibus earum quis aperiam. Consequuntur.
                  </p>
                </div>
                <div className="sm:mt-0 mt-8">
                  <img alt="video" src="/SA-MAIN.png" className="w-full" />
                </div>
              </section>
            </div>
            <div id="statics" className="pb-16"></div>
            <section id="StaticsPage">
              <h1 className="mb-1 font-bold text-5xl">Statics</h1>
              <div className="flex justify-around">
                <div className="w-[514px] h-[314px] relative">
                  <div className="w-[500px] h-[300px] bg-[#262626] rounded-xl absolute right-0 bottom-0"></div>
                  <div className="bg-gradient-to-r from-bluemain to-[#650396] w-[500px] h-[300px] rounded-xl absolute top-0 left-0">
                    <img src="/STATICS.png" alt="" />
                  </div>
                </div>
                <div className="w-[514px] h-[314px] flex items-center">
                  <h1 className="mb-1 font-bold text-6xl">
                    Sneaker Market Value
                  </h1>
                </div>
              </div>
              <div className="flex justify-around">
                <div className="w-[514px] h-[314px] flex items-center">
                  <h1 className="mb-1 font-bold text-6xl">
                    Counterfeit Shoe Market
                  </h1>
                </div>
                <div className="w-[514px] h-[314px] relative">
                  <div className="w-[500px] h-[300px] bg-[#262626] rounded-xl absolute right-0 bottom-0"></div>
                  <div className="bg-gradient-to-r from-[#6d0c86] to-[#ab5200] w-[500px] h-[300px] rounded-xl absolute flex items-center top-0 left-0">
                    <h1 className="mb-1 font-bold text-4xl">
                      In August 2018 were found 380,000 counterfeits sneakers
                      with a value of more than $73 millions
                    </h1>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
