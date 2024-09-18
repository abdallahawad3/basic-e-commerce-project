import { useState } from "react";
import type { TCategory } from "../types";

interface IProps {
  handelCategory: (str: TCategory) => void;
}

const Flitter = ({ handelCategory }: IProps) => {
  const [active, setIsActive] = useState<TCategory>("categories");
  const toggleActive = (str: TCategory) => {
    setIsActive(str);
  };
  return (
    <div className="py-3 bg-secondary-subtle">
      <h1 className="text-center">Category's</h1>
      <div className="d-flex align-items-center justify-content-center gap-1 gap-md-2 gap-lg-3">
        <button
          onClick={() => {
            toggleActive("categories");
            handelCategory("categories");
          }}
          className={`btn ${active == "categories" ? "bg-info-subtle" : "btn-primary"}`}>
          Get All categories
        </button>
        <button
          onClick={() => {
            toggleActive("electronics");
            handelCategory("electronics");
          }}
          className={`btn ${active == "electronics" ? "bg-info-subtle" : "btn-primary"}`}>
          Get All electronics
        </button>
        <button
          onClick={() => {
            toggleActive("jewelery");
            handelCategory("jewelery");
          }}
          className={`btn ${active == "jewelery" ? "bg-info-subtle" : "btn-primary"}`}>
          Get All jewelery
        </button>
        <button
          onClick={() => {
            toggleActive("men's clothing");
            handelCategory("men's clothing");
          }}
          className={`btn ${active == "men's clothing" ? "bg-info-subtle" : "btn-primary"}`}>
          Get All men's clothing
        </button>
        <button
          onClick={() => {
            toggleActive("women's clothing");
            handelCategory("women's clothing");
          }}
          className={`btn ${active == "women's clothing" ? "bg-info-subtle" : "btn-primary"}`}>
          Get All women's clothing
        </button>
      </div>
    </div>
  );
};

export default Flitter;
