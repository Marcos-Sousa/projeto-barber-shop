import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar } from "./_components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Marcos</h2>
        <p>Sexta feria, dia 2</p>

        <div className="mt-6 flex-center flex gap-2">
          <Input placeholder="Faça sua busca"></Input>
          <Button size="icon">
            <SearchIcon></SearchIcon>
          </Button>
        </div>

        <div className="relative w-full h-[150px] mt-6 ">
          <Image
            src="/banner-01.png"
            fill
            className="object-cover rounded-xl"
            alt="imagem"
          />
        </div>

        <h2 className="font-semibold mt-6 mb-3">Agendamento</h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="flex items-center justify-center">
                Confirmado
              </Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex flex-items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Fervereiro</p>
              <p className="text-2xl">03</p>
              <p className="text-sm">20:00h</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
