import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import CardList from "../../Components/Card/CardList";
import Card from "../../Components/Card/Card";
const MainPage = () => {
  return (
    <div>
      <Navbar />
      <CardList />
      <Card
        pokemon={{
          images: {
            small: "",
            large: "",
          },
          id: 0,
          name: "",
        }}
      />
    </div>
  );
};

export default MainPage;
