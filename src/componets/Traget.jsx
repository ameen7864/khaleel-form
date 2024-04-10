import React, { useState } from "react";

const Traget = () => {
  const [knowledge, setKnowledge] = useState(0);
  const [process, setProcess] = useState(0);
  const [metrics, setMetrics] = useState(0);
  const [adoption, setAdoption] = useState(0);
  const [automation, setAutomation] = useState(0);
  const [total, setTotal] = useState(0);
  const name = localStorage.getItem("Name");

  const handleSelectChange = (value, setterFunction) => {
    setterFunction(Number(value));
  };

  const calculateTotal = () => {
    const sum = knowledge + process + metrics + adoption + automation;
    setTotal(sum);
  };

  React.useEffect(() => {
    calculateTotal();
  }, [knowledge, process, metrics, adoption, automation]);

  return (
    <div>
      <div className="my-3 text-lg font-semibold capitalize">Target Scores for {name}</div>
      <div className="flex gap-10 p-6 w-full bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex items-center justify-center text-lg font-semibold">
          Reporting & Analytics
        </div>
        <div className="flex gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-center text-gray-900 ">
              Knowledge
            </label>
            <select
              className="bg-gray-50 border w-36 border-gray-100 capitalize  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
              onChange={(e) => handleSelectChange(e.target.value, setKnowledge)}
            >
              <option value="0">0/ No knowledge</option>
              <option value="1">1 / partial Knowledge</option>
              <option value="2">2 / developing knowledge</option>
              <option value="3">3 / full knowledge</option>
              <option value="4">4 / knowledge leader</option>
            </select>
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-center text-gray-900 ">
              Process
            </label>
            <select
              onChange={(e) => handleSelectChange(e.target.value, setProcess)}
              class="bg-gray-50 border border-gray-100 capitalize  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 "
            >
              <option value="0">0/No Process </option>
              <option value="1">1 / Implementing Process</option>
              <option value="2">2 / Developing POC Process</option>
              <option value="3">3 / Scaled Process</option>
              <option value="4">4 / Mature (Agile) Process</option>
            </select>
          </div>{" "}
          <div>
            <label class="block mb-2 text-sm font-medium text-center text-gray-900 ">
              Metrics
            </label>
            <select
              onChange={(e) => handleSelectChange(e.target.value, setMetrics)}
              class="bg-gray-50 border border-gray-100 capitalize  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 "
            >
              <option value="0">0 / No Metrics</option>
              <option value="1">1 / Identified Metrics</option>
              <option value="2">2 / Baselined Metrics</option>
              <option value="3">
                3 / Established &amp; collecting Metric Targets data
              </option>
              <option value="4">4 / Mature, Global KPIs</option>
            </select>
          </div>{" "}
          <div>
            <label class="block mb-2 text-sm font-medium text-center text-gray-900 ">
              Adoption
            </label>
            <select
              onChange={(e) => handleSelectChange(e.target.value, setAdoption)}
              class="bg-gray-50 border border-gray-100 capitalize  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 "
            >
              <option value="0">0 / No Adoption</option>
              <option value="1">1 / Siloed Adoption</option>
              <option value="2">2 / Initial Standardized Adoption</option>
              <option value="3">3 / Key Adoption</option>
              <option value="4">4 / Full Adoption</option>
            </select>
          </div>{" "}
          <div>
            <label class="block mb-2 text-sm font-medium text-center text-gray-900 ">
              Automation
            </label>
            <select
              onChange={(e) =>
                handleSelectChange(e.target.value, setAutomation)
              }
              class="bg-gray-50 border border-gray-100 capitalize  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-36 p-2.5 "
            >
              <option value="0">0 / No Automation</option>
              <option value="1">1 / Identified Automation Opportunities</option>
              <option value="2">2 / Experimental Automation</option>
              <option value="3">3 / Primary Automation</option>
              <option value="4">4 / Full Automation</option>
            </select>
          </div>{" "}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-center text-gray-900 ">
            Total
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-center text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-12 p-2.5"
            disabled
            placeholder="0"
            value={total}
          />
        </div>
      </div>
    </div>
  );
};

export default Traget;
