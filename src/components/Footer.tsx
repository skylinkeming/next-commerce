import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="">
      {/* TOP */}
      <div className="">
        {/* LEFT */}
        <div className="w-1/4">
          <Link href="/">
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <p>
            3252 Winding Way, Central Plaze, Willowbrook, CA 90210, United
            States
            <span>hello@lama.dev</span>
            <span>+1 234 567 890</span>
            <div className="flex gap-6"></div>
          </p>
        </div>
        {/* CENTER */}
        <div className="w-1/2"></div>
        {/* RIGHT */}
        <div className="w-1/4"></div>
      </div>
    </div>
  );
}
