import Image from "next/image";
import TrustedBy from "./components/TrustedBy";
import Hero from "./components/Hero";
import WorksTogether from "./components/WorksTogether";
import Reviews from "./components/Review";
import Tabs from "./components/Tab";
import Campaigns from "./components/Campaigns";
import Development from "./components/Development";
import SuccessStory from "./components/SuccessStory";
import LetExpedify from "./components/LetExpedify";
import BookDemoNowForm from "./components/BookDemoNowForm";

export default function Home() {
  return (
    <>
     <Hero/>
     <BookDemoNowForm/>
     <TrustedBy />
     <WorksTogether/>
     <Campaigns />
     <Development/>
     <Tabs/>
     <SuccessStory/>
     <Reviews/>
     <LetExpedify/>
    </>
  );
}
