"use client";

import { useState } from "react";
import { FaDownload, FaSpinner } from "react-icons/fa";

export default function DownloadCV() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/download-cv');

      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "CV-Muhammad-Fajar-Anshori.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading CV:", error);
      alert("Maaf, terjadi kesalahan saat menghasilkan CV. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading}
      className="group inline-flex items-center gap-3 px-6 py-3 bg-[#2563eb] text-white rounded-lg font-medium hover:bg-[#3b82f6] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#2563eb]/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
    >
      {isLoading ? (
        <FaSpinner size={18} className="animate-spin" />
      ) : (
        <FaDownload size={18} className="transition-transform duration-300 group-hover:scale-110" />
      )}
      {isLoading ? "Generating..." : "Download CV"}
    </button>
  );
}