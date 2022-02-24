import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListContainer from "../../common/ListContainer/ListContainer";
import { Loader } from "../../common/Loader/Loader";
import { getEC2List } from "../../stores/ec2Slicer";
import * as Style from "./style";

const [DEC, ASC] = ["▼", "▲"];

export default ({ user, token }) => {
  const dispatch = useDispatch();
  const { ec2List, loadingList, error } = useSelector(({ ec2list }) => ec2list);
  const [updatedList, setUpdatedList] = useState([]);
  const [sortState, setSortState] = useState({
    name: DEC,
  });
  const [searchBy, setSearchBy] = useState({
    name: true,
  });

  useEffect(() => {
    dispatch(getEC2List(token));
  }, []);

  useEffect(() => {
    setUpdatedList(ec2List.slice(0).sort((a, b) => (a.name > b.name ? 1 : -1)));
  }, [ec2List]);

  const sortListByValue = (type) => {
    if (sortState[type] === ASC) {
      setUpdatedList(
        ec2List.slice(0).sort((a, b) => (a[type] > b[type] ? 1 : -1))
      );
      setSortState({ [type]: DEC });
    } else {
      setUpdatedList(
        ec2List.slice(0).sort((a, b) => (a[type] < b[type] ? 1 : -1))
      );
      setSortState({ [type]: ASC });
    }
  };

  const setActiveByType = (type) => {
    setSearchBy({ [type]: true });
  };

  const searchByType = (value) => {
    if (value.trim() === "") {
      setUpdatedList(
        ec2List.slice(0).sort((a, b) => (a.name > b.name ? 1 : -1))
      );
      return;
    }
    let [type] = Object.keys(searchBy);
    setUpdatedList(
      ec2List.filter((ec2) =>
        ec2[type].toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <>
      {user && <Style.UserH3>Hi {user}</Style.UserH3>}
      {loadingList && <Loader />}
      <Style.listPageWrraper>
        <Style.H1>Seacrh, sort and explore your EC2's</Style.H1>
        <Style.RowDiv>
          <Style.SearchText>Search for EC2</Style.SearchText>
          <Style.SearchInput onChange={(e) => searchByType(e.target.value)} />
          <Style.CheckBox
            active={searchBy.name}
            onClick={() => {
              setActiveByType("name");
            }}
          />
          <Style.SearchText>Name</Style.SearchText>
          <Style.CheckBox
            active={searchBy.publicIP}
            onClick={() => {
              setActiveByType("publicIP");
            }}
          />
          <Style.SearchText>Public IP</Style.SearchText>
          <Style.CheckBox
            active={searchBy.privateIP}
            onClick={() => {
              setActiveByType("privateIP");
            }}
          />
          <Style.SearchText>Private IP</Style.SearchText>
        </Style.RowDiv>
        <Style.TableHeadingDiv>
          <Style.TableHeading onClick={() => sortListByValue("name")}>
            Name{sortState.name}
          </Style.TableHeading>
          <Style.TableHeading onClick={() => sortListByValue("id")}>
            Id{sortState.id}
          </Style.TableHeading>
          <Style.TableHeading onClick={() => sortListByValue("type")}>
            Type{sortState.type}
          </Style.TableHeading>
          <Style.TableHeading onClick={() => sortListByValue("state")}>
            State{sortState.state}
          </Style.TableHeading>
          <Style.TableHeading onClick={() => sortListByValue("az")}>
            AZ{sortState.az}
          </Style.TableHeading>
          <Style.TableHeading>Public IP</Style.TableHeading>
          <Style.TableHeading>Private IP</Style.TableHeading>
        </Style.TableHeadingDiv>
        {!loadingList && <ListContainer list={updatedList} error={error} />}
      </Style.listPageWrraper>
    </>
  );
};
