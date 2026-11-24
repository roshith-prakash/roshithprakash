import CaseStudyLayout from "../components/CaseStudyLayout";

export default function SmartPower() {
  return (
    <CaseStudyLayout
      title="SmartPower"
      oneLiner="SmartPower was an IoT-based project that measured a consumer's electrical usage."
      techChipText="React Native · Node.js · Raspberry Pi · MySQL"
      imageSrc="https://res.cloudinary.com/do8rpl9l4/image/upload/v1736843699/smartpower1_h9zqby.png"
      imageAlt="SmartPower architectural overview"
      overview={[
        "The majority of the modern world depends on an energy delivery system that, according to the existing state of affairs, is ineffective and unable to keep up with expanding needs. SmartPower was developed as a smart metering system based on the 'smart grid' philosophy of having an interconnected network of measuring devices for utilities.",
        "The recording of energy consumption data is a tedious and time-consuming manual process, which has been automated in the developed system. The SmartPower system allows for digital transfer of energy consumption data at regular intervals and enables granular measurement and real-time visualization of electrical usage.",
        "The IoT-based system establishes a direct communication channel between consumers and providers, enabling users to view energy consumption in real time and anticipate future usage through predictive analytics.",
      ]}
      note="Note: The project has been dismantled and is no longer available to use."
      features={[
        "Eliminates the repeated manual task of recording power usage.",
        "Allows for granular storage of readings which can be later aggregated and analyzed.",
        "Allows users to view power consumption in real time.",
        "Graphical representation of historical and real-time usage data.",
        "Predictive algorithms for forecasting upcoming electrical usage.",
        "Remote appliance on/off toggling regardless of user location.",
      ]}
      techStack={[
        { name: "React Native", category: "Mobile Frontend" },
        { name: "Node JS + Express JS", category: "Backend" },
        { name: "MySQL", category: "Database" },
        { name: "Python", category: "Hardware Scripting" },
        { name: "Raspberry Pi", category: "Hardware / IoT" },
        { name: "Socket IO", category: "Realtime" },
      ]}
      extraSections={[
        {
          title: "Tasks Performed",
          items: [
            "Developed an IoT-based smart electricity meter to measure and store electrical usage using Raspberry Pi.",
            "Developed an Express-based server deployed on Google Cloud to handle automated telemetry ingestion and predictive analysis.",
            "Engineered a React Native mobile application for Android to display real-time telemetry, historical charts, and device controls.",
          ],
        },
      ]}
    />
  );
}
