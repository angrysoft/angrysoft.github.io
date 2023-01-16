import * as React from "react";
import { Menu } from "../Menu";
import prof from "../../assets/prof.jpg"

const Home = () => {
  return (
    <div className="flex flex-col justify-between p-1 h-screen bg-surface max-w-[80rem] mx-auto">
      <Menu />
      <div className="h-full md:p-4 grid justify-start items-center text-onSurface">
        <section className=" p-2 rounded-lg">
          <header className="grid gap-1">
            <img className="rounded-full h-4" src={prof} alt="Profilowe" />
            <h1>Nazywam się Sebastian Zwierzchowski</h1>
          </header>
        </section>
      </div>
      <footer className="text-onBackground p-1 grid justify-end border-t border-elevatedSurface">
        <span>© 2023 Sebastian Zwierzchowski [ Angrysoft ]. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default Home;
