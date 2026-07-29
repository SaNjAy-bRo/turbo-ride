import Image from "next/image";

export default function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <Image
      src="/images/whatsapp-icon.svg"
      alt="Official WhatsApp"
      width={24}
      height={24}
      className={`inline-block object-contain ${className}`}
      unoptimized
    />
  );
}
