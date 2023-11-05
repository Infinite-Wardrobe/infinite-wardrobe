import React, { useEffect, useState } from "react";
import axios from "axios";
import * as Components from "../../components";
import styles from "./styles.module.css";

function Home() {
  const [data, setData] = useState({ info: "", clothing: [] });

  useEffect(() => {
    // Fetch users from the API
    axios
      .get("/api/clothing")
      .then((response) => {
        if (response.data && Array.isArray(response.data.clothing)) {
          setData(response.data);
        } else {
          console.error("API did not return the expected structure");
        }
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);
  console.log(data.clothing);
  return (
    <div className={styles.cards_container }>
        {(() => {
          const items = [];
          data.clothing.forEach((item) => {
            items.push(
              <Components.Card
                imgUrl={item.imageString}
                title={item.category}
              />
            );
          });
          return items;
        })()}
    </div>
  );
}

export default Home;
