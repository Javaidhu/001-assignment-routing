import Link from "next/link";

export default function App() {
  return (
    <div className="bg-slate-300  gap-4 flex text-justify">
      <ul >
        <li><Link href="/country/pakistan">Pakistan</Link></li>
        <li><Link href="/country/india">India</Link></li>
        <li><Link href="/country/china">China</Link></li>
        <li><Link href="/country/bangladesh">Bangladesh</Link></li>
        <li><Link href="/country/nepal">Nepal</Link></li>
        <li><Link href="/country/singapore">Singapore</Link></li>
        <li><Link href="/country/malaysia">Malaysia</Link></li>
        <li><Link href="/country/australia">Australia</Link></li>
        <li><Link href="/country/newzealand">New Zealand</Link></li>
      </ul>
    </div>
  );
}
