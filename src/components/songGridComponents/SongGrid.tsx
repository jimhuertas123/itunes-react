import { ErrorBoundary } from "react-error-boundary";

import { SongGridError } from "./SongGridError";
import { SongGridLoading } from "./SongGridLoading";
import { SongGridFullfilled } from "./SongGridFullfilled";

import { useSongs } from "../../hooks/useSongs";

type SongGridProps = {
  query: string;
  onClickSong: (song: any) => void;
};

export const SongGrid: React.FC<SongGridProps> = ({ query, onClickSong }) => {

  const { musicResponse, loading, error } = useSongs(query);

  if (loading) {
    return <SongGridLoading />;
  }

  if (error) {
    return <SongGridError message="Failed to load songs" />;
  }

  return (
    <ErrorBoundary fallback={<SongGridError message="An error occurred while fetching songs." />} >
        <SongGridFullfilled querySongs={musicResponse} onClickSong={onClickSong} />
    </ErrorBoundary>
  );
};
