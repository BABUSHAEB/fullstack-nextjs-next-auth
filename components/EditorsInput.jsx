"use client";
import { Editor } from "@tinymce/tinymce-react";
import Script from "next/script";
import React, { useRef } from "react";

function EditorsInput({ formData = {}, setFormData }) {
  const editorRef = useRef(null);

  const handleEditorChange = (content, editor) => {
    setFormData({ ...formData, blogdetails: content });
  };
  return (
    <div>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        // there's a known issue with how tinymce works where the intialValue and value
        // come into conflict when using useState. tinymce recommend removing initialValue
        // and setting the initial value as the the default state value i.e. formData.description
        // is set to the placeholder text instead of just an empty string
        // initialValue="<p>This is the initial content of the editor.</p>"
        apiKey={process.env.TINYMCE_APIKEY}
        init={{
          height: 500,
          menubar: true,
          plugins:
            "advlist autolink lists link image charmap preview anchor " +
            "searchreplace visualblocks code fullscreen " +
            "insertdatetime media table code help wordcount",
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          codesample_languages: [
            { text: "HTML/XML", value: "markup" },
            { text: "JavaScript", value: "javascript" },
            { text: "CSS", value: "css" },
            { text: "PHP", value: "php" },
            { text: "Ruby", value: "ruby" },
            { text: "Python", value: "python" },
            { text: "Java", value: "java" },
            { text: "C", value: "c" },
            { text: "C#", value: "csharp" },
            { text: "C++", value: "cpp" },
          ],
        }}
        value={formData.blogdetails}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
}

export default EditorsInput;
