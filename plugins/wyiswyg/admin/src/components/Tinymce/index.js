import React from "react";
import PropTypes from "prop-types";
import { Editor } from "@tinymce/tinymce-react";

const TinyEditor = ({ onChange, name, value }) => {
  return (
    <Editor
      apiKey="vk68lmy0slqdnu22qxirovozmy8cf99jtjr52s2d64il7762"
      value={value}
      tagName={name}
      onEditorChange={editorContent => {
        onChange({ target: { name, value: editorContent } });
      }}
      outputFormat="html"
      init={{ 
        selector: "textarea",
        plugins: 'fullscreen insertdatetime',
        toolbar: 'code numlist bullist'
      }}
    />
  );
};
TinyEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string
};
export default TinyEditor;
