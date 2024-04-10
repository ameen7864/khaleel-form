import React, { useState } from "react";

const Assesment = () => {
  const [groupName, setGroupName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!groupName.trim()) {
      setErrorMessage("Please enter a group name");
    } else {
      window.location.href = "/cards";
      localStorage.setItem("Name", groupName);
    }
  };

  const handleInputChange = (event) => {
    setGroupName(event.target.value);
    setErrorMessage("");
  };

  return (
    <div>
      <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
        <form className="flex gap-4" onSubmit={handleFormSubmit}>
          <div className="w-96">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Group Name:
              </label>
              <input
                type="text"
                value={groupName}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Centralized FinOps Team"
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 mt-7 hover:bg-blue-800 focus:ring-4 h-10 capitalize focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Get Started
          </button>
        </form>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Assesment;
