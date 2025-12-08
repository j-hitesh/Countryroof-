import Commercial from "./Commercial";
import Residencial from "./Residencial";

export const renderContent = (city) => {
  switch (city) {
    
      case "Commercial":
      return <Commercial/>;
      
      case "Residencial":
      return <Residencial/>;
    
  }
};
