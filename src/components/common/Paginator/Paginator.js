import React from "react";
import styles from "./Paginator.module.css";

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            { pages.map((current) => (current > 60) ? undefined : <span onClick={() => { props.onPageChanged(current) }
            } className={props.currentPage === current && styles.selectedPage}>
                    {current} </span>)
            }
        </div>
    )
};

export default Paginator;