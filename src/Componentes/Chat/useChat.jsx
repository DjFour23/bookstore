import { useEffect, useState } from "react";
import { db } from "./../../Firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

export const useChat = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chat, setChat] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "chat"),
      (snapshot) => {
        setLoading(false);
        setChat(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
      },

      (err) => {
        setError(err);
      }
    );
    return () => unsubscribe();
  }, [setChat]);

  return { error, loading, chat };
};
