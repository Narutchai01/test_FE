"use client";

import React from "react";
import { axiosInstance } from "@/lib/axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const User = () => {
  const [user, setUser] = useState([]);
  const router = useRouter();

  const getUser = async () => {
    try {
      const res = await axiosInstance.get("/api/user/getuser");
      setUser(res.data);
    } catch (error: any) {
      const { response } = error;
      if (response.status === 401) {
        router.push("/Login");
      }
    }
  };

  useEffect(() => {
    getUser();
  });

  return (
    <>
      <h1>Get User</h1>
    </>
  );
};

export default User;
