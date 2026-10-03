import { SectionHeading } from "@/components/site/SectionLabel";

export function NetworkMap({ index = "08" }: { index?: string }) {
  return (
    <section className="network section-y" aria-labelledby="network-title">
      <div className="container-x">
        <SectionHeading
          index={index}
          label="Our Sri Lanka network"
          id="network-title"
          title={<>Working with businesses<br />across Sri Lanka.</>}
          intro="We work with the Sri Lankan operations of local and international brands, delivering engineering solutions for factories, hospitals, hotels, retail spaces and commercial facilities."
        />
      </div>
    </section>
  );
}
