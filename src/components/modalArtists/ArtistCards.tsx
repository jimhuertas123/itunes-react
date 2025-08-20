import { useArtists } from "../../hooks/useArtists"
import { ArtistCardsError, ArtistCardsLoading } from "./ArtistCardsStatus"

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const ArtistCards = ({ artistsId }: { artistsId: Array<string> })=>{

    const { artists, error, loading } = useArtists(artistsId)

    if (loading) return <ArtistCardsLoading/>
    if (error) return <ArtistCardsError message={"Error loading artist cards"}/>
    if (!artists) return <ArtistCardsError message={"No artists found"}/>

    const handleOpenSpotifyArtistClick = (link: string ) => {
        window.open(link, '_blank');
    };

    return (
        <div className="space-y-4">
            {/*artists section*/}
            <div>
                <div className="flex mt-3 justify-start flex-wrap gap-3">
                    {artists.map(artist => (
                        <div 
                            key={artist.id} 
                            className="flex items-center p-1 rounded-xl transition-all duration-200 hover:scale-105 relative group"
                            style={{
                                minWidth: "fit-content"
                            }}
                        >
                            <div className="relative" onClick={() => handleOpenSpotifyArtistClick(artist.url_profile)}>
                                <img
                                    src={artist.imageUrl}
                                    alt={`Artist ${artist.name}`}
                                    className="w-12 h-12 rounded-full object-cover cursor-pointer"
                                    style={{
                                        border: "2px solid rgba(255, 255, 255, 0.2)",
                                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
                                    }}
                                />
                                {/* hover for show name */}
                                <div 
                                    className="absolute inset-0 rounded-full opacity-20"
                                    style={{
                                        background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.5), transparent 70%)"
                                    }}
                                />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10"
                                    style={{
                                        background: "rgba(0, 0, 0, 0.8)",
                                        color: "#ffffff",
                                        backdropFilter: "blur(10px)",
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
                                    }}
                                >
                                    {artist.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/*gender section */}
            <div>
                <h3 className="text-white font-semibold mb-3 text-sm">Genres</h3>
                <div className="flex flex-wrap gap-2">
                    {(artists[0].gender && artists[0].gender.some(g => g && g.trim() !== ""))
                    ? (artists[0].gender
                        .filter(gender => gender && gender.trim() !== "")
                        .map((gender, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105"
                                style={{
                                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
                                    color: "#e5e7eb",
                                    border: "1px solid rgba(59, 130, 246, 0.3)",
                                    backdropFilter: "blur(10px)",
                                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"
                                }}
                            >
                                {capitalize(gender)}
                            </span>
                        )))
                    : (<span
                            className="px-3 py-1.5 rounded-full text-xs font-medium"
                            style={{
                                background: "rgba(107, 114, 128, 0.3)",
                                color: "#9ca3af",
                                border: "1px solid rgba(107, 114, 128, 0.4)",
                                backdropFilter: "blur(10px)"
                            }}
                        >
                            Unknown
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}
