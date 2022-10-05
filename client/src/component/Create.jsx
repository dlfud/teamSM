import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
 const [title, setTitle] = useState("");
 const [content, setContent] = useState("");
 const navigate = useNavigate();

 const createArticle = async (e) => {
  e.preventDefault();
  const doCreate = await axios({
   url: `http://localhost:5000/create`,
   method: "POST",
   data: {
    title,
    content,
   },
  });
  if (doCreate.data === "success") {
   navigate("/read");
  } else {
   alert("통신실패!");
  }
 };
 return (
  <div>
   <form onSubmit={(e) => createArticle(e)}>
    <div>
     <p>제목 :</p>
     <input
      type="text"
      value={title}
      onChange={(e) => {
       setTitle(e.target.value);
      }}
     />
    </div>
    <div>
     <p>내용 :</p>
     <textarea
      type="text"
      value={content}
      onChange={(e) => {
       setContent(e.target.value);
      }}
     />
    </div>
    <div>
     <button type="submit">제출하기</button>
    </div>
   </form>
  </div>
 );
};

export default Create;
