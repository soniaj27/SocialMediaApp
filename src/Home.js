import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from './redux/actions/actions';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='container'  style={{display: "flex", flexWrap: "wrap", gap: "10px", justifyContent:"center"}}>
          {data.map((item) => (
            <div key={item.id} style={{width: "170px", border: "1px solid white", padding: "0 5px 5px 5px "}}>
            <Link to={`/item/${item.id}`}>
                {/* Updated imgSrc with random image URL */}
                <img
                    src={"https://picsum.photos/200?random=${item.id}"} 
                    alt="Post Img"
                    style={{width: "100%", height: "120px"}}
                  />
                </Link>
                <p>User ID: {item.userId}</p>
                <p>ID: {item.id}</p>
                <p>Title: {item.title.slice(0,10)}</p>
                <p>Body: {item.body.slice(0,30)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
