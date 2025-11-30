import BuyDelhi from "../Component/BuyDelhi";
import BuyGurugram from "./BuyGurugram";
import BuyNoida from "./BuyNoida";
import Commercial from "./Commercial";

export const renderContent = (city) => {
  switch (city) {
    case "Delhi":
      return <BuyDelhi />;
    case "Noida":
      return <BuyNoida />;
    case "Gurugram":
      return <BuyGurugram />;
      case "Commercial":
      return <Commercial/>;
    default:
      return <BuyDelhi />;
  }
};
