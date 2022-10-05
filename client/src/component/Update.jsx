import axios from "axios";
import { React, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
 const [title, setTitle] = useState("");
 const [content, setContent] = useState("");
 const navigate = useNavigate();
 //url로 넘어온 파라미터를 받음
 const { id } = useParams();

 const updateArticle = async (e) => {
  e.preventDefault();
  const doCreate = await axios({
   url: `http://localhost:5000/update`,
   method: "POST",
   data: {
    id,
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
   <form onSubmit={(e) => updateArticle(e)}>
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

export default Update;
