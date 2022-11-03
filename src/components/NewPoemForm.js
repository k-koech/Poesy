import React, { useState } from "react";

function NewPoemForm({ handleNewPoem }) {

const [formData, setFormData] = useState({
  title: "",
  author: "",
  content: ""
})

function handleFormChange(event){
  const fomrName = event.target.name
  let value = event.target.value

  setFormData({...formData,
  [fomrName]:value
  })
}

function handleSubmit(event){
  event.preventDefault()
  handleNewPoem(formData)
  setFormData({
    title: "",
    author: "",
    content: ""
  })
}

  return (
    <form onSubmit={handleSubmit} className="new-poem-form">
      <input onChange={handleFormChange} value={formData.title} name="title" placeholder="Title" />
      <input onChange={handleFormChange} value={formData.author} name="author" placeholder="Author" />
      <textarea onChange={handleFormChange} value={formData.content} name="content" placeholder="Write your masterpiece here..." rows={10} />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
