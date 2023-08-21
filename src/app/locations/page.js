import Footer from "@/components/Footer/Footer";
import LocationComponent from "@/components/LocationComponent/LocationComponent";
const locations = [
  {
    name: "Canada",
    loc: [43.647111, -79.380449],
    contact: "+1 253-863-8967",
    email: "contact@designo.co",
    locTag: "Central",
    address1: "3886 Wellington Street",
    address2: "Toronto, Ontario M9C 3J5",
  },
  {
    name: "Australia",
    loc: [-30.329525, 149.788194],
    contact: "+61 2 8376 6284",
    email: "contact@designo.co",
    locTag: "AU",
    address1: "19 Balonne Street",
    address2: "New South Wales 2443",
    reverse: true,
  },
  {
    name: "United Kingdom",
    loc: [53.710638, -1.340266],
    contact: "+61 2 8376 6284",
    email: "contact@designo.co",
    locTag: "UK",
    address1: " 13 Colorado Way",
    address2: "Rhyd-y-fro SA8 9GA",
  },
];
const Locations = () => {
  return (
    <>
      <div className="z-10 mx-auto flex w-full  flex-col gap-[26px] lg:w-[1111px]">
        {locations.map((location) => (
          <LocationComponent
            name={location.name}
            loc={location.loc}
            contact={location.contact}
            email={location.email}
            locTag={location.locTag}
            address1={location.address1}
            address2={location.address2}
            reverse={location.reverse}
            key={location.name}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Locations;
