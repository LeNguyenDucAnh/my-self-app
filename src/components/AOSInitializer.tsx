"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);
  return null;
}
