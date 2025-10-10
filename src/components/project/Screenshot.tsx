"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ScreenshotProps = {
  url: string;
};

export default function Screenshot({ url }: ScreenshotProps) {
  const [imgUrl, setImgUrl] = useState<string>("/images/placeholder.png");

  useEffect(() => {
    async function getScreenshot() {
      try {
        const res = await fetch(
          `https://api.microlink.io/?url=${encodeURIComponent(
            url
          )}&screenshot=true&meta=false`
        );
        const data = await res.json();
        if (data.screenshot?.url) {
          setImgUrl(data.screenshot.url);
        }
      } catch (err) {
        console.error("Erro ao buscar screenshot:", err);
      }
    }

    getScreenshot();
  }, [url]);

  return (
    <Image
      src={imgUrl}
      alt="Screenshot"
      width={600}
      height={400}
      className="rounded-lg object-cover"
      unoptimized={true} // necessário para URLs externas
    />
  );
}
