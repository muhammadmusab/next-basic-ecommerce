"use client";
import * as yup from "yup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/form/radio-group";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as actions from "@/actions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import useFilter from "@/hooks/useFilter";
const orderFilterSchema = yup.object({
  status: yup.string().required('Required'),
  time: yup.string().required('Required'),
});

const OrderFilters = () => {
  //   const router = useRouter();
  //   const pathname = usePathname();
  //   const { createQueryString } = useFilter();
  const searchParams = useSearchParams();
  //   const params = new URLSearchParams(searchParams as any);
  const form = useForm({
    resolver: yupResolver(orderFilterSchema),
    defaultValues: {
      status: "",
      time: "",
    },
  });

  const inputs = [
    {
      name: "status",
      inputClass: "bg-transparent",
      label: "Status",
      labelClass: "absolute top-[12px] left-0",
      options: [
        {
          label: "All",
          value: "all",
        },
        {
          label: "On the way",
          value: "on-the-way",
        },
        {
          label: "Delivered",
          value: "delivered",
        },
        {
          label: "Cancelled",
          value: "cancelled",
        },
        {
          label: "Returned",
          value: "returned",
        },
      ],
    },
    {
      name: "time",
      inputClass: "bg-transparent",
      label: "Time",
      labelClass: "absolute top-[12px] left-0",
      options: [
        {
          label: "Any Time",
          value: "any-time",
        },
        {
          label: "Last 30 days",
          value: "thirty-days-old",
        },
        {
          label: "Last 6 months",
          value: "six-months-old",
        },
        {
          label: "Last Year",
          value: "last-year",
        },
      ],
    },
  ];
  const onSubmit = async (formData: FormData) => {
    try {
      // this will trigger validation of form
      const valid = await form.trigger();
      if (!valid) return;

      const data = await actions.createOrderFilter(formData);
      console.log(data);
      //   TODO: set the query values on url of the current page so that if user reloads the page previous data should re-fetch the orders based on previous values selected
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
      <form action={onSubmit} className="w-full space-y-6">
        {inputs.map((input) => (
          <FormField
            key={input.label}
            control={form.control}
            name={input.name as "status" | "time"}
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>{input.label}</FormLabel>
                <FormControl>
                  <RadioGroup
                    name={input.name as "status" | "time"}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {input.options.map((option) => (
                      <FormItem
                        key={option.value}
                        className="flex items-center space-x-3 space-y-0"
                      >
                        <FormControl>
                          <RadioGroupItem value={option.value} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {option.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage className="text-danger" />
              </FormItem>
            )}
          />
        ))}
        <button
          className="bg-black text-white hover:bg-gray-600 px-4 py-2 w-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </Form>
  );
};

export default OrderFilters;
