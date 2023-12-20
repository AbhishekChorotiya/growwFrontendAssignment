import React from "react";
import Successful from "./success";
import Pending from "./pending";
import Failed from "./failed";

const Confirm = () => {
  var arr = [1, 1, 1, 1, 3, 2, 2, 2, 3, 3];
  var random_no = Math.floor(Math.random() * 10);

  return arr[random_no] == 1 ? (
    <Successful />
  ) : arr[random_no] == 2 ? (
    <Pending />
  ) : (
    <Failed />
  );
};

export default Confirm;
