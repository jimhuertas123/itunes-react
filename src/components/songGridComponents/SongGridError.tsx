export const SongGridError = ({ message }: { message: string }) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-8">
            <div 
                className="w-32 h-32 rounded-2xl flex items-center justify-center mb-6"
                style={{
                    background: "rgba(239, 68, 68, 0.1)",
                    border: "1px solid rgba(239, 68, 68, 0.2)",
                    backdropFilter: "blur(20px)"
                }}
            >
                <svg 
                    className="w-16 h-16"
                    style={{ color: "#f87171" }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
                    />
                </svg>
            </div>
            
            <div className="text-center space-y-2 max-w-md">
                <h3 
                    className="text-xl font-semibold"
                    style={{ 
                        color: "#f87171",
                        textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"
                    }}
                >
                    Something went wrong
                </h3>
                <p 
                    className="text-sm leading-relaxed"
                    style={{ 
                        color: "#d1d5db",
                        textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)"
                    }}
                >
                    {message}
                </p>
                <button
                    className="mt-4 px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                    style={{
                        background: "rgba(239, 68, 68, 0.2)",
                        color: "#f87171",
                        border: "1px solid rgba(239, 68, 68, 0.3)",
                        backdropFilter: "blur(10px)"
                    }}
                    onClick={() => window.location.reload()}
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}
