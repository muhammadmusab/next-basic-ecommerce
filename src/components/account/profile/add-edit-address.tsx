"use client";
import React from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/modal";
import * as yup from "yup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/form/input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as actions from "@/actions";
const addressSchema = yup.object({
  name: yup.string().required("Required"),
  address1: yup.string().required("Required"),
  address2: yup.string(),
  city: yup.string().required("Required"),
  country: yup.string().required("Required"),
  postalCode: yup.string().required("Required"),
  phone: yup.string().required("Required"),
});

const AddEditAddress = ({
  mode,
  triggerButtonClass,
}: {
  mode: "add" | "edit";
  triggerButtonClass?: string;
}) => {
  const form = useForm({
    resolver: yupResolver(addressSchema),
    defaultValues: {
      name: "",
      address1: "",
      address2: "",
      city: "",
      country: "",
      postalCode: "",
      phone: "",
    },
  });
  const inputs = [
    {
      name: "name",
      inputClass: "",
      placeholder: "Name",
    },
    {
      name: "address1",
      inputClass: "",
      placeholder: "Address 1",
    },
    {
      name: "address2",
      inputClass: "",
      placeholder: "Address 2",
    },
    {
      name: "city",
      inputClass: "",
      placeholder: "City",
    },
    {
      name: "country",
      inputClass: "",
      placeholder: "Country",
    },
    {
      name: "postalCode",
      inputClass: "",
      placeholder: "Postal Code",
    },
    {
      name: "phone",
      inputClass: "",
      placeholder: "Phone",
    },
  ];
  const onSubmit = async (formData: FormData) => {
    const valid = await form.trigger();
    if (!valid) return;
    let data = null;

    if (mode === "add") {
      data = await actions.addAddress(formData);
    } else {
      data = await actions.editAddress(formData);
    }

    console.log(data);
  };

  type editAddress =
    | "name"
    | "address1"
    | "address2"
    | "city"
    | "country"
    | "postalCode"
    | "phone";
  return (
    <Dialog>
      <DialogTrigger className={`mt-[12px] w-full transition-all bg-secondary font-roboto font-bold text-white py-10 px-[65px] md:px-[30px] hover:bg-secondaryhover ${triggerButtonClass}`}>
      {mode === "add" ? "Add" : "Edit"}
      </DialogTrigger>
      <DialogContent className="bg-white p-[12px]">
        <h3 className="font-semibold mb-[20px] text-[20px]">
          {mode === "add" ? "Add" : "Edit"} Address
        </h3>
        <Form {...form}>
          <form action={onSubmit} className="space-y-3">
            {inputs.map((input, i) => (
              <FormField
                control={form.control}
                key={input.name}
                name={input.name as editAddress}
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input
                        className={input.inputClass}
                        placeholder={input.placeholder}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-danger" />
                  </FormItem>
                )}
              />
            ))}
            <button
              type="submit"
              className={`w-full transition-all bg-[#333333] font-roboto font-bold text-white py-10 px-[65px] md:px-[30px] hover:bg-primaryhover `}
            >
              Submit
            </button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditAddress;
