import CaseStudyLayout from "../components/CaseStudyLayout";

export default function MusicPlayer() {
  return (
    <CaseStudyLayout
      title="Music Player"
      oneLiner="A Music Player Application created with React."
      techChipText="React · Firebase Auth · Tailwind CSS · Axios"
      siteLink="https://music-player-rp.vercel.app/"
      imageSrc="https://res.cloudinary.com/do8rpl9l4/image/upload/v1737356962/musicplayer_bnr4vg.png"
      imageAlt="Music Player interface"
      overview="A Music Player Application built using React + Vite. Experience seamless audio playback with search and playlist filtering in a lightweight, responsive interface."
      features={[
        "Play and listen to songs with real-time playback controls.",
        "Filter and discover tracks based on title or artist search.",
        "Toggle between all songs and curated top tracks.",
        "User authentication and profile handling via Firebase Auth.",
      ]}
      techStack={[
        { name: "React (Vite)", category: "Frontend" },
        { name: "Firebase Auth", category: "Auth" },
        { name: "Tailwind CSS", category: "Styling" },
        { name: "Axios", category: "HTTP Client" },
      ]}
    />
  );
}
