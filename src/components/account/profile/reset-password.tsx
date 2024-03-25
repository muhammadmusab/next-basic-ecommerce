import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/modal";
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
const passwordSchema = yup.object({
  oldPassword: yup.string().required('Required'),
  newPassword: yup.string().required('Required'),
  confirmPassword: yup.string().required('Required'),
});

const ResetPassword = () => {
  const form = useForm({
    resolver: yupResolver(passwordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const inputs = [
    {
      name: "oldPassword",
      inputClass: "pl-25",
      placeholder: "Old Password",
    },
    {
      name: "newPassword",
      inputClass: "pl-25",
      placeholder: "New Password",
    },
    {
      name: "confirmPassword",
      inputClass: "pl-25",
      placeholder: "Confirm Password",
    },
  ];
  const onSubmit = async (formData: FormData) => {
    const valid = await form.trigger();
    if (!valid) return;
    const data = await actions.resetPassword(formData);
    console.log(data);
  };
  return (
    <Dialog>
      <DialogTrigger className="mt-[12px] w-full transition-all bg-secondary font-roboto font-bold text-white py-10 px-[65px] md:px-[30px] hover:bg-secondaryhover">
        Change Password
      </DialogTrigger>
      <DialogContent className="bg-white p-[12px]">
        <h3 className="font-semibold mb-[20px] text-[20px]">Change Password</h3>
        <Form {...form}>
          <form action={onSubmit} className="space-y-8">
            {inputs.map((input, i) => (
              <FormField
                control={form.control}
                key={input.name}
                name={input.name}
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
            <button type="submit" className="w-full transition-all bg-[#333333] font-roboto font-bold text-white py-10 px-[65px] md:px-[30px] hover:bg-primaryhover">
              Change
            </button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ResetPassword;
