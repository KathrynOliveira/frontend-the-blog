"use client";

import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useState } from "react";
import { ImageUploader } from "../ImageUploader";

export function ManagePostForm() {
  const [contentValue, setContetValue] = useState("");
  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText labelText="Nome" placeholder="Digite seu nome" />
        <InputText
          labelText="Sobrenome"
          placeholder="Digite seu sobrenome"
          defaultValue="Olá Mundo!"
          disabled
        />
              <InputCheckbox labelText="Sobrenome" />
              
              <ImageUploader />

        <MarkdownEditor
          labelText="Conteúdo"
          disabled={false}
          textAreaName="content"
          value={contentValue}
          setValue={setContetValue}
        />

        <div className="mt-4">
          <Button type="submit" size="md" className="w-full">
            Enviar
          </Button>
        </div>
      </div>
    </form>
  );
}
