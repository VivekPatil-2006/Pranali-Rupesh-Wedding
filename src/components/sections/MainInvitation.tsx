import GaneshVandana from "./GaneshVandana";
import CoupleSection from "./CoupleSection";
import SaveTheDate from "./SaveTheDate";
import EventSchedule from "./EventSchedule";
import HaldiCeremony from "./HaldiCeremony";
import WeddingCeremony from "./WeddingCeremony";
import VenueSection from "./VenueSection";
import Footer from "./Footer";
import SectionDivider from "../comman/SectionDivider";

export default function MainInvitation() {
  return (
    <>
      <>
  <GaneshVandana />

  <SectionDivider />

  <CoupleSection />

  <SectionDivider />

  <SaveTheDate />

  <SectionDivider />

  <EventSchedule />

  <HaldiCeremony />
  <div className="h-20" />

  <SectionDivider />

  <VenueSection />

  <Footer />
</>


    </>
  );
}