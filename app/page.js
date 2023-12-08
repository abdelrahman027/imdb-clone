
import Results from "@/components/Results";

const API_KEY = process.env.API_KEY
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/day"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 1000 } }
  );

  if (!res.ok)
  {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

  const data = await res.json();
  const results = data.results;


  return (
    <main className="py-8 px-4" >
      <Results results={results} />
    </main >
  )
}
