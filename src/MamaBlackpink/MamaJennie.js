import React from "react";
import { Route, useHistory, Switch, useRouteMatch } from "react-router-dom";
function MamaJennie() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/mama-jennie`}>
        <div>
          <h1>Mama Jennie</h1>
        </div>
      </Route>
    </Switch>
  );
}
export default MamaJennie;
