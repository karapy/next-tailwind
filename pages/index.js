import { useCallback, useEffect, useRef, useState } from "react";

export default function Home() {
  const [feedbacks, setFeedBacks] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/feedback");
      const resData = await res.json();
      console.log(resData);
      setFeedBacks(resData.feedbacks);
    };
    fetchData();
  }, [name]);

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    });
    const responseData = await response.json();
    console.log(responseData);
    setName("");
    if (responseData) {
      return <p>submited</p>;
    }
  };

  const deleteHandler = async (id) => {
    console.log(id)
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-slate-200 m-0">
        <div className="flex flex-col">
          <form className="w-full max-w-sm" onSubmit={formSubmitHandler}>
            <div className="flex items-center border-b border-teal-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Jane Doe"
                aria-label="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
              />
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                // type="button"
              >
                Sign Up
              </button>
              <button
                className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                // type="button"
              >
                Cancel
              </button>
            </div>
          </form>
          {/* {feedbacks.map((item)=> <p>{item.name}</p>)} */}
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Time
                </th>
                <th scope="col" class="px-6 py-3">
                  id
                </th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((item, index) => 
                <tr
                  key={item.id}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-slate-300"}`}
                  onClick={deleteHandler.bind(null, item.id)}
                  // className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.name.toUpperCase()}
                  </th>
                  <td className="px-6 py-4">{new Date(item.timestamp).getHours() + ':' + new Date(item.timestamp).getMinutes()}</td>
                  <td className="px-6 py-4">{item.id.slice(0, 7)}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
