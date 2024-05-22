import styled from "styled-components";
import img from "/background.png";
import { BASE_URL } from "../../App";
import { Button } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
      <FoodCards>
        {data?.map(({ name, image, text, price }) => {
          return (
            <FoodCard key={name}>
              <div className="food_image">
                <img src={BASE_URL + image} alt="Food image" />
              </div>
              <div className="food-info">
                <div>
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button>${price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          );
        })}
      </FoodCards>
    </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  min-height: calc(100vh - 210px);
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${img});
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 32px;
  column-gap: 20px;
  padding-top: 80px;
`;

const FoodCard = styled.div`
  display: flex;
  padding: 8px;
  font-family: "Inter", sans-serif;
  .food-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  }
  h3 {
    margin-top: 8px;
    font-size: 16px;
    font-family: 500;
  }
  p {
    margin-top: 4px;
    font-size: 12px;
  }
  button {
    font-size: 15px;
  }

  width: 340px;
  height: 167px;
  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);
  border-radius: 20px;
`;
