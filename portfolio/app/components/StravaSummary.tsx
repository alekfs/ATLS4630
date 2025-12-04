// components/StravaSummary.tsx
"use client";

export default function StravaSummary() {
  return (
    <div className="strava-card">
      <iframe
        height="160"
        width="100%"
        frameBorder="0"
        allowTransparency={true}
        scrolling="no"
        src="https://www.strava.com/athletes/20006598/activity-summary/e2591f22d786b1873b3312b9f5d398244624cac6"
        title="Strava summary"
      />
      <small>Summary of my recent distance, time, and elevation.</small>
    </div>
  );
}
