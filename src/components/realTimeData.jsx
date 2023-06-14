import React, { useEffect, useState } from "react";
import { database } from "../config/firebase";
import { ref, onValue } from "firebase/database";

const RealTimeData = () => {
  const [real, setReal] = useState([]);
  useEffect(() => {
    const getRealTimeData = () => {
      const dbRef = ref(database, "offers/");
      onValue(dbRef, (snapshot) => {
        let records = [];
        snapshot.forEach((item) => {
          let data = item.val();

          records.push(data);
          console.log(records);
          setReal(records);
        });
      });
    };
    getRealTimeData();
  }, []);
  return (
    <div>
      <h1>efe</h1>
      {real.map((item) => (
        <div className="real" key={item.key}>
          <img src={item.image} alt="" />
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default RealTimeData;
