import * as Style from "./style";

export default ({ list }) => {
  return (
    <div>
      {list.map(({ name, id, type, state, az, publicIP, privateIP }, i) => (
        <Style.TableRow tabIndex={i} key={i}>
          <Style.TableCube>{name}</Style.TableCube>
          <Style.TableCube>{id}</Style.TableCube>
          <Style.TableCube>{type}</Style.TableCube>
          <Style.TableCube>{state}</Style.TableCube>
          <Style.TableCube>{az}</Style.TableCube>
          <Style.TableCube>{publicIP}</Style.TableCube>
          <Style.TableCube>{privateIP}</Style.TableCube>
        </Style.TableRow>
      ))}
    </div>
  );
};
