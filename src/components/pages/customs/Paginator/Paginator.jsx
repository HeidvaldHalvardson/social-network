import React, {useState} from "react";
import styles from "./Paginator.module.css";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

  const pagesCount = Math.ceil(totalItemsCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <>
      {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button> }
      {pages
        .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
        .map(page => {
        return <span className={(currentPage === page) ? styles.selectedPage : ""}
                     onClick={() => onPageChanged(page)}>{page}</span>
      })}
      {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button> }
    </>
  )
}

export default Paginator;