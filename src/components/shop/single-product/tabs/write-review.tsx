"use client";

import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import { Input } from "@/components/ui/form/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
const formSchema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required(),
  rating: yup.number().required().nullable(),
  title: yup.string().required(),
  body: yup.string().required(),
  
});

const WriteReview = () => {
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      rating:null,
      title:"",
      body:""
    },
  });

  type formSchemaType = yup.InferType<typeof formSchema>;

  function onSubmit(values: formSchemaType) {
    console.log(values);
  }
  const inputs = [
    {
      name: "name",
      inputClass: "pl-25",
      placeholder: "Name",
      labelClass: "absolute top-[12px] left-0",
    },
    {
      name: "email",
      inputClass: "pl-25",
      placeholder: "Email",
      labelClass: "absolute top-[12px] left-0",
    },
    {
      name: "rating",
      inputClass: "pl-25",
      labelClass: "absolute top-[12px] left-0",
    },
    {
      name: "title",
      inputClass: "pl-25",
      placeholder: "Title of the review",
      labelClass: "absolute top-[12px] left-0",
    },
    {
      name: "body",
      inputClass: "pl-25",
      placeholder: "Body of the review",
      labelClass: "absolute top-[12px] left-0",
    },
  ];
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {inputs.map((input) => (
          <FormField
            control={form.control}
            key={uuidv4()}
            name={input.name as any}
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className={`${input.labelClass}`}></FormLabel>
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
        <button className="transition-all bg-primary font-roboto font-bold text-white py-10 px-[65px] md:px-[30px] hover:bg-primaryhover">
          Submit Review
        </button>
      </form>
    </Form>
  );
};

export default WriteReview;
