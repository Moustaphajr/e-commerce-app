"use client";
import { Dialog, Flex, TextField, Text, Button } from "@radix-ui/themes";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import React from "react";
import Addbutton from "./ui/addbutton";
import Input from "./ui/input";
import Searchbutton from "./ui/searchbutton";
import AddProduct from "./actions/AddProduct";
import "@/app/admin/style.module.css";

export default function FormUi() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="mt-10 flex justify-center">
          <div className="flex items-center space-x-2 md:mr-8 ">
            <Addbutton />
            <Input />
            <Searchbutton />
          </div>
        </div>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Add Product</Dialog.Title>

        <form action={AddProduct}>
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1">
                libelle
              </Text>
              <TextField.Input
                defaultValue=""
                placeholder="Enter your libelle"
                name="libelle"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1">
                prix
              </Text>
              <TextField.Input
                defaultValue=""
                placeholder="Enter the price"
                name="prix"
              />
            </label>
            <label className="flex items-center space-x-2">
              <Checkbox.Root
                className="border border-gray-400 rounded-md"
                id="c1"
                defaultChecked
                name="isDisponible"
              >
                <Checkbox.Indicator className="CheckboxIndicator">
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <Text as="div" size="2" mb="1">
                Disponible
              </Text>
            </label>
            <label>
              <Text as="div" size="2" mb="1">
                Image
              </Text>
              <input
                className="border border-gray-400 rounded-md"
                type="file"
                accept="image/*"
                name="image"
              />
            </label>
          </Flex>
          <Flex gap="3" mt="4" justify="end">
            <Button type="submit">Save</Button>
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
