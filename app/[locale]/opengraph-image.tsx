
export const alt = "Clement Lebon";
export const size = {
  width: 1200,
  height: 630,
};

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

  const imagePath = `/images/${imageFilename}`;

  const imageUrl = `https://clementlbn.com/${imagePath}`;

  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch image: ${response.status} ${response.statusText}`
      );
    }

    const imageBuffer = await response.arrayBuffer();

    return new Response(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Content-Length": Buffer.from(imageBuffer).length.toString(),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error(`Error fetching OG image for locale "${locale}":`, error);
    return new Response("Image not found", {
      status: 404,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
