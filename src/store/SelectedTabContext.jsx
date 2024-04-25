import { createContext } from "react";

const SelectedTabContext = createContext({
    selectedTab: "",
    setSelectedTab: () => {},
});
export default SelectedTabContext;