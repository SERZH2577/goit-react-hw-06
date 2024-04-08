import { nanoid } from "nanoid";
// import { Formik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import { getFilters } from "../../redux/selectors";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const nameId = nanoid();
  const dispatch = useDispatch();
  const searchValue = useSelector(getFilters);

  const changeInput = (e) => {
    dispatch(setFilter(e.target.value.trim()));
  };

  return (
    <div className={css.searchNameContainer}>
      <label htmlFor={nameId} className={css.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="name"
        id={nameId}
        value={searchValue}
        onChange={changeInput}
        className={css.searchInput}
      />
    </div>
  );
}