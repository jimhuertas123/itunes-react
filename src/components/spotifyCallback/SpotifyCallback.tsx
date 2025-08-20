import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const SpotifyCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const error = urlParams.get('error');

    if (error) {
      console.error('Spotify authentication error:', error);
      navigate('/');
      return;
    }

    if (code) {
      fetch('/api/spotify-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('spotify_access_token', data.access_token);
          navigate('/');
        }
      })
      .catch(error => {
        console.error('Error exchanging code for token:', error);
        navigate('/');
      });
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2>Authenticating with Spotify...</h2>
        <p>Please wait while we complete your login.</p>
      </div>
    </div>
  );
}