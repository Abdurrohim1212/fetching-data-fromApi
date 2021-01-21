import React from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import "antd/dist/antd.css";

import { Card } from "antd";
function Jisoo() {
  const history = useHistory();
  const { Meta } = Card;
  function back() {
    history.goBack();
  }
  function home() {
    history.push("/");
  }
  return (
    <Switch>
      <Route path="/jisoo" exact>
        <div>
          <h1>Jisoo</h1>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src={
                  "https://cdn-2.tstatic.net/newsmaker/foto/bank/images/jisoo-blackpink.jpg"
                }
              />
            }
          >
            <Meta
              title={"I'm Jisoo Blackpink"}
              description="Blackpink In Your Area"
            />
          </Card>
          <button onClick={back}>Go back</button>
          <button onClick={home}>Go home</button>
        </div>
      </Route>
    </Switch>
  );
}
export default Jisoo;
