import ErrorImg from "../../assets/error.png";

export const SongGridError = () => {
    return (
        <div className="col-span-full text-center text-red-500">
            <img src={ErrorImg} alt="Error" className="mx-auto mb-4" />
            An error occurred while fetching songs.
        </div>
    );
}
