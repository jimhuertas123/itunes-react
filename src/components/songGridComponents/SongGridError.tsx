import ErrorImg from "../../assets/error.png";

export const SongGridError = ({ message }: { message: string }) => {
    return (
        <div className="col-span-full text-center text-red-500">
            <img src={ErrorImg} alt="Error in SongGrid" className="mx-auto mb-4" style={{ maxWidth: "40vw"}} />
            {message}
        </div>
    );
}
