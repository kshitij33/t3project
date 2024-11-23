import Link from "next/link";


const mockUrls = [
  "https://utfs.io/f/c2TYd4HIl9iXdMjLO4PZrcVbzSEUnOlgAtH0foiIC3DQJmGs",
  "https://utfs.io/f/c2TYd4HIl9iXCTroWPZGDh8YzTMtmOcgSsobJLjeINidP4ul",
  "https://utfs.io/f/c2TYd4HIl9iXP2QRgyBlX7Lfiz4mUgypWY3otewqrK2NCE0S",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
