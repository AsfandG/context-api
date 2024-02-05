import { useState } from "react";
import Card from "./components/Card";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
import { ThemeProvider } from "./context/ThemeContext";
import ToggleButton from "./components/ToggleButton";

export default function App() {
  return (
    <ThemeProvider>
      <UserContextProvider>
        {/* <Login />
        <Profile /> */}
        <ToggleButton />
        <Card />
      </UserContextProvider>
    </ThemeProvider>
  );
}
