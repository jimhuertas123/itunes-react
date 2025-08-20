
export const ArtistCardsError = ({message}: {message: string}) => {
    return (
        <div className="space-y-4">
            <div 
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{
                    background: "rgba(239, 68, 68, 0.1)",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                    backdropFilter: "blur(10px)"
                }}
            >
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                </div>
                <span className="text-red-300 font-medium text-sm">{message}</span>
            </div>
        </div>
    )
}

export const ArtistCardsLoading = ()=>{
    return (
        <div className="space-y-4">
            {/* artists */}
            <div>
                <h3 className="text-white font-semibold mb-3 text-sm">Artists</h3>
                <div className="flex gap-3">
                    {[1, 2].map((i) => (
                        <div 
                            key={i}
                            className="flex w-12 h-12 rounded-full animate-pulse"
                            style={{
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)"
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* genres */}
            <div>
                <h3 className="text-white font-semibold mb-3 text-sm">Genres</h3>
                <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                        <div 
                            key={i}
                            className="h-7 w-16 rounded-full animate-pulse"
                            style={{ background: "rgba(255, 255, 255, 0.1)" }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}