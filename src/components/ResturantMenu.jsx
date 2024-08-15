import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import "./ResturantMenu.css";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const MENU_API =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5691389&lng=88.4338776&restaurantId=";

    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards || [];

  return (
    <>
      <div className="menu">
        <h1>{name}</h1>
        <h5>{costForTwoMessage}</h5>
        <p>{cuisines?.join(", ")}</p>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name}
              <div className="itemPrice">
                <p className="price">
                  <MdOutlineCurrencyRupee />
                  {item.card.info.price / 100}
                </p>
                {item.card.info.offerTags?.[0] && (
                  <p className="disscount">
                    <BiSolidOffer className="offer-icon" />
                    {item.card.info.offerTags[0].title} -{" "}
                    {item.card.info.offerTags[0].subTitle}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ResturantMenu;
