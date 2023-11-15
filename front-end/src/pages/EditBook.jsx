import React, { useState, useEffect } from "react";
//import { useEffect } from "react";
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [tittle, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setpublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setpublishYear(response.data.publishYear);
        setTitle(response.data.tittle);
        setLoading(false);
      })
      .catch((error) => 
        {
        setLoading(false);
        alert("an error occured! please check the console");
        console.log(error);
      });
  }, []);
  const handleEditBook = () => {
    const data = {
      tittle,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        //enqueueSnackbar("Book Edited successfully", { variant: "success" });
        navigate("/");
      })
      .catch(() => {
        setLoading(false);
        //alert("An error occured! please check the console");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(Error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={tittle}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">publishYear</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setpublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;

// import React, { useState, useEffect } from "react";
// import BackButton from "../components/BackButton.jsx";
// import Spinner from "../components/Spinner.jsx";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import { useSnackbar } from "notistack";

// const EditBook = () => {
//   const [tittle, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [publishYear, setpublishYear] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const { enqueueSnackbar } = useSnackbar();

//   useEffect(() => {
//     let isMounted = true;

//     setLoading(true);
//     axios
//       .get(`http://localhost:5555/books/${id}`)
//       .then((response) => {
//         if (isMounted) {
//           setAuthor(response.data.author);
//           setpublishYear(response.data.publishYear);
//           setTitle(response.data.tittle);
//           setLoading(false);
//         }
//       })
//       .catch((error) => {
//         if (isMounted) {
//           setLoading(false);
//           enqueueSnackbar("An error occurred! Please check the console", {
//             variant: "error",
//           });
//           console.error(error);
//         }
//       });

//     return () => {
//       isMounted = false;
//     };
//   }, [id, enqueueSnackbar]);

//   const handleEditBook = () => {
//     const data = {
//       tittle,
//       author,
//       publishYear,
//     };
//     setLoading(true);
//     axios
//       .put(`http://localhost:5555/books/${id}`, data)
//       .then(() => {
//         setLoading(false);
//         enqueueSnackbar("Book Edited successfully", { variant: "success" });
//         navigate("/");
//       })
//       .catch(() => {
//         setLoading(false);
//         enqueueSnackbar("Error", { variant: "error" });
//         console.log(Error);
//       });
//   };

//   return (
//     <div className="p-4">
//       <BackButton />
//       <h1 className="text-3xl my-4">Edit Book</h1>
//       {loading ? <Spinner /> : ""}
//       <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
//         <div className="my-4">
//           <label className="text-xl mr-4 text-gray-500">Title</label>
//           <input
//             type="text"
//             value={tittle}
//             onChange={(e) => setTitle(e.target.value)}
//             className="border-2 border-gray-500 px-4 py-2 w-full"
//           />
//         </div>
//         <div className="my-4">
//           <label className="text-xl mr-4 text-gray-500">Author</label>
//           <input
//             type="text"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             className="border-2 border-gray-500 px-4 py-2 w-full"
//           />
//         </div>
//         <div className="my-4">
//           <label className="text-xl mr-4 text-gray-500">publishYear</label>
//           <input
//             type="number"
//             value={publishYear}
//             onChange={(e) => setpublishYear(e.target.value)}
//             className="border-2 border-gray-500 px-4 py-2 w-full"
//           />
//         </div>
//         <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
//           Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EditBook;
