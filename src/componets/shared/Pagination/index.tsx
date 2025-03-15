import React,  { useEffect, useState } from "react";

import "./index.scss";

import { useSelector, useDispatch } from "react-redux";

import { setActivePage } from "../../../redux/slices/pagination";
import { AppDispatch, RootState } from "../../../redux/store";

export default function Pagination() {
  const paginationInfo = useSelector(((state : RootState) => state.pagination));
  const dispatch = useDispatch<AppDispatch>();
  const [isPagination, setIsPagination] = useState<boolean>(false);

  useEffect(() => {
    const countPage = Math.ceil(paginationInfo.countItems / 4);
    if (countPage > 1) {
      setIsPagination(true);
    } else {
      setIsPagination(false);
    }
  }, [paginationInfo.countItems]);

  const renderPagination = () => {
    const countPage = Math.ceil(paginationInfo.countItems / 4);
    let html: React.ReactNode[] = [];

    if (countPage <= 1) {
      return null;
    } else {
      for (let i = 0; i < countPage; i++) {
        html.push(
          <li
            key={i}
            className={`pagination__link ${
              (i) === paginationInfo.activePage ? "active" : ""
            }`}
            onClick={() => dispatch(setActivePage(i))}
          >
            {i + 1}
          </li>
        );
      }
      return html;
    }
  };

  const changeActivePage = (value: string) => {
    const countPage = Math.ceil(paginationInfo.countItems / 4);

    if (value === 'next') {
        const activePage = (paginationInfo.activePage + 1) === (countPage) ? countPage - 1 : (paginationInfo.activePage + 1)

        dispatch(setActivePage(activePage))
    } else if (value === 'prev') {
        const activePage = (paginationInfo.activePage - 1) === -1 ? 0 : (paginationInfo.activePage - 1)

        dispatch(setActivePage(activePage))
    }
  }

  return (
    <div className="pagination">
      {isPagination && (
        <button
          className="pagination__arrow prev"
          aria-label="перейти к предыдущий странице"
          onClick={() => changeActivePage('prev')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
      )}

      <ul className="pagination__list">{renderPagination()}</ul>

      {isPagination && (
        <button
          className="pagination__arrow"
          aria-label="перейти к следующей странице"
          onClick={() => changeActivePage('next')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
      )}
    </div>
  );
}
