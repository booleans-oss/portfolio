import fs from "fs/promises";
import path from "path";

export const alt = "Clement Lebon";
export const size = {
  width: 1200,
  height: 630,
};

export const runtime = "nodejs";

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale;
  const imageMap: Record<string, string> = {
    en: "og-en.png",
    fr: "og-fr.png",
  };
  const imageFilename = imageMap[locale] || imageMap.en;

  const imagePath = path.resolve(
    process.cwd(),
    "public",
    "images",
    imageFilename
  );

  try {
    await fs.access(imagePath);

    const imageBuffer = await fs.readFile(imagePath);

    return new Response(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Content-Length": imageBuffer.length.toString(),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error(`Error loading OG image for locale "${locale}":`, error);
    return new Response("Image not found", {
      status: 404,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
