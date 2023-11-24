import React from "react";
import { Table } from "@radix-ui/themes";
import Link from "next/link";
import { GrBasket, GrEdit } from "react-icons/gr";
import { supabase } from "@/app/config/supabaseConf";
import Image from "next/image";

interface Products {
  id: number;
  libelle: string;
  prix: number;
  isDisponible: boolean;
  image: string;
}

const getProducts = async () => {
  const products = await supabase.from("Produit").select();
  return products.data;
};

export default async function Tableau() {
  const products = await getProducts();
  console.log(products);

  return (
    <div className="mb-10 ml-20">
      <div className="mt-8">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Libelle</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Prix</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Image</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {products?.map((product: Products) => (
              <Table.Row>
                <Table.RowHeaderCell>{product?.id}</Table.RowHeaderCell>
                <Table.Cell>{product?.libelle}</Table.Cell>
                <Table.Cell>{product?.prix}</Table.Cell>
                <Table.Cell>
                  <Image
                    alt="image"
                    src={
                      "https://whefdfcgusuyqfvupico.supabase.co/storage/v1/object/public/avatar/" +
                      product?.image
                    }
                    width={20}
                    height={20}
                  />
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center space-x-4">
                    <Link
                      className="cursor-pointer bg-blue-500 text-white p-2 rounded"
                      href={`/admin/edit/${product?.id}`}
                    >
                      <GrEdit size={20} />
                    </Link>
                    <Link
                      className="cursor-pointer bg-red-500 text-white p-2 rounded"
                      href={`/admin/delete/${product?.id}`}
                    >
                      <GrBasket size={20} />
                    </Link>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
}
