// components/StravaActivity.tsx
"use client";

export default function StravaActivity() {
  return (
    <div className="strava-card">
      <iframe
        height="454"
        width="100%"
        frameBorder="0"
        allowTransparency={true}
        scrolling="no"
        src="https://www.strava.com/athletes/20006598/latest-rides/e2591f22d786b1873b3312b9f5d398244624cac6"
        title="Latest rides"
      />
      <small>Live feed of my latest rides from Strava.</small>
    </div>
  );
}
