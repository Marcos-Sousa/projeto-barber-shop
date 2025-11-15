import {
  CalendarHeartIcon,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
} from "lucide-react";
import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import { quickSearchOptions } from "../_constants/search";
import Image from "next/image";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { Button } from "./ui/button";

const SidebarButton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon></MenuIcon>
        </Button>
      </SheetTrigger>

      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>

          <div className="py-5 border-b flex items-center border-solid">
            <Avatar>
              <AvatarImage src="/google.svg" alt="User Avatar" />
            </Avatar>

            <div className="flex flex-col ml-6 float-start ">
              <span className="font-bold text-left">Marcos Silva</span>
              <span className="text-sm text-gray-500">marcos@gmail.com</span>
            </div>
          </div>
        </SheetHeader>

        <div className="py-5 flex flex-col border-b gap-4">
          <SheetClose asChild>
            <Link href="/">
              <Button className="gap-2 justify-start" variant="ghost">
                <HomeIcon size={18}></HomeIcon>
                Inicio
              </Button>
            </Link>
          </SheetClose>

          <Button className="gap-2 justify-start" variant="ghost">
            <CalendarHeartIcon></CalendarHeartIcon>
            Agendamento
          </Button>
        </div>

        <div className="flex flex-col gap-2 border-solid py-5 border-b">
          {quickSearchOptions.map((serch) => (
            <Button
              key={serch.title}
              className="gap-2 justify-start"
              variant="secondary"
            >
              <Image
                alt={serch.title}
                src={serch.imageUrl}
                width={18}
                height={18}
              ></Image>
              {serch.title}
            </Button>
          ))}
        </div>

        <div className="gap-2 float-start flex flex-col py-5">
          <Button className="justify-content" variant="ghost">
            <LogOutIcon width={18} height={18}></LogOutIcon>
            Sair da conta
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarButton;
