import React from 'react';
import Link from 'next/link'; // or 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="flex flex-col items-left gap-y-4 p-5">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/user">User</Link></li>
        <li><Link href="/feedback">Feedback</Link></li>
      </ul>
    </div>
  );
}
