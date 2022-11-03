import React, { useState } from "react";

function Poem({title, content, author}) {
  const [isRead, setIsRead] = useState(false)

  function handleIsRead(){
    setIsRead(isRead => !isRead)
  }
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={handleIsRead}>Mark as {isRead? "unread" : "read"}</button>
    </div>
  );
}

export default Poem;
