import React from "react";

const Cards = () => {
  return (
    <>
      <div className="flex gap-4 flex-wrap justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div className="block p-6 w-96 bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex justify-between">
              <div className=" text-base font-semibold text-black mb-3">
                Allocation
              </div>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              Define strategies to assign and share cloud costs using accounts,
              tags, labels, and other metadata, creating accountability among
              teams and projects within an organization.
            </div>
            <div className=" text-sm font-medium text-green-500 my-4">
              Read More
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-8 ">
        <a
          href="/"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Prev
        </a>
        <a
          href="/target"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-100 focus:outline-none bg-black rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
        >
          Next
        </a>
      </div>
    </>
  );
};

export default Cards;
