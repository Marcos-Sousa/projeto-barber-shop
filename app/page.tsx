import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import { quickSearchOptions } from "./_constants/search";
import BookinkItem from "./_components/booking-item";

const Home = async () => {
  const barbeshops = await db.barbershop.findMany({});
  const popularsBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });
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

        <div className="flex gap-3 mt-6 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((serch) => (
            <Button key={serch.title} className="gap-2" variant="secondary">
              <Image
                alt={serch.title}
                src={serch.imageUrl}
                width={16}
                height={16}
              ></Image>
              {serch.title}
            </Button>
          ))}
        </div>

        <div className="relative w-full h-[150px] mt-6 ">
          <Image
            src="/banner-01.png"
            fill
            className="object-cover rounded-xl"
            alt="imagem"
          />
        </div>
        <BookinkItem></BookinkItem>

        <h2 className="font-bold mt-6 mb-3 text-xm text-gray-400 ">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbeshops.map((barbershop) => (
            <BarbershopItem
              key={barbershop.id}
              barbershop={barbershop}
            ></BarbershopItem>
          ))}
        </div>

        <h2 className="font-bold mt-6 mb-3 text-xm text-gray-400 ">
          Populares
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularsBarbershops.map((barbershop) => (
            <BarbershopItem
              key={barbershop.id}
              barbershop={barbershop}
            ></BarbershopItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
