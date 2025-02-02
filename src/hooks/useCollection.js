import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfin";
import { collection, query, where, getDocs } from "firebase/firestore";

export const useCollection = (collectionName, whereData) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (whereData[2]) {
      const q = query(collection(db, collectionName), where(...whereData));
      const getData = async () => {
        const data = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setData(data);
      };
      getData();
    }
  }, [collectionName, whereData]);

  return { data };
};
