import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="LWS Xstream Logo"
        className="h-6"
        width={150}
        height={32}
      />
    </Link>
  );
}
