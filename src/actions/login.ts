"use server";
interface loginState {
  email: string;
  password: string;
}
export async function login(formData: FormData): Promise<loginState> {
  console.log("data", formData);

  // return formData
  return {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
}
