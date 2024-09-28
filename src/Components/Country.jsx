/* eslint-disable */
// @ts-nocheck
// import {country} from '../data/data.js'

export default function Country({ name, capital, isIsland }) {
  let islandText= ''

  if (isIsland) {
    islandText = "it is an island";
  } else {
    islandText = "it is not an island";
  }

  return (
    <p>
      The country is {name}, the capital is {capital}, and {islandText}.
    </p>
  );
}