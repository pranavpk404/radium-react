import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "All 🔎" },
  { url: "/image", text: "Images 📸" },
  { url: "/video", text: "Videos 📺" },
  { url: "/news", text: "News 📰" },
];

const Links = () => (
  <div className="flex justify-between items-center mt-4 sm:justify-around ">
    {links.map(({ url, text }, index) => (
      <NavLink to={url} key={index} className="m-3 hover:font-bold">
        {text}
      </NavLink>
    ))}
  </div>
);
export default Links;
