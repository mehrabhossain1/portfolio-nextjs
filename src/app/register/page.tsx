"use client";

import { registerUser } from "@/utils/actions/registerUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export type UserData = {
  name: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const router = useRouter();

  const onSubmit = async (data: UserData) => {
    // console.log(data);

    try {
      const res = await registerUser(data);
      if (res.success) {
        toast.success("Registration Successful");
        router.push("/login");
      }
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl mb-5">
        Register <span className="text-sky-400">Now</span>
      </h1>
      <div className="flex justify-center">
        <div className="card w-[70%] h-[70%] shadow-xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body py-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sky-400">Full Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="User Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sky-400">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sky-400">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-sky-400 btn-outline">
                Register
              </button>
            </div>
            <p className="text-center">
              Already have an account?{" "}
              <Link className="text-sky-400" href="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
