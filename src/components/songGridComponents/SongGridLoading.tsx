export const SongGridLoading = () => {
    return (
        <div className="col-span-full text-center flex flex-col items-center mt-4">
            <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="mt-2 text-gray-500">Loading...</span>
        </div>
    );
}
