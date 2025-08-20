"use client";

import { useEffect, useState } from "react";

export default function LocationPage() {
  const [locationData, setLocationData] = useState<{ lat: number; lng: number } | null>(null);
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

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">🌍 Welcome to My Website</h1>
      {locationData ? (
        <p className="text-lg">
          Your Location: <span className="font-semibold">{locationData.lat}, {locationData.lng}</span>
        </p>
      ) : error ? (
        <p className="text-lg text-red-200">{error}</p>
      ) : (
        <p className="text-lg animate-pulse">Requesting location access...</p>
      )}
    </main>
  );
}
