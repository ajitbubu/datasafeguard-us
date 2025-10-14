"use client";

import { useEffect } from "react";
import { setCookie } from "@/lib/cookies";

export default function ProductClient() {
    useEffect(() => {
        // Set preference cookie for product page visits
        setCookie("ds_product_view", "1", 90);

        // Set tracking cookie for product interactions
        setCookie("ds_product_tracking", "enabled", 60);

        // Set user preference cookie for product filters
        const lastVisit = new Date().toISOString();
        setCookie("ds_last_product_visit", lastVisit, 180);

        // Set performance tracking cookie
        setCookie("ds_product_performance", "tracked", 30, {
            sameSite: "lax",
            secure: true,
        });

        console.log("Product page cookies initialized");
    }, []);

    return null;
}
