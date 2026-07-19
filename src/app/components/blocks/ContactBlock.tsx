import SectionHeading from "./SectionHeading";

type ContactBlockProps = {
  eyebrow?: string;
  title: string;
  email: string;
  phone: string;
  address: string;
};

export default function ContactBlock({ eyebrow, title, email, phone, address }: ContactBlockProps) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="flex flex-col gap-6 justify-center text-base sm:text-lg">
        <div>
          <span className="block text-xs sm:text-sm uppercase tracking-wide text-black/40 mb-1">Email</span>
          <a href={`mailto:${email}`} className="font-semibold hover:text-primary transition-colors">
            {email}
          </a>
        </div>
        <div>
          <span className="block text-xs sm:text-sm uppercase tracking-wide text-black/40 mb-1">Phone</span>
          <a href={`tel:${phone.replace(/\s+/g, "")}`} className="font-semibold hover:text-primary transition-colors">
            {phone}
          </a>
        </div>
        <div>
          <span className="block text-xs sm:text-sm uppercase tracking-wide text-black/40 mb-1">Studio</span>
          <span className="font-semibold">{address}</span>
        </div>
      </div>
    </div>
  );
}
