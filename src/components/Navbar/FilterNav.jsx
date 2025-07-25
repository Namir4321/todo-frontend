import DropDown from "./DropDown";
import ToggleButton from "./ToggleButton";
import SearchInput from "./SearchInput";
const FilterNav = () => {
  return (
    <div className="flex mt-4 justify-between items-center">
      <div className="flex w-full gap-1">
     
        <DropDown heading="Projects" arraylist={["one", "two", "three"]} />
        {/* <DropDown heading="Users" arraylist={["one", "tow", "three"]} /> */}
        <DropDown heading="Tags" arraylist={["Moderate-Priority", "High-Priority","Low-Priority"]} />
      </div>
      <div className=" w-full flex justify-end items-center">
        <SearchInput />
      </div>
    </div>
  );
};

export default FilterNav;
