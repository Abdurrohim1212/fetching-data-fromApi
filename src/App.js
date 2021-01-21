import React, { useState, useEffect } from "react";
import { useHistory, Route, Switch, Link } from "react-router-dom";
import Jennie from "./pages/Jennie.js";
import Rose from "./pages/Rose.js";
import Lisa from "./pages/Lisa.js";
import Jisoo from "./pages/Jisoo.js";
import "antd/dist/antd.css";
import "./index.css";
import { Card } from "antd";
import DetailPerson from "./pages/DetailPerson";

import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  const history = useHistory();
  const { Meta } = Card;
  const [jennie, setJennie] = useState(false);
  const [rose, setRose] = useState(false);
  const [lisa, setLisa] = useState(false);
  const [jisoo, setJisoo] = useState(false);

  function ubahJennie() {
    setJennie(!jennie);
    history.push("/jennie");
  }
  function ubahRose() {
    setRose(!rose);
    history.push("/rose");
  }
  function ubahLisa() {
    setLisa(!lisa);
    history.push("/lisa");
  }
  function ubahJisoo() {
    setJisoo(!jisoo);
    history.push("/jisoo");
  }
  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((response) => {
      setData(response.data.data);
    });
  }, []);

  return (
    <div className="anggota-blackpink">
      <Switch>
        <Route path="/" exact>
          {data.map((item, index) => (
            <Link to={`/detail-person/${item.id}`}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img onClick={ubahJennie} alt="example" src={item.avatar} />
                }
              >
                <Meta title={item.first_name} description={item.last_name} />
              </Card>
            </Link>
          ))}
        </Route>
        <Route path="/detail-person/:id">
          <DetailPerson />
        </Route>
      </Switch>

      {/* <Route path="/jennie" component={Jennie} />

      <Route path="/rose" component={Rose} />

      <Route path="/lisa" component={Lisa} />

      <Route path="/jisoo" component={Jisoo} /> */}
    </div>
  );
}
