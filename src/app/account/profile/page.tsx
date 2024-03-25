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
import { Input } from "@/components/ui/form/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as actions from "@/actions";
import { DatePicker } from "@/components/ui/datepicker";
import { RadioGroup, RadioGroupItem } from "@/components/ui/form/radio-group";
import ResetPassword from "@/components/account/profile/reset-password";

const profileSchema = yup.object({
  name: yup.string().required('Required'),
  mobile: yup.string().required('Required'),
  email: yup.string().email().required('Required'),
  gender: yup.string().required('Required').oneOf(["male", "female"]),
  dateOfBirth: yup.string().required('Required'),
  location: yup.string().required('Required'),
});

const Profile = () => {
  
  const form = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      gender: undefined,
      dateOfBirth: "",
      location: "",
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
      name: "mobile",
      inputClass: "bg-transparent",
      placeholder: "Mobile Number",
      labelClass: "absolute top-[12px] left-0",
      component: Input,
    },
    {
      name: "gender",
      inputClass: "bg-transparent",
      placeholder: "Mobile Number",
      labelClass: "text-gray",
      component: RadioGroup,
      // label:'Gender',
      options: [
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        },
      ],
    },
    {
      name: "dateOfBirth",
      inputClass: "bg-transparent",
      placeholder: "Date Of Birth",
      labelClass: "absolute top-[12px] left-0",
      component: DatePicker,
    },
    {
      name: "location",
      inputClass: "bg-transparent",
      placeholder: "Location",
      labelClass: "absolute top-[12px] left-0",
      component: Input,
    },
  ];

  const onSubmit = async (formData: FormData) => {
    try {
      // this will trigger validation of form
      const valid = await form.trigger();
      if (!valid) return;
      let dateOfBirth = form.getValues("dateOfBirth");
      formData.set("dateOfBirth", dateOfBirth);

      const data = await actions.updateProfile(formData);
      console.log("data-------", data);
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
    <div className="w-[60%] md:w-full border border-[#ccc] p-4">
      <Form {...form}>
        <form action={onSubmit} className="space-y-8">
          {inputs.map((input, i) => (
            <FormField
              control={form.control}
              key={"review" + i}
              name={input.name as any}
              render={({ field, formState }) => (
                <FormItem className="relative">
                  <FormLabel className={`${input.labelClass}`}>
                    {input.label}
                  </FormLabel>
                  {input.name !== "dateOfBirth" && (
                    <FormControl>
                      <input.component
                        className={input.inputClass}
                        placeholder={input.placeholder}
                        {...field}
                      />
                    </FormControl>
                  )}
                  {input.name === "dateOfBirth" && (
                    <FormControl>
                      <input.component
                        field={field}
                        onSelect={field.onChange}
                        label="Pick DOB"
                      />
                    </FormControl>
                  )}
                  {input.name === "gender" && (
                    <FormControl>
                      <input.component
                        name={input.name as any}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-y-1"
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
                      </input.component>
                    </FormControl>
                  )}
                  <FormMessage className="text-danger" />
                </FormItem>
              )}
            />
          ))}
          <button
            type="submit"
            className="w-full transition-all bg-primary font-roboto font-bold text-white py-10 px-[65px] md:px-[30px] hover:bg-primaryhover"
          >
            Submit
          </button>
        </form>
      </Form>
     <ResetPassword/>
    </div>
  );
};

export default Profile;
