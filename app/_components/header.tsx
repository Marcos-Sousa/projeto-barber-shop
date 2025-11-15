import SidebarButton from "./sidebar-button";
import { Card, CardContent } from "./ui/card";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 flex flex-row items-center justify-between">
        <img src="/logo.png" height={18} width={120} alt="FSW Barbr" />

        <SidebarButton></SidebarButton>
      </CardContent>
    </Card>
  );
};

export default Header;
