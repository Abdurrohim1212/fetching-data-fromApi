import React, { useEffect, useState } from "react";
import { Route, useHistory, Switch, useRouteMatch } from "react-router-dom";
import "antd/dist/antd.css";
import axios from "axios";
import { Card } from "antd";
import { BASE_API } from "../utility/constants";

function Jennie() {
  const history = useHistory();
  const { Meta } = Card;

  const match = useRouteMatch();

  function back() {
    history.goBack();
  }
  function home() {
    history.push("/");
  }
  function mamaJennie() {
    history.push(`${match.url}/mama-jennie`);
  }
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(BASE_API);
      setUser(result);
    };
    fetchData();
  }, []);

  return (
    <Switch>
      <Route path="/jennie" exact>
        <div>
          <h1>Jennie</h1>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src={
                  "https://filmdaily.co/wp-content/uploads/2020/03/Blackpink-Jennie-lede.jpg"
                }
              />
            }
          >
            <Meta
              title={"I'm Jennie Blackpink"}
              description="Blackpink In Your Area"
            />
          </Card>
          <button onClick={back}>Go back</button>
          <button onClick={home}>Go home</button>
          <button onClick={mamaJennie}>mama Jennie</button>
        </div>
      </Route>
    </Switch>
  );
}
export default Jennie;
