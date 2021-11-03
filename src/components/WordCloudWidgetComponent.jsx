import React from 'react';
import { Component, createElement, render } from "react";
import 'core-js';
import WordCloud from "react-d3-cloud";




export default function WordCloudWidgetComponent(props) {
  
  const data = props.inputData;
  const fontSizeMapper = word => Math.log2(word.value) * 5;
  const rotate = word => (Math.floor(Math.random() * 2) * 90);
  const onClickHandle = (text) => {
    
    (props.onClickAction.canExecute && !props.onClickAction.isExecuting)
    
    {
      props.chosenWord.setValue(text);
      props.onClickAction.execute();
    }
  };

  return (

    <WordCloud data={data} fontSizeMapper={fontSizeMapper} rotate={rotate} onWordClick={(event, word) => onClickHandle(word.text)} />

  );
}