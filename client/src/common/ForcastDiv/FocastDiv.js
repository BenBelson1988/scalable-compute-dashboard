import ForcastCard from "../ForcastCard/ForcastCard";
import * as S from "./style";

export default ({ state }) => {
  return (
    <S.DivWrapper>
      <ForcastCard state={state} />
    </S.DivWrapper>
  );
};
