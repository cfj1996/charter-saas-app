import React from "react"
import "./App.less"
import { hot } from "react-hot-loader/root"
import AppRouter from "./router/AppRouter"

function App() {
  return <AppRouter />
}

export default process.env.NODE_ENV === "development" ? hot(App) : App
