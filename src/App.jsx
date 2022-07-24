import { For, lazy } from "solid-js";
import { Router, Route, Routes, useParams } from "solid-app-router";

import Nav from "./components/Nav";
const routes = [
  {
    path: "/",
    component: lazy(() => import("./views/Home")),
  },
  {
    path: "/about",
    component: lazy(() => import("./views/About")),
  },
  {
    path: "/testing/:id",
    component: lazy(() => import("./views/Testing")),
  },
  {
    path: "*all",
    component: lazy(() => import("./views/NotFound")),
  },
];

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<div>This si</div>} /> */}
        {/* <Route path={routes[1].path} component={routes[1].component}/> */}
        <For each={routes} fallback={<div>Loading...</div>}>
          {(item) => <Route path={item.path} component={item.component} />}
        </For>
        <Route path="foo/*any" element={<div>{useParams().any}</div>} />
        {/* <Route path="testing/:id" component={params.id} /> */}
      </Routes>
    </Router>
  );
};

export default App;
