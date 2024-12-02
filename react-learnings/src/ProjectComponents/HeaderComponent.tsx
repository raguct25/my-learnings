import logo from "../assets/copper.png";
import { RxExternalLink } from "react-icons/rx";
import { PLAN_DETAILS, WHATSAPP_API_STATUS } from "../helpers/constant";

const HeaderComponent = () => {
  const applyNow = () => {
    console.log("apply now called");
  };
  const upgradeNow = () => {
    console.log("upgrade now called");
  };

  return (
    <header className="bg-white shadow-md">
      <div className="flex py-4 justify-between max-md:flex-col">
        <img src={logo} alt="logo" className="w-20 ml-4  max-md:h-14" />
        <div className="flex mr-2 max-md:flex-col max-md:ml-6">
          <div className="flex mr-2 max-md:mt-4 max-md:flex-col">
            <p className="flex items-center mr-2 text-gray-400 font-bold max-md:text-sm">
              Whatsapp Business API Status :{" "}
              <span
                className={`${WHATSAPP_API_STATUS.textColor} ml-2 font-bold`}
              >
                {WHATSAPP_API_STATUS.status}
              </span>
            </p>
            <button
              className="flex items-center bg-green-500 text-white font-medium  max-md:py-1  max-md:px-2 py-2 px-4 rounded-md hover:bg-green-700 transition duration-200 max-md:justify-center max-md:mt-2"
              onClick={applyNow}
            >
              <RxExternalLink className="h-5 w-5" />
              <span className="ml-1">Apply Now</span>
            </button>
          </div>
          <div className="flex max-md:mt-4 max-md:flex-col">
            <p className="flex items-center mr-2 text-gray-400 font-bold max-md:text-sm">
              Current Plan :{" "}
              <span className={`${PLAN_DETAILS.textColor} ml-2 font-bold`}>
                {PLAN_DETAILS.Plan}
              </span>
            </p>
            <button
              className="flex items-center bg-fuchsia-800 text-white font-medium py-2 px-4 max-md:py-1  max-md:px-2 rounded-md hover:bg-fuchsia-900 transition duration-200 max-md:justify-center max-md:mt-2"
              onClick={upgradeNow}
            >
              <span>Upgrade Now</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
