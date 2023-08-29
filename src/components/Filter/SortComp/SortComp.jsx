import React from "react";
import { usePosts } from "../../../context";
import styles from "./filter.module.css";

const SortComp = () => {
  const { filtersHandler } = usePosts();

  const TRENDING = "TRENDING";
  const RECENT = "RECENT";

  return (
    <div className="flex w-full mx-auto p-2 ">
      <div className="flex items-center gap-4 ">
        <h2 className="text-md text-[color:var(--primary-color)] font-semibold ">
          Sort By :{" "}
        </h2>
        <div>
          <select
            onChange={filtersHandler}
            defaultValue={RECENT}
            name="sortBy"
            className={`${styles.select}`}
          >
            <option className="cursor-pointer" value={TRENDING}>
              Trending
            </option>
            <option className=" cursor-pointer " value={RECENT}>
              Recent
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortComp;
