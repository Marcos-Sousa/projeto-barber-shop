import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {MenuIcon} from 'lucide-react';

const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 flex flex-row items-center justify-between">
                <img src="/logo.png" height={18} width={120} alt="FSW Barbr"></img>
                <Button size="icon" variant="outline">
                    <MenuIcon></MenuIcon>
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;