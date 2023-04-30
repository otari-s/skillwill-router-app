import React from "react";
import { useParams } from "react-router-dom";

const data = {
  fact1: "He co-founded the much-influenced rock band Public",
  fact2:
    " He was born on February 25, 1954 in Decatur and was never positively identified despite attempts to do so",
  fact3:
    "He played with and performed on two albums with the punk rock band The Flesh Eaters in the 1980s.",
};

function Facts() {
  const { factId } = useParams();
  if (data[factId]) return <div>{data[factId]}</div>;
  return <div>Page was not found</div>;
}

export default Facts;
