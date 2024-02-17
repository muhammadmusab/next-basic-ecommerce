"use server";
interface registerState {
  name: string;
  email: string;
  password: string;
}
export async function register(formData: FormData): Promise<registerState> {
  console.log("data", formData);

  // return formData
  return {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
}
