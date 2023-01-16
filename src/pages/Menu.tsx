import * as React from "react";
import { Link } from "react-router-dom";
import github from "../assets/github.webp";
import linkedin from "../assets/linkedin.webp";

interface IMenuProps {}

export function Menu(props: IMenuProps) {
  return (
    <div className="grid lg:grid-cols-4 items-center">
      <div className="col-span-2 text-onBackground grid grid-flow-col justify-start gap-1 p-1">
        <a href="https://github.com/angrysoft">
          <img className="h-2" src={github} alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/sebastian-zwierzchowski-a1b6a8220/">
          <img className="h-2" src={linkedin} alt="Linkedin" />
        </a>
      </div>
      <div
        className="bg-elevatedSurface text-onSurface shadow
                    py-1 px-2 rounded-3xl
                    grid gap-1 grid-flow-col col-span-2"
        >
        <MenuItem name="O mnie" url="/about" />
        <MenuItem name="Projekty" url="/projects" />
        <MenuItem name="Artykuły" url="/articles" />
        <MenuItem name="Kontakt" url="/contact" />
        <div className="rounded grid justify-center cursor-pointer text-onSecondary">
          <span className="bg-secondary p-02 rounded">EN</span>
        </div>
      </div>
    </div>
  );
}

interface IMenuItemProps {
  url: string;
  name: string;
}

const MenuItem = (props: IMenuItemProps) => {
  return (
    <div className="hover:text-primary transition-colors duration-500 grid grid items-center">
      <Link to={props.url}>{props.name}</Link>
    </div>
  );
};
