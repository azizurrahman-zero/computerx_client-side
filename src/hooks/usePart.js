import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const usePart = () => {
  const { id } = useParams();

  const [part, setPart] = useState([]);
  useEffect(() => {
    const url = `https://radiant-gorge-88164.herokuapp.com/purchase/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [id, part]);

  return [part, setPart];
};

export default usePart;
