import React, { useState, useEffect } from "react";
import axios from "axios";

const EmailEditor = () => {
  const [template, setTemplate] = useState(""); // Store the fetched HTML template
  const [editableData, setEditableData] = useState({}); // Store editable fields

  // Fetch the template from the backend
  useEffect(() => {
    axios.get("http://localhost:8080/getupload/cfb85cd3-2bf8-4e53-8921-28f9981ccc74")
      .then(response => {
        setTemplate(response.data);
        extractEditableData(response.data); // Extract placeholders
      })
      .catch(error => console.error("Error fetching template:", error));
  }, []);

  // Extract initial placeholders into the editableData object
  const extractEditableData = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Define selectors for editable fields
    const editableElements = doc.querySelectorAll("[data-editable]");
    const data = {};
    editableElements.forEach((el) => {
      const field = el.getAttribute("data-editable");
      data[field] = el.innerHTML; // Store initial content
    });

    setEditableData(data);
  };

  // Update editable data state
  const handleFieldChange = (field, value) => {
    setEditableData((prev) => ({ ...prev, [field]: value }));
  };

  // Save the updated template to the backend
  const saveTemplate = () => {
    axios.post("/uploadEmailConfig", editableData)
      .then(() => alert("Template saved successfully!"))
      .catch(error => console.error("Error saving template:", error));
  };

  return (
    <div>
      {/* Render the dynamic template */}
      <div
        dangerouslySetInnerHTML={{
          __html: template.replace(/data-editable="(\w+)"/g, (match, field) => {
            return `contenteditable="true" onBlur="this.dispatchEvent(new CustomEvent('fieldChange', { detail: { field: '${field}', value: this.innerText }}))"`;
          }),
        }}
        onFieldChange={(e) => handleFieldChange(e.detail.field, e.detail.value)}
      />

      <button onClick={saveTemplate}>Save Template</button>
    </div>
  );
};

export default EmailEditor;
