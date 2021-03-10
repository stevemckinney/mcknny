/* eslint react/prop-types: 0 */
import React, { useEffect, useState } from "react";

// style
import styles from "./contents.module.css";

function getIds(items) {
  if (typeof items != "undefined") {
    return items.reduce((acc, item) => {
      if (item.url) {
        // url has a # as first character, remove it to get the raw CSS-id
        acc.push(item.url.slice(1));
      }
      if (item.items) {
        acc.push(...getIds(item.items));
      }
      return acc;
    }, []);
  }
}

function useActiveId(itemIds) {
  const [activeId, setActiveId] = useState(`test`);
  
  if (typeof itemIds != "undefined") {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: `0% 0% -80% 0%` }
      );
      itemIds.forEach((id) => {
        observer.observe(document.getElementById(id));
      });
      return () => {
        itemIds.forEach((id) => {
          observer.unobserve(document.getElementById(id));
        });
      };
    }, [itemIds]);
    return activeId;
  }
}

function renderItems(items, activeId) {
  return (
    <ol className="p-0 m-0">
      {items?.map((item) => {
        return (
          <li key={item.url} className={`${activeId === item.url.slice(1) ? "text-white" : "text-seagull"}`}>
            <a
              href={item.url}
              className={`${activeId === item.url.slice(1) ? "font-bold" : ""} text-current transition duration-400 ease-in-out`}
            >
              {item.title}
            </a>
            {item.items && renderItems(item.items, activeId)}
          </li>
        );
      })}
    </ol>
  );
}

function TableOfContents({ contents }) {
  // .unshift({url: `#brief`, title: "Brief"})
  const idList = getIds(contents.items);
  const activeId = useActiveId(idList);
  
  return (
    <nav className={`${styles.contents} flex flex-col gap-y-4 content-start col-end-7`}>
      <span className="text-melon text-f7 md:text-f5 font-title lowercase">Contents</span>
      {renderItems(contents.items, activeId)}
    </nav>
  );
}

export default TableOfContents;