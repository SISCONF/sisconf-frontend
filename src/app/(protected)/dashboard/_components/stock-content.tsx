import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Quantity from "@/components/quantity";
import Image from "next/image";

import FoodPlaceholderImage from "/public/assets/food-placeholder.jpg";

export default function StockContent() {
  return (
    <div className="border border-black px-[3rem] py-[3rem]">
      <Table className="text-[0.875rem]">
        <TableCaption>Comidas que estão no seu estoque.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Comida</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Quantidade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
            <TableRow>
              <TableCell>{id}</TableCell>
              <TableCell>
                <div className="flex gap-[1rem] items-center">
                  <div className="w-[6.875rem] rounded-lg inline-block">
                    <Image
                      src={FoodPlaceholderImage}
                      alt="a red apple in a gray background."
                      className="rounded-lg"
                    />
                  </div>
                  <span>Maçã</span>
                </div>
              </TableCell>
              <TableCell>Fruta</TableCell>
              <TableCell>
                <Quantity />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
