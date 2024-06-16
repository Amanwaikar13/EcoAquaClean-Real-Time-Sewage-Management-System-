import React, { Component, useEffect, useState } from "react";

export default function Home() {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return <h1>Home Page</h1>
}