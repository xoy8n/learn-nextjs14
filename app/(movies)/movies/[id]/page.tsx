import MovieVideos from "../../../../components/movie-videos";
import MovieInfo from "../../../../components/movie-info";
import { Suspense } from "react";
//병렬적으로 fetch를 하는 방법
//1. Promise.all()
//2. <Suspense fallback={}></Suspense>
//Page 단위 로딩 => loading.tsx
//서버 컴포넌트 단위 로딩 => Suspense
// To-do : suspense사용해서 스켈레톤 만들기

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
