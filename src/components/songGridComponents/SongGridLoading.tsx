export const SongGridLoading = () => {
    return (
        <div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
            style={{ padding: "1rem 0" }}
        >
            {Array.from({ length: 10 }).map((_, i) => (
                <div
                    key={i}
                    className="rounded-2xl overflow-hidden animate-pulse"
                    style={{
                        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(20px)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)"
                    }}
                >
                    {/* Album image skeleton */}
                    <div 
                        className="w-full aspect-square"
                        style={{ background: "rgba(255, 255, 255, 0.1)" }}
                    />
                    
                    {/* Content skeleton */}
                    <div className="p-4 space-y-3">
                        {/* Title skeleton */}
                        <div 
                            className="h-4 rounded"
                            style={{ 
                                background: "rgba(255, 255, 255, 0.1)",
                                width: "85%"
                            }}
                        />
                        
                        {/* Artist skeleton */}
                        <div 
                            className="h-3 rounded"
                            style={{ 
                                background: "rgba(255, 255, 255, 0.08)",
                                width: "70%"
                            }}
                        />
                        
                        {/* Rating bar skeleton */}
                        <div className="flex items-center gap-2 pt-1">
                            <div 
                                className="flex-1 h-2 rounded-full"
                                style={{ background: "rgba(255, 255, 255, 0.08)" }}
                            />
                            <div 
                                className="w-8 h-3 rounded"
                                style={{ background: "rgba(255, 255, 255, 0.08)" }}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
