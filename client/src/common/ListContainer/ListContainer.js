import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import * as Style from "./style";

export default ({ list, loadingList, error }) => {
  const [showItems, setShowItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setShowItems(list.slice(0, pageNumber * 20));
  }, [list]);

  const FecthMoreData = () => {
    //fake api call
    setTimeout(() => {
      if (showItems.length >= list.length) setHasMore(false);
      else {
        setShowItems(
          showItems.concat(list.slice(20 * pageNumber, (pageNumber + 1) * 20))
        );
        setPageNumber(pageNumber + 1);
      }
    }, 500);
  };

  return (
    <Style.List id="scrollable">
      {showItems && (
        <InfiniteScroll
          dataLength={showItems.length}
          next={FecthMoreData}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
          scrollableTarget="scrollable"
          endMessage={<h1>Yey, No more EC2s.</h1>}
        >
          {showItems.map((ec2, i) => (
            <Style.TableRow tabIndex={i} key={i}>
              <Style.TableCube>{ec2.name}</Style.TableCube>
              <Style.TableCube>{ec2.id}</Style.TableCube>
              <Style.TableCube>{ec2.type}</Style.TableCube>
              <Style.TableCube>{ec2.state}</Style.TableCube>
              <Style.TableCube>{ec2.az}</Style.TableCube>
              <Style.TableCube>{ec2.publicIP}</Style.TableCube>
              <Style.TableCube>{ec2.privateIP}</Style.TableCube>
            </Style.TableRow>
          ))}
        </InfiniteScroll>
      )}
    </Style.List>
  );
};
