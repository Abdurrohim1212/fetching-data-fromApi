import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "../index.css";
import { Card } from "antd";

const ContributorDetail = () => {
  const [person, setPerson] = useState([]);
  const [total, setTotal] = useState(0);
  const { Meta } = Card;
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const result = await axios(`https://reqres.in/api/users/${id}`);
      setPerson(result.data.data);
    };
    const getTotal = async () => {
      const result = await axios(`https://reqres.in/api/users/`);
      //   console.log("Jumlah data", result);
      setTotal(result.data.total);
    };
    getData();
    getTotal();
    console.log(id);
  }, [id]);
  const prevID = person.id === 1 ? total : person.id - 1;
  const nextID = person.id === total ? 1 : person.id + 1;

  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={person.avatar} />}
      >
        <Meta title={person.firts_name} description={person.last_name} />
      </Card>

      <div className="namaKu">
        <Link to={`./${prevID}`}>
          <span>PREV</span>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to={`./${nextID}`}>
          <span>NEXT</span>
        </Link>
      </div>
    </div>
  );
};

export default ContributorDetail;
