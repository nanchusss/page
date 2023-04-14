import { configureStore } from "@reduxjs/toolkit";
import {
  Provider as ReduxProvider,
  useSelector,
  useDispatch,
} from "react-redux";
import user from "./user";

const store = configureStore({ reducer: { user } });

const Provider = ({ children }) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
);

export { Provider, useSelector, useDispatch };
