import React, { Component } from "react";
import { render } from "react-dom";
import Form from "react-jsonschema-form";

const log = (type) => console.log.bind(console, type);

const schema = {
    title: "User",
    type: "object",
    required: ["title"],
    properties: {
      title: {type: "string", title: "Title", default: "A new task 1"},
      done: {type: "boolean", title: "Done?", default: true}
    }
  };
  
render((
  <Form schema={schema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
), document.getElementById("app"));