"use server";

import { supabase } from "@/app/config/supabaseConf";

export default async function AddProduct(formData: FormData) {
  const libelle = formData.get("libelle");
  const price = formData.get("prix");
  const isdisponible = formData.get("isDisponible");
  const file = formData.get("image") as File;

  const { data, error } = await supabase.storage
    .from("avatar")
    .upload("public/" + file?.name, file as File);

  if (error) {
    console.log(error);
  }
  const result = await supabase.from("Produit").insert({
    libelle: libelle,
    prix: price,
    isDisponible: isdisponible,
    image: data?.path,
  });

  if (result) {
    console.log(result);
  }
}
