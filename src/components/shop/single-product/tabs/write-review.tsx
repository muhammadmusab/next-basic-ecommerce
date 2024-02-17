"use client";
import * as yup from "yup";
import Stars from "react-rating-stars-component";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import { Input } from "@/components/ui/form/input";
import { Label } from "@/components/ui/form/label";
import { Textarea } from "@/components/ui/form/textarea";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
//@ts-ignore
// import { useFormState } from "react-dom";
import * as actions from "@/actions";

const commentSchema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required(),
  rating: yup.number().required(),
  title: yup.string().required(),
  body: yup.string().required(),
});

const WriteReview = () => {
  
  const form = useForm({
    resolver: yupResolver(commentSchema),
    defaultValues: {
      name: "",
      email: "",
      rating: undefined,
      title: "",
      body: "",
    },
  });

  const inputs = [
    {
      name: "name",
      inputClass: "bg-transparent",
      placeholder: "Name",
      labelClass: "absolute top-[12px] left-0",
      component: Input,
    },
    {
      name: "email",
      inputClass: "bg-transparent",
      placeholder: "Email",
      labelClass: "absolute top-[12px] left-0",
      component: Input,
    },

    {
      name: "title",
      inputClass: "bg-transparent",
      placeholder: "Title of the review",
      labelClass: "absolute top-[12px] left-0",
      component: Input,
    },
    {
      name: "body",
      inputClass: "bg-transparent",
      placeholder: "Body of the review",
      labelClass: "absolute top-[12px] left-0",
      component: Textarea,
    },
    {
      name: "rating",
      title: "Rating",
      inputClass: "bg-transparent",
      labelClass: "absolute top-[12px] left-0",
      component: Stars,
    },
  ];
  const changeReviewHandler = (value: number) => {
    form.setValue("rating", value);
    return value;
  };
  const onSubmit = async (formData: FormData) => {
    try {
      // this will trigger validation of form
      const valid = await form.trigger();
      if (!valid) return;
      let rating = form.getValues("rating");
      formData.set("rating", rating.toString());
      const data = await actions.createComment(formData);
      console.log(data)
      // we will return error if there is any to show toast
      // if ('error' in data) {
      //   return toast.error(data?.error)
      // }
    } catch (error) {
      console.log(error);
      // return toast.error(error.message)
    }
  };
  return (
    <Form {...form}>
      <form action={onSubmit} className="space-y-8">
        {inputs.map((input, i) => (
          <FormField
            control={form.control}
            key={"review" + i}
            name={input.name as any}
            render={({ field, formState }) => (
              <FormItem className="relative">
                <FormLabel className={`${input.labelClass}`}></FormLabel>
                <FormControl>
                  {input.name !== "rating" ? (
                    <input.component
                      className={input.inputClass}
                      placeholder={input.placeholder}
                      {...field}
                    />
                  ) : (
                    <div className="flex items-center justify-between">
                      <Label
                        htmlFor={input.name}
                        className="opacity-50 mt-0 text-[16px]"
                      >
                        {input.title}
                      </Label>
                      <input.component
                        name={input.name}
                        className="mt-0"
                        value={field.value}
                        onChange={changeReviewHandler as any}
                        count={5}
                        activeColor="#22292F"
                        edit={true}
                        size={25}
                        isHalf={true}
                      />
                    </div>
                  )}
                </FormControl>
                <FormMessage className="text-danger" />
              </FormItem>
            )}
          />
        ))}
        <button
          type="submit"
          className="transition-all bg-primary font-roboto font-bold text-white py-10 px-[65px] md:px-[30px] hover:bg-primaryhover"
        >
          Submit Review
        </button>
      </form>
    </Form>
  );
};

export default WriteReview;
