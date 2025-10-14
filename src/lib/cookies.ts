"use client";

import Cookies from "js-cookie";

export const setCookie = (
  name: string,
  value: string,
  days = 30,
  opts: Partial<Cookies.CookieAttributes> = {}
) => Cookies.set(name, value, { expires: days, path: "/", sameSite: "Lax", ...opts });

export const getCookie = (name: string) => Cookies.get(name) ?? null;

export const delCookie = (name: string) => Cookies.remove(name, { path: "/" });
