// import FetchComponent from "./fetch-component/FetchComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./ProjectComponents/HeaderComponent";
import FacebookComponent from "./meta/FacebookComponent";
import PracticeComponent from "./practice-component/PracticeComponent";
import DefaultComponent from "./RouteComponents/DefaultComponent/DefaultComponent";
import { ChildComponent } from "./RouteComponents/ChildComponent/ChildComponent";
import DynamicComponent from "./DynamicComponents/DynamicComponent";
import TextStyleDynamic from "./DynamicComponents/TextStyleDynamic";
import InputPhoneComponent from "./InputPhoneComponent/InputPhoneComponent";
import CarouselComponent from "./CarouselComponent/CarouselComponent";
import SsrComponent from "./SSRComponents/SsrComponent";
import DatePickerComponent from "./DatePickerComponent/DatePickerComponent";
import LocationComponent from "./LocationComponet/LocationComponent";
import LocationCard from "./LocationComponet/MapComponent";
import MapComponent from "./LocationComponet/MapComponent";

function App() {
  return (
    <>
      {/* <HeaderComponent /> */}
      {/* <FacebookComponent /> */}
      {/* <FetchComponent /> */}
      {/* <PracticeComponent /> */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<DefaultComponent />} />
          <Route path="/child" element={<ChildComponent />} />
        </Routes>
      </Router> */}
      {/* <DynamicComponent /> */}
      {/* <TextStyleDynamic /> */}
      {/* <InputPhoneComponent /> */}
      {/* <CarouselComponent /> */}
      {/* <SsrComponent /> */}
      {/* <DatePickerComponent /> */}
      {/* <LocationComponent /> */}
      <MapComponent />
    </>
  );
}

export default App;
