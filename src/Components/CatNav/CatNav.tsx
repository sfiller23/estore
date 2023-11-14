import { useDispatch, useSelector } from "react-redux";
import "./_cat-nav.scss";
import categorySlice, {
  CategoryState,
} from "../../Redux/Category/categorySlice";
import { RootState } from "../../Redux/store";
import { useEffect } from "react";
import { getCategories } from "../../Redux/Category/action";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks/reduxHooks";
import { Category } from "../../interfaces/general";
import { Link } from "react-router-dom";

const CatNav = () => {
  const categories: Category[] = useAppSelector(
    (state) => state.categoryReducer.categories
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <div className="cat-nav-container container">
        <ul>
          <li className="list-items">
            <Link to="/"> Home </Link>
          </li>

          {categories.map((category) => {
            if (category.parent_category_id === null) {
              return (
                <li className="list-items">
                  {" "}
                  <a href="#"> {category.category} </a>{" "}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default CatNav;
