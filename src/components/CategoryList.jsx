import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategory } from "src/services/admin";
import Loader from "./modules/Loader";

import styles from "./CategoryList.module.css";

const CategoryList = () => {
  const { data, isPending } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategory,
  });
  console.log(data, isPending);
  return (
    <div className={styles.list}>
      {isPending ? (
        <Loader />
      ) : (
        data.data.map((category) => (
          <div key={category._id}>
            <img src={`${category.icon}.svg`} alt='category.name' />
            <h5>{category.name}</h5>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryList;
