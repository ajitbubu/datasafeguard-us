"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function DataSafeguardersPage() {
  type Member = {
    name: string;
    role: string;
    image?: string;
  };

  type Group = {
    title: string;
    members: Member[];
  };

  const groups: Group[] = [
    {
      title: "Founding Team",
      members: [
        { name: "MR Sahu", role: "Chairman", image: "/people/MSahu.jpg" },
        {
          name: "Sudhir Sahu",
          role: "Founder & CEO",
          image:
            "https://cdn.prod.website-files.com/646e363f9c29e4860c52c851/64e3f0f1d5c03d1efddd0137_Sudhir-p-800.jpg",
        },
        { name: "Lee Nocon", role: "Chief Technology Officer" },
        { name: "Dr. Damodar Sahu", role: "Chief Growth Officer" },
        { name: "Swarnam Dash", role: "Product Manager" },
      ],
    },
    {
      title: "Leadership Team (USA)",
      members: [
        { name: "Tedra Chen", role: "Corporate Manager" },
        { name: "Sudhir Sahu", role: "Founder & CEO" },
        { name: "Lee C. Nocon", role: "Chief Technology Officer" },
        { name: "Dr. Damodar Sahu", role: "Chief Growth Officer" },
      ],
    },
    {
      title: "Leadership Team (India) & Advisory",
      members: [
        { name: "Sumeet Shah", role: "Technology Manager & Co-Founder" },
        { name: "Pranab Mohanty", role: "Chief Business Officer" },
        { name: "Mahi Gupta", role: "Director of Privacy Strategy" },
        { name: "Dr. Deepak Kumar Sahu", role: "Co-Founder" },
        { name: "N. S. Bala", role: "Executive Advisor" },
        { name: "Jay Como", role: "Financial Services Executive" },
        { name: "Joe Clemons", role: "Executive Advisor" },
        { name: "Dr. Amar Patnaik", role: "Senior Advisor" },
        { name: "Rameesh Kailasam", role: "Executive Advisor" },
        { name: "Kevin Jurovich", role: "Executive Advisor" },
        { name: "John Papazian", role: "Advisory Board Moderator" },
      ],
    },
  ];

  const tabNames = useMemo(() => ["All", ...groups.map((g) => g.title)], [groups]);
  const [activeTab, setActiveTab] = useState<string>(tabNames[0]);

  const visibleGroups = useMemo(() => {
    return activeTab === "All" ? groups : groups.filter((g) => g.title === activeTab);
  }, [activeTab, groups]);

  function initialsFrom(name: string) {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  }

  function MemberCard({ member, i, gi }: { member: Member; i: number; gi: number }) {
    const [imgError, setImgError] = useState(false);
    const showImage = !!member.image && !imgError;
    const localMap: Record<string, string> = {
      "mr sahu": "/people/MSahu.jpg",
      "sudhir sahu": "/people/sudhir.jpg",
      "lee nocon": "/people/lee.jpg",
      "lee c. nocon": "/people/lee.jpg",
      "dr. damodar sahu": "/people/damodar.jpg",
      "swarnam dash": "/people/swarn.png",
      "tedra chen": "/people/tedra.jpg",
    };
    const key = member.name.trim().toLowerCase();
    const imageSrc = !imgError ? localMap[key] ?? member.image : undefined;
    return (
      <motion.div
        key={`${gi}-${member.name}`}
        className="card group card-hover"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08 }}
      >
        <div className="flex items-center gap-4 md:gap-6">
          <div className="w-16 md:w-20 aspect-square rounded-full overflow-hidden flex items-center justify-center bg-gradient-primary ring-2 ring-primary/25 ring-offset-2 ring-offset-background">
            {imageSrc ? (
              <Image
                src={imageSrc as string}
                alt={`${member.name} photo`}
                width={80}
                height={80}
                className="w-full h-full object-cover rounded-full"
                priority={gi === 0 && i < 3}
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="text-white font-bold text-lg">{initialsFrom(member.name)}</span>
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">{member.name}</h3>
            <p className="text-muted-foreground text-sm">{member.role}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-gradient mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Data Safeguarders
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Meet the dedicated experts behind our comprehensive data protection and compliance solutions. 
          Our team combines decades of experience in cybersecurity, privacy engineering, and regulatory compliance.
        </motion.p>
      </section>

      {/* Team Sections */}
      {/* Controls */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-4">
          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {tabNames.map((tab) => {
              const active = activeTab === tab;
              return (
                <motion.button
                  key={tab}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 text-sm rounded-full border transition-colors whitespace-nowrap ${
                    active
                      ? "bg-primary text-white border-primary"
                      : "bg-transparent text-foreground border-border hover:bg-primary/10"
                  }`}
                >
                  {tab}
                </motion.button>
              );
            })}
          </div>

          {/* Search removed */}
        </div>
      </section>

      {/* Team Sections */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        {visibleGroups.map((group, gi) => (
          <div key={group.title} className={gi === 0 ? "" : "mt-14"}>
            <h2 className="text-2xl font-bold mb-6">{group.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {group.members.length === 0 ? (
                <p className="text-muted-foreground">No matching members in this group.</p>
              ) : (
                group.members.map((member, i) => (
                  <MemberCard key={`${group.title}-${member.name}`} member={member} i={i} gi={gi} />
                ))
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          className="bg-gradient-cta rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Security Team
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for talented security professionals to join our mission of protecting data worldwide.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
            View Open Positions
          </button>
        </motion.div>
      </section>
    </div>
  );
}