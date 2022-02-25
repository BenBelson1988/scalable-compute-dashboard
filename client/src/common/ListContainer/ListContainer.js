import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import EC2Table from "../Table/EC2Table";
import * as Style from "./style";

const ITEMS_PER_PAGE = 20;

export default ({ list, error }) => {
  const [showItems, setShowItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setShowItems(list.slice(0, pageNumber * ITEMS_PER_PAGE));
  }, [list]);

  const FecthMoreData = () => {
    if (showItems.length >= list.length) setHasMore(false);
    else {
      setShowItems([
        ...showItems,
        ...list.slice(
          ITEMS_PER_PAGE * pageNumber,
          (pageNumber + 1) * ITEMS_PER_PAGE
        ),
      ]);
      setPageNumber(pageNumber + 1);
    }
  };
  return (
    <Style.List id="scrollable">
      {error && <h2 data-testid="listError">{error}</h2>}
      {showItems.length === 0 && <h1>No results found.</h1>}
      {Array.isArray(showItems) && !error && (
        <InfiniteScroll
          data-testid="infinityScroll"
          dataLength={showItems.length}
          next={FecthMoreData}
          hasMore={hasMore}
          scrollableTarget="scrollable"
        >
          <EC2Table list={showItems} />
        </InfiniteScroll>
      )}
    </Style.List>
  );
};
