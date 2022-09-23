import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
  category: "",
  basketOpen: false
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const [category, setCategory] = useState("");
  const [basketOpen, setBasketOpen] = useState(false);
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();

      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = {
    categoriesMap,
    category,
    setCategory,
    basketOpen,
    setBasketOpen
  };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
