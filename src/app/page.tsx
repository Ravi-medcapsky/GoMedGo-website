"use client";
import HomePage from "@/components/Home";
import { useEffect, useState } from "react";

export default function Home() {
  const [locationData, setLocationData] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationData({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  const sendLocationData = async () => {
    if (locationData) {
      try {
        const response = await fetch("/api/location", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(locationData),
        });

        if (!response.ok) {
          throw new Error("Failed to send location data");
        }

        const result = await response.json();
        console.log("Location data sent successfully:", result);
      } catch (error) {
        console.error("Error sending location data:", error);
      }
    }
  };

  return (
    <>
      <HomePage />
      {/* <LocationPage /> */}
    </>
  );
}
