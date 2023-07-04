import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const { id } = useParams();
  const data = useSelector((state) =>
    state.data.find((item) => item.id.toString() === id)
  );

  return (
    <div>
      {data ? (
        <div style={{ width: "80vw" }}>
          <h2>Details Page For Post With ID {data.id}</h2>
          <img
            src={"https://picsum.photos/200?random=${item.id}"}
            alt="Post Img"
            style={{ width: "30%"}}
          />
          <p>UserID: {data.userId}</p>
          <p>Title: {data.title}</p>
          <p>Body: {data.body}</p>
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
};

export default Detail;
