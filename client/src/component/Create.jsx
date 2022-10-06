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
<>
<h1 className="flex items-center justify-center p-4 -mb-10 text-3xl">작성해요</h1>
    <div className="flex items-center justify-center p-12">
    <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={(e) => createArticle(e)}>
        <div className="mb-5">
            <label
            htmlFor="subject"
            className="mb-3 block text-base font-medium text-[#07074D]"
            >
            제목
            </label>
            <input
            type="text"
            placeholder="제목을 입력하시오"
            value = {title}
            onChange={(e) => {setTitle(e.target.value)}}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
        </div>
        <div className="mb-5">
            <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-[#07074D]"
            >
            내용
            </label>
            <textarea
            rows="4"
            placeholder="내용을 입력하시오"
            value = {content}
            onChange={(e) => {setContent(e.target.value)}}
            className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
        </div>
        <div>
            <button
            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
            Submit
            </button>
        </div>
        </form>
    </div>
    </div>
</>
 );
};

export default Create;
